const request = require('request')

const geocode= (location,callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+location+".json?access_token=pk.eyJ1Ijoidi1rYXktOTYiLCJhIjoiY2tpb3V2YndyMWVtdDJzbGI1cWQzcTBoNSJ9.eiOWdTv5q0OchvaaqxzM1g&limit=1"

request({url:url,json:true},(error,response) => {
    if(error)
    callback("Server not found",undefined)
    else if(response.body.features.length == 0)
    callback("Unable to find location",undefined)
    else
    {
    const coordinates = {
        latitude : response.body.features[0].center[0],
        longitude : response.body.features[0].center[1]
    }
    callback(undefined,coordinates)
    }
})
}

module.exports = geocode