import React from 'react'

type Props = {}

const HumanIcon = (props: Props) => {
  return (
    <span className="inline-block">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
        className="h-[38px] w-[38px]"
      >
        <path
          className="opacity-80"
          d="M16.2 4.7l.7-1.2c0 0 0 0 0 0C17.1 3 17 2.4 16.5 2.1 16 1.9 15.4 2 15.1 2.5l-.6 1.1C15.1 3.8 15.7 4.2 16.2 4.7zM7.8 4.7c.5-.5 1-.8 1.7-1.1L8.9 2.5c0 0 0 0 0 0C8.6 2 8 1.9 7.5 2.1S6.9 3 7.1 3.5L7.8 4.7z"
        ></path>
        <rect width="12" height="2" x="6" y="9" className="opacity-80"></rect>
        <g>
          <path
            className="opacity-50"
            d="M12 3C8.7 3 6 5.7 6 9h12C18 5.7 15.3 3 12 3zM21 9c-.6 0-1 .4-1 1v4c0 0 0 0 0 0 0 .6.4 1 1 1 0 0 0 0 0 0 .6 0 1-.4 1-1v-4C22 9.4 21.6 9 21 9zM3 9c-.6 0-1 .4-1 1v4c0 0 0 0 0 0 0 .6.4 1 1 1 0 0 0 0 0 0 .6 0 1-.4 1-1v-4C4 9.4 3.6 9 3 9zM6 17C6 17 6 17 6 17c0 .6.4 1 1 1h2v3c0 0 0 0 0 0 0 .6.4 1 1 1 0 0 0 0 0 0 .6 0 1-.4 1-1v-3h2v3c0 0 0 0 0 0 0 .6.4 1 1 1 0 0 0 0 0 0 .6 0 1-.4 1-1v-3h2c0 0 0 0 0 0 .6 0 1-.4 1-1v-6H6V17z"
          ></path>
        </g>
      </svg>
    </span>
  );
}

export default HumanIcon