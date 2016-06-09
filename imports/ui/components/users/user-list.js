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
      onChangeTab: { type: Function },
      usersList: { type: Mongo.Cursor }
    }).validate(Template.currentData());
  });
});

Template.UserList.helpers({
  userListArgs(user){
    const instance = Template.instance();
    return {
      user,
      onChangeTab(tabName){
        instance.data.onChangeTab(tabName);
      }
    }
  }
});

Template.UserList.events({

});
