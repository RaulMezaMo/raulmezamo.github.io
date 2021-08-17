import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="inherit"
      stroke="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8 7V1" stroke="inherit" fill="none" strokeLinecap="round" />
      <path d="M8 13l4-6H4l4 6z" stroke="inherit" fill="none" strokeLinejoin="round" />
      <path fill="inherit" stroke="none" d="M0 15H16V17H0z" />
    </svg>
  )
}

export default SvgComponent
