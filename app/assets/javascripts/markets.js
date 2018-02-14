$(document).ready(function() {
  // markets#show
  $(".js-marketShow").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    $.get("/markets/" + id, function(data) {
      let market = new Market(data["id"], data["name"], data["addresses"][0]["street_address_1"], data["addresses"][0]["street_address_2"], data["addresses"][0]["city"], data["addresses"][0]["state"], data["addresses"][0]["zip"], data["operating_hours"], data["vendors"]);

      market.render();
    });
  });
});


class Market {
  constructor(id, name, streetAddress1, streetAddress2, city, state, zip, operatingHours, vendors) {
    this.id = id;
    this.name = name;
    this.streetAddress1 = streetAddress1;
    this.streetAddress2 = streetAddress2;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.operatingHours = operatingHours;
    this.vendors = vendors
  }

  render() {
    // populate market information
    $("#market_name_" + this.id).text(this.name);
    $("#street_address_1_" + this.id).text(this.streetAddress1);
    $("#street_address_2_" + this.id).text(this.streetAddress2);
    var cityStateZip = this.city + ", " + this.state + " " + this.zip;
    $("#city_state_zip_" + this.id).text(cityStateZip);
    $("#market_hours_" + this.id).text(this.operatingHours);

    // list vendors with ability to click for more info
    let vendorText = "<h3>Vendors</h3><ul>";
    for(let vendor of this.vendors) {
      const name = vendor["shop_name"];
      vendorText += `<li><button class='js-vendorDetails' data-market='${this.id}' data-id='${vendor["id"]}'>${name}</button><div id='vendor_details_${vendor["id"]}'></div></li>`;
    }
    vendorText += "</ul>"
    $("#market_vendors_" + this.id).html(vendorText);
  }
}
