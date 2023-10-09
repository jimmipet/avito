import { useDispatch } from "react-redux";
import { resetGenre } from "../redux/slices/Filtr/genreSlice";
import "../styles/components/SomeText/Sometext.scss";
import { resetOther } from "../redux/slices/Filtr/otherSlice";
import { resetPlatform } from "../redux/slices/Filtr/platformSlice";

function SomeText({
  handleApplyButtonClick,
}: {
  handleApplyButtonClick: () => void;
}) {
  const dispatch = useDispatch();
  const handleClearFiltersClick =() => {
    dispatch(resetGenre());
    dispatch(resetOther());
    dispatch(resetPlatform());
    handleApplyButtonClick();
  };

  return (
    <div className="some-text">
      <div className="some-text text">
        <h2>Advanced Game Search</h2>
        <p>Find and filter free-to-play games your way!</p>
      </div>
      <div className=" some-text delete-filtr">
        <p onClick={handleClearFiltersClick}>Clear filtrs</p>
      </div>
    </div>
  );
}

export default SomeText;
