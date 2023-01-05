const { readJSON } = require('./readJSON');
const { header, footer, home, notFound, inputBar } = require('./html-chunk');
const { writeJSON } = require('./writeJSON');

module.exports = (req, res) => {
    let { url, method } = req;

    if (url === '/') {
        res.write(header);
        res.write(inputBar);
        readJSON('todoData.json').then(JSON.parse).then(todosArr => {
            const todosList = todosArr.reduce((acc, todo) => acc + `<li>${todo}</li>`, '')
            res.write(`<ul>${todosList}</ul>`);
            res.write(footer);
            return res.end();
        })
    } else if (url === '/add' && method === 'POST') {
        // get data form form
        let body = []
        req.on('data', chunk => { body.push(chunk) })
        req.on('end', () => {
            body = Buffer.concat(body).toString()
            
            // read from todoData.json
            readJSON('todoData.json').then(JSON.parse)
                // write new data to todoData.json
                .then(resquest => {
                    resquest.push(body.replace('user=', ''))
                    writeJSON('todoData.json', JSON.stringify(resquest, null, 2))
                })
                // redirect after done writing
                .then(() => {
                    res.writeHead(302, { 'location': '/' })
                    return res.end()
                })
        })
    } else {
        res.write(notFound);
        return res.end()
    }
}