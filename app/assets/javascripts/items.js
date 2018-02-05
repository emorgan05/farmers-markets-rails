$(document).ready(function() {
  // show item inventory
  $(".js-inventory").on("click", function(event) {
    event.preventDefault();
    var vendor_id = $(this).data("vendor");
    $.get("/vendor/" + vendor_id + "/items", function(data) {
      console.log(data);
    });
  });
});
