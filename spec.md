# Specifications for the Rails Assessment

Specs:
- [x] Using Ruby on Rails for the project
- [X] Include at least one has_many relationship (x has_many y e.g. User has_many Recipes)
markets has_many :addresses
vendors has_many :items
categories has_many :items

- [X] Include at least one belongs_to relationship (x belongs_to y e.g. Post belongs_to User)
addresses belongs_to :market
items belongs_to :vendor
items belongs_to :categories

- [X] Include at least one has_many through relationship (x has_many y through z e.g. Recipe has_many Items through Ingredients)
markets has_many :vendors, through: :market_vendors
vendors has_many :markets, through: :market_vendors
vendors has_many :categories, through: :items
categories has_many :vendors, through: :items

- [X] The "through" part of the has_many through includes at least one user submittable attribute (attribute_name e.g. ingredients.quantity)
in items, when a vendor add or edits a new item, they submit the name, price, inventory, and choose a category from a drop-down menu

- [X] Include reasonable validations for simple model objects (list of model objects with validations e.g. User, Recipe, Ingredient, Item)
Item validates that price and inventory are integers
Vendor validates that the length of the description does not exceed 255 characters
Vendor also validates that the contact number is the appropriate length

- [X] Include a class level ActiveRecord scope method (model object & class method name and URL to see the working feature e.g. User.most_recipes URL: /users/most_recipes)
Vendors can filter their items based on category. The scope method is in the Items class and is called #by_category
When looking at a market, you can filter the list of vendors by category, I've set it up to only show unique instances of the vendor. So filtering by the category "fruit" will not give you 3 listings for Vendor 1.

- [X] Include a nested form writing to an associated model using a custom attribute writer (form URL, model name e.g. /recipe/new, Item)
markets has_many :addresses
When the admin/vendor creates a new market, the form has nested fields for the address. The nested fields are associated with a custom attribute writer in the Market model

- [X] Include signup (how e.g. Devise)
Includes signup with Devise

- [X] Include login (how e.g. Devise)
Includes login with Devise

- [X] Include logout (how e.g. Devise)
Includes logout with Devise

- [X] Include third party signup/login (how e.g. Devise/OmniAuth)
Includes third party signup/login with Devise and Omniauth using Facebook as the provider

- [X] Include nested resource show or index (URL e.g. users/2/recipes)
Includes items as a nested resource, so the url is vendors/1/items

- [X] Include nested resource "new" form (URL e.g. recipes/1/ingredients)
items are nested under vendors
all item paths are nested under vendors, including new, edit, and delete

- [X] Include form display of validation errors (form URL e.g. /recipes/new)
Item and Vendor forms display validation errors

Confirm:
- [X] The application is pretty DRY
If I repeated something, I tried to move it to a partial

- [X] Limited logic in controllers
Included class methods to limit logic in the controllers

- [X] Views use helper methods if appropriate
No helper methods used. They didn't seem to fit my project.

- [X] Views use partials if appropriate
Partials for items forms, markets forms, page header, and vendor filter
