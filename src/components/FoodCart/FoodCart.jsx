const FoodCart = ({ item }) => {
  const { name, recipe, image, price } = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl h-[540px]">
      <figure>
        <img className="h-[300px] w-[424px]" src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-6 mt-6 px-3 rounded bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline border-0 border-yellow-500 border-b-4 mt-4 text-yellow-500">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
