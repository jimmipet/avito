import styles from "../../styles/components/GamePageBloc/GamePageBlock.module.scss";

function NotFoundBlock(){
    return(
        <div className={styles.notfound}>
            <h1> Извините, ничего не найдено</h1>  
            <div className={styles.smile}>😕</div>
        </div>
        
    );
}

export default NotFoundBlock