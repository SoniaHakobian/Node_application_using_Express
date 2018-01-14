const UsersDAO = require('./private/dao');
const UsersResponse = require('./private/response');
const AppConstants = require('./../settings/constants');


class UsersService {
  getOneUser (query, options) {
    return new Promise ((resolve, reject) => {
      options = options || {};
      return UsersDAO.getOneData(query).then(data => {
        resolve(UsersResponse.generateResponse(data, options.requester));
      }).catch(err => {
        reject({
          err: 'error'
        })
      })
    })
  }
  getUser(query, limit, offset) {

      return new Promise((resolve, reject) => {
        return UsersDAO.getData(query, limit, offset).then(data => {
          resolve(data);
        }).catch(err => {
          reject({
            err: 'error'
          })
        })
      })
    }

setUser(user){

  return new Promise((resolve, reject) => {
    return UsersDAO.insertData(user).then(data =>{
      resolve(data);
    }).catch(err => {
      reject({
        err:'error'
      });
    });
  });
}


updateUser(id, query) {
  return new Promise((resolve, reject) => {
    UsersDAO.updateData(id, query).then(data => {
      resolve(data);
    }).catch (err => {
      reject({
        err: 'error'
      })
    })
  })
}



removeUser(id) {
  return new Promise((resolve, reject) => {
    UsersDAO.removeData(id).then(data => {
      resolve(data);
    }).catch(err => {
      reject({
      err: 'error'
    })
    })
  })
}
}

module.exports = new UsersService();
