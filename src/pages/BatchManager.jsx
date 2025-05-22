 import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiEdit, FiTrash2, FiLink, FiCalendar, FiClock, FiUser, FiBook, FiMapPin, FiWifi, FiAlertCircle } from "react-icons/fi";

const initialState = {
  timing: "",
  date: "",
  teacherName: "",
  branchName: "",
  courseName: "",
  mode: "online",
  status: "starting soon",
  driveLink: "",
};

export default function BatchManager() {
  const [batches, setBatches] = useState([]);
  const [formData, setFormData] = useState(initialState);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const fetchBatches = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://maxbackend.onrender.com/api/batches");
      setBatches(res.data);
    } catch (err) {
      setError("Failed to fetch batches. Please try again.");
      console.error("Error fetching batches", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBatches();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    const requiredFields = ["timing", "date", "teacherName", "branchName", "courseName"];
    const emptyFields = requiredFields.filter(field => !formData[field].trim());
    
    if (emptyFields.length > 0) {
      setError(`Please fill out: ${emptyFields.join(", ")}`);
      return;
    }

    try {
      if (editingId) {
        await axios.put(`https://maxbackend.onrender.com/api/batches/update/${editingId}`, formData);
        setSuccessMessage("Batch updated successfully!");
      } else {
        await axios.post("https://maxbackend.onrender.com/api/batches/add", formData);
        setSuccessMessage("Batch added successfully!");
      }
      setFormData(initialState);
      setEditingId(null);
      fetchBatches();
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      setError(err.response?.data?.message || "Error saving batch");
      console.error("Error saving batch", err);
    }
  };

  const handleEdit = (batch) => {
    setFormData(batch);
    setEditingId(batch._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this batch?")) return;
    
    try {
      await axios.delete(`https://maxbackend.onrender.com/api/batches/delete/${id}`);
      setSuccessMessage("Batch deleted successfully!");
      fetchBatches();
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      setError("Error deleting batch");
      console.error("Error deleting batch", err);
    }
  };

  const cancelEdit = () => {
    setFormData(initialState);
    setEditingId(null);
    setError(null);
  };

  // Status color mapping
  const statusColors = {
    "starting soon": "bg-blue-100 text-blue-800",
    "limited seat": "bg-yellow-100 text-yellow-800",
    "enrollment open": "bg-green-100 text-green-800",
    "new batch": "bg-purple-100 text-purple-800",
    "early bird": "bg-pink-100 text-pink-800",
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Form Section */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {editingId ? "Edit Batch" : "Add New Batch"}
          </h2>
          
          {/* Success/Error Messages */}
          {successMessage && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
              {successMessage}
            </div>
          )}
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["courseName", "teacherName", "branchName", "timing"].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1">
                    {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                  </label>
                  <input
                    id={field}
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="mode" className="block text-sm font-medium text-gray-700 mb-1">
                  Mode
                </label>
                <select
                  id="mode"
                  name="mode"
                  value={formData.mode}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>

              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="starting soon">Starting Soon</option>
                  <option value="limited seat">Limited Seat</option>
                  <option value="enrollment open">Enrollment Open</option>
                  <option value="new batch">New Batch</option>
                  <option value="early bird">Early Bird</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="driveLink" className="block text-sm font-medium text-gray-700 mb-1">
                  Drive Link (optional)
                </label>
                <input
                  id="driveLink"
                  type="url"
                  name="driveLink"
                  value={formData.driveLink}
                  onChange={handleChange}
                  placeholder="https://drive.google.com/..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                {editingId ? "Update Batch" : "Add Batch"}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Batches List Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Manage Batches</h2>
        
        {loading ? (
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : batches.length === 0 ? (
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <p className="text-gray-500">No batches available. Add a new batch to get started.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {batches.map((batch) => (
              <div key={batch._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{batch.courseName}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[batch.status]}`}>
                      {batch.status}
                    </span>
                  </div>
                  
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <FiCalendar className="mr-2 text-gray-500" />
                      <span>{new Date(batch.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <FiClock className="mr-2 text-gray-500" />
                      <span>{batch.timing}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <FiUser className="mr-2 text-gray-500" />
                      <span>{batch.teacherName}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <FiMapPin className="mr-2 text-gray-500" />
                      <span>{batch.branchName}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <FiWifi className="mr-2 text-gray-500" />
                      <span className="capitalize">{batch.mode}</span>
                    </div>
                    
                    {batch.driveLink ? (
                      <a
                        href={batch.driveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800"
                      >
                        <FiLink className="mr-2" /> Study Materials
                      </a>
                    ) : (
                      <div className="flex items-center text-gray-400">
                        <FiLink className="mr-2" /> No materials link
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => handleEdit(batch)}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-yellow-100 text-yellow-800 rounded-md hover:bg-yellow-200 transition-colors"
                    >
                      <FiEdit /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(batch._id)}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-100 text-red-800 rounded-md hover:bg-red-200 transition-colors"
                    >
                      <FiTrash2 /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}