import { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import StudentContext from "./studentContext";

export default function EditStudent() {
  const { students, setStudents } = useContext(StudentContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const studentToUpdate = students.find((student) => String(student.id) === id);
  const [name, setName] = useState(studentToUpdate.name);
  const [age, setAge] = useState(studentToUpdate.age);
  const [grade, setGrade] = useState(studentToUpdate.grade);

  function handleEdit(e) {
    e.preventDefault();
    const updatedStudents = students.map((s) =>
      String(s.id) === id ? { ...s, name, age, grade } : s
    );

    setStudents(updatedStudents);
    navigate("/");
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleEdit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md space-y-4"
      >
        <h1 className="text-xl font-bold text-gray-800 mb-4">Edit Student</h1>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full p-2 border rounded"
        />

        <input
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          placeholder="Age"
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          placeholder="Grade"
          className="w-full p-2 border rounded"
        />

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Save
          </button>
          <Link
            to="/"
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
