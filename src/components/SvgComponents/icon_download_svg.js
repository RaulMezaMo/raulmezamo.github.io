import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8 7V1" stroke="#333" strokeLinecap="round" />
      <path d="M8 13l4-6H4l4 6z" stroke="#333" strokeLinejoin="round" />
      <path fill="#333" d="M0 15H16V17H0z" />
    </svg>
  )
}

export default SvgComponent
