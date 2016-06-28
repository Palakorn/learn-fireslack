angular.module('angularfireSlackApp')
    .controller('DisplayCtrl', function($state, Auth, profile){
        var displayCtrl = this;

        displayCtrl.profile = profile;


        displayCtrl.logout = function(){
            displayCtrl.profile.online = null;
            displayCtrl.profile.$save().then(function(){
                Auth.$unauth();
                $state.go('home');
            });
        };

    });
