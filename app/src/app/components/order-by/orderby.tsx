import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SyntheticEvent } from "react";

import styles from "./orderby.module.css";
import OrderFlipper, { Direction } from "../order-flipper/OrderFlipper";

export default function OrderBy() {

    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString());
    const pathname = usePathname();
    const router = useRouter();



    const select = (e: SyntheticEvent<HTMLSelectElement, Event>) => {
        if (e.currentTarget.value === "none") {
            params.delete("orderBy");
            params.delete("order");
        }
        else {
            params.set("orderBy", e.currentTarget.value);
        }

        if (params.has("orderBy") && !params.has("order")) {
            params.set("order", "asc");
        }


        UpdateUrl(params);
    };

    const UpdateUrl = (params: URLSearchParams) => {
        const item = `${pathname}?${params.toString()}`;
        router.push(item);
    };

    const changeOrder = (n: Direction) => {
        if (params.has("orderBy")) {
            params.set("order", n === "down"? "asc": "desc");
            UpdateUrl(params);
        }
    };

    return <div className={styles.OrderBy}>
        <label className={styles.labelSelector} htmlFor="OrderBySelect">sortera</label>
        <select onChange={select} defaultValue={params.get("orderBy") ?? "none"} id="OrderBySelect" name="OrderBySelect">
            <option value="none" >None</option>
            <option value="price" >Price</option>
            <option value="title" >Title</option>
            <option value="category" >Category</option>4
            <option value="rating" >Rating</option>
        </select>
        <div className={styles.buttonWrapper}>
            <OrderFlipper onChange={changeOrder}></OrderFlipper>

        </div>
    </div>;
}