import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './message.html';
import './message.css';


Template.ConversationMessage.onCreated(function() {
  this.autorun(() => {
    new SimpleSchema({
      message: { type: Message }
    }).validate(Template.currentData());
  });
});

Template.ConversationMessage.helpers({
  messageType() {
    const instance = Template.instance();
    if(instance.data.message.checkOwnership()) {
      return 'sent sent-styled';
    }
    else {
      return 'recieved recieved-styled';
    }
  }
});
