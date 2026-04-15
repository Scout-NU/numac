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
        className="h-full w-full flex flex-col rounded-[18px] border-l-[22px] border-green-primary bg-[#b8c9c1] p-5 shadow-sm text-left overflow-hidden"
      >
        <div className="min-h-[64px]">
          <h3 className="mb-1 text-xl font-extrabold text-[#245848]">{name}</h3>
          <p className="text-sm text-[#245848]">{company}</p>
        </div>
        <div className="flex items-start gap-1 mt-4">
          <span className="shrink-0 text-5xl font-bold leading-none text-[#1f1f1f]">&ldquo;</span>
          <p className="text-sm font-bold leading-6 text-[#1f1f1f]">{preview}</p>
        </div>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-[18px] border-l-[22px] border-green-primary bg-[#b8c9c1] p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="mb-1 text-xl font-extrabold text-[#245848]">{name}</h3>
            <p className="mb-4 text-xs text-[#245848]">{company}</p>
            <div className="flex items-start gap-1">
              <span className="shrink-0 text-5xl font-bold leading-none text-[#1f1f1f]">&ldquo;</span>
              <p className="text-sm font-bold leading-6 text-[#1f1f1f]">{fullTestimonial}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ClientTestimonial;
