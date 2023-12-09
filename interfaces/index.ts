export interface DataInfo {
    name: string,
    address: string,
    city: string,
    UF: string,
    zip: string,
    number: number,
    complementary: string
}

export interface DataStatus {
    [x: string]: any
    label: string,
    description: string
}