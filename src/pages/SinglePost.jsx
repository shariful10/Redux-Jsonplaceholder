import React from "react";
import { useGetPostsByIdQuery } from "../redux/features/api/baseApi";
import { useParams } from "react-router-dom";

const SinglePost = () => {
	const { id } = useParams();

	const { data: post, isLoading, isError } = useGetPostsByIdQuery(id);

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
		<div className="container mx-auto pt-10 min-h-screen">
			<div className="bg-zinc-800 rounded-md p-10 text-zinc-300 max-w-3xl mx-auto">
				<h1 className="mb-5 text-xl font-semibold cursor-pointer capitalize">
					{post?.title}
				</h1>
				<p>{post?.body}</p>
				<div className="border-b border-zinc-700 my-5"></div>
			</div>
		</div>
	);
};

export default SinglePost;
