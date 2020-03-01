module.exports = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control', 'GET, POST, DELETE, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, C-Requested-With, Content-Type, Accept')
    next()
}