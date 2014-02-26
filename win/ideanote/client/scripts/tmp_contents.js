Template.tmp_ctn_list_note_item.created = function () {

};
Template.tmp_ctn_list_note_item.rendered = function () {
    var data = $(this)[0];
    console.log(data);
    $('#' + data.data._id).html(data.data.Content);
};
Template.tmp_ctn_list_note_item.events({
    'click #btnEdit': function (e) {
        e.preventDefault();
        var id = $(this)[0]._id;
    },
    'click #btnDelete': function (e) {
        e.preventDefault();
        var id = $(this)[0]._id;
    }
});