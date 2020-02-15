import React from 'react'
import header2 from "../../../assets/img/abstract1.svg";
import header3 from "../../../assets/img/abstract2.jpg";

const HeaderSvg1 = props => (
    <svg width={337} height={222} {...props}>
        <defs>
            <linearGradient x1="50%" y1="55.434%" x2="50%" y2="5%" id="prefix__a">
                <stop stopColor="#E0E1FE" stopOpacity={0} offset="0%" />
                <stop stopColor="#E0E1FE" offset="100%" />
            </linearGradient>
        </defs>
        <path
            d="M1103.21 0H1440v400h-400c145.927-118.557 166.997-251.89 63.21-400z"
            transform="translate(-1103)"
            fill="url(#prefix__a)"
            fillRule="evenodd"
        />
    </svg>
);

export {HeaderSvg1, header2, header3}
