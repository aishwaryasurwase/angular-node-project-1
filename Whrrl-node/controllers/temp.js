const userMdl = require("../models/users_model");

class UsersCtrl {
  constructor() { }

  saveUser(req, res) {
    console.log("REQUEST BODY ", req.body);
    // var obj = new userMdl({
    //   name: req.body.name,
    //   emailID: req.body.emailID,
    //   mobileNO: req.body.mobileNO,
    //   nationality: req.body.nationality,
    //   imagePath: req.body.imagePath
    // })
    // console.log("Image path ", obj.imagePath);
    // obj
    //   .save()
    //   .then()
    //   .catch((err) => {
    //     res.json({ status: 400, data: err })
    //   });
    res.json({ status: 200, data: "Data added successfully" });
  }

  getUser(req, res) {
    userMdl
      .find({ emailID: req.params.emailID })
      .then((result) => {
        res.json({ data: result });
      })
      .catch((err) => {
        res.json({ data: err })
      });
  }

  // uploadFile(req, res){
  //   res.json({status: 200, data: 'File uploaded successfully'});
  // }
}

module.exports = new UsersCtrl();
