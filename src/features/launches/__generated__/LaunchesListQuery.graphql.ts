/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type LaunchesListQueryVariables = {};
export type LaunchesListQueryResponse = {
    readonly launchesPast: ReadonlyArray<{
        readonly id: string | null;
        readonly mission_name: string | null;
        readonly launch_date_local: unknown | null;
        readonly launch_site: {
            readonly site_name_long: string | null;
        } | null;
        readonly links: {
            readonly article_link: string | null;
            readonly flickr_images: ReadonlyArray<string | null> | null;
        } | null;
        readonly rocket: {
            readonly rocket_name: string | null;
        } | null;
        readonly ships: ReadonlyArray<{
            readonly name: string | null;
            readonly home_port: string | null;
            readonly image: string | null;
        } | null> | null;
    } | null> | null;
};
export type LaunchesListQuery = {
    readonly response: LaunchesListQueryResponse;
    readonly variables: LaunchesListQueryVariables;
};



/*
query LaunchesListQuery {
  launchesPast(limit: 10) {
    id
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      article_link
      flickr_images
    }
    rocket {
      rocket_name
    }
    ships {
      name
      home_port
      image
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "limit",
    "value": 10
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "mission_name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "launch_date_local",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "LaunchSite",
  "kind": "LinkedField",
  "name": "launch_site",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "site_name_long",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "LaunchLinks",
  "kind": "LinkedField",
  "name": "links",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "article_link",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "flickr_images",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "LaunchRocket",
  "kind": "LinkedField",
  "name": "rocket",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "rocket_name",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "home_port",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "image",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LaunchesListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Launch",
        "kind": "LinkedField",
        "name": "launchesPast",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Ship",
            "kind": "LinkedField",
            "name": "ships",
            "plural": true,
            "selections": [
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "launchesPast(limit:10)"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LaunchesListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Launch",
        "kind": "LinkedField",
        "name": "launchesPast",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Ship",
            "kind": "LinkedField",
            "name": "ships",
            "plural": true,
            "selections": [
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v1/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "launchesPast(limit:10)"
      }
    ]
  },
  "params": {
    "cacheID": "5ed56e86941842799c3bd70f7fe6bf01",
    "id": null,
    "metadata": {},
    "name": "LaunchesListQuery",
    "operationKind": "query",
    "text": "query LaunchesListQuery {\n  launchesPast(limit: 10) {\n    id\n    mission_name\n    launch_date_local\n    launch_site {\n      site_name_long\n    }\n    links {\n      article_link\n      flickr_images\n    }\n    rocket {\n      rocket_name\n    }\n    ships {\n      name\n      home_port\n      image\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '67e23c61749e9b52e938aee30e0566f1';
export default node;
