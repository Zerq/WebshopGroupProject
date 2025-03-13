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
    // const totalCount = pagesCount;
    // const totalPages = limit > 0 ? Math.ceil(totalCount / limit) - 1 : 1;
    //TODO: Restrict current page to min/max
    // const currentPage = offset + 1;

    const generalContext = useContext(GeneralContext);

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    // Läs av nuvarande "skip" från URL:en
    const currentSkip = parseInt(searchParams.get("skip") || "0", 10);
    const validSkip = isNaN(currentSkip) ? 0 : Math.max(0, currentSkip);
    const currentPage = Math.max(1, Math.floor(validSkip / LIMIT) + 1);
    console.log("Skip:", validSkip, "Current Page:", currentPage);

    const getProducts = generalContext?.getProducts;

    const handlePageChange = (newSkip: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("skip", newSkip.toString());
        params.set("limit", LIMIT.toString());
        router.push(`${pathname}?${params.toString()}`);
        if (getProducts) {
            getProducts(LIMIT, newSkip);
        }
    };

    const handleFirstPage = () => handlePageChange(0);

    {/* // => handlePageChange((pagesCount - 1) * LIMIT, LIMIT)} /> */ }
    const handleLastPage = () => {
        const lastPageSkip = (pagesCount - 1) * LIMIT;
        handlePageChange(lastPageSkip);
    };

    const handlePrevPage = () => {
        const prevSkip = Math.max(0, currentSkip - LIMIT);
        handlePageChange(prevSkip);
    };

    const handleNextPage = () => {
        const nextSkip = validSkip + LIMIT
        if (nextSkip < pagesCount * LIMIT) {
            handlePageChange(nextSkip);
        }
    };

    return (
        <div className={styles.paginationNav}>
            <ChevronFirst size={24} onClick={handleFirstPage }/>
            <ChevronLeft size={24} onClick={handlePrevPage} />
            <span>Sida {currentPage} av {pagesCount}</span>
            <ChevronRight size={24} onClick={handleNextPage}/>
            <ChevronLast size={24} onClick={handleLastPage}/>
        </div>
    );
}


