import styles from "../../styles/components/GamePageBloc/GamePageBlock.module.scss";
import { useState } from "react";

function GameScreenshots({ gameData }: { gameData: GameImg }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    setModalVisible(false);
  };

  const screenshotCount = gameData.screenshots.length;
  const screenshotContainerStyle =
    screenshotCount > 3 ? styles.screenshotMore : styles.screenshot;
  const screensMore = screenshotCount > 3 ? styles.screenMore : styles.screen;
  return (
    <div>
      <div className={styles.title_hr}>
        <h2>{gameData.title} Screenshots</h2>
        <hr className={styles.hr} />
      </div>
      <div className={screenshotContainerStyle}>
        {gameData.screenshots.map((screenshot: string, index: number) => (
          <div
            key={index}
            className={screensMore}
            onClick={() => openModal(index)}
          >
            <img
              className={styles.image}
              src={screenshot.image}
              alt={`Screenshot ${index}`}
            />
          </div>
        ))}
      </div>

      {modalVisible && selectedImageIndex !== null && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent}>
            <img
              className={styles.modalImage}
              src={gameData.screenshots[selectedImageIndex].image}
              alt={`Screenshot ${selectedImageIndex}`}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default GameScreenshots;
