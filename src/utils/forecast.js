const request = require('request')


const forecast = (address,callback) => {
    const url = "http://api.weatherapi.com/v1/current.json?key=123681227c9d43ad9e8182303201412&q="+address
    
    request({url: url,json: true},(error,response) => {
        if(error)
        callback('Unable to server',undefined)
        else if(response.body.error)
        callback('Unable to fetch location',undefined)
        else
        callback(undefined,{"weather": response.body.current.condition.text, "temp": response.body.current.temp_c})
    })
    }

    module.exports = forecast