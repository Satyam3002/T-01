import Navbar from "@/components/navbar";
import Homepage from "@/components/homepage";
import Box from "@/components/box";
import Add from "@/components/add";
import Testimonial from "@/components/testimonials";
import Start from "@/components/start";
import Footer from "@/components/footer";
import Bottom from "@/components/bottom";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Homepage />
      <Box />
      <Add />
      <Testimonial/>
      <Start/>
      <Footer />
      <Bottom />
    </div>
  );
}

