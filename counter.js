const fs = require("fs");

const getCount = () => {
    return fs.readFileSync('./count.txt', 'utf8');
}

const updateCount = (num) => {
    try {
        fs.writeFileSync('./count.txt', num.toString(), 'utf8');
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