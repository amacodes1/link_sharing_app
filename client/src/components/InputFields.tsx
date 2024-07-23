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
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full text-left text-xs text-dark-grey font-body-m ${className}`}
    >
      <div className="self-stretch relative leading-[150%]">
        {createPassword}
      </div>
      <div className="self-stretch rounded-lg bg-white box-border overflow-hidden flex flex-row flex-wrap items-start justify-start py-2.5 px-[15px] gap-[12px] max-w-full border-[1px] border-solid border-borders">
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <Image
            className="w-4 h-4 relative overflow-hidden shrink-0"
            alt=""
            src="/phlockkeyfill.svg"
          />
        </div>
        <input
          className="w-[calc(100%_-_46px)] [border:none] [outline:none] font-body-m text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-darkslategray text-left inline-block min-w-[218px] max-w-full p-0"
          placeholder="At least 8 characters"
          type="text"
        />
      </div>
    </div>
  );
};

export default InputFields;
