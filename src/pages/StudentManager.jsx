// src/components/StudentManager.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const performanceOptions = ["Excellent", "Good", "Average", "Poor"];

export default function StudentManager() {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [preview, setPreview] = useState(null);
  const [form, setForm] = useState({
    name: "",
    batchName: "",
    performance: "Good",
    photoFile: null,
  });

  const studentId = student?._id || null;

  const fetchStudent = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get("https://maxbackend.onrender.com/api/student/");
      setStudent(res.data);
      setForm({
        name: res.data.name,
        batchName: res.data.batchName,
        performance: res.data.performance,
        photoFile: null,
      });
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setStudent(null);
      } else {
        setError("Failed to fetch student data");
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setForm((f) => ({ ...f, photoFile: file }));
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  const createStudent = async () => {
    if (!form.name || !form.batchName || !form.photoFile) {
      alert("Name, batch and photo are required");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("batchName", form.batchName);
      formData.append("performance", form.performance);
      formData.append("photo", form.photoFile);

      await axios.post("https://maxbackend.onrender.com/api/student/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      await fetchStudent();
      alert("Student created successfully!");
    } catch (err) {
      setError(err.response?.data?.error || "Failed to create student");
    }
    setLoading(false);
  };

  const updateStudent = async () => {
    if (!studentId) return;
    setLoading(true);
    setError("");
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("batchName", form.batchName);
      formData.append("performance", form.performance);
      if (form.photoFile) {
        formData.append("photo", form.photoFile);
      }
      await axios.put(`https://maxbackend.onrender.com/api/student/${studentId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      await fetchStudent();
      alert("Student updated successfully!");
    } catch (err) {
      setError(err.response?.data?.error || "Failed to update student");
    }
    setLoading(false);
  };

  const deleteStudent = async () => {
    if (!studentId) return;
    if (!window.confirm("Are you sure you want to delete this student?")) return;
    setLoading(true);
    setError("");
    try {
      await axios.delete(`https://maxbackend.onrender.com/api/student/${studentId}`);
      setStudent(null);
      setForm({ name: "", batchName: "", performance: "Good", photoFile: null });
      setPreview(null);
      alert("Student deleted successfully!");
    } catch (err) {
      setError(err.response?.data?.error || "Failed to delete student");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6">
        <p className="text-green-400">Performance of the Weak</p>
      <h1 className="text-2xl font-bold text-center">Student Manager</h1>

      {loading && <p className="text-blue-500 text-center">Loading...</p>}

      {error && <p className="text-red-600 text-center">{error}</p>}

      {!loading && !student && (
        <p className="text-center text-gray-600">
          No student data found. Admin will update it.
        </p>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          student ? updateStudent() : createStudent();
        }}
        className="space-y-4"
      >
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
            disabled={loading}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Batch Name</label>
          <input
            type="text"
            name="batchName"
            value={form.batchName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
            disabled={loading}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Performance</label>
          <select
            name="performance"
            value={form.performance}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            disabled={loading}
          >
            {performanceOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">
            {student ? "Update Photo (optional)" : "Photo"}
          </label>
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            onChange={handleFileChange}
            className="w-full"
            required={!student}
            disabled={loading}
          />
        </div>

        {preview && (
          <div className="text-center">
            <img
              src={preview}
              alt="Preview"
              className="w-24 h-24 object-cover mx-auto rounded-full border"
            />
            <p className="text-xs text-gray-500 mt-1">New photo preview</p>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          disabled={loading}
        >
          {student ? "Update Student" : "Create Student"}
        </button>
      </form>

      {student && (
        <>
          <div className="mt-6 text-center">
            <button
              onClick={deleteStudent}
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
              disabled={loading}
            >
              Delete Student
            </button>
          </div>

          <div className="mt-6 border-t pt-4">
            <h2 className="text-xl font-semibold mb-3">Current Student Info</h2>
            <img
              src={student.photo}
              alt={student.name}
              className="mx-auto w-32 h-32 rounded-full object-cover mb-4"
            />
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Batch:</strong> {student.batchName}</p>
            <p><strong>Performance:</strong> {student.performance}</p>
          </div>
        </>
      )}
    </div>
  );
}
