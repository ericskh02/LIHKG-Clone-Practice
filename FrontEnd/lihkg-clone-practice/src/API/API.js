import axios from 'axios';

const Request = axios.create({
    baseURL: "http://localhost:8080/api"
});

export const APITopicList = data => (data=="")?Request.get('/topics'):Request.get('/topics/'+data);

export const APIGetTopic = data => Request.get('/topic/'+data); 

export const APIGetReply = data => Request.get('/reply/'+data);

export const APICreateTopic = data => Request.post('/topic/create',data,{
    headers: {
        'Content-Type': 'application/json',
    }
});

export const APICreateReply = data => Request.post('/reply/create',data,{
    headers: {
        'Content-Type': 'application/json',
    }
})

//Template with data input
// export const APILogin = data => TopicListRequest.get('/login',data);