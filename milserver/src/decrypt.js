const database = require("./database")

const range = (start, end) => Array.from({ length: (end - start) }, (v, k) => k + start);
methods = {
    "decrypt": function (message, key) {
        message = message.split("")
        rows = Math.floor(message.length / key.length);
        cols = key.length;
        encrypt = []
        dict = {}
        key = key.split("")
        keys = key.slice()
        keys.sort()
        indexes = []
        for(i of range(0, cols))
        {
            dict[keys[i]] = i;
        }
        for(i of key)
        {
            indexes.push(dict[i])
        }
        for (j of range(0, cols)) {
            minarr = []
            for (i of range(rows * j, (rows * j) + rows)) {
                minarr.push(message[i]);
            }
            encrypt.push(minarr)
        }

        decoded = ""
        for(j of range(0, rows)){
            for(i of indexes)
            {
                console.log(encrypt[i][j])
                if(encrypt[i][j] != "_")
                decoded += encrypt[i][j]
            }
        }

        words = decoded.split(" ")
        locations = []
        console.log(words)
        for(place of database.places){
            if(decoded.includes(place))
            locations.push(place);
            // console.log(word)
            // if(database.places.includes(word)){
            //     
            // }
        }
        console.log(decoded, locations)
        //console.log(indexes);
        return decoded;
    }
}

module.exports = methods;