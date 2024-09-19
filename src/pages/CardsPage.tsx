"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './CardsPage.module.css';
import Image from 'next/image';

interface Card {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

const cards: Card[] = [
    { id: 1, title: 'Card 1', description: 'Description for Card 1', imageUrl: '/images/card1.jpg' },
    { id: 2, title: 'Card 2', description: 'Description for Card 2', imageUrl: '/images/card2.jpg' },
    { id: 3, title: 'Card 3', description: 'Description for Card 3', imageUrl: '/images/card3.jpg' },
    // Add more cards as needed
];

export const CardsPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Cards Page</h1>
            <motion.div className={styles.cardGrid}>
                {cards.map((card) => (
                    <motion.div
                        key={card.id}
                        className={styles.card}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image src={card.imageUrl} alt={card.title} className={styles.cardImage} />
                        <h2 className={styles.cardTitle}>{card.title}</h2>
                        <p className={styles.cardDescription}>{card.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default CardsPage;