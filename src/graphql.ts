
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface User {
    id: string;
    userName?: Nullable<string>;
    email?: Nullable<string>;
}

export interface IQuery {
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
