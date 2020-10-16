$(document).ready(function() {
    $('.header__burger').click(function(event){
        $('.header__burger, .header-nav' ).toggleClass('active');
        $('body').toggleClass('lock');
    });
    var tabsItem = $(".recommendations-item");
    var contentItem = $(".lifehacks-content__item")

    tabsItem.on('click', function(event){
        var activeContent = $(this).attr("data-target");
        tabsItem.removeClass('recommendations-item--active');
        contentItem.removeClass("lifehacks-content__item--active")
        $(activeContent).addClass('lifehacks-content__item--active');
        $(this).addClass("recommendations-item--active");
    });

    $('#change-color1').on("click", function() {
	if( $('#change-color1').css('fill') == "rgb(188, 191, 194)"){
  	$('#change-color1').css({ fill: "#FF4F52" });
    }else{
  	$('#change-color1').css({ fill: "#BCBFC2" });
    }    
    });

    $('#change-color2').on("click", function() {
	if( $('#change-color2').css('fill') == "rgb(188, 191, 194)"){
  	$('#change-color2').css({ fill: "#FF4F52" });
    }else{
  	$('#change-color2').css({ fill: "#BCBFC2" });
    }    
    });

    $('#change-color3').on("click", function() {
	if( $('#change-color3').css('fill') == "rgb(188, 191, 194)"){
  	$('#change-color3').css({ fill: "#FF4F52" });
    }else{
  	$('#change-color3').css({ fill: "#BCBFC2" });
    }    
    });

    $('#change-color4').on("click", function() {
	if( $('#change-color4').css('fill') == "rgb(188, 191, 194)"){
  	$('#change-color4').css({ fill: "#FF4F52" });
    }else{
  	$('#change-color4').css({ fill: "#BCBFC2" });
    }    
    });

    $('#change-color5').on("click", function() {
	if( $('#change-color5').css('fill') == "rgb(188, 191, 194)"){
  	$('#change-color5').css({ fill: "#FF4F52" });
    }else{
  	$('#change-color5').css({ fill: "#BCBFC2" });
    }    
    });

    $('#change-color6').on("click", function() {
	if( $('#change-color6').css('fill') == "rgb(188, 191, 194)"){
  	$('#change-color6').css({ fill: "#FF4F52" });
    }else{
  	$('#change-color6').css({ fill: "#BCBFC2" });
    }    
    });


    var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: { 
        delay: 3000, 
      },
 

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

});

