//interface for all events
//represents the change to done to the model
export interface EventLike<TPayLoad> { 
    eventName: string;
    payLoad: TPayLoad;
}

//interface for all commands
export interface CommandLike<TModel> {
    //will return an array of events
    execute(state: TModel): EventLike<unknown>[];
}
