import { useGetOneProductQuery } from "../../app/api/productApi";
import Preloader from "../Preloader/Preloader";
import { motion } from 'framer-motion';
import { usePreloader } from "../../hooks/usePreloader";
import { useSelectSize } from "../../hooks/useSelectSize";

interface IProps {
    id: string | undefined;
}

const Product: React.FC<IProps> = ({ id }): JSX.Element => {
    const { data, error } = useGetOneProductQuery(id || '');

    const [isPreloaderVisible] = usePreloader();

    const { isSizeActive, selectedSize, selectedSizeIndex,
         handleAddToCart, handleBlockedMouseOut, handleBlockedMouseOver, handleSelectSize} = useSelectSize();

    return ( 
        <div className="mt-[56px]">
            {error && <div className="font-bold text-[40px]">Error</div>}
            {isPreloaderVisible && <Preloader/>}
            {data && !isPreloaderVisible &&
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1}}
                className="flex flex-col md:flex-row flex-wrap">
                    <div className="md:w-[780px]">
                    <div className="max-w-full">
                        {data.image.split(',').map((image, index) => (
                            <img key={index} src={image} className="max-w-full h-auto" />
                        ))}
                    </div>
                    </div>
                    
                    <div className="flex md:fixed flex-col md:ml-[850px] md:my-[90px] mx-[20px] my-[20px]">
                        <div>
                            <h3 className="text-[28px] uppercase font-bold">{data.name}</h3>
                            <span className="text-[25px] font-medium text-gray-500">{data.price}₽</span>
                        </div>
                        <div className="flex gap-[6px] mt-[20px]">
                            {data.size.split(',').map((size, index) => (
                                <button key={index} onClick={(e) => handleSelectSize(index, e)} 
                                className={`w-[50px] h-[40px] rounded-sm 
                                bg-gray-400 ${selectedSizeIndex === index && "bg-gray-500 font-bold"}
                                 hover:bg-gray-500
                                transition-all text-[21px] font-medium`}>{size}</button>
                            ))}
                        </div>
                        <div>
                            <button onClick={() => handleAddToCart({...data, size: selectedSize})} 
                            disabled={!isSizeActive} 
                            onMouseLeave={(e) => handleBlockedMouseOut(e)}
                            onMouseOver={(e) => handleBlockedMouseOver(e)}
                            className={`text-white w-[360px] h-[44px] p
                            bg-black mt-[20px] text-[25px] uppercase font-bold active:bg-black active:text-white
                             hover:bg-white hover:border-solid border-2 border-black hover:text-black 
                             transition-all rounded-[5px]`}>в корзину</button>
                        </div> 
                        <div className="mt-[20px]">
                            <span className="text-[12px] text-gray-500">Артикул: {data.article}</span>
                        </div>
                    </div>
                    
                </motion.div>
                
            }
        </div>
     );
}
 
export default Product;