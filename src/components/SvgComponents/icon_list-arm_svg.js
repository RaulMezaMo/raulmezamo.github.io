import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={32}
      height={52}
      viewBox="0 0 32 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 0v46a2 2 0 002 2h22.219" stroke="#333" />
      <path
        d="M31.5 48c0 1.948-1.526 3.5-3.375 3.5-1.85 0-3.375-1.552-3.375-3.5s1.526-3.5 3.375-3.5c1.85 0 3.375 1.552 3.375 3.5z"
        stroke="#333"
      />
    </svg>
  )
}

export default SvgComponent
