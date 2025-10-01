import { useContext } from "react";
import StudentContext from "./studentContext";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

export default function Home() {
  const { students, handelDeleteStudent } = useContext(StudentContext);

  const chartData = students.map((student) => ({
    name: student.name,
    grade: Number(student.grade),
  }));

  const COLORS = ["#3B82F6", "#F59E0B", "#10B981", "#EF4444", "#8B5CF6"];

  return (
    <div className="p-6 bg-gray-50 min-h-screen grid grid-cols-2 max-md:grid-cols-1 gap-10">
      {/* Header + Table */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Student List</h1>
          <Link
            to="/addStudent"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            + Add Student
          </Link>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mb-10">
          <table className="min-w-full border border-gray-300 rounded-lg shadow-md bg-white">
            <thead className="bg-blue-100 text-gray-700">
              <tr className="divide-x divide-gray-300">
                <th className="py-3 px-4 border-b text-left">ID</th>
                <th className="py-3 px-4 border-b text-left">Name</th>
                <th className="py-3 px-4 border-b text-left">Age</th>
                <th className="py-3 px-4 border-b text-left">Grade</th>
                <th className="py-3 px-4 border-b text-left">Edit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300">
              {students.length > 0 ? (
                students.map((student, index) => (
                  <tr
                    key={student.id}
                    className="divide-x divide-gray-300 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4">{student.name}</td>
                    <td className="py-2 px-4">{student.age}</td>
                    <td className="py-2 px-4">{student.grade}</td>
                    <td className="py-2 px-4 text-center ">
                      <div
                        className="flex  space-x-1 text-center
                      "
                      >
                        <Link
                          to={`editstudent/${student.id}`}
                          className="text-center hover:bg-blue-600 "
                        >
                          <button className="p-1 cursor-pointer">⚙️</button>
                        </Link>
                        <button
                          className="p-1 cursor-pointer hover:bg-red-700"
                          onClick={() => handelDeleteStudent(student.id)}
                        >
                          ❌
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-6 text-gray-500 italic"
                  >
                    No students added so far
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Charts */}
      <div className="grid gap-6 overflow-x-hidden">
        {students.length > 0 && (
          <>
            {/* Bar Chart */}
            <div className="bg-white shadow-md p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Students Grades (Bar Chart)
              </h2>
              <BarChart
                width={600}
                height={300}
                data={chartData}
                margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="4 4" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="grade" fill="#3B82F6" />
              </BarChart>
            </div>

            {/* Pie Chart */}
            <div className="bg-white shadow-md p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Students Grades (Pie Chart)
              </h2>
              <PieChart width={400} height={400}>
                <Pie
                  data={chartData}
                  dataKey="grade"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  fill="#8884d8"
                  label
                >
                  {chartData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
