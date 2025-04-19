import React from 'react';

const MenuSharedSection = ({heading, subHeading, bgImg}) => {
    return (
        <div className="h-[550px] mb-16 flex justify-center items-center " style={{ backgroundImage: `url('${bgImg}')` }}>
            <div className="bg-gray-950/60 py-14 px-28 w-2/3 text-white">
                <h1 className="text-8xl text-center font-semibold uppercase">{heading}</h1>
                <p className="text-center uppercase">{subHeading}</p>
            </div>
        </div>
    );
};

export default MenuSharedSection;