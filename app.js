$(function(){

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();


    $(window).on("scroll load",function(){


        scrollPos=$(this).scrollTop();

        if(scrollPos > introH ) {

                header.addClass("fixed");

        } else {
                header.removeClass("fixed");
        }

    });




    $("[data-scroll]").on("click", function(event){

        event.preventDefault();

        let elementId = $(this).data('scroll');

        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({

         scrollTop:elementOffset -60

        }, 450);
    });




    let nav = $("#nav")
    let navToggle = $("#navToggle")

    navToggle.on("click" , function(event){
        event.preventDefault();

        nav.toggleClass("show");

    });


    let slider = $("#reviewsSlider");

    slider.slick({
           infinite: true,
           slidesToShow: 1,
           slidesToScroll: 1,
           fade: true,
           arrows: false,
           dots:true
});



});

