import Banner from "../components/Banner";
import FeaturedCars from "../components/FeaturedCars";
import FindBestCars from "../components/FindBestCars";
import RecentListings from "../components/RecentListings";
import SpecialOffers from "../components/SpecialOffers";
import WhyChooseUs from "../components/WhyChooseUs";

const HomePage = () => {
  return (
    <div>
      {/* Banner Section */}
      <Banner />

      <div className="max-w-[94rem] mx-auto">
        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Recent Listings Section */}
        <RecentListings />

        {/* Featured Cars Section */}
        <FeaturedCars />

        {/* Find Best Cars Section */}
        <FindBestCars />

        {/* Special Offers Section */}
        <SpecialOffers />
      </div>
    </div>
  );
};

export default HomePage;
