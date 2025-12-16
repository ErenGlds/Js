import { Student } from "./models.js";
import { fetchStudents } from "./database.js";
import { calculateClassAverage,findTopStudent,filterStudents} from "./analytics.js";

fetchStudents(rawData => {
  const students = rawData.map(
    s => new Student(s.id, s.name, s.courses)
  );
  console.log("Testing Immutability:");
  console.log("Original ID:", students[0].id);
  console.log("Attempting to change ID...");
  students[0].id = 103;
  console.log(
    "Final ID:",
    students[0].id,
    "(should be unchanged)"
  );

  console.log("Student Averages:");

  const avg101 = calculateClassAverage(students, 101);
  console.log("Class Average for Course 101:", avg101);

  const topStudent = findTopStudent(students);
  console.log("Top Student: ${topStudent.name} (Average: ${topStudent.getAverage()})");

  const course102Students = filterStudents(students,s => s.courses.some(c => c.courseId === 102));

  console.log("Students in Course 102:",course102Students.map(s => s.name).join(", "));
});
