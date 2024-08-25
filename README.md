# SPFX WebPart providing an indicator to users by tagging the current Site Page 

## Summary

Imagine providing a Training Path to users by tagging a Site Page with a choice column indicating its relevant training. This WebPart suggests a way to implement the current active page, guided by a straightforward timeline.

![Here](./src/webparts/trainingSamplePnP/assets/demo.gif)

## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.18.2-green.svg)

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)

## Solution

| Solution    | Author(s)                                               |
| ----------- | ------------------------------------------------------- |
| react-training-sample | Joao Livio @jlivio |

## Version history

| Version | Date             | Comments        |
| ------- | ---------------- | --------------- |
| 1.0     | January 8, 2024 | Initial release |

## Disclaimer

**THIS CODE IS PROVIDED _AS IS_ WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

- Clone this repository
- Ensure that you are at the solution folder
- in the command-line run:
  - **npm install**
  - **gulp clean**
  - **gulp build serve**
- Use SPFx Fast Serve Tool
  - **npm run serve**
  
## Features

- Demo the active tagged page
- Demo Higligth the minimal timeline content
- Using PnPjs with React Functional Components & Hooks
- Extending the SharePoint Queryables instance with the PnPLogging behavior.
- Extending the SharePoint Queryable instance with the Caching behavior
- Loading list items from a SharePoint library

## References

- [PnPjs Library v3)](https://pnp.github.io/pnpjs/)
- [SPFx Fast Serve Tool)](https://github.com/s-KaiNet/spfx-fast-serve/)
- [React Hooks, Custom Hooks (PnPjs Repo Sample)](https://github.com/pnp/sp-dev-fx-webparts/tree/main/samples/react-pnp-js-hooks/)


Disclaimer
----------

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**