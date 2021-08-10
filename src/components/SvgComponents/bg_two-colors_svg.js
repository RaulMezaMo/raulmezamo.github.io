import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={544}
      height={120}
      viewBox="0 0 544 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity={0.7} filter="url(#filter0_f)">
        <ellipse cx={94} cy={-63} rx={177} ry={152} fill="#F572EF" />
        <ellipse cx={490.5} cy={211.5} rx={219.5} ry={211.5} fill="#FBF59B" />
      </g>
      <defs>
        <filter
          id="filter0_f"
          x={-123}
          y={-255}
          width={873}
          height={718}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation={20} result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  )
}

export default SvgComponent
