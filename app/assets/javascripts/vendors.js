// request for vendor information -- bound to document, because it is available at document.ready
// on welcome#home page
$(document).on("click", ".js-vendorDetails", function(event) {
  event.preventDefault();
  const id = $(this).data("id");
  const marketID = $(this).data("market");
  $.get("/markets/" + marketID + "/vendors/" + id + ".json", function(data) {
    let vendor = new Vendor(data["id"], data["shop_name"], data["description"], data["contact"]);
    vendor.renderDetails();
  });
});

// current vendor profile page
// add edit form dynamically to the page
$(document).ready(function() {
  $(".js-vendorEdit").on("click", function(event) {
    event.preventDefault();
    const id = $(this).data("id");
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
  constructor(id, shopName, description, contact) {
    this.id = id;
    this.shopName = shopName;
    this.description = description;
    this.contact = contact;
  }

  renderDetails() {
    const vendorDetails = `<p>${this.shopName}</p><p>${this.description}</p><p>${this.contact}</p>`;
    $("#vendor_details_" + this.id).html(vendorDetails);
  }

  renderUpdates() {
    $("#js-shopName").text(this.shopName);
    $("#js-vendorName").text(this.shopName);
    $("#js-description").text(this.description);
    $("#js-contact").text(this.contact);
    $("#editVendor").html("");
  }
}
