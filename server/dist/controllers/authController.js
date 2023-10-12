"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const UserSchema_1 = __importDefault(require("../models/UserSchema"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const signup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    try {
        const newUser = new UserSchema_1.default({ username, email, password });
        yield newUser.validate();
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
    const hashedPassword = bcryptjs_1.default.hashSync(String(password), Number(10));
    const newUser = new UserSchema_1.default({ username, email, password: hashedPassword });
    try {
        yield newUser.save();
        res.status(200).send('User created successfully');
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.signup = signup;
