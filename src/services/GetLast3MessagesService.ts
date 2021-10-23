import prismaClient from "../prisma";

class GetLast3MessagesService {
    async execute(){
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
}

export { GetLast3MessagesService }