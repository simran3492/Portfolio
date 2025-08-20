import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false); // New loading state

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Set loading state to true
    setIsSending(true);

    emailjs
      .sendForm(
        "service_m03adry",  // Replace with your EmailJS Service ID
        "template_k0e65qd",  // Replace with your EmailJS Template ID
        form.current,
        "zDuYTfKE9tzDS09bG"  // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          setIsSending(false); // Reset loading state
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          setIsSending(false); // Reset loading state on error
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I'd love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            disabled={isSending}
            className={`w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 transition-all duration-300 ${
              isSending ? 'opacity-50 cursor-not-allowed' : 'hover:border-purple-400'
            }`}
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            disabled={isSending}
            className={`w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 transition-all duration-300 ${
              isSending ? 'opacity-50 cursor-not-allowed' : 'hover:border-purple-400'
            }`}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            disabled={isSending}
            className={`w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 transition-all duration-300 ${
              isSending ? 'opacity-50 cursor-not-allowed' : 'hover:border-purple-400'
            }`}
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            disabled={isSending}
            className={`w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 transition-all duration-300 ${
              isSending ? 'opacity-50 cursor-not-allowed' : 'hover:border-purple-400'
            }`}
          />

          {/* Enhanced Send Button with Loading State */}
          <button
            type="submit"
            disabled={isSending}
            className={`w-full py-3 text-white font-semibold rounded-md transition-all duration-300 flex items-center justify-center space-x-2 ${
              isSending
                ? 'bg-gray-600 cursor-not-allowed opacity-70'
                : 'bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]'
            }`}
          >
            {isSending ? (
              <>
                {/* Loading Spinner */}
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <span className="text-lg">📤</span>
              </>
            )}
          </button>

          {/* Loading Indicator Text */}
          {isSending && (
            <div className="text-center">
              <p className="text-purple-400 text-sm animate-pulse">
                Please wait while we send your message...
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;