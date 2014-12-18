/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/

/*Wrapper function that waits until page has finished loading before allowing JQuery to work*/
$(function(){

    $('#alertMe').click(function(e){
        /*Href will normally navigate to a link, or refresh the page if no URL is supplied. The operation below prevents this*/
        e.preventDefault();

        $('#successAlert').slideDown();
    });

    $('a.pop').click(function(e){
        e.preventDefault();
    });

    $('a.pop').popover();

    $('[rel="tooltip"]').tooltip();

});