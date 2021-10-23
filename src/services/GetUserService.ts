import prismaClient from "../prisma";

class GetUserService {
    async execute(user_id: string){
        return await prismaClient.user.findFirst({
            where: {
                id: user_id
            }
        });
    }
}

export { GetUserService }