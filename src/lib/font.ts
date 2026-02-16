
import localFont from "next/font/local"

export const elmsSans = localFont({
  src: [
    {
      path: "../../public/font/ElmsSans-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../../public/font/ElmsSans-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-elms-sans",
  weight: "100 900",
  display: "swap",
})