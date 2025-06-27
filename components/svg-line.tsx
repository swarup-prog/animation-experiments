export function SvgLine() {
  return (
    <div className="h-screen flex justify-center items-center">
      <svg width="500" height="200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="lightblue" />
            <stop offset="100%" stop-color="lightyellow" />
          </linearGradient>
        </defs>
        {/* <path
          d="M0 100 C 125 0, 375 300, 500 100"
          stroke="url(#lineGradient)"
          stroke-width="20"
          stroke-linecap="round"
          fill="none"
        /> */}
        <path
          d="
      M 50 50 
      C 150 0, 150 100, 250 50
      S 350 0, 450 50
      C 550 100, 550 200, 450 250
      S 250 300, 50 250"
          stroke="url(#lineGradient)"
          stroke-width="20"
          stroke-linecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
