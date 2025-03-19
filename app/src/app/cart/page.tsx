"use client"
import { CartItem } from "../types";
import styles from './cart.module.css';
import Image from 'next/image';
import { useCart } from "../generalprovider";

export default function CartPage() {
    const { cartItems, incrementCartItem, decrementCartItem, removeCartItem } = useCart();

    return (
        <div className={styles.cartPage}>
            <h2 className={styles.cartHead}>Cart</h2>
            {
                cartItems.length === 0 ? <h2 className={styles.emptyCart}>Kundvagnen är tom.</h2>:null
            }
            <div>
                {
                    cartItems.map((item: CartItem, index: number) => (
                        <div key={index} className={styles.cardCart}>
                            <Image
                                src={item.images[0]}
                                alt={item.title}
                                width={200}
                                height={200}
                            />
                            <div className={styles.title}>{item.title}</div>
                            <div className={styles.s1}>
                                <h2>{item.price * item.quantity} Kr</h2>
                                <div className={styles.incredecre}>
                                    <button
                                        onClick={() => {
                                            decrementCartItem(item.id);
                                        }}
                                    >-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => {
                                        incrementCartItem(item.id)
                                    }}>+</button>
                                </div>
                                <button onClick={() => removeCartItem(item.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
