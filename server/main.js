import '/imports/startup/server';

//When the users status is online
UserPresence.onUserOnline(function(userId){
    //update the profile for the user and set it's status to online
    Meteor.users.update({_id: userId}, {$set:{status:"online"}})
    console.log('UserPresence.onUserOnline');
});

//when the users status is set to idle
UserPresence.onUserIdle(function(userId){
    //update the profile for the user and set it's status to idle
    Meteor.users.update({_id: userId}, {$set:{status:"idle"}})
    console.log('UserPresence.onUserIdle');

});

//when the users status is offline
UserPresence.onUserOffline(function(userId){
    //update the profile for the user and unset it's status
    Meteor.users.update({_id: userId}, {$set:{status: "Offline"}})
    console.log('UserPresence.onUserOffline');

});

UserPresence.onSessionConnected(function(connection){
    // Sessions.insert({_id:connection.id, userId:connection.userId});
    console.log('UserPresence.onSessionConnected');
});

UserPresence.onSessionDisconnected(function(connection){
    // Sessions.remove(connection.id);
    console.log('UserPresence.onSessionDisconnected');
});
