import { Request, Response } from "express";
import {UserService} from "../services/UserService";

class UserController {
    service = new UserService();

    async authenticate(request: Request, response: Response) {
        const { code } = request.body
        try {
            const result = await this.service.authenticate(code)

            return response.json(result);
        } catch (err) {
            return response.json({ error: err.message });
        }
    }
    async view(request: Request, response: Response) {
        const { user_id } = request;


        const result = await this.service.view(user_id)

        return response.json(result);
    }
}

export { UserController }