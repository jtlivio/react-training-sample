import * as React from "react";
import styles from "./TrainingSamplePnP.module.scss";
import useTrainingPages from "../../../hooks/useTrainingPages"



export default function timeline() {
    const [trainingPages, isError] = useTrainingPages();
    console.log(trainingPages);
    if (!isError) {
        return (
            <div>
                {trainingPages.map((page, idx) => {
                    return (
                        <ol className={styles.timeline}>
                            <li key={idx} className={styles.timelineEntry}>
                                <div className={styles.timelineContent}>
                                    <h2 className={styles.timelineHeading}>{page.Title}</h2>
                                    <p className={styles.timelineText}>{page.TrainingArea}</p>
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