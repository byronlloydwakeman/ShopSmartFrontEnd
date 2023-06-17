import { Post } from "./post"

export const findShoppingItem = (keyword, supermarkets, filter) => {
    console.log(keyword, supermarkets, filter)
    return(Post("http://127.0.0.1:8000/api/search", {"keyword": keyword, "supermarkets": supermarkets, "filter": filter}))
}