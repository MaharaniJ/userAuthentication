const Jwt = require('jsonwebtoken');
 module.exports = function(req,res,next){
    try{
  let token = req.header('x-token');
  if(!token){
    return res.status(400).json({message: 'Token missing'});
  }
  let decoded = Jwt.verify(token, 'jwtsecretkey');
  req.user = decoded.user;
  next();
//   let payload = {
//     user:{
//         id:exist.id
//     }
//   }
    }
    catch(e){
        console.log(e);
     return res.status(401).json({message: 'server error'});

    }
 }

 //token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4NmY3MTM1MDUwOGE0MjExZWE1YTE1In0sImlhdCI6MTY4NjU4MTE3NCwiZXhwIjoxNjkxMDgxMTc0fQ.EpG7TPnUzUKQyeMN_P0q8umIoZTYJ9lOvZESQ_EsCys