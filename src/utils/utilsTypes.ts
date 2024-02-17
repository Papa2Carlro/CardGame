export type Pick<T, K extends keyof T> = { [P in K]: T[P] };
export type Record<K extends string, T> = { [P in K]: T };
export type Required<T> = { [P in keyof T]-?: T[P] };
export type Readonly<T> = { readonly [P in keyof T]: T[P] };
export type Partial<T> = { [P in keyof T]?: T[P] | undefined };
export type Omit<T, K extends string | number | symbol> = {
    [P in Exclude<keyof T, K>]: T[P];
};
export type Exclude<T, U> = T extends U ? never : T;
export type Extract<T, U> = T extends U ? T : never;
export type NonNullable<T> = T extends null | undefined ? never : T;
export type ScrollBehavior = 'auto' | 'smooth';
export type Entries<T> = { [K in keyof T]: [K, T[K]] }[keyof T][];
export type ObjectStr<T> = { [key: string]: T };
