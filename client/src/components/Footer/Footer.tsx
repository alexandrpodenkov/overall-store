import { Link } from "react-router-dom";
import { SlSocialVkontakte } from 'react-icons/sl'
import { BsInstagram } from 'react-icons/bs'
import { LiaTelegramPlane } from 'react-icons/lia'

const Footer = () => {
    return ( 
        <footer className="flex flex-row flex-nowrap gap-[70px] md:gap-[200px] py-10 px-10 flex-shrink-0">
            <div>
              <ul className="flex flex-col justify-between gap-2">
                <Link to='/' className="text-[12px] font-normal text-gray-500 hover:text-gray-400"><li>Доставка</li></Link>
                <Link to='/' className="text-[12px] font-normal text-gray-500 hover:text-gray-400"><li>Возврат и обмен</li></Link>
                <Link to='/' className="text-[12px] font-normal text-gray-500 hover:text-gray-400"><li>Уход за одеждой</li></Link>
              </ul> 
            </div>
            <div>
              <ul className="flex flex-col justify-between gap-2">
                <Link to='/' className="text-[12px] font-normal text-gray-500 hover:text-gray-400"><li>О нас</li></Link>
                <Link to='/' className="text-[12px] font-normal text-gray-500 hover:text-gray-400"><li>Контакты</li></Link>
              </ul> 
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row justify-center items-center">
                  <SlSocialVkontakte/>
                   <a className="ml-2 text-[12px] font-normal text-gray-500 hover:text-gray-400" href='/'> В контакте</a>
                </div>
                <div className="mt-2 flex flex-row justify-center items-center">
                  <BsInstagram/>
                  <a className="ml-2 text-[12px] font-normal text-gray-500 hover:text-gray-400" href='/'>Instagram</a>
                </div>
                <div className="mt-2 flex flex-row justify-center items-center">
                  <LiaTelegramPlane/>
                    <a className="ml-2 text-[12px] font-normal text-gray-500 hover:text-gray-400" href='/'>Telegram</a>
                </div>         
            </div>
        </footer>
     );
}
 
export default Footer;
