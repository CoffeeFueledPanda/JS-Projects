// alert('connected');
// Toggle specific todos by clicking
$('ul').on('click', 'li', function () {
  $(this).toggleClass('completed');
});

// Click on X to delete todo
$('ul').on('click', 'span', function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation(); // Stops it from bubbling up through parent elements
});

$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    // Grab new todo text from input
    let todoText = $(this).val();
    $(this).val(''); // Clear the input after grabbing
    // Create a new li and add to ul
    $('ul').append(
      '<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' +
        todoText +
        '</li>'
    );
  }
});

$('.fa-plus').click(function () {
  $("input[type='text']").fadeToggle(500);
});
