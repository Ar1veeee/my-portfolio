import Image from "next/image";
import TopBackground from "./components/Hero/TopBackground";
import NavBar from "./components/NavBar";
import Sections from "./components/Sections";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <div className="relative" id="home">
      <TopBackground />
      <Sections />
      <ThemeToggle />
      <NavBar />

      {/* Bottom Gradient - Mobile */}
      <Image
        src="/bottom_gradient_mobile.svg"
        alt="Bottom gradient background"
        width={1024}
        height={700}
        className="absolute bottom-0 left-0 min-w-[1024px] -z-50 md:hidden w-full h-auto"
        priority={false}
      />

      {/* Bottom Gradient - Desktop */}
      <Image
        src="/bottom_gradient.svg"
        alt="Bottom gradient background"
        width={1557}
        height={936}
        className="absolute -bottom-[175px] left-1/2 -translate-x-1/2 -z-50 hidden md:block w-auto h-auto"
        priority={false}
      />
    </div>
  );
}