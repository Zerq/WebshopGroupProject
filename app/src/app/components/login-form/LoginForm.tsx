"use client";
import styles from './LoginForm.module.css';
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

export default function LoginForm() {
    const [state, loginAction] = useActionState(login, undefined);
    const { pending } = useFormStatus()
    return (
        <>
            <fieldset>
                <form className={styles.formContainer} action={loginAction} aria-labelledby="login-title">
                    <h2>Inloggningssida</h2>
                    <div className={styles.inputGroup}>
                        <label htmlFor="username" className={styles.userNameLabel}>Användarnamn</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Användarnamn"
                            aria-required="true"
                            required />
                        <label htmlFor="password">Lösenord</label>
                        {state?.errors?.email && (
                            <p className="text-red-500">{state.errors.email}</p>
                        )}

                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            required
                        />
                        {state?.errors?.password && (
                            <p className="text-red-500">{state.errors.password}</p>
                        )}
                        <button disabled={pending} type="submit">
                            Logga in
                        </button>
                    </div>
                </form>
            </fieldset>
        </>
    )
}