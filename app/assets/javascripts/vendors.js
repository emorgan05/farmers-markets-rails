// request for vendor information -- bound to document, because it is available at document.ready
// on welcome#home page
$(document).on("click", ".js-vendorDetails", function(event) {
  event.preventDefault();
  var id = $(this).data("id");
  var market_id = $(this).data("market");
  $.get("/markets/" + market_id + "/vendors/" + id + ".json", function(data) {
    let vendor = new Vendor(data["id"], data["shop_name"], data["description"], data["contact"]);
    vendor.renderDetails();
  });
});

// current vendor profile page
// add edit form dynamically to the page
$(document).ready(function() {
  $(".js-vendorEdit").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    $.get("/vendors/" + id + "/edit", function(response) {
      $("#editVendor").html(response);
    });
  });
});

// submitting vendor edit form with ajax -- bound to document, because it is available at document.ready
$(document).on("submit", ".update_vendor", function(event) {
  event.preventDefault();
  $.ajax({
    method: "PATCH",
    url: this.action,
    data: $(this).serialize(),
    success: function(response) {
      let vendor = new Vendor(response["id"], response["shop_name"], response["description"], response["contact"]);
      vendor.renderUpdates();
    }
  });
});

class Vendor {
  constructor(id, shop_name, description, contact) {
    this.id = id;
    this.shop_name = shop_name;
    this.description = description;
    this.contact = contact;
  }

  renderDetails() {
    var vendorDetails = `<p>${this.shop_name}</p><p>${this.description}</p><p>${this.contact}</p>`;
    $("#vendor_details_" + this.id).html(vendorDetails);
  }

  renderUpdates() {
    $("#js-shopName").text(this.shop_name);
    $("#js-vendorName").text(this.shop_name);
    $("#js-description").text(this.description);
    $("#js-contact").text(this.contact);
    $("#editVendor").html("");
  }
}
