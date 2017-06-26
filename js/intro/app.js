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
        anchors: ['homepage', 'team-intro', 'rotate-page', 'text-page'],
        sectionsColor: ['whitesmoke', 'whitesmoke', 'whitesmoke',  'whitesmoke'],
        verticalCentered: false
    });
})