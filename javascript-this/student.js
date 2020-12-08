/* exported student */
var student = {
  firstName: 'Jakeob',
  lastName: 'Ewell',
  subject: 'coding',
  getFullName: function () {
    var fullName = this.firstName + " " + this.lastName;
    return fullName;
  },
  getIntroduction: function () {
    var introduction = "Hello, my name is " + this.getFullName() + " and I am studying " + this.subject + ".";
    return introduction;
  }
}
