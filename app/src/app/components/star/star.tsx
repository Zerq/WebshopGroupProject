import style from "./star.module.css";
export default function start(props: { score: number }) {
    const score = props.score;
    const frac = score / 5;

    return <div className={style.stars} title={score + "/5"}>
        <div className={style.frac} data-score={frac}>
            <p className={style.score}>{score}/5</p>
        </div>
    </div>;
}