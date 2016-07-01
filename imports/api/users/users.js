// import { User } from 'meteor/socialize:user-model';
//
// User.methods({
//   isOnline() {
//     return true;
//   },
//   setStatusIdle() {
//     Meteor.call('updateSessionStatus', 1);
//   },
//   setStatusOnline() {
//     Meteor.call('updateSessionStatus', 2);
//   },
//   email() {
//     return this.emails[0].address;
//   },
//   startNewConversationWithUsers(users, callback) {
//
//     if(Meteor.isClient){
//       console.log("isClient");
//     }
//     else if(Meteor.isServer) {
//       console.log("isServer");
//     }
//   }
// })
//
// if(Meteor.isServer) {
//   //When the users status is online
//   UserPresence.onUserOnline(function(userId){
//     Meteor.users.update({_id: userId}, {$set:{status:"online"}})
//   });
//
//   //when the users status is set to idle
//   UserPresence.onUserIdle(function(userId){
//     Meteor.users.update({_id: userId}, {$set:{status:"idle"}})
//   });
//
//   //when the users status is offline
//   UserPresence.onUserOffline(function(userId){
//     Meteor.users.update({_id: userId}, {$set:{status: "offline"}})
//   });
// }
