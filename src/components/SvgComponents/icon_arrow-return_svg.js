import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={24}
      height={16}
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 5h15a1 1 0 011 1v8.5a1 1 0 01-1 1h-4.333"
        stroke="#000"
        strokeLinecap="round"
      />
      <path
        d="M.688 4.61a.5.5 0 000 .78l5 4A.5.5 0 006.5 9V1a.5.5 0 00-.812-.39l-5 4z"
        stroke="#000"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SvgComponent
