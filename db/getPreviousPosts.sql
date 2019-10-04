SELECT free_user.first_name, free_user.last_name, free_user.username, freelance_post.title, freelance_post.description, freelance_post.url, freelance_post.post_id
FROM free_user
INNER JOIN freelance_post
ON free_user.user_id = freelance_post.user_id
WHERE username = $1