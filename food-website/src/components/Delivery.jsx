const Delivery = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h3 className="text-orange-500 font-bold text-center text-2xl">
        Quick Delivery App
      </h3>
      <div className="lg:w-[1240px] mx-auto lg:flex flex-row ">
        <img
          className=" w-[550px]  mx-auto my-4 md:w-[500px]"
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
        />
        <div className="flex flex-col justify-center flex-wrap w-[350px] md:w-[100%] m-auto">
          <p className="text-[#00df9a] font-bold sm:flex sm:justify-center">
            Get The App
          </p>
          <h1 className="text-2xl md:text-4xl sm:text-3xl py-2 font-bold sm:text-center">
            Limitless Covenience on-demand
          </h1>
          <p className="flex justify-center items-center sm:text-center ">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda,
            voluptate reprehenderit dolore autem cum ullam sed odit
            perspiciatis. Doloribus quos velit, eveniet ex deserunt fuga? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-auto py-3 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
