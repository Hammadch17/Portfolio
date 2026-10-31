import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

type CommonProps = {
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
  withArrow?: boolean;
};

type LinkProps = CommonProps & {
  href: string;
};

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold leading-none transition-colors duration-150 ease-out disabled:opacity-60 disabled:cursor-not-allowed";

const variants = {
  primary: "bg-accent text-accent-text hover:bg-white hover:text-bg",
  secondary:
    "bg-transparent text-text border border-border hover:border-text",
};

export function Button(props: LinkProps | NativeButtonProps) {
  const {
    variant = "primary",
    className = "",
    children,
    href,
    withArrow,
    ...rest
  } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {withArrow && <ArrowRight size={18} aria-hidden />}
    </>
  );

  if (href) {
    const external = /^https?:\/\//.test(href);
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
