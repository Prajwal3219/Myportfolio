import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { useRef, useState } from 'react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: 'Smart Blog Hub',
      description:
        'A full-stack blogging platform where users can securely create, manage, and explore blog posts. Built with React, Node.js, Express, and MongoDB.',
      image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://smartblog-hub-ai-assisted-content-a.vercel.app/',
      github: 'https://github.com/Prajwal3219',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'News App',
      description:
        'Real-time news aggregation platform with React that fetches the latest headlines using external APIs. Features category-based filtering and responsive design.',
      image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'API', 'Responsive'],
      link: 'https://news-express-khaki.vercel.app/',
      github: 'https://github.com/Prajwal3219',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'PassOP - Password Manager',
      description:
        'Secure password manager for storing and managing credentials safely. Built using React, Node.js, Express, and MongoDB with emphasis on strong security.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Security', 'MongoDB', 'Node.js'],
      link: '#',
      github: 'https://github.com/Prajwal3219',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Imagify - AI Image Generator',
      description:
        'AI-powered image generation platform that creates stunning images from text prompts. Built using React, Node.js, Express, and AI APIs with a modern responsive UI.',
      image: '/imagify.png',
      tags: ['React', 'Node.js', 'Express', 'AI', 'MongoDB',"Tailwind css"],
      link: 'https://imagify-kappa-mocha.vercel.app/',
      github: 'https://github.com/Prajwal3219',
      gradient: 'from-purple-500 to-pink-500',
    }
  ];

  return (
    <section id="projects" ref={ref} className="relative py-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
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
            Featured Work
          </motion.span>
          <h2 className="text-5xl md:text-7xl text-purple-600 font-bold">
            My{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <motion.div
                animate={
                  hoveredIndex === index
                    ? {
                      scale: 1.02,
                      rotateY: 5,
                      rotateX: 5,
                    }
                    : {
                      scale: 1,
                      rotateY: 0,
                      rotateX: 0,
                    }
                }
                transition={{ duration: 0.3 }}
                className="relative bg-gray-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-500"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={
                      hoveredIndex === index
                        ? { scale: 1.1 }
                        : { scale: 1 }
                    }
                    transition={{ duration: 0.6 }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}></div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      hoveredIndex === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center gap-4"
                  >
                    <motion.a
                      href={project.link || '#'}
                      target={project.link && project.link !== '#' ? '_blank' : undefined}
                      rel={project.link && project.link !== '#' ? 'noopener noreferrer' : undefined}
                      aria-label={project.link && project.link !== '#' ? `Open ${project.title}` : 'No link available'}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg ${!(project.link && project.link !== '#') ? 'opacity-60 cursor-not-allowed' : ''}`}
                    >
                      <ExternalLink className="text-gray-900" size={24} />
                    </motion.a>
                    {project.github && project.github !== '#' ? (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg"
                      >
                        <Github className="text-gray-900" size={24} />
                      </motion.a>
                    ) : (
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg opacity-60 cursor-not-allowed">
                        <Github className="text-gray-900" size={24} />
                      </div>
                    )}
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 + tagIndex * 0.05 }}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-medium"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}
                ></motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://github.com/Prajwal3219"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white shadow-lg hover:shadow-cyan-500/50 transition-shadow"
          >
            View All Projects
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
