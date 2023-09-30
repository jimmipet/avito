import  styles from "../../styles/components/GamePageBloc/GamePageBlock.module.scss"
import { MinimumSystemRequirements } from "../../typing"
function GameMinRequirements({ systemRequirements }: { systemRequirements: MinimumSystemRequirements }) {
    
    const infoItems = [
      { label: 'OS', value: systemRequirements.os },
      { label: 'Processor', value: systemRequirements.processor },
      { label: 'Memory', value: systemRequirements.memory },
      { label: 'Graphics', value: systemRequirements.graphics },
      { label: 'Storage', value: systemRequirements.storage },
      { label: 'Additional Notes', value: 'Specifications may change during development' },
    ];
  
    return (
      <div className={styles.min}>
        <div className={styles.title_hr}> 
          <h2>Минимальные требования</h2>
          <hr className={styles.hr} />
        </div>
        <div className={styles.grid}>
          <div className={styles.grid_item_min}>
            {infoItems.map((item, index) => (
              <div className={styles.grid_info} key={index}>
                <p>{item.label}</p>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        </div>    
      </div>
    );
  }
  

export default GameMinRequirements;