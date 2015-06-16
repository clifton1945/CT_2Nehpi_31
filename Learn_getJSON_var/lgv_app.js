// 2015-06-16 12:59:46
// dir:  Learn_getJSON_var
// CAN I preserve the getJSON() return data??
//
$(document).ready(function() {
    // USE actual data.
    var file_name;
    file_name = '../cd_sentlst_str.json';

    // the way to get file.file data.
    $.getJSON(file_name, function(jd) {
        var log, that, msg;
        msg = 'IN getJSON() {';
        that = this;  // accessible to inner functions

        modify_page(jd, msg);  // does the work on the page.

        // create an inner function for use of parent msg.
        //    NOTE: msg is not passed in.
        log = function log() {
            msg += '\n   dataType: ' + that.dataType;
            msg += '\n   url: ' + that.url;
            console.log(msg);
        }();
    });

    // use as an external function to apps.js
    // since most work will be added here
    function modify_page(dat) {
        $('#id01').html(dat[8]);
        $('#id02').html(dat[9]);
        console.log( 'sample of dat >>\n' + dat[0].slice(0, 35));
    }
});



