// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from '../../../database/conn';
import {getPost,getPosts,getPostID,createPost, updatePost , deletePost} from '../../../database/controller';

export default async function Index(req: any, res: any) {
    connectMongo().catch(()=>{res.status(405).json({error: "Error in Connection"})})

    const { method } = req;

    switch (method) {
        case 'GET':
            if(req.query.postName){
                getPost(req,res);
                }
            else if(req.query.postID){
                getPostID(req,res);
                }
            else{
                getPosts(req,res);
                }
            break; 
        case 'POST':
            createPost(req,res);
            break; 
        case 'PUT':
            updatePost(req,res);
            break; 
        case 'DELETE':
            deletePost(req,res);
            break;

        default:
            res.setHeader('Allow',['GET','POST', 'PUT','DELETE']);
            res.staus(405).end('Method ${method} Not Allowed');
            break;
    }
}
