import clsx from "clsx";

export default function Card({title, icon, cta, children}) {
    return (
        <div className="card">
            <div className="card-icon">
                {icon}
            </div>
            <h2 className="card-title">
                {title}
            </h2>
            {cta && <button className="card-cta">
                {cta}
            </button>}
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}