import { Button } from "../ui/moving-border";
export default function ActiveButton({
  text,
  onClick,
  children,
  disabled,
  outline = false,
  customClasses,
  type,
}) {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`flex items-center border-neutral-200 ${
        outline ? "border border-yellow-50 bg-transparent" : "bg-yellow-50"
      } cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900 bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 ${customClasses}`}
    >
      {children ? (
        <>
          <span className={`${outline && "text-yellow-50"}`}>{text}</span>
          {children}
        </>
      ) : (
        text
      )}
    </Button>
  );
}