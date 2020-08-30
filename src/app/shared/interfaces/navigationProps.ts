export type RootParamsList = {
  MyAccount: undefined;
  AddressFields: {
    name: string;
    edit?: boolean;
    id?: number;
  };
  AddressDetails: {
    id: number;
  };
  MyAddresses: undefined;
  Maps: undefined;
  Login: undefined;
  Profile: undefined;
  Logout: undefined;
  SettingsList: undefined;
};

export type Routes = keyof RootParamsList;
