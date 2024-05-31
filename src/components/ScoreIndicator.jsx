import { motion } from 'framer-motion';

const ScoreIndicator = ({ scoreChange }) => {

    return (
        <div className="relative flex justify-center font-bold text-4xl">
            {scoreChange === "up" && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-green-500"
                >
                    ↑
                </motion.div>
            )}
            {scoreChange === "down" && (
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-red-500"
                >
                    ↓
                </motion.div>
            )}
        </div>
    );
};

export default ScoreIndicator;