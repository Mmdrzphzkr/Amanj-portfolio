import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import toast from "react-hot-toast";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiPaperAirplane,
} from "react-icons/hi";
import { FaTelegram, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

const contactInfo = [
  {
    icon: <HiMail className="text-xl" />,
    label: "Email",
    value: "contact@amanjdevs.com",
    link: "mailto:contact@amanjdevs.com",
    color: "#6c63ff",
  },
  {
    icon: <HiPhone className="text-xl" />,
    label: "Phone",
    value: "+1 (555) 000-0000",
    link: "tel:+15550000000",
    color: "#00ff88",
  },
  {
    icon: <HiLocationMarker className="text-xl" />,
    label: "Location",
    value: "Available Worldwide",
    link: "#",
    color: "#00d4ff",
  },
];

const socials = [
  { icon: <FaTelegram />, link: "#", color: "#0088cc", name: "Telegram" },
  { icon: <FaWhatsapp />, link: "#", color: "#25D366", name: "WhatsApp" },
  { icon: <FaGithub />, link: "#", color: "#ffffff", name: "GitHub" },
  { icon: <FaLinkedin />, link: "#", color: "#0A66C2", name: "LinkedIn" },
];

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields");
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    toast.success("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
    setSending(false);
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a question or want to discuss a project? Reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.link}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="tech-card flex items-center gap-4 !p-4 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center 
                    transition-transform group-hover:scale-110"
                  style={{
                    background: `${item.color}15`,
                    color: item.color,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="font-heading text-xs font-semibold text-gray-500 tracking-wider">
                    {item.label}
                  </p>
                  <p className="font-body text-sm text-white">{item.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <p className="font-heading text-xs font-semibold text-gray-500 tracking-wider mb-3">
                SOCIAL LINKS
              </p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-lg 
                      transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    style={{
                      background: `${social.color}15`,
                      color: social.color,
                      border: `1px solid ${social.color}20`,
                    }}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass rounded-2xl p-6 md:p-8 glow-box"
          >
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="font-heading text-xs font-semibold text-gray-400 tracking-wider mb-2 block">
                  NAME
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="form-input"
                />
              </div>
              <div>
                <label className="font-heading text-xs font-semibold text-gray-400 tracking-wider mb-2 block">
                  EMAIL
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="form-input"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="font-heading text-xs font-semibold text-gray-400 tracking-wider mb-2 block">
                MESSAGE
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your project or ask a question..."
                rows={5}
                className="form-input resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className={`btn-primary w-full py-3 flex items-center justify-center gap-2 ${
                sending ? "opacity-60" : ""
              }`}
            >
              {sending ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <HiPaperAirplane className="rotate-90" />
                  SEND MESSAGE
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
