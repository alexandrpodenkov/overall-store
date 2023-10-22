import { motion, AnimatePresence } from 'framer-motion';

interface ICartProps {
  children: React.ReactNode;
  cartIsVisible: boolean;
}

interface IMenuProps {
  children: React.ReactNode;
  menuIsVisible: boolean;
}

export const CartWrapper: React.FC<ICartProps> = ({ children, cartIsVisible }): JSX.Element => {
  const isSmallScreen = window.innerWidth <= 768;

  return (
    <AnimatePresence>
      {isSmallScreen && cartIsVisible ? (
        <motion.div
          key="cart"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="z-50 fixed top-0 right-0 h-screen bg-white"
        >
          {children}
        </motion.div>
      ) : (
        cartIsVisible && (
          <motion.div
            key="cart"
            initial={{ x: 560 }}
            animate={{ x: 0 }}
            exit={{ x: 560 }}
            transition={{ duration: 0.5 }}
            className="z-50 fixed top-0 right-0 h-screen bg-white"
          >
            {children}
          </motion.div>
        )
      )}
    </AnimatePresence>
  );
};

export const MenuWrapper: React.FC<IMenuProps> = ({ children, menuIsVisible }): JSX.Element => {
  const isSmallScreen = window.innerWidth <= 768;

  return (
    <AnimatePresence>
      {isSmallScreen && menuIsVisible ? (
        <motion.div
          key="menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="z-50 fixed top-0 left-0 h-screen bg-white"
        >
          {children}
        </motion.div>
      ) : (
        menuIsVisible && (
          <motion.div
            key="menu"
            initial={{ x: -485 }}
            animate={{ x: 0 }}
            exit={{ x: -485 }}
            transition={{ duration: 0.4 }}
            className="z-50 fixed top-0 left-0 h-screen bg-white"
          >
            {children}
          </motion.div>
        )
      )}
    </AnimatePresence>
  );
};