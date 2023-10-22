import React from "react";
import ImageSection from "../components/ImageSection/ImageSection";
import ProductList from "../components/ProductList/ProductList";
import { usePreloader } from "../hooks/usePreloader";
import Preloader from "../components/Preloader/Preloader";

const Home: React.FC = (): JSX.Element => {
    const [isPreloaderVisible] = usePreloader();

    return ( 
        <>
        {isPreloaderVisible? <Preloader/> :
        <div className="flex flex-col min-h-screen">       
            <ProductList/>
        </div>
        }
        </>
     );
}

export default Home;











