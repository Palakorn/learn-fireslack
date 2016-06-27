angular.module('angularfireSlackApp')
    .controller('ProfileCtrl', function($state, md5, Auth, auth, profile){
        var profileCtrl = this;

        profileCtrl.profile = profile;

        profileCtrl.updateProfile = function(){
            profileCtrl.profile.emailHash = md5.createHash(auth.password.email);
            profileCtrl.profile.$save().then(function() {
                $state.go('hello');
            })
        };

        profileCtrl.logout = function(){
            profileCtrl.profile.online = null;
            profileCtrl.profile.$save().then(function(){
                Auth.$unauth();
                $state.go('home');
            });
        };

    });