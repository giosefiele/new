import Contactoo from "@/components/Contactoo";
import Script from "next/script";
import React from "react";

const Contact = () => {
  const [io, setIo] = React.useState(false);
  setIo(true);
  return (
    <div>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7088214308316238"
        crossOrigin="anonymous"
      />
      <Contactoo />
      {io && (
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-7088214308316238"
          data-ad-slot="1234567890"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      )}
    </div>
  );
};

export default Contact;
