$(document).ready(function() {
  // show item inventory
  $(".js-inventory").on("click", function(event) {
    event.preventDefault();
    var vendor_id = $(this).data("vendor");
    $.get("/vendors/" + vendor_id + "/items", function(data) {
      var inventoryTable = "<h3>Inventory</h3><table><tr><th>Item Name</th><th>Category</th><th>Price</th><th>Inventory</th><th>Edit</th><th>Delete</th></tr>";

      for(var item of data) {
        var id = item["id"]
        var name = item["name"]
        var category = item["category"]["title"]
        var price = parseInt(item["price"])/100
        var inventory = item["inventory"]
        var vendorId = item["vendor"]["id"];

        inventoryTable += `<tr id="tr-${id}">
          <td>${name}</td>
          <td>${category}</td>
          <td>${price}</td>
          <td>${inventory}</td>
          <td><a href="/vendors/${vendorId}/items/${id}/edit" id="js-edit" data-id="${id}" data-vendor="${vendorId}">Edit Item</a></td>
          <td><a href="/vendors/${vendorId}/items/${id}" data-method="delete">Delete Item</a>
          </td>
        </tr>`;
      }

      inventoryTable += "</table>"
      $("#js-inventoryTable").html(inventoryTable);
      $("#js-buttons").html(`<button class="js-add" data-vendor=${vendor_id}>Add Item</button>`);
    });
  });
});

// show add item form
$(document).on("click", ".js-add", function(event) {
  event.preventDefault();
  var vendor_id = $(this).data("vendor");
  $.get("/vendors/" + vendor_id + "/items/new", function(response) {
    $("#js-addForm").html(response);
  });
});

// create item
$(document).on("submit", ".add_item", function(event) {
  event.preventDefault();
  var vendor_id = $(this).data("vendor");
  var values = $(this).serialize();
  var posting = $.post("/vendors/" + vendor_id + "/items", values);
  posting.done(function(response) {
    var id = response["id"];
    var name = response["name"];
    var category = response["category"]["title"];
    var price = parseInt(response["price"])/100;
    var inventory = response["inventory"]
    var vendorId = response["vendor"]["id"];

    var inventoryRow = `<tr id="tr-${id}">
      <td>${name}</td>
      <td>${category}</td>
      <td>${price}</td>
      <td>${inventory}</td>
      <td><a href="/vendors/${vendorId}/items/${id}/edit" id="js-edit" data-id="${id}" data-vendor="${vendorId}">Edit Item</a></td>
      <td><a href="/vendors/${vendorId}/items/${id}" data-method="delete">Delete Item</a>
      </td>
    </tr>`

    $("#js-inventoryTable tr:last").after(inventoryRow);
    $("#js-addForm").html("");
  });
});

// show edit item form
$(document).on("click", "#js-edit", function(event) {
  event.preventDefault();
  var vendor_id = $(this).data("vendor");
  var id = $(this).data("id");
  $.get("/vendors/" + vendor_id + "/items/" + id + "/edit", function(response) {
    $("#js-addForm").html(response);
  });
});

// update item
$(document).on("submit", ".edit_item", function(event) {
  event.preventDefault();
  var vendor_id = $(this).data("vendor");
  var id = $(this).data("id");
  $.ajax({
    method: "PATCH",
    url: this.action,
    data: $(this).serialize(),
    success: function(response) {
      var name = response["name"];
      var category = response["category"]["title"];
      var price = parseInt(response["price"])/100;
      var inventory = response["inventory"];
      var item_id = response["id"];

      var updatedRow = `<td>${name}</td>
        <td>${category}</td>
        <td>${price}</td>
        <td>${inventory}</td>
        <td><a href="/vendors/${vendor_id}/items/${item_id}/edit" id="js-edit" data-id="${item_id}" data-vendor="${vendor_id}">Edit Item</a></td>
        <td><a href="/vendors/${vendor_id}/items/${item_id}" data-method="delete">Delete Item</a>
        </td>`

      $("#tr-" + item_id).html(updatedRow);
      $("#js-addForm").html("");
    }
  });
});
