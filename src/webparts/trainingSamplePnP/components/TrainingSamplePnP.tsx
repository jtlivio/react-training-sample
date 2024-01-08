import * as React from "react";
import type { ITrainingSamplePnPProps } from "./ITrainingSamplePnPProps";

import styles from "./TrainingSamplePnP.module.scss";
import useTrainingPages from "../../../hooks/useTrainingPages"


// explicit-function-return-type:
// no-floating-promises:
const TrainingSamplePnP: React.FC<ITrainingSamplePnPProps> = (props) => {
  const {
    hasTeamsContext
  } = props;
  const [trainingPages, isError] = useTrainingPages();
  const currentPageUrl = props.context.pageContext.site.serverRequestPath.split("/").pop();
  if (!isError) {
    return (
      <>
        <section className={`${styles.trainingSamplePnP} ${hasTeamsContext ? styles.teams : ''}`}>
          {trainingPages.map((page, idx) => {
            return (
              <ol key={idx} className={styles.timeline}>
                <li key={idx} className={styles.timelineEntry}>
                  <div className={currentPageUrl === page.Name ? styles.timelineContentActive : styles.timelineContent}>
                    <h2 className={styles.timelineHeading}>{page.Title}</h2>
                    <p className={styles.timelineText}>{page.TrainingArea} - {page.Name}</p>
                  </div>
                </li>
              </ol>
            );
          })}
        </section>
      </>
    );
  } else {
    return <p>Errorr</p>;
  }
}

export default TrainingSamplePnP

