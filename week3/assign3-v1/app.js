var canvasWidth = 600
var canvasHeight = 400

var url = 'darwin.txt'

var world = $('#world')

$.get(url, fuction(data) {

  var words = data.split(' ')
  words.forEach(function(word)
  var span = $(' ').text( '_' + word + '_')
  span.attr('data-word', word)
}
