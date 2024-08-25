export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
    photo: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    };
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
    user: {
        id: number;
        name: string;
        email: string;
        phone: string;
        website: string;
        address: {
            street: string;
            suite: string;
            city: string;
            zipcode: string;
        };
        company: {
            name: string;
            catchPhrase: string;
            bs: string;
        };
    },
    photoUsers: {
        picture: {
            large: string;
            medium: string;
        }
    }
};