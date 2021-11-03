import { Request, Response } from "express";
import {MessageService} from "../services/MessageService";

class MessageController {

    async view(request: Request, response: Response) {
        const service = new MessageService();

        const messages = await service.view();

        return response.json(messages);
    }

    async create(request: Request, response: Response) {
        const service = new MessageService();

        const { message } = request.body

        const { user_id } = request;

        const result = await service.create(message, user_id)

        return response.json(result)
    }
}

export { MessageController }