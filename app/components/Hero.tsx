"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/assets/images/faceOne.webp",
  "/assets/images/faceTwo.webp",
  "/assets/images/faceThree.webp",
];
export const Hero = () => {
  return (
    <div className="h-full w-full border-[1px] border-gray-200 relative flex justify-end rounded-3xl p-2 ">
      <motion.div
        initial={{ scale: 0.975, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/assets/images/gradient.webp"
          height={1000}
          width={1000}
          alt="image"
          className="h-[836px] w-[484px]  rounded-2xl "
        />
      </motion.div>
      <div className="absolute z-2 bottom-1 left-0 w-full justify-center flex">
        <div className=" grid grid-cols-2 gap-[10px]  h-auto max-w-[1224px]">
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center self-start flex-nowrap gap-[40px] h-auto justify-center max-w-[612px] overflow-hidden p-0 relative w-full"
          >
            <div className="flex flex-col items-start gap-[40px] w-full">
              <div className="flex flex-col items-start  gap-[24px]  w-full">
                <div className="py-2 px-3 rounded-3xl border-gray-300 border-[1px]">
                  <h2 className="text-sm">Financial Management</h2>
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <h1 className="text-[88px] leading-[100px]  font-extrabold break-normal">
                      A simpler,
                    </h1>
                    <h1 className="text-[88px] leading-[100px] font-extrabold break-normal">
                      smarter basic
                    </h1>
                    <div className="flex gap-4">
                      <h1 className="text-[88px] leading-[100px] font-extrabold">
                        credit
                      </h1>
                      <h1 className="text-[88px] bg-gradient-to-r text-transparent bg-clip-text from-purple-400 to-cyan-300 leading-[100px] font-extrabold">
                        card.
                      </h1>
                    </div>
                  </div>
                  <h2>
                    Your powerful companion on the road to financial success!
                    Explore personal budget management, investment
                    opportunities.
                  </h2>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="p-3 bg-black flex gap-2 text-white  items-center rounded-3xl">
                  <Image
                    src="https://framerusercontent.com/images/fVUy1acoLQhx2VAjG9IQqEBgQ.svg"
                    height={1000}
                    width={1000}
                    alt="image"
                    className="h-[20px] w-[20px]"
                  />
                  <h2 className="text-white font-medium">App Store</h2>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex items-center">
                    {images.map((image, i) => (
                      <div
                        key={i}
                        className="p-1 -mr-2 rounded-full border-[1px] border-gray-300 bg-white"
                      >
                        <Image
                          src={image}
                          height={1000}
                          width={1000}
                          alt="image"
                          className="h-10 w-10  rounded-full "
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col ">
                    <h2 className="font-medium">24K+</h2>
                    <h2 className="text-xs text-gray-600">Active User</h2>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div
            className="flex justify-center "
            style={{ perspective: "1200px" }}
          >
            <motion.div
              className="relative flex justify-center"
              initial={{ rotateX: "45deg", y: 200, opacity: 0 }}
              animate={{ rotateX: "0deg", y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="absolute  w-[calc(100%_-_20px)] bg-gradient-to-b from-transparent to-white bottom-0 h-[188px]" />
              <Image
                src="/assets/images/phone.webp"
                height={1000}
                width={1000}
                alt="image"
                className="h-[682px] w-[424px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
