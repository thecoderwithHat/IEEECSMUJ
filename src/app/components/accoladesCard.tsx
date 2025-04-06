"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AccoladesCardProps {
  hackathonName: string;
  description: string;
  photos: string;
  position: string;
  fullWidth: boolean;
  iconApp?: boolean;
  buttonText?: string;
  subtext?: string;
  id?: number;
}

const AccoladesCard: React.FC<AccoladesCardProps> = ({
  hackathonName,
  description,
  photos,
  position,
  fullWidth,
  iconApp,
  buttonText,
  subtext
}) => {
  const [expanded, setExpanded] = useState(false);
  const expandedContentRef = useRef<HTMLDivElement>(null);

  // Handle scroll behavior when card expands
  useEffect(() => {
    if (expanded && expandedContentRef.current) {
      // Scroll to the top of the expanded content
      expandedContentRef.current.scrollTop = 0;
      
      // If we want to disable body scrolling when modal is open
      if (expanded) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
    
    // Cleanup function to restore body scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [expanded]);

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setExpanded(!expanded);
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl my-8 sm:my-0 ${fullWidth ? 'md:col-span-2' : ''}`}
      style={{ gridColumn: `span ${fullWidth ? 2 : 1}` }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3, ease: "easeInOut" }
      }}
    >
      <div className="relative h-64 w-full group">
        {/* Background Image */}
        <img
          src={photos}
          alt={`Photo of ${hackathonName}`}
          className="w-full h-full object-cover rounded-xl"
        />
        
        {/* Collapsed Content */}
        {!expanded && (
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4 rounded-xl z-10">
            <h3 className="text-ieeeorange font-bold text-xl">{hackathonName}</h3>
            <p className="text-white mt-2 text-sm">{description.slice(0, 60)}...</p>
            <button
              type='button' 
              className="text-white underline mt-2 hover:text-ieeeyellow"
              onClick={toggleExpand}
              aria-expanded={expanded}
            >
              View More
            </button>
          </div>
        )}
        
        {/* Expanded Content */}
        <motion.div
          ref={expandedContentRef}
          className={`absolute inset-0 bg-black/90 p-6 flex flex-col rounded-xl z-20 transition-all duration-500 ease-in-out overflow-y-auto max-h-full ${
            expanded
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-full pointer-events-none'
          }`}
          initial={false}
          animate={expanded ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center">
            <h3 className="text-[#FF8500] font-bold text-2xl mb-4 text-center">{hackathonName}</h3>
            <div className="text-white text-center overflow-y-auto">
              <p>{description}</p>
              {subtext && <p className="mt-4 italic">{subtext}</p>}
            </div>
            
            <button
              className="text-white underline mt-6 hover:text-ieeeyellow"
              onClick={toggleExpand}
            >
              View Less
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AccoladesCard;