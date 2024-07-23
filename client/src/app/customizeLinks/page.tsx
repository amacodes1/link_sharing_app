import Image from "next/image";
import React from "react";

export default function CustomizeLinks() {
  return (
    <div>
      <div className="hidden md:block">
        <div className="w-full relative bg-light-grey overflow-hidden flex flex-col items-start justify-start p-6 box-border gap-[24px] leading-[normal] tracking-[normal] text-left text-sm text-white font-gotham-bold">
          {/* <Content /> */}
          <main className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full text-left text-13xl text-dark-grey font-body-m mq1125:flex-wrap">
            <div className="w-[560px] rounded-xl bg-white overflow-hidden shrink-0 flex flex-row items-start justify-center py-[101.5px] px-5 box-border min-w-[560px] max-w-full mq1125:flex-1 mq750:min-w-full mq450:pt-[43px] mq450:pb-[43px] mq450:box-border mq1050:pt-[66px] mq1050:pb-[66px] mq1050:box-border">
              <div className="h-[631px] w-[307px] relative">
                <Image
                  className="absolute top-[0px] left-[0px] w-full h-full"
                  alt=""
                  width={50}
                  height={50}
                  src="/rectangle-15.svg"
                />
                <div className="absolute top-[10px] left-[11px] w-[285px] flex flex-col items-start justify-start pt-[53.5px] px-[23px] pb-[43.5px] box-border gap-[56px]">
                  <Image
                    className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                    loading="lazy"
                    width={50}
                    height={50}
                    alt=""
                    src="/subtract.svg"
                  />
                  <div className="self-stretch h-[158px] flex flex-row items-start justify-start py-0 pr-10 pl-[38px] box-border">
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[25px]">
                      <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 px-8">
                        <div className="self-stretch flex-1 relative rounded-[50%] bg-whitesmoke z-[2]" />
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[13px] z-[2]">
                        <div className="self-stretch h-4 relative rounded-85xl bg-whitesmoke" />
                        <div className="self-stretch flex flex-row items-start justify-start py-0 px-11">
                          <div className="h-2 flex-1 relative rounded-85xl bg-whitesmoke" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[20px] z-[2]">
                    <div className="self-stretch h-11 relative rounded-lg bg-whitesmoke" />
                    <div className="self-stretch h-11 relative rounded-lg bg-whitesmoke" />
                    <div className="self-stretch h-11 relative rounded-lg bg-whitesmoke" />
                    <div className="self-stretch h-11 relative rounded-lg bg-whitesmoke" />
                    <div className="self-stretch h-11 relative rounded-lg bg-whitesmoke" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-white overflow-hidden flex flex-col items-start justify-start pt-10 px-0 pb-6 box-border gap-[40px] min-w-[525px] max-w-full mq750:min-w-full mq450:gap-[20px] mq450:pt-5 mq450:box-border mq1050:pt-[26px] mq1050:pb-5 mq1050:box-border">
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-10 box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
                  <h1 className="m-0 self-stretch relative text-inherit leading-[150%] font-bold font-inherit mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
                    Customize your links
                  </h1>
                  <div className="self-stretch relative text-base leading-[150%] text-grey">
                    Add/edit/remove links below and then share all your profiles
                    with the world!
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-10 box-border max-w-full text-center">
                <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
                  <button className="cursor-pointer py-[9px] px-5 bg-[transparent] self-stretch rounded-lg flex flex-row items-start justify-center border-[1px] border-solid border-purple">
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative text-base leading-[150%] font-semibold font-body-m text-purple text-left inline-block min-w-[108px]">
                        + Add new link
                      </div>
                    </div>
                  </button>
                  <div className="self-stretch rounded-xl bg-light-grey overflow-hidden flex flex-col items-center justify-center py-[62.5px] px-5 box-border max-w-full mq750:pt-[41px] mq750:pb-[41px] mq750:box-border">
                    <div className="self-stretch flex flex-col items-center justify-center gap-[40px] max-w-full mq750:gap-[20px]">
                      <Image
                        className="w-[249.5px] h-40 relative"
                        loading="lazy"
                        width={50}
                        height={50}
                        alt=""
                        src="/group-273.svg"
                      />
                      <div className="w-[488px] flex flex-col items-center justify-start gap-[24px] max-w-full">
                        <h1 className="m-0 self-stretch relative text-inherit leading-[150%] font-bold font-inherit mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
                          Let’s get you started
                        </h1>
                        <div className="self-stretch relative text-base leading-[150%] text-grey">
                          Use the “Add new link” button to get started. Once you
                          have more than one link, you can reorder and edit
                          them. We’re here to help you share your profiles with
                          everyone!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-end justify-start gap-[24px]">
                <div className="self-stretch h-px relative bg-borders" />
                <div className="flex flex-row items-start justify-end py-0 px-10">
                  <button className="cursor-pointer [border:none] py-[11px] px-[27px] bg-purple rounded-lg flex flex-row items-start justify-start opacity-[0.25] hover:bg-mediumslateblue">
                    <div className="relative text-base leading-[150%] font-semibold font-body-m text-white text-left inline-block min-w-[37px]">
                      Save
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </main>
          <div className="w-[302px] rounded-93xl bg-gray-100 hidden flex-row items-center justify-center py-5 px-8 box-border whitespace-nowrap">
            <div className="self-stretch flex-1 relative tracking-[0.05em] leading-[140%] uppercase">
              tutustu koko tarinaamme
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div className="w-full relative bg-light-grey overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border gap-[16px] leading-[normal] tracking-[normal]">
          {/* <Main /> */}
          <main className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
            <section className="flex-1 rounded-xl bg-white overflow-hidden flex flex-col items-start justify-start pt-6 px-0 pb-4 box-border gap-[24px] max-w-full text-left text-5xl text-dark-grey font-body-m">
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-6 pb-4">
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                  <h3 className="m-0 self-stretch relative text-inherit leading-[150%] font-bold font-inherit">
                    Customize your links
                  </h3>
                  <div className="self-stretch relative text-base leading-[150%] text-grey">
                    Add/edit/remove links below and then share all your profiles
                    with the world!
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-6">
                <button className="cursor-pointer py-[9px] px-5 bg-[transparent] flex-1 rounded-lg flex flex-row items-start justify-center border-[1px] border-solid border-purple">
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative text-base leading-[150%] font-semibold font-body-m text-purple text-left inline-block min-w-[108px]">
                      + Add new link
                    </div>
                  </div>
                </button>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 text-center">
                <div className="flex-1 rounded-xl bg-light-grey overflow-hidden flex flex-col items-end justify-start py-[46.5px] px-5 gap-[24px]">
                  <div className="self-stretch flex flex-row items-start justify-end py-0 px-[65px]">
                    <Image
                      className="h-20 flex-1 relative max-w-full overflow-hidden"
                      loading="lazy"
                      width={50}
                      height={50}
                      alt=""
                      src="/group-2731.svg"
                    />
                  </div>
                  <h3 className="m-0 self-stretch relative text-inherit leading-[150%] font-bold font-inherit">
                    Let’s get you started
                  </h3>
                  <div className="self-stretch relative text-base leading-[150%] text-grey">
                    Use the “Add new link” button to get started. Once you have
                    more than one link, you can reorder and edit them. We’re
                    here to help you share your profiles with everyone!
                  </div>
                </div>
              </div>
              <footer className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch h-px relative bg-borders" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-4">
                  <button className="cursor-pointer [border:none] py-[11px] px-5 bg-purple flex-1 rounded-lg flex flex-row items-start justify-center opacity-[0.25]">
                    <div className="relative text-base leading-[150%] font-semibold font-body-m text-white text-left inline-block min-w-[37px]">
                      Save
                    </div>
                  </button>
                </div>
              </footer>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
