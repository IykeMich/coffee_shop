type Partners = {
    name: string,
    url: string
}

type NavLinks = {
    name: string,
    url: string
}
type Products = {
    id: number
    name: string
    price: number
    size: number
    imageUrl: string

}

type Benefits = {
    id: number
    image: string
    title: string
    subtitle: string
}

type Offerings = {
    id: number
    image: string
    title: string
}

type Data = {
    navLinks: NavLinks[],
    partners: Partners[],
    products: Products[],
    benefits: Benefits[],
    offerings: Offerings[]
}

const data: Data = {
    navLinks: [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Equipments",
            url: "#about"
        },
        {
            name: "Brew Guide",
            url: "#brewguide"
        },
        {
            name: "Locations",
            url: "#locations"
        },
        {
            name: "About",
            url: "#about"
        },
        {
            name: "Journal",
            url: "#journal"
        },
        {
            name: "Menu",
            url: "#menu"
        }
    ],
    partners: [
        {name: "india GQ", url: "/images/partner 1.svg"},
        {name: "india GR", url: "/images/partner 2.svg"},
        {name: "india GS", url: "/images/partner 3.svg"},
        {name: "india GT", url: "/images/partner 4.svg"},
        {name: "india GU", url: "/images/partner 5.svg"}
    ],
    products: [
        {id: 1, name: "Baarbara Estate - Pineapple", price: 525, size: 250, imageUrl: '/images/product 1.svg'},
        {id: 2, name: "Cold Brew Blid", price: 445, size: 250, imageUrl: '/images/product 2.svg'},
        {id: 3, name: "Expresso Milk Blend", price: 445, size: 250, imageUrl:  '/images/product 2.svg'},
        {id: 4, name: "Mandalkhan Estate", price: 445, size: 250, imageUrl: '/images/product 3.svg'},
        {id: 5, name: "Mandalkhan Estate", price: 445, size: 250, imageUrl: '/images/product 4.svg'},
        {id: 6, name: "Mandalkhan Estate Insta Pour", price: 345, size: 250, imageUrl: '/images/product 3.svg'},
        {id: 7, name: "Monsoon Malabar", price: 470, size: 250, imageUrl: '/images/product 4.svg'},
        {id: 8, name: "Monsoon Malabar", price: 470, size: 250, imageUrl: '/images/product 4.svg'},
    ],
    benefits: [
        {id: 1, image:"/images/benefits/benefit 1.svg", title: "speciality coffee", subtitle: "Speciality grade coffees that’s rated above 80+ on taste"},
        {id: 2, image:"/images/benefits/benefit 2.svg", title: "roasted fresh", subtitle: "Freshly roasted, direct from our roastery"},
        {id: 3, image:"/images/benefits/benefit 3.svg", title: "responsibly sourced", subtitle: "Organic and biodiverse coffee partners"},
        {id: 4, image:"/images/benefits/benefit 4.svg", title: "delicious taste", subtitle: "Making great taste accessible"}
    ],
    offerings: [
        {id: 1, image:"/offerings/offering 1.svg", title: "Coffee Beans"},
        {id: 2, image:"/offerings/offering 2.svg", title: "Coffee Equipments"},
        {id: 3, image:"/offerings/offering 3.svg", title: "Insta Pour"}
    ]
}

export default data;