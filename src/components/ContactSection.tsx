import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (sending) return;

    setSending(true);

    try {
      const templateParams = {
        // Variables used by the EmailJS template
        name: formData.name,
        email: formData.email,

        // Variables used in the email content
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,

        // Subject variable
        title: `New Portfolio Message from ${formData.name}`,
      };

      console.log('Sending email...', templateParams);

      const response = await emailjs.send(
        'service_2jjwioy',
        'template_rthxcuv',
        templateParams,
        'seWgz0ufoXHfjCe1c'
      );

      console.log('EmailJS response:', response);

      if (response.status === 200) {
        setSent(true);

        setFormData({
          name: '',
          email: '',
          message: '',
        });
      }
    } catch (error: any) {
      console.error('=================================');
      console.error('EMAILJS ERROR');
      console.error('Status:', error?.status);
      console.error('Message:', error?.text);
      console.error('Full error:', error);
      console.error('=================================');

      alert(
        `Message could not be sent.\n\nEmailJS Status: ${
          error?.status || 'Unknown'
        }\n\nError: ${
          error?.text || 'Unknown EmailJS error'
        }`
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-16 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>

              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center space-x-4 mb-5"
              >
                <span
                  className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  05 / CONTACT
                </span>

                <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    LET&apos;S BUILD
                  </span>

                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                    SOMETHING INTELLIGENT.
                  </span>
                </h2>
              </motion.div>

              {/* Description */}
              <p
                className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-relaxed max-w-md mb-8"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Interested in AI, machine learning, data science, or
                intelligent software systems? I would love to connect,
                collaborate, and build meaningful technology together.
              </p>

              {/* Contact Links */}
              <div className="space-y-3">

                <a
                  href="mailto:supriyamalakarind@gmail.com"
                  className="block text-xs text-[#C4B5A5] hover:text-[#D4AF37] transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  EMAIL ↗
                </a>

                <a
                  href="https://github.com/SupriyaMalakar007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xs text-[#C4B5A5] hover:text-[#D4AF37] transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  GITHUB ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/supriya-malakar-a43168325/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xs text-[#C4B5A5] hover:text-[#D4AF37] transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  LINKEDIN ↗
                </a>

              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-[#8C6D4F]/40 bg-[#0A0806] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
          >

            {/* Top Gold Line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

            {/* Corner Details */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4AF37]/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D4AF37]/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/60" />

            {sent ? (
              /* SUCCESS MESSAGE */
              <div className="py-16 text-center space-y-4">

                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#D4AF37] text-[#D4AF37] text-sm">
                  ✓
                </div>

                <h3
                  className="text-3xl text-white font-normal uppercase"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  MESSAGE RECEIVED
                </h3>

                <p
                  className="text-xs text-[#A8988B] font-light"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>

              </div>
            ) : (

              /* CONTACT FORM */
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* NAME + EMAIL */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  {/* NAME */}
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                      // NAME
                    </span>

                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      placeholder="Your name"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                      // EMAIL
                    </span>

                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      placeholder="Your email"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                </div>

                {/* MESSAGE */}
                <div>
                  <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                    // MESSAGE
                  </span>

                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    placeholder="Tell me about your idea..."
                    className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 p-4 outline-none rounded-sm transition-colors resize-none"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3.5 border border-[#8C6D4F]/50 bg-[#14100D] hover:border-[#D4AF37] hover:bg-[#1A1510] text-[#E8DFD8] hover:text-[#F7E7C4] text-xs font-medium tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {sending ? 'SENDING...' : 'SEND MESSAGE ↗'}
                </button>

              </form>
            )}

          </motion.div>
        </div>

        {/* FOOTER */}
        <div className="pt-16 mt-16 border-t border-[#8C6D4F]/15 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">

          <span className="text-[10px] font-mono tracking-widest text-[#8C6D4F] uppercase">
            SUPRIYA MALAKAR // AI &amp; ML
          </span>

          <span className="text-[10px] font-mono text-[#8C6D4F]">
            © {new Date().getFullYear()} • BUILT WITH INTELLIGENCE
          </span>

        </div>

      </div>
    </footer>
  );
};

export default ContactSection;