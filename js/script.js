$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
        $("body").addClass("scroll-header");
    }
    else {
        $("body").removeClass("scroll-header");
    }
});

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        navigation : true,
        items : 1, 
        autoplay:true,
        autoplayTimeout:4500,
        loop:true
    });
    
    $('.mobile-btn').click(function(){
        $('body').toggleClass('menu-open');
    });
});


$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
        
        $(".filter-button").removeClass("active")
    $(this).addClass("active");
    });
    
    

});

$(".scroll-top").click(function () {
   $("html, body").animate({scrollTop: 0}, 4000);
});