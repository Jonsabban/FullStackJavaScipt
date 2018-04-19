const express = require('express')
const app = express()

var gju = require('geojson-utils');
const gameArea = require("./gameData").gameArea.geometry;
const players = require("./gameData").players;


app.get('/', (req, res) => res.send('Geo Demo!'))
app.get("/geoapi/isuserinarea/:lon/:lat", (req, res) => {
    const lon = req.params.lon;
    const lat = req.params.lat;
    const pos = { "type": "Point", "coordinates": [lon, lat] }
    const found = gju.pointInPolygon(pos, gameArea);
    let returnObj = { status: found }
    const msg = found ? "point was inside gameArea" : "point was not inside gameArea";
    returnObj.msg = msg;
    res.json(returnObj.msg)
});
app.get("/geoapi/findNearbyPlayers/:lon/:lat/:rad", (req, res) => {
    var center = { "type": "point", "coordinates": [req.params.lon, req.params.lat] }
    var radius = req.params.rad;
    results = [];

    players.map((player) => {
        if (gju.geometryWithinRadius(player.geometry, center, radius)) {
            results.push(player)
        }
    })
    res.json(results);
});

app.get("/geoapi/distanceToUser/:lon/:lat/:username", (req,res) => {
    var center = {"type": "point", "coordinates": [req.params.lon, req.params.lat]}
    var username = req.params.username;
    var currentPlayer;
    players.forEach(player => {
        if ( player.properties.name = username) {
            currentPlayer = player;
        }
    });

    const distance = gju.pointDistance(center, currentPlayer.geometry);

    res.json(distance);

})

app.listen(3000, () => console.log('Example app listening on port 3000!'));
