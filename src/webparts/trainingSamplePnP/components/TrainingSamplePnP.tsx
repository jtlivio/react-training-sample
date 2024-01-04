import * as React from "react";
import styles from "./TrainingSamplePnP.module.scss";
import type { ITrainingSamplePnPProps } from "./ITrainingSamplePnPProps";

/** rsuite */
/** Import styles on demand */

const TrainingSamplePnP: React.FC<ITrainingSamplePnPProps> = (props) => {
  // const { 
  //   hasTeamsContext 
  // } = props;
  return (
      <ol className={styles.timeline}>
        <li className={styles.timelineEntry}>
          <div className={styles.timelineContent}>
            <h2 className={styles.timelineHeading}>This is where our heading will go</h2>
            <p className={styles.timelineText}>This is where our text will go</p>
          </div>
        </li>
        <li className={styles.timelineEntry}>
          <div className={styles.timelineContent}>
            <h2 className={styles.timelineHeading}>This is where our heading will go</h2>
            <p className={styles.timelineText}>This is where our text will go</p>
          </div>
        </li>
        <li className={styles.timelineEntry}>
          <div className={styles.timelineContent}>
            <h2 className={styles.timelineHeading}>This is where our heading will go</h2>
            <p className={styles.timelineText}>This is where our text will go</p>
          </div>
        </li>
        <li className={styles.timelineEntry}>
          <div className={styles.timelineContent}>
            <h2 className={styles.timelineHeading}>This is where our heading will go</h2>
            <p className={styles.timelineText}>This is where our text will go</p>
          </div>
        </li>
      </ol>
  );
}

export default TrainingSamplePnP

