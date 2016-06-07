import { User } from 'meteor/socialize:user-model';

User.methods({
  isOnline() {
    return true;
  },
  setStatusIdle() {
    Meteor.call('updateSessionStatus', 1);
  },
  setStatusOnline() {
    Meteor.call('updateSessionStatus', 2);
  }
})
