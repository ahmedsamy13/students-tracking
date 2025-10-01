import { useContext } from "react";
import StudentContext from "../studentContext";
import { Link } from "react-router-dom";

export default function AddStudentForm() {
  const {
    studentName,
    setStudentName,
    studentAge,
    setStudentAge,
    studentGrade,
    setStudentGrade,
    handleAddStudent,
  } = useContext(StudentContext);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add Student
        </h2>

        <form onSubmit={handleAddStudent} className="space-y-4">
          <input
            type="text"
            placeholder="Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="number"
            placeholder="Student Age"
            value={studentAge}
            onChange={(e) => setStudentAge(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="text"
            placeholder="Student Grade"
            value={studentGrade}
            onChange={(e) => setStudentGrade(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Add Student
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-blue-600 hover:underline hover:text-blue-800"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
