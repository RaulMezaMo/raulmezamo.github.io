import React from "react";
// import { useSpring, animated } from "react-spring";


function SvgComponent() {
  // window.addEventListener('mousemove', (evt) => {
  //   const x = -(window.innerWidth / 2 - evt.pageX) / 160;
  //   const y = -(window.innerHeight / 2 - evt.pageY) / 160;
  //   console.log(x, y);
  // });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={446}
      height={222}
      viewBox="0 0 446 222"
      id="blob_svg"
    >
      <defs>
        <clipPath id="a">
          <path
            d="M240.93 109.55c2.8-3.74 34.76-36.17 70.79-36.17 42.16 0 70.63 32.74 73.2 36.17-2.63 3.54-34.34 36.19-72 36.19s-69.36-32.65-71.99-36.19z"
            fill="none"
          />
        </clipPath>
        <clipPath id="b">
          <path
            d="M39 109.55s32.1 36.19 72 36.19c40.19 0 72-36.19 72-36.19s-31.85-36.18-72-36.18c-39.82 0-72 36.18-72 36.18z"
            fill="none"
          />
        </clipPath>
        <linearGradient id="colorful-gradient" x1="0" x2=".5" y1="0" y2="1">
          <stop offset="20%" stopColor="#FBF59B" />
          <stop offset="60%" stopColor="#A4EDDD" />
          <stop offset="100%" stopColor="#F572EF" />
        </linearGradient>
      </defs>
      <g data-name="Layer 2">
        <g>
          <g>
            <path
              d="M401.43 13.63c-46.75-34.35-92 12-201.2 14.07-93.46 1.74-127.76-31-164.16-.94C6.69 51-1.32 97.35 1.54 129.92 3 146.77 5.83 182.44 30.26 202.2c57 46.11 145.73-54.58 243.73-7.51 23.7 11.38 39.81 27.22 70 26.27 32.67-1 66.42-21 85.4-52.42 26.1-43.34 12.21-88.54 9.54-97.22-2.54-8.32-11.93-38.94-37.5-57.69z"
              fill="none"
              stroke="#f572ef"
              strokeMiterlimit={10}
              strokeWidth={2}
            />

            <g id="ojo-a" className="ojo">
              <g clipPath="url(#b)">
                <g className="pupila-a" data-name="pupila-a">
                  <path
                    d="M48.53 118.12c0-20.65 15.56-37.39 34.75-37.39S118 97.47 118 118.12s-15.56 37.39-34.75 37.39-34.75-16.74-34.75-37.39"
                    fill="url(#colorful-gradient)"
                  />
                  <path
                    d="M105.51 88s-.63 19.65-19.79 19.65c0 0 19.94.77 19.94 19.8 0 0-.39-19.84 20-19.84 0 0-20.13.19-20.13-19.61M58.83 107.39S58.2 127 39 127c0 0 19.94.77 19.94 19.79 0 0-.39-19.83 20-19.83 0 0-20.13.19-20.13-19.61"
                    fill="#fff"
                  />
                </g>
              </g>
              <path
                d="M39 109.55c2.8-3.74 34.76-36.17 70.79-36.17 42.17 0 70.64 32.74 73.2 36.17-2.63 3.54-34.34 36.19-72 36.19S41.67 113.09 39 109.55z"
                fill="none"
                stroke="#f572ef"
                strokeMiterlimit={10}
                strokeWidth={2}
              />
            </g>
            <g id="ojo-b" className="ojo">
              <g clipPath="url(#b)">
                <g className="pupila-a" data-name="pupila-a">
                  <path
                    d="M250.42 118.12c0-20.65 15.56-37.39 34.75-37.39s34.75 16.74 34.75 37.39-15.56 37.39-34.75 37.39-34.75-16.74-34.75-37.39"
                    fill="url(#colorful-gradient)"
                  />
                  <path
                    d="M307.4 88s-.63 19.65-19.79 19.65c0 0 19.94.77 19.94 19.8 0 0-.39-19.84 20-19.84 0 0-20.13.19-20.13-19.61M260.71 107.39S260.09 127 240.93 127c0 0 19.94.77 19.94 19.79 0 0-.39-19.83 20-19.83 0 0-20.14.19-20.14-19.61"
                    fill="#fff"
                  />
                </g>
              </g>
              <path
                d="M240.93 109.55c2.8-3.74 34.76-36.17 70.79-36.17 42.16 0 70.63 32.74 73.2 36.17-2.63 3.54-34.34 36.19-72 36.19s-69.36-32.65-71.99-36.19z"
                fill="none"
                stroke="#f572ef"
                strokeMiterlimit={10}
                strokeWidth={2}
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default SvgComponent
