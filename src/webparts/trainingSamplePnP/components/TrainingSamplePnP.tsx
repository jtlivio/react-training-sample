import * as React from "react";
import type { ITrainingSamplePnPProps } from "./ITrainingSamplePnPProps";

import styles from "./TrainingSamplePnP.module.scss";
import useTrainingPages from "../../../hooks/useTrainingPages"



const TrainingSamplePnP: React.FC<ITrainingSamplePnPProps> = (props) => {
  // const { 
  //   context 
  // } = props;
    const [trainingPages, isError] = useTrainingPages();
    let currentPageUrl = props.context.pageContext.site.serverRequestPath.split("/").pop();
    console.log(trainingPages);
    if (!isError) {
        return (
            <div>
                <h1>{currentPageUrl}</h1>
                {trainingPages.map((page, idx) => {
                    return (
                        <ol className={styles.timeline}>
                            <li key={idx} className={styles.timelineEntry}>
                                <div className={styles.timelineContent}>
                                    <h2 className={styles.timelineHeading}>{page.Title}</h2>
                                    <p className={styles.timelineText}>{page.TrainingArea} - </p>
                                </div>
                            </li>
                        </ol>
                    );
                })}
            </div>
        );
    } else {
        return <p>Errorr</p>;
    }
}

export default TrainingSamplePnP

