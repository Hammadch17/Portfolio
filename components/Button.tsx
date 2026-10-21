import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

type CommonProps = {
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
};

type LinkProps = CommonProps & {
  href: string;
};

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

const base =
  "inline-flex items-center justify-center rounded-[10px] px-6 py-3.5 text-base font-semibold leading-none transition-colors duration-150 ease-out disabled:opacity-60 disabled:cursor-not-allowed";

const variants = {
  primary: "bg-accent text-accent-text hover:bg-accent-hover",
  secondary:
    "bg-transparent text-text border border-text hover:bg-text hover:text-bg",
};

export function Button(props: LinkProps | NativeButtonProps) {
  const { variant = "primary", className = "", children, href, ...rest } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
