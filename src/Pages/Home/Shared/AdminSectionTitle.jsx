const AdminSectionTitle = ({subHeading, heading}) => {
    return (

        <div className="text-center my-4 mx-auto lg:w-[600px]">
            <p className="text-xl my-2 text-amber-400">{subHeading}</p>
            <h2 className=" text-2xl lg:text-6xl border-y-4 border-gray-600/50 py-2">{heading}</h2>
        </div>

    );
};

export default AdminSectionTitle;