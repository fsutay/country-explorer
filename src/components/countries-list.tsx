import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setSelected } from "../store/country-slice";
import { ListGroup } from "react-bootstrap";
import { ICountryListProps } from "../interface/ICountryListProps";
import { RootState } from "../store/store";
import PuffLoader from "react-spinners/PuffLoader";

const CountriesList: React.FC<ICountryListProps> = ({ countries }) => {

  const dispatch = useDispatch()
  const [bgColorIndex, setBgColorIndex] = useState(0);
  const isLoading = useSelector((state: RootState) => state.country.isLoading);


  const getRandomColor = () => {
    const bgColor = ['#FFC0CB', "#FF00FF", "#20B2AA", "#FF0000", "#FFA500"];
    const randomIndex = Math.floor(Math.random() * bgColor.length);
    return bgColor[randomIndex];
  };


  const handleSelectClick = (countryCode: string) => {
    dispatch(setSelected(countryCode))
  };

  return (
    <ListGroup>
   {isLoading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}> 
          <PuffLoader color="#36d7b7" />
        </div>
      ) : (
        countries.map((c, index) =>
          <ListGroup.Item as="li"
            key={c.code}
            action
            style={{ backgroundColor: c.isSelected ? getRandomColor() : "initial" }}
            onClick={() => {
              handleSelectClick(c.code);
              setBgColorIndex(bgColorIndex + 1);
            }}
          >
            {c.emoji} {c.name}
          </ListGroup.Item>
        )
      )}
  </ListGroup>
  )
}

export default CountriesList
