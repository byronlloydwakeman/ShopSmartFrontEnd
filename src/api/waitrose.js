import { useState } from 'react';
import { Post } from './post';
//Deprecated
export const waitroseGetItemByKeyword = (keyword) => {
    var data = Post("http://127.0.0.1:8000/api/waitrose", {"keyword": keyword});
    return(data);
}