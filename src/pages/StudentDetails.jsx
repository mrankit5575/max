import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUsers, FaStar, FaClock, FaTrophy, FaExclamationTriangle, FaChartLine, FaBook } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const performanceLevels = {
  Excellent: { 
    color: "bg-emerald-100 text-emerald-800",
    borderColor: "border-emerald-300",
    icon: <FaTrophy className="text-yellow-500" />,
    gradient: "from-emerald-400 to-emerald-200",
    percentage: 90,
    ribbon: "TOP PERFORMER"
  },
  Good: { 
    color: "bg-blue-100 text-blue-800",
    borderColor: "border-blue-300",
    icon: <FaStar className="text-blue-500" />,
    gradient: "from-blue-400 to-blue-200",
    percentage: 75
  },
  Average: { 
    color: "bg-amber-100 text-amber-800",
    borderColor: "border-amber-300",
    icon: <FaStar className="text-amber-500" />,
    gradient: "from-amber-400 to-amber-200",
    percentage: 60
  },
  Poor: { 
    color: "bg-red-100 text-red-800",
    borderColor: "border-red-300",
    icon: <FaExclamationTriangle className="text-red-500" />,
    gradient: "from-red-400 to-red-200",
    percentage: 40,
    ribbon: "PERFORMANCE OF THE WEAK",
    improvementTips: [
      "Needs regular practice sessions",
      "Focus on fundamental concepts",
      "Requires additional support",
      "Improve assignment completion rate"
    ]
  }
};

export default function StudentDetails() {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchStudent() {
      try {
        setLoading(true);
        const response = await axios.get("https://maxbackend.onrender.com/api/student/");
        setStudent(response.data);
        setError("");
      } catch (err) {
        setError("No student data at the moment. Awaiting admin updates.");
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchStudent();
  }, []);

  if (loading) {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg space-y-4 animate-pulse">
        <div className="flex justify-center">
          <div className="w-32 h-32 rounded-full bg-gray-200"></div>
        </div>
        <div className="space-y-3">
          <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg text-center">
        <p className="text-red-500 font-medium">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-3 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg flex flex-col items-center text-gray-500">
        <FaClock className="text-4xl mb-3 text-gray-400" />
        <p className="text-lg">Waiting for student data...</p>
        <p className="text-sm mt-2 text-gray-400">No student records found</p>
      </div>
    );
  }

  const performanceData = performanceLevels[student.performance] || performanceLevels.Average;
  const isWeakStudent = student.performance === "Poor";

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Performance Ribbon */}
      {(isWeakStudent || student.performance === "Excellent") && (
        <div className={`bg-gradient-to-r ${performanceData.gradient} text-white p-3 flex items-center justify-center`}>
          <div className="text-center">
            <div className="text-xs uppercase tracking-widest font-semibold opacity-80">
              {performanceData.ribbon}
            </div>
            <div className="text-lg font-bold mt-1 flex items-center justify-center">
              {performanceData.icon}
              <span className="mx-2">{student.performance}</span>
              {performanceData.icon}
            </div>
          </div>
        </div>
      )}

      {/* Student Profile Section */}
      <div className="p-6">
        <div className="flex flex-col items-center text-center">
          {/* Student Photo with Performance Badge */}
          <div className="relative mb-6 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-white opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <img
              src={student.photo || "https://via.placeholder.com/150"}
              alt="Student"
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className={`absolute -bottom-2 -right-2 p-3 rounded-full ${performanceData.color} border-2 ${performanceData.borderColor} shadow-md`}>
              {performanceData.icon}
            </div>
          </div>

          {/* Student Name and Batch */}
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{student.name}</h2>
          <div className="flex items-center justify-center text-gray-600 mb-6">
            <FaUsers className="mr-2 text-gray-400" />
            <span className="text-gray-500">{student.batchName}</span>
          </div>

          {/* Performance Progress Circle */}
          <div className="w-44 h-44 mb-8 relative">
            <CircularProgressbar
              value={performanceData.percentage}
              text={`${performanceData.percentage}%`}
              styles={buildStyles({
                pathColor: performanceData.color.split('-')[2],
                textColor: performanceData.color.split('-')[2],
                trailColor: '#f3f4f6',
                textSize: '28px',
                pathTransitionDuration: 1.5,
              })}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`w-32 h-32 rounded-full ${performanceData.color} bg-opacity-20 blur-sm`}></div>
            </div>
          </div>
        </div>

        {/* Performance Details Card */}
        <div className={`border rounded-xl p-5 ${performanceData.borderColor} bg-gradient-to-b from-white to-gray-50 shadow-inner`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-700 flex items-center">
              <FaChartLine className="mr-2 text-gray-400" />
              Performance Analysis
            </h3>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${performanceData.color} shadow-sm`}>
              {student.performance}
            </span>
          </div>

          {/* Weak Student Improvement Section */}
          {isWeakStudent && (
            <div className="mt-6">
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <h4 className="flex items-center text-sm font-medium text-red-700 mb-3">
                  <FaExclamationTriangle className="mr-2" />
                  Key Improvement Areas
                </h4>
                <ul className="space-y-2.5">
                  {performanceData.improvementTips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-400 mr-2 mt-0.5">•</span>
                      <span className="text-sm text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Performance Metrics */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-center text-gray-500 mb-2">
                <FaBook className="mr-2 text-xs" />
                <span className="text-xs font-medium">Assignments</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
                <div 
                  className={`h-2 rounded-full ${student.assignments >= 80 ? 'bg-green-500' : student.assignments >= 60 ? 'bg-amber-500' : 'bg-red-500'} shadow-sm`}
                  style={{ width: `${student.assignments || 70}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-700 block text-right">{student.assignments || 70}%</span>
            </div>

            <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-center text-gray-500 mb-2">
                <FaChartLine className="mr-2 text-xs" />
                <span className="text-xs font-medium">Attendance</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
                <div 
                  className={`h-2 rounded-full ${student.attendance >= 90 ? 'bg-green-500' : student.attendance >= 75 ? 'bg-amber-500' : 'bg-red-500'} shadow-sm`}
                  style={{ width: `${student.attendance || 85}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-700 block text-right">{student.attendance || 85}%</span>
            </div>
          </div>    
        </div>

        {/* Action Button for Weak Students */}
        {isWeakStudent && (
          <button className="w-full mt-6 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Create Custom Improvement Plan
          </button>
        )}
      </div>
    </div>
  );
}