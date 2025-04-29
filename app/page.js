import FoundProperties from "@/app/_components/FoundProperties";
import GoogleReviews from "@/app/_components/GoogleReviews";
import Hero from "@/app/_components/Hero";
import Process from "@/app/_components/Process";
import Profile from "@/app/_components/Profile";
import ToPorto from "@/app/_components/ToPorto";
import WhyDelegate from "@/app/_components/WhyDelegate";
import Partners from "./_components/Partners";

function Homepage() {
  return (
    <div>
      <Hero />
      <ToPorto />
      <Process />
      <Profile />
      <WhyDelegate />
      <FoundProperties />
      <Partners />
      <GoogleReviews />
    </div>
  );
}

export default Homepage;
