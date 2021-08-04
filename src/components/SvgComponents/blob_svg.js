import * as React from "react"

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={370} height={182} {...props}>
      <path
        d="M332.89 11.33c-38.75-28.1-76.23 9.85-166.76 11.51-77.47 1.43-105.9-25.33-136.06-.76C5.72 41.9-.92 79.83 1.45 106.48c1.22 13.79 3.56 43 23.8 59.14 47.26 37.72 120.79-44.65 202-6.14 19.64 9.31 33 22.27 58 21.49 27.07-.85 55.05-17.15 70.78-42.89 21.66-35.46 10.15-72.45 7.94-79.55-2.11-6.77-9.92-31.86-31.08-47.2z"
        fill="#fff"
        stroke="#f572ef"
        strokeMiterlimit={10}
        strokeWidth={2}
        data-name="Layer 2"
      />
    </svg>
  )
}

export default SvgComponent
