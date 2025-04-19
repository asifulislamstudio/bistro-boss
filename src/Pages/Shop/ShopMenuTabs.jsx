import ShopProduct from "./shopProduct";


const ShopMenuTabs = ({items}) => {
    return (
        <div className="grid grid-cols-3 gap-4 my-12">
                       {
                            items.map(item => <ShopProduct key={item._id} item={item}></ShopProduct> )
                        }
                       </div>
    );
};

export default ShopMenuTabs;