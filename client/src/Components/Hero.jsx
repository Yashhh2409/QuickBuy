import { useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { motion } from "framer-motion"; 

const Hero = () => {
  const modelImages = [
    { src: assets.modelOne, alt: "Stylish Jacket for Winter" },
    { src: assets.modelTwo, alt: "Elegant Party Dress" },
    { src: assets.modelThree, alt: "Denim Collection" },
    { src: assets.modelFour, alt: "Casual Wear Collection" },
    { src: assets.modelFive, alt: "Classic Summer Outfit" },
    { src: assets.modelSix, alt: "Glamorous Party Dress" },
    { src: assets.modelSeven, alt: "Trendy Accessories" },
    { src: assets.modelEight, alt: "Formal Office Wear" },
  ];

  const [modelImage, setModelImage] = useState("");

  useEffect(() => {
    let lastIdx = -1;
    let newIdx;

    do {
      newIdx = Math.floor(Math.random() * modelImages.length);
    } while (newIdx === lastIdx);

    setModelImage(modelImages[newIdx]);
    lastIdx = newIdx;
  }, []);

  return (
    <motion.div
      className="flex flex-col sm:flex-row border border-gray-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }} 
    >
      {/* Hero Left Side */}
      <motion.div
        className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0"
        initial={{ x: -100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 0.8 }}
      >
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLER</p>
          </div>
          <motion.h1
            className="prata-regular text-2xl sm:py-3 lg:text-4xl leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {modelImage.alt}
            {/* Latest Arrivals */}
          </motion.h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </motion.div>

      {/* Hero Right Side */}
      <motion.img
        className="w-full object-contain sm:w-1/2"
        src={modelImage.src}
        alt={modelImage.alt}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </motion.div>
  );
};

export default Hero;
