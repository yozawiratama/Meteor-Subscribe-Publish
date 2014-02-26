Template.tmp_note_list.created = function () {};

Template.tmp_note_list.notes = function () {
    var activeuser = Session.get(SessionRef.Name.ActiveUserId);
    if (activeuser != undefined) {
        return IdeaNotes.find({
            CreatedBy: activeuser
        },{sort : {CreatedDate : -1}});
    }
};

Template.tmp_note_list.rendered = function () {};
Template.tmp_note_list.events({});