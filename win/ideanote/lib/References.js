TemplateRef = {
    SignIn: "tmp_signin",
    SignUp: "tmp_signup",
    ListNote: "tmp_note_list",
    NoteEditor: "tmp_note_editor"
};

RouteRef = {
    SignIn: "",
    SignUp: "signup",
    ListNote: "listnote",
    NoteEditor: "noteeditor"
};

SessionRef = {
    Name: {
        ActiveUserId: "activeuserid",
        ActiveUserType: "activeusertype",
        ActiveNoteId : "activenoteid"
    },
    Value: {
        UserType: {
            Administrator : "administrator",
            User : "user",
            Anonymous : "anonymous"
        }
    }
};