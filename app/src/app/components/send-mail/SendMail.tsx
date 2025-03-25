import { MouseEvent, ReactNode } from "react";
import { renderToString } from "react-dom/server";

import style from "./SendMail.module.css";


//fake mail sending UI
export default function SendMail(props: { email: string, title: string, children: ReactNode[] }) {
    const content: ReactNode = <>{...props.children}</>;
    const txt = encodeURI(renderToString(content));
    const close = (e: MouseEvent<HTMLElement>) => {
        ((e.target as HTMLElement).parentElement as HTMLDialogElement).close();
    };

    return <dialog className={style.SendMailDialog} open>
        <h3>Fake EmailSender</h3>
        <button onClick={close}>Close</button>
        <a href={`mailto:${props.email}?subject=${props.title}&body=${txt}`} onClick={close}>Send mail</a>
    </dialog>
}

// <SendMail email={"zogZog@hotmail.se"} title={"zog"}>
//   <h3>title hoopla</h3>
//   <p>
//     blarg <a href ="https://www.google.com">blargator</a>
//   </p>
// </SendMail>