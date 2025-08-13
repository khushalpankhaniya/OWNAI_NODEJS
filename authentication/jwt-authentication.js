import jwt from 'jsonwebtoken'

// genarate token
const genrateToken = (userData) => {
    return jwt.sign(userData , process.env.JWT_SECRET || '123456' , {expiresIn : '12h'});
}

// user authentication middleware 
const authenticate = (req, res, next) => {
    try {
        
        const token = req.header('Authorization')?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ success : false , message: 'access denied.no token provided.' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || '123456');

        req.userData = decoded;
        next(); 
    } catch (error) {
        console.log(error);
        res.status(400).json({success : false , message: 'invalid token.' });
    }
};

const requireAdmin = (req, res, next) => {
    if (req.userData?.role !== 'Admin') {
        return res.status(403).json({ success: false, message: 'acess denied. admins only.' });
    }
    next();
};

export {genrateToken , authenticate , requireAdmin};