import { forwardRef } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="contact" className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-custom">Contact Us</h2>
          <p className="text-gray-600 text-lg mt-4">
            Have questions? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPhone className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-gray-600">Debdulal Saha</p>
            <p className="text-gray-600">+91 90911 71996</p>
            <p className="text-gray-600 mt-2">Afzal Hossain Mallik</p>
            <p className="text-gray-600">+91 98327 66191</p>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEnvelope className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-600">sac@kgec.edu.in</p>
            <p className="text-gray-600">info@sackgec.org</p>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMapMarkerAlt className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p className="text-gray-600">Kalyani Government Engineering College</p>
            <p className="text-gray-600">Kalyani, Nadia</p>
            <p className="text-gray-600">West Bengal - 741235</p>
          </motion.div>
        </div>

        {/* Map and Form Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8 order-1 md:order-1"
          >
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Map */}
          <div className="order-2 md:order-2">
            <div className="rounded-lg overflow-hidden shadow-lg h-[300px] md:h-[500px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8219102555387!2d88.44869811496831!3d22.99133988497286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8952d71094a7f%3A0x8f1c6d3ff467d96b!2sKalyani%20Government%20Engineering%20College!5e0!3m2!1sen!2sin!4v1648203164036!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
