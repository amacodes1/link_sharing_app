import type { NextPage } from "next";

export type InputLabelsType = {
  className?: string;
  firstName?: string;
  benPlaceholder?: string;
};

const InputLabel: NextPage<InputLabelsType> = ({
  className = "",
  firstName,
  benPlaceholder,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-center py-0 px-0 gap-[4px] text-left text-xs text-dark ${className}`}
    >
      <div className="w-[396px] relative leading-[150%] inline-block max-w-[156%] shrink-0">
        {firstName}
      </div>
      <div className="self-stretch rounded-lg bg-background border-gray200 overflow-hidden flex flex-row items-center justify-start py-2.5 px-[15px] border-[1px] border-solid">
        <input
          className="w-full [border:none] [outline:none] text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-gray-400 text-left inline-block min-w-[134px] p-0"
          placeholder={benPlaceholder}
          type="text"
        />
      </div>
    </div>
  );
};

export default InputLabel;
