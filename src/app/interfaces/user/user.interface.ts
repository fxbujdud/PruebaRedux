export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    geo: IGeo;
    phone: string;
    website: string;
    company: ICompany;
}

export interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

export interface IGeo {
    lat: string;
    long: string;
}

export interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}
