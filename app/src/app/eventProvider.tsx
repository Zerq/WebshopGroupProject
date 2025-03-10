"use client";

import { NoOperation, User, UserAdded } from "./eventsorucing/events";
import React, { createContext, useReducer, useState } from "react";
import { CommandLike, EventLike } from "./eventsorucing/interfaces";


function eventReducer(state: User[], event: EventLike<unknown>) {
    //handle all events here and update the state
    //state should only ever be updated here 
    switch (event.eventName) {
        case UserAdded.name:
            const newUser = (event as UserAdded).payLoad;
            return [...state, newUser];

        case NoOperation.name:
            alert((event as NoOperation).payLoad);
            return state;

        default:
            return state;
    }
};


interface EventSourceLike {
    state: User[];
    execute: (command: CommandLike<User[]>) => void;
}

export const EventContext = createContext<EventSourceLike | null>(null);

function addEventToStore(event: EventLike<unknown>) {
    const events = JSON.parse(localStorage.getItem("events") ?? "[]") as EventLike<unknown>[];
    events.push(event);
    localStorage.setItem("events", JSON.stringify(events));
}


export default function EventProvider({ children }: { children: React.ReactNode; }) {
    const [state, dispatcer] = useReducer(eventReducer, new Array<User>());
    
    //const saved = localStorage.getItem("events");
    //const evts:EventLike<unknown>[] =  saved? JSON.parse(saved) : [];

    // const [events, setEvents] = useState(evts);
 

    const execute = (command: CommandLike<User[]>) => {
        //execute the command using the current state
        const events = command.execute(state);
        


        events.forEach(evt => {
            addEventToStore(evt);
            dispatcer(evt);
        });
    };

    return <EventContext.Provider value={{ state, execute }}>
        {children}
    </EventContext.Provider>;
}