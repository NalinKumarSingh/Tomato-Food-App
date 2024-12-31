import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
  const {token} = req.headers;
  if(!token){
    return res.json({success:false, message:"Not Authorized Login/SignUp to continue"});
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    //after decoding we can access the user id because we got the id from decoding
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({success:false, message:"Invalid Token"})
  }
}

export default authMiddleware;

//Basicaly what it does is it checks if the token is present in the headers of the request, if it is not present it will return a message saying "Not Authorized Login/SignUp to continue", if the token is present it will decode the token and get the user id from the token and add it to the body of the request and then call the next middleware function.