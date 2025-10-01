import { createContext, useEffect } from "react";
import { useState } from "react";

const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [studentID, setStudentID] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [studentGrade, setStudentGrade] = useState("");
  const [students, setStudents] = useState(function () {
    const savedStudents = localStorage.getItem("savedStudents");
    return savedStudents ? JSON.parse(savedStudents) : [];
  });
  useEffect(
    function () {
      localStorage.setItem("savedStudents", JSON.stringify(students));
    },
    [students]
  );
  function onAddStudent(student) {
    setStudents([...students, student]);
  }
  function handleAddStudent(e) {
    e.preventDefault();
    const newStudent = {
      id: studentID,
      name: studentName,
      age: studentAge,
      grade: studentGrade,
    };
    if (!studentName || !studentAge || !studentGrade) {
      alert("Please fill in all fields");
      return;
    }
    onAddStudent(newStudent);
    setStudentID("");
    setStudentName("");
    setStudentAge("");
    setStudentGrade("");
  }
  function handelDeleteStudent(id) {
    setStudents((students) => students.filter((student) => student.id !== id));
  }
  return (
    <StudentContext.Provider
      value={{
        studentID,
        setStudentID,
        studentName,
        setStudentName,
        studentAge,
        setStudentAge,
        studentGrade,
        setStudentGrade,
        handleAddStudent,
        students,
        setStudents,
        handelDeleteStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export default StudentContext;
