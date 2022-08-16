import Image from "next/image";
import React from "react";
import img from "../../images/my-pic2.jpg";

function AboutMe() {
  return (
    <section className="flex gap-10 ">
      <div className="w-[55%] h-[full] relative brightness-[1.4] ">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-sm"
        />
      </div>
      <div className="py-8 px-5 bg-[#f8bbd0] w-[45%] flex flex-col gap-4 text-white font-semibold text-xl leading-relaxed text-center italic rounded-sm">
        <p className="mb-5">
          {/* <span className="text-[#20c997] not-italic">Experience:</span>
          <br /> */}
          Stephanie has been a licensed extension artist for over 'amount' of
          years. In that time she has worked with hundreds of clients.
        </p>
        <p className="mb-5">
          {/* <span className="text-[#20c997] not-italic">Certifications:</span>
          <br /> */}
          Some of her certifications include: 'certification 1', 'certification
          2', and 'certification 3'.
        </p>
        <p>
          {/* <span className="text-[#20c997] not-italic">Passionate:</span>
          <br /> */}
          She is passionate about exposing the beauty that lies within every
          face she touches.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
