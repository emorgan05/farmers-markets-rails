# README

Farmers-Markets is a tool for farmers' market vendors to track their markets and schedule, and their inventory. Their personal profile page shows their markets and provides a link to their inventory. A public vendor page shows the description of the shop and contact information. Admins can create a new farmers' market with all their details.

# Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Installing
Fork this repo and clone it to your computer. Run
```
bundle install
```
and then migrate the database with
```
rake db:migrate
```
There is a seed file that will give you the list of categories, run
```
rake db:seed
```

# Buit with
Rails
Devise
Omniauth
SQLite database

# Contributing
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

# License
This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details
