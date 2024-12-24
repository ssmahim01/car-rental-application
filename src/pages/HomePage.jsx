import Banner from "../components/Banner";
import RecentListings from "../components/RecentListings";
import SpecialOffers from "../components/SpecialOffers";
import WhyChooseUs from "../components/WhyChooseUs";

const HomePage = () => {
    return (
        <div>
            {/* Banner Section */}
            <Banner />

            {/* Why Choose Us Section */}
            <WhyChooseUs />

            {/* Recent Listings Section */}
            <RecentListings />

            {/* Special Offers Section */}
            <SpecialOffers />
        </div>
    );
};

export default HomePage;