import { useForm } from "react-hook-form";
import PostCard from "../components/PostCard";
import { useGetPostsQuery } from "../redux/features/api/baseApi";

const Feed = () => {
  const { register, handleSubmit } = useForm();
	const { data: posts, isLoading, isError } = useGetPostsQuery();

  const onSubmit = (data) => {
    console.log(data)
  };

	if (isLoading) {
		return (
			<p className="text-5xl text-center text-zinc-300 pt-20 min-h-screen">
				Loading...
			</p>
		);
	}

	if (!isLoading && isError) {
		return (
			<p className="text-5xl text-center text-zinc-300 pt-20 min-h-screen">
				Something went wrong! 😵
			</p>
		);
	}

	return (
		<div className="container mx-auto">
			<h1 className="text-zinc-300">Feed</h1>
			<div className="my-3">
				<form onSubmit={handleSubmit(onSubmit)} className="flex gap-3">
					<input
						type="search"
						className="w-full text-zinc-300 bg-zinc-800 p-3 rounded-md"
						{...register("post")}
					/>
					<button
						type="submit"
						className="bg-zinc-800 text-zinc-300 rounded-md p-3"
					>
						Post
					</button>
				</form>
			</div>
			<div className="grid grid-cols-3 gap-5">
				{posts?.map((post) => (
					<PostCard key={post.id} post={post} />
				))}
			</div>
		</div>
	);
};

export default Feed;
