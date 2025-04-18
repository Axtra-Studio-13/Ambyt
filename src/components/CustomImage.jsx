'use client';
import Image from 'next/image';
import React, { useState } from 'react';

export default function CustomImage({ img, base64, width = '100%',
  height = '30vh', cn = 'object-cover' }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${cn}`}
      // style={{ width: width, height: height }}
    >
      {/* Blur placeholder */}
      <Image
        src={base64}
        alt={'blur img'}
        fill
        className={`${cn} w-full h-full
           transition-opacity duration-500
            ${isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
      />

      {/* Main Image */}
      <Image
        src={img}
        alt={'main img'}
        fill
        className={`${cn} w-full h-full transition-opacity duration-500
        ${isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        onLoadingComplete={() => setIsLoaded(true)}
      />
    </div >
  );
}
