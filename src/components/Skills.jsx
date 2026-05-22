import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const categories = [
    {
      title: 'Languages',
      icon: 'bi-code-slash',
      gradient: 'from-orange-400 to-red-600',
      shadow: 'shadow-orange-500/50',
      skills: [
        { name: 'Java', icon: 'bi-cup-hot', color: 'text-orange-500' },
        { name: 'Python (Basic)', icon: 'bi-code-square', color: 'text-yellow-500' }
      ]
    },
    {
      title: 'Frontend',
      icon: 'bi-laptop',
      gradient: 'from-blue-400 to-indigo-600',
      shadow: 'shadow-blue-500/50',
      skills: [
        { name: 'React.js', icon: 'bi-browser-chrome', color: 'text-cyan-400' },
        { name: 'HTML', icon: 'bi-filetype-html', color: 'text-orange-500' },
        { name: 'CSS', icon: 'bi-filetype-css', color: 'text-blue-500' },
        { name: 'Tailwind CSS', icon: 'bi-wind', color: 'text-cyan-400' },
        { name: 'Bootstrap', icon: 'bi-bootstrap', color: 'text-purple-500' }
      ]
    },
    {
      title: 'Backend',
      icon: 'bi-terminal',
      gradient: 'from-purple-400 to-pink-600',
      shadow: 'shadow-purple-500/50',
      skills: [
        { name: 'Node.js', icon: 'bi-server', color: 'text-green-500' },
        { name: 'Express.js', icon: 'bi-cpu', color: 'text-gray-400' }
      ]
    },
    {
      title: 'Database',
      icon: 'bi-database',
      gradient: 'from-emerald-400 to-teal-600',
      shadow: 'shadow-emerald-500/50',
      skills: [
        { name: 'MongoDB', icon: 'bi-database', color: 'text-emerald-500' }
      ]
    },
    {
      title: 'Tools',
      icon: 'bi-tools',
      gradient: 'from-yellow-400 to-amber-600',
      shadow: 'shadow-yellow-500/50',
      skills: [
        { name: 'Git', icon: 'bi-git', color: 'text-red-500' },
        { name: 'GitHub', icon: 'bi-github', color: 'text-gray-200' },
        { name: 'Postman', icon: 'bi-send-fill', color: 'text-orange-500' },
        { name: 'VS Code', icon: 'bi-code-slash', color: 'text-blue-400' }
      ]
    },
    {
      title: 'Core',
      icon: 'bi-cpu',
      gradient: 'from-cyan-400 to-blue-600',
      shadow: 'shadow-cyan-500/50',
      skills: [
        { name: 'Data Structures & Algorithms', icon: 'bi-diagram-3', color: 'text-pink-500' }
      ]
    }
  ];

  return (
    <section ref={ref} className="relative py-20 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
            className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-400 font-medium mb-6"
          >
            What I Work With
          </motion.span>
          <h2 className="text-5xl md:text-7xl text-purple-600 font-bold">
            My{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>

              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center shadow-2xl ${category.shadow} shrink-0`}
                    >
                      <i className={`bi ${category.icon} text-2xl text-white`}></i>
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) + (skillIndex * 0.05) }}
                        whileHover={{ y: -5, scale: 1.05, boxShadow: '0 8px 25px rgba(34, 211, 238, 0.15)' }}
                        className="flex items-center gap-2.5 px-4 py-2.5 bg-gray-900/60 border border-gray-800 hover:border-cyan-500/30 hover:bg-gray-800/80 rounded-2xl text-gray-300 hover:text-white transition-all duration-300 cursor-pointer"
                      >
                        <i className={`bi ${skill.icon} text-lg ${skill.color}`}></i>
                        <span className="text-sm font-semibold">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Constantly learning and evolving with the latest web technologies to deliver cutting-edge solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
export default Skills;
