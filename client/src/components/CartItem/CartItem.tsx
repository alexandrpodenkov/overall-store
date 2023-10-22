import { ICartItem } from "../../types/types";
import { IoIosCloseCircleOutline } from "react-icons/io"
import { CiCirclePlus } from "react-icons/ci"
import { CiCircleMinus } from "react-icons/ci"
import { useAppDispatch } from '../../app/hooks';
import { decrementItem, incrementItem } from '../../features/cartSlice';
import { useRemoveTimer } from "../../hooks/useRemoveTimer";
import { motion } from "framer-motion";
import styles from "./CartItem.module.css";

const CartItem: React.FC<ICartItem> = ({id, name, size, price, image, quantity}): JSX.Element => {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: () => {
          return {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: {  type: "spring", duration: 9, bounce: 0 },
              opacity: { dealay: 0.5, duration: 0.01 }
            }
          };
        }
      };


    const dispatch = useAppDispatch();

    const handleIncrementItem = (itemId: number) => {
        dispatch(incrementItem(itemId));
      }
  
      const handleDecrementItem = (itemId: number) => {
        dispatch(decrementItem(itemId));
      }

      const [remove, timerCount, removeItemHandler, returnItemHandler] = useRemoveTimer(id);

    return ( 
        <>
        {remove && 
            <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={styles.removetimer_container}>
                    <motion.svg
                    width="100"
                    viewBox="0 0 800 800"
                    initial="hidden"
                    animate="visible"
                    >
                        <motion.circle
                        cx="300"
                        cy="280"
                        r="190"
                        stroke="rgb(248 113 113)"
                        fill="transparent"
                        variants={draw}
                        custom={1}
                        strokeWidth="50"
                        >
                        </motion.circle>
                    </motion.svg>
                    <span
                    className="text-[14px] bottom-[63px] md:text-[20px] left-[11px]
                     font-bold text-red-400 absolute md:left-[18px] 
                    ">{timerCount}</span>
               <p className="uppercase mb-[20px]">Вы удалили "{name}"</p> 
               <span onClick={() => returnItemHandler()} className={styles.return_close_button}>Вернуть</span>    
            </motion.div>
        }
        {!remove &&
        <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }} className={styles.cartitem_container}>
            <div className="w-[70px] flex lg:mr-[70px]">
                <img className={styles.image_title_container} src={image.split(',')[0]}></img>
                <div className="ml-[20px] mt-[17px]">
                    <h3 className={styles.name}>{name}</h3>
                    <span className={styles.size}>Размер: {size}</span>
                </div>
                
            </div>
            <div className="flex gap-8 lg:gap-10">
            <div className="flex flex-row items-center gap-2">
                <span className={styles.increment_deccrement} 
                onClick={() => handleDecrementItem(id)}>
                    <CiCircleMinus/>
                </span>
                    <span className="font-bold">{quantity}</span>
                <span className={styles.increment_deccrement}  
                onClick={() => handleIncrementItem(id)}>
                    <CiCirclePlus/>
                </span>
            </div>
            <span className={styles.price}>{price} ₽.</span>
            <button className={styles.close_button} 
            onClick={() => removeItemHandler()}>
                <IoIosCloseCircleOutline/>
            </button>
            </div>  
        </motion.div>
        }
        </>
     );
}
 
export default CartItem;