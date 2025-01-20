import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Work = () => {
  const navigate = useNavigate();
  const projects = [
    {
      id: "temple-glasses",
      title: "Temple Glasses",
      description: "Eyewear Design",
      imageUrl: "/Images/BlondeMan.jpg",
      websiteUrl: "https://templeglasses.com"
    },
    {
      id: "black-hole-pillow",
      title: "Black Hole Pillow",
      description: "Brand Identity",
      imageUrl: "/coverBh-min.png",
      websiteUrl: "https://blackholepillow.store"
    },
  
  ];

  const handleProjectClick = (projectId: string) => {
    navigate(`/work/${projectId}`);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-16 text-center"
        >
          Our Work
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={() => handleProjectClick(project.id)}
            >
              <Card className="group cursor-pointer overflow-hidden bg-transparent border-none">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-200">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Work;