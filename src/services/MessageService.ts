import prismaClient from "../prisma";
import { io } from "../app";

class MessageService {
    async view(){
        return await prismaClient.message.findMany({
            take: 3,
            orderBy: {
                created_at: 'desc'
            },
            include: {
                user: true
            }
        });
    }

    async create(text: string, user_id: string){
        const message = await prismaClient.message.create({
            data: {
                text,
                user_id
            },
            include: {
                user: true
            }
        });

        const infoWS = {
            text: message.text,
            user_id: message.user_id,
            created_at: message.created_at,
            user: {
                name: message.user.name,
                avatar_url: message.user.avatar_url
            }
        }

        io.emit("new_message", infoWS)

        return message;
    }
}

export { MessageService }