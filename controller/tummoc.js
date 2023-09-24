const tummocCore = require("../core/tummoc.core");

class tummoc{
  static addUser = async (req, res) => {
    try{
      const userData = req?.body;

      const userResp = await tummocCore.addUser(userData);

      if(userResp){
        return res.status(200).send({success: true, message: "User has been added."});
      }

      return res.status(400).send({success: false, message: "User not added."});
    }catch(e){
      console.error("Error occured in addUser", e);
      return res.status(400).send({success: false, message: "User not added."});
    }
  }
  static verify = async (req, res) => {
    try{
      const userEmail = req?.query?.email || req?.body?.email || req?.params?.email;
  
      const userResp = await tummocCore.verifyUser(userEmail);

      if(userResp){
        return res.status(200).send({success: true});
      }

      return res.status(400).send({success: false});
    }catch(e){
      console.error("Error occured in tummoc", e);
      return res.status(400).send({success: false});
    }
  }

}

module.exports = tummoc;