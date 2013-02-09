$(function() {
  var margin_left = parseInt($('img[class*="photo"]').parent().css('marginLeft'), 10),
      margin_top = parseInt($('img[class*="photo"]').parent().css('marginTop'), 10)

  $('img[class*="photo"]').each(function(index) {
    var position = $(this).parent().position()

    $(this).css({
      "position": "absolute",
      "left": 55 + position.left + margin_left,
      "top": position.top + margin_top
    });
  });

  $('img[class*="photo"]').click(function() {
    var is_photo = $(this).hasClass('photo');

    remove_large_photo();
    if (is_photo) {
      $(this).toggleClass('photo large_photo').css({"left": 400, "top": 0});
    }
  });

  function remove_large_photo() {
    if ($('.large_photo').length) {
      var position = $('.large_photo').parent().position()
      $('.large_photo').toggleClass('large_photo photo').css({
        "left": 55 + position.left + margin_left,
        "top": position.top + margin_top
      });
    }
  }
});