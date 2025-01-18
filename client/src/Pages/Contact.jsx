import { assets } from "../assets/frontend_assets/assets";
import Title from "../Components/Title";
import NewsLetterBox from "../Components/NewsLetterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p>Address : Lorem ipsum dolor sit amet.</p>
          <p>Contact : 1234-5678-07</p>
          <p className="font-semibold text-xl text-gray-600">Get in Touch</p>
          <p>
            {" "}
            <b>Customer Support:</b> Our team is ready to assist you with any
            inquiries or concerns.
          </p>
          <p>
            <b>Feedback:</b> We value your thoughts and are constantly striving
            to improve your shopping experience.
          </p>
          <p>
            <b>Partnership Opportunities: </b> Interested in collaborating with
            us? Reach out, and let’s make it happen.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default Contact;
