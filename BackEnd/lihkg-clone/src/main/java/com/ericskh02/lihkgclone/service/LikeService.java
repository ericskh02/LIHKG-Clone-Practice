package com.ericskh02.lihkgclone.service;

import com.ericskh02.lihkgclone.dao.LikeRepository;
import com.ericskh02.lihkgclone.data.Like;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LikeService {
    @Autowired
    private LikeRepository likeRepository;

    @Autowired
    private TopicService topicService;

    @Autowired
    private ReplyService replyService;

    public boolean likeTopic(Like like){
        if(!topicService.hasTopic(like.getTopicId())) return false;
        likeRepository.insert(like);
        return true;
    }

    public boolean likeReply(Like like){
        if(!replyService.hasReply(like.getTopicId(),like.getFloor())) return false;
        likeRepository.insert(like);
        return true;
    }

    public int getTopicLike(int topicId){
        return likeRepository.countTopicLikeByTopicId(topicId);
    }

    public int getTopicDislike(int topicId){
        return likeRepository.countTopicDislikeByTopicId(topicId);
    }

    public int getReplyLike(int topicId, int floor){
        return likeRepository.countReplyLikeByTopicIdAndFloor(topicId,floor);
    }

    public int getReplyDislike(int topicId, int floor){
        return likeRepository.countReplyDislikeByTopicIdAndFloor(topicId,floor);
    }
}