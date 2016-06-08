import { Meteor } from 'meteor/meteor';

Meteor.publish("user.list", function(){
  return Meteor.users.find({
    _id: {
      $ne: this.userId
    }
  });
});
