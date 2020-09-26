import { Database, database as db, IMDBUsers } from "./database"

const range = (start: number, end: number) => Array.from({ length: (end - start) }, (v, k) => k + start);
var methods = {
    "decrypt": function (messageog: string, keystr: string) {
        var message = messageog.split("")
        var rows = Math.floor(message.length / keystr.length);
        var cols = keystr.length;
        var encrypt = []
        var dict:{[id: string]: number} = {}
        var key = keystr.split("")
        var keys = key.slice()
        keys.sort()
        var indexes = []
        for(var i of range(0, cols))
        {
            dict[keys[i]] = i;
        }
        for(var ikey of key)
        {
            indexes.push(dict[ikey])
        }
        for (var j of range(0, cols)) {
            var minarr = []
            for (i of range(rows * j, (rows * j) + rows)) {
                minarr.push(message[i]);
            }
            encrypt.push(minarr)
        }

        var decoded = ""
        for(j of range(0, rows)){
            for(i of indexes)
            {
                console.log(encrypt[i][j])
                if(encrypt[i][j] != "_")
                decoded += encrypt[i][j]
            }
        }

        var words = decoded.split(" ")
        var locations = []
        console.log(words)
        for(var place of db.MilitaryDatabase.places){
            if(decoded.includes(place))
            locations.push(place);
        }
        console.log(decoded, locations)
        return decoded;
    }
}

module.exports = methods;