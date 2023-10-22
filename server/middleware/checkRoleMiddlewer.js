const jwt = require('jsonwebtoken');

module.exports = function(role){
    return function(req, res, next){
        try {
            if(req.method === 'OPTIONS'){
                next();
            }
            const token = req.headers.authorization.split(' ')[1];
            if(!token){
                return res.status(401).json({message: 'Не авторизован'});
            }
    
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            if(decoded.role !== role){
                return res.status(400).json('Недостаточно прав');
            }
            
            req.user = decoded;

            next();

        } catch (e) {
            return res.status(401).json('Пользователь не авторизован');
        }
    }
}