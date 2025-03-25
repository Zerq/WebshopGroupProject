//can be used to represent an abstract constructor
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export type AbsCtr<T> = Function & { prototype: T; };
// eslint-enable-next-line @typescript-eslint/no-unsafe-function-type 

//can be used to represent an with an empty constructor
export interface Ctr<T> {
    new(): T;
}

//never exported
export class Services {
    private constructor(){}

    static #instance: Services;
    public static get Instance(): Services{
        if (!Services.#instance){
            Services.#instance = new Services();
        }
        return Services.#instance;
    }

    #services: Map<string, unknown> =new Map();

    //instantiate a service using an abstract constructor pair with a concrete constructor for the instantiation
    public Register<T> (absCtr: AbsCtr<T>,  ctr: Ctr<T>){
        this.#services.set(absCtr.name, new ctr() as unknown);
    }

    //get a stored instance based on an abstract constructor
    public Get<T>(type:AbsCtr<T>){
        return this.#services.get(type.name) as T;
    }    
}

