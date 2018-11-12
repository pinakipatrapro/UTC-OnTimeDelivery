
const { ActivityTypes, CardFactory } = require('botbuilder');
const { LuisRecognizer } = require('botbuilder-ai');
const { DialogSet, DialogTurnStatus,TextPrompt } = require('botbuilder-dialogs');
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

    this.queryState  = {
      status : 'new'
    }
  }


  async onTurn(context) {

    if (context.activity.type === ActivityTypes.Message) {
      let dialogResult;
      const dc = await this.dialogs.createContext(context);

      const results = await this.luisRecognizer.recognize(context);
      const topIntent = LuisRecognizer.topIntent(results);
      
      var fetchProduct = await intentRouter.fetchProducts(context);
      await context.sendActivity(fetchProduct);

    }
    this.queryState.status = Math.random();
    await this.conversationState.saveChanges(context);
    await this.userState.saveChanges(context);
  }



}

module.exports.BasicBot = BasicBot;