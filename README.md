# RBAC (Role Based Access Control)
## Author, Narandhran Thangavel.
## Technologies details
* Frameworks    : NodeJs, ExpressJs
* ORM   : Mongoose
* Package-manager : NPM
* Database-version : 4.0.16
* Node-version : 10.15.3
* NPM-version : 6.11.3
* DB Name   : rbac_nodejs_mongo
* DB Port   : 27017 (default)
# Project Installation

**STEP1**
> **Clone project** :  git clone

**STEP2**
> **Install/Update node_modules** : npm install

**STEP3**
> **START NODE SERVER** : node index.js
(from project root directory)

> Before start index.js make sure you have DB created in your local.

# API Documentation
> **app.post('/user/register', userCtrl.registration)**;
* Json Body: {
  "fname": "narandhran",
  "lname": "thangavel",
  "username": "narandhran@gmail.com",
  "password" : "password",
  "dob": "1995-05-16",
  "gender": "male",
  "phone": "1234566789"
}
> **app.post('/user/login', userCtrl.login)**;
* Json Body: {
  "username": "narandhran@gmail.com",
  "password": "password"
}
