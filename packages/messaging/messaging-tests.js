// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by messaging.js.
import { name as packageName } from "meteor/messaging";

// Write your tests here!
// Here is an example.
Tinytest.add('messaging - example', function (test) {
  test.equal(packageName, "messaging");
});
