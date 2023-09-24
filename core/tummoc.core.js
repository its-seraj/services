const tummocModel = require("../model/tummoc.model");
const { v5: uuidv5 } = require("uuid");

class tummocCore {
  static addUser = async (userData) => {
    try {
      const userDBObject = {
        rowId: uuidv5(userData.email, process.env.namespace),
        name: userData.name,
        email: userData.email,
        isActive: true,
      };

      const dbResp = await tummocModel.updateOne(
        {
          rowId: userDBObject.rowId,
        },
        {
          $set: { ...userDBObject },
        },
        { upsert: true }
      );

      if (dbResp?.modifiedCount > 0 || dbResp?.upsertedCount > 0) {
        return true;
      }

      return false;
    } catch (e) {
      console.error("Error occured in verifyUser", e);
      return false;
    }
  };

  static verifyUser = async (userData) => {
    try {
      const userDBData = await tummocModel.findOne({ email: userData });

      if (userDBData.isActive > 0) {
        return true;
      }

      return false;
    } catch (e) {
      console.error("Error occured in verifyUser", e);
      return false;
    }
  };
}

module.exports = tummocCore;
