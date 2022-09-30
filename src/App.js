import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./components/store/CartProvider";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCardHandler = () => {
        setCartIsShown(true);
    };

    const hideCardHandler = () => {
        setCartIsShown(false);
    };
    return (
        <CartProvider>
            {cartIsShown && <Cart onClose={hideCardHandler} />}
            <Header onShowCart={showCardHandler} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;
