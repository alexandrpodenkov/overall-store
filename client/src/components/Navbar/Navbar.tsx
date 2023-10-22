import { GrMenu } from "react-icons/gr";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import CartButton from "../CartButton/CartButton";
import { useAppSelector } from "../../app/hooks";

type Props = {
    setMenuIsVisible: (value: boolean) => void;
    menuIsVisible: boolean;
}

const Navbar: React.FC<Props> = ({ setMenuIsVisible, menuIsVisible }): JSX.Element => {
    const cartIsVisible = useAppSelector(state => state.cart.isVisible);

    return ( 
        <IconContext.Provider value={{size: '25px'}}>
            <header className={style.header}>
                <div className="flex gap-6">
                    <button onClick={() => setMenuIsVisible(true)}><GrMenu className="cursor-pointer"/></button>
                    <CartButton/> 
                </div>
                <div className={`flex items-center ${menuIsVisible ? 'pr-[17px]' : ''}`}>
                    <Link to={'/'} className={cartIsVisible? style.logo_cartisopen : style.logo}>Overall</Link>
                </div>
            </header>
        </IconContext.Provider>
     );
}
 
export default Navbar;