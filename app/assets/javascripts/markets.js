$(document).ready(function() {
  // markets#show
  $(".js-marketShow").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    $.get("/markets/" + id, function(data) {
      $("#market_name_" + id).text(data["name"]);
      $("#street_address_1_" + id).text(data["addresses"][0]["street_address_1"]);
      $("#street_address_2_" + id).text(data["addresses"][0]["street_address_2"]);
      var cityStateZip = data["addresses"][0]["city"] + ", " + data["addresses"][0]["state"] + " " + data["addresses"][0]["zip"]
      $("#city_state_zip_" + id).text(cityStateZip);
      $("#market_hours_" + id).text(data["operating_hours"]);

      // vendors
      var vendorText = "<h3>Vendors</h3><ul>";
      for(var vendor of data["vendors"]) {
        var name = vendor["shop_name"];
        vendorText += `<li><button class='js-vendorDetails' data-market='${id}' data-id='${vendor["id"]}'>${name}</button><div id='vendor_details_${vendor["id"]}'></div></li>`;
      }
      vendorText += "</ul>"
      $("#market_vendors_" + id).html(vendorText);
    });
  });

  // request for vendor information -- bound to document, because it is available at document.ready
  $(document).on("click", ".js-vendorDetails", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var market_id = $(this).data("market");
    $.get("/markets/" + market_id + "/vendors/" + id, function(data) {
      console.log(data);
      var vendorDetails = `<p>${data["shop_name"]}</p><p>${data["description"]}</p><p>${data["contact"]}</p>`;
      $("#vendor_details_" + id).html(vendorDetails);
    });
  });
});
