import { UserModel, ContentModel, LikeModel } from "@repo/database/db";
import express from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_PASSWORD } from "./config";
import { userMiddleware } from "./useMiddleware";


const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;


    try {
        await UserModel.create({ username, password });
        res.status(201).send("User Created");
    } catch (e) {
        res.status(411).json({
            message: "user already exisits"
        })
    }

})


app.post("/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    try {
        const userExists = await UserModel.findOne({
            username,
            password
        })
        if (userExists) {
            const token = jwt.sign({
                id: userExists._id,
            }, JWT_PASSWORD)
            res.json({
                token
            })
        }
        else {
            res.status(403).json({
                message: "Incorrect credentials"
            })
        }
    } catch (e) {
        res.status(500).json({
            message: "Internal server error"
        })
    }
})

app.post("/content", userMiddleware, async (req, res) => {
    const link = req.body.link;
    const type = req.body.type;

    await ContentModel.create({
        link,
        type,
        title: req.body.title,
        userId: req.userId,
        tags: []
    })
    res.json({
        messafe: "Content added "
    })
})

app.get("/content", userMiddleware, async (req, res) => {
    const userId = req.userId;
    const content = await ContentModel.find({
        userId: userId
    }).populate("userId", "username")
    res.json({
        content
    })
})


app.delete("/content", userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;

    await ContentModel.deleteMany({
        contentId,
        userId: req.userId
    })
    res.json({
        message: "Content deleted"
    })
})

app.listen(3005);
console.log("HTTP web server running on http://localhost:3005");