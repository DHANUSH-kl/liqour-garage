export type SpiritType = {
    id: string;
    title: string;
    description: string;
    characteristics: string;
};

export type Category = {
    id: string;
    name: string;
    shortDescription: string;
    image: string;
    subTypes: SpiritType[];
};

export type FlavorProfile = {
    id: string;
    title: string;
    description: string;
};

export type Brand = {
    id: string;
    name: string;
    logoUrl?: string;
};

export const categories: Category[] = [
    {
        id: "whisky",
        name: "Whisky",
        shortDescription: "From smoky Scotch to smooth Japanese malts, a rich world of flavors.",
        image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=800&auto=format&fit=crop",
        subTypes: [
            {
                id: "scotch",
                title: "Scotch Whisky",
                description: "Crafted in Scotland using traditional methods.",
                characteristics: "Complex, smoky, and peaty notes."
            },
            {
                id: "irish",
                title: "Irish Whiskey",
                description: "Triple-distilled for an exceptionally smooth finish.",
                characteristics: "Smooth, sweet, and slightly fruity."
            },
            {
                id: "japanese",
                title: "Japanese Whisky",
                description: "Meticulously balanced and precision-crafted.",
                characteristics: "Floral, delicate, with subtle peat."
            },
            {
                id: "bourbon",
                title: "Bourbon",
                description: "American whiskey made primarily from corn.",
                characteristics: "Sweet, rich, with vanilla and oak."
            },
            {
                id: "indian",
                title: "Indian Whisky",
                description: "Rapidly aged in a tropical climate.",
                characteristics: "Fruity, spicy, and robust."
            },
            {
                id: "singlemalt",
                title: "Single Malt",
                description: "Produced from a single distillery using malted barley.",
                characteristics: "Highly varied, from floral to intensely smoky."
            }
        ]
    },
    {
        id: "wine",
        name: "Wine",
        shortDescription: "Elegant reds, crisp whites, and timeless vintages from renowned regions.",
        image: "https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?q=80&w=800&auto=format&fit=crop",
        subTypes: [
            { id: "red", title: "Red Wine", description: "Made from dark-colored grape varieties.", characteristics: "Rich, tannic, berry flavors." },
            { id: "white", title: "White Wine", description: "Produced from green or yellowish grapes.", characteristics: "Crisp, citrusy, and floral." },
            { id: "rose", title: "Rosé", description: "Incorporates some of the color from the grape skins, but not enough to qualify it as a red wine.", characteristics: "Fresh, fruity, light." },
        ]
    },
    {
        id: "gin",
        name: "Gin",
        shortDescription: "A botanical spirit known for its refreshing and aromatic character.",
        image: "/images/discover/gin.png",
        subTypes: [
            { id: "londondry", title: "London Dry", description: "The traditional heavy-juniper profile.", characteristics: "Dry, juniper-forward, citrus." },
            { id: "botanical", title: "Botanical Gin", description: "Infused with diverse herbs and florals.", characteristics: "Aromatic, floral, complex." },
        ]
    },
    {
        id: "rum",
        name: "Rum",
        shortDescription: "Distilled from sugarcane molasses or juice for a sweet, robust profile.",
        image: "/images/discover/rum.png",
        subTypes: [
            { id: "dark", title: "Dark Rum", description: "Aged extensively in charred oak barrels.", characteristics: "Rich, molasses, caramel." },
            { id: "white_rum", title: "White Rum", description: "Unaged or lightly aged and filtered.", characteristics: "Clean, light, sweet." },
            { id: "spiced", title: "Spiced Rum", description: "Infused with spices like cinnamon and vanilla.", characteristics: "Warm, sweet, aromatic." }
        ]
    },
    {
        id: "vodka",
        name: "Vodka",
        shortDescription: "A pure, distilled spirit known for its clean and neutral flavor.",
        image: "/images/discover/vodka.png",
        subTypes: [
            { id: "plain", title: "Classic Vodka", description: "Distilled for maximum purity and neutrality.", characteristics: "Clean, crisp, smooth." },
            { id: "flavored", title: "Flavored Vodka", description: "Infused with natural fruits or herbs.", characteristics: "Sweet, aromatic, diverse." }
        ]
    },
    {
        id: "tequila",
        name: "Tequila",
        shortDescription: "Crafted exclusively from blue agave in select regions of Mexico.",
        image: "https://images.unsplash.com/photo-1516535794938-6063878f08cc?q=80&w=800&auto=format&fit=crop",
        subTypes: [
            { id: "blanco", title: "Blanco", description: "Unaged and bottled immediately after distillation.", characteristics: "Agave-forward, crisp, peppery." },
            { id: "reposado", title: "Reposado", description: "Aged in oak barrels for up to one year.", characteristics: "Smooth, vanilla notes, mellow." },
            { id: "anejo", title: "Añejo", description: "Aged for over a year for deep complexity.", characteristics: "Rich oak, caramel, sipping quality." }
        ]
    },
    {
        id: "brandy",
        name: "Brandy & Cognac",
        shortDescription: "A luxurious spirit distilled from wine or fermented fruit mash.",
        image: "/images/discover/brandy.png",
        subTypes: [
            { id: "cognac", title: "Cognac", description: "Premium brandy strictly from the Cognac region of France.", characteristics: "Complex, dried fruit, oak." },
            { id: "armagnac", title: "Armagnac", description: "Rustic and robust brandy from Gascony, France.", characteristics: "Bold, full-bodied, earthy." }
        ]
    },
    {
        id: "liqueurs",
        name: "Liqueurs",
        shortDescription: "Sweetened spirits infused with fruits, herbs, spices, or nuts.",
        image: "/images/discover/liqueurs.png",
        subTypes: [
            { id: "coffee", title: "Coffee Liqueur", description: "Rich blend of rum or vodka and coffee.", characteristics: "Sweet, roasted, deep." },
            { id: "cream", title: "Cream Liqueur", description: "Blend of Irish whiskey and dairy cream.", characteristics: "Luxurious, sweet, smooth." },
            { id: "herbal", title: "Herbal Liqueur", description: "Infused with dozens of botanicals and spices.", characteristics: "Bitter, complex, aromatic." }
        ]
    },
    {
        id: "champagne",
        name: "Champagne & Sparkling",
        shortDescription: "Bright, effervescent wines crafted for celebratory moments.",
        image: "/images/discover/champagne.png",
        subTypes: [
            { id: "brut", title: "Brut Champagne", description: "The classic dry Champagne style.", characteristics: "Dry, crisp, yeasty notes." },
            { id: "prosecco", title: "Prosecco", description: "Light and fruity Italian sparkling wine.", characteristics: "Fruity, light, refreshing." }
        ]
    }
];

export const flavorProfiles: FlavorProfile[] = [
    { id: "smoky", title: "Smoky & Peaty", description: "Bold, earthy, and aromatic flavors." },
    { id: "smooth", title: "Smooth & Sweet", description: "Silky texture with a sugary finish." },
    { id: "fruity", title: "Fruity & Floral", description: "Light, refreshing botanical notes." },
    { id: "spicy", title: "Spicy & Bold", description: "Intense, warming, and complex." },
    { id: "rich", title: "Rich & Oaky", description: "Deep barrel-aged flavors with vanilla touches." }
];

export const popularBrands: Brand[] = [
    { id: "johnnie-walker", name: "Johnnie Walker" },
    { id: "glenfiddich", name: "Glenfiddich" },
    { id: "macallan", name: "Macallan" },
    { id: "chivas", name: "Chivas Regal" },
    { id: "hennessy", name: "Hennessy" },
    { id: "grey-goose", name: "Grey Goose" },
    { id: "patron", name: "Patrón" },
    { id: "moet", name: "Moët & Chandon" }
];
