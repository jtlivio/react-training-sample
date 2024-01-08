// import for WebPartContext which we will use to configure our SPFI/GraphFI interfaces.
/* eslint-disable no-var */
/* Expected '!==' and instead saw '!='. */

import { WebPartContext } from "@microsoft/sp-webpart-base";

// import pnp and pnp logging system
import { spfi, SPFI, SPFx as spSPFx } from "@pnp/sp";
import { graphfi, GraphFI, SPFx as graphSPFx } from "@pnp/graph";
import { LogLevel, PnPLogging } from "@pnp/logging";

// imports for modules you want to use
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/batching";
import "@pnp/graph/users";



// eslint-disable-next-line no-var
var _sp: SPFI;
var _graph: GraphFI;

export const getSP = (context?: WebPartContext): SPFI => {
  if (context != null) {
    //You must add the @pnp/logging package to include the PnPLogging behavior it is no longer a peer dependency
    // The LogLevel set's at what level a message will be written to the console
    _sp = spfi().using(spSPFx(context)).using(PnPLogging(LogLevel.Warning));
  }
  return _sp;
};

export const getGraph = (context?: WebPartContext): GraphFI => {
  if (context != null) {
    //You must add the @pnp/logging package to include the PnPLogging behavior it is no longer a peer dependency
    // The LogLevel set's at what level a message will be written to the console
    _graph = graphfi().using(graphSPFx(context)).using(PnPLogging(LogLevel.Warning));
  }
  return _graph;
};


