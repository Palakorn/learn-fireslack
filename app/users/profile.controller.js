angular.module('angularfireSlackApp')
    .controller('ProfileCtrl', function($state, md5, Auth, auth, profile){
        var profileCtrl = this;

        profileCtrl.profile = profile;

        profileCtrl.updateProfile = function(){
            profileCtrl.profile.uid = Auth.uid;
            profileCtrl.profile.$save().then(function() {
                $state.go('display');
            })
        };



    });