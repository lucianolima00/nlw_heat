import { Request, Response } from "express";
import {CreateMessageService} from "../services/CreateMessageService";
import {GetLast3MessagesService} from "../services/GetLast3MessagesService";

class MessageController {
    async view(request: Request, response: Response) {
        const service = new GetLast3MessagesService();

        const messages = await service.execute();

        return response.json(messages);
    }

    async create(request: Request, response: Response) {
        const { message } = request.body

        const { user_id } = request;

        const service = new CreateMessageService();

        const result = await service.execute(message, user_id)

        return response.json(result)
    }
}

export { MessageController }