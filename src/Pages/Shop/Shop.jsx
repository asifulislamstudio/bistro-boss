import { useState } from "react";
import PageCover from "../Home/Shared/PageCover/PageCover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopProduct from "./shopProduct";
import useMenu from "../../hooks/useMenu";
import ShopMenuTabs from "./ShopMenuTabs";
import { useParams } from "react-router-dom";

const Shop = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams();
    console.log(category);
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu();
    
    const desserts = menu.filter(items => items.category === 'dessert')
    const soup = menu.filter(items => items.category === 'soup')
    const salad = menu.filter(items => items.category === 'salad')
    const pizza = menu.filter(items => items.category === 'pizza')
    const drinks = menu.filter(items => items.category === 'drinks')
    return (
        <div>
            <PageCover
                heading={'OUR SHOP'}
                subHeading={'Would You Like TO Try A DISH?'}
            ></PageCover>
            <div className="flex justify-center items-center" >
                <Tabs  defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>

                    <TabPanel>
                       <ShopMenuTabs items={salad}></ShopMenuTabs>
                    </TabPanel>
                    <TabPanel>
                    <ShopMenuTabs items={pizza}></ShopMenuTabs>
                    </TabPanel>
                    <TabPanel>
                    <ShopMenuTabs items={soup}></ShopMenuTabs>
                    </TabPanel>
                    <TabPanel>
                    <ShopMenuTabs items={desserts}></ShopMenuTabs>
                    </TabPanel>
                    <TabPanel>
                    <ShopMenuTabs items={drinks}></ShopMenuTabs>
                    </TabPanel>
                </Tabs>
            </div>
        </div>

    );
};

export default Shop;