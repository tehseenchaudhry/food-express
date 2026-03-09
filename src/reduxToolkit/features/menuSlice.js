import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    // menuCard
    foodCards: [
        //  PIZZA 
        {
            id: 1,
            name: "Margherita Pizza",
            description: "Classic pizza with fresh tomatoes, mozzarella, and basil",
            price: 899,
            rating: 4.8,
            reviews: 234,
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
            restaurant: "Pizza Hut",
            category: "pizza",
            veg: true,
            sizes: [
                { name: "Small", price: 599 },
                { name: "Medium", price: 899 },
                { name: "Large", price: 1199 }
            ]
        },
        {
            id: 2,
            name: "Pepperoni Pizza",
            description: "Classic pizza with pepperoni, mozzarella, and tomato sauce",
            price: 999,
            rating: 4.7,
            reviews: 345,
            image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=400&q=80",
            restaurant: "Pizza Hut",
            category: "pizza",
            veg: false,
            sizes: [
                { name: "Small", price: 699 },
                { name: "Medium", price: 999 },
                { name: "Large", price: 1299 }
            ]
        },
        {
            id: 3,
            name: "BBQ Chicken Pizza",
            description: "Grilled chicken with BBQ sauce, red onions and cilantro",
            price: 1099,
            rating: 4.6,
            reviews: 189,
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
            restaurant: "Pizza Hut",
            category: "pizza",
            veg: false,
            sizes: [
                { name: "Small", price: 799},
                { name: "Medium", price: 1099},
                { name: "Large", price: 1399}
            ]
        },
        {
            id: 4,
            name: "Fajita Pizza",
            description: "Spicy chicken fajita with bell peppers and onions",
            price: 999,
            rating: 4.5,
            reviews: 156,
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80",
            restaurant: "Pizza Hut",
            category: "pizza",
            veg: false,
            sizes: [
                { name: "Small", price: 699},
                { name: "Medium", price: 999 },
                { name: "Large", price: 1299}
            ]
        },
        {
            id: 5,
            name: "Vegetable Pizza",
            description: "Fresh mushrooms, olives, bell peppers, and onions",
            price: 799,
            rating: 4.4,
            reviews: 123,
            image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=400&q=80",
            restaurant: "Pizza Hut",
            category: "pizza",
            veg: true,
            sizes: [
                { name: "Small", price: 549},
                { name: "Medium", price: 799},
                { name: "Large", price: 1049}
            ]
        },
        {
            id: 6,
            name: "Supreme Pizza",
            description: "Loaded with pepperoni, sausage, mushrooms, and bell peppers",
            price: 1299,
            rating: 4.9,
            reviews: 567,
            image: "https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&w=400&q=80",
            restaurant: "Pizza Hut",
            category: "pizza",
            veg: false,
            sizes: [
                { name: "Small", price: 899},
                { name: "Medium", price: 1299},
                { name: "Large", price: 1699}
            ]
        },
        {
            id: 7,
            name: "Cheese Lovers Pizza",
            description: "Extra mozzarella, cheddar, and parmesan cheese",
            price: 899,
            rating: 4.6,
            reviews: 234,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP7UWGbMDurptdh3h8a3yoUiUQjiVheUmf9A&s",
            restaurant: "Pizza Hut",
            category: "pizza",
            veg: true,
            sizes: [
                { name: "Small", price: 599},
                { name: "Medium", price: 8990 },
                { name: "Large", price: 1199}
            ]
        },
        {
            id: 8,
            name: "Hawaiian Pizza",
            description: "Ham and pineapple with mozzarella cheese",
            price: 949,
            rating: 4.3,
            reviews: 178,
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
            restaurant: "Pizza Hut",
            category: "pizza",
            veg: false,
            sizes: [
                { name: "Small", price: 649},
                { name: "Medium", price: 949},
                { name: "Large", price: 1249}
            ]
        },

        //  BURGERS 
        {
            id: 9,
            name: "Chicken Burger",
            description: "Grilled chicken patty with lettuce, tomato, and special sauce",
            price: 549,
            rating: 4.5,
            reviews: 567,
            image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=400&q=80",
            restaurant: "Burger Lab",
            category: "burgers",
            veg: false,
        },
        {
            id: 10,
            name: "Zinger Burger",
            description: "Crispy chicken fillet with lettuce and mayo",
            price: 449,
            rating: 4.6,
            reviews: 678,
            image: "https://media.istockphoto.com/id/501530895/photo/zinger-burger-5.webp?a=1&b=1&s=612x612&w=0&k=20&c=jHn7GicYrmnhySQO9iP3B4_btCzXEsrsmURuFl3i7u8=",
            restaurant: "Burger Lab",
            category: "burgers",
            veg: false,
        },
        {
            id: 11,
            name: "Beef Burger",
            description: "Juicy beef patty with cheese, lettuce, and tomato",
            price: 599,
            rating: 4.7,
            reviews: 456,
            image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80",
            restaurant: "Burger Lab",
            category: "burgers",
            veg: false,
        },
        {
            id: 12,
            name: "Double Cheese Burger",
            description: "Double beef patty with double cheese",
            price: 799,
            rating: 4.8,
            reviews: 345,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWjh9JNLMVjPa26yu8luIGRtjwMz2EqbK__g&s",
            restaurant: "Burger Lab",
            category: "burgers",
            veg: false,
        },
        {
            id: 13,
            name: "Crispy Chicken Burger",
            description: "Crispy fried chicken with coleslaw",
            price: 499,
            rating: 4.5,
            reviews: 289,
            image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=400&q=80",
            restaurant: "Burger Lab",
            category: "burgers",
            veg: false,
        },
        {
            id: 14,
            name: "Fish Burger",
            description: "Grilled fish fillet with tartar sauce",
            price: 549,
            rating: 4.4,
            reviews: 167,
            image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80",
            restaurant: "Burger Lab",
            category: "burgers",
            veg: false,
        },
        {
            id: 15,
            name: "Veggie Burger",
            description: "Plant-based patty with fresh vegetables",
            price: 399,
            rating: 4.3,
            reviews: 145,
            image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=400&q=80",
            restaurant: "Burger Lab",
            category: "burgers",
            veg: true,
        },

        //  BIRYANI 
         {
            id: 36,
            name: "Cheesecake",
            description: "Creamy New York style cheesecake",
            price: 449,
            rating: 4.9,
            reviews: 345,
            image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80",
            restaurant: "Dessert House",
            category: "desserts",
            veg: true,
        },
        {
            id: 16,
            name: "Chicken Biryani",
            description: "Fragrant rice with spiced chicken and aromatic herbs",
            price: 399,
            rating: 4.9,
            reviews: 890,
            image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=400&q=80",
            restaurant: "Spice Kitchen",
            category: "biryani",
            veg: false,
            sizes: [
                { name: "Half", price: 249},
                { name: "Full", price: 399},
                { name: "Family", price: 699}
            ]
        },
        {
            id: 17,
            name: "Beef Biryani",
            description: "Fragrant rice with tender beef and aromatic spices",
            price: 449,
            rating: 4.8,
            reviews: 567,
            image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=400&q=80",
            restaurant: "Spice Kitchen",
            category: "biryani",
            veg: false,
            sizes: [
                { name: "Half", price: 299},
                { name: "Full", price: 449},
                { name: "Family", price: 799}
            ]
        },
        {
            id: 18,
            name: "Mutton Biryani",
            description: "Fragrant rice with tender mutton and aromatic spices",
            price: 549,
            rating: 4.9,
            reviews: 678,
            image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80",
            restaurant: "Spice Kitchen",
            category: "biryani",
            veg: false,
            sizes: [
                { name: "Half", price: 349},
                { name: "Full", price: 549},
                { name: "Family", price: 999}
            ]
        },
        { 
            id: 19,
            name: "Vegetable Biryani",
            description: "Fragrant rice with mixed vegetables and spices",
            price: 299,
            rating: 4.5,
            reviews: 234,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfYnyieKsaVSbLbT31oWJ5v8b8-bmqNpPkyw&s",
            restaurant: "Spice Kitchen",
            category: "biryani",
            veg: true,
            sizes: [
                { name: "Half", price: 179},
                { name: "Full", price: 299},
                { name: "Family", price: 549}
            ]
        },
        {
            id: 20,
            name: "Chicken Tikka Biryani",
            description: "Biryani with grilled chicken tikka pieces",
            price: 499,
            rating: 4.7,
            reviews: 345,
            image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=400&q=80",
            restaurant: "Spice Kitchen",
            category: "biryani",
            veg: false,
            sizes: [
                { name: "Half", price: 299},
                { name: "Full", price: 499 },
                { name: "Family", price: 899}
            ]
        },
        {
            id: 21,
            name: "Karahi Biryani",
            description: "Biryani topped with karahi masala and chicken",
            price: 549,
            rating: 4.6,
            reviews: 289,
            image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=400&q=80",
            restaurant: "Spice Kitchen",
            category: "biryani",
            veg: false,
            sizes: [
                { name: "Half", price: 349},
                { name: "Full", price: 549},
                { name: "Family", price: 999}
            ]
        },

        //  CHICKEN PIECES 
        {
            id: 22,
            name: "Fried Chicken (4 pcs)",
            description: "4 pieces of crispy fried chicken - 2 legs, 2 breasts",
            price: 549,
            rating: 4.7,
            reviews: 456,
            image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=400&q=80",
            restaurant: "Broast Point",
            category: "chicken",
            veg: false,
            sizes: [
                { name: "2 Pcs", price: 299},
                { name: "4 Pcs", price: 549},
                { name: "8 Pcs", price: 999}
            ]
        },
        {
            id: 23,
            name: "Chicken Leg Piece (2 pcs)",
            description: "2 juicy chicken leg pieces with special seasoning",
            price: 399,
            rating: 4.8,
            reviews: 345,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc18jM3BhyRzZ0Gwqs2y56s0OFkydjka2-wA&s",
            restaurant: "Broast Point",
            category: "chicken",
            veg: false,
            sizes: [
                { name: "2 Pcs", price: 349},
                { name: "4 Pcs", price: 649},
                { name: "6 Pcs", price: 949}
            ]
        },
        {
            id: 24,
            name: "Chicken Chest Piece (2 pcs)",
            description: "2 boneless chicken breast pieces, grilled to perfection",
            price: 449,
            rating: 4.6,
            reviews: 234,
            image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=400&q=80",
            restaurant: "Broast Point",
            category: "chicken",
            veg: false,
            sizes: [
                { name: "2 Pcs", price: 399},
                { name: "4 Pcs", price: 749},
                { name: "6 Pcs", price: 1099}
            ]
        },
        {
            id: 25,
            name: "Chicken Wings (6 pcs)",
            description: "6 spicy chicken wings with dip",
            price: 399,
            rating: 4.7,
            reviews: 567,
            image: "https://t3.ftcdn.net/jpg/02/36/94/88/360_F_236948807_aDHu2bfA4yQG7VtgDs8grwLiIhqmXtEy.jpg",
            restaurant: "Broast Point",
            category: "chicken",
            veg: false,
            sizes: [
                { name: "6 Pcs", price: 349},
                { name: "12 Pcs", price: 649},
                { name: "18 Pcs", price: 949}
            ]
        },
        {
            id: 26,
            name: "Hot & Spicy Chicken (6 pcs)",
            description: "6 pieces of hot and spicy fried chicken",
            price: 649,
            rating: 4.8,
            reviews: 389,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUg5r4xTnprRDZR4vZwBYI6fC2EpYhdac4Vw&s",
            restaurant: "Broast Point",
            category: "chicken",
            veg: false,
            sizes: [
                { name: "6 Pcs", price: 599},
                { name: "12 Pcs", price: 1099},
                { name: "18 Pcs", price: 1599}
            ]
        },
        {
            id: 27,
            name: "Chicken Broast",
            description: "Full broast chicken with 8 pieces",
            price: 899,
            rating: 4.9,
            reviews: 678,
            image: "https://i.ytimg.com/vi/DBNBrTeQKqQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBtFKgiQ8ivOJYQ0ljhARiFqWDOTg",
            restaurant: "Broast Point",
            category: "chicken",
            veg: false,
            sizes: [
                { name: "4 Pcs", price: 499},
                { name: "8 Pcs", price: 899},
                { name: "12 Pcs", price: 1299}
            ]
        },
        {
            id: 28,
            name: "Chicken Popcorn",
            description: "Crispy chicken popcorn bites with sauce",
            price: 299,
            rating: 4.5,
            reviews: 234,
            image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=400&q=80",
            restaurant: "Broast Point",
            category: "chicken",
            veg: false,
            sizes: [
                { name: "Regular", price: 249},
                { name: "Large", price: 399},
                { name: "Bucket", price: 599}
            ]
        },

        //BBQ 
        {
            id: 29,
            name: "Chicken Tikka ",
            description: "4 pieces of grilled chicken tikka with masala",
            price: 499,
            rating: 4.8,
            reviews: 567,
            image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=400&q=80",
            restaurant: "BBQ Tonight",
            category: "bbq",
            veg: false,
            sizes: [
                { name: "2 Pcs", price: 279},
                { name: "4 Pcs", price: 499},
                { name: "8 Pcs", price: 949}
            ]
        },
        {
            id: 30,
            name: "Seekh Kebab ",
            description: "6 pieces of minced meat seekh kebabs",
            price: 449,
            rating: 4.7,
            reviews: 456,
            image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=400&q=80",
            restaurant: "BBQ Tonight",
            category: "bbq",
            veg: false,
            sizes: [
                { name: "3 Pcs", price: 229},
                { name: "6 Pcs", price: 399},
                { name: "12 Pcs", price: 749}
            ]
        },
        {
            id: 31,
            name: "Chicken Malai Boti",
            description: "Creamy and tender chicken boti",
            price: 549,
            rating: 4.9,
            reviews: 678,
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80",
            restaurant: "BBQ Tonight",
            category: "bbq",
            veg: false,
            sizes: [
                { name: "Half", price: 299},
                { name: "Full", price: 549},
                { name: "Family", price: 999}
            ]
        },
        {
            id: 32,
            name: "Beef Seekh Kebab",
            description: "6 pieces of beef seekh kebabs",
            price: 499,
            rating: 4.6,
            reviews: 345,
            image: "https://media.istockphoto.com/id/501266025/photo/seekh-kabab-5.jpg?s=612x612&w=0&k=20&c=D6JXEtB4OLF9A91nAfDYLlh507LlbmP_M9PZBoJqD9Q=",
            restaurant: "BBQ Tonight",
            category: "bbq",
            veg: false,
            sizes: [
                { name: "3 Pcs", price: 249},
                { name: "6 Pcs", price: 449},
                { name: "12 Pcs", price: 849}
            ]
        },
        {
            id: 33,
            name: "Reshmi Kebab",
            description: "Soft and juicy reshmi kebabs (6 pcs)",
            price: 549,
            rating: 4.7,
            reviews: 289,
            image: "https://thumbs.dreamstime.com/b/plate-chicken-reshmi-kebab-minced-marinated-cream-spices-grilled-skewers-isolated-clean-white-background-372820261.jpg",
            restaurant: "BBQ Tonight",
            category: "bbq",
            veg: false,
            sizes: [
                { name: "3 Pcs", price: 279},
                { name: "6 Pcs", price: 499},
                { name: "12 Pcs", price: 949}
            ]
        },
        {
            id: 34,
            name: "BBQ Platter",
            description: "Mix platter with tikka, seekh, and malai boti",
            price: 1299,
            rating: 4.9,
            reviews: 789,
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80",
            restaurant: "BBQ Tonight",
            category: "bbq",
            veg: false,
            sizes: [
                { name: "Small", price: 899},
                { name: "Medium", price: 1299},
                { name: "Large", price: 1799}
            ]
        },

        //  DESSERTS (6 items)
         {
            id: 47,
            name: "Pakola",
            description: "Classic Pakistani creamy soda",
            price: 99,
            rating: 4.8,
            reviews: 567,
            image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=400&q=80",
            restaurant: "Coffee House",
            category: "drinks",
            veg: true,
            sizes: [
                { name: "250 ml", price: 49},
                { name: "500 ml", price: 89},
                { name: "1.5 L", price: 149}
            ]
        },
      
       
        {
            id: 37,
            name: "Kunafa",
            description: "Middle Eastern dessert with cheese and syrup",
            price: 349,
            rating: 5.0,
            reviews: 567,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Dve-mqSPyYeDCBe0DIhGo6MMrqMBsBTtIg&s",
            restaurant: "Dessert House",
            category: "desserts",
            veg: true,
        },
        {
            id: 38,
            name: "Ice Cream Sundae",
            description: "Vanilla ice cream with chocolate sauce",
            price: 299,
            rating: 4.6,
            reviews: 234,
            image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80",
            restaurant: "Dessert House",
            category: "desserts",
            veg: true,
        },
        {
            id: 39,
            name: "Gulab Jamun (4 pcs)",
            description: "Deep-fried milk solids soaked in sugar syrup",
            price: 199,
            rating: 4.9,
            reviews: 678,
            image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&w=400&q=80",
            restaurant: "Dessert House",
            category: "desserts",
            veg: true,
        },
        {
            id: 40,
            name: "Rasmalai",
            description: "Soft cottage cheese patties in sweet milk",
            price: 249,
            rating: 4.8,
            reviews: 456,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7n1G-YaFPlozJ7MY0J30dYaTkQ0k6Np5XXw&s",
            restaurant: "Dessert House",
            category: "desserts",
            veg: true,
        },

        //  COLD DRINKS 
        {
            id: 41,
            name: "Cold Coffee",
            description: "Chilled coffee with ice cream",
            price: 199,
            rating: 4.4,
            reviews: 89,
            image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=400&q=80",
            restaurant: "Coffee House",
            category: "drinks",
            veg: true,
            sizes: [
                { name: "250 ml", price: 99},
                { name: "500 ml", price: 149},
                { name: "1 L", price: 249}
            ]
        },
        {
            id: 42,
            name: "Iced Latte",
            description: "Chilled coffee with milk",
            price: 299,
            rating: 4.5,
            reviews: 134,
            image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80",
            restaurant: "Coffee House",
            category: "drinks",
            veg: true,
            sizes: [
                { name: "250 ml", price: 149},
                { name: "500 ml", price: 249},
                { name: "1 L", price: 399}
            ]
        },
        {
            id: 43,
            name: "Mango Smoothie",
            description: "Fresh mango blended with yogurt",
            price: 249,
            rating: 4.5,
            reviews: 76,
            image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80",
            restaurant: "Coffee House",
            category: "drinks",
            veg: true,
            sizes: [
                { name: "250 ml", price: 129},
                { name: "500 ml", price: 199},
                { name: "1 L", price: 349}
            ]
        },
        {
            id: 44,
            name: "Fresh Lime Water",
            description: "Refreshing lime juice with mint",
            price: 99,
            rating: 4.3,
            reviews: 234,
            image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80",
            restaurant: "Coffee House",
            category: "drinks",
            veg: true,
            sizes: [
                { name: "250 ml", price: 49},
                { name: "500 ml", price: 79},
                { name: "1 L", price: 129}
            ]
        },
        {
            id: 45,
            name: "Strawberry Milkshake",
            description: "Creamy strawberry milkshake",
            price: 299,          
            rating: 4.6,
            reviews: 167,
            image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=400&q=80",
            restaurant: "Coffee House",
            category: "drinks",
            veg: true,
            sizes: [
                { name: "250 ml", price: 149},
                { name: "500 ml", price: 249},
                { name: "1 L", price: 399}
            ]
        },
        {
            id: 46,
            name: "Chocolate Shake",
            description: "Rich chocolate milkshake",
            price: 299,
            rating: 4.7,
            reviews: 198,
            image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80",
            restaurant: "Coffee House",
            category: "drinks",
            veg: true,
            sizes: [
                { name: "250 ml", price: 149},
                { name: "500 ml", price: 249},
                { name: "1 L", price: 399}
            ]
        },
          {
            id: 35,
            name: "Chocolate Brownie",
            description: "Warm chocolate brownie with vanilla ice cream",
            price: 399,
            rating: 5.0,
            reviews: 456,
            image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80",
            restaurant: "Dessert House",
            category: "desserts",
            veg: true,
        },
       
    ],

    // searchbar
    searchItem: '',


// filter
categories:"all",
// price

sortType:"",

}


export const menuSlice = createSlice({
    name: "food",
    initialState,
    reducers: {
        setSearchItem: (state, action) => {
            state.searchItem = action.payload;
        },
        setCategories:(state,action)=>{
            state.categories = action.payload
        },
        setSortType:(state, action)=>{
            state.sortType= action.payload
        }

    }
})

export const { setSearchItem, setCategories, setSortType } = menuSlice.actions
export default menuSlice.reducer;
