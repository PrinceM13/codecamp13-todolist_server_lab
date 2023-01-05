const fs = require('fs/promises');

module.exports.readJSON = async (fileName) => {
    try {
        const data = await fs.readFile(fileName, { encoding: 'utf8' });
        return data;
    } catch (err) {
        console.log(err);
    }
}