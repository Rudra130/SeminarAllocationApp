import { useState } from "react";
import React from "react";
export default function HallBooking() {
  const [currentMonth, setCurrentMonth] = useState("August 2023");

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const dates = Array.from({ length: 31 }, (_, idx) => idx + 1);

  
  const weeks = [];
  for (let i = 0; i < dates.length; i += 7) {
    weeks.push(dates.slice(i, i + 7));
  }

  const handlePrev = () => {
    // Month changing logic (optional for now)
  };

  const handleNext = () => {
    // Month changing logic (optional for now)
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="bg-white shadow flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Logo" className="h-12 w-12" />
          <div>
            <h1 className="text-xl font-bold">Abes Enginnering College</h1>
            <p className="text-sm">Aktu University </p>
          </div>
        </div>
        <p className="text-gray-600">WELCOME: USERNAME</p>
      </header>

      {/* Title */}
      <div className="my-6 text-center">
        <h2 className="text-2xl font-semibold text-green-700">AVAILABILITY OF HALLS / HALL BOOKING</h2>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-500"></div>
          <span>APPROVED</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-600"></div>
          <span>PENDING</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-400"></div>
          <span>HALL BLOCKED</span>
        </div>

        {/* Dropdown */}
        <select className="ml-4 border rounded p-2">
          <option>Drawing Hall No. 49</option>
          <option>Drawing Hall No. 50</option>
          {/* Add more halls if needed */}
        </select>
      </div>

      {/* Calendar Controls */}
      <div className="flex justify-center items-center gap-4 mb-4">
        <button onClick={handlePrev} className="text-2xl font-bold">
          ‹
        </button>
        <h3 className="text-lg font-semibold">{currentMonth}</h3>
        <button onClick={handleNext} className="text-2xl font-bold">
          ›
        </button>
        <button className="ml-4 px-4 py-2 border rounded text-gray-700">Today</button>
        <div className="flex items-center gap-2 ml-6">
          <button className="px-3 py-1 border rounded">Month</button>
          <button className="px-3 py-1 border rounded">Week</button>
          <button className="px-3 py-1 border rounded">Day</button>
        </div>
      </div>

      {/* Calendar Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-fixed border-collapse bg-white shadow rounded">
          <thead>
            <tr>
              {daysOfWeek.map((day) => (
                <th key={day} className="border p-2 text-center font-bold bg-gray-100">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weeks.map((week, i) => (
              <tr key={i}>
                {week.map((date) => (
                  <td key={date} className="border p-2 h-24 align-top relative">
                    <div className="absolute top-1 right-2 text-gray-400">{date}</div>
                    {/* Sample events */}
                    {(date === 1) && (
                      <div className="bg-red-500 text-white text-[10px] p-1 rounded mt-6">
                        Semester Exam<br />10AM-2PM
                      </div>
                    )}
                    {(date === 2) && (
                      <div className="bg-green-600 text-white text-[10px] p-1 rounded mt-6">
                        Induction<br />4PM-5PM
                      </div>
                    )}
                    {(date === 9) && (
                      <div className="bg-red-500 text-white text-[10px] p-1 rounded mt-6">
                        Assessment<br />10AM-11:30AM
                      </div>
                    )}
                    {(date === 30) && (
                      <div className="bg-green-600 text-white text-[10px] p-1 rounded mt-6">
                        Assessment<br />8:30AM-10AM
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
