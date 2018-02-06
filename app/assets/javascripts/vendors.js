// request for vendor information -- bound to document, because it is available at document.ready
$(document).on("click", ".js-vendorDetails", function(event) {
  event.preventDefault();
  var id = $(this).data("id");
  var market_id = $(this).data("market");
  $.get("/markets/" + market_id + "/vendors/" + id + ".json", function(data) {
    var vendorDetails = `<p>${data["shop_name"]}</p><p>${data["description"]}</p><p>${data["contact"]}</p>`;
    $("#vendor_details_" + id).html(vendorDetails);
  });
});

// current vendor profile page
$(document).ready(function() {
  // add edit form dynamically to the page
  $(".js-vendorEdit").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    $.get("/vendors/" + id + "/edit", function(response) {
      $("#editVendor").html(response);
    });
  });
});

// submitting vendor edit form with ajax -- bound to document, because it is available at document.ready
$(document).on("submit", "form", function(event) {
  event.preventDefault();
  $.ajax({
    method: "PATCH",
    url: this.action,
    data: $(this).serialize(),
    success: function(response) {
      $("#js-shopName").text(response["shop_name"]);
      $("#js-vendorName").text(response["shop_name"]);
      $("#js-description").text(response["description"]);
      $("#js-contact").text(response["contact"]);
    }
  });
});
