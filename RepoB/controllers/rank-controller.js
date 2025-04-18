import {db} from "../index.js"

export const rank = async (req, res) => {
    try{
    const result = await db.query("SELECT fullname,  coins,  ROW_NUMBER() OVER (ORDER BY coins DESC) AS rank FROM  points  INNER JOIN   profile  ON points.username = profile.username ORDER BY  coins DESC");
    const data = result.rows;

    // data.map((d) => { console.log(d, "data") });
    console.log(result.rows,"ROES");
    return  res.json(data);
    }catch(err){
        return res.json(err)
    }
}