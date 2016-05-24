import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';

import './conversation-show.html';

// Components used inside the template
import './conversation-message.js';
import './conversation-reply.js';

Template.ConversationShow.onCreated(function() {

  // this.state = new ReactiveDict();
  // this.state.setDefault({
  //   conversationsLength: 0,
  // });
  //
  // this.autorun(() => {
  //    console.log('Reactive dict: ', this.state.get('editing'));
  // });
  //
  // this.getConversations = () => {
  //
  // }

});

Template.ConversationShow.helpers({
  messages() {
    var conversationId = FlowRouter.getParam('_id');
    return Meteor.messages.find({
      conversationId: conversationId
    });
  },
  title() {
    var conversationId = FlowRouter.getParam('_id');
    var conversation = Meteor.conversations.findOne({
      _id: conversationId
    });
    if(conversation) {
      var participants = conversation._participants;
      return Meteor.users.findOne({_id: participants[1]}).username;
    }
    return " ";
  }
});

Template.ConversationShow.events({

});
