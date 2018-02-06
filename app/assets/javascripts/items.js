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

        inventoryTable += `<tr>
          <td>${name}</td>
          <td>${category}</td>
          <td>${price}</td>
          <td>${inventory}</td>
          <td><a href="/vendors/${vendor_id}/items/${item["id"]}/edit">Edit Item</a></td>
          <td><a href="/vendors/${vendor_id}/items/${item["id"]}" data-method="delete">Delete Item</a>
          </td>
        </tr>`
      }
      inventoryTable += "</table>"
      $("#js-inventoryTable").html(inventoryTable);
    });
  });
});

$(document).on("click", ".item_form", function() {
  $(".item_form").on("submit", function(event) {
    event.preventDefault();
    $.ajax({
      method: "PATCH",
      url: this.action,
      data: $(this).serialize(),
      success: function(response) {
        render vendor_items_path(current_vendor.id);
        console.log(response);
      }
    });
  });
});
