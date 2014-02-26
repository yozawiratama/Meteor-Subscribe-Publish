Template.tmp_signin.created = function () {};
Template.tmp_signin.rendered = function () {};
Template.tmp_signin.events({
    'click #btnsignup': function () {
        Router.navigate("/signup", true);
    },
    'submit': function (e) {
        e.preventDefault();
        var email = $('#inpemail');
        var pwd = $('#inppwd');
        Meteor.call("UserLogin", email.val(), pwd.val(), function (err, response) {
            if (err) {} else {
                Router.navigate("/listnote/"+response, true);
            }

        });
    }
});