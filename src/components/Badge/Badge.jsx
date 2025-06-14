import clsx from "clsx";

export default function Badge({children, variant = "default", size = "md"}) {
    return (
        <span className={clsx("badge", `badge-${variant}`, `badge-${size}` )}>
            {children}
        </span>
    )
}