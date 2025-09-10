'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { isUnsupportedBrowser } from '@/utils/isUnsupportedBrowser';
import useDebounce from '@/app/hooks/useDebounce';

import GooeyFilter from './GooeyFilter';
import SearchIcon from './SearchIcon';
import LoadingIcon from './LoadingIcon';
import CloseIcon from './CloseIcon';
import { dummyData } from '@/utils/dummyData';
import '../styles/searchBars.scss';
import clsx from 'clsx';

const buttonVariants = {
  initial: { x: 0, width: 200 },
  step1: { x: 0, width: 200 },
  step2: { x: -25, width: 200 },
};

const iconVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 16, opacity: 1 },
};

const closeIconVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 60, opacity: 1 },
};

const searchResultsVariants = {
  step1: { x: 25 },
  step2: { x: 0 },
};

const getResultItemVariants = (index, isUnsupported) => ({
  initial: {
    y: 0,
    scale: 0.3,
  },
  animate: {
    y: (index + 1) * 50,
    scale: 1,
  },
  exit: {
    y: isUnsupported ? 0 : -4,
    scale: 0.8,
    color: '#1f1f1f',
  },
});

const getResultItemTransition = (index) => ({
  duration: 0.75,
  delay: index * 0.12,
  type: 'spring',
  bounce: 0.35,
  exit: { duration: index * 0.1 },
  filter: { ease: 'easeInOut' },
});

function SearchBar() {
  const inputRef = useRef(null);

  const [state, setState] = useState({
    step: 1,
    searchData: [],
    searchText: '',
    isLoading: false,
  });

  const debouncedSearchText = useDebounce(state.searchText, 500);
  const isUnsupported = useMemo(() => isUnsupportedBrowser(), []);

  const handleButtonClick = () => {
    setState((prevState) => ({ ...prevState, step: 2 }));
  };

  const handleCloseClick = () => {
    setState((prevState) => ({
      ...prevState,
      step: 1,
      searchText: '',
      searchData: [],
      isLoading: false,
    }));
  };

  const handleSearch = (e) => {
    setState((prevState) => ({ ...prevState, searchText: e.target.value }));
  };

  useEffect(() => {
    if (state.step === 2) {
      document.body.classList.add('search-active');
      inputRef.current?.focus();
    } else {
      document.body.classList.remove('search-active');
      setState((prevState) => ({
        ...prevState,
        searchText: '',
        searchData: [],
        isLoading: false,
      }));
    }

    return () => {
      document.body.classList.remove('search-active');
    };
  }, [state.step]);

  useEffect(() => {
    let isCancelled = false;

    if (debouncedSearchText) {
      setState((prevState) => ({ ...prevState, isLoading: true }));

      const fetchData = async () => {
        try {
          await new Promise((resolve) => setTimeout(resolve, 500));

          const filteredData = dummyData.filter((item) =>
            item
              .toLowerCase()
              .includes(debouncedSearchText.trim().toLowerCase())
          );

          if (!isCancelled) {
            setState((prevState) => ({
              ...prevState,
              searchData: filteredData,
              isLoading: false,
            }));
          }
        } catch {
          if (!isCancelled) {
            setState((prevState) => ({ ...prevState, isLoading: false }));
          }
        }
      };

      fetchData();
    } else {
      setState((prevState) => ({
        ...prevState,
        searchData: [],
        isLoading: false,
      }));
    }

    return () => {
      isCancelled = true;
    };
  }, [debouncedSearchText]);

  return (
    <div className={clsx('wrapper', isUnsupported && 'no-goo')}>
      <GooeyFilter />

      <div className='button-content'>
        <motion.div
          className='button-content-inner'
          initial='initial'
          animate={state.step === 1 ? 'step1' : 'step2'}
          transition={{ duration: 0.75, type: 'spring', bounce: 0.15 }}
        >
          <AnimatePresence mode='popLayout'>
            <motion.div
              key='search-text-wrapper'
              className='search-results'
              role='listbox'
              aria-label='Search results'
              variants={searchResultsVariants}
              animate={state.step === 1 ? 'step1' : 'step2'}
              transition={{ duration: 0.75, type: 'spring', bounce: 0.15 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <AnimatePresence mode='popLayout'>
                {state.searchData.map((item, index) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    variants={getResultItemVariants(index, isUnsupported)}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    transition={getResultItemTransition(index, isUnsupported)}
                    className='search-result'
                    role='option'
                  >
                    <div className='search-result-title'>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.12 + 0.3 }}
                      >
                        {item}
                      </motion.span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>

          <motion.div
            variants={buttonVariants}
            onClick={handleButtonClick}
            whileHover={{ scale: state.step === 2 ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='search-btn'
            role='button'
          >
            {state.step === 1 ? (
              <span className='search-text'>Explore</span>
            ) : (
              <input
                ref={inputRef}
                type='text'
                id='search-bar'
                className='search-input'
                placeholder='Explore...'
                aria-label='Search input'
                onChange={handleSearch}
              />
            )}
          </motion.div>

          <AnimatePresence mode='wait'>
            {state.step === 2 && (
              <>
                <motion.div
                  key='search-icon'
                  className='separate-element'
                  initial='hidden'
                  animate='visible'
                  exit='hidden'
                  variants={iconVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: 'spring',
                    stiffness: 250,
                    damping: 10,
                    bounce: 0.15,
                  }}
                >
                  {!state.isLoading ? (
                    <SearchIcon isUnsupported={isUnsupported} />
                  ) : (
                    <LoadingIcon />
                  )}
                </motion.div>

                <motion.div
                  key='close-icon'
                  className='separate-element close-icon'
                  initial='hidden'
                  animate='visible'
                  exit='hidden'
                  variants={closeIconVariants}
                  transition={{
                    type: 'spring',
                    stiffness: 250,
                    damping: 10,
                    bounce: 0.15,
                  }}
                  onClick={handleCloseClick}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  role='button'
                  aria-label='Close search'
                  style={{ cursor: 'pointer' }}
                >
                  <CloseIcon />
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default SearchBar;
