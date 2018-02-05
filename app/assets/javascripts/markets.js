$(function() {
  // markets#show
  $(".js-marketShow").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    $.get("/markets/" + id + ".json", function(data) {
      console.log(data);
      $("#market_name_" + id).text(data["name"]);
      $("#street_address_1_" + id).text(data["addresses"][0]["street_address_1"]);
      $("#street_address_2_" + id).text(data["addresses"][0]["street_address_2"]);
      var cityStateZip = data["addresses"][0]["city"] + ", " + data["addresses"][0]["state"] + " " + data["addresses"][0]["zip"]
      $("#city_state_zip_" + id).text(cityStateZip);
      $("#market_hours_" + id).text(data["operating_hours"]);

      // vendors
      var vendorText = "<ul>";
      for(var vendor of data["vendors"]) {
        var name = vendor["shop_name"];
        vendorText += "<li>" + name + "</li>";
      }
      vendorText += "</ul>"
      $("#market_vendors").html(vendorText);
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
