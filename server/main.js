import '/imports/startup/server';


// Import and rename a variable exported by easy-messaging.js.
import { EasyMessaging } from "meteor/ibrahimzahoor:easy-messaging";
// import { abc, abcd } from "meteor/ibrahimzahoor:easy-messaging";
//
// console.log("abc", packageName.abc);
// console.log("abcd", packageName.abcd);
//
console.log("packageName", EasyMessaging);
// // console.log("packageName", name);
//
console.log(" server ", Package["ibrahimzahoor:easy-messaging"]);
