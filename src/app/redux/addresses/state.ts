export interface Address {
  id: number;
  address: string;
  apartmentNumber: string;
  comment: string;
}

export type AddressFieldsData = Omit<Address, 'id'>;

export interface Addresses {
  entities: Address[];
}
