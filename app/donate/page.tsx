import Link from "next/link";
import React from "react";
import img2 from "../../public/assets/pichome (10).png";
import Image from "next/image";
import Script from "next/script";
const Donate = () => {
  return (
    <div className="mx-10">
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7088214308316238"
        crossOrigin="anonymous"
      />
      <h1 className="bg-indigo-200 text-5xl w-fit mx-auto text-center mt-24 p-3 rounded-3xl">
        Please help us trough your kindness, the children need to have all for
        their growth and health. Showing your compassion you set them more free
        and help their future shine brighter.
      </h1>
      <Link href="https://buy.stripe.com/00g6rcg5Z1qna2caEE">
        <div className="bg-indigo-800 mx-auto w-fit mt-24 text-5xl text-white p-6 rounded-full hover:bg-indigo-400 hover:text-yellow-200">
          Donate
        </div>
      </Link>
      <Image
        alt="img2"
        src={img2}
        width={500}
        height={500}
        className="py-24 mx-auto"
      />
    </div>
  );
};

export default Donate;
