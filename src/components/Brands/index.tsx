"use client";
import React from "react";
import brandData from "./brandData";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <>
      <section className="border border-x-0 border-y-stroke bg-alabaster py-5">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light">
            <Marquee>
              {brandData.map((brand, key) => (
                <div key={key} className="mx-w-full block w-[220px]">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={170}
                    height={20}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;
