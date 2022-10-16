import React, { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import GoogleLogin from "react-google-login";
import Discover from "./Discover";
import SugesstedAccount from "./SugesstedAccount";
import Footer from "./Footer";

const SideBar = () => {
  const [showSideBar, setshowSideBar] = useState<Boolean>(true);

  const activeLink =
    "flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded";

  const normalLink =
    "flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold rounded";

  const userProfile = false;
  return (
    <>
      <div
        className="block xl:hidden m-2 ml-4 mt-3 text-xl"
        onClick={() => setshowSideBar(!showSideBar)}
      >
        {showSideBar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSideBar && (
        <>
          <div className="xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3">
            <div className="xl:border-b-2 border-gray-200 xl:pb-4">
              <Link href="/">
                <div className={normalLink}>
                  <p className="text-2xl">
                    <AiFillHome />
                  </p>
                  <span className="text-xl hidden xl:block">For You</span>
                </div>
              </Link>
            </div>
            {!userProfile && (
              <div className="px-2 py-4 hidden xl:block">
                <div className="text-gray-400">
                  Log in to like and comment on videos
                </div>
                <div className="pr-4">
                  <GoogleLogin
                    clientId=""
                    render={(renderProps) => (
                      <button
                        className="color-white text-lg text-[#F51997] px-6 py-3 border-[1px] font-semibold rounded-md outline-none w-full mt-3 cursor-pointer hover:text-white hover:bg-[#F51997]"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        Log in
                      </button>
                    )}
                    onSuccess={() => {}}
                    onFailure={() => {}}
                    cookiePolicy={"single_host_origin"}
                  />
                </div>
              </div>
            )}
            <Discover />
            <SugesstedAccount />
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default SideBar;
