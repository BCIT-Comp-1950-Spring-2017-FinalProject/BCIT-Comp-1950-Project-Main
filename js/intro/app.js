/*
COMP1950
Instructor: Jeffrey Park
DTC Thur 6-9PM

Created by:
Bruna Vieira
Godfrey Kwan
Sam Chung
*/

$(document).ready(function() {
    $('#pagepiling').pagepiling({
        // Pass in an options object when initializing
        menu: "#menu",
        anchors: [
            'homepage', 
            'team-intro', 
            'rationale-intro', 
            , // empty anchors because these aren't visible in main nav
            , 
            , 
            , 
            'link-to-proto'],
        sectionsColor: [
            'whitesmoke', // home
            'whitesmoke', // team-intro
            'whitesmoke', // rationale-intro
            'whitesmoke', // rationale-main-1
            'whitesmoke', // rationale-main-2
            'whitesmoke', // rationale-main-3
            'whitesmoke', // rationale-main-4
            'whitesmoke'  // link-to-proto
            ], 
        verticalCentered: false
    });
})