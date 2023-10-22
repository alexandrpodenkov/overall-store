import { useState } from 'react';
import AddProductInput from '../components/AddProductInput/AddProductInput';

const AdminPage: React.FC = (): JSX.Element => {
    const [isAddProduct, setAddProduct] = useState<boolean>(false);

    const handleAddProduct = () => {
        setAddProduct(!isAddProduct);
    }

    return ( 
        <div>
            <main className='flex flex-col my-[80px] mx-[40px] flex-grow'>
                <button className='w-[200px] h-[50px] rounded-md text-white font-semibold bg-blue-500' 
                onClick={() => handleAddProduct()}>Добавить новый товар</button>
                {isAddProduct && <AddProductInput/>}           
            </main>
             
        </div>
     );
}
 
export default AdminPage;