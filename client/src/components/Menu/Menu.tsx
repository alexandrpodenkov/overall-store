import { Link, NavLink } from "react-router-dom";
import { GrClose } from 'react-icons/gr';
import { SlSocialVkontakte } from 'react-icons/sl';
import { BsInstagram } from 'react-icons/bs';
import { LiaTelegramPlane } from 'react-icons/lia';
import styles from './Menu.module.css';
import { motion } from 'framer-motion';

type Props = {
    setMenuIsVisible: (value: boolean) => void;
}

const Menu: React.FC<Props> = ({ setMenuIsVisible }): JSX.Element => {
    // const setActive  = (isActive) => isActive? styles.activeLink : styles.linkItem;

    return ( 
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 1.7}}
        className={styles.container}>
            <nav className={styles.navContainer}>
                <Link to='/' className={styles.title}><h2>Overall</h2></Link>
                <motion.ul
                className={styles.linkContainer}>
                    <NavLink to='/' className={styles.linkItem}><li>Главная</li></NavLink>
                    <NavLink to='' className={styles.linkItem}><li>Доставка</li></NavLink>
                    <NavLink to='' className={styles.linkItem}><li>Возврат и обмен</li></NavLink>
                    <NavLink to='' className={styles.linkItem}><li>Уход за одеждой</li></NavLink>
                    <NavLink to='' className={styles.linkItem}><li>О нас</li></NavLink>
                    <NavLink to='' className={styles.linkItem}><li>Контакты</li></NavLink>
                    <NavLink to='' className={styles.linkItem}><li>Пошив на заказ</li></NavLink>
                </motion.ul>
            </nav>
            <div className={styles.socContainer}>
                <a className="text-[20px]" href='/' target="_blank"><SlSocialVkontakte/></a>
                <a className="text-[20px]" href='/' target="_blank"><BsInstagram/></a>
                <a className="text-[20px]" href='/' target="_blank"><LiaTelegramPlane/></a>
            </div>
            <button className='absolute top-0 right-0 my-4 mr-6 text-[28px]' onClick={() => setMenuIsVisible(false)}><GrClose/></button>
        </motion.div>
     );
}
 
export default Menu;