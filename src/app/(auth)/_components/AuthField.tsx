import type { ComponentProps } from "react";

type AuthFieldProps = Omit<ComponentProps<"input">, "id"> & {
  readonly id: string;
  readonly label: string;
  readonly large?: boolean;
};

export default function AuthField({
  id,
  label,
  large = false,
  className = "",
  ...inputProps
}: AuthFieldProps) {
  return (
    <div>
      <label
        className={`block font-medium text-[#292C33] ${
          large
            ? "mb-[clamp(4px,0.8vh,10px)] text-[clamp(11px,1.25vh,14px)] 2xl:text-[clamp(13px,1.4vh,18px)]"
            : "mb-2.5 text-xs 2xl:text-sm"
        }`}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className={`w-full rounded-[14px] border border-[#D5D8DE] bg-white px-5 text-[#20232A] outline-none placeholder:text-[#9B9FA8] focus:border-[#003BE2] focus:ring-3 focus:ring-[#003BE2]/15 ${
          large
            ? "h-10 text-[clamp(12px,1.4vh,16px)] lg:h-[clamp(36px,5.2vh,56px)] 2xl:h-[clamp(52px,5vh,68px)] 2xl:px-8 2xl:text-[clamp(16px,1.65vh,22px)]"
            : "h-[52px] text-xs 2xl:h-14 2xl:px-6 2xl:text-sm"
        } ${className}`}
        id={id}
        {...inputProps}
      />
    </div>
  );
}
