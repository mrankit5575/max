import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiUser, FiDollarSign, FiFilter, FiX } from 'react-icons/fi';

const dummyBatches = [
  {
    id: 1,
    course: 'Full Stack Development',
    mode: 'Hybrid',
    status: 'Starting Soon',
    startDate: '15 June 2023',
    details: ['Mon, Wed, Fri', '6PM – 8PM', '1.5 months', 'Manoj Kumar'],
    price: '₹12,999',
    seatsLeft: 5,
    popular: true,
  },
  {
    id: 2,
    course: 'Graphic Design Masterclass',
    mode: 'Offline',
    status: 'Limited Seats',
    startDate: '20 June 2023',
    details: ['Tue, Thu', '4PM – 6PM', '1 month', 'Chaitali Sharma'],
    price: '₹8,999',
    seatsLeft: 2,
    popular: true,
  },
  {
    id: 3,
    course: 'UI/UX Design Pro',
    mode: 'Online',
    status: 'Enrollment Open',
    startDate: '25 June 2023',
    details: ['Sat, Sun', '2PM – 4PM', '2 months', 'Ravindra Patel'],
    price: '₹10,499',
    seatsLeft: 12,
  },
  {
    id: 4,
    course: 'Data Science Fundamentals',
    mode: 'Online',
    status: 'New Batch',
    startDate: '1 July 2023',
    details: ['Mon, Wed, Fri', '7PM – 9PM', '2 months', 'Yogesh Verma'],
    price: '₹14,999',
    seatsLeft: 15,
  },
  {
    id: 5,
    course: 'Digital Marketing',
    mode: 'Hybrid',
    status: 'Early Bird',
    startDate: '5 July 2023',
    details: ['Tue, Thu, Sat', '5PM – 7PM', '1 month', 'Neha Gupta'],
    price: '₹9,999',
    seatsLeft: 8,
    popular: true,
  },
  {
    id: 6,
    course: 'Mobile App Development',
    mode: 'Offline',
    status: 'Starting Soon',
    startDate: '10 July 2023',
    details: ['Mon, Wed, Fri', '3PM – 5PM', '2 months', 'Amit Singh'],
    price: '₹13,499',
    seatsLeft: 6,
  },
];

const Badge = ({ text, type }) => {
  const colorMap = {
    online: 'bg-blue-100 text-blue-800',
    offline: 'bg-purple-100 text-purple-800',
    hybrid: 'bg-green-100 text-green-800',
    'Starting Soon': 'bg-yellow-100 text-yellow-800',
    'Limited Seats': 'bg-red-100 text-red-800',
    'Enrollment Open': 'bg-blue-100 text-blue-800',
    'New Batch': 'bg-green-100 text-green-800',
    'Early Bird': 'bg-pink-100 text-pink-800',
  };

  return (
    <span className={`text-xs px-2 py-1 rounded-full font-medium ${colorMap[type] || 'bg-gray-100 text-gray-800'}`}>
      {text}
    </span>
  );
};

const BatchCard = ({ batch }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg border border-gray-100 relative overflow-hidden transition-all"
  >
    {batch.popular && (
      <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-lg">
        Popular
      </div>
    )}
    
    <div className="flex justify-between items-start mb-3">
      <Badge text={batch.status} type={batch.status} />
      <Badge text={batch.mode} type={batch.mode.toLowerCase()} />
    </div>
    
    <h3 className="font-bold text-xl mb-3 text-gray-800">{batch.course}</h3>
    
    <div className="flex items-center text-sm text-gray-500 mb-3">
      <FiCalendar className="mr-2" />
      <span>Starts: {batch.startDate}</span>
    </div>
    
    <div className="space-y-2 mb-4">
      <div className="flex items-center text-sm text-gray-600">
        <FiClock className="mr-2 min-w-4" />
        <span>{batch.details[0]} • {batch.details[1]}</span>
      </div>
      <div className="flex items-center text-sm text-gray-600">
        <span className="mr-2 min-w-4">⏳</span>
        <span>{batch.details[2]}</span>
      </div>
      <div className="flex items-center text-sm text-gray-600">
        <FiUser className="mr-2 min-w-4" />
        <span>{batch.details[3]}</span>
      </div>
    </div>
    
    <div className="flex justify-between items-center mb-4">
      <div className="text-lg font-bold text-gray-800 flex items-center">
        <FiDollarSign className="mr-1" />
        {batch.price}
      </div>
      <div className="text-sm text-gray-500">
        {batch.seatsLeft} {batch.seatsLeft === 1 ? 'seat' : 'seats'} left
      </div>
    </div>
    
    <div className="flex space-x-3">
      <motion.button 
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 text-sm font-medium transition-colors"
      >
        Enquire
      </motion.button>
      <motion.button 
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium transition-colors"
      >
        Register
      </motion.button>
    </div>
  </motion.div>
);

const UpcomingBatches = () => {
  const [filters, setFilters] = useState({
    course: '',
    mode: '',
    status: '',
    search: '',
  });
  const [showFilters, setShowFilters] = useState(false);

  const filteredBatches = dummyBatches.filter(batch => {
    return (
      (filters.course === '' || batch.course.toLowerCase().includes(filters.course.toLowerCase())) &&
      (filters.mode === '' || batch.mode.toLowerCase() === filters.mode.toLowerCase()) &&
      (filters.status === '' || batch.status.toLowerCase() === filters.status.toLowerCase()) &&
      (filters.search === '' || 
        batch.course.toLowerCase().includes(filters.search.toLowerCase()) ||
        batch.details[3].toLowerCase().includes(filters.search.toLowerCase()))
    );
  });

  const resetFilters = () => {
    setFilters({
      course: '',
      mode: '',
      status: '',
      search: '',
    });
  };

  return (
    <section className="px-4 py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Upcoming Batches</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find the perfect batch for your learning journey with our industry-expert instructors.
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search courses or instructors..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={filters.search}
                onChange={(e) => setFilters({...filters, search: e.target.value})}
              />
              <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50"
              >
                <FiFilter />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </motion.button>
              
              {(filters.course || filters.mode || filters.status) && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetFilters}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium hover:bg-gray-200"
                >
                  <FiX />
                  Reset
                </motion.button>
              )}
            </div>
          </div>
          
          {/* Expanded Filters */}
          {showFilters && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 bg-white p-4 rounded-lg shadow-sm border border-gray-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
                  <select 
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                    value={filters.course}
                    onChange={(e) => setFilters({...filters, course: e.target.value})}
                  >
                    <option value="">All Courses</option>
                    <option value="Full Stack">Full Stack Development</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="UI/UX">UI/UX Design</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Mobile App">Mobile App Development</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mode</label>
                  <select 
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                    value={filters.mode}
                    onChange={(e) => setFilters({...filters, mode: e.target.value})}
                  >
                    <option value="">All Modes</option>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select 
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                    value={filters.status}
                    onChange={(e) => setFilters({...filters, status: e.target.value})}
                  >
                    <option value="">All Statuses</option>
                    <option value="Starting Soon">Starting Soon</option>
                    <option value="Limited Seats">Limited Seats</option>
                    <option value="Enrollment Open">Enrollment Open</option>
                    <option value="New Batch">New Batch</option>
                    <option value="Early Bird">Early Bird</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Batch Cards */}
        {filteredBatches.length > 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredBatches.map((batch) => (
              <BatchCard key={batch.id} batch={batch} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-200"
          >
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">No batches found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your search or filters</p>
            <button 
              onClick={resetFilters}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default UpcomingBatches;