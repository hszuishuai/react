import React from "react";

export default function SvgIcon({ type, ...restProps }: any) {
    return (
        <svg {...restProps}>
            <use xlinkHref={`#${type.default.id}`} />
        </svg>
    );
}
