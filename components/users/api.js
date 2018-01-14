const express = require('express');
const UsersRouter = express.Router();
const UsersService = require('./service');
const AppConstants = require('./../settings/constants');


UsersRouter.get('/', (req,res) => {
  UsersService.getUser({}, req.query.limit, req.query.offset).then(data => {
    let user = data.map(d =>{
      return{
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthdate: req.body.birthdate,
        address: req.body.address,
        address2: req.body.address2,
        country: req.body.country,
        city: req.body.city,
        postalCode: req.body.postalCode
      }
    })
    return res.send(user);
  }).catch(err => {
    throw 'user inform. error'
  });
})




UsersRouter.post('/', (req,res) => {

    let user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      birthdate: req.body.birthdate,
      address: req.body.address,
      address2: req.body.address2,
      country: req.body.country,
      city: req.body.city,
      postalCode: req.body.postalCode
  };
  console.log(user);
  UsersService.setUser(user).then(data =>{
    return res.send(data);
  })
})





UsersRouter.put('/:id/', (req, res) => {
    if (req.params.id != req.user._id) {
      return res.send('error in put request');
    }

  let id = req.params.id;
  let firstName = req.body.firstName || undefined;
  let lastName = req.body.lastName || undefined;
  let birthdate = req.body.birthdate || undefined;
  let address = req.body.address || undefined;
  let address2 = req.body.address2 || undefined;
  let country = req.body.country || undefined;
  let city = req.body.city || undefined;
  let postalCode = req.body.postalCode || undefined;



  let update_user = {};

  if (username) {
    update_user.username = username;
  }
  if (name) {
    update_user.name = name;
  }
  if (role) {
    update_user.role = role;
  }
  if (email) {
    update_user.email = email;
  }
  console.log('update_user == ', update_user);

  let options = {
    requester: req.user
  };

  UsersService.updateUser(id, update_user, options).then(user => {
    return res.send(user);
  }).catch(err => {
    console.log('error == ', err);
    return res.send(err);
  })
})




UsersRouter.delete('/:id/', (req, res) => {
  UsersService.removeUser(req.params.id).then(user => {
    return res.send(user);
  }).catch(err => {
    return res.send(err);
  })
})


module.exports = UsersRouter;
