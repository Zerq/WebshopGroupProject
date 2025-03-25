import { NewsLetterService } from "./NewsLetterService";
import { Services } from "../useService";



export default function NewsLetter(){
    const service = Services.Instance.Get(NewsLetterService);
    service.register()

    


return <input></input>

}