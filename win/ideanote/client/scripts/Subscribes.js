var userhandle = null;
var ideanotehandle = null;

Deps.autorun(function () {
    var user_id = Session.get(SessionRef.Name.ActiveUserId);
    userhandle = Meteor.subscribe('user', user_id);
    ideanotehandle = Meteor.subscribe('ideanote',user_id);
    if(userhandle.ready()){
    console.log("ready");
    }
    if(ideanotehandle.ready()){
    console.log("ready");
    }
    
    
});