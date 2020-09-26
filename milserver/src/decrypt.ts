import { Database, database as db, IMDBUsers } from "./database"

class Decrypt {
    public range(start: number, end: number) {
        return Array.from({ length: (end - start) }, (v, k) => k + start);
    }
    public decrypt(messageog: string, keystr: string) {
        var message = messageog.split("")
        var rows = Math.floor(message.length / keystr.length);
        var cols = keystr.length;
        var encrypt = []
        var dict: { [id: string]: number } = {}
        var key = keystr.split("")
        var keys = key.slice()
        keys.sort()
        var indexes = []
        for (var i of this.range(0, cols)) {
            dict[keys[i]] = i;
        }
        for (var ikey of key) {
            indexes.push(dict[ikey])
        }
        for (var j of this.range(0, cols)) {
            var minarr = []
            for (i of this.range(rows * j, (rows * j) + rows)) {
                minarr.push(message[i]);
            }
            encrypt.push(minarr)
        }

        var decoded = ""
        for (j of this.range(0, rows)) {
            for (i of indexes) {
                console.log(encrypt[i][j])
                if (encrypt[i][j] != "_")
                    decoded += encrypt[i][j]
            }
        }

        var words = decoded.split(" ")
        var locations = []
        console.log(words)
        for (var place of db.MilitaryDatabase.places) {
            if (decoded.includes(place))
                locations.push(place);
        }
        console.log(decoded, locations)
        return {"message": decoded, "infiltrated": locations};
    }
}

export let decrypt = new Decrypt();