import "../../styles/components/Filtr/Filtr.scss";
import { useDispatch, useSelector } from 'react-redux';
import { setPlatform} from '../../redux/slices/platformSlice'
import { setGenre} from '../../redux/slices/genreSlice'
import { setOther} from '../../redux/slices/otherSlice'
import { RootState } from "../../redux/store";

interface FiltrBlockItemProps {
  className: string;
  inputId: string;
  itemText: string;
  inputType:string;
  groupName:string;
}

function FiltrBlockItem({ className, inputId, itemText,inputType, groupName }: FiltrBlockItemProps) {
  const dispatch = useDispatch();
  const checked = useSelector((state: RootState) => {
    if (groupName === 'platform') {
      return state.platform.selectedPlatform === inputId;
    } else if (groupName === 'genre') {
      return state.genre.selectedGenre === inputId;
    } else if (groupName === 'other') {
      return state.other.selectedOther === inputId;
    }
    return false;
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value } = e.target;
    if (groupName === 'platform') {
      dispatch(setPlatform(value));
    } else if (groupName === 'genre') {
      dispatch(setGenre(value));
    } else if (groupName === 'other') {
      dispatch(setOther(value));
    }
  };
  return (
    <div className={`${className}__item item--checkbox`}>
      <input
        className={`${className}__input type`}
        type={inputType}
        id={inputId}
        name={groupName}
        value={inputId}
        checked={checked}
        onChange={handleChange} 
      />
      <p className="platform__text ">{itemText}</p>
    </div>
  );
}

export default FiltrBlockItem;
