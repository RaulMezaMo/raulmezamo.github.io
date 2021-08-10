import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={40}
        height={40}
      >
        <path
          d="M39.5 20c0 10.77-8.73 19.5-19.5 19.5S.5 30.77.5 20 9.23.5 20 .5 39.5 9.23 39.5 20z"
          fill="#fff"
          stroke="#F572EF"
          strokeMiterlimit={10}
        />
      </mask>
      <g mask="url(#a)" stroke="#F572EF">
        <g filter="url(#filter0_f)">
          <circle
            cx={-36.4995}
            cy={15.5}
            r={58.5}
            transform="rotate(-90 -36.5 15.5)"
            fill="url(#paint0_radial)"
          />
          <circle
            cx={-0.499512}
            cy={5.5}
            r={51.5}
            transform="rotate(-90 -.5 5.5)"
            fill="url(#paint1_radial)"
          />
          <circle
            cx={8.00049}
            cy={60}
            r={60}
            transform="rotate(-90 8 60)"
            fill="url(#paint2_radial)"
          />
          <circle
            cx={87.0005}
            cy={46}
            r={49}
            transform="rotate(-90 87 46)"
            fill="url(#paint3_radial)"
          />
          <circle
            cx={44.5005}
            cy={2.5}
            r={54.5}
            transform="rotate(-90 44.5 2.5)"
            fill="url(#paint4_radial)"
          />
          <circle
            cx={83.0005}
            cy={-19}
            r={53}
            transform="rotate(-90 83 -19)"
            fill="url(#paint5_radial)"
          />
        </g>
        <path
          d="M25.834 14.546v6.818M15.834 14.546v6.818M34.924 20.455c-2.798 3.574-8.059 6.363-14.09 6.363-6.033 0-11.294-2.789-14.092-6.363"
          strokeMiterlimit={10}
          strokeLinecap="round"
        />
        <path
          d="M20.834 16.818l4.09 6.818h-4.09M18.106 14.546L10.833 10M23.56 14.546L30.834 10M26.288 26.088l4.462 3.457.084-5M17.197 26.642l-.921 2.387c-.545 1.422-2.038 2.211-3.383 1.747-1.345-.46-1.953-1.967-1.403-3.39L12.411 25M14.015 28.636l-.909 2.273"
          strokeMiterlimit={10}
          strokeLinecap="round"
        />
        <path
          d="M39.5 20c0 10.77-8.73 19.5-19.5 19.5S.5 30.77.5 20 9.23.5 20 .5 39.5 9.23 39.5 20z"
          strokeMiterlimit={10}
        />
      </g>
      <defs>
        <filter
          id="filter0_f"
          x={-119.5}
          y={-96.5}
          width={280}
          height={241}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation={12} result="effect1_foregroundBlur" />
        </filter>
        <radialGradient
          id="paint0_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 -26 -10.5) scale(58.5)"
        >
          <stop offset={0.395833} stopColor="#FBF59B" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id="paint1_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 -3 2.5) scale(51.5)"
        >
          <stop offset={0.395833} stopColor="#F572EF" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id="paint2_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 60 -60 0 8 60)"
        >
          <stop offset={0.395833} stopColor="#A4EDDD" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id="paint3_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 49 -49 0 87 46)"
        >
          <stop offset={0.395833} stopColor="#F572EF" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id="paint4_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 21 23.5) scale(54.5)"
        >
          <stop offset={0.395833} stopColor="#FBF59B" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id="paint5_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 53 -53 0 83 -19)"
        >
          <stop offset={0.395833} stopColor="#A4EDDD" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}

export default SvgComponent
