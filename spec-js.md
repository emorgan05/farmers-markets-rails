# Specifications for the Rails with jQuery Assessment

Specs:
- [X] Use jQuery for implementing new requirements
Used jQuery in all app/assets/javascripts/.js files

- [X] Include a show resource rendered using jQuery and an Active Model Serialization JSON backend.
On the welcome#home page, there are 2 show resources -- markets#show and market_vendors#show. By clicking on a market's button, you get the show resource for the market which includes it's address, operating hours, and a list of vendors. You can also click on a vendor and get a show resource for the vendor which includes the vendor's shop name, description, and contact.

- [X] Include an index resource rendered using jQuery and an Active Model Serialization JSON backend.
I have three index resources. On the welcome#home page, you immediately see an index of all the markets. If you click on a specific market, you see an index of the vendors at that market. If you are a vendor and go to your vendor#show (the personal vendor page) page, you can click on inventory and see an index of all the inventory you are tracking for your shop. This index is rendered to the page as a table.

- [X] Include at least one has_many relationship in information rendered via JSON and appended to the DOM.
A market has_many vendors -- this relationship is shown on the welcome#home page.
A vendor has_many items -- this relationship is shown on the vendor#show page.

- [X] Use your Rails API and a form to create a resource and render the response without a page refresh.
A vendor can create a new item and add it to their inventory. This action takes place on the vendor#show page (the personal vendor page). After clicking the "Inventory" button, the table of inventory is loaded to the page, and an "Add Item" button is loaded below it. Clicking the "Add Item" button, adds the items#new form to the page, the vendor can fill it out, click to submit, and the new item is added as a new last row to the table, all without a page refresh.

- [X] Translate JSON responses into js model objects.
Both the markets and vendors are translated into js model objects with a class constructor.

- [X] At least one of the js model objects must have at least one method added by your code to the prototype.
Both the markets and vendors have a prototype method that renders the show details to the page.

Confirm
- [X] You have a large number of small Git commits
- [X] Your commit messages are meaningful
- [X] You made the changes in a commit that relate to the commit message
- [X] You don't include changes in a commit that aren't related to the commit message
