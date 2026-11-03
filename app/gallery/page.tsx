import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Galería de Proyectos | Geomatic D' Peña",
  robots: {
    index: false,
    follow: true,
  },
};

function Gallery() {
  return (
    <div>Gallery</div>
  );
}

export default Gallery;
