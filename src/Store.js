import { configureStore, createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: 'products',
    initialState: {
        veg: [
            { source: "/image/vegpizza.jpg", name: "Veg Pizza", para: "A delicious vegetarian pizza with fresh toppings.", rating: 4.5, price: 250},
            { source: "/image/Veg/Spaghetti Pasta.jpg", name: "Spaghetti Pasta", para: "Delicious spaghetti served with a rich sauce.", price: 150 },
            { source: "/image/Veg/Cheeseburger.jpg", name: "Cheeseburger", para: "A classic cheeseburger with fresh veggies and cheese.", price: 110 },
            { source: "/image/Veg/Paneer Tikka.jpg", name: "Paneer Tikka", para: "Grilled paneer cubes marinated in spices.", price: 200 },
            { source: "/image/Veg/Veg Biryani.jpg", name: "Veg Biryani", para: "Aromatic rice with mixed vegetables and spices.", price: 180 },
            { source: "/image/Veg/Mushroom Soup.jpg", name: "Mushroom Soup", para: "Creamy mushroom soup with herbs.", price: 120 },
            { source: "/image/Veg/spring-roll.png", name: "Spring Rolls", para: "Crispy rolls filled with fresh vegetables.", price: 100 },
            { source: "/image/Veg/chole-bhature.jpg", name: "Chole Bhature", para: "Spicy chickpea curry served with fluffy bhature.", price: 160 },
            { source: "/image/Veg/stuffed-paratha.jpg", name: "Stuffed Paratha", para: "Indian bread stuffed with spiced veggies.", price: 130 },
            { source: "/image/Veg/Dosa.jpg", name: "Dosa", para: "Crispy South Indian rice pancake served with chutney.", price: 140 },
            { source: "/image/Veg/Paneer Tikka.jpg", name: "Palak Paneer", para: "Cottage cheese cooked in a rich spinach gravy.", price: 220 },
            { source: "/image/Veg/Aloo Gobi.jpg", name: "Aloo Gobi", para: "Potato and cauliflower cooked with Indian spices.", price: 170 },
            { source: "/image/Veg/Hakka Noodles.jpg", name: "Hakka Noodles", para: "Stir-fried noodles with veggies and soy sauce.", price: 190 },
            { source: "/image/Veg/Rajma Chawal.jpg", name: "Rajma Chawal", para: "Kidney bean curry served with steamed rice.", price: 180 },
            { source: "/image/Veg/Dal Makhani.jpg", name: "Dal Makhani", para: "Creamy lentil curry slow-cooked with butter.", price: 210 },
            { source: "/image/Veg/Kadai Paneer.jpg", name: "Kadai Paneer", para: "Paneer cooked with capsicum in a spicy gravy.", price: 230 },
            { source: "/image/Veg/Vegetable Korma.jpg", name: "Vegetable Korma", para: "Mixed veggies cooked in a creamy sauce.", price: 200 },
            { source: "/image/Veg/Baingan Bharta.jpg", name: "Baingan Bharta", para: "Smoky mashed eggplant cooked with spices.", price: 180 }
        
        ],
        nonVeg: [
            { source: "/image/Non-Veg/Chicken.jpg", name: "Chicken", para: "A delicious Chicken with fresh toppings.", price: 430 },
            { source: "/image/Non-Veg/Fish.jpg", name: "Fish", para: "Delicious Fish served with a rich marinara sauce.", price: 190 },
            { source: "/image/Non-Veg/Prawns.jpg", name: "Prawns", para: "A classic Prwan with fresh veggies and cheese.", price: 200 },
            { source: "/image/Non-Veg/R.jpg", name: "Crab", para: "Juicy and tender Crab cooked with garlic butter.", price: 350 },
            { source: "/image/Non-Veg/Lobster.avif", name: "Lobster", para: "A premium Lobster dish with rich creamy sauce.", price: 700 },
            { source: "/image/Non-Veg/Mutton.jpg", name: "Mutton", para: "Crispy and flavorful Mutton served with sauce.", price: 300 },
            { source: "/image/Non-Veg/Duck Roast.jpg", name: "Duck Roast", para: "Slow-roasted Duck with a flavorful spice rub.", price: 550 },
            { source: "/image/Non-Veg/ChickenBiryani.jpeg", name: "Chicken Biryani", para: "Fragrant basmati rice cooked with marinated chicken and spices.", price: 250 },
    { source: "/image/Non-Veg/MuttonCurry.jpg", name: "Mutton Curry", para: "Slow-cooked mutton in rich, spicy gravy.", price: 320 },
    { source: "/image/Non-Veg/ButterChicken.jpg", name: "Butter Chicken", para: "Creamy tomato-based chicken curry with butter and spices.", price: 280 },
    { source: "/image/Non-Veg/FishCurry.jpg", name: "Fish Curry", para: "Fresh fish cooked in coconut and tamarind-based gravy.", price: 230 },
    { source: "/image/Non-Veg/TandooriChicken.jpg", name: "Tandoori Chicken", para: "Char-grilled chicken marinated in yogurt and spices.", price: 260 },
    { source: "/image/Non-Veg/KadaiChicken.jpg", name: "Kadai Chicken", para: "Spicy chicken cooked with bell peppers in a thick gravy.", price: 270 },
    { source: "/image/Non-Veg/PrawnMasala.jpg", name: "Prawn Masala", para: "Juicy prawns cooked in a flavorful tomato-onion gravy.", price: 300 },
    { source: "/image/Non-Veg/EggCurry.jpg", name: "Egg Curry", para: "Boiled eggs in a rich and spicy onion-tomato gravy.", price: 180 },
    { source: "/image/Non-Veg/MuttonKeema.jpg", name: "Mutton Keema", para: "Minced mutton cooked with aromatic spices and peas.", price: 290 },
    { source: "/image/Non-Veg/Chicken65.jpg", name: "Chicken 65", para: "Crispy, deep-fried spicy chicken bites, South Indian style.", price: 220 }
  ],
        dessert: [
            { source: "/image/Desserts/Apple Pie.jpg", name: "Apple Pie", para: "A delicious Apple Pie with fresh toppings.", price: 70 },
            { source: "/image/Desserts/Almond Malai Kulfi.webp", name: "Almond Malai Kulfi", para: "Crispy and flavorful Almond Malai Kulfi.", price: 300 },
            { source: "/image/Desserts/Lemon Tart.jpg", name: " Lemon Tart", para: "Delicious  Lemon Tart.", price: 190 },
            { source: "/image/Desserts/Pistachio Phirni.jpg", name: "Pistachio Phirni", para: "A classic Pistachio Phirni with fresh Icecream and cheeries.", price: 200 },
            { source: "/image/Desserts/Chocolate Lava Cake.jpg", name: "Chocolate Lava Cake", para: "A rich and gooey chocolate cake with molten lava center.", price: 250 },
           { source: "/image/Desserts/Macarons.webp", name: "Macarons", para: "Crispy, colorful, and filled with rich ganache.", price: 150 },
            { source: "/image/Desserts/Tiramisu.jpg", name: "Tiramisu", para: "A classic Italian dessert with coffee-soaked layers and mascarpone.", price: 320 },
            { source: "/image/Desserts/Churros.jpg", name: "Churros", para: "Crispy and golden fried dough with cinnamon sugar.", price: 180 },
            { source: "/image/Desserts/Red Velvet Cake.jpg", name: "Red Velvet Cake", para: "Moist and fluffy red velvet cake with creamy frosting.", price: 290 },
             { source: "/image/Desserts/Black Forest Cake.webp", name: "Black Forest Cake", para: "A rich chocolate cake layered with cherries and whipped cream.", price: 280 },
            { source: "/image/Desserts/Mango Mousse.webp", name: "Mango Mousse", para: "A light and creamy mango-flavored mousse.", price: 210 },
            { source: "/image/Desserts/Baklava.jpg", name: "Baklava", para: "A traditional layered pastry filled with nuts and honey.", price: 350 },
            { source: "/image/Desserts/Rasmalai.webp", name: "Rasmalai", para: "Soft and spongy paneer balls soaked in flavored milk.", price: 230 },
            { source: "/image/Desserts/Gulab Jamun.jpg", name: "Gulab Jamun", para: "Deep-fried milk dumplings soaked in sugar syrup.", price: 120 },
            { source: "/image/Desserts/Coconut Ladoo.jpg", name: "Coconut Ladoo", para: "Soft and sweet coconut-based Indian dessert.", price: 100 },
            { source: "/image/Desserts/Brownie.webp", name: "Chocolate Brownie", para: "A rich and fudgy chocolate brownie.", price: 160 },
            { source: "/image/Desserts/Carrot Cake.jpg", name: "Carrot Cake", para: "Moist spiced cake with cream cheese frosting.", price: 240 },
            { source: "/image/Desserts/Custard Pudding.jpg", name: "Custard Pudding", para: "Silky smooth custard with a caramelized top.", price: 190 }
        
        ],

        featured: [
            { source: "/image/vegpizza.jpg", name: "Veg Pizza", para: "A delicious vegetarian pizza with fresh toppings.",rating: 5, price: 250 },
            { source: "/image/Veg/Cheeseburger.jpg", name: "Cheese Burger", para: "A classic cheeseburger with fresh veggies and cheese.",rating: 4, price: 110 },
            { source: "/image/Veg/Spaghetti Pasta.jpg", name: "Spaghetti Pasta", para: "Delicious spaghetti served with a rich sauce.",rating: 5, price: 150 }
        ],
        searchQuery: "",  // <-- Add search query state

        
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        }
    }
    

});

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) =>
        {
            const item = state.find(item => item.name === action.payload.name);
            if (item)
            {
                item.quantity += 1;
            } else
            {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        increment: (state, action) =>
        {
            const item = state.find(item => item.name === action.payload.name);
            if (item)
            {
                item.quantity += 1;
            }
        },
        decrement: (state, action) =>
        {
            const item = state.find(item => item.name === action.payload.name);
            if (item && item.quantity > 1)
            {
                item.quantity -= 1;
            } else
            {
                return state.filter(item => item.name !== action.payload.name);
            }
        },
        remove: (state, action) =>
        {
            return state.filter(item => item.name !== action.payload.name);

        },
        clearCart: () => []
    }
})
const orderSlice = createSlice({
    name: 'order',
    initialState: [],
    reducers: {
        completePurchase: (state, action) =>
        {
            state.push(action.payload);
        }
    }
})
const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        cart: cartSlice.reducer,
        order: orderSlice.reducer
    }
    
})
export const { addToCart, increment, decrement, remove, clearCart } = cartSlice.actions;
export const { completePurchase } = orderSlice.actions;
export default store;
