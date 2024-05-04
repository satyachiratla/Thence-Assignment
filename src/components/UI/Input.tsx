import { type ComponentPropsWithoutRef } from "react";
import { MdErrorOutline } from "react-icons/md";

type InputProps = {
  id: string;
  isError?: boolean;
  error?: string;
} & ComponentPropsWithoutRef<"input">;

export default function Input({ id, isError, error, ...props }: InputProps) {
  return (
    <p className="space-y-1">
      <input
        className="px-8 py-5 bg-[#EFEFEF] rounded-full w-80 max-w-lg"
        id={id}
        {...props}
      />
      {isError && (
        <span className="text-[#FF0808] text-sm flex items-center gap-1 pl-4">
          <MdErrorOutline size={18} className="text-[#FF0808]" />
          {error}
        </span>
      )}
    </p>
  );
}
