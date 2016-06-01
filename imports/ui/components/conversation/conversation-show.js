import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';

import './conversation-show.html';

// Components used inside the template
import './conversation-message.js';
import './conversation-reply.js';

Template.ConversationShow.onCreated(function() {

  this.autorun(() => {
    console.log('Template.currentData()', Template.currentData());
    new SimpleSchema({
      conversationReady: { type: Boolean },
      conversation: { type: Object, optional: true },
      messages: { type: Mongo.Cursor },
    }).validate(Template.currentData());
  });

});


Template.ConversationShow.helpers({
  // messages() {
  //   const instance = Template.instance();
  //   const conversationId = instance.getConversationId();
  //   return Meteor.messages.find({
  //     conversationId: conversationId
  //   });
  // },
  // title() {
  //   const instance = Template.instance();
  //   const conversationId = instance.getConversationId();
  //   let conversation = Meteor.conversations.findOne({
  //     _id: conversationId
  //   });
  //   // console.log('this', this);
  //   // console.log('conversation', conversation);
  //   // return conversation.usernameTitle();
  //   // if(conversation) {
  //   //   var participants = conversation._participants;
  //   //   let user = Meteor.users.findOne({_id: participants[1]});
  //   //   return user && user.username;
  //   // }
  //   // return " ";
  // }
});

Template.ConversationShow.events({

});
