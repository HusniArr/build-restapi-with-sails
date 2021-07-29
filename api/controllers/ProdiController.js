/**
 * ProdiController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create : async function(req,res){
        try{
        const prodi = await Prodi.create({kodeProdi:req.body.kodeProdi,namaProdi:req.body.namaProdi,kodeJurProdi:req.body.kodeJurProdi,kodeJenjProdi:req.body.kodeJenjProdi,kodeLabelProdi:req.body.kodeLabelProdi}).fetch();
            res.json({message:"berhasil ditambahkan.",data:prodi})
        }catch(err){
            res.serverError(err);
        }
           
    },

    findAll : async function(req,res){
        try{
            const prodi = await Prodi.find();
            res.json({data:prodi});
        }catch(err){
              res.serverError(err);
        }
    },

    findOne : async function(req,res){
        try{
            const id = req.params.id;
            const prodi = await Prodi.findOne(id);
            res.json({data:prodi});
        }catch(err){
              res.serverError(err);
        }
    },
    update : async function(req,res){
         try{
            const id = req.params.id;
            await Prodi.update(id).set({kodeProdi:req.body.kodeProdi,namaProdi:req.body.namaProdi,kodeJurProdi:req.body.kodeJurProdi,kodeJenjProdi:req.body.kodeJenjProdi,kodeLabelProdi:req.body.kodeLabelProdi});
            res.json({message:"berhasil diedit."});
        }catch(err){
              res.serverError(err);
        }
      
    },
    delete: async function(req,res){
        await Prodi.destroy({id:req.params.id}).then(()=>{
            res.json({message:"berhasil dihapus."})
        }).catch((err)=>{
            res.serverError(err);
        })
    }
};

