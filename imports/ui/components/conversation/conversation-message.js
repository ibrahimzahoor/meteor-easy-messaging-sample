import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './conversation-message.html';


Template.ConversationMessage.onCreated(function() {
  // console.log('this', this);
});
