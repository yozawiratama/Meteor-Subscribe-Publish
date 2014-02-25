Template.tmp_signin.created = function () {};
Template.tmp_signin.rendered = function () {};
Template.tmp_signin.events({
    'click #btnsignup': function () {
        Router.navigate("/signup",true);
    },
    'submit': function () {}
});