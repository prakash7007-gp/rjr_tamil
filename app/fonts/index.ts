// app/fonts/index.ts
import { Noto_Sans_Tamil as NotoSansTamil } from "next/font/google";

// Export the font to be used elsewhere
export const Noto_Sans_Tamil = NotoSansTamil({
  subsets: ["latin", "tamil"],
  weight: ["400", "700"], // optional: choose the weights you need
});
