//Type mapping
type ReadOnly<T> = {
    readonly [K in keyof T]: T[K];
};

type Optional<T> = {
    [K in keyof T]?: T[K];
};

type Nullable<T> = {
    [K in keyof T]: T[K] | null;
};

//Utility types
interface Product {
    id: number;
    name: string;
    price: number;
}
// A Product where all properties are optional
let product1: Partial<Product>;
// A Product where all properties are required
let product2: Required<Product>;
// A Product where all properties are read-only
let product3: Readonly<Product>;
// A Product with two properties only (id and price)
let product4: Pick<Product, 'id' | 'price'>;
// A Product without a name
let product5: Omit<Product, 'name'>;