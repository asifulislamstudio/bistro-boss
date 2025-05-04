

import Category from "../../Category/Category";
import AboutBistro from "./AboutBistro";
import Feature from "./Feature/Feature";
import Testimonials from "./Feature/Testimonials/Testimonials";
import PopurlarMenu from "./PopurlarMenu";
import ProductCard from "./ProductCard";
import SectionTitle from "./Shared/SectionTitle";
import Slider from "./Slider";


const Home = () => {
    return (
        <>
           
            <Slider></Slider>
            <SectionTitle
                subheading={'---From 11:00am to 10:00pm---'}
                heading={'ORDER ONLINE'}
            ></SectionTitle>

            <div className="max-w-screen-2xl  my-28 ">
                <Category></Category>
            </div>
            <div className="max-w-screen-2xl  mx-auto my-44 ">
                <AboutBistro></AboutBistro>
            </div>
            <div className="max-w-screen-2xl  mx-auto my-44 ">
                <PopurlarMenu></PopurlarMenu>
            </div>
            <div className="lg:max-w-screen-2xl text-white text-center lg:text-6xl font-semibold bg-black py-24  mx-auto my-44 ">
                <h1>Call Us: 880 1700671150</h1>
            </div>

            <div className="max-w-screen-2xl mx-auto my-44 ">
                <ProductCard></ProductCard>
            </div>
            <div className=" my-44 ">
                <Feature> </Feature>
            </div>
            <div className="max-w-screen-2xl mx-auto my-44 ">
                <Testimonials></Testimonials>
            </div>


        </>
    );
};

export default Home;