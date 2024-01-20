const dataSource = require("../../config/db");
const PostRepository = require("../../repository/post/PostRepository");


class PostService {
    constructor(){
        this.postRepository = new PostRepository();
    }

    async get(){
        try {
            return await this.postRepository.get()
        } catch (error) {
            console.log('error at service Layer')
            throw(error)
        }
    }

    //post new 
    async post(data){
        try {
            const doc = await this.postRepository.post(data);
            return doc
        } catch (error) {
            console.log('error at service Layer')
            console.log(err)
            throw(error)
        }
    }

    //getwithid
    async getById(id){
        try {
            const post = await this.postRepository.getById(id);
            return post
        } catch (error) {
            console.log('error at service Layer')
            throw(error)
        }
    }
    //update
    async update(id, data){
        try {
            console.log('Id---', id);
            console.log('data---', data);
            const post = await this.postRepository.patch(id, data);
            return post
        } catch (error) {
            console.log('error at service Layer')
            throw(error)
        }
    }
    //deletebyId
    async delete(id){
        try {
            const post = await this.postRepository.delete(id);
            return post
        } catch (error) {
            console.log('error at service Layer')
            throw(error)
        }
    }


}


module.exports = PostService