import "../../styles/components/Filtr/Filtr.scss";

interface FiltrBlockItemProps {
  className: string;
  inputId: string;
  itemText: string;
  inputType:string;
  groupName:string;
}

function FiltrBlockItem({ className, inputId, itemText,inputType, groupName }: FiltrBlockItemProps) {
  return (
    <div className={`${className}__item item--checkbox`}>
      <input
        className={`${className}__input type`}
        type={inputType}
        id={inputId}
        name={groupName}
      />
      <p className="platform__text ">{itemText}</p>
    </div>
  );
}

export default FiltrBlockItem;
