const dataSource = require("../../config/db");



class PostRepository{
    constructor(){
        this.repository = dataSource.getRepository('Post');
    }
    //Get All 
    async get(){
        try {
            return await this.repository.find()
        } catch (error) {
            console.log('error at repository Layer')
            throw(error)
        }
    }

    //post new 
    async post(data){
        try {
            const doc = await this.repository.create(data);
            const post = await this.repository.save(doc);
            return post
        } catch (error) {
            console.log('error at repository Layer')
            console.log(error)
            throw(error)
        }
    }

    //getwithid
    async getById(id){
        try {
            const post = await this.repository.findBy({ id: id });
            return post
        } catch (error) {
            console.log('error at repository Layer')
            throw(error)
        }
    }
    //update
    async patch(id, data){
        try {
            const post = await this.repository.update({ id: id }, data);
            console.log(post)
            return post
        } catch (error) {
            console.log('error at repository Layer')
            throw(error)
        }
    }
    //deletebyId
    async delete(id){
        try {
            const post = await this.repository.delete({ id: id });
            return post
        } catch (error) {
            console.log('error at repository Layer')
            throw(error)
        }
    }

}

module.exports = PostRepository