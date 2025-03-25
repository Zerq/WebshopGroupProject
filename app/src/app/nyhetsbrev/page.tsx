"use client";
import style from "./page.module.css";

export default function NyhetsbrevPage() {

const postForm  = (e: FormData) => {
  const email = e.get("email");


};


  return <div>
      <h3>Sign up for news letter</h3>
      <form action={postForm}>
          <input id="email" name="email" type="email"></input>
          <button type="submit">register</button>
      </form>
     </div>;
}