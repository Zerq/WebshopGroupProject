import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SyntheticEvent, useEffect, useState } from "react";

import styles from "./filterByCategory.module.css";
import { FetchCategories } from "@/app/actions";

export default function FilterByCategory() {

    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString());
    const pathname = usePathname();
    const router = useRouter();
    const [categories, setCategories] = useState(new Array<string>());

    useEffect(() => {
        FetchCategories().then(n => {
            setCategories(n);
        });
    }, []);

    const select = (e: SyntheticEvent<HTMLSelectElement, Event>) => {
        if (e.currentTarget.value === "none") {
            params.delete("filterBy");
        }
        else {
            params.set("filterBy", e.currentTarget.value);
        }
        params.delete("limit");
        params.delete("skip");
        
        UpdateUrl(params);
    };


    const UpdateUrl = (params: URLSearchParams) => {
        const item = `${pathname}?${params.toString()}`;
        router.push(item);
    };

    return <div className={styles.OrderBy}>
        <label className={styles.labelSelector} htmlFor="FilterBySelect">Kategori</label>
        <select onChange={select} defaultValue={params.get("orderBy") ?? "none"} id="FilterBySelect" name="FilterBySelect">

           
            {...[<option key="-1" value="none" >Inge</option>, ...categories.map((n,i)=> <option  key={i} value={n}>{n}</option>)]}

        </select>
    </div>;
}