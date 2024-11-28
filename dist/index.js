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
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const cors_1 = __importDefault(require("cors"));
const prisma = new client_1.PrismaClient();
// use `prisma` in your application to read and write data in your DB
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const PORT = process.env.PORT || 3000;
console.log(process.env.PORT);
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello, TypeScript with Express!');
});
app.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma.aryan.create({
        data: req.body,
    });
    res.json(user);
}));
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
