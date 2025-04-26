
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  Calendar,
  Info,
  LogIn,
  UserPlus,
  ChevronRight,
  Heart,
  Menu,
  X,
  Home,
  BookOpen,
  Settings,
  HelpCircle,
} from "lucide-react"

const HallBooking = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0)

  // Calculate header height for proper content positioning
  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.getElementById("main-header")
      if (header) {
        setHeaderHeight(header.offsetHeight)
      }
    }

    // Initial calculation
    updateHeaderHeight()

    // Recalculate on resize
    window.addEventListener("resize", updateHeaderHeight)
    return () => window.removeEventListener("resize", updateHeaderHeight)
  }, [])

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close nav when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById("sidebar")
      const menuButton = document.getElementById("menu-button")

      if (isNavOpen && sidebar && !sidebar.contains(event.target) && menuButton && !menuButton.contains(event.target)) {
        setIsNavOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isNavOpen])

  // Lock body scroll when nav is open on mobile
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isNavOpen])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  const sidebarVariants = {
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  }

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        delay: 0.2,
      },
    },
    open: {
      opacity: 1,
    },
  }

  return (

    //HORIZONTAL NAVBAR
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-800 font-sans">
      {/* Header Section - with scroll effect */}
      <motion.div
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-md" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white p-3 md:p-4">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <div className="flex items-center gap-2 md:gap-4">
              <button
                id="menu-button"
                className="p-1 rounded-md hover:bg-white/20 transition-colors"
                onClick={() => setIsNavOpen(!isNavOpen)}
                aria-label="Toggle menu"
              >
                <Menu size={24} />
              </button>
              <motion.img
                src="./abes.png"
                alt="College Logo"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/30"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div>
                <motion.h1
                  className="text-lg md:text-2xl font-bold tracking-tight"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Abes Engineering College
                </motion.h1>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <Link
                to="/login"
                className="text-white hover:text-indigo-200 transition-colors flex items-center gap-1 text-sm md:text-base bg-indigo-800/50 px-2 py-1 md:px-3 md:py-2 rounded-md hover:bg-indigo-800/70"
              >
                <LogIn size={16} />
                <span className="hidden sm:inline">Login</span>
              </Link>
              <Link
                to="/register"
                className="text-white hover:text-indigo-200 transition-colors flex items-center gap-1 text-sm md:text-base bg-indigo-700 px-2 py-1 md:px-3 md:py-2 rounded-md hover:bg-indigo-600"
              >
                <UserPlus size={16} />
                <span className="hidden sm:inline">Register</span>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

     {/* //SIDEBAR  */}
      {/* Sidebar Navigation */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={() => setIsNavOpen(false)}
          />
        )}
      </AnimatePresence>
       
       {/* //SIDEBAR  */}
      <motion.div
        id="sidebar"
        className="sticky left-0 top-0 bottom-0 w-64 md:w-72 bg-gradient-to-b from-indigo-900 to-purple-900 text-white z-50 shadow-xl overflow-y-auto "
        variants={sidebarVariants}
        initial="closed"
        animate={isNavOpen ? "open" : "closed"}
      >
        <div className="p-4 flex justify-between items-center border-b border-indigo-800">
          <div className="flex items-center gap-3">
            <img src="./abes.png" alt="Logo" className="w-10 h-10 rounded-full" />
            <h2 className="font-bold text-lg">Hall Booking</h2>
          </div>
          <button
            onClick={() => setIsNavOpen(false)}
            className="p-1 rounded-md hover:bg-white/20 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-5">
          <nav className="space-y-6">
            <div>
              <h3 className="text-xs uppercase text-indigo-300 font-semibold mb-2 tracking-wider">Main</h3>
              <ul className="space-y-5">
                <SidebarLink icon={<Home size={18} />} text="Home" href="#" />
                <SidebarLink icon={<Calendar size={18} />} text="Calendar" href="#" />
                <SidebarLink icon={<BookOpen size={18} />} text="Hall Details" href="#" />
                <SidebarLink icon={<Info size={18} />} text="About" href="#" />
              </ul>
            </div>

            <div>
              <h3 className="text-xs uppercase text-indigo-300 font-semibold mb-2 tracking-wider">Admin</h3>
              <ul className="space-y-5">
                <SidebarLink icon={<Settings size={18} />} text="Admin Panel" href="#" />
                <SidebarLink icon={<HelpCircle size={18} />} text="Support" href="#" />
              </ul>
            </div>
          </nav>

          <div className="mt-8 pt-6 border-t border-indigo-800">
            <div className="bg-indigo-800/50 rounded-lg p-4">
              <h4 className="font-medium mb-2 flex items-center">
                <HelpCircle size={16} className="mr-2" />
                Need Help?
              </h4>
              <p className="text-sm text-indigo-200 mb-3">
                Contact the admin office for any queries related to hall booking.
              </p>
              <button className="w-full bg-white text-indigo-700 py-2 rounded text-sm font-medium hover:bg-indigo-50 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content - with dynamic padding based on header height */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6" style={{ paddingTop: `${0}px` }}>
        <motion.div
          className="flex flex-col md:flex-row justify-between gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div className="w-full md:w-2/3 bg-white p-5 md:p-8 rounded-xl shadow-md" variants={itemVariants}>
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-4 text-indigo-900 border-b-2 border-indigo-100 pb-2"
              whileInView={{ x: [50, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              HALL BOOKING
            </motion.h3>
            <motion.h4
              className="font-semibold mb-3 text-lg text-indigo-800"
              whileInView={{ x: [30, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              HALLS AVAILABLE FOR BOOKING
            </motion.h4>
            <motion.p
              className="mb-4 text-slate-600"
              whileInView={{ x: [20, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="#" className="text-indigo-600 hover:text-indigo-800 underline transition-colors font-medium">
                Click here
              </a>{" "}
              to check the availability of halls.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
              {[
                "Auditorium",
                "Seminar Hall 1",
                "Seminar Hall 2",
                "Seminar Hall 3",
                "Seminar Hall 4"
              ].map((hall, index) => (
                <motion.div
                  key={index}
                  className="flex items-center bg-indigo-50 hover:bg-indigo-100 p-3 rounded-lg transition-colors"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <span className="w-6 h-6 flex items-center justify-center bg-indigo-700 text-white rounded-full text-sm mr-3">
                    {index + 1}
                  </span>
                  <span className="text-slate-700 text-sm md:text-base">{hall}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Steps to Book */}
          <motion.div
            className="w-full md:w-1/3 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 p-5 md:p-8 rounded-xl shadow-md"
            variants={itemVariants}
          >
            <motion.h4
              className="font-bold text-xl mb-4 text-indigo-900 flex items-center"
              whileInView={{ y: [30, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-indigo-700 text-white p-1 rounded mr-2">
                <Calendar size={18} />
              </span>
              STEPS TO BOOK A HALL
            </motion.h4>

            <motion.div className="space-y-3" variants={containerVariants} initial="hidden" whileInView="visible">
              {[
                <>
                  <Link
                    to="/login"
                    className="text-indigo-700 hover:text-indigo-900 font-medium hover:underline transition-colors"
                    key="login-link"
                  >
                    Click here
                  </Link>{" "}
                  to login
                </>,
                "Check the calendar for the availability of the halls on specific dates",
                'Click "Add new request" and fill in the form and submit',
                "You will receive an email upon submitting this form and an email after request is approved.",
                "Meanwhile the status of your record can be tracked from your dashboard.",
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className="min-w-8 h-8 flex items-center justify-center bg-indigo-600 text-white rounded-full font-bold">
                    {index + 1}
                  </div>
                  <div className="text-slate-700 text-sm md:text-base">{step}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-6 bg-indigo-700 text-white p-4 rounded-lg shadow-md"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h5 className="font-bold mb-2 flex items-center">
                <Calendar className="mr-2" size={18} />
                Need Help?
              </h5>
              <p className="text-sm text-indigo-100">
                Contact the admin office for any queries related to hall booking.
              </p>
              <button className="mt-3 bg-white text-indigo-700 px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center w-full hover:bg-indigo-50 transition-colors">
                Contact Support
                <ChevronRight size={16} className="ml-1" />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-6 mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Abes Engineering College</h3>
              <p className="text-indigo-200 text-sm">Campus Hall Booking System</p>
            </div>

            <div className="flex gap-6">
              <div className="text-center">
                <h4 className="font-semibold mb-2 text-indigo-200">Quick Links</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    <a href="#" className="hover:text-indigo-300 transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-300 transition-colors">
                      Calendar
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-300 transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <h4 className="font-semibold mb-2 text-indigo-200">Help</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    <a href="#" className="hover:text-indigo-300 transition-colors">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-300 transition-colors">
                      Support
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-300 transition-colors">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-indigo-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>
              Copyright © {new Date().getFullYear()} <span className="font-semibold">Campus Hall Booking System</span>
            </p>
            <p className="flex items-center mt-2 md:mt-0">
              Developed with <Heart size={14} className="mx-1 text-red-400 animate-pulse" /> by team cherry
            </p>
          </div>
        </div>
      </motion.footer>

    </div>
  )
}

// Helper component for sidebar navigation links
const SidebarLink = ({ href, text, icon }) => (
  <li>
    <a
      href={href}
      className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-indigo-800/50 transition-colors text-indigo-100 hover:text-white"
    >
      {icon}
      <span>{text}</span>
    </a>
  </li>
)

export default HallBooking
