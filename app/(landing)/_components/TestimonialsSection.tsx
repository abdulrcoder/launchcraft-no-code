import { testimonials } from "@/constants";
import { Testimonial } from "@/types";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Testimonials = () => (
  <section
    id="testimonials"
    className=" h-[25rem] bg-gradient-to-b from-black to-[#1E222E] text-gray-200 pt-10"
  >
    <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
      What Our Users Say
    </h2>
    <InfiniteMovingCards items={testimonials} direction="left" speed="fast" />
  </section>
);

export default Testimonials;
