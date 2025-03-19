import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SyntheticEvent } from "react";

import styles from "./orderby.module.css";

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
        else 
        {
            params.set("orderBy", e.currentTarget.value);
        }

        UpdateUrl(params);
    };

    const asc = ()=> {
        params.set("order", "asc");
        UpdateUrl(params);
    };

    const desc = ()=> {
        params.set("order", "desc");
        UpdateUrl(params);
    };

    const UpdateUrl = (params: URLSearchParams)=> {
        const item = `${pathname}?${params.toString()}`;
        router.push(item);
    };

    return <div className={styles.OrderBy}>
        <label className={styles.labelSelector} htmlFor="OrderBySelect">OrderBy</label>
        <select onChange={select} defaultValue={params.get("orderBy") ?? "none"} id="OrderBySelect" name="OrderBySelect">
            <option value="none" >None</option>
            <option value="price" >Price</option>
            <option value="title" >Title</option>
            <option value="category" >Category</option>
            <option value="rating" >Rating</option>
        </select>
        <div className={styles.buttonWrapper}>
        <button className={styles.orderButtons} onClick={asc}>▴</button>
        <button className={styles.orderButtons} onClick={desc}>▾</button>
        </div>
    </div>;
}