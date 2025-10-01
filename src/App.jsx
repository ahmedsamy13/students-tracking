import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddStudentForm from "./components/AddStudentForm";
import Home from "./Home";
import StudentContext, { StudentProvider } from "./studentContext";
import EditStudent from "./editStudent";

function App() {
  return (
    <StudentProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addStudent" element={<AddStudentForm />} />
        <Route path="/editstudent/:id" element={<EditStudent />} />
      </Routes>
    </StudentProvider>
  );
}

export default App;
