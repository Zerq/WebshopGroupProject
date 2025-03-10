import { EventLike } from "./interfaces";

// user data the example model would be an array of these...
export interface User {
    firstName: string;
    middleName?: string;
    lastName: string;
    email: string;
}


export class UserAdded implements EventLike<User> {
    public eventName: string;
    public constructor(
        public payLoad: User
    ) {
        this.eventName = UserAdded.name;
    }
}

//represents for when commands fail to execute...  the paylod is an error message
export class NoOperation implements EventLike<string> {
    public eventName: string;
    public constructor(
        public payLoad: string
    ) {
        this.eventName = NoOperation.name;
    }
}

