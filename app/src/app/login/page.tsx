"use client";
import { useState } from "react";
import styles from './login.module.css';
import { Authentication } from "../actions";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<{ username?: string; password?: string }>({});

    async function submitForm(event: { preventDefault: () => void; }) {
        event.preventDefault(); // Förhindra sidladdning
        const newErrors: { username?: string; password?: string } = {};
        if (!username) newErrors.username = "Användarnamn är obligatoriskt.";
        if (!password) newErrors.password = "Lösenord är obligatoriskt.";

        setErrors(newErrors);

        try {
            await Authentication.Login(username, password);
            console.log("Login attempt successful!");
        } catch (error) {
            console.error("Login failed", error);
        }
    }

    return (
        <>
            <fieldset>
                <form className={styles.formContainer} onSubmit={submitForm} aria-labelledby="login-title">
                    <h1>Inloggningssida</h1>
                    <div className={styles.inputGroup}>
                        <label htmlFor="username" className={styles.userNameLabel}>Användarnamn:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Användarnamn"
                            className={styles.userNameInput}
                            aria-required="true"
                            aria-describedby={errors.username ? "username-error" : undefined}
                            aria-invalid={errors.username ? "true" : "false"}
                        />
                            {errors.username && <span id="username-error" className={styles.errorText}>{errors.username}</span>}
                        </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password" className={styles.passWordLabel}>Lösenord:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Lösenord"
                            className={styles.passWordInput}
                            aria-required="true"
                            aria-describedby={errors.password ? "password-error" : undefined}
                            aria-invalid={errors.password ? "true" : "false"}
                        />
                    </div>

                    <button type="submit" className={styles.submitButton}>Submit</button>
                </form>
            </fieldset>
        </>
    )
}

