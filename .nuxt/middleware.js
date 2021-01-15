const middleware = {}

middleware['islogin'] = require('../middleware/islogin.js')
middleware['islogin'] = middleware['islogin'].default || middleware['islogin']

middleware['nologin'] = require('../middleware/nologin.js')
middleware['nologin'] = middleware['nologin'].default || middleware['nologin']

export default middleware
