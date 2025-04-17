import { useState } from "react";

export default function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Form Submitted", formData);
    // API call to backend can be added here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-2xl rounded-2xl flex flex-col md:flex-row w-full max-w-4xl">
        {/* Left: Registration Form */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Create an Account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold transition-all">
              Register
            </button>
          </form>
        </div>
        
        {/* Right: Instructions */}
        <div className="md:w-1/2 bg-blue-600 text-white p-8 rounded-r-2xl flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Instructions</h2>
          <ul className="space-y-3 text-white/90">
            <li>You need to register using your student email ID to book halls.</li>
            <li>If you have already registered, please <a href="#" className="underline">Login</a> instead.</li>
            <li>For any issues, contact us at <a href="mailto:studenthelp@gmail.com" className="underline">studenthelp@gmail.com</a>.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
