import React from "react";
import Image from "next/image";

const Products = () => {
  return (
    <section className="text-gray-500 body-font" id="products">
      <div className="container px-5 py-24 mx-auto text-center">
        {" "}
        <div className="mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-orange-500">
            Our Products
          </h1>
          <div className="ml-auto mr-auto h-1 w-12 bg-neon-blue rounded"></div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-900 p-6 rounded-lg">
              <Image
                height={50}
                width={50}
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/Generative AI_DD.jpg"
                layout="responsive"
                alt="content"
              />
              <h3 className="tracking-widest text-orange-500 text-lg font-bold title-font">
                Generative AI
              </h3>
              <h2 className="text-xs text-neon-blue font-medium title-font mb-4">
                Deep Dreamer
              </h2>
              <p className="leading-relaxed text-base text-gray-400">
                Our own products Image generation, Video generation, Text
                generation, Code generation. Well it is a SaaS platform and also
                the data’s were fetched from our own datasets & API’s.
              </p>
              <button className="neon-button mt-4 font-bold text-base">
                Try for free
              </button>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-900 p-6 rounded-lg">
              <Image
                height={50}
                width={50}
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/Custom AI_DD.jpg"
                layout="responsive"
                alt="content"
              />
              <h3 className="tracking-widest text-orange-500 text-lg font-bold title-font">
                AI Playground
              </h3>
              <h2 className="text-xs text-neon-blue font-medium title-font mb-4">
                Deep Dreamer
              </h2>
              <p className="leading-relaxed text-base text-gray-400">
                AI Playground provides users to develop their own AI modal in
                our ‘Deep Dreamer’ platform. User can build a general knowledge
                AI modal which is based on various fields.
              </p>
              <button className="neon-button mt-4 font-bold text-base">
                Try for free
              </button>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-900 p-6 rounded-lg">
              <Image
                height={50}
                width={50}
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/API.jpg"
                layout="responsive"
                alt="content"
              />
              <h3 className="tracking-widest text-orange-500 text-lg font-bold title-font">
                API Service
              </h3>
              <h2 className="text-xs text-neon-blue font-medium title-font mb-4">
                Deep Dreamer
              </h2>
              <p className="leading-relaxed text-base text-gray-400">
                The API’s are completely developed by ‘Deep Dreamer’. And those
                API’s were open source, so users can able to access our API’s
                completely free. We had documentation also.
              </p>
              <button className="neon-button mt-4 font-bold text-base">
                Try for free
              </button>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-900 p-6 rounded-lg">
              <Image
                height={40}
                width={50}
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/Code Market_DD.jpg"
                layout="responsive"
                alt="content"
              />
              <h3 className="tracking-widest text-orange-500 text-lg font-bold title-font">
                Code Market
              </h3>
              <h2 className="text-xs text-neon-blue font-medium title-font mb-4">
                Deep Dreamer
              </h2>
              <p className="leading-relaxed text-base text-gray-400">
                ‘Deep Dreamer’ had the store facility. User can able to buy our
                source codes. And also we had documentation to use source codes.
                There are some free source codes are available in our store.
              </p>
              <button className="neon-button mt-4 font-bold text-base">
                Try for free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
