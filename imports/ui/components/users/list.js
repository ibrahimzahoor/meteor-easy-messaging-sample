import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Conversation } from 'meteor/socialize:messaging';

import './list.html';
import './list.css';

import './list-item.js';

Template.UserList.onCreated(function() {
  this.autorun(() => {
    new SimpleSchema({
      usersListReady: { type: Boolean },
      usersList: { type: Mongo.Cursor }
    }).validate(Template.currentData());
  });
});

Template.UserList.helpers({
  userListArgs(user){
    const instance = Template.instance();
    return {
      user
    }
  }
});

Template.UserList.events({

});
