import * as React from 'react'

export default function NextJsLogoWhite() {
  return (
    <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="a"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="7"
        y="7"
        width="26"
        height="26"
      >
        <path
          d="M20 33c7.18 0 13-5.82 13-13S27.18 7 20 7 7 12.82 7 20s5.82 13 13 13Z"
          fill="#000"
        />
      </mask>
      <g mask="url(#a)">
        <path
          d="M20 32.567c6.94 0 12.567-5.627 12.567-12.567S26.94 7.433 20 7.433 7.433 13.06 7.433 20 13.06 32.567 20 32.567Z"
          fill="#000"
          stroke="#fff"
          stroke-width=".867"
        />
        <path
          d="M28.596 29.753 16.987 14.8H14.8v10.396h1.75v-8.174l10.672 13.789c.482-.322.94-.676 1.374-1.058Z"
          fill="url(#b)"
        />
        <path d="M25.344 14.8h-1.733v10.4h1.733V14.8Z" fill="url(#c)" />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1="22.744"
          y1="23.828"
          x2="27.872"
          y2="30.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="24.478"
          y1="14.8"
          x2="24.449"
          y2="22.438"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
