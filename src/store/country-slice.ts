import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_SELECTED_INDEX } from '../constants';
import { ICountryState } from '../interface/ICountryState';
import { ICountry } from '../interface/ICountry';

const initialState: ICountryState = {
    countries: [],
    searchText: '',
    isLoading:false
};

export const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers: {
        setLoading:(state,action:PayloadAction<boolean>)=>{
            state.isLoading = action.payload;
        },
        addCountry: (state, action: PayloadAction<ICountry[]>) => {
            state.countries=[];
            state.countries.push(...action.payload);

            const count = state.countries.length;
            const needToColorIndex = count>DEFAULT_SELECTED_INDEX+1 ? DEFAULT_SELECTED_INDEX:count-1;
            const updatedCountries = state.countries.map((country, index) => ({
                ...country,
                isSelected: index === needToColorIndex ? true : false
            }));
            state.countries=updatedCountries;
        }, 
        setSelected:(state,action:PayloadAction<string>)=>{
            const selectedArray = state.countries;

            selectedArray.forEach(country => {
                if(country.code === action.payload){
                    country.isSelected=!country.isSelected;
                }else{
                    country.isSelected = false;
                }
            });
        },
        loadCountries(state, action:PayloadAction<string>){
            
        }
    }
});

export const { addCountry,setSelected,setLoading} = countrySlice.actions;

export default countrySlice.reducer;
