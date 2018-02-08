$(document).ready(function() {
  // show item inventory
  $(".js-inventory").on("click", function(event) {
    event.preventDefault();
    var vendor_id = $(this).data("vendor");
    $.get("/vendors/" + vendor_id + "/items", function(data) {
      itemsTableHtml = HandlebarsTemplates['items_table']({
        items: data
      });
      $('#js-inventoryTable').html(itemsTableHtml);
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
      var item_id = response["id"];
      updatedItemHtml = HandlebarsTemplates['item_update']({
        item: response
      });
      $("#tr-" + item_id).html(updatedItemHtml);
      $("#js-addForm").html("");
    }
  });
});
