SELECT *
FROM freelancer_post
INNER JOIN  free_user
ON freelancer_post.post_id = free_user.user_id