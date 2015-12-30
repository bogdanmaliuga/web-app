Messages = new Meteor.Collection('messages');


Meteor.methods({
updateUser: function (data) {
        'use strict';

        var user = Meteor.user();
        var update = {};
       // if (!!data.location && data.location !== Session.get("locationname")) {
       //      Session.set("locationname", data.location);
            
       //   }
        if (!!data.email && _.first(user.emails).address !== data.email) {
              update['emails.0.address'] = data.email;
        }


      if (!!data.name && data.name !== user.username) {
     
            update['username'] = data.name;
            console.log("Ім'я користувача змінено!");
        }

      


        if (!_.isEmpty(update)) {
            Meteor.users.update({ _id: user._id }, {
                $set: update
            });
        }
    }    
});