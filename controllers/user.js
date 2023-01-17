const User = require("../Model/User")
const bcypt = require("bcrypt")


exports.register = async (req , res ) => {
    try {
        const {name , email , password , phone} = req.body ;
        const foundUser = await User.findOne({email});
        if (foundUser) { return res.status(400).send({error : [{msg : "email arledy used "}]})  }

        const saltRounds =  10 
        const hachedPassword = await bcypt.hash(password , saltRounds) 


        const newUser = new User({...req.body  , password : hachedPassword})
        await newUser.save()
        res.status(200).send({succes : [{msg : "register Done "}]})
    } catch (error) {
        res.status(400).send({error : [{msg : "cannot Register "}]})
    }
}

exports.login = async(req , res) => {
    try {
        const {email , password} = req.body 
//
        const checkUser = await User.findOne({email})
        if (!checkUser) {return  res.status(400).send({error : [{msg : "User Not Found "}]})  }
//
const checkedPassword = await bcypt.compare(password , checkUser.password)
if (!checkedPassword) {return  res.status(400).send({error : [{msg : "Wrond Password"}]})  }
        //
        res.status(200).send({succes : [{msg : "Wellcome " }] , user : checkUser})

    } catch (error) {
        res.status(400).send({error : [{msg : "cannot Login "}]})
    }
}

