import sayHello from "../../../lib/action";

const serverActionTestPage = ()=>{
    return (
        <div>
            <form action={sayHello}>

                <input type="text" placeholder="Title" name="title"/>
                <input type="text" placeholder="Description" name="desc"/>
                <input type="text" placeholder="Slug" name="slug"/>
                <input type="text" placeholder="UserId" name="userId"/>
                <button>Create</button>
            </form>
        </div>
    )
}
export default serverActionTestPage;