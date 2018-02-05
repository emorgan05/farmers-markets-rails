// request for vendor information -- bound to document, because it is available at document.ready
$(document).on("click", ".js-vendorDetails", function(event) {
  event.preventDefault();
  var id = $(this).data("id");
  var market_id = $(this).data("market");
  $.get("/markets/" + market_id + "/vendors/" + id + ".json", function(data) {
    console.log(data);
    var vendorDetails = `<p>${data["shop_name"]}</p><p>${data["description"]}</p><p>${data["contact"]}</p>`;
    $("#vendor_details_" + id).html(vendorDetails);
  });
});
