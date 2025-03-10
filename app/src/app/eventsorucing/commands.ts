import { User, NoOperation, UserAdded } from "./events";
import { CommandLike, EventLike } from "./interfaces";

//command related to list of User

export class AddUser implements CommandLike<User[]> {
    public constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public middleName?: string
    ) { }

    execute(state: User[]): Array<EventLike<unknown>> {
        //if user with the same email already exists then send a NoOperation event this could be handled diffrently only chooseing this way to show branching event outcomes 
        if (state.find(n => n.email === this.email)) {
            return [new NoOperation("email is already registered to user")];
        }

        //returns an array containing a userAdded event now that we know that the email was not registered previously.
        return [new UserAdded({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            middleName: this.middleName
        })];
    }
}
