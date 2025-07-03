"use client";
import { motion } from "framer-motion";

export const Contact = () => {
    return (
      <section id="contact" className="min-h-screen py-20 px-4 mx-auto flex items-center bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16"
        >
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white"
            >
              Get in <br /> <span className="text-[#7b2cbf]">Touch</span>
            </motion.h2>
  
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass p-6 sm:p-8 rounded-2xl space-y-6 sm:space-y-8 h-auto sm:h-[450px] backdrop-blur-lg bg-white/10 border border-white/10 shadow-lg flex flex-col gap-6 sm:gap-8"
            >
              {/* Phone */}
              <div className="space-y-2">
                <p className="text-base sm:text-lg text-gray-300">Phone</p>
                <a
                  href="tel:+9999999999"
                  className="text-2xl sm:text-lg md:text-2xl font-bold hover:text-gray-400 transition duration-300 flex items-center gap-2 text-gray-600"
                >
              +91 7773091428
                </a>
              </div>
  
              {/* Email */}
              <div className="space-y-2">
                <p className="text-base sm:text-lg text-gray-300">Email</p>
                <a
                  href="mailto:akkadouail@gmail.com"
                  className="text-2xl  md:text-2xl sm:text-lg  font-bold hover:text-gray-400 transition duration-300 flex items-center gap-2 text-gray-600"
                >
               kushwahabhishek42@gmail.com
                </a>
              </div>
  
              {/* Address */}
              <div className="space-y-2">
                <p className="text-base sm:text-lg text-gray-300">Address</p>
                <p className="text-2xl sm:text-lg md:text-2xl font-bold text-gray-600">
                 Gwalior, Madhya Pradesh, India
                </p>
              </div>
            </motion.div>
          </div>
  
          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121.520397497788!2d78.1643611520238!3d26.209518839387233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5e4334311e5%3A0x212673be30fd6d41!2sJai%20Nagarkot%20wali%20mata!5e0!3m2!1sen!2sin!4v1751451743350!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </motion.div>
      </section>
    );
  };