import { Template } from 'meteor/templating';

import './show-page.html'

// Components used inside the template
import '../components/conversation/conversation-show.js';

Template.ShowPage.onCreated(function() {

  this.getConversationId = () => FlowRouter.getParam('_id');

  this.autorun(() => {
    this.subscribe('conversation.messages', this.getConversationId());
    // this.subscribe('viewingConversation', this.getConversationId());
  });

});

Template.ShowPage.onRendered(function() {
  this.autorun(() => {
    if (this.subscriptionsReady()) {
      console.log('subscriptionsReady');
    }
  });
});

Template.ShowPage.helpers({
  conversation(){
    const instance = Template.instance();
    const conversationId = instance.getConversationId();
    console.log('conversation id', conversationId);
    const conversation = Meteor.conversations.findOne({
      _id: conversationId
    });
    console.log('conversation', conversation);
    const messages = conversation.messages();

    return {
      conversationReady: instance.subscriptionsReady(),
      conversation: conversation._document,
      messages
    };

  }
});
