Router.route('/',function(){
    this.render('chat');
});

Router.route('/editProfile', function () {
    if (!Meteor.user()) {
        return Meteor.Error('non-authorized');
    }

    var user = Meteor.user();
    var data;
    
    
  data = {
        email: _.first(user.emails).address,
        name: user.username
     };

   
  this.render('editProfile', {
        data: function () {
            return {
                user: data,
                
            };
        }
    });
});
