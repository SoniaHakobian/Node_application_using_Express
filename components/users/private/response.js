class UserResponse {
  static generateResponse(data, user) {
    if (!user) {
      return UserResponse.generateRegularResponse(data);
    }
  }


  static generateRegularResponse(data) {
    return {
      id: data._id,
      username: data.username
    };
  }
}

module.exports = UserResponse;
