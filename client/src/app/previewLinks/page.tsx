import Image from "next/image";
import React from "react";

export default function PreviewLinks() {
  return (
    <div>
      {/* Large Screen */}
      <div className="hidden md:flex">
        <div className="w-full h-[984px] relative bg-light-grey overflow-hidden leading-[normal] tracking-[normal] text-left text-sm text-white font-gotham-bold">
          <div className="absolute top-[2732px] left-[160px] rounded-93xl bg-gray-100 hidden flex-row items-center justify-center py-5 px-8 whitespace-nowrap">
            <div className="self-stretch flex-1 relative tracking-[0.05em] leading-[140%] uppercase">
              tutustu koko tarinaamme
            </div>
          </div>
          <div className="absolute top-[calc(50%_-_284px)] left-[calc(50%_-_174px)] shadow-[0px_0px_32px_rgba(0,_0,_0,_0.1)] rounded-3xl bg-white w-[349px] overflow-hidden flex flex-row items-start justify-start py-12 px-14 box-border z-[1] text-13xl text-dark-grey font-heading-s">
            <div className="flex-1 flex flex-col items-start justify-start gap-[56px]">
              <div className="self-stretch flex flex-col items-center justify-start py-0 px-8 gap-[25px]">
                <Image
                  className="w-[104px] h-[104px] relative rounded-[50%] object-cover"
                  loading="lazy"
                  width={50}
                  height={50}
                  alt=""
                  src="/ellipse-3@2x.png"
                />
                <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
                  <h1 className="m-0 relative text-inherit leading-[150%] font-bold font-inherit mq450:text-lgi mq450:leading-[29px] mq750:text-7xl mq750:leading-[38px]">
                    Ben Wright
                  </h1>
                  <div className="relative text-base leading-[150%] text-grey whitespace-nowrap">
                    ben@example.com
                  </div>
                </div>
              </div>
              {/* <Platforms /> */}
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </div>

      {/* Mobile Screen */}
      <div className="flex md:hidden">
        <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[237px] box-border gap-[60px] leading-[normal] tracking-[normal]">
          {/* Header */}
          <header className="rounded-xl bg-white overflow-hidden flex flex-row items-start justify-start py-4 pr-4 pl-6 gap-[16px] top-[0] z-[99] sticky">
            <button className="cursor-pointer py-[9px] pr-[25px] pl-[27px] bg-[transparent] rounded-lg flex flex-row items-start justify-start border-[1px] border-solid border-purple">
              <div className="flex flex-row items-start justify-start">
                <div className="relative text-base leading-[150%] font-semibold font-body-m text-purple text-left inline-block min-w-[105px] whitespace-nowrap">
                  Back to Editor
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-[11px] px-10 bg-purple rounded-lg flex flex-row items-start justify-start whitespace-nowrap">
              <div className="relative text-base leading-[150%] font-semibold font-body-m text-white text-left inline-block min-w-[79px]">
                Share Link
              </div>
            </button>
          </header>
          {/* Content */}
          <section className="self-stretch flex flex-row items-start justify-start py-0 px-[69px] text-left text-13xl text-dark-grey">
            <div className="flex-1 flex flex-col items-start justify-start gap-[56px]">
              <div className="self-stretch flex flex-col items-center justify-start py-0 px-8 gap-[25px]">
                <Image
                  className="w-[104px] h-[104px] relative rounded-[50%] object-cover"
                  loading="lazy"
                  width={50}
                  height={50}
                  alt=""
                  src="/ellipse-3@2x.png"
                />
                <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
                  <h1 className="m-0 relative text-inherit leading-[150%] font-bold font-inherit">
                    Ben Wright
                  </h1>
                  <div className="relative text-base leading-[150%] text-grey whitespace-nowrap">
                    ben@example.com
                  </div>
                </div>
              </div>
              <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[20px]">
                <div className="self-stretch rounded-lg bg-gray-300 overflow-x-auto flex flex-row items-center justify-start p-4 gap-[8px]">
                  <Image
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    width={50}
                    height={50}
                    src="/teenyiconsgithubsolid2.svg"
                  />
                  <div className="flex-1 relative text-base leading-[150%] font-body-m text-white text-left">
                    GitHub
                  </div>
                  <Image
                    className="h-4 w-4 relative overflow-hidden shrink-0"
                    alt=""
                    width={50}
                    height={50}
                    src="/mdiarrowright2.svg"
                  />
                </div>
                <button className="cursor-pointer [border:none] p-4 bg-crimson self-stretch rounded-lg overflow-x-auto flex flex-row items-center justify-start gap-[8px]">
                  <Image
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    width={50}
                    height={50}
                    src="/riyoutubefill2.svg"
                  />
                  <div className="flex-1 relative text-base leading-[150%] font-body-m text-white text-left">
                    YouTube
                  </div>
                  <Image
                    className="h-4 w-4 relative overflow-hidden shrink-0"
                    alt=""
                    width={50}
                    height={50}
                    src="/mdiarrowright2.svg"
                  />
                </button>
                <div className="self-stretch rounded-lg bg-mediumslateblue-200 overflow-x-auto flex flex-row items-center justify-start p-4 gap-[8px]">
                  <Image
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    width={50}
                    height={50}
                    src="/mdilinkedin1.svg"
                  />
                  <div className="flex-1 relative text-base leading-[150%] font-body-m text-white text-left">
                    LinkedIn
                  </div>
                  <Image
                    className="h-4 w-4 relative overflow-hidden shrink-0"
                    alt=""
                    width={50}
                    height={50}
                    src="/mdiarrowright2.svg"
                  />
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
