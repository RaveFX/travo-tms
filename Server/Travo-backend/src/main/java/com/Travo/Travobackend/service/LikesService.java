//package com.Travo.Travobackend.service;
//
//import com.Travo.Travobackend.model.dto.LikesDTO;
//import com.Travo.Travobackend.repository.CommunityRepo;
//import com.Travo.Travobackend.repository.LikeRepository;
//
//
//public class LikesService {
//
//    private final LikeRepository likeRepository;
//    private final CommunityRepo communityRepo;
//
//    public LikesService(LikeRepository likeRepository, CommunityRepo communityRepo) {
//
//    }
//
//    public void likePost(LikesDTO likesDTO) {
//        Integer user_id = likesDTO.getUser_id();
//        Integer post_id = likesDTO.getPost_id();
//
//        // Check if the user has already liked the post
//        boolean alreadyLiked = likesRepository.existsByUserIdAndPostId(user_id, post_id);
//
//        if (alreadyLiked) {
//            // User already liked the post, so remove the like
//            likesRepository.deleteByUserIdAndPostId(user_id, post_id);
//            communityRepository.decrementLikesCount(post_id); // Decrement likes count
//        } else {
//            // User hasn't liked the post, so add the like
//            likesRepository.save(new Likes(user_id, post_id));
//            communityRepository.incrementLikesCount(post_id); // Increment likes count
//        }
//    }
//}
