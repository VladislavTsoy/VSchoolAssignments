$(document).ready(function(){

     /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeInUp');
    }, {
        offset: '70%'
    })

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeIn');
    }, {
        offset: '50%'
    })

    $('.js--wp-7').waypoint(function(direction) {
        $('.js--wp-7').addClass('animated fadeInUp');
    }, {
        offset: '60%'
    })

    /* HOME PAGE*/

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeInLeft');
    }, {
        offset: '50%'
    })


    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav')
        var icon = $("js--nav-icon ion-icon")
        nav.slideToggle(200)
    })

})
   