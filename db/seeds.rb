# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
nc_market = Market.create(name: "NC State Farmers Market", operating_hours: "Mon - Sat, 5 am - 6 pm")
va_market = Market.create(name: "Carytown Farmers Market", operating_hours: "Sun, 11 am - 3 pm")
kc_market = Market.create(name: "City Market Farmers Market", operating_hours: "Sat and Sun, 9 am - 3 pm")

nc_address = Address.create(street_address_1: "1201 Agriculture Street", city: "Raleigh", state: "NC", zip: "27603", market_id: nc_market.id)
va_address = Address.create(street_address_1: "3201 West Cary Street", city: "Richmond", state: "VA", zip: "23221", market_id: va_market.id)
nc_address = Address.create(street_address_1: "20 E. 5th Street", street_address_2: "Suite 201", city: "Kansas City", state: "MO", zip: "64106", market_id: kc_market.id)

vendor_1 = Vendor.create(email: "a@email.com", password: "password", shop_name: "Wild Helix", description: "Wild Helix features handmade patina jewelry with a focus on geometric design. The Wild Helix collection is inspired by natural hues and heavily influenced by the intersection of art and science. Due to the patina process, no two pieces are exactly alike!", contact: "804-519-3307")
vendor_2 = Vendor.create(email: "b@email.com", password: "password", shop_name: "The King's Table", description: "We offer Fresh wild caught seafood and sustainably responsible products to serve our customers. We take care to provide our customers high quality services personalized for their unique needs.", contact: "703-409-9678")
vendor_3 = Vendor.create(email: "c@email.com", password: "password", shop_name: "Phoenix Handcraft", description: "We are a blacksmith and mosaic artist, husband-and-wife team creating sustainable, handmade decor in metal, mosaic, & wood.", contact: "804-888-9778")

market_vendor_1 = MarketVendor.create(market_id: nc_market.id, vendor_id: vendor_1.id)
market_vendor_1 = MarketVendor.create(market_id: va_market.id, vendor_id: vendor_2.id)
market_vendor_1 = MarketVendor.create(market_id: kc_market.id, vendor_id: vendor_3.id)

category_1 = Category.create(title: "fruit")
category_2 = Category.create(title: "vegetables")
category_3 = Category.create(title: "dairy")
category_4 = Category.create(title: "meat")
category_5 = Category.create(title: "seafood")
category_6 = Category.create(title: "baked goods")
category_7 = Category.create(title: "jams, jellies")
category_8 = Category.create(title: "salsa")
category_9 = Category.create(title: "honey")

item_1 = Item.create(name: "apples", price: "200", inventory: "250", vendor_id: vendor_1.id, category_id: category_1.id)
item_2 = Item.create(name: "peaches", price: "200", inventory: "250", vendor_id: vendor_1.id, category_id: category_1.id)
item_3 = Item.create(name: "salmon", price: "1000", inventory: "10", vendor_id: vendor_2.id, category_id: category_5.id)
item_4 = Item.create(name: "cinnamon raisin muffins", price: "400", inventory: "25", vendor_id: vendor_3.id, category_id: category_6.id)
item_5 = Item.create(name: "salsa", price: "600", inventory: "50", vendor_id: vendor_3.id, category_id: category_8.id)

admin = Vendor.create(email: "z@email.com", password: "password", role: 1)
