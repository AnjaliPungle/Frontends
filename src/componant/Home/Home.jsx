
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import web1 from "../../assets/1.webp";
import web2 from "../../assets/2.webp";
import web3 from "../../assets/3.webp";
import head from "../../assets/head.png";
import vedio from "../../assets/srujon-demo.mp4";

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

  // Play/Pause toggle
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

  // Mute/Unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Seek video
  const handleSeek = (e) => {
    const newTime = (e.target.value / 100) * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Format time (MM:SS)
  const formatTime = (time) => {
    if (!time) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="flex flex-col md:flex-col items-center justify-between w-full h-auto bg-gradient-to-b from-violet-500 to-white py-10">

      {/* ---- HEADER SECTION ---- */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full h-screen px-8">
        {/* Left Section */}
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
            We turn imagination into immersive 3D realities.
            From lifelike product renders to interactive AR/VR experiences, our work blends
            creativity, precision, and technology to bring your vision to life.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-7 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          className="md:w-2/5 mt-10 md:mt-0 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={head}
            alt="Hero"
            className="w-full max-w-fit "
          />
        </motion.div>
      </div>

      {/* ---- VIDEO SECTION ---- */}
      <div className=" bg-white flex flex-col md:flex-row items-center justify-between w-full pt-0  ">
        {/* Video Player */}
        <div
          className="relative md:w-1/2 flex flex-col items-center justify-center mt-16"

        >
          <div className="relative w-full max-w-lg">
            <video
              ref={videoRef}
              className="rounded-2xl shadow-lg w-full"
              autoPlay
              loop
              muted
              onClick={togglePlay}
            >
              <source src={vedio} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>

            {/* Overlay Play Button */}
            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-2xl"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="black"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            )}
          </div>

          {/* Controls */}
          <div className="w-full max-w-lg mt-4">
            {/* Progress Bar */}
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
                {/* Mute Button */}
                <button
                  onClick={toggleMute}
                  className="text-xl hover:text-violet-600"
                >
                  {isMuted ? "🔇" : "🔊"}
                </button>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 px-6"

        >
          <h2 className="text-2xl font-bold text-gray-500 mb-4">
            Built to Innovate
          </h2>
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Empowering Innovation with Precision
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our team of full-time experts is dedicated to crafting innovative,
            tailored digital solutions that empower businesses to grow, scale, and succeed.
            With a blend of creativity, technical expertise, and precision,
            we help turn your vision into reality—delivering results that truly make an impact.
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
      <div className="flex flex-col md:flex-col items-center bg-white justify-between w-full h-auto px-6 py-10 ">
        <h2 className="text-2xl font-serif text-gray-400 text-center pt-5 ">Our Services</h2>
        <h2 className="text-4xl text-center text-blue-900 font-extrabold pt-6">Bringing ideas to life through 3D design, rendering, and immersive development.</h2>
        <div className="flex flex-row-flex-col  gap-3 w-max-w-3/5 border-black pt-7">
          <div className="border-2 border-blue-500">
            <img src={web1} alt=""
              className=" px-10 text-center w-64 h-64 object-cover rounded-lg transition-transform duration-500 hover:scale-110" />
            <h2 className="pt-7 px-2 font-2xl text-center text-black">3D Assets Development for Game/AR/VR/MR/XR Metaverse</h2>
            <h2 className=" text-2xl font-sans text-gray-500">At Srujon Intelligent Solutions, we craft high-quality, performance-optimized 3D assets tailored for games, AR/VR/XR...</h2>
            <button className="  text-white bg-blue-900">Learn more</button>
          </div>
          <div className="border-2 border-blue-500">
            <img src={web2} alt=""
              className=" px-10 text-center w-64 h-64 object-cover rounded-lg transition-transform duration-500 hover:scale-110" />
            <h2 className=" px-2 font-2xl pt-7 text-center text-black">
             E-Learning Content Development
            </h2>
            <h2 className="text-2xl text-gray-500 font-sans ">Step into immersive digital environments with Srujon Intelligent Solutions advanced VR simulation solutions. Leveraging AI and ML, we craft intelligent,..</h2>
            <button className=" text-white bg-blue-900">Learn more</button>
          </div>
          <div className="border-2 border-blue-500">
            <img src={web3} alt=""
              className="px-10 text-center w-64 h-64 object-cover rounded-lg transition-transform duration-500 hover:scale-110" />
            <h2 className="font-2xl pt-7 text-center font-bold text-black">

             Ed-Tech Platform Development
            </h2>
            <h2 className="px-2 text-2xl text-gray-500 font-sans">,Srujon Intelligent Solutions creates scalable, interactive, and feature-rich EdTech platforms. Our innovative solutions streamline ....</h2>
              <button className="text-white bg-blue-900">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Home;
