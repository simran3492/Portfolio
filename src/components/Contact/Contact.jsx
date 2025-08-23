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
        "template_iqgj1rl",  // Replace with your EmailJS Template ID
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
      className="flex flex-col items-center justify-center py-24 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)'
      }}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-purple-500/15 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-emerald-400/20 to-cyan-300/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Geometric Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 left-16 w-24 h-24 border border-cyan-300 rounded-lg rotate-45"></div>
          <div className="absolute top-32 right-32 w-16 h-16 border-2 border-purple-400 rounded-full"></div>
          <div className="absolute bottom-32 left-32 w-20 h-20 border border-emerald-300 rounded-lg rotate-12"></div>
          <div className="absolute bottom-16 right-16 w-28 h-28 border border-pink-300 rounded-full"></div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />

      <div className="relative z-10 w-full max-w-2xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="mb-6 relative">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 mb-2 leading-tight relative">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                CONTACT
              </span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-400/50"></div>
            </h2>
          </div>
          
          <div className="p-6 rounded-xl shadow-2xl backdrop-blur-sm border border-slate-700/50 relative overflow-hidden" style={{
            background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.9) 0%, rgba(32, 58, 67, 0.7) 50%, rgba(44, 83, 100, 0.5) 100%)'
          }}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"></div>
            <p className="text-slate-300 text-lg font-medium leading-relaxed relative z-10">
              I'd love to hear from you—reach out for any opportunities or questions!
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-slate-700/50 relative overflow-hidden group" style={{
          background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.8) 0%, rgba(32, 58, 67, 0.6) 50%, rgba(44, 83, 100, 0.4) 100%)'
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="text-center mb-8 relative z-10">
            <h3 className="text-2xl font-bold mb-2">
              <span className="bg-gradient-to-r from-slate-100 via-cyan-200 to-slate-100 bg-clip-text text-transparent">
                Connect With Me
              </span>
              <span className="ml-2">🚀</span>
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto"></div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-6 relative z-10">
            <div className="space-y-4">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                disabled={isSending}
                className={`w-full p-4 rounded-xl text-slate-200 border backdrop-blur-sm transition-all duration-300 focus:outline-none focus:scale-105 ${
                  isSending ? 'opacity-50 cursor-not-allowed' : 'hover:border-cyan-400/70 focus:border-cyan-400'
                }`}
                style={{
                  background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.6) 0%, rgba(32, 58, 67, 0.4) 100%)',
                  borderColor: isSending ? 'rgba(100, 116, 139, 0.5)' : 'rgba(100, 116, 139, 0.5)'
                }}
              />
              
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                disabled={isSending}
                className={`w-full p-4 rounded-xl text-slate-200 border backdrop-blur-sm transition-all duration-300 focus:outline-none focus:scale-105 ${
                  isSending ? 'opacity-50 cursor-not-allowed' : 'hover:border-cyan-400/70 focus:border-cyan-400'
                }`}
                style={{
                  background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.6) 0%, rgba(32, 58, 67, 0.4) 100%)',
                  borderColor: isSending ? 'rgba(100, 116, 139, 0.5)' : 'rgba(100, 116, 139, 0.5)'
                }}
              />
              
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                disabled={isSending}
                className={`w-full p-4 rounded-xl text-slate-200 border backdrop-blur-sm transition-all duration-300 focus:outline-none focus:scale-105 ${
                  isSending ? 'opacity-50 cursor-not-allowed' : 'hover:border-cyan-400/70 focus:border-cyan-400'
                }`}
                style={{
                  background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.6) 0%, rgba(32, 58, 67, 0.4) 100%)',
                  borderColor: isSending ? 'rgba(100, 116, 139, 0.5)' : 'rgba(100, 116, 139, 0.5)'
                }}
              />
              
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                required
                disabled={isSending}
                className={`w-full p-4 rounded-xl text-slate-200 border backdrop-blur-sm transition-all duration-300 focus:outline-none focus:scale-105 resize-none ${
                  isSending ? 'opacity-50 cursor-not-allowed' : 'hover:border-cyan-400/70 focus:border-cyan-400'
                }`}
                style={{
                  background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.6) 0%, rgba(32, 58, 67, 0.4) 100%)',
                  borderColor: isSending ? 'rgba(100, 116, 139, 0.5)' : 'rgba(100, 116, 139, 0.5)'
                }}
              />
            </div>

            {/* Enhanced Send Button with Loading State */}
            <button
              type="submit"
              disabled={isSending}
              className={`w-full py-4 font-bold rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 text-lg relative overflow-hidden ${
                isSending
                  ? 'cursor-not-allowed opacity-70 bg-slate-600'
                  : 'hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/25 active:scale-[0.98]'
              }`}
              style={{
                background: isSending ? undefined : 'linear-gradient(135deg, #00f5ff 0%, #00d4ff 50%, #0099cc 100%)',
                color: isSending ? '#94a3b8' : '#0f172a',
                boxShadow: isSending ? undefined : '0 10px 30px rgba(0, 245, 255, 0.3)'
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 transform -skew-x-12 transition-all duration-700 translate-x-[-200%] hover:translate-x-[200%]"></span>
              
              {isSending ? (
                <>
                  {/* Loading Spinner */}
                  <svg
                    className="animate-spin h-6 w-6 text-slate-400"
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
                  <span className="relative z-10">Sending...</span>
                </>
              ) : (
                <>
                  <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span className="relative z-10">SEND MESSAGE</span>
                </>
              )}
            </button>

            {/* Loading Indicator Text */}
            {isSending && (
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-sm border border-slate-600/50" style={{
                  background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.6) 0%, rgba(32, 58, 67, 0.4) 100%)'
                }}>
                  <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-2 animate-pulse"></span>
                  <p className="text-cyan-400 text-sm animate-pulse font-medium">
                    Please wait while we send your message...
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="p-6 rounded-xl shadow-2xl backdrop-blur-sm border border-slate-700/50 relative overflow-hidden group hover:scale-105 transition-all duration-300" style={{
            background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.8) 0%, rgba(32, 58, 67, 0.6) 50%, rgba(44, 83, 100, 0.4) 100%)'
          }}>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="flex items-center space-x-4 relative z-10">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-slate-200">Email Me</h4>
                <p className="text-sm text-slate-400">Get in touch via email</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl shadow-2xl backdrop-blur-sm border border-slate-700/50 relative overflow-hidden group hover:scale-105 transition-all duration-300" style={{
            background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.8) 0%, rgba(32, 58, 67, 0.6) 50%, rgba(44, 83, 100, 0.4) 100%)'
          }}>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="flex items-center space-x-4 relative z-10">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-slate-200">Quick Response</h4>
                <p className="text-sm text-slate-400">I'll get back to you soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;