import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { AddStudents } from "./Components/Students/AddStudents";
import { TotalStudents } from "./Components/Students/TotalStudents";
import { AddTeacher } from "./Components/Teachers/AddTeacher";
import { TotalTeacher } from "./Components/Teachers/TotalTeacher";
import { Clases } from "./Components/Clases/Clases";
import { AddClasses } from "./Components/Clases/AddClasses";
import { Admin } from "./Components/Dashboard/Admin";
import { Parents } from "./Components/Dashboard/Parents";
import { Students } from "./Components/Dashboard/Students";
import { Teacher } from "./Components/Dashboard/Teacher";
import { StudentDetail } from "./Components/Students/StudentDetail";

export const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/dashboard/teachers" element={<Teacher />} />
        <Route path="/dashboard/students" element={<Students />} />
        <Route path="/dashboard/parents" element={<Parents />} />
        <Route path="/addstudent" element={<AddStudents />} />
        <Route path="/totalstudents" element={<TotalStudents />} />
        <Route path="/studentdetail" element={<StudentDetail />} />
        <Route path="/addteacher" element={<AddTeacher />} />
        <Route path="/teachers" element={<TotalTeacher />} />
        <Route path="/addclass" element={<AddClasses />} />
        <Route path="/classes" element={<Clases />} />
      </Routes>
    </div>
  );
};
