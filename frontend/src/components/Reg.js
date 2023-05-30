import React from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function Reg({ visible, onClose }) {
  const handleonClose = (event) => {
    if (event.target.id === "container") onClose();
  };
  if (!visible) return null;
  return (
    <div>
      <div
        className="flex inset-0 relative z-50 justify-center "
        id="container"
        onClick={handleonClose}
      >
        <div className="w-96  fixed  md:w-[85rem] mt-1 bg-[url('https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-contain  ">
          <div className="flex justify-end">
            <p className="text-blue-400  text-2xl" onClick={onClose}>
              <CloseIcon />
            </p>
          </div>

          <div className=" md:w-auto   block items-center   overflow-hidden  h-[700px]  bg-[url('https://cybrom.com/wp-content/uploads/2023/04/Logo-for-website-1.png')]   bg-no-repeat     bg-contain ">
            <div className="backdrop-blur-none md:backdrop-blur-sm    ">
              {/* ___________login__start________________ */}
              <section className=" -mt-8">
                <div
                  className="flex [perspective:1000px]  flex-col items-center justify-center px-6   mx-auto md:h-screen lg:py-0   "
                  id="singflipid"
                >
                  <div className=" w-full bg-black/75 rounded-lg shadow dark:border md:-mt-64 lg:-mt-10 sm:max-w-md xl:p-0  dark:border-gray-700 ">
                    <div className=" p-6  space-y-4 md:space-y-6 sm:p-8">
                      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign up to your account
                      </h1>
                      <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Your name
                          </label>
                          <input
                            type="name"
                            name="name"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-4"
                            placeholder="Enter your name"
                            required=""
                          />
                          <label
                            htmlFor="Mobile Number"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Your Mobile Number
                          </label>
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-4"
                            placeholder="Enter your name"
                            required=""
                          />
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Your email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="name@company.com"
                            required=""
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="remember"
                                aria-describedby="remember"
                                type="checkbox"
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                required=""
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor="remember"
                                className="text-gray-500 dark:text-gray-300 "
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                          <a
                            href="#"
                            className="text-sm  font-medium text-white  hover:underline dark:text-primary-500"
                          >
                            Forgot password?
                          </a>
                        </div>
                        <button
                          type="submit"
                          className="w-full text-white bg-blue-500 bg-primary-600 hover:bg-primary-700 focus:ring-1 focus:outline-none focus:ring-orange-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                          Sign up
                        </button>
                        <p className="text-sm font-midium  text-white ">
                          Don’t have an account yet?{" "}
                          <a href="#" className="font-medium  hover:underline ">
                            Sign up
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                  <div className="[transform:rotateY(180deg)] [back-face-visiblity:hidden ]">
                    <h1>hiuus</h1>
                  </div>
                </div>
              </section>
              {/* __________________login___end______________ */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
