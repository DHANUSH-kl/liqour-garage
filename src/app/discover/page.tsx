import PageIntro from "./components/PageIntro";
import CategoryGrid from "./components/CategoryGrid";
import FlavorProfiles from "./components/FlavorProfiles";
import PopularBrands from "./components/PopularBrands";
import DiscoverCTA from "./components/DiscoverCTA";
import styles from "./Discover.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Discover Fine Spirits | Liquor Garage",
    description: "Explore a curated guide to the world’s most celebrated spirits. From bold whiskies to refined wines, discover the styles and origins that define each category.",
};

export default function DiscoverPage() {
    return (
        <main className={styles.page}>
            <PageIntro />
            <CategoryGrid />
            <FlavorProfiles />
            <PopularBrands />
            <DiscoverCTA />
        </main>
    );
}
