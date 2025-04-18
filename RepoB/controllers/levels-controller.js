import {db}  from "../index.js";


export const levels = async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM level WHERE username = $1", [req.body.data]);
        if (result.rows.length === 0) {
            await db.query("INSERT INTO level(username,levels,tab) VALUES ($1,$2,$3)", [req.body.data, "one", 0]);
            res.json("Success");
        }
        // console.log(result.rows[0]);
        // res.json(result.rows[0]);
        const data = result.rows[0];
        res.json(data);
    } catch (err) {
        res.json("Error");
    }
}


export const nextPage = async (req, res) => {
    const data = req.body.nextTabs;
    const user = req.body.user;
    const response = await db.query("UPDATE level SET tab = ($1) WHERE usename = ($2) ", [data, user])
    if (response) {
        console.log("Dione");
        res.json("Success");
    } else {
        res.json("Unsuccess");
    }

}