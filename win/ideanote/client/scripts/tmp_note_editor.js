Template.tmp_note_editor.created = function () {};
Template.tmp_note_editor.notehead = function () {
    var state = Session.get(SessionRef.Name.ActiveNoteId);
    if (state == undefined)
        return "Add New Note";
    else return "Edit Note";
};
Template.tmp_note_editor.rendered = function () {
    var term = new wysihtml5.Editor("txaNoteContent", {
        toolbar: "notetoolbar",
        stylesheets: "/plugins/stylesheet.css",
        parserRules: wysihtml5ParserRules
    });
};
Template.tmp_note_editor.events({
    'click #btnSubmit': function (e) {
        e.preventDefault();
        var state = Session.get(SessionRef.Name.ActiveNoteId);
        console.log(state);
        if (state == undefined) {
            var content = $('#txaNoteContent');
            var title = "";
            var user_id = Session.get(SessionRef.Name.ActiveUserId);
            console.log(user_id);
            Meteor.call("AddNewNote", title, content.val(), user_id, function (err, res) {
                console.log(res);
                if (err) {} else {
//                    console.log(res);
//                    console.log(Session.get(SessionRef.Name.ActiveUserId));
//                    Router.Navigate("/listnote/" + Session.get(SessionRef.Name.ActiveUserId), true);
                    
                    
                }
            });
        } else {}
    },
    'click #btnReset': function (e) {
        e.preventDefault();
        var content = $('#txaNoteContent');
        note.val("");
    },
    'click #btnDelete': function (e) {
        e.preventDefault();
        var content = $('#txaNoteContent');

    }
});