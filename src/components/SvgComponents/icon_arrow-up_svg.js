import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={10}
      height={18}
      viewBox="0 0 10 18"
      fill="none"
      stroke="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 7v10" stroke="inherit" fill="none" strokeLinecap="round" />
      <path d="M5 1L1 7h8L5 1z" stroke="inherit" fill="none" strokeLinejoin="round" />
    </svg>
  )
}

export default SvgComponent
