import { Risque as Rouge_Script } from "next/font/google";
const rouge = Rouge_Script({ subsets: ["latin"], weight: ["400"] });
import img1 from "../public/assets/pichome (1).png";
import Image from "next/image";
import Script from "next/script";
export default function Home() {
  return (
    <div className="mx-2">
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7088214308316238"
        crossOrigin="anonymous"
      />
      <h1
        className={`${rouge.className} text-7xl bg-indigo-400 w-fit mx-auto p-3 rounded-3xl`}
      >
        WELCOME
      </h1>
      <h1 className="bg-indigo-200 text-5xl w-fit mx-auto text-center mt-24 p-3 rounded-3xl">
        We Isaiah Orphanage Center, we call upon your support brothers and
        sisters towards our needs like water, medical service, rent, food among
        others.
      </h1>
      <Image
        src={img1}
        alt="home1"
        width={500}
        height={500}
        className="mt-24 mx-auto"
      />
      <h1 className="bg-indigo-200 text-5xl w-fit mx-auto text-center mt-24 p-3 rounded-3xl">
        From our center in Uganda 🇺🇬 we ask to everybody who is able and kind to
        help us with your own precious and kind donation. Our children are our
        future, helping us you help them and the tomorrow of our generations.
      </h1>
      <h1 className="bg-indigo-200 text-5xl w-fit mx-auto text-center mt-24 mb-24 p-3 rounded-3xl">
        Their smiles are PRICELESS
      </h1>
    </div>
  );
}
