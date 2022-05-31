const express = require('express')
const router = express.Router()

const admin = require("firebase-admin");
const firebaseSDK = require("../firebase/firebase.js");
const {getFirestore} = require("firebase-admin/firestore")

admin.initializeApp({
  credential: admin.credential.cert(firebaseSDK)
});

const db = getFirestore()

router.post("/", async (req, res) => {

    console.log(req.body)

    //Check if body.user has sended
    if (!req.body || !req.body.user) {
        res.status(400).json({message: "User not defined on the body of request"})
        return
    }

    //Get user data
    const user = req.body.user
    
    const userData = {}

    try {
        const userReference = db.collection('users')
        const userRequest = await userReference.where("username", "==", user).limit(1).get()

        userRequest.forEach(doc => {
            userData.id = doc.id
            userData.username = doc.data()
        })
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }

    //Check if the userID is defined
    if (!userData.id) {
        res.status(400).json({message: "User don't found"})
        return
    }
    
    //Get user posts
    userData.posts = []

    try {
        const postsReference = await db.collection('users').doc(userData.id).collection("posts").get()
        
        postsReference.forEach(doc => {
            userData.posts.push({
                id: doc.id,
                ...doc.data()
            })
        })
    } catch (error) {
        console.log(err)
        res.status(400).json(err)
    }

    //Order posts by last modificated time
    userData.posts.sort((a, b) => b.date.seconds-a.date.seconds)

    //Hide user id
    userData.id = null
    
    res.json(userData)
})

module.exports = router