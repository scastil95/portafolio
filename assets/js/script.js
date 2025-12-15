const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

$(document).ready(function () {

  $('h1').on("click", function () {
    $(this).css({
      "color": "white",
      "background-color": "black"
    });
  });

  $('h1').on("dblclick", function () {
    $(this).css({
      "color": "black",
      "background-color": "white"
    });
  });

  $("#hider").on("click", function () {
    $("span:last-child").hide("fast", function () {
      // Use arguments.callee so we don't need a named function
      $(this).prev().hide("fast", arguments.callee);
    });
  });

  $("#shower").on("click", function () {
    $("span").show(2000);
  });

  $("h2").on("click", function () {
    $(".carta-1").slideUp("click");
  });
  $("p").on("click", function () {
    $(".carta-1").slideDown("click");
  });


  $(".carta-1")
    .odd()
    .hide()
    .end()
    .even()
    .hover(function () {
      $(this)
        .toggleClass("active")
        .next()
        .stop(true, true)
        .slideToggle();
    });

  $(".carta-2")
    .odd()
    .hide()
    .end()
    .even()
    .hover(function () {
      $(this)
        .toggleClass("active")
        .next()
        .stop(true, true)
        .slideToggle();
    });
});

$(".carta-3")
  .odd()
  .hide()
  .end()
  .even()
  .hover(function () {
    $(this)
      .toggleClass("active")
      .next()
      .stop(true, true)
      .slideToggle();
  });

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

