import banner from "../../assets/banner.png";

function Banner() {
  return (
    <section className="container">
      <div
        className="hero min-h-[37.5rem] rounded-3xl"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div>
          <div>
            <h1 className="text-white text-[clamp(28px,5vw,52px)] font-bold lg:leading-[4.75rem] w-full max-w-[56.0625rem] mx-auto text-center">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mt-4 lg:mt-6 text-white/90 lg:text-lg lg:leading-8 text-center w-full max-w-[58.3125rem]">
              Discover the joy of cooking tailored to your preferences with our
              specialized classes, making every meal an unforgettable
              experience.
            </p>
            <div className="flex items-center gap-4 lg:gap-6 justify-center mt-10">
              <button className="bg-main px-5 lg:px-8 py-3 lg:py-5 rounded-full lg:text-xl font-medium lg:font-semibold text-black-900">
                Explore Now
              </button>
              <button className="border border-white px-5 lg:px-8 py-3 lg:py-5 rounded-full lg:text-xl font-medium lg:font-semibold text-white">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Banner;
