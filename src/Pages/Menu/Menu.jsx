import { Helmet } from "react-helmet-async";
import PageCover from "../Home/Shared/PageCover/PageCover";
import SectionTitle from "../Home/Shared/SectionTitle";
import ProductCard from "../Home/ProductCard";
import MenuItems from "../Home/Shared/MenuItems/MenuItems";
import PopurlarMenu from "../Home/PopurlarMenu";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory";
import DessertBg from "../../assets/menu/dessert-bg.jpeg";
import PizzaBg from "../../assets/menu/pizza-bg.jpg";
import SaladBg from "../../assets/menu/salad-bg.jpg";
import SoupBg from "../../assets/menu/soup-bg.jpg";



const Menu = () => {

    const [menu] = useMenu();
    const desserts = menu.filter(items => items.category === 'dessert')
    const soup = menu.filter(items => items.category === 'soup')
    const salad = menu.filter(items => items.category === 'salad')
    const pizza = menu.filter(items => items.category === 'pizza')
    const offered = menu.filter(items => items.category === 'offered')

    return (
        <div className="">
            <Helmet>
                <title>Menu | Bistro Boss </title>
            </Helmet>
            <PageCover
                heading={'OUR MENU'}
                subHeading={'Would You Like TO Try A DISH?'}
            ></PageCover>
            <div className="max-w-screen-2xl mx-auto">
                <SectionTitle
                    subheading={'--Dont Miss--'}
                    heading={'Todays Offer'}
                ></SectionTitle>
                {/* offered Menu Items */}
                <MenuCategory
                    items={offered}
                ></MenuCategory>
                {/* Desserts Menu Items */}
                <div className="my-24">
                    <MenuCategory
                        items={desserts}
                        menuHeading={'dessert'}
                        menuSubHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                        menuBgImg={DessertBg}
                    ></MenuCategory>
                </div>
                {/* Pizza MEnu Items */}
                <div className="my-24">
                    <MenuCategory
                        items={pizza}
                        menuHeading={'pizza'}
                        menuSubHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                        menuBgImg={PizzaBg}
                    ></MenuCategory>
                </div>
                {/* Soup MEnu Items */}
                <div className="my-24">
                    <MenuCategory
                        items={soup}
                        menuHeading={'soup'}
                        menuSubHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                        menuBgImg={SoupBg}
                    ></MenuCategory>
                </div>
                {/* Soup MEnu Items */}
                <div className="my-24">
                    <MenuCategory
                        items={salad}
                        menuHeading={'salad'}
                        menuSubHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                        menuBgImg={SaladBg}
                    ></MenuCategory>
                </div>
            </div>
        </div>
    );
};

export default Menu;