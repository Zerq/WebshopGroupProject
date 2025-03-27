"use client";

import { ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import style from "@/app/nyhetsbrev/page.module.css";
import { NewLetterData } from "@/app/types";

function send(email: string, title: string, content: ReactNode): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
        const txt = encodeURI(renderToStaticMarkup(content));


        let dialog = document.querySelector("#fakeEmailDialog") as HTMLDialogElement;
        if (!dialog) {
            dialog = document.createElement("dialog");
            dialog.className = style.SendMailDialog;
            dialog.id = "fakeEmailDialog";
            document.body.appendChild(dialog);
        }
        dialog.innerHTML = "";

        const h3 = document.createElement("h3");
        h3.innerText = "Fake EmailSender";
        dialog.appendChild(h3);

        const CloseButton = document.createElement("button");
        CloseButton.innerText = "close";
        CloseButton.onclick = (e: Event) => {
            ((e.target as HTMLAnchorElement).parentElement as HTMLDialogElement).close();
            resolve(false);
        };
        dialog.appendChild(CloseButton);

        const a = document.createElement("a");
        a.innerText = "Send mail";
        a.onclick = (e: Event) => {
            ((e.target as HTMLAnchorElement).parentElement as HTMLDialogElement).close();
            resolve(true);
        };
        a.href = `mailto:${email}?subject=${title}&body=${txt}`;

        dialog.appendChild(a);
        dialog.showModal();
    });
}

export default function newsLetterAdminUI() {

    const sendCampaign = (node: ReactNode, styleContent: string) => {
        const recipients: Array<string> = [];
        for (const key in localStorage) {
            if (key.startsWith("fake_NewsLetter_")) {
                const email = localStorage[key] as NewLetterData;
                recipients.push(email.email);
            }
        }
        send(recipients.join(","), "Post kampanj", node, styleContent);
    };

    return <>
    <EasterTemplate></EasterTemplate>
        <button onClick={() => sendCampaign(<EasterTemplate></EasterTemplate>, "img {width:3rem}")}>Send Easter newsLetter</button>
    </>;
}

export function EasterTemplate() {
    return <div>

        <h3>Glad påsk önskar Webshopen</h3>
        <p>
            blaha blaha blaha text text text....
        </p>
        <ul>
            <li>
                <a href="http://localhost:3000/products/1"><img src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png" alt="Powder Canister" /> Powder Canister 9.99:-</a>
            </li>
            <li>
                <a href="http://localhost:3000/products/2"><img src="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png" alt="Eyeshadow Palette with Mirror" /> Powder Canister 19.99:-</a>
            </li>
            <li>
                <a href="http://localhost:3000/products/3"><img src="https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png" alt="Powder Canister" /> Powder Canister 14.99:-</a>
            </li>
        </ul>
    </div>;
}