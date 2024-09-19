import BgSlideButton from "./components/BgSlideButton";
import BgFillButton from "./components/BgFillButton";
import InfiniteButton from "./components/InfiniteButton";

export default function Home() {
  return (
    <section className="h-screen bg-[#F4F4F4] flex gap-8 justify-center items-center font-medium">
      <BgFillButton />
      <BgSlideButton />
      <InfiniteButton />
    </section>
  );
}
