$(document).ready(function() {
    // 2015-06-16 12:59:46
    // dir:  Learn_getJSON_var
    // CAN I preserve the getJSON() return data??
    //
    // USE actual data.
    //
    var file_name;

    file_name = '../cd_sentlst_str.json';

    $.getJSON(file_name, function(jd) {
        var log, that, msg;
        that = this;  // accessible to inner functions
        modify_page(jd);  // does the work on the page.

        log = function log() {
            msg = 'IN getJSON():';
            msg += '\n   dataType: ' + that.dataType;
            console.log(msg);
        }();
    });

    function modify_page(dat) {
    // use external function
    // since most work will be done here
        $('#id01').html(dat[8]);
        $('#id02').html(dat[9]);
        console.log( 'sample of dat >>\n' + dat[0].slice(0, 30));
    }
    //
    //function log(dat, that) {
    //    var msg = 'IN getJSON():';
    //    msg += '\n   dataType: ' + that.dataType;  // 'that' is .getJSON().this
    //    msg += '\n   now #id01: \n' + dat[8];  // dat is .getJSON.jd
    //}
});



