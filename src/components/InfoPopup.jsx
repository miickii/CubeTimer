import { motion } from 'framer-motion';

const InfoPopup = ({ text }) => {
    return (
        <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            exit={{ scale: 0 }} 
            className="absolute bottom-10 right-0 bg-white border border-black shadow-lg p-2 rounded z-10"
        >
            {text}
        </motion.div>
    );
};

export default InfoPopup;