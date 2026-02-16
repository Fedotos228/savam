'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

export default function WaveBackground() {
  const svgRef = useRef<SVGSVGElement>(null)

  useGSAP(() => {
    const paths = svgRef.current?.querySelectorAll('path')
    if (!paths) return

    paths.forEach((path, i) => {
      gsap.to(path, {
        y: i % 2 === 0 ? 15 : -15, // se mișcă ușor sus-jos
        opacity: 0.15,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.05,
      })
    })
  }, { scope: svgRef })

  return (
    <div className="absolute w-full bottom-[20%] -z-10 overflow-hidden pointer-events-none flex items-center justify-center">
      <svg
        ref={svgRef}
        width="1944px"
        height="808.7367553710938px"
        viewBox="0 0 1920 810"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-50 scale-110" // scale-110 previne marginile tăiate la mișcare
        preserveAspectRatio="xMidYMid slice"
      >
        <g opacity="0.08">
          <path d="M0 289.808C47.0736 259.721 259.865 -1.58596 946.074 270.046C1632.28 541.678 1835.9 447.57 1944 187.861" stroke="url(#paint0_linear_145_638)" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M1.30857 279.73C46.1366 251.076 262.519 5.10188 942.631 279.954C1622.74 554.807 1834.56 426.255 1937.52 178.92" stroke="url(#paint1_linear_145_638)" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M2.61674 269.666C45.1992 242.445 265.182 11.7928 939.198 289.89C1613.21 567.987 1833.24 404.967 1931.06 169.993" stroke="url(#paint2_linear_145_638)" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M3.92531 259.592C44.2714 233.804 267.836 18.485 935.765 299.814C1603.69 581.144 1831.93 383.669 1924.59 161.068" stroke="url(#paint3_linear_145_638)" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M5.23348 249.514C43.334 225.158 270.499 25.1612 932.331 309.723C1594.16 594.285 1830.61 362.354 1918.12 152.115" stroke="url(#paint4_linear_145_638)" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M6.53261 239.451C42.3969 216.528 273.153 31.8643 928.879 319.659C1584.61 607.453 1829.27 341.066 1911.63 143.2" stroke="url(#paint5_linear_145_638)" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M7.84118 229.373C41.4599 207.883 275.816 38.5523 925.446 329.579C1575.08 620.606 1827.95 319.763 1905.17 134.259" stroke="url(#paint6_linear_145_638)" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M9.14935 219.299C40.5317 199.241 278.479 45.232 922.013 339.491C1565.55 633.75 1826.64 298.452 1898.7 125.321" stroke="url(#paint7_linear_145_638)" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M10.4579 209.22C39.5947 190.595 281.133 51.9199 918.58 349.412C1556.03 646.903 1825.31 277.149 1892.24 116.379" stroke="url(#paint8_linear_145_638)" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M11.7661 199.157C38.6666 181.965 283.796 58.6112 915.137 359.347C1546.48 660.083 1823.98 255.861 1885.76 107.465" stroke="url(#paint9_linear_145_638)" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M13.0742 189.081C37.7292 173.322 286.459 65.3012 911.703 369.258C1536.95 673.214 1822.66 234.549 1879.3 98.5137" stroke="url(#paint10_linear_145_638)" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M14.3738 179.005C36.7832 164.678 289.104 71.9789 908.261 379.18C1527.42 686.38 1821.34 213.247 1872.82 89.5857" stroke="url(#paint11_linear_145_638)" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M15.6819 168.94C35.855 156.046 291.767 78.6805 904.828 389.114C1517.89 699.547 1820.02 191.958 1866.35 80.6578" stroke="url(#paint12_linear_145_638)" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M16.9905 158.862C34.918 147.401 294.43 85.3565 901.385 399.022C1508.34 712.688 1818.69 170.655 1859.87 71.7163" stroke="url(#paint13_linear_145_638)" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M18.2987 148.787C33.9899 138.758 297.093 92.0476 897.952 408.946C1498.81 725.844 1817.37 149.355 1853.41 62.778" stroke="url(#paint14_linear_145_638)" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M19.6073 138.721C33.0529 130.125 299.747 98.7357 894.519 418.878C1489.29 739.021 1816.05 128.065 1846.94 53.8604" stroke="url(#paint15_linear_145_638)" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M20.9154 128.647C32.1247 121.483 302.41 105.427 891.085 428.802C1479.76 752.177 1814.72 106.753 1840.46 44.9226" stroke="url(#paint16_linear_145_638)" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M22.2141 118.572C31.1779 112.841 305.064 112.119 887.633 438.714C1470.2 765.309 1813.4 85.4538 1833.99 35.9844" stroke="url(#paint17_linear_145_638)" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M23.5231 108.495C30.2506 104.197 307.718 118.796 884.2 448.636C1460.68 778.476 1812.08 64.1526 1827.52 27.0564" stroke="url(#paint18_linear_145_638)" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M24.8309 98.4287C29.3128 95.5633 310.381 125.496 880.766 458.568C1451.15 791.64 1810.76 42.8496 1821.05 18.1149" stroke="url(#paint19_linear_145_638)" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M26.1399 88.356C28.3854 86.9233 313.045 132.178 877.333 468.482C1441.62 804.787 1809.43 21.5521 1814.58 9.19067" stroke="url(#paint20_linear_145_638)" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M27.4476 78.2778C27.4476 78.2778 315.707 138.865 873.89 478.402C1432.07 817.939 1808.11 0.249146 1808.11 0.249146" stroke="#FCEE21" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M30.3524 97.2445C31.4474 95.7053 326.369 126.289 874.791 462.641C1423.21 798.993 1792.29 43.3586 1807.3 37.9594" stroke="#FBE421" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M33.2564 116.226C35.4463 113.148 337.04 113.74 875.69 446.907C1414.34 780.074 1776.49 86.4714 1806.49 75.6729" stroke="#FBDA21" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M36.1616 135.196C39.4465 130.579 347.712 101.179 876.582 431.149C1405.45 761.119 1760.68 129.56 1805.68 113.386" stroke="#FAD021" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M39.0656 154.161C43.4361 148.004 358.383 88.6004 877.482 415.397C1396.58 742.194 1744.86 172.668 1804.87 151.094" stroke="#F9C622" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M41.9696 173.132C47.435 165.436 369.053 76.0404 878.381 399.64C1387.71 723.24 1729.05 215.77 1804.06 188.797" stroke="#F8BC22" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M44.8838 192.101C51.4442 182.865 379.725 63.4659 879.282 383.893C1378.84 704.319 1713.24 258.881 1803.25 226.509" stroke="#F8B222" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M47.7878 211.066C55.4431 200.291 390.396 50.9001 880.182 368.142C1369.97 685.383 1697.43 301.977 1802.44 264.218" stroke="#F7A822" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M50.6926 230.036C59.4429 217.722 401.067 38.3269 881.082 352.383C1361.1 666.44 1681.62 345.078 1801.63 301.919" stroke="#F69E22" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M53.5965 249.015C63.4418 235.162 411.738 25.7752 881.982 336.635C1352.23 647.494 1665.81 388.188 1800.82 339.63" stroke="#F69422" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M56.5013 267.984C67.4415 252.592 422.41 13.2129 882.873 320.887C1343.34 628.562 1650 431.3 1800.01 377.343" stroke="#F58A22" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M59.4057 286.954C71.4409 270.022 433.081 0.639875 883.773 305.129C1334.47 609.618 1634.18 474.389 1799.2 415.044" stroke="#F48023" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M62.3195 305.921C75.4404 287.45 443.752 -11.9243 884.682 289.38C1325.61 590.684 1618.38 517.498 1798.4 452.766" stroke="#F37623" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M65.2239 324.89C79.4397 304.88 454.423 -24.498 885.573 273.621C1316.72 571.74 1602.56 560.598 1797.58 490.467" stroke="#F36C23" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M68.1279 343.862C83.4386 322.312 465.094 -37.0574 886.473 257.877C1307.85 552.811 1586.76 603.713 1796.78 528.183" stroke="#F26223" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M71.0327 362.827C87.4384 339.738 475.765 -49.6239 887.373 242.113C1298.98 533.85 1570.95 646.796 1795.97 565.879" stroke="#F15823" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M73.9375 381.796C91.4381 357.168 486.437 -62.1975 888.265 226.366C1290.09 514.93 1555.13 689.909 1795.15 603.592" stroke="#F14E23" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M76.8415 400.777C95.4371 374.61 497.098 -74.7476 889.164 210.619C1281.23 495.986 1539.31 733.021 1794.34 641.304" stroke="#F04423" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M79.7557 419.744C99.4462 392.037 507.779 -87.3237 890.074 194.87C1272.37 477.064 1523.52 776.13 1793.54 679.015" stroke="#EF3A24" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M82.6597 438.713C103.436 409.467 518.45 -99.8855 890.965 179.111C1263.48 458.108 1507.7 819.218 1792.72 716.716" stroke="#EE3024" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M85.5636 457.682C107.435 426.897 529.12 -112.448 891.864 163.364C1254.61 439.176 1491.89 862.33 1791.91 754.428" stroke="#EE2624" strokeWidth="1.22768" strokeMiterlimit="10" />
          <path d="M88.468 476.649C111.434 444.325 539.791 -125.024 892.764 147.603C1245.74 420.23 1476.08 905.428 1791.11 792.138" stroke="#ED1C24" strokeWidth="1.22768" strokeMiterlimit="10" />
        </g>
        <defs>
          <linearGradient id="paint0_linear_145_638" x1="88.1242" y1="-93.2933" x2="1912.08" y2="327.841" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF9074" />
            <stop offset="1" stopColor="#FFE23A" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="paint1_linear_145_638" x1="81.6199" y1="-87.7194" x2="1908.59" y2="313.273" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF9470" />
            <stop offset="1" stopColor="#FFE339" stopOpacity="0.8095" />
          </linearGradient>
          <linearGradient id="paint2_linear_145_638" x1="75.4594" y1="-81.9821" x2="1904.73" y2="298.628" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF996C" />
            <stop offset="1" stopColor="#FFE338" stopOpacity="0.819" />
          </linearGradient>
          <linearGradient id="paint3_linear_145_638" x1="69.6464" y1="-76.0458" x2="1900.9" y2="284.114" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF9D68" />
            <stop offset="1" stopColor="#FFE436" stopOpacity="0.8286" />
          </linearGradient>
          <linearGradient id="paint4_linear_145_638" x1="64.159" y1="-69.969" x2="1896.76" y2="269.844" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEA264" />
            <stop offset="1" stopColor="#FEE435" stopOpacity="0.8381" />
          </linearGradient>
          <linearGradient id="paint5_linear_145_638" x1="59.0422" y1="-63.7545" x2="1892.45" y2="255.522" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEA660" />
            <stop offset="1" stopColor="#FEE534" stopOpacity="0.8476" />
          </linearGradient>
          <linearGradient id="paint6_linear_145_638" x1="54.2754" y1="-57.3958" x2="1888.2" y2="241.478" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEAB5C" />
            <stop offset="1" stopColor="#FEE533" stopOpacity="0.8571" />
          </linearGradient>
          <linearGradient id="paint7_linear_145_638" x1="49.8823" y1="-50.9537" x2="1883.62" y2="227.362" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEAF58" />
            <stop offset="1" stopColor="#FEE632" stopOpacity="0.8667" />
          </linearGradient>
          <linearGradient id="paint8_linear_145_638" x1="45.8614" y1="-44.4131" x2="1879.09" y2="213.358" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEB454" />
            <stop offset="1" stopColor="#FEE730" stopOpacity="0.8762" />
          </linearGradient>
          <linearGradient id="paint9_linear_145_638" x1="41.8356" y1="-35.0437" x2="1873.9" y2="202.364" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEB850" />
            <stop offset="1" stopColor="#FEE72F" stopOpacity="0.8857" />
          </linearGradient>
          <linearGradient id="paint10_linear_145_638" x1="36.1865" y1="-8.16232" x2="1866.56" y2="208.778" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEBD4C" />
            <stop offset="1" stopColor="#FEE82E" stopOpacity="0.8952" />
          </linearGradient>
          <linearGradient id="paint11_linear_145_638" x1="31.3454" y1="18.7862" x2="1859.74" y2="215.469" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDC149" />
            <stop offset="1" stopColor="#FDE82D" stopOpacity="0.9048" />
          </linearGradient>
          <linearGradient id="paint12_linear_145_638" x1="27.3334" y1="45.7124" x2="1853.06" y2="222.069" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDC645" />
            <stop offset="1" stopColor="#FDE92C" stopOpacity="0.9143" />
          </linearGradient>
          <linearGradient id="paint13_linear_145_638" x1="24.1275" y1="72.6123" x2="1846.9" y2="228.882" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDCA41" />
            <stop offset="1" stopColor="#FDE92B" stopOpacity="0.9238" />
          </linearGradient>
          <linearGradient id="paint14_linear_145_638" x1="21.7491" y1="99.3989" x2="1840.88" y2="235.545" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDCF3D" />
            <stop offset="1" stopColor="#FDEA29" stopOpacity="0.9333" />
          </linearGradient>
          <linearGradient id="paint15_linear_145_638" x1="20.1848" y1="126.067" x2="1835.39" y2="242.214" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDD339" />
            <stop offset="1" stopColor="#FDEB28" stopOpacity="0.9429" />
          </linearGradient>
          <linearGradient id="paint16_linear_145_638" x1="19.4027" y1="152.539" x2="1830.03" y2="248.971" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDD835" />
            <stop offset="1" stopColor="#FDEB27" stopOpacity="0.9524" />
          </linearGradient>
          <linearGradient id="paint17_linear_145_638" x1="19.4332" y1="178.782" x2="1825.01" y2="255.508" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDDC31" />
            <stop offset="1" stopColor="#FDEC26" stopOpacity="0.9619" />
          </linearGradient>
          <linearGradient id="paint18_linear_145_638" x1="20.2328" y1="204.787" x2="1820.5" y2="262.118" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCE12D" />
            <stop offset="1" stopColor="#FCEC25" stopOpacity="0.9714" />
          </linearGradient>
          <linearGradient id="paint19_linear_145_638" x1="21.8195" y1="230.456" x2="1816.13" y2="268.43" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCE529" />
            <stop offset="1" stopColor="#FCED23" stopOpacity="0.981" />
          </linearGradient>
          <linearGradient id="paint20_linear_145_638" x1="24.1488" y1="255.817" x2="1812.25" y2="274.771" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCEA25" />
            <stop offset="1" stopColor="#FCED22" stopOpacity="0.9905" />
          </linearGradient>
        </defs>
      </svg>

    </div>
  )
}