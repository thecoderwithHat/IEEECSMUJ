"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import AccoladesCard from '../components/accoladesCard';


interface AccoladesCardProps {
  hackathonName: string;
  description: string;
  photos: string;
  position: string;
  fullWidth: boolean;
  subtext?: string;
  id?: number;
}



const accoladesData = [
  {
    id: 0,
    hackathonName: "TechnoVision 2.0",
    description: "Technovision 2.0 was an exciting ideathon organized by IEEE RAS MUJ (IEEE Robotics & Automation Society, Manipal University Jaipur), bringing together innovative minds to brainstorm and develop groundbreaking ideas across various domains. The event aimed to foster creativity, critical thinking, and problem-solving skills among participants, encouraging them to tackle real-world challenges with technological solutions.Our team secured 2nd place in the competition under the Healthcare theme with a data-driven hospital management platform. Our solution aimed to enhance hospital operations by providing real-time insights on bed availability, OPD slot management, and patient assistance—a much-needed solution for improving hospital efficiency and emergency response. ",
    subtext:"Participants: Kanishka Bhatia and Samaksh Gupta",
    photos: "https://images.unsplash.com/photo-1557682250-33bd709cbe85",
    position: "2",
    fullWidth: false,
  },
  {
    id: 1,
    hackathonName: "BITS Pilani x Postman Innovation Lab Hackathon!",
    description: " 2nd Runner Up for building Caremate, an AI platform, streamlines management with therapy assistance, symptom analysis, insurance automation, disease prediction, and centralized records. Tailored dashboards improve efficiency and empower patients.",
    subtext:'Participant: Krishnav Kanoi, Samaksh Gupta, Neil Gupta and Rohit Ganguly ',
    photos: "https://images.unsplash.com/photo-1573164713988-8665fc963095",
    position: "3",
    fullWidth: false,
  },
  {
    id: 2,
    hackathonName: "Innovative IQ",
    description: "3rd position and was a university-level competition focused on real-world problem-solving using computational techniques resulted in building a sustainability-focused app to track and reduce carbon footprints ",
    subtext:'Participant: Manya Aghi',
    photos: "https://plus.unsplash.com/premium_photo-1675355675360-a0cfa025f682?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    position: "1",
    fullWidth: false,
  },
  {
    id: 3,
    hackathonName: "InnovateX 24-Hour Hackathon at DTU ",
    description: "Coming in top 15 among 2000+ teams",
    subtext: 'Participant:  Rishi Joshi, Mohit Hingorani and Samaksh Gupta ',
    photos: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    position: "4",
    fullWidth: false,
  },
  {
    id: 4,
    hackathonName: 'TrailBlazers by Turing Sapiens, MUJ',
    description: '3rd position and a cash prize of Rs. 3,000 in 8-hour coding hackathon, divided into 6 rounds including complex coding tasks, and 50 minutes to complete each of them ',
    subtext:'Participant: Samaksh Gupta and Mohit Hingorani',
    photos: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    position: "1",
    fullWidth: false,
  },
  {
    id: 5,
    hackathonName: "Medecro HealthHack",
    description: "1st position for building a comprehensive solution, including a website for beds/OPDs queuing, a medicine chatbot, a therapy LLM, and a disease recognition model.",
    photos: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
    subtext:'Participants: Krishnav Kanoi, Tamanna Yadav and Neil Gupta',
    position: "2",
    fullWidth: false,
  },
  
];

const Competition = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="w-full bg-fixed py-12">
        <div className="mx-auto px-4 lg:px-8">
          <p className="text-center text-5xl font-bold text-ieeeyellow">
            IEEE CS Accolades
          </p>
        </div>
      </div>
      <ProgressBar
        height="4px"
        color="#FFA300"
        options={{ showSpinner: false }}
        shallowRouting
      />

      <div className="container mx-auto px-4 py-8">
        <div className="items-center justify-center  sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {accoladesData.map((item) => (
            <AccoladesCard
              key={item.id}
              {...item} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Competition;