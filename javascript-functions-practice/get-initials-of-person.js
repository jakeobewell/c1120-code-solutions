/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var firstName = person.firstName;
  var firstInitial = firstName.charAt(0);
  var lastName = person.lastName;
  var lastInitial = lastName.charAt(0);
  var initials = firstInitial + lastInitial;
  return initials;
}
