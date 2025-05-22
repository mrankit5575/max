 import React, { useEffect, useState } from "react";
import { 
  FiExternalLink, FiCalendar, FiClock, FiUser, 
  FiBook, FiMapPin, FiWifi, FiAlertCircle, 
  FiSearch, FiFilter, FiChevronDown, FiChevronUp 
} from "react-icons/fi";
import { Link } from "react-router-dom";

const API_BASE = "https://maxbackend.onrender.com/api/batch/";
const BATCHES_PER_PAGE = 6;

export default function BatchList() {
  const [batches, setBatches] = useState([]);
  const [filteredBatches, setFilteredBatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [showContact, setShowContact] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    mode: "",
    branch: "",
  });
  const [visibleCount, setVisibleCount] = useState(BATCHES_PER_PAGE);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchBatches();
  }, []);

  useEffect(() => {
    filterBatches();
  }, [batches, searchTerm, filters]);

  const fetchBatches = async () => {
    try {
      const res = await fetch(API_BASE);
      if (!res.ok) throw new Error("Failed to fetch batches");
      const data = await res.json();
      setBatches(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filterBatches = () => {
    let result = batches;

    // Apply search
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(batch => 
        batch.courseName.toLowerCase().includes(term) ||
        batch.teacherName.toLowerCase().includes(term) ||
        batch.branchName.toLowerCase().includes(term) ||
        batch.timing.toLowerCase().includes(term)
      );
    }

    // Apply filters
    if (filters.mode) {
      result = result.filter(batch => batch.mode === filters.mode);
    }

    if (filters.branch) {
      result = result.filter(batch => batch.branchName === filters.branch);
    }

    setFilteredBatches(result);
    setVisibleCount(BATCHES_PER_PAGE); // Reset visible count when filters change
  };

  const openModal = (batch) => {
    setSelectedBatch(batch);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedBatch(null);
  };

  const resetFilters = () => {
    setFilters({ mode: "", branch: "" });
    setSearchTerm("");
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + BATCHES_PER_PAGE);
  };

  const showLess = () => {
    setVisibleCount(BATCHES_PER_PAGE);
  };

  // Get unique branches and modes for filter options
  const uniqueBranches = [...new Set(batches.map(batch => batch.branchName))];
  const uniqueModes = [...new Set(batches.map(batch => batch.mode))];

  const upcomingBatches = filteredBatches.filter(batch => {
    const batchDate = new Date(batch.date);
    const today = new Date();
    return batchDate >= today;
  });

  const visibleBatches = filteredBatches.slice(0, visibleCount);

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  if (error) return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 max-w-4xl mx-auto mt-8" role="alert">
      <p className="font-bold">Error</p>
      <p>{error}</p>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search and Filter Section */}
      <div className="mb-8 bg-white rounded-lg shadow p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Search Bar */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search batches by course, teacher, branch or timing..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Filter Toggle Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
          >
            <FiFilter className="mr-2" />
            Filters
            {showFilters ? <FiChevronUp className="ml-2" /> : <FiChevronDown className="ml-2" />}
          </button>
        </div>
        
        {/* Filters Panel */}
        {showFilters && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Mode Filter */}
              <div>
                <label htmlFor="mode-filter" className="block text-sm font-medium text-gray-700 mb-1">
                  Mode
                </label>
                <select
                  id="mode-filter"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={filters.mode}
                  onChange={(e) => setFilters({...filters, mode: e.target.value})}
                >
                  <option value="">All Modes</option>
                  {uniqueModes.map(mode => (
                    <option key={mode} value={mode}>{mode}</option>
                  ))}
                </select>
              </div>
              
              {/* Branch Filter */}
              <div>
                <label htmlFor="branch-filter" className="block text-sm font-medium text-gray-700 mb-1">
                  Branch
                </label>
                <select
                  id="branch-filter"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={filters.branch}
                  onChange={(e) => setFilters({...filters, branch: e.target.value})}
                >
                  <option value="">All Branches</option>
                  {uniqueBranches.map(branch => (
                    <option key={branch} value={branch}>{branch}</option>
                  ))}
                </select>
              </div>
              
              {/* Reset Button */}
              <div className="flex items-end">
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="mb-4 text-sm text-gray-600">
        Showing {Math.min(visibleCount, filteredBatches.length)} of {filteredBatches.length} batches
      </div>

      {/* Upcoming Batches Section */}
      {upcomingBatches.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FiAlertCircle className="mr-2 text-blue-600" /> Upcoming Batches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingBatches.map((batch) => (
              <BatchCard 
                key={batch._id} 
                batch={batch} 
                openModal={openModal}
                setShowContact={setShowContact}
                isUpcoming={true}
              />
            ))}
          </div>
        </div>
      )}

      {/* All Batches Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">All Batches</h2>
        {filteredBatches.length === 0 ? (
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <p className="text-gray-500">No batches found matching your criteria.</p>
            <button 
              onClick={resetFilters}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleBatches.map((batch) => (
                <BatchCard 
                  key={batch._id} 
                  batch={batch} 
                  openModal={openModal}
                  setShowContact={setShowContact}
                  isUpcoming={false}
                />
              ))}
            </div>
            
            {/* Load More/Less Buttons */}
            <div className="mt-8 flex justify-center">
              {visibleCount < filteredBatches.length && (
                <button
                  onClick={loadMore}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Show More
                </button>
              )}
              {visibleCount > BATCHES_PER_PAGE && visibleCount >= filteredBatches.length && (
                <button
                  onClick={showLess}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors ml-4"
                >
                  Show Less
                </button>
              )}
            </div>
          </>
        )}
      </div>

      {/* Modal and Contact Form components remain the same as previous example */}
      {/* ... */}
    </div>
  );
}

const BatchCard = ({ batch, openModal, setShowContact, isUpcoming }) => {
  const batchDate = new Date(batch.date);
  
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden border-l-4 ${
      isUpcoming ? 'border-blue-500' : 'border-transparent'
    } hover:shadow-lg transition-shadow duration-300`}>
      <div className="p-6">
        {isUpcoming && (
          <div className="mb-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Upcoming
            </span>
          </div>
        )}
        
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{batch.courseName}</h3>
        
        <div className="flex items-center text-gray-600 mb-1">
          <FiCalendar className="mr-2 text-gray-500" />
          <span>{batchDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
        </div>
        
        <div className="flex items-center text-gray-600 mb-1">
          <FiClock className="mr-2 text-gray-500" />
          <span>{batch.timing}</span>
        </div>
        
        <div className="flex items-center text-gray-600 mb-1">
          <FiUser className="mr-2 text-gray-500" />
          <span>{batch.teacherName}</span>
        </div>
        
        <div className="flex items-center text-gray-600 mb-4">
          <FiMapPin className="mr-2 text-gray-500" />
          <span>{batch.branchName} ({batch.mode})</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            batch.status === 'active' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-gray-100 text-gray-800'
          }`}>
            {batch.status}
          </span>
          
          {batch.driveLink && (
            <a 
              href={batch.driveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
            >
              <FiExternalLink className="mr-1" /> Materials
            </a>
          )}
        </div>
        
        <div className="mt-6 flex space-x-3">
          {/* <button
            onClick={() => openModal(batch)}
            className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-sm font-medium"
          >
            View Details
          </button> */}
          <Link to="/contact">
          <button
            onClick={() => setShowContact(true)}
            className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
            >
            Contact
          </button>
            </Link>
        </div>
      </div>
    </div>
  );
};