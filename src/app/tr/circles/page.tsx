"use client"

export default function AnimatedHalfCircles() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-900 py-9">
      <svg className="absolute -top-96" width="1067" height="1050" viewBox="0 0 1067 1050" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="533.5" cy="516.5" r="487" stroke="url(#paint0_linear_133_105)" strokeDasharray="12 12" />
        <circle cx="533.5" cy="508.5" r="451" stroke="url(#paint1_linear_133_105)" strokeDasharray="12 12" />
        <circle cx="534" cy="516" r="405.5" stroke="url(#paint2_linear_133_105)" strokeDasharray="12 12" />
        <circle cx="533.5" cy="516.5" r="533" stroke="url(#paint3_linear_133_105)" strokeDasharray="12 12" />

        {/* Animated circles */}
        <circle r="8" fill="#A972D9" opacity="0.8">
          <animateMotion dur="10s" repeatCount="indefinite" path="M1020.5,516.5 A487,487 0 1,1 46.5,516.5" />
        </circle>
        <circle r="8" fill="#A972D9" opacity="0.8">
          <animateMotion dur="9s" repeatCount="indefinite" path="M984.5,508.5 A451,451 0 1,1 82.5,508.5" />
        </circle>
        <circle r="8" fill="#A972D9" opacity="0.8">
          <animateMotion dur="8s" repeatCount="indefinite" path="M939.5,516 A405.5,405.5 0 1,1 128.5,516" />
        </circle>
        <circle r="8" fill="#A972D9" opacity="0.8">
          <animateMotion dur="11s" repeatCount="indefinite" path="M1066.5,516.5 A533,533 0 1,1 0.5,516.5" />
        </circle>

        <defs>
          <linearGradient
            id="paint0_linear_133_105"
            x1="533.5"
            y1="29"
            x2="533.5"
            y2="1004"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.545" stopColor="#A972D9" stopOpacity="0" />
            <stop offset="1" stopColor="#593C73" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_133_105"
            x1="533.5"
            y1="57"
            x2="533.5"
            y2="960"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.545" stopColor="#A972D9" stopOpacity="0" />
            <stop offset="1" stopColor="#593C73" />
          </linearGradient>
          <linearGradient id="paint2_linear_133_105" x1="534" y1="110" x2="534" y2="922" gradientUnits="userSpaceOnUse">
            <stop offset="0.545" stopColor="#A972D9" stopOpacity="0" />
            <stop offset="1" stopColor="#593C73" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_133_105"
            x1="533.5"
            y1="-17"
            x2="533.5"
            y2="1050"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.545" stopColor="#A972D9" stopOpacity="0" />
            <stop offset="1" stopColor="#593C73" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

