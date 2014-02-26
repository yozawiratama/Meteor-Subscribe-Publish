Template.tmp_signup.created = function () {};
Template.tmp_signup.rendered = function () {};
Template.tmp_signup.events({
    'click #btnsignin': function () {
        Router.navigate("/", true);
    },
    'submit': function (e) {
        e.preventDefault();
        var email = $('#inpemail');
        var pwd = $('#inppwd');
        var repwd = $('#inprepwd');
        var fname = $('#inpfname');
        var lname = $('#inplname');
        var gender = $('#ddlgender');
        if (pwd.val() == repwd.val()) {
            Meteor.call('AddNewUser', email.val(), pwd.val(), fname.val(), lname.val(), gender.val(), function (err, response) {
                
                if (err) {
                    Session.set('serverDataResponse', "Error:" + err.reason);

                    console.log("Error : " + err.reason);
                    return;
                }
                //			Session.set('serverDataResponse', response);

                if (response == true) {
                    $.growl.notice({message: "Sign Up is Success, You can login now" });
                    Router.navigate("/", true);
                } else $.growl.error({message: "Sign Up is Fail, Try again" });
            });
        } else alert("Confirm Password not match!");
    }
});