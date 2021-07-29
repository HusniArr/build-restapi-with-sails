/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
// import { User } from '../models/User.js';
const bcrypt = require('bcryptjs');
module.exports = {
    register : async function (req,res){
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt);
        const user = {
            username:req.body.username,
            email:req.body.email,
            password:hash,
            role:req.body.role
        }
      
        const isExistUsername = User.validate('username',req.body.username);
            if(isExistUsername){
                res.json({message:"username sudah terdaftar."})
                 
            }else{
            const result = await User.create(user);
            res.json({message:"berhasil ditambahkan.",data:result});
               

            }
           
        // if ( !_.isString( req.body.email ) ) {
        //   return res.badRequest();
        // }
        // User.create(user).then(()=>{
        //     res.json({message:"berhasil ditambahkan",data:user})
        // })
        // .catch({email:'E_UNIQUE'},(err)=>{
        //     res.sendStatus(409);
        // })
        // .catch({username:'UsageError'},(err)=>{
        //     res.badRequest();
        // }).catch((err)=>{
        //     res.serverError(err);
        // })
    
       
        
    }  

};

