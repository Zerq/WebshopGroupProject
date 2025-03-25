import { NewsLetterService } from "./NewsLetterService";
import { Services } from "../useService";

// no exporting this
//i don't want the rest of the system to even know that this is a fake component it only allowed to know of the baseclass i am using in lue of a interface
class FakeNewsLetterService extends NewsLetterService {
    public static instance: NewsLetterService;
    register(email: string): Promise<void> {
        return new Promise((resolve, reject) => {
            const rex = /[^@]*@[^\.]+\..*/;
            if (!rex.test(email)) {
                reject(); //email is invalid
            }

            localStorage.setItem("fake_NewsLetter_" + email, email);
            resolve();
        });
    }

    unRegister(email: string): Promise<void> {
        return new Promise((resolve, reject) => {

            if (localStorage.has("fake_NewsLetter_" + email)) {
                reject();
            }

            localStorage.delete("fake_NewsLetter_" + email);
            resolve();
        });
    }
}

//this is mmy shitty ioc style service container  i am registering the fake implementation based on my abstract baseclass and my concrete fake implementation
Services.Instance.Register(NewsLetterService,FakeNewsLetterService);