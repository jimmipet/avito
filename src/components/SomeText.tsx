import { useDispatch } from "react-redux";
import { resetGenre } from "../redux/slices/genreSlice";
import "../styles/components/SomeText/Sometext.scss";
import { resetOther } from "../redux/slices/otherSlice";
import { resetPlatform } from "../redux/slices/platformSlice";

function SomeText() {
  const dispatch = useDispatch();
  const handlyClick = () => {
    dispatch(resetGenre());
    dispatch(resetOther());
    dispatch(resetPlatform());
  };

  return (
    <div className="some-text">
      <div className="some-text text">
        <h2>Advanced Game Search</h2>
        <p>Find and filter free-to-play games your way!</p>
      </div>
      <div className=" some-text delete-filtr">
        <p onClick={handlyClick}>Clear filtrs</p>
      </div>
    </div>
  );
}

export default SomeText;
