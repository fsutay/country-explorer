export interface ICountry {
  code: string;
  name: string;
  emoji: string;
  isSelected: boolean;
  continent: {
    name: string;
    countries: {
      code: string;
      name: string;
    };
  };
}


