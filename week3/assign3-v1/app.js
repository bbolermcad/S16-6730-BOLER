var canvasWidth = 600
var canvasHeight = 500

// where I downloaded the Origin of the Species raw text file
var url = '/files/origin.txt'

// where we'll put all the words
var world = $('#world')

// the $.get here is a jQuery 'AJAX' function
// that will ask the webserver over the network for the
// file at . I supply it with a function that is called
// when the data is retreived
$.get(url, function(data) {

  // split when called on a string,
  // will make an array of the separated pieces
  var words = data.split(' ')

  // for each word in the text...
  words.forEach(function(word) {

    // make it a span so I can do stuff with it
    // think of this as a 'handle'
    var span = $('').text( ' ' + word + ' ')

    // mark the span with 'data-word' so I can look it up easily later
    span.attr('data-word', word)

    // highlight the word when I hover over
    span.on('mouseover', function(e) {
      $(this).css('background', 'yellow')
    })

    span.on('mouseout', function(e) {
      $(this).css('background', 'white')
    })

    // when you click on a word..
    span.on('click', function(e) {

      // make it stand out:
      $(this).css('color', 'blue')
      $(this).css('font-weight', 'bold')
      var target = $(this).attr('data-word')

      // find all the other instances of that word
      // and make them stand out
      $('span[data-word=' + target + ']')
        .css('color', 'blue')
        .css('font-weight', 'bold')

    })

    // add that span to our container div
    world.append(span)

  })

})
