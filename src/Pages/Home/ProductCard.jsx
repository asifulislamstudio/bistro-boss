
import SectionTitle from "./Shared/SectionTitle";
import Products from "./Products";
import useProduct from "../../hooks/useProduct";


const ProductCard = () => {

    const [products, loading] = useProduct();

    if(loading){
        return <div>Loading..</div>
    }
     
    return (
        <div>
            <SectionTitle
            subheading={'---Should Try---'}
            heading={'CHEF RECOMMENDS'}
            ></SectionTitle>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-[90%] md:w-[70%] mx-auto">
                {
                    products.map(product => <Products key={product.id} product={product}></Products>)
                }
            </div>
        </div>
    );
};

export default ProductCard;