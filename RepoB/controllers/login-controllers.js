import { db}  from "../index.js"



export  const  login = async  (req,res)=>{
    
        let user = req.body.data.user;
        let pass = req.body.data.pass;
    
    
        try {
            const result = await db.query("SELECT * FROM userid WHERE username = $1", [user]);
            const data = result.rows[0];
    
            // if (data.password === pass) {
            //     res.json("success");
            //     console.log("Redirecting");
            // } else {
            //     res.json("notsuccess");
            // }
    
            if (data === undefined) {
                res.json("notsuccess");
                console.log("Not Sucees");
            } else if (data.password === pass) {
                res.json("success");
            } else if (data.password !== pass) {
                res.json("notsuccess");
            }
            else {
                res.json("error");
            }
        } catch (err) {
            res.json("notsuccess");
        }
    
}


export const register = async (req,res)=>{
    let user = req.body.data.user;
    let pass = req.body.data.pass;

    try {
        const result = await db.query("SELECT * FROM userid WHERE username = $1", [user]);
        const data = result.rows[0];
        console.log(data);
        if (result.rows.length === 0) {
            const result = await db.query("INSERT INTO userid (username,password) VALUES($1,$2)", [user, pass]);
            if (result) {
                console.log("Done");
                res.json("Done");
            } else {
                res.json("Error");
            }
        } else {
            res.json("Already");
        }
    } catch (err) {
        res.json("Already");
    }
}
