$(document).ready(function() {
  // markets#show
  $("#js-marketShow").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    $.get("/markets/" + id, function(data) {
      $("#market_name").text(data.name);
      $("#street_address_1").text(data.addresses[0].street_address_1);
      $("#street_address_2").text(data.addresses[0].street_address_2);
      var cityStateZip = data.addresses[0].city + ", " + data.addresses[0].state + " " + data.addresses[0].zip
      $("#city_state_zip").text(cityStateZip);
      $("#market_hours").text(data.operating_hours);
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
