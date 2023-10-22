const prisma = require('../prisma/prisma-client');

class UserController{
    async registration(req, res){
        const { email, name, phone, adress, orders } = req.body;
        try{
            const user = await prisma.user.create({
                data: {
                    email,
                    name,
                    phone,
                    adress,
                    orders,
                }
            })
    
            return res.json({message: 'Информация о заказе добавлена'});

        }catch(e){
            res.status(400).json(e);
        }

        
    }

    async login(req, res){
        const {email, password} = req.body;
        const user = await prisma.user.findUnique({where: {email}});

        if(!user){
            return res.status(403).json('User not found');
        }

        let comparePassword = bcrypt.compareSync(password, user.password);
        if(!comparePassword){
            return res.status(403).json('Invalid password');
        }

        const token = generateJwt(user.email, user.password, user.role);

        return res.json({token});
    }

    async checked(req, res){
        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        return res.status(400).json({token});
    }
}

module.exports = new UserController();