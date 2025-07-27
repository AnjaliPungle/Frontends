
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import web1 from "../../assets/1.webp";
import web2 from "../../assets/2.webp";
import web3 from "../../assets/3.webp";
import web4 from "../../assets/4-1.webp";
import web5 from "../../assets/5.webp";
import web6 from "../../assets/6-1.webp";
import img1 from "../../assets/img1.png";
import img10 from "../../assets/img10.png";
import img11 from "../../assets/img11.png";
import img12 from "../../assets/img12.png";
import img13 from "../../assets/img13.png";
import img14 from "../../assets/img14.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
import img9 from "../../assets/img9.png";

import head from "../../assets/head.png";

const Home = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  // Update time and duration
  useEffect(() => {
    const updateTime = () => {
      if (videoRef.current) {
        setCurrentTime(videoRef.current.currentTime);
        setDuration(videoRef.current.duration);
      }
    };
    const interval = setInterval(updateTime, 500);
    return () => clearInterval(interval);
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSeek = (e) => {
    const newTime = (e.target.value / 100) * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    if (!time) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="flex flex-col md:flex-col items-center justify-between w-full h-auto bg-gradient-to-b from-violet-500 to-white py-10">

      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full h-screen px-8">
        <motion.div
          className="md:w-2/4 text-center md:text-left left-2 px-16"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-serif">Srujon Intelligent Solutions</h2>
          <h1 className="text-4xl font-bold text-blue-900 leading-tight">
            Let's Bring Imagination into Reality
          </h1>
          <p className="text-lg mt-5 text-gray-500">
            We turn imagination into immersive 3D realities. From lifelike product renders to
            interactive AR/VR experiences, our work blends creativity, precision, and technology to bring your vision to life.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-7 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="md:w-2/5 mt-10 md:mt-0 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={head} alt="Hero" className="w-full max-w-fit " />
        </motion.div>
      </div>

      {/* VIDEO SECTION */}
      <div className="bg-white flex flex-col md:flex-row items-center justify-between w-full pt-0">
        {/* Video Player */}
        <div className="relative md:w-1/2 flex flex-col items-center justify-center mt-16">
          <div className="relative w-full max-w-lg">
            <video
              ref={videoRef}
              className="rounded-2xl shadow-lg w-full"
              autoPlay
              loop
              muted
              onClick={togglePlay}
            >
              <source src="/demo.mp4" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>

            {/* Overlay Play Button */}
            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-2xl"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" className="w-8 h-8 ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            )}
          </div>

          {/* Controls */}
          <div className="w-full max-w-lg mt-4">
            <input
              type="range"
              min="0"
              max="100"
              value={(currentTime / duration) * 100 || 0}
              onChange={handleSeek}
              className="w-full accent-black"
            />
            <div className="flex justify-between items-center mt-2 text-gray-700 text-sm">
              <span>{formatTime(currentTime)}</span>
              <div className="flex items-center gap-4">
                <button onClick={toggleMute} className="text-xl hover:text-violet-600">
                  {isMuted ? "🔇" : "🔊"}
                </button>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 px-6">
          <h2 className="text-2xl font-bold text-gray-500 mb-4">Built to Innovate</h2>
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Empowering Innovation with Precision</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our team of full-time experts is dedicated to crafting innovative, tailored digital solutions that empower businesses to grow, scale, and succeed.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-violet-600 text-white px-6 py-3 rounded-lg shadow hover:bg-violet-700 transition"
          >
            Watch More
          </motion.button>
        </div>
      </div>

      {/* Services Section */}
      <div className="flex flex-col md:flex-col items-center bg-white justify-between w-full h-auto px-6 py-10">
        <h2 className="text-2xl font-serif text-gray-400 text-center pt-5">Our Services</h2>
        <h2 className="text-4xl text-center text-blue-900 font-extrabold pt-6">
          Bringing ideas to life through 3D design, rendering, and immersive development.
        </h2>
        {/* web Section1  */}
        <div className="px-15 py-15 flex flex-row-flex-col gap-10 w-4/5 border-black pt-7">
          <div className="border-2 border-blue-500">
            <img src={web1} alt="" className="w-64 h-64 object-cover rounded-lg mx-auto transition-transform duration-500 hover:scale-110" />
            <h2 className="text-2xl pt-7 px-2 text-center text-black font-bold">3D Assets Development for Game/AR/VR/MR/XR Metaverse</h2>
            <p className="pt-3 px-2 justify-between text-scanf text-bold text-gray-600">At Srujon Intelligent Solutions, we craft high-quality, performance-optimized 3D assets tailored for games, AR/VR/XR...</p>

            <button className="text-white bg-blue-900 px-6 py-3 rounded-lg shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer mt-auto">Learn more</button>
          </div>
          <div className="border-2 border-blue-500">
            <img src={web2} alt="" className="w-64 h-64 object-cover rounded-lg mx-auto transition-transform duration-500 hover:scale-110" />
            <h2 className="pt-7 px-2 text-2xl text-center text-black font-bold ">E-Learning Content Development</h2>
            <p className="pt-9 text-scanf text-bold px-2 justify-between text-gray-600">Srujon Intelligent Solutions, a reputable eLearning solutions provider in India, is committed to delivering end-to-end..</p>
            <button className="text-white bg-blue-900 px-6 py-3 rounded-lg shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer mt-auto">Learn more</button>
          </div>
          <div className="border-2 border-blue-500">
            <img src={web3} alt="" className="w-64 h-64 object-cover rounded-lg mx-auto transition-transform duration-500 hover:scale-110" />
            <h2 className="pt-7 px-2 text-2xl text-center text-black font-bold">Ed-Tech Platform Development</h2>
            <p className="pt-12 text-scanf text-bold px-2 justify-between text-gray-600">Srujon Intelligent Solutions creates scalable, interactive, and feature-rich EdTech platforms. Our innovative solutions streamline .....</p>
            <button className="text-white bg-blue-900 px-6 py-3 rounded-lg shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer mt-auto">Learn more</button>
          </div>
        </div>
        {/* web Section1  */}
        <div className="px-15 py-15 flex flex-row-flex-col gap-10 w-4/5 border-black pt-7">
          <div className="border-2 border-blue-500">
            <img src={web4} alt="" className="w-64 h-64 object-cover rounded-lg mx-auto transition-transform duration-500 hover:scale-110" />
            <h2 className="text-2xl pt-7 px-2 text-center text-black font-bold">3D Assets Development for Game/AR/VR/MR/XR Metaverse</h2>
            <p className="pt-3 px-2 justify-between text-scanf text-bold text-gray-600">At Srujon Intelligent Solutions, we craft high-quality, performance-optimized 3D assets tailored for games, AR/VR/XR...</p>

            <button className="text-white bg-blue-900 px-6 py-3 rounded-lg shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer mt-auto">Learn more</button>
          </div>
          <div className="border-2 border-blue-500">
            <img src={web5} alt="" className="w-64 h-64 object-cover rounded-lg mx-auto transition-transform duration-500 hover:scale-110" />
            <h2 className="pt-7 px-2 text-2xl text-center text-black font-bold ">E-Learning Content Development</h2>
            <p className="pt-9 text-scanf text-bold px-2 justify-between text-gray-600">Srujon Intelligent Solutions, a reputable eLearning solutions provider in India, is committed to delivering end-to-end..</p>
            <button className="text-white bg-blue-900 px-6 py-3 rounded-lg shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer mt-auto">Learn more</button>
          </div>
          <div className="border-2 border-blue-500">
            <img src={web6} alt="" className="w-64 h-64 object-cover rounded-lg mx-auto transition-transform duration-500 hover:scale-110" />             <h2 className="pt-7 px-2 text-2xl text-center text-black font-bold">Ed-Tech Platform Development</h2>
            <p className="pt-12 text-scanf text-bold px-2 justify-between text-gray-600">Srujon Intelligent Solutions creates scalable, interactive, and feature-rich EdTech platforms. Our innovative solutions streamline .....</p>
            <button className="text-white bg-blue-900 px-6 py-3 rounded-lg shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer mt-auto">Learn more</button>
          </div>
        </div>

        {/* OUR WORK SECTION WITH SWIPER */}
        <div className="px-15 py-15 w-full">
          <h2 className="text-3xl font-serif text-gray-400 text-center pt-10">Our Work</h2>
          <h2 className="text-5xl text-center px-5 py-5 font-bold text-blue-900  pt-5">
            A glimpse into the solutions we've crafted for clients across industries.
          </h2>

          <Swiper
            spaceBetween={30}
            slidesPerView={5}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Navigation, Pagination, Autoplay]}
            className="my-8 w-full max-w-5xl"
          >
            <SwiperSlide>
              <img src={img1} alt="Work 1"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="Work 2"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="Work 3"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="Work 4"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="Work 5"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img6} alt="Work 6"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img7} alt="Work 7"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img8} alt="Work 8"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img9} alt="Work 9"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img10} alt="Work 10"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img11} alt="Work 11"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img12} alt="Work 12"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img13} alt="Work 13"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img14} alt="Work 14"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Card Section */}
        <div className="bg-gray-50 py-12">
          {/* Heading */}
          <div className="text-center mb-10">
            <h3 className="text-gray-500 text-lg mb-2">Vision Meets Execution</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 px-4">
              A visionary team of creators, designers, and dreamers shaping ideas into reality
            </h2>
          </div>

          {/* Cards */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-6">
            {/* Card 1 */}
            <div className="flex flex-col items-start">
              <div className="bg-indigo-400 text-white text-3xl font-bold px-8 py-6 rounded-t-lg shadow-md">
                5+
              </div>
              <div className="bg-white shadow-md px-6 py-4 text-center rounded-b-lg w-64">
                <p className="font-semibold text-black">
                  Visionary directors guiding our path.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-start">
              <div className="bg-indigo-400 text-white text-3xl font-bold px-8 py-6 rounded-t-lg shadow-md">
                7+
              </div>
              <div className="bg-white shadow-md px-6 py-4 text-center rounded-b-lg w-64">
                <p className="font-semibold text-black">
                  Project leads managing across departments.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-start">
              <div className="bg-indigo-400 text-white text-3xl font-bold px-8 py-6 rounded-t-lg shadow-md">
                20+
              </div>
              <div className="bg-white shadow-md px-6 py-4 text-center rounded-b-lg w-64">
                <p className="font-semibold text-black">
                  A dynamic team of passionate professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sign up*/}
      <div className="px-15 py-15 w-full">
        <h2 className="text-3xl font-serif text-gray-400 text-center pt-10"> Stay Updated</h2>
        <h2 className="text-4xl text-center px-5 py-5 font-bold text-blue-900  pt-5">
          Get our latest news, design insights, and project updates delivered right to your inbox.
        </h2>
        <div className="w-full bg-white py-10 flex justify-center">
      <div className="w-full max-w-4xl flex items-center border-2 border-blue-800 rounded-lg overflow-hidden shadow-lg">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 text-black focus:outline-none bg-white"
        />
        <button className="bg-blue-800 text-white px-8 py-3 hover:bg-blue-900 transition w-40">
          Sign Up
        </button>
      </div>
    </div>

      </div>

    </div>
  );
};

export default Home;
