import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="text-gray-600 body-font" id="developer">
      <div className="container px-5 py-24 mx-auto flex flex-col items-center">
        {" "}
        <div className="mb-10">
          <h1 className="sm:text-3xl text-2xl ml-auto mr-auto font-medium title-font mb-2 text-orange-500">
            Developer
          </h1>
          <div className="ml-auto mr-auto h-1 w-12 bg-neon-blue rounded"></div>
        </div>
        <div className="lg:w-4/6 mx-auto">
          <div className="flex flex-col sm:flex-row mt-0">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <Image
                  height={70}
                  width={85}
                  className="object-cover rounded-full"
                  src="/me.jpg"
                  layout="responsive"
                  alt="dev"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-bold title-font mt-4 text-orange-500 text-lg">
                  Dharaneesh Boobalan
                </h2>
                <div className="w-12 h-1 bg-neon-blue rounded mt-2 mb-4"></div>
                <p className="text-base text-gray-400">
                  Flutter | Firebase (Authentication, Realtime Database, Cloud
                  Firestore, Cloud Functions) | State Management | RESTful APIs
                  | Next.js | React.js | JavaScript | TypeScript | Styled
                  Components | Redux | MobX | Recoil | Server-Side Rendering
                  (SSR) | Static Site Generation (SSG) | NextAuth | Node.js |
                  Express.js | MongoDB | MySQL | PostgreSQL | Postman API.
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4 text-gray-400">
                Greetings, I am Dharaneesh, a dedicated student pursuing a
                B.Tech in Artificial Intelligence and Machine Learning. With a
                passion for innovation, I have harnessed my skills to create a
                plethora of dynamic full-stack web applications and cutting-edge
                mobile applications. My journey is marked by a relentless
                pursuit of excellence. Moreover, I am currently making
                significant strides in the world of freelancing, leveraging my
                expertise in AI and ML to provide tailored solutions that cater
                to the unique needs of diverse clients. This endeavor has not
                only enabled me to apply my skills in real-world scenarios but
                has also proven to be a rewarding venture, allowing me to earn
                thousands each month. As I seamlessly balance my academic
                pursuits with this dynamic freelancing journey, I am poised to
                delve even deeper into the realms of AI and ML, contributing my
                ever-growing expertise to the ever-evolving landscape of
                technology.
              </p>
              <button className="neon-button mt-4 font-bold text-base">
                Developer Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
