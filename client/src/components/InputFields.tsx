import type { NextPage } from "next";
import Image from "next/image";

export type InputFieldsType = {
  className?: string;
  createPassword?: string;
};

const InputFields: NextPage<InputFieldsType> = ({
  className = "",
  createPassword,
}) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full text-left text-xs text-dark font-Instrument_Sans">
      <div className="self-stretch relative leading-[150%]">
        {createPassword}
      </div>
      <div className="self-stretch rounded-lg bg-background border-gray200 box-border overflow-hidden flex flex-row flex-wrap items-start justify-start py-2.5 px-[15px] gap-[12px] max-w-full border-[1px] border-solid">
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
          className="w-[calc(100%_-_46px)] [border:none] [outline:none] text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-gray200 text-left inline-block min-w-[218px] max-w-full p-0"
          placeholder="At least 8 characters"
          type="text"
        />
      </div>
    </div>
  );
};

export default InputFields;
