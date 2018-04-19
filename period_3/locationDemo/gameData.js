const gameArea = {
   "type": "Feature",
   "properties": {},
   "geometry": {
     "type": "Polygon",
     "coordinates": [
       [
         [
           12.55256652832031,
           55.79809684152555
         ],
         [
           12.561492919921875,
           55.77966236981707
         ],
         [
           12.574882507324219,
           55.781689623414294
         ],
         [
           12.58707046508789,
           55.78892895389262
         ],
         [
           12.578487396240234,
           55.800026648156454
         ],
         [
           12.55256652832031,
           55.79809684152555
         ]
       ]
     ]
   }
 };

const players = [ {
    "type": "Feature",
    "properties": {"name": "player1"},
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.568016052246094,
        55.78226881935603
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {"name": "player2"},
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.558746337890625,
        55.79529845202839
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {"name": "player3"},
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.574539184570312,
        55.7918243094437
      ]
    }
  }
];

module.exports = {
    gameArea: gameArea,
    players: players
}