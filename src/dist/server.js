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
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
// declaring the port number
const port = Number(process.env.PORT) || 5000;
//database connection
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // mongodb+srv://rollers-republic:BAVCkousutgI8TyR@rollersrepublic.opkzibp.mongodb.net/?retryWrites=true&w=majority"
            // mongodb+srv://rollers-republic:BAVCkousutgI8TyR@rollersrepublic.opkzibp.mongodb.net/
            yield mongoose_1.default.connect("mongodb+srv://rollers-republic:BAVCkousutgI8TyR@RollersRepublic.opkzibp.mongodb.net/RollersRepublic");
            console.log("Data base connection successful!");
            // console.log({dbInfo});
            app_1.default.listen(port, () => {
                console.log(`Server is listening on port ${port}`);
            });
        }
        catch (error) {
            console.log("Failed to connect database", error);
        }
    });
}
bootstrap();
//# sourceMappingURL=server.js.map