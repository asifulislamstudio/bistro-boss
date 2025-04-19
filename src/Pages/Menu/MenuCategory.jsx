import { Link } from "react-router-dom";
import MenuItems from "../Home/Shared/MenuItems/MenuItems";
import MenuSharedSection from "./MenuSharedSection/MenuSharedSection";


const MenuCategory = ({items, menuBgImg, menuHeading, menuSubHeading}) => {
    return (
        <div>
            {
                menuHeading && <MenuSharedSection heading={menuHeading} bgImg={menuBgImg} subHeading={menuSubHeading}></MenuSharedSection>
            }
            <div>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    items.map(item => <MenuItems key={item._id} item={item}></MenuItems> )
                }
            </div>
            <div className="flex justify-center items-center my-8">
            <Link to={`/shop/${menuHeading}`}><button className="border-b-2 rounded-2xl px-4 py-2 bg-amber-400 hover:animate-bounce text-black hover : duration-300  mt-4">Order Now</button></Link>
            </div>
        </div>
        </div>
    );
};

export default MenuCategory;


