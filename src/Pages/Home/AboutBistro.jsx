import banner1 from '../../assets/home/banner.jpg';

const AboutBistro = () => {
    return (
        <div
            style={{ backgroundImage: `url(${banner1})` }}
            className="bg-cover bg-center md:p-28 p-12 flex items-center justify-center"
        >
            <div className='bg-white  rounded-4xl '>
                <p className='md:m-36 m-8 text-[12px] md:text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ut nesciunt error adipisci perspiciatis aliquid, corrupti blanditiis mollitia saepe debitis. Perferendis repellendus, rerum facere impedit molestiae omnis adipisci ipsa aliquam!</p>
            </div>
        </div>
    );
};

export default AboutBistro;