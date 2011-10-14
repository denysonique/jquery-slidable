(function() {
  $(function() {
    return $("[data-expands]").each(function() {
      var $content, id;
      id = $(this).attr('data-expands');
      $content = $("#" + id).css({
        display: 'none'
      });
      return $(this).bind('click', function() {
        var $id;
        $id = $(this).attr('data-expands');
        return $("#" + $id).slideToggle();
      });
    });
  });
}).call(this);
