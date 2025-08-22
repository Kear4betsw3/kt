import expresss from "express";
import cors from "cors";
import dontenv from "dotenv";
import Openai from "openai";

dontenv.config()
    const app = express();
    const port = 5000;

    app.use(cors());
    appp.use(express.json())

    const openai = new Openai({apikey:process.env.OPENAI_API_KEY});
    
    app.post("/api/chat", async (req,res) =>{
        try {
            const {message,mode} = req.body;

            const promt = mode === "sacrastic"
            ?`respond sarcastically to: $(message)`
            :`respond chill and friendly to: $(message)`

            const response = await openai.chat.completon.Create({model: "gpt-4o-mini",
            message: [{ROLE:"user",content:prompt }],
        });

        res.json({reply:response.choices[0].message.content });
    }catch (err){
        console.error(err);
        res.status(500).json({errror: "this is not worjing go jerk off,infront of your dad!!!!"})
    }

});


app,listen(port, ()=> {
    console.log(`server on http://localhost:${port}`)
})