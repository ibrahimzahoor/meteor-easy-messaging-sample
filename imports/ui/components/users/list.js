import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Conversation } from 'meteor/socialize:messaging';

import './list.html';
import './list.css';

import './list-item.js';

Template.UserList.onCreated(function() {
  // this.autorun(() => {
  //   new SimpleSchema({
  //     usersListReady: { type: Boolean },
  //     usersList: { type: Mongo.Cursor }
  //   }).validate(Template.currentData());
  // });

  this.autorun(() => {
    this.subscribe('user.list');
  });

  this.getUsersListData = () => {
    const self = this;
    const usersList = Meteor.users.find({
      _id: {
        $ne: Meteor.userId()
      }
    });
    return usersList;
  }
});

Template.UserList.helpers({
  usersList() {
    const instance = Template.instance();
    return instance.getUsersListData()
  }
});

Template.UserList.events({

});
