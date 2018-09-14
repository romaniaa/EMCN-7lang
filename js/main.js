function change_location(location) {
  $('#location-title-text').text(location['location-title-text']);
  $('#location-address-text').html(location['location-address'] + '<br/>' + location['location-address-city'] + '<br/>' + location['location-address-postal']);
  $('#location-contact-text-table-phone-value').html('<a href="tel:' + location['location-address-phone'].replace(/\s+/g, '') + '">' + location['location-address-phone'] + '</a>');
  $('#location-contact-text-table-fax-value').html('<a href="tel:' + location['location-address-fax'].replace(/\s+/g, '') + '">' + location['location-address-fax'] + '</a>');
  $('#location-contact-text-table-email-value').html('<a href="mailto:' + location['location-address-email'] +'">' + location['location-address-email'] + '</a>');
}


function swap_profile(profileid){
  $('.leadership-profile').removeClass('active');
  $('#' + profileid).addClass('active');
}

var languages = ['english','french','spanish','arabic','soomali','tigrinya','hindi'];
function set_language(language){
  languages.forEach(function (lang) {
    if(lang != language){
      $('.' + lang).css('visibility', 'hidden').hide();
      $('#' + lang).removeClass('active');
    }
  });

  $('.' + language).show().css('visibility', 'visible');

  $('#' + language).addClass('active');
  localStorage.language=language;

}


      $(document).ready(function(){


        if(localStorage.language){
          set_language(localStorage.language);
        }else{
          set_language('english');
        }

        $('#nav-menu').click (function(e){
            if(e.target != this) return;
            $('.menu').toggleClass('open');
            $("#nav-menu").toggleClass('active');
            $('#nav-menu').scrollTop(0);
        });

        $('.menu').click (function(){
          $(this).toggleClass('open');
          $("#nav-menu").toggleClass('active');
          $('#nav-menu').scrollTop(0);
        });

        $('#nav-menu').on('scroll', function () {
            $('body').scrollTop($(this).scrollTop());
          });


      });
