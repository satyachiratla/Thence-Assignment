import type { ComponentPropsWithoutRef, ElementType } from "react";

type ButtonProps = {
  children: React.ReactNode;
  icon?: ElementType;
  styleName: "primary" | "secondary";
} & ComponentPropsWithoutRef<"button">;

export default function Button({
  children,
  icon: Icon,
  styleName,
  ...otherProps
}: ButtonProps) {
  const styles =
    styleName === "primary"
      ? "bg-[#1C1C1C] hover:bg-[#4E4E4E] text-white"
      : "bg-[#F1F1F1] hover:bg-[#EAEAEA] text-black";
  return (
    <button
      className={`${styles} px-6 py-3 rounded-full ${
        Icon ? "flex gap-3 items-center" : ""
      }`}
      {...otherProps}
    >
      {children}
      <span>{Icon && <Icon />}</span>
    </button>
  );
}
