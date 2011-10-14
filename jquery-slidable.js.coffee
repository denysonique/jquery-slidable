$ ->
  $("[data-expands]").each ->
    id = $(this).attr('data-expands')
    $content = $("##{id}").css(display: 'none')

    $(this).bind 'click', ->
       $id = $(this).attr('data-expands')
       $("##{$id}").slideToggle()
