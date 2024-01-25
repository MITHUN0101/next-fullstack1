import { Post } from "./models";
import { connectToDb } from "./utils";

export const sayHello = async (formData)=>{
    "use server";

    // const title = formData.get("title");
    // const desc = formData.get("desc");
    // const slug = formData.get("slug");
    // const userId = formData.get("userId");
const {title,desc,slug,userId} = Object.fromEntries(formData);
    console.log(formData);

    try{
        connectToDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        });

        await newPost.save();
        console.log("save to db");

    }catch(err){
        console.log(err);
        return {error:"Something went wrong!"}
    }
}

export default sayHello;