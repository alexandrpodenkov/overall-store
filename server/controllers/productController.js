const prisma = require('../prisma/prisma-client');

class ProductController{
    async create(req, res){
        try{
        let { name, price, description, size, article, image } = req.body;

        if (size.length > 6) {
            size = size.slice(0, 6); // Ограничиваем количество элементов до 6
          }
     
        const product = await prisma.product.create({
            data: {
                name,
                price: parseInt(price),
                description,
                size,
                article,
                image
            }
        })

        return res.status(200).json({message: 'Товар успешно добавлен'});
        }catch(e){
            return res.json(e.message);
        }
    }

    async getAll(req, res){
        let { skip, take } = req.query;

        // page = page || 1;
        // take = take || 9;
        // let skip = page * take - take; 

        let products = await prisma.product.findMany({skip, take});

        return res.json(products);
    }

    async getOne(req, res){
        let { id } = req.params;
        
        const product = await prisma.product.findUnique({
            where: { id: parseInt(id) }, 
          });

        return res.json(product);
    }

    async deleteProduct(req, res){
        try {
            let {id} = req.query;

            id = parseInt(id);
            
           const product = await prisma.product.delete({where: {id}})

            return res.json({message: 'Товар успешно удален'});
        } catch (e) {
            return res.status(400).json(e.message);
        }
    }
}

module.exports = new ProductController();