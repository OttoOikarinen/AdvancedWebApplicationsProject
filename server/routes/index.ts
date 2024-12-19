import {Request, Response, Router} from "express"



const router: Router = Router()

router.get("/hello", (req: Request, res: Response) => {
    res.status(200).send("Hello World!");
})


export default router