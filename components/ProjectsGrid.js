'use client';

import { useState } from 'react';
import Tile from './Tile';
import styles from '../app/page.module.css';
import { AnimatePresence } from 'framer-motion';
import { projects } from '@/utils/constants';
import Image from 'next/image';

const ProjectsGrid = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const tilesPerPage = 5;
  const totalPages = Math.ceil(projects.length / tilesPerPage);

  const getCurrentTiles = () => {
    const startIndex = currentPage * tilesPerPage;
    return projects.slice(startIndex, startIndex + tilesPerPage);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className={styles.desktopOnly}>
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <AnimatePresence mode='wait'>
          {getCurrentTiles().map((project, index) => (
            <Tile
              key={`${project.name}-${currentPage}`}
              idx={index}
              length={tilesPerPage}
              images={project.images}
              link={project.link}
              name={project.name}
            />
          ))}
        </AnimatePresence>
        {/* <div
          style={{
            position: 'fixed',
            top: '10px',
            right: '10px',
            display: 'flex',
            gap: '10px',
            zIndex: 100,
          }}
        >
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '5px',
              cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
              opacity: currentPage === 0 ? 0.5 : 1,
            }}
          >
            <Image
              width='30'
              height='30'
              src='https://img.icons8.com/?size=100&id=26194&format=png&color=DBDBDB'
              alt='back'
            />
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              cursor:
                currentPage === totalPages - 1 ? 'not-allowed' : 'pointer',
              opacity: currentPage === totalPages - 1 ? 0.5 : 1,
            }}
          >
            <Image
              width='30'
              height='30'
              src='https://img.icons8.com/?size=100&id=26129&format=png&color=DBDBDB'
              alt='forward'
            />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectsGrid;
