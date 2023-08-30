import React from 'react';
import "../styles/components/Filtr.scss"
interface FiltrBlockTitleProps {
    className: string;
    titleText: string;
}

function FiltrBlockTitle({className, titleText}:FiltrBlockTitleProps){
    return (
            <div className="filtr-menu__block-title">
                <h2 className={`filtr-menu__title ${className}__title`}>${titleText}</h2>
                <hr className="filtr-menu__hr" />        
            </div>
    );
}

export default FiltrBlockTitle