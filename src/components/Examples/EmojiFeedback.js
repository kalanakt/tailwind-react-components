import { useState } from 'react'
import { BankIcon, UsbIcon } from '@vwjs/icons'
import { Button } from '../Button'

export function EmojiFeedback() {
  const [stars, setStars] = useState(0)
  const [feedbac, setFeedbac] = useState(false)
  const starfill = (num) => {
    if (num == stars) {
      return 'currentColor'
    } else return '#d4d4d8'
  }
  const feedback = () => {
    if (feedbac) {
      return (
        <div className="relative flex flex-col bg-gray-200 dark:bg-gray-800 bg-opacity-20 gap-3 p-4 rounded-md shadow-md justify-center items-center w-80">
          <svg
            aria-hidden="true"
            onClick={() => setFeedbac(false)}
            class="w-6 h-6 absolute top-1 right-1 justify-end pl- transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <span className="flex justify-center text-gray-900 dark:text-gray-100">
            Send Your feedback
          </span>
          <textarea className="w-full px-4 py-1 text-white dark:text-black pb-4 rounded-md bg-slate-700 dark:bg-slate-300 text-sm min-h-fit max-h-80"></textarea>
          <Button href="/">Send</Button>
        </div>
      )
    }
  }
  return (
    <div className="flex justify-center items-center border border-black/5 dark:border-white/5 flex-col gap-2 p-4 not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25">
      <div className="flex flex-row">
        <svg
          aria-hidden="true"
          onMouseEnter={() => setStars(1)}
          onMouseLeave={() => setStars(0)}
          onClick={() => setFeedbac(true)}
          fill={starfill(1)}
          class="w-6 h-6 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg
          aria-hidden="true"
          onClick={() => setFeedbac(true)}
          onMouseEnter={() => setStars(2)}
          onMouseLeave={() => setStars(0)}
          fill={starfill(2)}
          class="w-6 h-6 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg
          aria-hidden="true"
          onClick={() => setFeedbac(true)}
          onMouseEnter={() => setStars(3)}
          onMouseLeave={() => setStars(0)}
          fill={starfill(3)}
          class="w-6 h-6 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg
          aria-hidden="true"
          onClick={() => setFeedbac(true)}
          onMouseEnter={() => setStars(4)}
          onMouseLeave={() => setStars(0)}
          fill={starfill(4)}
          class="w-6 h-6 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg
          aria-hidden="true"
          onClick={() => setFeedbac(true)}
          onMouseEnter={() => setStars(5)}
          onMouseLeave={() => setStars(0)}
          fill={starfill(5)}
          class="w-6 h-6 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      </div>
      {feedback()}
    </div>
  )
}
