import { useContext } from "react";
import { AddUser } from "../eventsorucing/commands";
import { EventContext } from "../eventProvider";

export default function UserRegister() {
    const eventCtx = useContext(EventContext);
    if (!eventCtx) throw new Error('EventContext måste användas inom en EventProvider');
    const { execute } = eventCtx;

    const formAction = (e: FormData) => {

        const firstName = e.get("FirstName")?.toString();
        const lastName = e.get("LastName")?.toString();
        const email = e.get("Email")?.toString();
        const MiddleName = e.get("MiddleName")?.toString();

        if (firstName && lastName && email) {
            const command = new AddUser(firstName, lastName, email, MiddleName);
            execute(command);
        }
    };

    return <form action={formAction}>
        <label htmlFor="FirstName">FirstName:</label>   <input id="FirstName" name="FirstName" /><br />
        <label htmlFor="MiddleName">MiddleName:</label> <input id="MiddleName" name="MiddleName" /><br />
        <label htmlFor="LastName">LastName:</label>     <input id="LastName" name="LastName" /><br />
        <label htmlFor="Email">Email:</label>           <input type="email" id="Email" name="Email" /><br />
        <input type="submit" value="Register" />
    </form>;
}