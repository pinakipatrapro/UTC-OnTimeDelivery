var Fuse = require('fuse.js');
const { ActivityTypes, CardFactory } = require('botbuilder');
const { LuisRecognizer } = require('botbuilder-ai');
const { DialogSet, DialogTurnStatus, TextPrompt } = require('botbuilder-dialogs');
const { IntentRouter } = require('./util/intentRouter');
var intentRouter = new IntentRouter();

const { serviceMetadata } = require('./backendModel/metadata');

const DIALOG_STATE_PROPERTY = 'dialogState';
const USER_PROFILE_PROPERTY = 'userProfileProperty';

const LUIS_CONFIGURATION = 'UTC-VA-Query-Parser';

class BasicBot {

  constructor(conversationState, userState, botConfig) {

    const luisConfig = botConfig.findServiceByNameOrId(LUIS_CONFIGURATION);
    if (!luisConfig || !luisConfig.appId) throw ('Missing LUIS configuration. Please follow README.MD to create required LUIS applications.\n\n');
    this.luisRecognizer = new LuisRecognizer({
      applicationId: luisConfig.appId,
      azureRegion: luisConfig.region,
      endpointKey: luisConfig.authoringKey
    });

    this.userProfileAccessor = userState.createProperty(USER_PROFILE_PROPERTY);
    this.dialogState = conversationState.createProperty(DIALOG_STATE_PROPERTY);

    this.dialogs = new DialogSet(this.dialogState);
    this.dialogs.add(new TextPrompt('namePrompt'));

    this.conversationState = conversationState;
    this.userState = userState;

    this.queryState = {
      status: 'new'
    }
  }


  async onTurn(context) {

    if (context.activity.type === ActivityTypes.Message) {
      let dialogResult; 

      const results = await this.luisRecognizer.recognize(context);
      const topIntent = LuisRecognizer.topIntent(results);

      
      // await context.sendActivity(this.parseMetadata(results,topIntent,context));
      await this.parseMetadata(results,topIntent,context)

    }
    this.queryState.status = Math.random();
    await this.conversationState.saveChanges(context);
    await this.userState.saveChanges(context);
  }

  async parseMetadata(results,topIntent,context){
    
    var aMeasures = results.entities.measure;
    var aDimension = results.entities.dim;
    if(topIntent === 'measurebydimension'){
      var result = await this.parseIntentmeasurebydimension(aMeasures[0],aDimension[0],context);
    }
    if(topIntent === 'totalmeasure'){
      var result = await this.parseIntentmeasurebydimension(aMeasures[0],context);
    }
  }

  async parseIntentmeasurebydimension(measure,dimension,context){
    var options = {
      shouldSort: true,
      threshold: 0.3,
      includeScore: true,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "_sap:label"
    ]
    };
    var formattedDimension = this.fuseSearch(serviceMetadata.Property, options, dimension);
    var formattedMeasure   = this.fuseSearch(serviceMetadata.Property, options, measure);

    var result = await intentRouter.measurebydimension(formattedMeasure,formattedDimension);
    await context.sendActivity(result);
  }

  async parseIntenttotalmeasure(measure,context){
    var options = {
      shouldSort: true,
      threshold: 0.3,
      includeScore: true,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "_sap:label"
    ]
    };
    var formattedMeasure   = this.fuseSearch(serviceMetadata.Property, options, measure);

    var result = await intentRouter.totalmeasure(formattedMeasure);
    await context.sendActivity(result);
  }

  fuseSearch(list,options,searchString){
    var fuse = new Fuse(serviceMetadata.Property, options);  
    var result = fuse.search(searchString);
    
    return result[0].item;
  }





}

module.exports.BasicBot = BasicBot;