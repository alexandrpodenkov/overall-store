import { useParams } from "react-router-dom";
import Product from "../components/Product/Product";

const ProductPage: React.FC = (): JSX.Element => {
    const { id } = useParams<{ id: string }>();

    return (
        <div>
            <Product id={id}/>
        </div>    
    
    );
}

export default ProductPage;