const { checkSchema } = require("express-validator");
const postSchema = require("../postEntity");


const insertValidation =  checkSchema({
    title: {
        notEmpty:true
    }
  });

module.exports = insertValidation