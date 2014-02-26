var IdeaNoteRouter = Backbone.Router.extend({
    routes: {
        "": "main",
        "signup": "signup",
        "listnote/:user_id": "listnote",
        "noteeditor/:user_id": "noteeditor",
        "noteeditor/:user_id/:note_id": "noteeditor"
    },
    main: function () {
        
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
    },
    listnote: function (user_id) {
        Session.set(SessionRef.Name.ActiveUserId,user_id);
        Session.set(SessionRef.Name.ActiveUserType,SessionRef.Value.UserType.User);
        var fragment = Meteor.render(function () {
            if (Template[TemplateRef.ListNote] !== undefined) {
                return Template[TemplateRef.ListNote]();
            }
        });
        $('#BodyContent').html(fragment);
    },
//    noteeditor: function (user_id) {
//        Session.set(SessionRef.Name.ActiveUserId,user_id);
//        Session.set(SessionRef.Name.ActiveUserType,SessionRef.Value.UserType.User);
//        console.log("add new");
//        var fragment = Meteor.render(function () {
//            if (Template[TemplateRef.NoteEditor] !== undefined) {
//                return Template[TemplateRef.NoteEditor]();
//            }
//        });
//        $('#BodyContent').html(fragment);
//    },
    noteeditor: function (user_id,note_id) {
        Session.set(SessionRef.Name.ActiveUserId,user_id);
        Session.set(SessionRef.Name.ActiveUserType,SessionRef.Value.UserType.User);
        Session.set(SessionRef.Name.ActiveNoteId, note_id);
        var fragment = Meteor.render(function () {
            if (Template[TemplateRef.NoteEditor] !== undefined) {
                return Template[TemplateRef.NoteEditor]();
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