const fs = require('fs/promises');

module.exports.writeJSON = async (fileName, content) => {
    try {
        await fs.writeFile(fileName, content);
        return `done writing to --> ${fileName}`;
        // return JSON.parse(content);
    } catch (err) {
        console.log(err);
    }
}