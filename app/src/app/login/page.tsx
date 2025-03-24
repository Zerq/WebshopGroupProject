"use client";
import { useState } from "react";
import styles from './login.module.css';
import { Authentication } from "../actions";

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [statusMessage, setStatusMessage] = useState("");
    const [statusColor, setStatusColor] = useState("lightred");
    const [errors, setErrors] = useState<{ username?: string; password?: string }>({});
    const [statusType, setStatusType] = useState<string | null>(null);

    async function submitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault(); // Förhindra sidladdning
        const newErrors: { username?: string; password?: string } = {};
        setErrors({}); // Nollställ tidigare felmeddelanden

        if (!username) newErrors.username = "Ange användarnamn.";
        if (!password) newErrors.password = "Ange lösenord.";

            // Kontrollera om användarnamn och lösenord är tomma
            if (!username || !password) {
                setErrors({
                    username: !username ? "Username is required" : undefined,
                    password: !password ? "Password is required" : undefined,
                });
                return;
            }

        // if (Object.keys(newErrors).length > 0) return;

        try {
            const data = await Authentication.Login(username, password);
            if (data.errors) {
                // Om servern returnerar specifika fel för användarnamn eller lösenord
                setErrors({
                    username: data.errors.username || undefined,
                    password: data.errors.password || undefined,
                });
                return;
            }
            setStatusMessage(`✅ Inloggningen lyckades för ${data.firstName}!`);
            setStatusColor("white");
            setStatusType("success");
        } catch (error) {
            console.error("Login failed:", error);
            setStatusType("error");
            setStatusMessage("❌ Inloggningen misslyckades! Kontrollera användarnamn och lösenord.");
            setStatusColor("black");
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
                        {errors.username && <span className={styles.errorText}>{errors.username}</span>}
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
                        {errors.password && <span className={styles.errorText}>{errors.password}</span>}
                    </div>
                    <button type="submit" className={styles.submitButton}>Submit</button>
                </form>
                <div className={styles.successContainer} style={{ display: statusType === "success" ? "flex" : "none" }} aria-live="assertive">
                    <p className={styles.status} style={{ color: statusColor }}>{statusMessage}</p>
                </div>
                <div className={styles.errorContainer} style={{ display: statusType === "error" ? "flex" : "none" }} aria-live="assertive">
                    <p className={styles.status} style={{ color: statusColor }}>{statusMessage}</p>
                </div>
            </fieldset>
        </>
    );
}

