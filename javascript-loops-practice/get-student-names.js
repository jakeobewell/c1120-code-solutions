/* exported getStudentNames */
function getStudentNames(students) {
  var array = []
  var i = 0;
  while (i < students.length) {
    array.push(students[i].name);
    i++;
  }
  return array;
}
