import React from 'react';
import { motion } from 'framer-motion';

const QuoteFrame = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center text-xl md:text-xl font-semibold italic text-rose-700 leading-relaxed px-6 md:px-12 my-8 md:my-12 pb-8"
        >
            "Hay corazones que se forman dentro de otros, y cuando nacen, no lo hacen solos: traen consigo un amor que no conoce final. Bienvenido, Eduardo Valentín ❤️!"
            <img
                src="/assets/baby/family.png"
                alt="Leoncito decorativo"
                className="w-64 md:w-56 mx-auto mt-4 opacity-90"
                style={{ backdropFilter: 'blur(2px)' }}
            />
        </motion.div>
    );
};

export default QuoteFrame;