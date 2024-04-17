$('.faq-head').click(function() {
    $(this).parent().siblings().removeClass('showFaq');
    $(this).parent().toggleClass('showFaq');
  });