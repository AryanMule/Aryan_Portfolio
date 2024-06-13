/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { motion, transform } from "framer-motion";
import "../ExperienceEdu/ExperienceEdu.css";
function ExperienceEdu() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.2"
      className=" timeline p-[5vw] text-white relative max-w-[90vw] m-auto font-['helvetica'] font-bold rounded-md bg-gradient-to-b from-zinc-950 to-zinc-900"
    >
      <motion.div>
        <h1 className="text-[10vw] leading-[10vw] tracking-tighter mb-[2vw] ">
          EX- <br />
          <div className="flex ">
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              // animate={{}}
              transition={{ ease: "easeInOut", duration: 1.5 }}
              whileInView={{ opacity: 1, width: "28%" }}
              style={{
                color: "cyan",
                overflow: "hidden",
              }}
            >
              TRA
            </motion.div>
            <span className="text-zinc-300 tracking-[-0.05em] bg-transparent">
              CURRICULAR
            </span>
          </div>
        </h1>
        <div className="wrapper relative w-1/2  px-[1vw] py-[1vw] rounded-2xl bg-gradient-to-r from-zinc-800">
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
              },
            }}
            className="textbox bg-gradient-to-r from-white to-zinc-400  text-black  px-[2vw] py-[1vw] rounded-2xl"
          >
            <h2 className="text-[1.7vw]  text-zinc-700">
              Techathon (National Level)
            </h2>
            <h1 className="text-[0.8vw] ">march 2024</h1>
            <h1 className="text-[1vw] text-cyan-500 font-extrabold">
              GREENOVA: ENVIRONMENTAL INFORMATION HUB
            </h1>
            <p className="pl-[2vw]">
              <ul className="list-disc">
                <li>
                  Led GREENOVA Development: Created an environmental hub with blogs, maps, and an eco-friendly marketplace.

                </li>
                <li>
                  Enhanced UX: Implemented animations for a better user experience.
                </li>
                <li>
                  Techathon Leadership: Led the project to completion in a Techathon.
                </li>
              </ul>
            </p>
          </motion.div>
        </div>
        <div className="wrapper relative w-1/2 left-1/2  px-[1vw] py-[1vw] rounded-2xl b bg-gradient-to-l from-zinc-800 mb-[5vw]">
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
              },
            }}
            className="textbox bg-gradient-to-l from-white to-zinc-400 rounded-2xl text-black px-[2vw] py-[1vw]   "
          >
            <h2 className="text-[1.7vw]  text-zinc-700">
              Intercollege Hackathon
            </h2>
            <h1 className="text-[0.8vw] "> November 2023</h1>
            <h1 className="text-[1vw] text-cyan-500 font-extrabold">
              Healthguard |  DISEASE DIAGNOSIS PLATFORM
            </h1>
            <p className="pl-[2vw]">
              <ul className="list-disc">
                <li>
                  Developed "Health Guard," a platform predicting diseases based on user symptoms.
                </li>
                <li>
                  Utilized supervised regression and binary symptom assessment algorithms for accurate predictions.
                </li>
                <li>
                  Ensured precise information delivery and user-friendly design for accessibility.
                </li>
              </ul>
            </p>
          </motion.div>
        </div>
      </motion.div>
      <motion.h1
        initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
        whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        transition={{ duration: 1.5 }}
        className="text-[9vw] leading-[10vw] tracking-tighter mb-[2vw]"
      >
        Education
      </motion.h1>{" "}
      <motion.div className="wrapper relative w-1/2  px-[1vw] py-[1vw] rounded-2xl bg-gradient-to-r from-zinc-800">
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
            rotate: "-10deg",
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            rotate: "0",
            transition: {
              ease: "easeInOut",
              duration: 1,
            },
          }}
          className="textbox bg-gradient-to-r from-white to-zinc-400  text-black  px-[2vw] py-[1vw] rounded-2xl"
        >
          <h2 className="text-[1.7vw]  text-zinc-700">
            Bachelor of Engineering (B.E.)
          </h2>
          <h1 className="text-[0.8vw] ">
            Dr. D. Y. Patil Institute of Technology, Pimpri
          </h1>
          <h1 className="text-[1vw] text-cyan-500 font-extrabold">
            Average SGPA: 9.32{" "}
          </h1>
          <p className="pl-[2vw]">
            <ul className="list-disc">
              <li>Pursuing, Expected Graduation: June 2026</li>
              <li>Major:Computer Engineering</li>
            </ul>
          </p>
        </motion.div>
      </motion.div>
      <motion.div className="wrapper relative w-1/2  left-1/2 px-[1vw] py-[1vw] rounded-2xl bg-gradient-to-l from-zinc-800">
        <motion.div
          initial={{
            opacity: 0,
            x: 50,
            rotate: "10deg",
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            rotate: "0deg",

            transition: {
              ease: "easeInOut",
              duration: 1,
            },
          }}
          className="textbox bg-gradient-to-l from-white to-zinc-400  text-black  px-[2vw] py-[1vw] rounded-2xl"
        >
          <h2 className="text-[1.7vw]  text-zinc-700">
            Higher Secondary (12th Grade)
          </h2>
          <h1 className="text-[0.8vw] ">
            Vivekanand Junior College, Kolhapur{" "}
          </h1>
          <h1 className="text-[1vw] text-cyan-500 font-extrabold">
            Percentage: 84.57%
          </h1>
          <p className="pl-[2vw]">
            <ul className="list-disc">
              <li>Year of Completion: 2022</li>
            </ul>
          </p>
        </motion.div>
      </motion.div>
      <motion.div className="wrapper relative w-1/2  px-[1vw] py-[1vw] rounded-2xl bg-gradient-to-r from-zinc-800">
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
            rotate: "-10deg",
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            rotate: "0deg",
            transition: {
              ease: "easeInOut",
              duration: 1,
            },
          }}
          className="textbox bg-gradient-to-r from-white to-zinc-400  text-black  px-[2vw] py-[1vw] rounded-2xl"
        >
          <h2 className="text-[1.7vw]  text-zinc-700">
            Secondary School (10th Grade)
          </h2>
          <h1 className="text-[0.8vw] ">Malkapur Highschool Malkapur</h1>
          <h1 className="text-[1vw] text-cyan-500 font-extrabold">
            Percentage: 98.40%
          </h1>
          <p className="pl-[2vw]">
            <ul className="list-disc">
              <li>Year of Completion: 2020</li>
            </ul>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ExperienceEdu;
