var canvasWidth = 600
var canvasHeight = 400

var url = 'darwin.txt'

var world = $('#world')

$.get(url, fuction(data) {

  var words = data.split(' ')
  words.forEach(function(word)
  var span = $(' ').text( '_' + word + '_')
  span.attr('data-word', word)

  span.on('mouseover', function(e){
  $(this).css('font-weight', 'bold')
  })

  span.on('mouseout', function(e)
  $(this).css('font-weight', "normal")
  })

  span.on('click', function(e) {
    $(this).fadeOut("slow")
    var target = $(this).attr('data-word')

    $('span[data-word=' + target +']')
     .fadeOut("slow")
  })

  world.append(span)

})

})
