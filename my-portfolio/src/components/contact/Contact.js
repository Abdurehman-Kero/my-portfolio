import React, { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    setErrMsg("");
    setSuccessMsg("");

    if (username === "") {
      setErrMsg("Name is required!");
      return;
    } else if (email === "") {
      setErrMsg("Please provide your Email!");
      return;
    } else if (!emailValidation(email)) {
      setErrMsg("Provide a valid Email!");
      return;
    } else if (message === "") {
      setErrMsg("Message is required!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://porfoliobe.abdurehman.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          email: email,
          message: message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccessMsg(`Thank you ${username}! Your message has been sent.`);
        setUsername("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error(data.error || "Failed to send");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrMsg("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-gray-800"
    >
      <div className="flex justify-center items-center text-center mb-16">
        <Title title="CONTACT" des="Get In Touch" />
      </div>

      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="w-full flex flex-col lgl:flex-row gap-8">
          {/* Contact Left Section */}
          <ContactLeft />

          {/* Contact Form */}
          <div className="w-full lgl:w-[60%] bg-gradient-to-br from-[#1e2024] to-[#23272b] p-8 rounded-2xl shadow-shadowOne border border-gray-800/50">
            <form className="w-full flex flex-col gap-8" onSubmit={handleSend}>
              {/* Status Messages */}
              {errMsg && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-red-500 text-sm text-center">{errMsg}</p>
                </div>
              )}
              {successMsg && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <p className="text-green-500 text-sm text-center">
                    {successMsg}
                  </p>
                </div>
              )}

              {/* Name Field */}
              <div className="w-full">
                <label className="text-sm text-gray-400 mb-2 block">Name</label>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  className="w-full h-14 px-4 bg-transparent border-b border-gray-700 text-gray-300 focus:outline-none focus:border-[#ff014f] transition-colors duration-300"
                  type="text"
                  required
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div className="w-full">
                <label className="text-sm text-gray-400 mb-2 block">
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="w-full h-14 px-4 bg-transparent border-b border-gray-700 text-gray-300 focus:outline-none focus:border-[#ff014f] transition-colors duration-300"
                  type="email"
                  required
                  placeholder="your@email.com"
                />
              </div>

              {/* Message Field */}
              <div className="w-full">
                <label className="text-sm text-gray-400 mb-2 block">
                  Message
                </label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className="w-full px-4 py-3 bg-transparent border-b border-gray-700 text-gray-300 focus:outline-none focus:border-[#ff014f] transition-colors duration-300 resize-none"
                  rows="4"
                  required
                  placeholder="Your message..."
                />
              </div>

              {/* Submit Button */}
              <div className="w-full pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full h-14 bg-gradient-to-r from-[#ff014f] to-[#ff6b9d] text-white rounded-lg font-medium tracking-wide overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#ff014f]/20 transition-all duration-300"
                >
                  <span className="relative z-10">
                    {loading ? "Sending..." : "Send ->"}
                  </span>
                </button>
              </div>

              {/* Form note */}
              <p className="text-xs text-gray-500 text-center mt-2">
                I'll get back to you within 24-48 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
