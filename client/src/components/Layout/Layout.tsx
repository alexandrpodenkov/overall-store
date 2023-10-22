import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import { cartVisibiled } from "../../features/cartSlice";
import Cart from "../Cart/Cart";
import Menu from "../Menu/Menu";
import { motion } from 'framer-motion';
import { CartWrapper, MenuWrapper } from "../CartandMenuWrapper/CartandMenuWrapper";



const Layout: React.FC = (): JSX.Element => {
    const cartIsVisible = useAppSelector((state) => state.cart.isVisible);
    const dispatch = useAppDispatch();
    const [menuIsVisible, setMenuIsVisible] = React.useState<boolean>(false);

    const closeOverlay = () => {
        dispatch(cartVisibiled(false));
        setMenuIsVisible(false); 
    }

    useEffect(() => {
        if (cartIsVisible || menuIsVisible) {
          document.body.style.overflow = 'hidden';
          document.body.style.paddingRight = '17px';
          
          return () => {
            document.body.style.overflow = 'initial';
            document.body.style.paddingRight = '0px';
          };
        }
      }, [cartIsVisible, menuIsVisible]);

    return ( 
        <div className="flex flex-col min-h-screen">

            {(cartIsVisible || menuIsVisible) 
            && <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="z-40 inset-0 bg-black/50 fixed" onClick={closeOverlay}></motion.div>}
              <MenuWrapper menuIsVisible={menuIsVisible}>
              {menuIsVisible && <Menu setMenuIsVisible={setMenuIsVisible}/>}
              </MenuWrapper>

              <CartWrapper cartIsVisible={cartIsVisible}>
              {cartIsVisible && <Cart/>}
              </CartWrapper>
            <Navbar
            menuIsVisible={menuIsVisible} 
            setMenuIsVisible={setMenuIsVisible}/>
            <div className="flex-grow">
              <Outlet/>
            </div>
  
            <Footer/>
        </div>
     );
}
 
export default Layout;