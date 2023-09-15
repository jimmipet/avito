import "../../styles/components/Filtr/Filtr.scss"

interface FiltrBlockItemProps {
    className: string;
    inputId: string;
    itemText: string;
}


function FiltrBlockItem({className, inputId, itemText}:FiltrBlockItemProps){
    return(
        <div className={`${className}__item item--checkbox`}>
            <input className={`${className}__input type`} type="checkbox"  id={inputId}/> 
            <p className="platform__text ">{itemText}</p>
        </div>

    );
}


export default FiltrBlockItem;