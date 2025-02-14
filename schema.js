const mongoose=require('momgoose')

const user = mongoose.Schema({
    Firstname : {
        type : String,
        require : true
    },
    Lastname : {
        type : String
    },
    password : {
        type : String,
        require:true,
        unique:true
    },

    Email : {
        type : String,
        require:true,
        unique:true
    },

    UserName:{
        type:String,
        require:true,
        unique:true,
    },

    Password:{
        type:String,
        require:true,
    }
})

const User=mongoose.model('users',user)
module.exports = User