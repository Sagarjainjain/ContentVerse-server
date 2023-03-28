import jwt from "jsonwebtoken";

const secret = "test";

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isAuth = token.length < 500;
        
        if(!token) res.status(404).json({ message: "user not founded" });

        let decodedData;

        if(token && isAuth) {
            decodedData = jwt.verify(token, secret);

            req.userId = decodedData?.id;

        } else {
            res.status(404).json({message: "user not founded"})
        }

        next();
    } catch (error) {
        console.log(error); 
    }
}

export default auth;