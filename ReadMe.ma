A reading, and in particular, a scripture reading app that enhances text understanding.
    mod: 2015-07-12

There are two major principles underlying the design:
(1) a Visual Presentation with (2) a forward analysis to display and accentuate the author's thoughts.

Introduction and Context.
Reading for centuries has been a serial intake of concept dense words, clauses, sentences, paragraphs. Serial, not knowing what is next. Serial, a few words at a time. Serial, building hopefully to an understanding of the complex reasoning behind and presented by the author.

I now believe that bottom-up, indictive style is the prevalent structure for much of scripture: the prophets couldn't edit well. Try revising cuniform on clay, or erasing aon gold plates. The authors knew in their minds the overall topic but couldn't arrange the entirity in their mind. Though skilled, much more than us now since we have word processors, they used the built it up piece-by-piece approach. An example I'm using is 2Nephi31. As he was fininhing his record he wanted to clarify - The Doctrine of Christ: he introduces it in vs:2, builds it and tells us he's done it in vs:66, the last verse.

Though ideas and concepts are presented in coherent groups the final understanding requires digesting the entire text. You have to finish to understand.

By knowing what is ahead, which of many possible words, phrases, clasues, topics is the gist of intent, understanding can be enhances. By seeing the fruition of inductive buildup understanding can be enhanced. If the author has inductively crafted the text, common in most ancient scripture, knowing the end at the beginning can enhance seeing the building blocks as they are set in place.

Two area will build two frameworks:
    (1) dynamic HTML / JS  and / CSS presentations
    based on -
    (2) SEEING repeated words, SEEING parallel phrases, SEEING a topic introduced then used periodically basis for the next topic, SEEING ...???

    DEPRECATED 2015-07-12((2) text analysis driven by the current verse but using the entire text rather what has been revealed so far)  Code text comprehension, AI, etc, isn't well understood even now. SO my goal is to SHOW stuff, stuff that I'll need the Holy Ghost to figure out, rather than show compact anaysis.


It's this impossible-till-now use of possessing the entire text that excites me. A reader at any verse DOES NOT know what will follow. The author MAY NOT HAVE known either. But we DO know! We have the entire text no matter where we serially.

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
 DONE Now split js code into src_app.js
 >>> How shift <script> .... </script>  to separate src_app.js file. Though I knew it just needed a
    <script src="src_app.js"></script> right before  the  </body> tag in the html file,
    it REQUIRED $(document).ready(function() {...  in place to allow the js code to be loaded!.

    That was frustrating to learn, I took hours proving all the code was correct, passing inspection, but never working!
 DONE a working header and verses 2Nep31 loads.
 DONE NEXT OPEN AND CLOSE the two html files: verses and header
 >>> How LOAD, and then UNLOAD, a text or html file file into a main page. in jQqery use $(selector).load( file) and $(selector).html = "" to unload or clear the selector.


 2015-06-09 07:06:12
    An understanding in bed this AM: Just like the BoM and D&C - both chronological recorded steps of experience the Lord wants us to know -  this file CAN BE a record, chronological, unedited fundamentally, of LEARNING. Maybe as I discover how to 'LOOK AHEAD' or at least 'LOOK BACK' on this learning experience I can grock how to do it for BoM and scriptures. And I may add the AA big book is another exact type of God showing the steps.
 DONE:  LEARN USING JSON data
    PUT json converted txt of sentlst_toklst somewhere by python.
    GET that txt and convert it back?? as a dict of lists of lists??
    MANIPULATE that object in src_app.js ??
    step thru a few sentences at a time by loop thru JSON data??

2015-06-09 08:23:50
    LEARNED selector.html('something here.') NOT selector.html = 'something'

2015-06-16
Yeah, I have a way to invoke $.getJSON(file_data.json, function(received_back_data){ } AND then use the data IN inner or outer functions to manipulate the html and calc the data.
The example code in in this project: CT_2Nephi_31\Learn_getJSON_var.

2015-06-18
//a working prototype that could be used to work on passed in file json data.
// BUT have not figured out how to get data OUTSIDE OF THE $.getJSON() call.
Still it's workable enough to begin using jQuery to manipulate text and sd what HF suggests.

STATUS:  2015-07-12
    I have a lot of the pieces in place but have not a proof of concept yet.
    Can JSON: JS>PYTHON>JS
    Using HTML/CSS/JS rather than Canvas. Seems more flexible.
    Can use JQuery
        the breakthru was promises for Ajax getJSON.
    Can use QUnit for js code; sort of for html code.
        QUnit_Tutor
        The latter by using div: qunit-fixture.
    Can use regex in python and more and more in js.

    Have laid aside statistical analysis of a chapter for now. Seeing id more important and I wasn't very successful in find a significance test or how to look for the freq dist or histogram shape.  I believe it is possible to scan and find frequency shapes: a word freq and delta closeness probably characterized by shew and kurtosis. An example being peaked  count of a word as it is introduced and explained, then long intervals of not being used then reintroduced briefly tnen long not used. 'bapti' follows that in 2Nep31.

    Will use scroll bar as mouse/keyboard events to read text, pause, backtrack etc.+

GOAL:
    READ / PROGRESS sentence by sentence;
    MODIFY Font Size / Opacity / lots of stuff before and after the few sentences being read.

PLAN as of above date.
 +CSS Opacity and maybe element: hover look good. Low opacity above and below AOI:'AreaOfInterest'
 +Couple sentences to text Area and scrolled Area. This allows me to modify AreaBefore, AOI, AreaAfter as a function of Scroll: specifically probably to scrolled area. Something like scrolledArea

 MAYBE USE
 -jquery's $().
    e.g.   $( "<p id='test'>My <em>new</em> text</p>" ).appendTo( "body" );
 -jquery.fracs()  git addon

 NOTE: a js noop is jQuery.noop()
 NOTE: jQuery and regex: selector.match(/regex str/ig)