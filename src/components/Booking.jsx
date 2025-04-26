import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    department: '',
    hall: '',
    affiliatedClub: '',
    date: '',
    timeFrom: '',
    timeTo: '',
    reason: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Booking Submitted Successfully! 🚀');
  };

  return (
    <div className=" w-96 pt-48 min-h-fit flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className=" w-full  bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Book a Hall</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Department */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-gray-200 text-sm"
              placeholder="Enter Department"
            />
          </div>

          {/* Hall */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Hall for Booking</label>
            <input
              type="text"
              name="hall"
              value={formData.hall}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none  bg-gray-200 text-sm"
              placeholder="Enter Hall Name"
            />
          </div>

          {/* Affiliated Department / Club */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Affiliated Department / Club</label>
            <input
              type="text"
              name="affiliatedClub"
              value={formData.affiliatedClub}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none  bg-gray-200 text-sm"
              placeholder="Enter Affiliated Department or Club"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none  bg-gray-200 text-sm"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Time From</label>
              <input
                type="time"
                name="timeFrom"
                value={formData.timeFrom}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Time To</label>
              <input
                type="time"
                name="timeTo"
                value={formData.timeTo}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none  bg-gray-200 text-sm"
              />
            </div>
          </div>

        
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Reason</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              rows="4"
              placeholder="Mention the reason for booking..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none resize-none  bg-gray-200 text-sm"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl  "
            >
              Submit Booking
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Booking;
