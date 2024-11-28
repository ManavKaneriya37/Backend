const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const blackListTokenModel = require('../models/blacklistToken.model')

module.exports.authUser = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
       

        if(!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const isBlackListed = await blackListTokenModel.findOne({token})
        if(isBlackListed){
            return res.status(401).json({ message: 'Unauthorized' });   
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            const user = await userModel.findById(decoded._id);

            req.user = user;

            return next();
        } catch (error) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}