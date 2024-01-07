import { Logger, LogLevel } from "@pnp/logging";
import { spfi, SPFI } from "@pnp/sp";
import { useEffect, useState } from "react";
import { IPage, IPageResponse } from "../interfaces/pages;
import { getSP } from "../common/pnpJsConfig";
import { Caching } from "@pnp/queryable";

const useTrainingPages = () => {
    const LOG_SOURCE = "PnPLog";
    const LIBRARY_NAME = "SitePages"

    const [pages, setPages] = useState<IPage[]>([]);
    const [isError, setError] = useState<boolean>(false);

    const _sp: SPFI = getSP();

    //Side Effect
    useEffect(() => {
        (async () => {
            try {
                const spCache = spfi(_sp).using(Caching({ store: "session" }))

                const response: IPageResponse[] = await spCache.web.lists
                    .getByTitle(LIBRARY_NAME)
                    .items.select("Id", "Title", "TrainingArea", "TrainingPageActive", "TrainingAreaPosition")
                    ();

                const items: IPage[] = response.map((item: IPageResponse) => {
                    return {
                        Id: item.ID,
                        Title: item.Title,
                        TraningArea: item.TrainingArea,
                        Active: item.TrainingPageActive,
                        Position: item.TrainingAreaPosition
                    };
                });
                setPages(items);
            } catch (error) {
                setError(true);
                Logger.write(
                    `${LOG_SOURCE} (getting files useEffect) - ${JSON.stringify(error)} - `,
                    LogLevel.Error
                );
            }
        })();
    }, []);

    return [pages, isError]
}

export default useTrainingPages