angular.module('angularfireSlackApp')
.factory('Users', ['$firebaseArray', '$firebaseObject', 'FirebaseUrl', function($firebaseArray, $firebaseObject, FirebaseUrl) {
  var usersRef = new Firebase(FirebaseUrl + 'users');
  var users = $firebaseArray(usersRef);
  var Users = {
    getProfile: function(userid) {
      return $firebaseObject(usersRef.child(userid));
    },
    getDisplayName: function(userid) {
      return users.$getRecord(userid).displayName;
    },
    all: users,
    getGravatar: function(userid) {
      return '//www.gravatar.com/avatar/' + users.$getRecord(userid).emailHash;
    }
  };
  
  return Users;
}]);