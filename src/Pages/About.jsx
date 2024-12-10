import ButtonLink from "../Components/ButtonLink/ButtonLink";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-pink-50 via-white to-pink-100 text-gray-800 min-h-screen">
      <div className="max-w-6xl mx-auto py-16 px-6">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-pink-600">
            Welcome to WAVEY beauty
          </h1>
          <p className="text-lg mt-4 text-gray-600">
            Discover the beauty within you. Let’s glow together!
          </p>
        </header>
        <div className="relative mb-12">
          <img
            src="https://liphamymakeup.com/wp-content/uploads/2023/05/makeup-artist-la-gi-64535025f0c78.jpg"
            alt="WAVEY beauty"
            className="rounded-lg shadow-lg mx-auto w-full"
          />
          <div className="absolute top-0 left-0 bg-gradient-to-r from-pink-400 via-transparent to-pink-400 opacity-50 rounded-lg w-full h-full"></div>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-pink-500">Our Story</h2>
          <p className="text-lg mt-4 leading-8 text-gray-700">
            At WAVEY beauty, we believe beauty is more than skin deep—it’s a
            journey of self-love, confidence, and creativity. Since 2024, we’ve
            been curating the finest cosmetics and skincare products to help
            every customer shine in their own unique way.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg py-10 px-6 mb-12">
          <h3 className="text-2xl font-semibold text-pink-500 text-center mb-6">
            Why Choose Us?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-pink-500 text-white rounded-full flex items-center justify-center">
                🌟
              </div>
              <h4 className="text-xl font-bold">Premium Products</h4>
              <p className="mt-2 text-gray-600">
                Carefully selected, 100% authentic.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-pink-500 text-white rounded-full flex items-center justify-center">
                🌍
              </div>
              <h4 className="text-xl font-bold">Eco-Friendly</h4>
              <p className="mt-2 text-gray-600">
                Sustainable and ethical practices.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-pink-500 text-white rounded-full flex items-center justify-center">
                🤝
              </div>
              <h4 className="text-xl font-bold">Outstanding Support</h4>
              <p className="mt-2 text-gray-600">
                Dedicated to your satisfaction.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to embrace your beauty journey?
          </h3>
          <ButtonLink isActive text="Shop Now" path="/MakeUpShop/" />
        </div>
      </div>
    </div>
  );
};

export default About;
