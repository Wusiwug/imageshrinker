const fs = require("fs");

const getCount = () => {
    return fs.readFileSync('./count.txt', 'utf8');
}

const updateCount = (num) => {
    console.log("*** updateCount")
    try {
        console.log("*** num to write: ", num);
        let path = `${__dirname}/count.txt`;
        console.log("*** path: ", path);
        fs.writeFile(path, num.toString(), (err) => {
            if (err) console.log("*** write error: ", err);
            else console.log("successfully updated the count file");
        });
        return "success"
    } catch (err) {
        console.log(err)
        throw err
    }
}

module.exports = {
    getCount,
    updateCount
}