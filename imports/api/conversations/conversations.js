import { Conversation } from 'meteor/socialize:messaging';

import { Participant } from 'meteor/socialize:messaging';

//Add items to Schema for a Converation --  use Simple Schema Manual

// Conversation.appendSchema({
//   "itemName": {
//     type: String,
//     defaultValue: "name"
//   }
// });


//Add Collection helper methods here

Conversation.methods({
  usernameTitle() {
    console.log('this userId', this.userId);
    console.log('MEteor userId', Meteor.userId());

    return "username";
  }
})


Participant.methods({
  availibilityStatus() {
    const user = Meteor.users.findOne({_id: this.userId});
    return user.status === 'online' && 'online';
  }
})
