const fs = require("fs");

const getCount = () => {
    return fs.readFileSync('./count.txt', 'utf8');
}

const updateCount = (num) => {
    try {
        fs.writeFileSync('./count.txt', num, 'utf8');
        return "success"
    } catch (err) {
        throw err
    }
}

module.exports = {
    getCount,
    updateCount
}