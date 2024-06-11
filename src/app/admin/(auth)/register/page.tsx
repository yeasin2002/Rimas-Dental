import { Email, Lock, UpArrow, User } from "@/components/icons";
import Link from "next/link";
import React from "react";

const Register = () => {
	return (
		<>
			<div className="relative mt-8 flex items-center">
				<span className="absolute">
					<User />
				</span>
				<input
					type="text"
					className="block w-full rounded-lg border bg-white px-11 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
					placeholder="Username"
				/>
			</div>
			<label
				htmlFor="dropzone-file"
				className="mx-auto mt-6 flex cursor-pointer items-center rounded-lg border-2 border-dashed bg-white px-3 py-3 text-center dark:border-gray-600 dark:bg-gray-900"
			>
				<UpArrow />
				<h2 className="mx-3 text-gray-400">Profile Photo</h2>
				<input id="dropzone-file" type="file" className="hidden" />
			</label>
			<div className="relative mt-6 flex items-center">
				<span className="absolute">
					<Email />
				</span>
				<input
					type="email"
					className="block w-full rounded-lg border bg-white px-11 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
					placeholder="Email address"
				/>
			</div>
			<div className="relative mt-4 flex items-center">
				<span className="absolute">
					<Lock />
				</span>
				<input
					type="password"
					className="block w-full rounded-lg border bg-white px-10 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
					placeholder="Password"
				/>
			</div>
			<div className="relative mt-4 flex items-center">
				<span className="absolute">
					<Lock />
				</span>
				<input
					type="password"
					className="block w-full rounded-lg border bg-white px-10 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
					placeholder="Confirm Password"
				/>
			</div>
			<div className="mt-6">
				<button className="w-full transform rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
					Sign Up
				</button>
			</div>
		</>
	);
};

export default Register;
