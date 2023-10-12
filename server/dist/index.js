"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
mongoose_1.default.connect(process.env.DB)
    .then(() => console.log("connected to db"))
    .catch((e) => console.log(e));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send("Hello World");
});
app.use('/api/auth', authRoutes_1.default);
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const errorMessage = err.message || "Internal service error";
    return res.status(statusCode).send({
        success: false,
        statusCode,
        errorMessage,
    });
});
app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is being hosted in ${process.env.PORT || 4000}`);
});
