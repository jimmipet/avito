import "../../styles/components/Filtr/Filtr.scss";
import { useDispatch } from 'react-redux';
import { setPlatform} from '../../redux/slices/platformSlice'
import { setGenre} from '../../redux/slices/genreSlice'
import { setOther} from '../../redux/slices/otherSlice'

interface FiltrBlockItemProps {
  className: string;
  inputId: string;
  itemText: string;
  inputType:string;
  groupName:string;
}

function FiltrBlockItem({ className, inputId, itemText,inputType, groupName }: FiltrBlockItemProps) {
  const dispatch = useDispatch();

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
        onChange={handleChange} 
      />
      <p className="platform__text ">{itemText}</p>
    </div>
  );
}

export default FiltrBlockItem;
