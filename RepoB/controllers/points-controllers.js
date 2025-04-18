import {db} from "../index.js";

export const points =  async (req, res) => {
    const user = req.body.data;
    const result = await db.query("SELECT * FROM points WHERE username =($1)", [user]);
    console.log(result.rows[0], "points");
    const data = result.rows[0];

    try {
        if (result.rows.length === 0) {
            const result = await db.query("INSERT INTO points (username ,lives,coins) VALUES($1,$2,$3)", [user, 100, 100]);
            console.log(result);
        } else {
            res.json(data);
        }
    } catch (err) {
        res.json("Error");
    }
};

export const addP =  async (req, res) => {
    const { username, coins } = req.body;
    console.log(username, coins);
    await db.query("UPDATE points SET coins = $1 WHERE username = $2", [coins, username]).then((response) => {
        res.json("Done");
    }).catch((err) => {
        res.json("Error");
    });
}