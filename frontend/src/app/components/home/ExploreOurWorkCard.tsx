'use client';
import React from 'react';
import Link from 'next/link';

interface ExploreOurWorkCardProps {
  name: string;
  description: string;
  href: string;
}

const ExploreOurWorkCard: React.FC<ExploreOurWorkCardProps> = ({ name, description, href }) => {
  return (
    <div className="overflow-hidden rounded-md border-l-[10px] border-green-primary bg-[#cfc4b2] shadow-md">
      <div className="p-4">
        <div className="relative mb-4 h-40 w-full overflow-hidden rounded-md">
          <div className="h-full w-full bg-[#ddd6ca]" />
        </div>
        <h3 className="mb-2 text-xl font-medium text-[#1f1f1f]">{name}</h3>
        <p className="mb-8 text-sm text-[#2d2d2d]">{description}</p>
        <Link href={href} className="text-sm font-medium text-green-primary">
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default ExploreOurWorkCard;
