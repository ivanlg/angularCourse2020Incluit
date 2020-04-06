export class Contact {
    id:           number;
    name:         string;
    surname:    string;
    phone:        string;
    email:        string;
    adressName:   string;
    stateName:    string;
    districtName: string;
    zipCode:      number;

    public constructor(init?: Partial<Contact>) {
        Object.assign(this, init);
    }
}