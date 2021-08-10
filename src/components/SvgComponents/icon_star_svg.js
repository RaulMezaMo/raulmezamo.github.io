import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={56}
      height={56}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 28c8.25 0 20-7 20-20 0 13 11.5 20 20 20-8.5 0-20 7.5-20 20 0-12.5-11.75-20-20-20z"
        fill="#fff"
        stroke="#333"
      />
    </svg>
  )
}

export default SvgComponent
