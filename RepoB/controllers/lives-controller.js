import {db} from "../index.js";

export const  cutL = async (req, res) => {
    const { username, lives } = req.body;

    await db.query("UPDATE points SET lives = $1 WHERE username = $2", [lives, username]).then((response) => {
        res.json("Done");
    }).catch((err) => {
        res.json("Error");
    });
}