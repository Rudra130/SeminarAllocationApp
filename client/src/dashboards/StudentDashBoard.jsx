

import { useState } from "react"
import { Home, Calendar, BookOpen, LogOut, HelpCircle, Menu, X } from "lucide-react"
import { cn } from ".././lib/utils"

const StudentDashboard = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { icon: Home, label: "Home", href: "#" },
    { icon: BookOpen, label: "Hall Details", href: "#" },
    { icon: Calendar, label: "Booking Status", href: "#" },
    { icon: BookOpen, label: "Hall Booking", href: "#" },
    { icon: LogOut, label: "Logout", href: "#" },
  ]

  const halls = [
    "Drawing Hall No. 48",
    "Drawing Hall No. 49",
    "Vivekananda Auditorium",
    "Lecture Hall No. 82",
    "Lecture Hall No. 83",
    "Lecture Hall No. 84",
    "Lecture Hall No. 13",
    "Srinivasa Ramanujan Seminar Hall",
  ]

  const bookingSteps = [
    "Check the calendar for the availability of the halls on specific dates",
    'Click "Add new request" and fill in the form and submit',
    "You will receive an email upon submitting this form with regard to further action to be taken for confirmation",
    "Meanwhile the status of your record can be tracked from your Hall-booking dashboard",
    "The Hall requests will be approved next working day before forenoon",
  ]

  return (
    <div className="flex h-screen font-sans bg-gray-50 overflow-hidden">
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-full bg-white shadow-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className={cn(
          "w-72 bg-white border-r border-gray-200 shadow-sm flex flex-col justify-between transition-all duration-300 ease-in-out z-40",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          "fixed lg:static h-full",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-100">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-100 to-indigo-300 flex items-center justify-center text-white font-bold text-xl shadow-md">
                US
              </div>
              <p className="mt-3 font-semibold text-gray-800">USERNAME</p>
              <p className="text-xs text-gray-500">Student</p>
            </div>
          </div>

          <nav className="flex-1 p-4">
            <div className="space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 group"
                >
                  <item.icon size={18} className="text-gray-500 group-hover:text-blue-600" />
                  <span className="font-medium group-hover:text-blue-600">{item.label}</span>
                </a>
              ))}
            </div>
          </nav>

          <div className="p-4 border-t border-gray-100">
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              <HelpCircle size={18} className="text-gray-500" />
              <span className="text-sm font-medium">Help & Support</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="relative flex-1 overflow-hidden lg:ml-0">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dyi2eiqum/image/upload/w_540,q_auto,f_auto/v1717832207/1%20Home%20Page/2_About_ABES_hwld24.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r" />

        {/* Content */}
        <div className="relative z-10 p-6 md:p-10 overflow-y-auto h-full">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="bg-white bg-opacity-95 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-white/20 mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">Abes Engineering College</h1>
              <div className="w-20 h-1 bg-blue-600 mx-auto my-4"></div>
              <p className="text-center text-gray-600">Hall Booking Management System</p>
            </div>

            {/* Main content */}
            <div className="space-y-8">
              {/* Halls Booking Section */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Calendar className="mr-2 text-blue-600" size={24} />
                  Halls Booking
                </h2>

                <div className="mb-6">
                  <p className="text-gray-700 mb-2">
                    <a href="#" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                      Click here
                    </a>{" "}
                    to check the availability of halls.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Available Halls:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {halls.map((hall, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg border border-gray-100"
                      >
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-gray-700">{hall}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking Steps */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <BookOpen className="mr-2 text-blue-600" size={20} />
                  Steps to Book a Hall
                </h3>

                <div className="space-y-4">
                  {bookingSteps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-gray-700">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors shadow-md flex items-center justify-center">
                    <Calendar className="mr-2" size={18} />
                    Add New Request
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="mt-10 text-center text-sm text-white/80 py-4">
              <p className="mb-1">
                Copyright © {new Date().getFullYear()} <strong>Campus Hall Booking System</strong>
              </p>
              <p>Developed with ❤️ by Team Cherry</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard
