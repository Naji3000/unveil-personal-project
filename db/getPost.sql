SELECT free_user.first_name, free_user.last_name, freelance_post.title, freelance_post.description
FROM free_user
INNER JOIN freelance_post
ON free_user.user_id = freelance_post.post_id