//const { request } = require('express')
const { request, json } = require('express')
const cafe = require('.././models/userModel')

//Getting all cafe Data

exports.get_all_items = async (req,res)=>{
    try{
        const cafe_1 = await cafe.find()
        res.status(200).json({
                                 status :"success",
                                 result : cafe.length,
                                 data : {cafe},                                 
                                 })
    }
    catch(err){
        res.status(400).json({
                                status :"fail",
                                message: err.message
                                })

    }
}
    
//Getting Cafe Items by ID

exports.get_cafe_item = async(req,res)=>{
    const cafe_2 = await cafe.findById(req.params.id)
    try{
        res.status(200).json({
                                status: "success",
                                data: {cafe_2}
                            })
    }
    catch(err){
        res.status(400).json({
                                status: "fail",
                                message: err.message
                            })
    }
}

//Adding New Item to add_cafe.json

exports.add_new_item = async(req,res)=>{
    try{
        console.log(`this msg body ${JSON.stringify(req.body)}`)
        const new_item = await cafe.create(req.body)
        /*const new_item = new cafe.create({
                                    item_name : req.body.item_name,
                                    short_name : req.body.short_name,
                                    specification : req.body.specification,
                                    category : req.body.category,
                                    price : req.body.price
                                })
        const val = await new_item.save()
        console.log(val)*/
        res.status(200).json({
                                status:"success",
                                data:{data: {new_item}}
                            })
    }
    catch(err){
        res.status(400).json({
                                status: "fail",
                                message: err.message
                            })
    }
}

//patch method used to update particular field in json array by id 

exports.update_item = async (req,res)=>{
    try{
        const cafe_3 =await cafe.findByIdAndUpdate(req.params.id, req.body,{
                                                                                new: true,
                                                                                runValidators: true
                                                                           })
        res.status(200).json({
                                status:"success",
                                data: {cafe_3}
                            })
    }
    catch(err){
        res.status(400).json({
                                status:"fail",
                                message: err.message
                            })
    }
}

//Delete the json array dy ID

exports.detele_items = async (req,res)=>{
    try{
        await cafe.findByIdAndDelete(req.params.id)
        res.status(200).json({
                                status:"success",
                                data: null 
                            })
    }
    catch(err){
        res.status(400).json({
                                status:"fail",
                                message: err.message
                            })
    }
}