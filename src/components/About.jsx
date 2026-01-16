import { motion, useInView } from 'framer-motion';
import { Code, Database, Globe, Layers, Rocket, Sparkles, Zap } from 'lucide-react';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { number: '6+', label: 'Technologies', icon: Layers },
    { number: '∞', label: 'Curiosity', icon: Sparkles },
    { number: '100%', label: 'Passion', icon: Rocket },
  ];

  const floatingIcons = [
    { Icon: Globe, color: 'from-orange-400 to-red-500', position: 'top-10 right-10', delay: 0 },
    { Icon: Database, color: 'from-green-400 to-emerald-500', position: 'bottom-10 left-10', delay: 1 },
    { Icon: Layers, color: 'from-cyan-400 to-blue-500', position: 'top-1/2 left-0', delay: 2 },
  ];

  return (
    <section id="about" className="relative py-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 font-medium mb-6"
          >
            Get To Know Me
          </motion.span>
          <h2 className="text-5xl md:text-7xl text-purple-600 font-bold ">
            About{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <motion.div
                animate={{
                  rotate: [0, 6, 0, -6, 0],
                  scale: [1, 1.02, 1, 1.02, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl transform rotate-6"
              ></motion.div>

              <motion.div
                animate={{
                  rotate: [0, -6, 0, 6, 0],
                  scale: [1, 1.02, 1, 1.02, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute inset-8 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-3xl transform -rotate-6"
              ></motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute inset-16 bg-white rounded-2xl shadow-2xl flex items-center justify-center"
              >
                <Code className="text-blue-600" size={120} strokeWidth={1.5} />
              </motion.div>

              {floatingIcons.map(({ Icon, color, position, delay }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          scale: 1,
                          y: [0, -15, 0],
                        }
                      : {}
                  }
                  transition={{
                    opacity: { delay: delay * 0.2, duration: 0.5 },
                    scale: { delay: delay * 0.2, duration: 0.5 },
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: delay,
                    },
                  }}
                  className={`absolute ${position} w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center`}
                >
                  <div className={`bg-gradient-to-br ${color} rounded-lg p-3`}>
                    <Icon className="text-white" size={24} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
              <Zap className="text-cyan-400" />
              Frontend Developer & Creative Problem Solver
            </h3>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I am a passionate frontend developer with strong knowledge of{' '}
                <span className="text-cyan-400 font-semibold">HTML, CSS, Bootstrap, JavaScript, and React</span>.
                I enjoy building responsive, user-friendly web applications and continuously improving my skills.
              </p>
              <p>
                I also have experience working with{' '}
                <span className="text-purple-400 font-semibold">Java and MongoDB</span>, and I love learning new
                technologies and solving real-world problems through code. Every project is an opportunity to create
                something amazing!
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-4 mt-10"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative group"
                  >
                    <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 text-center hover:border-cyan-400 transition-all">
                      <Icon className="mx-auto mb-2 text-cyan-400" size={24} />
                      <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-400 font-medium mt-1">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
