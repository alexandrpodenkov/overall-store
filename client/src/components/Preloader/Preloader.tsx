import styles from "./Preloader.module.css";
import { motion } from "framer-motion";

const Preloader = () => {
  const textVariants = {
    initial: {
      opacity: 0.3,
      clipPath: "inset(0% 0% 100% 0%)",
      transition: {
        duration: 4,
        ease: "linear"
      }
    },
    animate: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        duration: 2,
        ease: "linear"
      }
    }
  };

 
  return (
    <motion.div
      
      className="fixed inset-0 flex items-center justify-center h-screen bg-white z-50">
      <motion.div
      initial='initial'
      animate='animate'

      variants={textVariants}
      className={styles.logo}>overall</motion.div>
    </motion.div>
  );
}

export default Preloader;