import InputLabel from "@/components/InputLabel";
import Image from "next/image";
import React from "react";

export default function ProfileDetails() {
  return (
    <div>
      <div className="hidden md:flex">
        <div className="w-full relative bg-gray50 overflow-hidden flex flex-col items-start justify-start p-6 box-border gap-[24px] leading-[normal] tracking-[normal] text-left text-sm font-Instrument_Sans">
          {/* Header */}
          <header className="self-stretch rounded-xl bg-background overflow-hidden flex flex-row items-start justify-start py-4 pr-4 pl-6 box-border top-[0] z-[99] sticky max-w-full text-left text-base">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
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
                      className="self-stretch h-[21px] w-[108px] relative max-w-full overflow-hidden shrink-0"
                      loading="lazy"
                      width={50}
                      height={50}
                      alt=""
                      src="/images/devlinks-logo.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[16px] max-w-full">
                <div className="rounded-lg flex flex-row items-start justify-start py-[11px] px-[27px] gap-[8px]">
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <Image
                      className="w-5 h-5 relative text-dark overflow-hidden shrink-0"
                      loading="lazy"
                      width={50}
                      height={50}
                      alt=""
                      src="/images/link-black.svg"
                    />
                  </div>
                  <div className="relative leading-[150%] font-semibold inline-block min-w-[40px]">
                    Links
                  </div>
                </div>
                <button className="cursor-pointer [border:none] py-[11px] px-[27px] bg-purple100 rounded-lg flex flex-row items-start justify-start gap-[8px]">
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <Image
                      className="w-5 h-5 text-purple500 relative overflow-hidden shrink-0"
                      alt=""
                      width={50}
                      height={50}
                      src="/images/user-circle-purple.svg"
                    />
                  </div>
                  <div className="relative text-base leading-[150%] font-semibold text-purple500 text-left inline-block min-w-[105px] whitespace-nowrap">
                    Profile Details
                  </div>
                </button>
              </div>
              <button className="cursor-pointer py-[9px] px-[26px] bg-[transparent] rounded-lg flex flex-row items-start justify-start border-[1px] border-solid border-purple500">
                <div className="flex flex-row items-start justify-start">
                  <div className="relative text-base leading-[150%] font-semibold text-purple500 text-left inline-block min-w-[60px]">
                    Preview
                  </div>
                </div>
              </button>
            </div>
          </header>

          {/* Body */}
          <main className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full text-left text-base mq1125:flex-wrap">
            <div className="hidden lg:flex h-[834px] w-[560px] relative rounded-xl bg-background overflow-hidden shrink-0 min-w-[560px] max-w-full mq1125:flex-1 mq750:min-w-full">
              <Image
                className="absolute top-[101.5px] left-[126.5px] w-[307px] h-[631px]"
                alt=""
                width={50}
                height={50}
                src="/images/phone-outer2.svg"
              />
              <div className="absolute top-[111.5px] left-[137.5px] w-[285px] flex flex-col items-start justify-start pt-[174.5px] px-[23px] pb-[171.5px] box-border gap-[56px] text-left text-xs text-background">
                <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                  <Image
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                    alt=""
                    width={50}
                    height={50}
                    src="/images/phone-inner.svg"
                  />
                  <div className="absolute top-[53.5px] left-[94px] rounded-[50%] bg-gray300 w-24 h-24 z-[2]" />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-10 pl-[38px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[13px] z-[2]">
                    <div className="self-stretch h-4 relative rounded-2xl bg-gray300" />
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-11">
                      <div className="h-2 flex-1 relative rounded-2xl bg-gray300" />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[20px] z-[2]">
                  <div className="self-stretch rounded-lg bg-dark flex flex-row items-start justify-start py-[13px] px-4 gap-[8px]">
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <Image
                        className="w-4 h-4 relative overflow-hidden shrink-0"
                        alt=""
                        width={50}
                        height={50}
                        src="/images/github-logo.svg"
                      />
                    </div>
                    <input
                      className="w-[calc(100%_-_64px)] [border:none] [outline:none] text-xs bg-[transparent] h-[18px] flex-1 relative leading-[150%] text-background text-left inline-block min-w-[94px] p-0"
                      placeholder="GitHub"
                      type="text"
                    />
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <Image
                        className="w-4 h-4 relative overflow-hidden shrink-0"
                        alt=""
                        width={50}
                        height={50}
                        src="/images/mdi_arrow-right.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch rounded-lg bg-red400 overflow-x-auto flex flex-row items-start justify-start py-[13px] px-4 gap-[8px]">
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <Image
                        className="w-4 h-4 relative overflow-hidden shrink-0"
                        alt=""
                        width={50}
                        height={50}
                        src="/images/youtube-logo.svg"
                      />
                    </div>
                    <div className="flex-1 relative leading-[150%]">
                      YouTube
                    </div>
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <Image
                        className="w-4 h-4 relative overflow-hidden shrink-0"
                        alt=""
                        width={50}
                        height={50}
                        src="/images/mdi_arrow-right.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch rounded-lg bg-blue500 overflow-x-auto flex flex-row items-start justify-start py-[13px] px-4 gap-[8px]">
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <Image
                        className="w-4 h-4 relative overflow-hidden shrink-0"
                        alt=""
                        width={50}
                        height={50}
                        src="/images/linkedin-logo.svg"
                      />
                    </div>
                    <div className="flex-1 relative leading-[150%]">
                      LinkedIn
                    </div>
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <Image
                        className="w-4 h-4 relative overflow-hidden shrink-0"
                        alt=""
                        width={50}
                        height={50}
                        src="/images/mdi_arrow-right.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="flex-1 rounded-xl bg-background overflow-hidden flex flex-col items-start justify-start pt-10 px-0 pb-6 box-border gap-[114px] min-w-[525px] max-w-full mq750:min-w-full mq450:gap-[28px] mq450:pt-5 mq450:box-border mq1050:gap-[57px] mq1050:pt-[26px] mq1050:pb-5 mq1050:box-border">
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-10 box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full mq1125:flex-1">
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[8px] text-3xl">
                    <h1 className="m-0 self-stretch relative text-dark leading-[150%] font-bold mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
                      Profile Details
                    </h1>
                    <div className="self-stretch relative text-base leading-[150%] text-gray400">
                      Add your details to create a personal touch to your
                      profile.
                    </div>
                  </div>
                  <div className="self-stretch rounded-xl bg-gray50 overflow-hidden flex flex-row items-start justify-start p-5 gap-[16px] mq750:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start pt-[84.5px] px-0 pb-0 box-border min-w-[156px]">
                      <div className="self-stretch text-gray400 relative leading-[150%]">
                        Profile picture
                      </div>
                    </div>
                    <div className="h-[193px] w-[193px] relative rounded-xl bg-purple300 overflow-hidden shrink-0 hidden text-tomato">
                      <div className="absolute top-[61px] left-[42px] flex flex-col items-center justify-start gap-[8px]">
                        <Image
                          className="w-10 h-10 relative overflow-hidden shrink-0"
                          alt=""
                          width={50}
                          height={50}
                          src="/images/ph_image.svg"
                        />
                        <div className="self-stretch h-6 relative leading-[150%] font-semibold inline-block">
                          Change Image
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0 text-purple500">
                      <div className="rounded-xl bg-purple100 overflow-hidden flex flex-col items-start justify-start pt-[61px] pb-[60px] pr-[38px] pl-[39px] gap-[8px]">
                        <div className="flex flex-row items-start justify-start py-0 px-[38px]">
                          <Image
                            className="h-10 w-10 relative overflow-hidden shrink-0"
                            alt=""
                            width={50}
                            height={50}
                            src="/images/ph_image.svg"
                          />
                        </div>
                        <div className="relative leading-[150%] font-semibold inline-block min-w-[116px]">
                          + Upload Image
                        </div>
                      </div>
                    </div>
                    <div className="w-[215px] flex flex-col items-start justify-start pt-[78.5px] px-0 pb-0 box-border text-xs">
                      <div className="self-stretch relative text-gray400 leading-[150%]">
                        Image must be below 1024x1024px. Use PNG or JPG format.
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-xl bg-gray50 text-gray400 overflow-hidden flex flex-col items-center justify-center p-5 box-border gap-[12px] max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[16px] max-w-full mq750:flex-wrap">
                      <div className="w-60 relative leading-[150%] inline-block shrink-0">
                        First name*
                      </div>
                      <div className="flex-1 rounded-lg bg-background border-gray200 box-border overflow-hidden flex flex-row items-center justify-start py-2.5 px-[15px] min-w-[281px] max-w-full border-[1px] border-solid">
                        <input
                          className="w-full [border:none] [outline:none] text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-left inline-block min-w-[240px] max-w-full p-0"
                          placeholder="e.g. John"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[16px] max-w-full mq750:flex-wrap">
                      <div className="w-60 relative leading-[150%] inline-block shrink-0">
                        Last name*
                      </div>
                      <div className="flex-1 rounded-lg bg-background border-gray200 box-border overflow-hidden flex flex-row items-center justify-start py-2.5 px-[15px] min-w-[281px] max-w-full border-[1px] border-solid">
                        <input
                          className="w-full [border:none] [outline:none] text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-left inline-block min-w-[240px] max-w-full p-0"
                          placeholder="e.g. Appleseed"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[16px] max-w-full mq750:flex-wrap">
                      <div className="w-60 relative leading-[150%] inline-block shrink-0">
                        Email
                      </div>
                      <div className="flex-1 rounded-lg bg-background border-gray200 box-border overflow-hidden flex flex-row items-center justify-start py-2.5 px-[15px] min-w-[281px] max-w-full border-[1px] border-solid">
                        <input
                          className="w-full [border:none] [outline:none] text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-left inline-block min-w-[240px] max-w-full p-0"
                          placeholder="e.g. email@example.com"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-end justify-start gap-[24px]">
                <div className="self-stretch h-px relative bg-gray200" />
                <div className="flex flex-row items-start justify-end py-0 px-10">
                  <button className="cursor-pointer [border:none] py-[11px] px-[27px] bg-purple500 rounded-lg flex flex-row items-start justify-start hover:bg-purple300">
                    <div className="relative text-base leading-[150%] font-semibold text-background text-left inline-block min-w-[37px]">
                      Save
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </main>
          <div className="w-[302px] rounded-93xl bg-gray50 hidden flex-row items-center justify-center py-5 px-8 box-border whitespace-nowrap">
            <div className="self-stretch flex-1 relative tracking-[0.05em] leading-[140%] uppercase"></div>
          </div>
        </div>
      </div>

      <div className="flex md:hidden">
        <div className="w-full relative bg-gray50 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[94px] box-border gap-[16px] leading-[normal] tracking-[normal]">
          <header className="self-stretch rounded-xl bg-background overflow-hidden flex flex-col items-start justify-start py-4 pr-4 pl-6 text-left text-base">
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
              <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0">
                <Image
                  className="h-8 w-8 relative"
                  loading="lazy"
                  width={50}
                  height={50}
                  alt=""
                  src="/images/solar_link-circle.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="rounded-lg flex flex-row items-center justify-start py-[11px] px-[27px] gap-[8px]">
                  <div className="w-[105px] relative leading-[150%] font-semibold hidden whitespace-nowrap">
                    Profile Details
                  </div>
                  <Image
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    loading="lazy"
                    width={50}
                    height={50}
                    alt=""
                    src="/images/link-black.svg"
                  />
                </div>
                <div className="rounded-lg bg-purple100 flex flex-row items-center justify-start py-[11px] px-[27px] gap-[8px] text-purple">
                  <div className="w-10 relative leading-[150%] font-semibold hidden">
                    Links
                  </div>
                  <Image
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    loading="lazy"
                    width={50}
                    height={50}
                    alt=""
                    src="/images/user-circle-purple.svg"
                  />
                </div>
              </div>
              <div className="w-[52px] rounded-lg box-border flex flex-col items-start justify-start py-[9px] px-[15px] border-[1px] border-solid border-purple500">
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
            <form className="m-0 flex-1 rounded-xl bg-background overflow-hidden flex flex-col items-start justify-start pt-6 px-0 pb-4 box-border gap-[24px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-6 pb-4">
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                  <h3 className="m-0 self-stretch relative text-2xl leading-[150%] font-bold text-dark text-left">
                    Profile Details
                  </h3>
                  <div className="self-stretch relative text-base leading-[150%] text-gray400 text-left">
                    Add your details to create a personal touch to your profile.
                  </div>
                </div>
              </div>
              {/* Picture Container */}
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 text-left text-base">
                <div className="flex-1 rounded-xl bg-gray50 overflow-hidden flex flex-col items-start justify-start p-5 gap-[24px]">
                  <div className="w-[193px] h-[193px] relative rounded-xl bg-purple100 overflow-hidden shrink-0 hidden text-red400">
                    <div className="absolute top-[61px] left-[42px] flex flex-col items-center justify-start gap-[8px]">
                      <Image
                        className="w-10 h-10 relative overflow-hidden shrink-0"
                        alt=""
                        width={50}
                        height={50}
                        src="/images/ph_image.svg"
                      />
                      <div className="self-stretch h-6 relative leading-[150%] font-semibold inline-block">
                        Change Image
                      </div>
                    </div>
                  </div>
                  <div className="w-60 flex flex-col items-start justify-start gap-[16px]">
                    <div className="self-stretch relative text-gray400 leading-[150%]">
                      Profile picture
                    </div>
                    <div className="rounded-xl bg-purple100 overflow-hidden flex flex-col items-start justify-start pt-[61px] pb-[60px] pr-[38px] pl-[39px] gap-[8px] text-purple500">
                      <div className="flex flex-row items-start justify-start py-0 px-[38px]">
                        <Image
                          className="h-10 w-10 relative overflow-hidden shrink-0"
                          loading="lazy"
                          width={50}
                          height={50}
                          alt=""
                          src="/images/ph_image.svg"
                        />
                      </div>
                      <div className="relative leading-[150%] font-semibold inline-block min-w-[116px]">
                        + Upload Image
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative text-xs text-gray400 leading-[150%]">
                    Image must be below 1024x1024px. Use PNG or JPG format.
                  </div>
                </div>
              </div>
              {/* Input Container */}
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 text-left text-xs">
                <div className="flex-1 rounded-xl bg-gray50 overflow-hidden flex flex-col items-center justify-center p-5 gap-[12px]">
                  <InputLabel firstName="First name*" benPlaceholder="Ben" />
                  <InputLabel firstName="Last name*" benPlaceholder="Wright" />
                  <InputLabel
                    firstName="Email"
                    benPlaceholder="ben@example.com"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch h-px relative bg-gray200" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-4">
                  <button className="cursor-pointer [border:none] py-[11px] px-5 bg-purple500 hover:bg-purple300 flex-1 rounded-lg flex flex-row items-start justify-center">
                    <div className="relative text-base leading-[150%] font-semibold text-background text-left inline-block min-w-[37px]">
                      Save
                    </div>
                  </button>
                </div>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}
