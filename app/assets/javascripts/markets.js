$(document).ready(function() {
  // markets#show
  $("#js-marketShow").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    $.get("/markets/" + id, function(data) {
      console.log(data);
    });
  });
});

// function attachListeners() {
//   $("#js-marketShow").on("click", function(event) {
//     event.preventDefault();
//     showMarket();
//   });
// }
//
// function showMarket() {
//   var id = $(this).data("id");
//   $.get("/markets/" + id, function(data) {
//     console.log(data);
//   });
// }
