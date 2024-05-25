var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "Living room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.628503369361974,
        "pitch": 0.10976403489537567,
        "fov": 1.2409471360433495
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "1-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.18006104818912405,
        "pitch": 0.023229836302853357,
        "fov": 1.286237613484211
      },
      "linkHotspots": [
        {
          "yaw": -0.3875643857962121,
          "pitch": 0.08760579204845342,
          "rotation": 0,
          "target": "0-living-room"
        },
        {
          "yaw": 0.6060186900206546,
          "pitch": -0.003527192180747818,
          "rotation": 0,
          "target": "2-bedroom"
        },
        {
          "yaw": 1.791482830837678,
          "pitch": 0.06758187079940292,
          "rotation": 0,
          "target": "3-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 1.6617201313024674,
        "pitch": 0.05906128405001354,
        "fov": 1.4967563682390181
      },
      "linkHotspots": [
        {
          "yaw": -0.9696774401485158,
          "pitch": 0.09593060428591826,
          "rotation": 0,
          "target": "1-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.025210311417687592,
        "pitch": 0.1757848584460291,
        "fov": 1.4967563682390181
      },
      "linkHotspots": [
        {
          "yaw": 1.2704579313494655,
          "pitch": 0.09155956858055347,
          "rotation": 0,
          "target": "1-hall"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
