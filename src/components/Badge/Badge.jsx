import clsx from "clsx";

export default function Badge({children, variant, size}) {
    return (
        <div className={clsx("badge", `badge-${variant}`, `badge-${size}` )}>
            {children}
        </div>
    )
}