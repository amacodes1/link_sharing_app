import Image from "next/image";
import React from "react";

export default function CustomizeLinks() {
  return (
    <div>
      <div className="hidden md:block">
        <div className="w-full relative bg-gray50 overflow-hidden flex flex-col items-start justify-start p-6 box-border gap-[24px] leading-[normal] tracking-[normal] text-left text-sm text-background font-Instrument_Sans">
          {/* Header */}

          <div className="flex-1 rounded-xl w-full bg-background overflow-hidden flex flex-col items-start justify-start py-4 pr-4 pl-6 box-border max-w-full z-[unset]">
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq713:flex-wrap">
              <div className="w-[146px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
                <div className="self-stretch flex flex-row items-start justify-start gap-[6px]">
                  <Image
                    className="h-8 w-8 relative overflow-hidden shrink-0"
                    loading="lazy"
                    width={50}
                    height={50}
                    alt=""
                    src="/images/solar_link-circle.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                    <Image
                      className="self-stretch h-[21px] relative max-w-full overflow-hidden shrink-0"
                      loading="lazy"
                      width={50}
                      height={50}
                      alt=""
                      src="/images/devlinks-logo.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[16px] max-w-full mq397:flex-wrap">
                <button className="cursor-pointer [border:none] py-[11px] px-[27px] bg-purple100 rounded-lg flex flex-row items-start justify-start gap-[8px]">
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <Image
                      className="w-5 h-5 relative overflow-hidden shrink-0"
                      alt=""
                      width={50}
                      height={50}
                      src="/images/link-bold.svg"
                    />
                  </div>
                  <div className="relative text-base leading-[150%] font-semibold text-purple500 text-left inline-block min-w-[40px]">
                    Links
                  </div>
                </button>
                <div className="rounded-lg flex flex-row items-start justify-start py-[11px] px-[27px] gap-[8px]">
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <Image
                      className="w-5 h-5 relative overflow-hidden shrink-0"
                      loading="lazy"
                      width={50}
                      height={50}
                      alt=""
                      src="/images/user-circle-bold.svg"
                    />
                  </div>
                  <div className="relative leading-[150%] text-dark font-semibold inline-block min-w-[105px]">
                    Profile Details
                  </div>
                </div>
              </div>
              <button className="cursor-pointer py-[9px] px-[26px] bg-[transparent] rounded-lg flex flex-row items-start justify-start border-[1px] border-solid border-purple500">
                <div className="flex flex-row items-start justify-start">
                  <div className="relative text-base leading-[150%] font-semibold text-purple500 text-left inline-block min-w-[60px]">
                    Preview
                  </div>
                </div>
              </button>
            </div>
          </div>
          <main className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full text-left text-13xl text-dark mq1125:flex-wrap">
            <div className="w-[560px] hidden lg:flex rounded-xl bg-background overflow-hidden shrink-0 flex flex-row items-start justify-center py-[101.5px] px-5 box-border min-w-[560px] max-w-full mq1125:flex-1 mq750:min-w-full mq450:pt-[43px] mq450:pb-[43px] mq450:box-border mq1050:pt-[66px] mq1050:pb-[66px] mq1050:box-border">
              <div className="h-[631px] w-[307px] relative">
                <Image
                  className="absolute top-[0px] text-gray200 left-[0px] w-full h-full"
                  alt=""
                  width={50}
                  height={50}
                  src="/images/phone-outer2.svg"
                />
                <div className="absolute top-[10px] left-[11px] w-[285px] flex flex-col items-start justify-start pt-[53.5px] px-[23px] pb-[43.5px] box-border gap-[56px]">
                  <Image
                    className="w-full h-full text-gray200 absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                    loading="lazy"
                    width={50}
                    height={50}
                    alt=""
                    src="/images/phone-inner.svg"
                  />
                  <div className="self-stretch h-[158px] flex flex-row items-start justify-start py-0 pr-10 pl-[38px] box-border">
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[25px]">
                      <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 px-8">
                        <div className="self-stretch flex-1 relative rounded-[50%] bg-gray300 z-[2]" />
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[13px] z-[2]">
                        <div className="self-stretch h-4 relative rounded-2xl bg-gray300" />
                        <div className="self-stretch flex flex-row items-start justify-start py-0 px-11">
                          <div className="h-2 flex-1 relative rounded-2xl bg-gray300" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[20px] z-[2]">
                    <div className="self-stretch h-11 relative rounded-lg bg-gray300" />
                    <div className="self-stretch h-11 relative rounded-lg bg-gray300" />
                    <div className="self-stretch h-11 relative rounded-lg bg-gray300" />
                    <div className="self-stretch h-11 relative rounded-lg bg-gray300" />
                    <div className="self-stretch h-11 relative rounded-lg bg-gray300" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-background overflow-hidden flex flex-col items-start justify-start pt-10 px-0 pb-6 box-border gap-[40px] min-w-[525px] max-w-full mq750:min-w-full mq450:gap-[20px] mq450:pt-5 mq450:box-border mq1050:pt-[26px] mq1050:pb-5 mq1050:box-border">
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-10 box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
                  <h1 className="m-0 self-stretch relative text-dark leading-[150%] font-bold mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
                    Customize your links
                  </h1>
                  <div className="self-stretch relative text-base leading-[150%] text-gray400">
                    Add/edit/remove links below and then share all your profiles
                    with the world!
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-10 box-border max-w-full text-center">
                <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
                  <button className="cursor-pointer py-[9px] px-5 bg-[transparent] self-stretch rounded-lg flex flex-row items-start justify-center border-[1px] border-solid border-purple500">
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative text-base leading-[150%] font-semibold text-purple500 text-left inline-block min-w-[108px]">
                        + Add new link
                      </div>
                    </div>
                  </button>
                  <div className="self-stretch rounded-xl bg-gray50 overflow-hidden flex flex-col items-center justify-center py-[62.5px] px-5 box-border max-w-full mq750:pt-[41px] mq750:pb-[41px] mq750:box-border">
                    <div className="self-stretch flex flex-col items-center justify-center gap-[40px] max-w-full mq750:gap-[20px]">
                      <Image
                        className="w-[249.5px] h-40 relative"
                        loading="lazy"
                        width={50}
                        height={50}
                        alt=""
                        src="/images/group273.svg"
                      />
                      <div className="w-[488px] flex flex-col items-center justify-start gap-[24px] max-w-full">
                        <h1 className="m-0 self-stretch relative text-dark leading-[150%] font-bold font-inherit mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
                          Let’s get you started
                        </h1>
                        <div className="self-stretch relative text-base leading-[150%] text-gray400">
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
                <div className="self-stretch h-px relative bg-gray200" />
                <div className="flex flex-row items-start justify-end py-0 px-10">
                  <button className="cursor-pointer [border:none] py-[11px] px-[27px] bg-purple500 rounded-lg flex flex-row items-start justify-start opacity-[0.25] hover:bg-purple300">
                    <div className="relative text-base leading-[150%] font-semibold text-background text-left inline-block min-w-[37px]">
                      Save
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </main>
          <div className="w-[302px] rounded-93xl bg-gray-100 hidden flex-row items-center justify-center py-5 px-8 box-border whitespace-nowrap">
            <div className="self-stretch flex-1 relative tracking-[0.05em] leading-[140%] uppercase"></div>
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div className="w-full relative bg-gray50 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border gap-[16px] leading-[normal] tracking-[normal] font-Instrument_Sans">
          {/* Header */}

          <header className="self-stretch rounded-xl bg-background overflow-hidden flex flex-col items-start justify-start py-4 pr-4 pl-6 text-left text-base text-purple500">
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
              <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0">
                <Image
                  className="h-8 w-8 relative"
                  loading="lazy"
                  alt=""
                  width={50}
                  height={50}
                  src="/images/solar_link-circle.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="rounded-lg bg-purple100 flex flex-row items-center justify-start py-[11px] px-[27px] gap-[8px]">
                  <Image
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    width={50}
                    height={50}
                    src="/images/link-bold.svg"
                  />
                  <div className="w-10 relative leading-[150%] font-semibold hidden">
                    Links
                  </div>
                </div>
                <div className="rounded-lg flex flex-row items-center justify-start py-[11px] px-[27px] gap-[8px] text-grey">
                  <Image
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    loading="lazy"
                    width={50}
                    height={50}
                    alt=""
                    src="/images/user-circle-bold.svg"
                  />
                  <div className="w-[105px] relative leading-[150%] font-semibold hidden whitespace-nowrap">
                    Profile Details
                  </div>
                </div>
              </div>
              <div className="w-[52px] rounded-lg box-border flex flex-col items-start justify-start py-[9px] px-[15px] border-[1px] border-solid border-purple">
                <Image
                  className="w-5 h-5 relative overflow-hidden shrink-0"
                  loading="lazy"
                  width={50}
                  height={50}
                  alt=""
                  src="/images/eye-img.svg"
                />
              </div>
            </div>
          </header>
          <main className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
            <section className="flex-1 rounded-xl bg-background overflow-hidden flex flex-col items-start justify-start pt-6 px-0 pb-4 box-border gap-[24px] max-w-full text-left text-2xl">
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-6 pb-4">
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                  <h3 className="m-0 self-stretch relative text-dark leading-[150%] font-bold">
                    Customize your links
                  </h3>
                  <div className="self-stretch relative text-base leading-[150%] text-gray400">
                    Add/edit/remove links below and then share all your profiles
                    with the world!
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-6">
                <button className="cursor-pointer py-[9px] px-5 bg-[transparent] flex-1 rounded-lg flex flex-row items-start justify-center border-[1px] border-solid border-purple500">
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative text-base leading-[150%] font-semibold text-purple500 text-left inline-block min-w-[108px]">
                      + Add new link
                    </div>
                  </div>
                </button>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 text-center">
                <div className="flex-1 rounded-xl bg-gray50 overflow-hidden flex flex-col items-end justify-start py-[46.5px] px-5 gap-[24px]">
                  <div className="self-stretch flex flex-row items-start justify-end py-0 px-[65px]">
                    <Image
                      className="h-20 flex-1 relative max-w-full overflow-hidden"
                      loading="lazy"
                      width={50}
                      height={50}
                      alt=""
                      src="/images/group273.svg"
                    />
                  </div>
                  <h3 className="m-0 self-stretch relative text-inherit leading-[150%] font-bold font-dark">
                    Let’s get you started
                  </h3>
                  <div className="self-stretch relative text-base leading-[150%] text-gray400">
                    Use the “Add new link” button to get started. Once you have
                    more than one link, you can reorder and edit them. We’re
                    here to help you share your profiles with everyone!
                  </div>
                </div>
              </div>
              <footer className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch h-px relative bg-gray50" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-4">
                  <button className="cursor-pointer [border:none] py-[11px] px-5 bg-purple300 flex-1 rounded-lg flex flex-row items-start justify-center opacity-[0.25]">
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
