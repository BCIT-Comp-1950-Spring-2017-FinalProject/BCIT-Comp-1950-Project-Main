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
            'deliverable-main-1',
            'deliverable-main-2', 
            'deliverable-main-3', 
            'deliverable-main-4',
            'deliverable-main-5', 
            'link-to-proto'],
        sectionsColor: [
            'whitesmoke', // home
            'whitesmoke', // team-intro
            'whitesmoke', // rationale-intro
            'whitesmoke', // deliverable-main-1
            'whitesmoke', // deliverable-main-2
            'whitesmoke', // deliverable-main-3
            'whitesmoke', // deliverable-main-4
            'whitesmoke', // deliverable-main-5
            'whitesmoke'  // link-to-proto
            ], 
        verticalCentered: false
    });
})