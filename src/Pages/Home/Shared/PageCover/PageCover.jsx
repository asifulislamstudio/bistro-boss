import pcimg from "../../../../assets/menu/banner3.jpg"
const PageCover = ({heading, subHeading}) => {
    return (
        <div className="h-[550px] mb-16 flex justify-center items-center" style={{backgroundImage:  `url('${pcimg}')`}}>
            <div className="bg-gray-950/60 py-28 px-56 text-white">
                <h1 className="text-8xl font-semibold">{heading}</h1>
                <p className="text-center uppercase">{subHeading}</p>
            </div>
        </div>
    );
};

export default PageCover;