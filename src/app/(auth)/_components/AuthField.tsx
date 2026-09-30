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
        className={`mb-2.5 block font-medium text-[#292C33] ${large ? "text-sm 2xl:text-lg" : "text-xs 2xl:text-sm"}`}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className={`w-full rounded-[14px] border border-[#D5D8DE] bg-white px-5 text-[#20232A] outline-none placeholder:text-[#9B9FA8] focus:border-[#003BE2] focus:ring-3 focus:ring-[#003BE2]/15 ${
          large
            ? "h-14 text-sm xl:text-base 2xl:h-[68px] 2xl:px-8 2xl:text-[22px]"
            : "h-[52px] text-xs 2xl:h-14 2xl:px-6 2xl:text-sm"
        } ${className}`}
        id={id}
        {...inputProps}
      />
    </div>
  );
}
