const {Article} = require('../models/models')
const ApiError = require('../error/ApiError');
const uuid = require('uuid')
const path = require('path')

class ArticleController {

    async create(req, res,next) {
        try{
            const {name,content,sectionId,themeId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..','static',fileName))
            
            const article = await Article.create({name,content,sectionId,themeId,img: fileName})

            return res.json(article)
        } catch(e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let articles;
            articles = await Article.findAll({})
        
        return res.json(articles)
    }

    async getOne(req, res){
        const {id} = req.params
        const article = await Article.findOne(
            {
                where: {id}}
        )
        return res.json(article)
    }
}

module.exports = new ArticleController()