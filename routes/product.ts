import express, { Request, Response } from "express";
const router = express.Router();

router.get("/products", (req: Request, res: Response) => {
    res.send("Here are all your products");
});

router.get("/product/:productID", (req: Request, res: Response) => {
    const productID: string = req.params.productID;
    res.send("Here is your product for ID : " + productID);
});

router.post("/", (req: Request, res: Response) => {
    res.send("Product added!!");
});

router.delete("/", (req: Request, res: Response) => {
    res.send("Product deleted");
});


module.exports = router;