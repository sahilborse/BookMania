"use client"; // Ensure this component is client-side

import React from 'react';
import styles from '../page.module.css';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <main className={styles.main}>
      <div>
        <Header />

        <div className={styles.containerStyle}>
          <section className={styles.content}>
            <SideBar />
          </section>

          <div className={styles.grouper}>
            <motion.h1 
              className={styles.title}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', duration: 0.8 }}
            >
              About
            </motion.h1>

            <ul className={styles.ulGroupStyle}>
              <motion.li
                transition={{ type: 'spring', damping: 50, mass: 0.75 }}
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <p>
                  Welcome to Book Mania, your personal gateway to a world of reading! 
                  Our mission is to make books accessible and enjoyable for everyone, 
                  wherever you are. With a wide variety of genres and features tailored 
                  to enhance your reading experience, we bring the library right to your fingertips. 
                  Whether you&apos;re a casual reader or a bookworm, you&apos;ll find something to love.
                </p>

                <p>
                  Our app offers personalized recommendations, seamless bookmarking, 
                  progress tracking, and a distraction-free reading environment. 
                  Join our growing community of readers and discover new books, 
                  explore timeless classics, or dive into trending releases. 
                  We&apos;re committed to making reading an enjoyable, immersive experience.
                </p>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
