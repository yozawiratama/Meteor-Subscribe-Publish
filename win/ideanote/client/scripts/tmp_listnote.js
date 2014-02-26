Template.tmp_note_list.created = function(){};

Template.tmp_note_list.notes = function(){
var activeuser = Session.get(SessionRef.Name.ActiveUserId);
    if(activeuser != undefined){
        return NodeList.find({CreatedBy : activeuser});
    }
};

Template.tmp_note_list.rendered = function(){};
Template.tmp_note_list.events({});