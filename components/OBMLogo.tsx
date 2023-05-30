export default function OBMLogo({ className }: { className?: string }): JSX.Element {
  return (
    <svg width='512' height='512' viewBox='0 0 512 512' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M484.843 370.872C440.306 408.392 382.793 431 320 431C178.615 431 64 316.385 64 175C64 133.694 73.7826 94.6735 91.1574 60.128C135.694 22.6079 193.207 0 256 0C397.385 0 512 114.615 512 256C512 297.306 502.217 336.327 484.843 370.872ZM36.4558 124.258C13.3108 162.745 0 207.818 0 256C0 397.385 114.615 512 256 512C325.572 512 388.662 484.247 434.803 439.209C399.63 454.513 360.806 463 320 463C160.942 463 32 334.058 32 175C32 157.687 33.5277 140.73 36.4558 124.258Z'
        fill='url(#paint0_linear_1_6)'
      />
      <defs>
        <linearGradient id='paint0_linear_1_6' x1='256' y1='0' x2='256' y2='512' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#06B6D4' />
          <stop offset='1' stopColor='#155E75' />
        </linearGradient>
      </defs>
    </svg>
  );
}
