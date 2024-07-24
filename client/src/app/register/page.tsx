import InputFields from "@/components/InputFields";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Register() {
  return (
    <div>
      <div className="hidden md:block">
        <div className="w-full relative bg-gray50 overflow-hidden flex flex-col items-center justify-start pt-[138px] px-5 pb-[137px] box-border gap-[51px] leading-[normal] tracking-[normal] text-left text-sm text-white font-inter mq675:gap-[25px]">
          <div className="w-[302px] rounded bg-gray hidden flex-row items-center justify-center py-5 px-8 box-border whitespace-nowrap">
            <div className="flex-1 relative tracking-[0.05em] leading-[140%] uppercase">
              tutustu koko tarinaamme
            </div>
          </div>
          <div className="w-[476px] flex flex-row items-start justify-center py-0 pr-0 pl-px box-border max-w-full">
            <div className="w-[182.5px] flex flex-row items-start justify-start gap-[7.5px]">
              <Image
                className="h-10 w-10 relative overflow-hidden shrink-0"
                loading="lazy"
                width={50}
                height={50}
                alt=""
                src="/images/solar_link-circle.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-[6.3px] px-0 pb-0">
                <Image
                  className="self-stretch h-[26.3px] w-[135px] relative max-w-full overflow-hidden shrink-0"
                  loading="lazy"
                  width={50}
                  height={50}
                  alt=""
                  src="/images/devlinks-logo.svg"
                />
              </div>
            </div>
          </div>
          <form className="m-0 w-[476px] rounded-xl bg-background overflow-hidden flex flex-col items-start justify-start p-10 box-border gap-[24px] max-w-full mq675:pt-[26px] mq675:pb-[26px] mq675:box-border">
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[8px]">
              <h1 className="m-0 self-stretch relative text-13xl leading-[150%] font-bold text-dark text-left mq450:text-lgi mq450:leading-[29px] mq750:text-7xl mq750:leading-[38px]">
                Create account
              </h1>
              <div className="self-stretch relative text-base leading-[150%] font-normal text-gray400 text-left">
                Let’s get you started sharing your links!
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
              <div className="self-stretch relative text-xs leading-[150%] font-normal text-dark text-left">
                Email address
              </div>
              <div className="self-stretch rounded-lg bg-background border-gray200 box-border overflow-hidden flex flex-row flex-wrap items-start justify-start py-2.5 px-[15px] gap-[12px] max-w-full border-[1px] border-solid">
                <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                  <Image
                    className="w-4 h-4 relative overflow-hidden shrink-0"
                    alt=""
                    width={50}
                    height={50}
                    src="/images/envelope-img.svg"
                  />
                </div>
                <input
                  className="w-[calc(100%_-_46px)] [border:none] [outline:none] font-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-darkslategray text-left inline-block min-w-[218px] max-w-full p-0"
                  placeholder="e.g. alex@email.com"
                  type="text"
                />
                <Image
                  className="h-1.5 w-3 relative hidden"
                  alt=""
                  width={50}
                  height={50}
                  src="/vector-1.svg"
                />
              </div>
            </div>
            <InputFields createPassword="Create password" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
              <InputFields createPassword="Confirm password" />
              <div className="self-stretch relative text-xs leading-[150%] font-normal text-gray400 text-left">
                Password must contain at least 8 characters
              </div>
              <button className="cursor-pointer [border:none] py-[11px] px-5 bg-purple500 self-stretch rounded-lg flex flex-row items-start justify-center whitespace-nowrap hover:bg-purple300">
                <div className="relative text-base leading-[150%] font-semibold text-background text-left">
                  Create new account
                </div>
              </button>
            </div>
            <div className="self-stretch relative text-base leading-[150%] font-normal text-center">
              <span className="text-gray400">{`Already have an account? `}</span>
              <Link href="/login">
                <span className="text-purple500">Login</span>
              </Link>
            </div>
          </form>
        </div>
      </div>

      <div className="flex md:hidden">
        <div className="w-full relative bg-background overflow-hidden flex flex-col items-start justify-start pt-8 pb-[126px] pr-0 pl-8 box-border font-Instrument_Sans gap-[64px] leading-[normal] tracking-[normal]">
          <div className="w-[202.5px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[7.5px]">
            <Image
              className="h-10 w-10 relative overflow-hidden shrink-0"
              loading="lazy"
              width={50}
              height={50}
              alt=""
              src="/images/solar_link-circle.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[6.3px] px-0 pb-0">
              <Image
                className="self-stretch h-[26.3px] w-[135px] relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                width={50}
                height={50}
                alt=""
                src="/images/devlinks-logo.svg"
              />
            </div>
          </div>
          <section className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full text-left">
            <div className="w-[331px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[8px] max-w-full">
              <h3 className="m-0 self-stretch relative leading-[150%] font-bold text-2xl">
                Create account
              </h3>
              <div className="self-stretch relative text-base leading-[150%] text-gray400">
                Let’s get you started sharing your links!
              </div>
            </div>
            <form className="m-0 w-[396px] flex flex-col items-start justify-start gap-[24px] max-w-[116%] shrink-0">
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                <div className="self-stretch relative text-xs leading-[150%] text-gray400">
                  Email address
                </div>
                <div className="w-[311px] rounded-lg bg-background border-gray200 box-border overflow-hidden flex flex-row items-start justify-start py-2.5 px-[15px] gap-[12px] border-[1px] border-solid">
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <Image
                      className="w-4 h-4 relative overflow-hidden shrink-0"
                      alt=""
                      width={50}
                      height={50}
                      src="/images/envelope-img.svg"
                    />
                  </div>
                  <input
                    className="w-[calc(100%_-_46px)] [border:none] [outline:none] font-body-m text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-darkslategray text-left inline-block min-w-[151px] p-0"
                    placeholder="e.g. alex@email.com"
                    type="text"
                  />
                  <Image
                    className="h-1.5 w-3 relative hidden"
                    alt=""
                    width={50}
                    height={50}
                    src="/vector-1.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-left text-xs">
                <div className="self-stretch relative leading-[150%]">
                  Create Pasword
                </div>
                <div className="w-[311px] rounded-lg bg-background border-gray200 box-border overflow-hidden flex flex-row items-start justify-start py-2.5 px-[15px] gap-[12px] border-[1px] border-solid">
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <Image
                      className="w-4 h-4 relative overflow-hidden shrink-0"
                      alt=""
                      width={50}
                      height={50}
                      src="/images/lock-key.svg"
                    />
                  </div>
                  <input
                    className="w-[calc(100%_-_46px)] [border:none] [outline:none] font-body-m text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-darkslategray text-left inline-block min-w-[151px] p-0"
                    placeholder="At least .8 characters"
                    type="text"
                  />
                </div>
              </div>{" "}
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-left text-xs">
                <div className="self-stretch relative leading-[150%]">
                  Confirm Password
                </div>
                <div className="w-[311px] rounded-lg bg-background border-gray200 box-border overflow-hidden flex flex-row items-start justify-start py-2.5 px-[15px] gap-[12px] border-[1px] border-solid">
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <Image
                      className="w-4 h-4 relative overflow-hidden shrink-0"
                      alt=""
                      width={50}
                      height={50}
                      src="/images/lock-key.svg"
                    />
                  </div>
                  <input
                    className="w-[calc(100%_-_46px)] [border:none] [outline:none] font-body-m text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-darkslategray text-left inline-block min-w-[151px] p-0"
                    placeholder="At least .8 characters"
                    type="text"
                  />
                </div>
              </div>{" "}
              <div className="w-[311px] relative text-xs leading-[150%] font-body-m text-grey text-left inline-block">
                Password must contain at least 8 characters
              </div>
              <button className="cursor-pointer [border:none] py-[11px] px-20 bg-purple500 rounded-lg flex flex-row items-start justify-start whitespace-nowrap">
                <div className="relative text-base leading-[150%] font-semibold text-background text-left">
                  Create new account
                </div>
              </button>
              <div className="w-[311px] relative text-base leading-[150%] font-body-m text-center inline-block">
                <p className="m-0 text-gray400">{`Already have an account? `}</p>
                <p className="m-0 text-purple500">Login</p>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
