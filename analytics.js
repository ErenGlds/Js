export function calculateClassAverage(students, courseId) {
  const grades = students
    .map(student =>
      student.courses.find(c => c.courseId === courseId)
    )
    .filter(course => course !== undefined)
    .map(course => course.grade);

  if (grades.length === 0) return 0;

  const total = grades.reduce((sum, g) => sum + g, 0);
  return (total / grades.length).toFixed(2);
}
export function findTopStudent(students) {
  return students.reduce((top, current) => {
    return current.getAverage() > top.getAverage() ? current : top;});
}
export function filterStudents(students, criteriaFn) {
  return students.filter(criteriaFn);
}
