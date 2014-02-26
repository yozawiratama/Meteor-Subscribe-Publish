Meteor.publish('user', function (user_id) {
    return Users.find({
        _id: user_id
    });
});
Meteor.publish('ideanote', function (user_id) {
    return IdeaNotes.find({
        CreatedBy: user_id
    });
});

Meteor.methods({
    AddNewUser: function (email, pwd, fname, lname, gender) {
        var newUser = Users.insert({
            Email: email,
            Password: pwd,
            FName: fname,
            LName: lname,
            Gender: gender,
            Birthdate: ""

        });
        //        if (newUser != undefined) return true;
        //        else return false;
        return true;
    },
    UserLogin: function (email, pwd) {
        var usr = Users.findOne({
            Email: email,
            Password: pwd
        });
        if (usr != undefined) return usr._id;
        else return false;
    },
    AddNewNote: function (title, content, user_id) {
        var newNote = IdeaNotes.insert({
            Title: title,
            Content: content,
            CreatedDate: new Date(),
            CreatedBy: user_id,
            LastModifiedDate: new Date(),
            LastModifiedBy: user_id
        });
                console.log(newNote);
        return true;
    }

    //    welcome: function (name) {
    //        console.log('on server, welcome called with name: ', name);
    //        if (name == undefined || name.length <= 0) {
    //            throw new Meteor.Error(404, "Please enter your name");
    //        }
    //        return "Welcome " + name;
    //    }
});