import { db } from "../index.js";


export const profile = async(req,res)=>{
    const username = req.body.data;
        console.log(username, "Profile Fetching");
        const result = await db.query("SELECT * FROM profile WHERE username = $1", [username]);
    
        const data = result.rows[0];
        console.log(data)
        if (data === undefined) {
            res.json("No Date");
        } else {
            res.json(data);
        }
}


export const setprofile = async (req, res) => {
    const data = req.body.profileData;
    console.log(data, "Data")
    const username = data.username;
    const fullname = data.fullName;
    const age = data.age;
    const gender = data.gender;
    const mail = data.mail;
    const coder = data.coder;
    const avatar = data.avatar;
    const bio = data.bio;

    try {
        const result = await db.query("INSERT INTO profile(username,fullname,age,gender,mail,coder,avatar,bio) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)", [username, fullname, age, gender, mail, coder, avatar, bio]);
        if (result) {
            console.log("Added");
            res.json("Added");
        } else {
            res.json("Error");
        }
    } catch (err) {
        res.json("Error");
    }
}
