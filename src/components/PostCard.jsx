import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
	return (
		<div className="bg-zinc-800 rounded-md p-10 text-zinc-300">
			<Link to={`/posts/${post.id}`}>
				<h1 className="mb-5 text-xl font-semibold hover:underline cursor-pointer capitalize">
					{post?.title}
				</h1>
			</Link>
			<p>{post?.body}</p>
			<div className="border-b border-zinc-700 my-5"></div>
			<Link to={`/posts/${post.id}`}>
				<button className="py-3 px-5 bg-blue-500 rounded-md">Details</button>
			</Link>
		</div>
	);
};

export default PostCard;
