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
// attempt to add edit form dynamically to the page -- currently not functioning
$(document).ready(function() {
  // $(".js-vendorEdit").on("click", function(event) {
  //   event.preventDefault();
  //   var id = $(this).data("id");
  //   console.log($(".js-vendorEdit").html)
  //   $.get("/vendors/" + id + "/edit", function(data) {
  //     $("#editVendor").html("render partial: 'vendors/edit'");
  //   });
  // });

  // submitting vendor edit form with ajax
  $("form").submit(function(event) {
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
        console.log(response);
      }
    });
  });
});
