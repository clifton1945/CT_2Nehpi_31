A reading, and in particular, a scripture reading app that enhances text understanding.

There are two major principles underlying the design:
(1) a Visual Presentation with (2) a forward analysis to display and accentuate the author's thoughts.

Introduction and Context.

Reading for centuries has been a serial intake of concept dense words, clauses, sentences, paragraphs. Serial, not knowing what is next. Serial, a few words at a time, building hopefully to an understanding of the complex reasoning behind and presented by the author. Though ideas and concepts are presented in coherent groups the final understanding requires digesting the entire text - serially. You have to finish to understand.

By knowing what is ahead, which of many possible topics is the gist of intent, understanding can be enhances. By seeing the fruition of inductive buildup understanding can be enhanced. If the author has inductively crafted the text, common in most ancient scripture, knowing the end at the beginning can enhance seeing the building blocks as they are set in place.

Two area will build two frameworks:
    dynamic HTML / JS  and / CSS presentations
    based on -
    text analysis driven by the current verse but using the entire text rather what has been revealed so far.

It's this impossible till now use of possessing the entire text that excites me. A reader at any verse DOES NOT know what will follow. The author MAY NOT HAVE known either. But we DO know! We have the entire text no matter where we serially.

#######################################################################
2015-06-06 10:23:05 comments on loading JSON from local.
>> $.getJSON( "test.js", function( json ) {
     console.log( "JSON Data: " + json.users[ 3 ].name );
    });  // NOTE from me  - this is putting JSON data in a var in a .js file.
>> You can place your json to js file and save it to global variable. It is not asynchronous, but it can help.
>> Another way to do it is to start a local HTTP server on your directory. On Ubuntu and MacOs with Python installed, it's a one-liner.
Go to the directory containing your web files, and :
python -m SimpleHTTPServer
Then connect to http://localhost:8000/index.html with any web browser to test your page.

2015-06-05 11:36:22
Overview and Status
    I'm back here now after styming at calculating significant words/phrases in Python and NLTK. I believe I need to SEE the effect when looking for THE SIGNIFICANT things to point out while reading. I have a much better understanding of NLTK tools. And with JSON I have a way to PROCESS in python and pass data to JS/HTML/CSS. If I need to. Maybe JS will be enough.

TODO can use below BUT watch out for baptism a NOT A '-'yea following character!
    if (/(bapt[^\s,-]+)/i.test(subject)) {
        // Successful match
    } else {
        // Match attempt failed
     }
 OR
 result = subject.replace(/(bapt[^\s,-]+)/ig, "<span id='bap'>$&</span>");

 2015-06-08 18:34:08
 in Learn_jQuery_2Nep31
    This was a long day. I finally discovered, answered, learned  the questions:
 DONE Now split js code into app.js
 >>> How shift <script> .... </script>  to separate app.js file. Though I knew it just needed a
    <script src="app.js"></script> right before  the  </body> tag in the html file,
    it REQUIRED $(document).ready(function() {...  in place to allow the js code to be loaded!.
    That was frustrating to learn, I took hours proving alll the code was correct, passing inspection, but never working!
 DONE a working header and verses 2Nep31 loads.
 DONE NEXT OPEN AND CLOSE the two html files: verses and header
 >>> How LOAD, and then UNLOAD, a text or html file file into a main page. in jQqery use $(selector).load( file) and $(selector).html = "" to unload or clear the selector.


 2015-06-09 07:06:12
    An understanding in bed this AM: Just like the BoM and D&C - both chronological recorded steps of experience the Lord wants us to know -  this file CAN BE a record, chroonoloogical, unedited fundamentally, of LEARNING. Maybe as I discover how to 'LOOK AHEAD' or at least 'LOOK BACK' on this learning experience I can grock how to do it for BoM and scriptures. And I may add the AA big book is another exact type of God showing the steps.
 PLAN LEARN USING JSON data
    PUT json converted txt of sentlst_toklst somewhere by python.
    GET that txt and convert it back?? as a dict of lists of lists??
    MANIPULATE that object in app.js ??
    step thru a few sentences at a time by loop thru JSON data??
 PLAN READ / PROGRESS sentence by sentence.
 PLAN NEXT toggle css highlights ON when coming to key word each new sentence. ANd then toggle - or dim - until the word is extinct.
 PLAN NEXT see about the power of Regex in JS
2015-06-09 08:23:50
    LEARNED selector.html('something here.') NOT selector.html = 'something'