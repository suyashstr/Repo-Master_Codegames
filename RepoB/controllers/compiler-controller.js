import { exec } from 'child_process';
import fs from "fs";
import { error } from "console";
import { stdout } from "process";
 
 
 
 export const compiler = async (req, res) => {
    const code = req.body.datatoSend.code;
    const input = req.body.datatoSend.input;

    console.log(code,"CODE");

    // const {code,input}=req.body.datatoSend;
    console.log(code);
    console.log(input);


    fs.writeFileSync('index.c', code);


    exec(' gcc index.c -o code', (error, stdout, stderr) => {
        if (error) {
            return res.json({ output: stderr });
        }
        exec(` echo ${input} | code.exe`, (error, stdout, stderr) => {
            if (error) {
                return res.json({ output: stderr });
            }
            res.json({ output: stdout });
        });
    });


}