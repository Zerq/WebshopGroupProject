"use client";

import { NoOperation, UserAdded } from "./eventsorucing/events";
import React, { createContext, useReducer, useState } from "react";
import { CommandLike, EventLike } from "./eventsorucing/interfaces";
import { ComplexModel, User } from "./model";


function eventReducer(state: ComplexModel, event: EventLike<unknown>) {
    //handle all events here and update the state
    //state should only ever be updated here 
    switch (event.eventName) {
        case UserAdded.name:
            const newUser = (event as UserAdded).payLoad;
            return { users: [...state.users, newUser]  } as ComplexModel;

        case NoOperation.name:
            console.log((event as NoOperation).payLoad);
            return state;

        default:
            return state;
    }
};

interface EventSourceLike {
    state: ComplexModel;
    execute: (command: CommandLike<ComplexModel>) => void;
}

export const EventContext = createContext<EventSourceLike | null>(null);

function addEventToStore(event: EventLike<unknown>) {
    const events = JSON.parse(localStorage.getItem("events") ?? "[]") as EventLike<unknown>[];
    events.push(event);
    localStorage.setItem("events", JSON.stringify(events));
}

 

export default function EventProvider({ children }: { children: React.ReactNode; }) {
    let initialModel = { users:[]} as ComplexModel;
    
    const saved = localStorage.getItem("events");
    const savedEvents:EventLike<unknown>[] =  saved? JSON.parse(saved) : [];

    savedEvents.forEach(evt=> {     
        initialModel = eventReducer(initialModel, evt);
    }); 



    const [state, dispatcer] = useReducer(eventReducer,initialModel);

    const execute = (command: CommandLike<ComplexModel>) => {
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