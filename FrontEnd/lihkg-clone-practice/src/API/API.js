import axios from 'axios';
import { useContext } from 'react'

import { UserContext } from '../Components/Account/User/UserContext'

var userData;

function API() {
    userData = useContext(UserContext).userData;
    return (<div></div>);
}

const Request = axios.create({
    baseURL: "http://localhost:8080/api"
});

export const APITopicList = data => (data === "") ? Request.get('/topics') : Request.get('/topics/' + data);

export const APIGetTopic = data => Request.get('/topic/' + data);

export const APIGetReply = data => Request.get('/reply/' + data);

export const APICreateTopic = data => Request.post('/topic/create', data, {
    headers: {
        'Content-Type': 'application/json',
    }
});

export const APICreateReply = data => Request.post('/reply/create', data, {
    headers: {
        'Content-Type': 'application/json',
    }
})

/*export const APILikeTopic = data => Request.post('/liketopic/'+data.topicId,data,{
    headers: {
        'Content-Type': 'application/json',
    }
})
*/

export const APIGetTopicLikeCount = (data) => Request.get('/gettopiclike/'+data);

export const APIGetReplyLikeCountList = (data) => Request.get('/getreplylikecountlist/'+data);

export const APILikeTopic = async (data) => {
    let temp = {
        'author': userData.email,
        'topicId': data.id,
        'floor': 0,
        'isLike': true,
        'isLikeTopic': true
    }
    const req = await Request.post('/liketopic', temp, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((res)=>true).catch((err)=>false);
    return req;
}

export const APIDislikeTopic = async (data) => {
    let temp = {
        'author': userData.email,
        'topicId': data.id,
        'floor' : 0,
        'isLike': false,
        'isLikeTopic': true
    }
    const req = await Request.post('/disliketopic', temp, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((res)=>true).catch((err)=>false);
    return req;
}

export const APILikeReply = async (data) => {
    let temp = {
        'author': userData.email,
        'topicId': data.topicId,
        'floor' : data.floor,
        'isLike': true,
        'isLikeTopic': false
    }
    const req = await Request.post('/likereply', temp, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((res)=>true).catch((err)=>false);
    return req;
}

export const APIDislikeReply = async (data) => {
    let temp = {
        'author': userData.email,
        'topicId': data.topicId,
        'floor' : data.floor,
        'isLike': false,
        'isLikeTopic': false
    }
    const req = await Request.post('/dislikereply', temp, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((res)=>true).catch((err)=>false);
    return req;
}


//Broken because userData is slower than the function
/*export const APIGetIsLiked = (data) => {
    return Request.get('/getisliked/' + data.topicId + '/' + userData.email)};
*/

export default API

//Template with data input
// export const APILogin = data => TopicListRequest.get('/login',data);