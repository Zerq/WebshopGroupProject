"use client"
import {
    ChevronRight,
    ChevronLast,
    ChevronLeft,
    ChevronFirst,
} from "lucide-react";
import Link from "next/link";
import styles from "./nav.module.css";
import { useContext } from "react";
import { GeneralContext } from "../../generalprovider";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const LIMIT = 25;
// const router = useRouter();

export default function PaginationNav({
    pagesCount,
}: {
    path: string;
    pagesCount: number;
    limit: number;
}) {

    const generalContext = useContext(GeneralContext);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Läs av nuvarande "skip" från URL:en
    const currentSkip = Number(searchParams.get("skip")) || 0;
    const validSkip = Math.max(0, currentSkip);
    const currentPage = Math.max(1, Math.floor(validSkip / LIMIT) + 1);

    const getProducts = generalContext?.getProducts;

    const updatePage = (newSkip: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("skip", newSkip.toString());
        params.set("limit", LIMIT.toString());

        router.push(`${pathname}?${params.toString()}`);
        getProducts?.(LIMIT, newSkip);
    };

    const pageHandlers = {
        first: () => updatePage(0),
        last: () => updatePage((pagesCount - 1) * LIMIT),
        prev: () => updatePage(Math.max(0, validSkip - LIMIT)),
        next: () => {
            const nextSkip = validSkip + LIMIT;
            if (nextSkip < pagesCount * LIMIT) updatePage(nextSkip);
        },
    };

    return (
        <div className={styles.paginationNav}>
            <ChevronFirst size={24} onClick={pageHandlers.first} />
            <ChevronLeft size={24} onClick={pageHandlers.prev} />
            <span>Sida {currentPage} av {pagesCount}</span>
            <ChevronRight size={24} onClick={pageHandlers.next} />
            <ChevronLast size={24} onClick={pageHandlers.last} />
        </div>
    );
}


