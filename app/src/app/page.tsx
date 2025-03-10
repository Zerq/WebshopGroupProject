"use client";

import styles from "./page.module.css";
import UserRegister from "./compnents/UserRegister";
import { useContext } from "react";
import { EventContext } from "./eventProvider";

export default function Home() {
  const eventCtx = useContext(EventContext);
  if (!eventCtx) throw new Error('EventContext måste användas inom en EventProvider');
  const { state } = eventCtx;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <UserRegister></UserRegister>
        <table>
          <thead>
            <tr>
              <td>FirstName</td>
              <td>MiddleName</td>
              <td>LastName</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {...state.map((n, i) => <tr key={i}>
              <td>{n.firstName}</td>
              <td>{n.middleName ?? ""}</td>
              <td>{n.lastName}</td>
              <td>{n.email}</td>
            </tr>)}
          </tbody>
        </table>
      </main>
    </div>
  );
}
