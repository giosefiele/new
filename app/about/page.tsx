import Link from "next/link";
import React from "react";
import img1 from "../../public/assets/pichome (11).png";
import img2 from "../../public/assets/pichome (11).png";
import img3 from "../../public/assets/pichome (2).png";
import img4 from "../../public/assets/pichome (3).png";
import img5 from "../../public/assets/pichome (4).png";
import img6 from "../../public/assets/pichome (5).png";
import img7 from "../../public/assets/pichome (6).png";
import img8 from "../../public/assets/pichome (7).png";
import img9 from "../../public/assets/pichome (8).png";
import img10 from "../../public/assets/pichome (9).png";

import Image from "next/image";
import Script from "next/script";
const Donate = () => {
  return (
    <div className="mx-10 mb-10">
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7088214308316238"
        crossOrigin="anonymous"
      />
      <div className="flex flex-wrap justify-around gap-10">
        <Image src={img1} alt="img1" width={500} height={500} />
        <Image src={img2} alt="img1" width={500} height={500} />
        <Image src={img3} alt="img1" width={500} height={500} />
        <Image src={img4} alt="img1" width={500} height={500} />
        <Image src={img5} alt="img1" width={500} height={500} />
        <Image src={img6} alt="img1" width={500} height={500} />
        <Image src={img7} alt="img1" width={500} height={500} />
        <Image src={img8} alt="img1" width={500} height={500} />
        <Image src={img9} alt="img1" width={500} height={500} />
      </div>
    </div>
  );
};

export default Donate;
