import { Request, Response } from "express";
import {AuthenticateUserService} from "../services/AuthenticateUserService";
import {GetUserService} from "../services/GetUserService";

class UserController {
    async authenticate(request: Request, response: Response) {
        const { code } = request.body

        const service = new AuthenticateUserService();
        try {
            const result = await service.execute(code)

            return response.json(result);
        } catch (err) {
            return response.json({ error: err.message });
        }
    }
    async view(request: Request, response: Response) {
        const { user_id } = request;

        const service = new GetUserService();

        const result = await service.execute(user_id)

        return response.json(result);
    }
}

export { UserController }