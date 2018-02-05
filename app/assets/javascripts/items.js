$(document).ready(function() {
  // show item inventory
  $(".js-inventory").on("click", function(event) {
    event.preventDefault();
    var vendor_id = $(this).data("vendor");
    $.get("/vendors/" + vendor_id + "/items", function(data) {
      var inventoryTable = "<h3>Inventory</h3><table><tr><th>Item Name</th><th>Category</th><th>Price</th><th>Inventory</th><th>Edit</th><th>Delete</th></tr>"
      for(var item of data) {
        var name = item["name"];
        var category = item["category"]["title"];
        var price = parseInt(item["price"])/100;
        var inventory = item["inventory"];
        inventoryTable += `<tr><td>${name}</td><td>${category}</td><td>${price}</td><td>${inventory}</td></tr>`
      }
      inventoryTable += "</table>"
      $("#js-inventoryTable").html(inventoryTable);
    });
  });
});
