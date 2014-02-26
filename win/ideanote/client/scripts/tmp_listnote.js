Template.tmp_note_list.created = function () {};

Template.tmp_note_list.notes = function () {
    var activeuser = Session.get(SessionRef.Name.ActiveUserId);
    if (activeuser != undefined) {
        var notes = IdeaNotes.find({
            CreatedBy: activeuser
        },{sort : {CreatedDate : -1}}).fetch();
        var res = new Array();
        for(var ii = 0; ii < notes.length; ii++){
            res[ii] = {
                _id : notes[ii]._id,
                Content : notes[ii].Content,
                LastModifiedDate : new Date(notes[ii].LastModifiedDate).toDateString()
            }
        }
        return res;
    }
};

Template.tmp_note_list.rendered = function () {};
Template.tmp_note_list.events({});