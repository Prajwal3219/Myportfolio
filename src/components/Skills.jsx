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
        { name: 'Java', percentage: 80 },
        { name: 'Python (Basic)', percentage: 55 }
      ]
    },
    {
      title: 'Frontend',
      icon: 'bi-laptop',
      gradient: 'from-blue-400 to-indigo-600',
      shadow: 'shadow-blue-500/50',
      skills: [
        { name: 'React.js', percentage: 75 },
        { name: 'HTML', percentage: 90 },
        { name: 'CSS', percentage: 85 },
        { name: 'Tailwind CSS', percentage: 80 },
        { name: 'Bootstrap', percentage: 75 }
      ]
    },
    {
      title: 'Backend',
      icon: 'bi-terminal',
      gradient: 'from-purple-400 to-pink-600',
      shadow: 'shadow-purple-500/50',
      skills: [
        { name: 'Node.js', percentage: 80 },
        { name: 'Express.js', percentage: 75 }
      ]
    },
    {
      title: 'Database',
      icon: 'bi-database',
      gradient: 'from-emerald-400 to-teal-600',
      shadow: 'shadow-emerald-500/50',
      skills: [
        { name: 'MongoDB', percentage: 75 }
      ]
    },
    {
      title: 'Tools',
      icon: 'bi-tools',
      gradient: 'from-yellow-400 to-amber-600',
      shadow: 'shadow-yellow-500/50',
      skills: [
        { name: 'Git', percentage: 80 },
        { name: 'GitHub', percentage: 85 },
        { name: 'Postman', percentage: 75 },
        { name: 'VS Code', percentage: 90 }
      ]
    },
    {
      title: 'Core',
      icon: 'bi-cpu',
      gradient: 'from-cyan-400 to-blue-600',
      shadow: 'shadow-cyan-500/50',
      skills: [
        { name: 'Data Structures & Algorithms', percentage: 70 }
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
                  <div className="flex items-center gap-4 mb-6">
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

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{skill.name}</span>
                          <span className="text-cyan-400 font-bold text-xs">{skill.percentage}%</span>
                        </div>

                        <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.percentage}%` } : {}}
                            transition={{ duration: 1.5, delay: 0.3 + (index * 0.1) + (skillIndex * 0.05), ease: 'easeOut' }}
                            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                          >
                            <motion.div
                              animate={{
                                x: ['-100%', '100%'],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'linear',
                              }}
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            ></motion.div>
                          </motion.div>
                        </div>
                      </div>
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
