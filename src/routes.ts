import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { MessageController } from "./controllers/MessageController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new UserController().authenticate)

router.post("/message", ensureAuthenticated, new MessageController().create)

router.get('/', new MessageController().view)

export { router };