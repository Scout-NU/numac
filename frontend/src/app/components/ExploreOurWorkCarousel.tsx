'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import ExploreOurWorkCard from './ExploreOurWorkCard';

interface Project {
  name: string;
  description: string;
  href: string;
}

interface ExploreOurWorkCarouselProps {
  projects: Project[];
}

const ExploreOurWorkCarousel: React.FC<ExploreOurWorkCarouselProps> = ({ projects }) => {
  const [index, setIndex] = useState(0);
  const visibleCount = 3;

  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);
  const next = () => setIndex((i) => (i + 1) % projects.length);

  const visible = Array.from({ length: visibleCount }, (_, i) => projects[(index + i) % projects.length]);

  return (
    <>
      <div className="flex items-center gap-4 md:gap-6">
        <button
          onClick={prev}
          className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1f7a5a] shadow-md transition-all active:scale-90 active:brightness-75 md:flex"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {visible.map((project, i) => (
            <ExploreOurWorkCard
              key={index + i}
              name={project.name}
              description={project.description}
              href={project.href}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1f7a5a] shadow-md transition-all active:scale-90 active:brightness-75 md:flex"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <div className="mt-14 flex justify-center">
        <Link
          href="#"
          className="grid place-items-center rounded-[24px] bg-[#1f7a5a] px-10 py-5 shadow-md md:px-14"
        >
          <svg viewBox="0 0 220 40" className="h-9 w-auto">
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="28" fontWeight="600" fontFamily="sans-serif">What we do</text>
          </svg>
        </Link>
      </div>
    </>
  );
};

export default ExploreOurWorkCarousel;
