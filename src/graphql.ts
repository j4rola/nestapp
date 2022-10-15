
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateUserInput {
    userName: string;
    email: string;
}

export interface User {
    id: string;
    userName?: Nullable<string>;
    email?: Nullable<string>;
}

export interface IQuery {
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
    users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
}

export interface IMutation {
    createUser(input?: Nullable<CreateUserInput>): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
