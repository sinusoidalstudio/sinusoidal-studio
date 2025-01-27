import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();

  // Project data with matching IDs
  const projects = {
    "temple-glasses": {
      title: "Temple Glasses",
      description: "Digital Experience",
      fullDescription: "A new era in eyewear comfort",
      imageUrl: "/Images/BlondeMan.jpg",
      details: [
        "Product Design",
        "Motion Design",
        "Development",
        "Prototyping",
        "Brand Strategy"
      ],
      videoId: "lldmz-JhWTw",
      websiteUrl: "https://templeglasses.com",
      longDescription: "Temple glasses are designed with a difference. Featuring non-slip pads that rest comfortably on your temples – the natural support points on your head – they put no more pressure on your ears, helping to prevent pain and irritation."
    },
    "black-hole-pillow": {
      title: "Black Hole Pillow",
      description: "Sleep Solutions",
      fullDescription: "Comfort meets innovation",
      imageUrl: "/coverBh-min.png",
      details: [
        "Brand Design",
        "Product Design",
        "Development",
        "Marketing Strategy"
      ],
      videoId: "TBffPFjsDmc",
      websiteUrl: "https://blackholepillow.store",
      longDescription: "The Black Hole Pillow represents a revolutionary approach to comfort and rest, combining innovative design with premium materials."
    },
    
  };

  const project = projectId ? projects[projectId as keyof typeof projects] : null;

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/work">
            <Button variant="ghost" className="mb-8 text-white hover:text-gray-300">
              <ArrowLeft className="mr-2" />
              Back to Work
            </Button>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                {project.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl mb-8 text-gray-300"
              >
                {project.fullDescription}
              </motion.p>
              {project.websiteUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="mb-8"
                >
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
                  >
                    Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </motion.div>
              )}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  {project.details.map((detail, index) => (
                    <li key={index} className="text-gray-300">{detail}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-[600px] rounded-lg"
                src={`https://www.youtube.com/embed/${project.videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 max-w-3xl"
          >
            <p className="text-lg leading-relaxed text-gray-300">
              {project.longDescription}
            </p>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default ProjectDetail;