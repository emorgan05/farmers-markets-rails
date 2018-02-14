$(document).ready(function() {
  // show item inventory
  $(".js-inventory").on("click", function(event) {
    event.preventDefault();
    const vendorID = $(this).data("vendor");
    $.get("/vendors/" + vendorID + "/items", function(data) {
      itemsTableHtml = HandlebarsTemplates['items_table']({
        items: sortByPrice(data)
      });
      $('#js-inventoryTable').html(itemsTableHtml);
      $("#js-buttons").html(`<button class="js-add" data-vendor=${vendorID}>Add Item</button>`);
    });
  });
});

// sort items based on Price
function sortByPrice(items) {
  return items.sort((a, b) => a.price - b.price);
}

// show add item form
$(document).on("click", ".js-add", function(event) {
  event.preventDefault();
  const vendorID = $(this).data("vendor");
  $.get("/vendors/" + vendorID + "/items/new", function(response) {
    $("#js-addForm").html(response);
  });
});

// create item
$(document).on("submit", ".add_item", function(event) {
  event.preventDefault();
  const vendorID = $(this).data("vendor");
  const values = $(this).serialize();
  const posting = $.post("/vendors/" + vendorID + "/items", values);
  posting.done(function(response) {
    itemRowHtml = HandlebarsTemplates['item_row']({
      item: response
    });
    $("#js-inventoryTable tr:last").after(itemRowHtml);
    $("#js-addForm").html("");
  });
});

// show edit item form
$(document).on("click", "#js-edit", function(event) {
  event.preventDefault();
  const vendorID = $(this).data("vendor");
  const id = $(this).data("id");
  $.get("/vendors/" + vendorID + "/items/" + id + "/edit", function(response) {
    $("#js-addForm").html(response);
  });
});

// update item
$(document).on("submit", ".edit_item", function(event) {
  event.preventDefault();
  const vendorID = $(this).data("vendor");
  const id = $(this).data("id");
  $.ajax({
    method: "PATCH",
    url: this.action,
    data: $(this).serialize(),
    success: function(response) {
      const itemID = response["id"];
      updatedItemHtml = HandlebarsTemplates['item_update']({
        item: response
      });
      $("#tr-" + itemID).html(updatedItemHtml);
      $("#js-addForm").html("");
    }
  });
});
