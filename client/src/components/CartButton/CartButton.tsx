import { BsFillBagFill } from "react-icons/bs"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { cartVisibiled } from "../../features/cartSlice";
import { motion } from 'framer-motion';

const CartButton: React.FC = (): JSX.Element => {
    const count = useAppSelector((state) => state.cart.count);
    const dispatch = useAppDispatch();

    return ( 
        <div>
            <button disabled={count === 0} onClick={() => dispatch(cartVisibiled(true))}>
                <BsFillBagFill className="ml-4 cursor-pointer"/>    
            </button>
            {count !== 0 && <motion.span 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="text-xs scale-100 transition-all">{count}</motion.span>}  
        </div>
     );
}
 
export default CartButton;