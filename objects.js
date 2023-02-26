const cohort = {
  name: 'January2023',
  id: 1234,
  students: ['Mary Jo', 'Peter Piper', 'Phillipe Petit']
};

const january2023 = (cohort) => { 
  console.log(`${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`);
 }

 january2023(cohort);
 module.exports = { cohort, january2023 };

 /* in terminal call 
 ➜  javascript-fundamentals git:(main) ✗ node objects.js
1234 - January2023 - 3 students in this cohort

  <COHORT_ID> - <COHORT_NAME> - <NUMBER_OF_STUDENTS> students in this cohort
; */
