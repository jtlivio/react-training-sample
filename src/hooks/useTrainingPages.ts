import { Logger, LogLevel } from "@pnp/logging";
import { spfi, SPFI } from "@pnp/sp";
import { useEffect, useState } from "react";
import { IPage, IPageResponse } from "../interfaces/pages";
import { getSP } from "../common/pnpJsConfig";
import { Caching } from "@pnp/queryable";

const useTrainingPages = () => {
    const LOG_SOURCE = "PnPLog";
    const LIBRARY_NAME = "Site Pages"

    const [trainingPages, setPages] = useState<IPage[]>([]);
    const [isError, setError] = useState<boolean>(false);

    const _sp: SPFI = getSP();

    //Side Effect
    useEffect(() => {
        (async () => {
            try {
                const spCache = spfi(_sp).using(Caching({ store: "session" }))

                const response: IPageResponse[] = await spCache.web.lists
                    .getByTitle(LIBRARY_NAME)
                    .items.select("Id", "Title", "TrainingArea", "TrainingPageActive", "TrainingAreaPosition", "FileLeafRef")
                    .orderBy("TrainingAreaPosition", true)
                    .filter("TrainingPageActive eq 1")
                    ();

                const items: IPage[] = response.map((item: IPageResponse) => {
                    return {
                        Id: item.Id,
                        Title: item.Title,
                        TrainingArea: item.TrainingArea,
                        Active: item.TrainingPageActive,
                        Position: item.TrainingAreaPosition,
                        Name: item.FileLeafRef

                    };
                });
                setPages(items);
            } catch (err) {
                setError(true);
                Logger.write(
                `${LOG_SOURCE} (getting files useEffect) - ${JSON.stringify(err)} - `, LogLevel.Error
                );
            }
        })();
    }, []);

    return [trainingPages, isError] as const
};

export default useTrainingPages