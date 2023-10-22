import React, { useState, useEffect } from 'react';
import { GrClose } from 'react-icons/gr'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { cartVisibiled } from '../../features/cartSlice';
import CartItem from '../CartItem/CartItem';

const Cart: React.FC = (): JSX.Element => {  
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(state => state.cart.items);
    const count = useAppSelector(state => state.cart.count);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
      let totalPrice = 0;
      cartItems.forEach((item: { price: any; quantity: any; }) => {
        const { price, quantity } = item;
        totalPrice += price * quantity; 
      });
      setTotalPrice(totalPrice);
    }, [cartItems]);

    useEffect(() => {
      count === 0 && closeCart();
    }, [count])

    const closeCart = () => {
      dispatch(cartVisibiled(false));
    }

    return (
        <div 
        className="h-screen w-full lg:w-[560px] z-50 bg-white fixed inset-y-0 right-0 px-12 py-12 overflow-auto">
          <h3 className='text-2xl uppercase text font-bold'>Ваш заказ</h3>
          <div className='my-4 border-t-2 border-b-2'>
          {cartItems.map((item: { id: number; name: string; size: string; price: number; quantity: number; image: string; }) => (
            <div key={item.id}>
              <CartItem 
              id={item.id}
              name={item.name}
              size={item.size}
              price={item.price}
              quantity={item.quantity}
              image={item.image}
              />
            </div>
            
          ))}
          </div>   
          <p className='flex justify-end text-[16px] font-bold tracking-tight'>Сумма: {totalPrice} ₽.</p> 
         <button className='bg-black text-white font-bold w-full h-[60px] 
         uppercase mt-12 hover:bg-white hover:text-black hover:border-black hover:border-solid hover:border-2 transition-all'>Заказать</button>
        <button className='absolute top-0 right-0 my-4 mr-6 text-[28px]' onClick={closeCart}><GrClose/></button>
        </div>
      );
}
 
export default Cart;
