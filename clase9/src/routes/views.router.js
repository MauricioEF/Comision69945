import { Router } from "express";
import userModel from "../managers/mongo/models/user.model.js";


const router = Router();

router.get('/',async(req,res)=>{
    const paginationData = await userModel.paginate({},{page:parseInt(req.query.page)||1, limit:1000, lean:true});
    const students = paginationData.docs

    const {hasPrevPage, hasNextPage, prevPage,nextPage, page:currentPage} = paginationData;

    console.log(paginationData);
    res.render('Home',{
        students,
        currentPage,
        page:currentPage,
        hasPrevPage,
        hasNextPage,
        prevPage,
        nextPage
    });
})

export default router;