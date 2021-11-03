import { Request, Response } from "express";
import {MessageService} from "../services/MessageService";

class MessageController {
    service = new MessageService();

    async view(request: Request, response: Response) {

        const messages = await this.service.view();

        return response.json(messages);
    }

    async create(request: Request, response: Response) {
        const { message } = request.body

        const { user_id } = request;

        const result = await this.service.create(message, user_id)

        return response.json(result)
    }
}

export { MessageController }