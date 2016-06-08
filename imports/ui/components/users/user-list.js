import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Conversation } from 'meteor/socialize:messaging';

import './user-list.html';
import './user-list.css';

import './user-list-item.js';

Template.UserList.onCreated(function() {
  this.autorun(() => {
    new SimpleSchema({
      usersListReady: { type: Boolean },
      usersList: { type: Mongo.Cursor },
    }).validate(Template.currentData());
  });
});

Template.UserList.helpers({

});

Template.UserList.events({
    
});
