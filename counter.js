const fs = require("fs");

const getCount = () => {
    return fs.readFileSync('./count.txt', 'utf8');
}

const updateCount = (num) => {
    console.log("*** updateCount")
    try {
        let path = `${__dirname}/count.txt`;
        console.log("*** path: ", path);
        fs.writeFileSync(path, num.toString(), 'utf8');
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