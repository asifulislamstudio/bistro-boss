import SectionTitle from "../Shared/SectionTitle";
import fImag from '../../../assets/home/featured.jpg'

const Feature = () => {
    return (
     
            <div
                className=""
                style={
                    { backgroundImage: `url(${fImag})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: "fixed"  }
                }>
                <div className="bg-neutral-950/60 py-24">
                <div className="text-white text-shadow-2xs">
                    <SectionTitle
                        subheading={'---Check it out---'}
                        heading={'FROM OUR MENU'}
                    ></SectionTitle>
                </div>
                <div className="flex flex-col lg:flex-row w-2/3 mx-auto gap-x-8">
                    <img className="w-[400px] shadow-2xl" src={fImag} alt="" />
                    <div className="text-white">
                        <h4 className="font-semibold text-xl">March 20, 2025</h4>
                        <h3 className="font-semibold text-xl">WHERE CAN I GET SOME?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero temporibus, esse harum ab consequatur natus laboriosam, quod maxime odio quia nihil voluptates necessitatibus animi consequuntur ducimus nostrum hic quas numquam rem. Aut suscipit et nobis voluptatibus.</p>
                        <button className="border-b-2 rounded-2xl px-4 py-2 hover:bg-amber-400 hover:text-black hover : duration-300  mt-4">Read More</button>
                    </div>
                </div>
                </div>
            </div>
        
    );
};

export default Feature;