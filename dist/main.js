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
const db_1 = __importDefault(require("./db"));
var AccessLevel;
(function (AccessLevel) {
    AccessLevel[AccessLevel["User"] = 0] = "User";
    AccessLevel[AccessLevel["Admin"] = 1] = "Admin";
})(AccessLevel || (AccessLevel = {}));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // const newuser = await db.user.create({data: {
        //     email: 'teste@teste.com',
        //     name: 'kennedy',
        //     password: 'admin',
        //     access_level: AccessLevel.Admin
        // }})
        yield db_1.default.user.update({
            where: {
                email: "teste@teste.com",
            },
            data: {
                name: 'vivavox'
            }
        });
        yield db_1.default.user.delete({ where: {
                email: 'teste@teste.com'
            } });
        const usuarios = yield db_1.default.user.findMany();
        console.log(usuarios);
    });
}
main();
