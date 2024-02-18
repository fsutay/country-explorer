import { ICountry } from "./ICountry";

export interface ICountryState {
  countries: ICountry[];
  searchText: string;
  isLoading:boolean
}
