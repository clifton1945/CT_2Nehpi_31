$(document).ready(function() {
    // 2015-06-16 12:59:46
    // dir:  Learn_getJSON_var
    // CAN I preserve the getJSON() return data??
    //
    // USE actual data.
    //
    var file_name;

    file_name = 'cd_sentlst_str.json';
    //
    function tst(dat, that) {
        var msg = 'IN getJSON():';
        msg += 'dataType.' + that.dataType;  // 'that' is .getJSON().this
        msg += '#id01 now = ' + dat[8];  // dat is .getJSON.jd
        console.log(msg);
    }

    $.getJSON(file_name, function(jd) {
        $('#id01').html(jd[8]);
        $('#id02').html(jd[9]);
        tst(jd, this);
    });
});



