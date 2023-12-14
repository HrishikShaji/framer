"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="absolute z-20 px-12 pt-2 bg-transparent w-full">
      <div className="flex justify-between items-center  p-10">
        <Image
          src="https://framerusercontent.com/images/qmU7tgmwRQ3dXL9yHkp9GDxbrv0.svg"
          height={1000}
          width={1000}
          alt="image"
          className="h-[32px] w-[122px] cursor-pointer"
        />
        <div className="flex gap-4 items-center text-sm">
          <div className="px-3 py-2 hover:bg-gray-100 ease-in-out duration-1000 cursor-pointer rounded-3xl flex items-center justify-center">
            <h2>Product</h2>
          </div>
          <div className="px-3 hover:bg-gray-100 ease-in-out duration-1000 cursor-pointer py-2 group relative rounded-3xl flex  gap-1 items-center justify-center">
            <h2 className="">Compare</h2>
            <motion.div className="group-hover:-rotate-180 transform transition duration-300">
              <Image
                src="https://framerusercontent.com/images/etJlaPWVniEp7nVsxLgn0zVzfyE.svg"
                height={1000}
                width={1000}
                alt="image"
                className="h-[24px] w-[24px]"
              />
            </motion.div>
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="py-4  top-10 absolute  hidden group-hover:block hover:block left-0"
            >
              <div className="flex h-min w-[664px] bg-white p-2 border-[1px] border-gray-300 rounded-2xl gap-5 ">
                <div className="flex gap-10 p-6 flex-1">
                  <div className="flex flex-col gap-4 flex-1">
                    <h2 className="text-gray-500 font-medium text-xs">
                      MERCURIUS PAGES
                    </h2>
                    <Link href="/" className="text-blue-500 underline">
                      Home
                    </Link>
                    <Link
                      className="hover:text-blue-500 hover:underline"
                      href="/"
                    >
                      Product
                    </Link>
                    <Link
                      className="hover:text-blue-500 hover:underline"
                      href="/"
                    >
                      About
                    </Link>
                    <Link
                      className="hover:text-blue-500 hover:underline"
                      href="/"
                    >
                      Pricing
                    </Link>
                    <Link
                      className="hover:text-blue-500 hover:underline"
                      href="/"
                    >
                      Contact
                    </Link>
                  </div>

                  <div className="flex flex-col gap-4 flex-1">
                    <h2 className="text-gray-500 font-medium text-xs">
                      USER PAGES
                    </h2>
                    <Link
                      className="hover:text-blue-500 hover:underline"
                      href="/"
                    >
                      Login
                    </Link>
                    <Link
                      className="hover:text-blue-500 hover:underline"
                      href="/"
                    >
                      Register
                    </Link>
                    <Link
                      className="hover:text-blue-500 hover:underline"
                      href="/"
                    >
                      404 Error
                    </Link>
                  </div>
                </div>
                <div className="w-[248px] bg-gray-300 rounded-xl overflow-hidden flex flex-col gap-7  py-7 justify-center  px-7  relative ">
                  <div className="bg-gray-200 rounded-2xl absolute rotate-[4deg] w-40 h-10 top-6 left-10" />
                  <div className="w-[255px] h-[124px] z-20">
                    <Image
                      src="https://framerusercontent.com/images/yUa84Iyo2Lz7GPcHH4lpslVkgK8.svg"
                      height={1000}
                      width={1000}
                      alt=""
                      className="  object-cover rounded-md"
                    />
                  </div>
                  <div className="py-3 w-full flex-1 justify-center bg-black flex gap-2 text-white  items-center rounded-3xl">
                    <Image
                      src="https://framerusercontent.com/images/fVUy1acoLQhx2VAjG9IQqEBgQ.svg"
                      height={1000}
                      width={1000}
                      alt="image"
                      className="h-[20px] w-[20px]"
                    />
                    <h2 className="text-white font-medium">App Store</h2>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="px-3 py-2 hover:bg-gray-100 ease-in-out duration-1000 cursor-pointer rounded-3xl flex items-center justify-center">
            <h2>Pricing</h2>
          </div>
          <div className="px-3 py-2 hover:bg-gray-100 ease-in-out duration-1000 cursor-pointer rounded-3xl flex items-center justify-center">
            <h2>Contact</h2>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="px-3 py-2 rounded-3xl hover:bg-black hover:text-white ease-in-out duration-300 border-[1px] border-black cursor-pointer">
            <h2 className="text-sm px-1 font-medium">Login</h2>
          </div>
          <div className="px-3 py-1 flex items-center  rounded-3xl bg-black text-white">
            <h2 className="text-sm font-medium px-1">{`Let's Talk`}</h2>
            <Image
              src="	https://framerusercontent.com/images/bXtqf2PjaTT8OFF6x6dkokeqL4k.svg"
              height={1000}
              width={1000}
              className="h-[20px] w-[20px]"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
