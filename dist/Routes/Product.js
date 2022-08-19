"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/products", (req, res) => {
    res.send("Here are all your products");
});
router.get("/product/:productID", (req, res) => {
    const productID = req.params.productID;
    res.send("Here is your product for ID : " + productID);
});
router.post("/", (req, res) => {
    res.send("Product added!!");
});
router.delete("/", (req, res) => {
    res.send("Product deleted");
});
module.exports = router;
