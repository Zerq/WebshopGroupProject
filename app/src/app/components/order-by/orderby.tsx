import { SyntheticEvent } from "react";

export default function OrderBy(){

    const select = (e:SyntheticEvent<HTMLSelectElement, Event>)=> {
        console.log(e);
    };

    return <div>
        <label htmlFor="OrderBySelect">OrderBy</label>
        <select onSelect={select} id="OrderBySelect" name="OrderBySelect">
            <option value={undefined}>None</option>
            <option value="Price">None</option>
            <option value="Category">None</option>
            <option value="Rating">None</option>          
        </select>
    </div>
}