const prisma = require('../prisma/prisma-client');

class orderController{
    async addOrder(req, res){
        const {email, name, phone, adress, orderItems,} = req.body;

        try {
            const productIds = orderItems.map(item => item.productId);

            const products = await prisma.product.findMany({ where: { id: { in: productIds } } });

            const order = await prisma.order.create({
                data: {
                    email,
                    name,
                    phone,
                    adress,
                    orderItems: {
                        create: orderItems.map(item => ({
                            product: { connect: {id: item.productId}},
                            quantity: item.quantity,
                        })),
                    }
                }
            })

            return res.status(200).json({message: 'Заказ размещен успешно', orderId: order.id});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    async getOrders(req, res){
        try {
            let { take, page } = req.query;

            page = page || 1;
            take = take || 9;
            let skip = page * take - take; 

            let orders = await prisma.order.findMany({take, skip});

        return res.json({message: 'Succsesfull'});
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }
    async deleteOrder(req, res){
        let { id } = req.query;

        const order = await prisma.order.delete({
            where: {id},
        })
    }
}

module.exports = new orderController();