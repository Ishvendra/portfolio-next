'use client';

import { useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const springY = useSpring(0, { damping: 20, stiffness: 300, mass: 0.8 });
  const springScale = useSpring(1, { damping: 15, stiffness: 500, mass: 0.3 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send message');

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFocus = (field) => {
    setFocusedField(field);
    springScale.set(1.01);
    springY.set(-2);
  };

  const handleBlur = () => {
    setFocusedField(null);
    springScale.set(1);
    springY.set(0);
  };

  const ultraSmoothSpring = {
    type: 'spring',
    damping: 30,
    stiffness: 400,
    mass: 0.6,
  };

  const bounceSpring = {
    type: 'spring',
    damping: 12,
    stiffness: 600,
    mass: 0.4,
  };

  const gentleSpring = {
    type: 'spring',
    damping: 35,
    stiffness: 300,
    mass: 0.8,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
        ...gentleSpring,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: ultraSmoothSpring,
    },
  };

  const buttonVariants = {
    idle: {
      scale: 1,
      rotateZ: 0,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    },
    hover: {
      scale: 1.03,
      rotateZ: 0.5,
      boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
      transition: bounceSpring,
    },
    tap: {
      scale: 0.97,
      rotateZ: -0.5,
      transition: {
        type: 'spring',
        damping: 8,
        stiffness: 800,
        mass: 0.2,
      },
    },
  };

  const inputVariants = {
    idle: {
      scale: 1,
      rotateX: 0,
      boxShadow: '0 1px 3px rgba(0,0,0,0.5)',
    },
    focus: {
      scale: 1.005,
      rotateX: -1,
      boxShadow: '0 4px 20px rgba(0,0,0,0.8)',
      transition: ultraSmoothSpring,
    },
  };

  const successVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      rotateZ: -180,
      filter: 'blur(10px)',
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateZ: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 300,
        mass: 0.6,
      },
    },
  };

  const checkmarkVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          type: 'spring',
          duration: 1.2,
          damping: 20,
          stiffness: 400,
        },
        opacity: { duration: 0.3 },
      },
    },
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 2rem',
      }}
    >
      {!isSubmitted ? (
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.div
            variants={itemVariants}
            style={{
              textAlign: 'center',
              marginBottom: '3rem',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '300',
                color: '#1a1a1a',
                marginBottom: '0.5rem',
                letterSpacing: '-0.03em',
              }}
            >
              Get in touch?
            </h2>
          </motion.div>

          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2rem',
              }}
            >
              <motion.div variants={itemVariants}>
                <motion.input
                  type='text'
                  name='name'
                  placeholder='Name'
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  required
                  variants={inputVariants}
                  initial='idle'
                  animate={focusedField === 'name' ? 'focus' : 'idle'}
                  style={{
                    width: '100%',
                    padding: '1.2rem 1.5rem',
                    background: 'transparent',
                    border: `1px solid ${
                      focusedField === 'name' ? '#000' : '#e0e0e0'
                    }`,
                    borderRadius: '8px',
                    color: '#333',
                    fontSize: '1rem',
                    outline: 'none',
                    transition:
                      'border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                  }}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.input
                  type='email'
                  name='email'
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  required
                  variants={inputVariants}
                  initial='idle'
                  animate={focusedField === 'email' ? 'focus' : 'idle'}
                  style={{
                    width: '100%',
                    padding: '1.2rem 1.5rem',
                    background: 'transparent',
                    border: `1px solid ${
                      focusedField === 'email' ? '#000' : '#e0e0e0'
                    }`,
                    borderRadius: '8px',
                    color: '#333',
                    fontSize: '1rem',
                    outline: 'none',
                    transition:
                      'border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                  }}
                />
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              style={{ marginBottom: '2rem' }}
            >
              <motion.textarea
                name='message'
                placeholder='Message'
                rows='4'
                value={formData.message}
                onChange={handleInputChange}
                onFocus={() => handleFocus('message')}
                onBlur={handleBlur}
                required
                variants={inputVariants}
                initial='idle'
                animate={focusedField === 'message' ? 'focus' : 'idle'}
                style={{
                  width: '100%',
                  padding: '1.2rem 1.5rem',
                  background: 'transparent',
                  border: `1px solid ${
                    focusedField === 'message' ? '#000' : '#e0e0e0'
                  }`,
                  borderRadius: '8px',
                  color: '#222',
                  fontSize: '1rem',
                  outline: 'none',
                  resize: 'vertical',
                  minHeight: '120px',
                  fontFamily: 'inherit',
                  lineHeight: '1.5',
                  transition: 'border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxSizing: 'border-box',
                }}
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <motion.button
                type='submit'
                disabled={isSubmitting}
                variants={buttonVariants}
                initial='idle'
                whileHover={!isSubmitting ? 'hover' : 'idle'}
                whileTap={!isSubmitting ? 'tap' : 'idle'}
                style={{
                  padding: '1rem 3rem',
                  background: isSubmitting ? '#999' : '#000',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  outline: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  minWidth: '140px',
                  fontFamily: 'inherit',
                }}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    style={{
                      display: 'inline-block',
                      width: '18px',
                      height: '18px',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderTop: '2px solid white',
                      borderRadius: '50%',
                    }}
                  />
                ) : (
                  'Send'
                )}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      ) : (
        <motion.div
          variants={successVariants}
          initial='hidden'
          animate='visible'
          style={{
            textAlign: 'center',
            padding: '4rem 0',
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotateY: [0, 5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              width: '80px',
              height: '80px',
              background: '#000',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem',
              position: 'relative',
            }}
          >
            <motion.svg
              width='40'
              height='40'
              viewBox='0 0 24 24'
              fill='none'
              style={{ color: 'white' }}
            >
              <motion.path
                d='M20 6L9 17l-5-5'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                variants={checkmarkVariants}
                initial='hidden'
                animate='visible'
              />
            </motion.svg>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, ...ultraSmoothSpring }}
            style={{
              fontSize: '1.5rem',
              fontWeight: '400',
              color: '#1a1a1a',
              marginBottom: '0.5rem',
            }}
          >
            Message sent
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, ...ultraSmoothSpring }}
            style={{
              color: '#666',
              fontSize: '1rem',
            }}
          >
            I will get back to you soon
          </motion.p>
        </motion.div>
      )}
    </div>
  );
}
