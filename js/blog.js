---
layout: null
---
$(document).ready(function () {
  $('a.resume-button').click(function (e) {
    if ($('.panel-empty').hasClass('panel-cover--collapsed')) return
    currentWidth = $('.panel-empty').width()
    if (currentWidth < 960) {
      $('.panel-empty').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-empty').css('max-width', currentWidth)
      $('.panel-empty').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }
  })

  if (window.location.hash && window.location.hash == '#blog') {
    $('.panel-empty').addClass('panel-cover--collapsed')
  }
})
