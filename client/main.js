Template._loginButtonsLoggedInDropdown.events({
    'click #login-buttons-edit-profile': function (event) {
        event.preventDefault();
        Router.go('editProfile');
    }
});

Session.set("locationname", "Lviv");


Template.editProfile.helpers({
theLocation:function(event){
      return Session.get("locationname");
    }
});


  
Template.messages.helpers({
        messages: function() {
            return Messages.find({location:Session.get("locationname")}, { sort: { time: -1}});
        }
    });

    Template.input.events ({
        
      'click #sendButton' : function () {
        
         
            var user=Meteor.user();
            var time=new Date( );
            var timeNow =time.getHours() +":"+time.getMinutes()+":"+time.getSeconds();
            var message = document.getElementById('message');
            
            if (message.value != '') {
             
            Messages.insert({
              name: user.username,
              email: user.emails[0].address,
               location: Session.get("locationname"),
              userID: Meteor.userId(),
              timeNow: timeNow,

              userID: Meteor.userId(),
              timeNow: timeNow,
              location: Session.get("locationname"),

              messageText: message.value,
              time: Date.now(),
            });

            document.getElementById('message').value = '';
            message.value = '';
          }
        
      }
    });

Template.editProfile.events({
    'submit': function (event) {
        event.preventDefault();

        var data = {
            name: event.target.name.value,
            email: event.target.email.value,
            location: event.target.location.value

          };

        Meteor.call('updateUser', data);
    }


    
});

Template.editProfile.helpers({
theLocation:function(event){
      return Session.get("locationname");
    }

});

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});