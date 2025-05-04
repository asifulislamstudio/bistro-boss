
import PageCover from "../Home/Shared/PageCover/PageCover";
import SectionTitle from "../Home/Shared/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory";
import DessertBg from "../../assets/menu/dessert-bg.jpeg";
import PizzaBg from "../../assets/menu/pizza-bg.jpg";
import SaladBg from "../../assets/menu/salad-bg.jpg";
import SoupBg from "../../assets/menu/soup-bg.jpg";




const Menu = () => {

    const [menu, loading] = useMenu();
    const desserts = menu.filter(items => items.category === 'dessert')
    const soup = menu.filter(items => items.category === 'soup')
    const salad = menu.filter(items => items.category === 'salad')
    const pizza = menu.filter(items => items.category === 'pizza')
    const offered = menu.filter(items => items.category === 'offered')
    if(loading){
        return <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-sky-900 border-sky-400"></div>
    }

    return (
        <div className="">
         
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