const express = require("express")

const router = express.Router();

const Contact = require("../Model/Contact")

router.get("/test" , (req , res ) => {
    res.send( "fffffff" )
})

router.post("/add" , async(req , res) => {
    try {
        const {name , email , phoneNumber} = req.body 
        const newContact = new Contact ({name , email , phoneNumber})
        await newContact.save()
        res.status(200).send({msg : "contact Object Has been Added" , newContact})
    } catch (error) {
        res.status(400).send({msg : "cannot be added " , error})
    }
})

router.get("/all-users" , async(req , res) => {
    try {
        const listOfContacts = await Contact.find()
        res.status(200).send({msg : "contact List" , listOfContacts})
    } catch (error) {
        res.status(400).send({msg : "Cant get List" , error})
    }
})

router.delete("/:_id" ,async(req , res) => {
    try {
        const {_id} = req.params;
        await Contact.findOneAndDelete({_id})
        res.status(200).send({msg : "contact Deleted"})
    } catch (error) {
        res.status(400).send({msg : "Cannot Delete Contact" , error})
    }
})

router.get("/:_id" , async(req , res) => {
    try {
        const {_id} = req.params;
        const userContact =  await Contact.findById({_id})
        res.status(200).send({msg : "This Contact" , userContact  })        
    } catch (error) {
        res.status(400).send({msg : "cannot find contact" , error })
    }
})

router.put("/:_id" , async(req , res) => {
    try {
        const {_id} = req.params;
        const resault = await Contact.findByIdAndUpdate({_id} , {$set : {...req.body}})
        res.status(200).send({msg : "Contact Updated!" })
    } catch (error) {
        res.status(400).send({msg : "Cannot Update" , error})
    }
})


module.exports = router ;
