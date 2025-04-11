import axios from "axios";

export const handleCheckout = async () => {
    try {
        await axios.post(`${process.env.WEB_URL}/checkout`, { cart }, { withCredentials: true });
        alert("Checkout successful!");
    } catch (error) {
        console.error("Checkout failed:", error);
    }
};