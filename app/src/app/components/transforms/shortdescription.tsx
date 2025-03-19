
export function ShortDescription(inp: string) {
    const shorter = "";
    if (inp.length >= 30) {
        let shorter = inp.substring(0, 30);
        return shorter;
    }
    return (inp);
}