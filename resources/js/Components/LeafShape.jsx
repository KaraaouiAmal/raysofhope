export default function LeafShape(props) {
    return (
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width={586}
      height={572}
      viewBox="0 0 586 572"
      fill="none"
      {...props}
    >
      <g filter="url(#filter0_b_318_13)">
        <path
          d="M359.72 354.395C540.055 203.035 611.756 10.161 576.531-167.22 341.924-175.917 95.758-100.315-84.321 49.172c-180.335 151.36-252.035 344.233-216.811 521.615 234.608 8.697 480.517-65.032 660.852-216.392z"
          fill="#F2902F"
          fillOpacity={0.1}
        />
      </g>
      <defs>
        <filter
          id="filter0_b_318_13"
          x={-313.827}
          y={-171.894}
          width={903.054}
          height={747.37}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={2} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_318_13"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_318_13"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
        );
    }