var IdeaNoteRouter = Backbone.Router.extend({
    routes: {
        "": "main",
        "signup": "signup"
    },
    main: function () {
        console.log("signin");
        var fragment = Meteor.render(function () {
            if (Template[TemplateRef.SignIn] !== undefined) {
                return Template[TemplateRef.SignIn]();
            }
        });
        $('#BodyContent').html(fragment);
    },
    signup: function () {
        console.log("signup");
        var fragment = Meteor.render(function () {
            if (Template[TemplateRef.SignUp] !== undefined) {
                return Template[TemplateRef.SignUp]();
            }
        });
        $('#BodyContent').html(fragment);
    }
});

Router = new IdeaNoteRouter;

Meteor.startup(function () {
    Backbone.history.start({
        pushState: true
    });
});