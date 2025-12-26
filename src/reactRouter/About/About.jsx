export default function About() {
    
    return (
        <div className="py-10 sm:py-12 md:py-16 bg-white">
  <div className="container mx-auto px-4 sm:px-6 md:px-12 xl:px-6 text-gray-600">
    <div className="flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-12 items-center">
      
      {/* Image Section */}
      <div className="w-full md:w-5/12 lg:w-5/12">
        <img
          src="https://i.pinimg.com/736x/45/e8/81/45e881fb5956a801867ffa4f58534a89.jpg"
          alt="image"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-7/12 lg:w-6/12 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
          React development is carried out by passionate developers
        </h2>

        <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
          accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
          aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
        </p>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600">
          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
        </p>
      </div>

    </div>
  </div>
</div>

    );
}