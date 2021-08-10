import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 32c13.2 0 32-11.2 32-32 0 20.8 18.4 32 32 32-13.6 0-32 12-32 32 0-20-18.8-32-32-32z"
        fill="#fff"
        stroke="#333"
      />
      <path
        d="M10.382 54.127c9.023-9.022 14.217-29.528 0-43.745 14.217 14.217 34.45 9.296 43.745 0-9.295 9.296-13.67 30.075 0 43.745-13.67-13.67-34.722-9.022-43.745 0z"
        fill="#fff"
        stroke="#333"
      />
    </svg>
  )
}

export default SvgComponent
