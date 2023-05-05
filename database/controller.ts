import Posts from "../model/user";

export async function getPosts(req: any, res: any) {
    try {
        const posts:any = await Posts.find({});
        if (!posts) return res.status(404).json({ error: "Data Not Found" });
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ error: "Get Method Failed" });
    }
}


export async function createPost(req: any, res: any) {
    try{
        const formData = req.body;
        if(!formData) return res.status(401).json({post: "Post Request Not Good"})
        const createdPost = await Posts.create(formData);
        res.status(200).json(createdPost);
      } catch (error) {
        res.status(401).json({ error });
      }
}

export async function updatePost(req: any , res: any){
    try{
        const {postID} = req.query;
        const formData = req.body;

        if(postID && formData){
            const post = await Posts.findByIdAndUpdate(postID, formData);
            res.status(200).json(post);
        }
        res.status(400).json("Update Failed");
    }
    catch(error){
        res.status(400).json(error);
    }
}

export async function deletePost(req: any, res: any){
    try{
        const {postID} = req.query;
        if(postID){
            const post = await Posts.findByIdAndDelete(postID);
            res.status(200).json(post);
        }
    }
    catch(error){
        res.status(400).json({error});
    }
}

export async function getPost(req: any , res: any){
    try{
        const {postName} = req.query;
        if(postName){
            const post = await Posts.find({ title: { $regex: postName, $options: 'i' } });
            res.status(200).json(post);
        }
        res.status(400).json("Update Failed");
    }
    catch(error){
        res.status(400).json(error);
    }
}



export async function getPostID(req: any , res: any){
    try{
        const {postID} = req.query;
        if(postID){
            const post = await Posts.findById(postID);
            res.status(200).json(post);
        }
        res.status(400).json("Update Failed");
    }
    catch(error){
        res.status(400).json(error);
    }
}


  