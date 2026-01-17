import Contactoo from "@/components/Contactoo";
import Script from "next/script";
import React from "react";

const Contact = () => {
  return (
    <div>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7088214308316238"
        crossOrigin="anonymous"
      />
      <Contactoo />
    </div>
  );
};

export default Contact;
