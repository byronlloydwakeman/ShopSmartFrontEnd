import { useState } from 'react';
import { Post } from './post';
//Deprecated
export const tescoGetItemByKeyword = (keyword) => {
    return(Post("http://127.0.0.1:8000/api/tesco", {"keyword": keyword}))
}