import Title from "../Components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../Components/NewsLetterBox"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
        <div className="my-10 flex flex-col md:flex-row gap-16">
          <img
            className="w-full md:max-w-[450px]"
            src={assets.about_img}
            alt=""
          />
          <div className="flex flex-col justify-center text-start gap-6 md:w-2/4 text-gray-600">
            <p className="text-xl">
            Welcome to QuickBuy, where style meets quality and individuality. We are dedicated to redefining how you experience fashion by curating a collection that blends modern trends with timeless elegance.
            </p>
            <p className="text-xl">
            At QuickBuy, we believe clothing is more than just fabric—it’s a statement of who you are. Our mission is to empower you with styles that inspire confidence, celebrate diversity, and bring out the best version of yourself.
            </p>
            <b className="text-gray-800">Our Mission</b>
            <p className="text-xl">
            To revolutionize the fashion landscape by delivering high-quality, trend-forward clothing that suits every personality, every occasion, and every lifestyle. We aim to create a seamless shopping experience where our customers feel valued, confident, and stylish.
            </p>
          </div>
        </div>

        <div className="text-xl py-4">
          <Title text1={'WHY'} text2={'CHOOSE US'}/>

        </div>

        <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Quality Assurance: </b>
            <p className="text-gray-600">We ensure that every product is crafted with the finest materials and rigorously checked to meet the highest standards before it reaches you.</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Conveniance: </b>
            <p className="text-gray-600">Enjoy a seamless shopping experience with our intuitive platform, designed to make your fashion journey quick and hassle-free.</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Exceptional Customer Service: </b>
            <p className="text-gray-600">Our friendly and professional support team is always here to assist you, ensuring your satisfaction at every step.</p>
          </div>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
