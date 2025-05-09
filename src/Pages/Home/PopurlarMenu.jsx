import { useEffect, useState } from "react";
import SectionTitle from "./Shared/SectionTitle";
import MenuItems from "./Shared/MenuItems/MenuItems";
import { Link } from "react-router-dom";
import useMenu from "../../hooks/useMenu";


const PopurlarMenu = () => {

 

    const [menu] = useMenu();

    const popularMenu = menu.filter(items => items.category === 'popular')

    return (
        <div>
         <SectionTitle
         subheading={'---Check it out---'}
         heading={'FROM OUR MENU'}
         ></SectionTitle>

            <div className="grid md:grid-cols-2 mx-4 md:mx-0 gap-4">
                {
                    popularMenu.map(item => <MenuItems key={item._id} item={item}></MenuItems> )
                }
            </div>
          <div className="flex justify-center">
          <button className="btn mt-12 "><Link to='/menu'>View Full Menu</Link></button>
          </div>
        </div>
    );
};

export default PopurlarMenu;