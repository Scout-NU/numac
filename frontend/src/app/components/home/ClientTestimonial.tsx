'use client';
import React, { useState } from 'react';

interface ClientTestimonialProps {
  name: string;
  company: string;
  preview: string;
  fullTestimonial: string;
}

const ClientTestimonial: React.FC<ClientTestimonialProps> = ({
  name,
  company,
  preview,
  fullTestimonial,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="min-h-[220px] w-full rounded-[18px] border-l-8 border-green-primary bg-[#b8c9c1] p-5 shadow-sm text-left"
      >
        <h3 className="mb-1 text-xl font-medium text-[#245848]">{name}</h3>
        <p className="mb-6 text-sm text-[#245848]">{company}</p>
        <div className="mb-3 text-4xl font-bold leading-none text-[#1f1f1f]">"</div>
        <p className="line-clamp-3 text-sm leading-7 text-[#1f1f1f]">{preview}</p>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-[18px] border-l-8 border-green-primary bg-[#b8c9c1] p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="mb-1 text-xl font-medium text-[#245848]">{name}</h3>
            <p className="mb-6 text-sm text-[#245848]">{company}</p>
            <p className="text-sm leading-7 text-[#1f1f1f]">{fullTestimonial}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ClientTestimonial;
