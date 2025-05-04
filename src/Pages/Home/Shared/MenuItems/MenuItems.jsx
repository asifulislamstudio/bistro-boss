
const MenuItems = ({item}) => {

    const {name, image, price, recipe} = item;
    return (
        <div>
         <div className="flex gap-x-2">
         <img style={{borderRadius : '0px 200px 200px 200px'}} className="md:w-[100px] md:h-[100px] w-[50px] h-[50px]" src={image} alt="" />
          <div>
          <p className=" text-[15px] md:text-2xl font-semibold">{name} ---------------------  </p>
          <p className="">{recipe}</p>
          </div>
          <p className="text-amber-400 font-semibold">{price}৳</p>
         </div>
         
        </div>
       
    );
};

export default MenuItems;