jQuery(document).ready(function () {
    // Table of contents
    if (jQuery('.widget-toc').length) {
      jQuery('.widget-toc .toc-title, .widget-toc a').on('click', function (event) {
        if (jQuery('.widget-toc.open').length) {
          jQuery('.widget-toc').removeClass('open');
          jQuery('.widget-toc > ol').slideUp(300);
        } else {
          jQuery('.widget-toc').addClass('open');
          jQuery('.widget-toc > ol').slideDown(300);
        }
      });
  
      jQuery(window).scroll(function () {
        if (window.pageYOffset > jQuery('.widget-toc').parent().offset().top) {
          if (!jQuery('.widget-toc').hasClass('sticky')) {
            jQuery('.widget-toc > ol').css('display', 'none');
            jQuery('.widget-toc').removeClass('open');
          }
          jQuery('.widget-toc').addClass('sticky');
        } else {
          jQuery('.widget-toc').removeClass("sticky");
        }
      });
    }});