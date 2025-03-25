"use client";
import { ReactNode } from "react";
import style from "./page.module.css";
import { renderToStaticMarkup } from "react-dom/server";
import { NewLetterData } from "../types";
import { useSearchParams } from "next/navigation";

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

async function register(email: string): Promise<boolean> {
  const key = crypto.randomUUID();
  const rex = /[^@]*@[^\.]+\..*/;
  if (!rex.test(email)) {
    return false;
  }1

  await send(email, "bekräfta email", <div>
    <a href={`http://localhost:3000/nyhetsbrev?action=confirm&key=${key}&email=${email}`} >bekräfta email</a>
  </div>);

  localStorage.setItem("fake_NewsLetter_" + email, JSON.stringify({ email: email, key: key, confirmed: false })); //unconfirmed 

  return true;
}

async function confirm(email: string, key: string): Promise<boolean> {

  const str = localStorage.getItem("fake_NewsLetter_" + email);

  if (!str) {
    return false;
  }

  const data = JSON.parse(str) as NewLetterData;

  if (data.key !== key) {
    return false;
  }

  data.confirmed = true;
  localStorage.setItem("fake_NewsLetter_" + email, JSON.stringify(data)); //save as registered

  await send(email, "confirmation successfull", <div>
    <h3>email verifieratl</h3>
    <p>Välkommen till Webbshopen </p>
    <a href={`http://localhost:3000/nyhetsbrev?action=unsub&key=${key}&email=${email}`} >Avregisterra från nyhetsbrev</a>
  </div>);

  return true;
}

async function unRegister(email: string, key:string): Promise<boolean> {
    const index = "fake_NewsLetter_" + email;
    const item = localStorage.getItem(index);

    if (!item) {
      return false;
    }
    
    const data = JSON.parse(item) as NewLetterData;

    if (data.key !== key || data.email !== email ){
      return false;
    }

    localStorage.removeItem(index);

    await send(email, "unsubscription  successfull", <div>
      <h3>unsubscription  successfull</h3>
      <p>Data has been removed.</p>
    </div>);

    return true;
}

export default function NyhetsbrevPage() {
  const postForm = async (e: FormData) => {
    const email = e.get("email");
    if (!email) return;
    await register(email.toString());
  };

  const params = useSearchParams();
  const key = params.get("key");
  const email = params.get("email");
  const action = params.get("action");
  

  if (key && email && action === "unsub") {
    unRegister(email, key).then(n => {
      if (n) {
        return <div>unsubscription successfull</div>
      } else {
        return <div>unsubscription failed</div>
      }
    });
  }

  if (key && email && action === "confirm") {
    confirm(email, key).then(n => {
      if (n) {
        return <div>confirmation successfull</div>
      } else {
        return <div>confirmation failed</div>
      }
    });
  }

  return <div>
    <h3>Sign up for news letter</h3>
    <form action={postForm}>
      <input id="email" name="email" type="email"></input>
      <button type="submit">register</button>
    </form>
  </div>;
}