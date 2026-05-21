import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, Send, Sparkles, Twitter } from 'lucide-react';
import { useRef, useState } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'prajval@email.com', link: 'mailto:prajval@email.com' },
    { icon: Phone, label: 'Phone', value: '+91 98765 43210', link: 'tel:+919876543210' },
    { icon: MapPin, label: 'Location', value: 'Maharashtra, India', link: '#' },
  ];

  const socialLinks = [
    { icon: Github, link: 'https://github.com/Prajwal3219', color: 'from-gray-500 to-gray-700' },
    { icon: Linkedin, link: 'https://www.linkedin.com/in/prajval-koli-21a93a2ba/', color: 'from-blue-500 to-blue-700' },
    { icon: Twitter, link: '#', color: 'from-cyan-400 to-blue-500' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

      if (web3FormsKey) {
        // Send using Web3Forms (Serverless direct sending)
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: web3FormsKey,
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: `Portfolio Contact Message from ${formData.name}`,
          }),
        });
        const data = await res.json().catch(() => ({}));
        if (res.ok && data.success) {
          setStatus({ ok: true, message: 'Message sent successfully!' });
          setFormData({ name: '', email: '', message: '' });
        } else {
          setStatus({ ok: false, message: data.message || 'Failed to send message via Web3Forms' });
        }
      } else {
        // Send using the Express backend
        const apiBase = import.meta.env.VITE_API_URL ?? '/api';
        const res = await fetch(`${apiBase}/send`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        const data = await res.json().catch(() => ({}));
        if (res.ok && data.ok) {
          if (data.mock) {
            setStatus({
              ok: true,
              message: 'Message simulated! (Logged to local server console. For real emails, configure server/.env or root .env with Web3Forms)',
            });
          } else {
            setStatus({ ok: true, message: 'Message sent — thank you!' });
          }
          setFormData({ name: '', email: '', message: '' });
        } else {
          setStatus({ ok: false, message: data.error || 'Failed to send message' });
        }
      }
    } catch (err) {
      console.error('Send error:', err);
      setStatus({
        ok: false,
        message:
          'Cannot reach the mail server. Make sure you run "npm run server" in a second terminal, or add VITE_WEB3FORMS_ACCESS_KEY to your root .env file for direct serverless sending.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={ref} className="relative py-4 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 font-medium mb-6"
          >
            <Sparkles size={18} />
            Get In Touch
          </motion.span>
          <h2 className="text-5xl md:text-7xl text-purple-600 font-bold">
            Contact{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-500">
              <h3 className="text-3xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm open to internships, freelance work, and collaborations. Let's create something amazing together!
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.label}
                      href={item.link}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-2xl hover:bg-gray-800 transition-all group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-medium">{item.label}</div>
                        <div className="text-white font-medium">{item.value}</div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-14 h-14 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center shadow-lg hover:shadow-cyan-500/50 transition-all`}
                    >
                      <Icon className="text-white" size={24} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-500">
              <h3 className="text-3xl font-bold text-white mb-4">Message Me</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                You can reach out anytime. I'll reply as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <motion.div
                    animate={
                      focused === 'name'
                        ? { scale: 1.02, borderColor: '#22d3ee' }
                        : { scale: 1 }
                    }
                    className="relative"
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      required
                      className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all"
                    />
                    {focused === 'name' && (
                      <motion.div
                        layoutId="input-highlight"
                        className="absolute inset-0 border-2 border-cyan-500 rounded-2xl pointer-events-none"
                      ></motion.div>
                    )}
                  </motion.div>
                </div>

                <div>
                  <motion.div
                    animate={
                      focused === 'email'
                        ? { scale: 1.02, borderColor: '#22d3ee' }
                        : { scale: 1 }
                    }
                    className="relative"
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      required
                      className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all"
                    />
                    {focused === 'email' && (
                      <motion.div
                        layoutId="input-highlight"
                        className="absolute inset-0 border-2 border-cyan-500 rounded-2xl pointer-events-none"
                      ></motion.div>
                    )}
                  </motion.div>
                </div>

                <div>
                  <motion.div
                    animate={
                      focused === 'message'
                        ? { scale: 1.02, borderColor: '#22d3ee' }
                        : { scale: 1 }
                    }
                    className="relative"
                  >
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      required
                      rows={5}
                      className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all resize-none"
                    ></textarea>
                    {focused === 'message' && (
                      <motion.div
                        layoutId="input-highlight"
                        className="absolute inset-0 border-2 border-cyan-500 rounded-2xl pointer-events-none"
                      ></motion.div>
                    )}
                  </motion.div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: submitting ? 1 : 1.05, boxShadow: submitting ? 'none' : '0 0 30px rgba(34, 211, 238, 0.6)' }}
                  whileTap={{ scale: 0.95 }}
                  disabled={submitting}
                  className={`w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-bold text-white shadow-lg flex items-center justify-center gap-2 group ${submitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                  <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                </motion.button>

                {status && (
                  <div className={`mt-4 text-sm ${status.ok ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
