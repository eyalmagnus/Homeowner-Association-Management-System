class userModel {
  constructor(name, email, apartment, isCM, buildingName, buildingID, userID) {
    this.name = name;
    this.email = email;
    this.apartment = apartment;
    this.isCM = isCM;
    this.buildingName = buildingName;
    this.buildingID = buildingID;
    this.userID = userID;
  }

  // actorAge() {
  //   const currentYear = new Date().getFullYear();
  //   // const birthyear = this.birthday;
  //   let age = currentYear - this.birthday;
  //   return age;
  // }
}

export default userModel;
