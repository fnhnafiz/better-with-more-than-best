import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#FFFDFA] pt-60">
      <div className="w-[90%] mx-auto p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl text-center font-semibold text-[#017848]">
          Our misson
        </h1>
        <h1 className="text-center text-3xl md:text-5xl font-bold mt-6 leading-normal">
          We’re making homeownership simpler, faster — and most importantly,
          more accessible for all Americans.
        </h1>
      </div>
      {/* section two */}
      <section className="m-auto flex max-w-screen-xl flex-col-reverse gap-x-32 gap-y-8 px-6 pb-32 md:flex-row md:px-20 justify-center items-center pt-40">
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="font-bold text-textPrimary leading-heading tracking-normal text-xl md:text-2xl md:tracking-tight">
            The status quo is broken
          </h2>
          <p className="font-normal leading-body text-textSecondary text-base mt-6">
            The traditional processes around homeownership are opaque and
            stressful. Fees aren’t transparent, and some are simply outrageous
            in size. Traditional mortgage lending is rife with unnecessary fees
            and slow, painful processes. It’s a system set up to benefit
            insiders — not you. Better.com CEO, Vishal Garg, set out to change
            that.
          </p>
          <button className="rounded-lg text-base text-center font-bold select-none outline-none transition duration-300 ease-in-out focus:shadow-md disabled:text-gray-400 disabled:bg-gray-200 text-white bg-[#017848] hover:bg-green-400 focus:bg-green-800 px-7 py-5 inline-flex items-center justify-center mt-8">
            Read Vishal’s story
          </button>
        </div>

        {/* Image and Play Button */}
        <div className="relative w-full md:w-1/2">
          <button className="relative w-full h-[400px]">
            <img
              alt="Vishal Mission"
              loading="lazy"
              width="1080"
              height="800"
              decoding="async"
              className="w-full h-full object-cover"
              src="https://media.better.com/video/vishal-mission.jpg"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>
          </button>
        </div>
      </section>
      {/* section three */}
      <section className="bg-[#017848] px-20 py-20">
        <div className="m-auto max-w-screen-lg">
          <h2 className="font-bold leading-heading m-0 p-0 w-auto text-2xl md:text-3xl tracking-tight md:tracking-tighter text-white">
            How we’re changing things
          </h2>
          <p className="font-normal  m-0 p-0 text-left text-white text-base mt-8">
            Homeownership is a huge part of our economy. Housing overall is a
            $33 trillion business, and mortgages account for $15 trillion. Yet
            home finance operates in the same way it has for decades — through
            opaque systems and expensive intermediaries whose interests are
            misaligned with consumers’.
          </p>
          <p className="font-normal  m-0 p-0 text-left text-white text-base mt-4">
            That’s why Better.com is redefining the homeownership process from
            the ground up. We’re using technology to make it faster and more
            efficient, and humans to help make it friendly and enjoyable.
          </p>
        </div>
      </section>
      {/* section four */}
      <section className="px-20 py-28">
        <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-2xl md:tracking-tight text-center">
          Backed by
        </h2>
        <div className="m-auto mt-20 flex max-w-screen-2xl flex-wrap justify-around gap-10">
          <img
            src="../public/citiredesign.svg"
            alt="Citi Logo"
            className="w-40 h-auto"
          />
          <img
            src="../public/sbg-logo.svg"
            alt="SoftBank Logo"
            className="w-40 h-auto"
          />

          <img
            src="../public/citiredesign.svg"
            alt="Citi Logo"
            className="w-40 h-auto"
          />
          <img
            src="../public/sbg-logo.svg"
            alt="SoftBank Logo"
            className="w-40 h-auto"
          />
          <img
            src="../public/sbg-logo.svg"
            alt="SoftBank Logo"
            className="w-40 h-auto"
          />
        </div>
      </section>
      {/* section five */}
      <section className="m-auto max-w-screen-xl pb-20 text-center ">
        <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-2xl md:tracking-tight mb-16">
          Company timeline
        </h2>

        <div className="relative m-auto  w-1/3 before:absolute before:left-1/2 before:block before:h-full before:w-1 before:translate-x-2/4 before:bg-accentBackground">
          <div className="bg-[#DFE0DC] h-full absolute top-0 w-[4px] left-1/2 transform -translate-x-1/2 "></div>
          <div className="relative flex flex-col items-center ">
            <div className="inline-block rounded-full bg-[#017848] px-8 py-2">
              <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">
                2014
              </h3>
            </div>
            <div className="rounded-sm relative w-full bg-accentSecondary my-lg p-base lg:p-xl -ml-base -translate-x-1/2 lg:-ml-2xl">
              <p
                className="font-normal text-left bg-[#DFE0DC] m-4 p-4 rounded-sm
            "
              >
                After Vishal Garg’s first attempt to purchase his own dream
                home, he quickly realized that the homebuying process is
                unnecessarily broken. This inspired him to found a
                technology-first company led by engineers and data experts with
                the mission of digitizing and automating home finance to make it
                cheaper, easier, and faster for all.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="inline-block rounded-full bg-[#017848] px-8 py-2">
              <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">
                2015
              </h3>
            </div>
            <div className="rounded-sm relative w-full  lg:p-xl ml-8 translate-x-1/2 lg:ml-3xl">
              <p className="font-normal  text-left bg-[#DFE0DC] m-4 p-4 rounded-sm">
                Better Mortgage funds its first mortgage loan entirely online
                (without a single phone call!).
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="inline-block rounded-full bg-[#017848] px-8 py-2">
              <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">
                2016
              </h3>
            </div>
            <div className="rounded-sm relative w-full  my-lg p-base lg:p-xl -ml-base -translate-x-1/2 lg:-ml-2xl">
              <p className="font-normal text-left bg-[#DFE0DC] m-4 p-4 rounded-sm">
                Better Mortgage becomes a Fannie Mae approved seller + servicer
                and establishes relationships with top mortgage investors.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="inline-block rounded-full bg-[#017848]  px-8 py-2">
              <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white ">
                2017
              </h3>
            </div>
            <div className="rounded-sm relative w-full bg-accentSecondary my-lg p-base lg:p-xl ml-8 translate-x-1/2 lg:ml-3xl">
              <p className="font-normal text-left bg-[#DFE0DC] m-4 p-4 rounded-sm">
                Better expands into the real estate market with Better Real
                Estate.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="inline-block rounded-full bg-[#017848] px-8 py-2">
              <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">
                2018
              </h3>
            </div>
            <div className="rounded-sm relative w-full bg-accentSecondary my-lg p-base lg:p-xl -ml-base -translate-x-1/2 lg:-ml-2xl">
              <p className="font-normal text-left bg-[#DFE0DC] m-4 p-4 rounded-sm">
                Better Mortgage partners with Ally Bank to build Ally powered by
                Better.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="inline-block rounded-full bg-[#017848] px-8 py-2">
              <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">
                2019
              </h3>
            </div>
            <div className="rounded-sm relative w-full bg-accentSecondary my-lg p-base lg:p-xl ml-8 translate-x-1/2 lg:ml-3xl">
              <p className="font-normal text-left bg-[#DFE0DC] m-4 p-4 rounded-sm">
                Better Mortgage launches its pilot partnership with American
                Express to deliver a seamless homebuying experience to AMEX
                customers.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="inline-block rounded-full bg-[#017848] px-8 py-2">
              <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">
                2021
              </h3>
            </div>
            <div className="rounded-sm relative w-full bg-accentSecondary my-lg p-base lg:p-xl -ml-base -translate-x-1/2 lg:-ml-2xl">
              <p className="font-normal text-left bg-[#DFE0DC] m-4 p-4 rounded-sm">
                Better acquires Trussle — The UK’s most innovative online
                mortgage broker.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="inline-block rounded-full bg-[#017848] px-8 py-2">
              <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">
                2022
              </h3>
            </div>
            <div className="rounded-sm relative w-full bg-accentSecondary my-lg p-base lg:p-xl ml-8 translate-x-1/2 lg:ml-3xl">
              <p className="font-normal text-left bg-[#DFE0DC] m-4 p-4 rounded-sm">
                Better Mortgage becomes the first fintech to fund $100B home
                loans entirely online.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="inline-block rounded-full bg-[#017848] px-8 py-2">
              <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">
                2023
              </h3>
            </div>
            <div className="rounded-sm relative w-full bg-accentSecondary my-lg p-base lg:p-xl -ml-base -translate-x-1/2 lg:-ml-2xl">
              <p className="font-normal text-left bg-[#DFE0DC] m-4 p-4 rounded-sm">
                Better Mortgage launches One Day Mortgage¹: The first offering
                to customers to go from application to{" "}
                <a href="/with/one-day-mortgage-terms/" className="underline">
                  full mortgage Commitment Letter within 24 hours
                </a>{" "}
                vs. typical industry process of 30+ days.
              </p>
            </div>
            <div className="rounded-sm relative w-full bg-accentSecondary my-lg p-base lg:p-xl ml-8 translate-x-1/2 lg:ml-3xl">
              <p className="font-normal text-left bg-[#DFE0DC] m-4 p-4 rounded-sm">
                Better Mortgage launches the fully digital 3-day HELOC².
              </p>
            </div>
            <div className="rounded-sm relative w-full bg-accentSecondary my-lg p-base lg:p-xl -ml-base -translate-x-1/2 lg:-ml-2xl">
              <p className="font-normal text-left bg-[#DFE0DC] m-4 p-4 rounded-sm">
                Better Mortgage launches One Day Verified Approval Letter.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="inline-block rounded-full bg-[#017848] px-8 py-2">
              <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">
                Today
              </h3>
            </div>
            <div className="rounded-sm relative w-full bg-accentSecondary my-lg p-base lg:p-xl ml-8 translate-x-1/2 lg:ml-3xl">
              <p className="font-normaltext-left bg-[#DFE0DC] m-4 p-4 rounded-sm">
                You become part of the story by joining tens of thousands of
                happy Better Mortgage borrowers.
                <button className="bg-[#017848] mt-4 block px-5 py-3 rounded-xl text-white font-semibold">
                  Get started
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
