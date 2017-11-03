"use strict";


/*---------------------------------------------*
 * SETTINGS
 ---------------------------------------------*/


//Loading
var preLoader = false; // If you like to hide your menu set true

//MENU HIDE
var hide_menu = true; // If you like to hide your menu set true

// TWITTER ID
var wowAnimation = true;  //
// TWITTER ID
var twitterID = '569000074533814272';  //

// MailChimp OPTIN URL
var mailchimpUrl = "http://facebook.us8.list-manage.com/subscribe/post-json?u=85f515a08b87483d03fee7755&id=dff5d2324f"; //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".  



/*---------------------------------------------*
 * PRELOADER
 ---------------------------------------------*/
if (preLoader === true) {
    $(window).load(function () {
        $(".loaded").fadeOut();
        $(".preloader").delay(1000).fadeOut("slow");
    });
}




jQuery(document).ready(function ($) {
    "use strict";



    /*---------------------------------------------*
     * SETTINGS
     ---------------------------------------------*/




    /*---------------------------------------------*
     * STICKY HIDE NAVIGATION 
     ---------------------------------------------*/

    var windowWidth = $(window).width();
    if (windowWidth > 767) {

        if (hide_menu === true) {
            $('.navbar').addClass('hide-nav').hide();
            $(window).scroll(function () {
                if ($(this).scrollTop() > 200) {
                    $('.hide-nav').fadeIn(500);
                    $('.hide-nav').addClass('navbar');

                } else {
                    $('.hide-nav').fadeOut(500);
                    $('.hide-nav').removeClass('navbar');
                }
            });
        }
    }
    if (windowWidth < 719) {
        jQuery('.navbar-collapse a').click(function (e) {
            jQuery('.navbar-collapse').collapse('toggle');
        });
    }




    /*---------------------------------------------*
     * STICKY TRANSPARENT NAVIGATION 
     ---------------------------------------------*/

    $.localScroll();



    /*---------------------------------------------*
     * STICKY TRANSPARENT NAVIGATION 
     ---------------------------------------------*/

    function toggleChevron(e) {
        $(e.target)
                .prev('.panel-heading')
                .find("i.indicator")
                .toggleClass('glyphicon-minus glyphicon-plus');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleChevron);
    $('.panel-group').on('shown.bs.collapse', toggleChevron);




    /*---------------------------------------------*
     * Counter 
     ---------------------------------------------*/

    $('.statistic-counter').counterUp({
        delay: 10,
        time: 2000
    });




    /* ---------------------------------------------------------------------
     Carousel
     ---------------------------------------------------------------------= */

    $('.screenshots').owlCarousel({
        responsiveClass: true,
        autoplay: true,
        items: 4,
        loop: true,
        margin: 20,
        dots: true,
        autoplayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            // breakpoint from 480 up
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            // breakpoint from 768 up
            768: {
                items: 2
            },
            980: {
                items: 4
            }
        }
    });


    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/
    var wow = new WOW({
        mobile: false // trigger animations on mobile devices (default is true)
    });

    if (wowAnimation === true) {
        wow.init();
    }


    /*---------------------------------------------*
     * Skills
     ---------------------------------------------*/

    $('.skills').waypoint(function () {

        $('.chart').easyPieChart({
            easing: 'easeOutBounce',
            animate: 2000,
            scaleColor: false,
            lineWidth: 12,
            lineCap: 'square',
            size: 150,
            trackColor: '#EDEDED',
            barColor: '#eec400',
            onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
    });



    /*---------------------------------------------*
     * Twitter
     ---------------------------------------------*/


    var xs_tweet = {
        "id": twitterID,
        "maxTweets": 3, // maxx post will show 3
        "domId": 'tweet',
        "enableLinks": true,
        "showUser": true,
        "showTime": true,
        "dateFunction": '',
        "showRetweet": false,
        "customCallback": handleTweets,
        "showInteraction": false
    };
    function handleTweets(tweets) {
        var x = tweets.length;
        var n = 0;
        var element = document.getElementById('tweet');
        var html = '<div class="slides">';
        while (n < x) {
            html += '<div>' + tweets[n] + '</div>';
            n++;
        }
        html += '</div>';
        if ($('#tweet').length) {
            element.innerHTML = html;
        }
        /* Twits attached to owl-carousel */
        $("#tweet .slides").owlCarousel({
            responsiveClass: true,
            autoplay: false,
            items: 1
        });

    }
    if (self == top) { // its load with iframe or not
        twitterFetcher.fetch(xs_tweet);
    }






    /* ------------------------------------------------
     ---  MAILCHIMP                 ------
     --------------------------------------------------- */

    $('#mailchimp').ajaxChimp({
        callback: mailchimpCallback,
        url: mailchimpUrl //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".  
    });
    function mailchimpCallback(resp) {
        var rm = "0 -";
        var msgs = resp.msg.replace(rm, '');
        if (resp.result === 'success') {
            $('.subscription-success').html('<h4><i class="fa fa-check success-msg"></i> ' + msgs + '</h4>').fadeIn(1000);
            $('.subscription-error').fadeOut(500);
        } else if (resp.result === 'error') {
            $('.subscription-error').html('<h4><i class="fa fa-times error-msg"></i> ' + msgs + '</h4>').fadeIn(1000);

        }
    }

    /*---------------------------------------------*
     * Countdown
     ---------------------------------------------*/
    $('.countdown').each(function () {
        $(this).countdown({
            until: new Date($(this).attr('data-date'))
        });
    });
    
    
    /*---------------------------------------------*
     * Map
     ---------------------------------------------*/
    $('.map-wrapper iframe').each(function (i, iframe) {
        $(iframe).parent().hover(// make inactive on hover
                function () {
                    $(iframe).css('pointer-events', 'none');
                }).click(// activate on click
                function () {
                    $(iframe).css('pointer-events', 'auto');
                }).trigger('mouseover'); // make it inactive by default as well
    });




});