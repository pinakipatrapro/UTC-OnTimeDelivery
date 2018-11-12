
const { ActivityTypes, CardFactory } = require('botbuilder');
const { LuisRecognizer } = require('botbuilder-ai');
const { DialogSet, DialogTurnStatus,TextPrompt } = require('botbuilder-dialogs');
const { IntentRouter } = require('./util/intentRouter');
var intentRouter = new IntentRouter();

 // State Accessor Properties
const DIALOG_STATE_PROPERTY = 'dialogState';
const USER_PROFILE_PROPERTY = 'userProfileProperty';
 
const LUIS_CONFIGURATION = 'UTC-VA-Query-Parser';
 
class BasicBot {
  
  constructor(conversationState, userState, botConfig) {

    // Add the LUIS recognizer.
    const luisConfig = botConfig.findServiceByNameOrId(LUIS_CONFIGURATION);
    if (!luisConfig || !luisConfig.appId) throw ('Missing LUIS configuration. Please follow README.MD to create required LUIS applications.\n\n');
    this.luisRecognizer = new LuisRecognizer({
      applicationId: luisConfig.appId,
      azureRegion: luisConfig.region,
      endpointKey: luisConfig.authoringKey
    });

    // Create the property accessors for user and conversation state
    this.userProfileAccessor = userState.createProperty(USER_PROFILE_PROPERTY);
    this.dialogState = conversationState.createProperty(DIALOG_STATE_PROPERTY);

    // Create top-level dialog(s)
    this.dialogs = new DialogSet(this.dialogState);
    this.dialogs.add(new TextPrompt('namePrompt'));

    this.conversationState = conversationState;
    this.userState = userState;
  }


  async onTurn(context) {
    // Handle Message activity type, which is the main activity type for shown within a conversational interface
    // Message activities may contain text, speech, interactive cards, and binary or unknown attachments.
    // See https://aka.ms/about-bot-activity-message to learn more about the message and other activity types
    if (context.activity.type === ActivityTypes.Message) {
      let dialogResult;
      // Create a dialog context
      const dc = await this.dialogs.createContext(context);

      // Perform a call to LUIS to retrieve results for the current activity message.
      const results = await this.luisRecognizer.recognize(context);
      const topIntent = LuisRecognizer.topIntent(results);
      
      var fetchProduct = await intentRouter.fetchProducts(context);
      await context.sendActivity(fetchProduct);

    }

    // make sure to persist state at the end of a turn.
    await this.conversationState.saveChanges(context);
    await this.userState.saveChanges(context);
  }



}

module.exports.BasicBot = BasicBot;