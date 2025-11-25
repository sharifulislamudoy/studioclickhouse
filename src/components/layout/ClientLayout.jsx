'use client';

import { useLoading } from './LoadingProvider';
import { motion } from "framer-motion"
import LoadingSpinner from '../ui/LoadingSpinner';
import Navbar from '../Navbar/Navbar';
import { AnimatePresence } from 'framer-motion';

const ClientLayout = ({ children }) => {
    const { isLoading } = useLoading();

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && <LoadingSpinner />}
            </AnimatePresence>

            {!isLoading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Navbar />
                    <main>
                        {children}
                    </main>
                </motion.div>
            )}
        </>
    );
};

export default ClientLayout;