import { Request, Response } from "express";
import {UserService} from "../services/UserService";

class UserController {

    async authenticate(request: Request, response: Response) {
        const service = new UserService();

        const { code } = request.body
        try {
            const result = await service.authenticate(code)

            return response.json(result);
        } catch (err) {
            return response.json({ error: err.message });
        }
    }
    async view(request: Request, response: Response) {
        const service = new UserService();

        const { user_id } = request;


        const result = await service.view(user_id)

        return response.json(result);
    }
}

export { UserController }