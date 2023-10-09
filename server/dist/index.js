"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const app = (0, express_1.default)();
mongoose_1.default.connect(process.env.DB)
    .then(() => console.log("connected to db"))
    .catch((e) => console.log(e));
app.get('/', (req, res) => {
    res.send("Hello World");
});
app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is being hosted in ${process.env.PORT || 4000}`);
});
