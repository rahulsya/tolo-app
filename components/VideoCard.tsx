import React from "react";
import { Video } from "../types";
import { NextPage } from "next";
import { useState, useEffect, useRef } from "react";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";
import { BsPlay, BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";

interface IProps {
  post: Video;
}

const VideoCard: NextPage<IProps> = ({ post }) => {
  const [isHover, setIsHover] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const videoRef=useRef<HTMLVideoElement>(null)
  
  const onVideoPress=()=>{
    if (playing) {
      videoRef?.current?.pause()
      setPlaying(false)
    }else{
      videoRef?.current?.play()
      setPlaying(true)
    }
  }
  return (
    <div className="flex flex-col border-b-2 border-gray-200 pb-6">
      <div>
        <div className="flex gap-3 p-2 cursor-pointer font-semibold rounded">
          <div className="w-10 w-10 md:w-16 md:h-16">
            <Link href={"/"}>
              <>
                <Image
                  width={62}
                  height={62}
                  className="rounded-full"
                  alt="profile photo"
                  layout="responsive"
                  src={post.postedBy.image}
                />
              </>
            </Link>
          </div>
          <div>
            <Link href="/">
              <div className="flex items-center gap-2">
                <p className="flex flex-row items-center font-bold md:text-md text-primary ">
                  {post.postedBy.userName} {""}
                  <GoVerified className="text-blue-400 text-md" />
                </p>
                <p className="capitalize font-medium text-xs text-gray-500 hidden md:block">
                  {post.postedBy.userName}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:ml-20 flex gap-4 relative">
        <div
          className="rounded-2xl"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <Link href={"/"}>
            <video
            ref={videoRef}
              loop
              className="lg:w-[600px] h-[300px] md:h-[400px] lg:h-[530px] w-[200px] rounded-2xl cursor-pointer bg-gray-100"
              src={post.video.asset.url}
            ></video>
          </Link>
          {isHover && (
            <div>
              {playing ? (
                <button onClick={()=>onVideoPress()}>
                  <BsFillPauseFill className="text-2xl lg:text-4xl text-black" />
                </button>
              ) : (
                <button onClick={()=>onVideoPress()}>
                  <BsFillPlayFill className="text-2xl lg:text-4xl text-black" />
                </button>
              )}

              {isVideoMuted ? (
                <button>
                  <HiVolumeOff className="text-2xl lg:text-4xl text-black" />
                </button>
              ) : (
                <button>
                  <HiVolumeUp className="text-2xl lg:text-4xl text-black" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
