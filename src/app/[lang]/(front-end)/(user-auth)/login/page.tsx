"use client";

import { login_server } from "@/actions";
import { Email, Lock, UpArrow, User } from "@/components/icons";
import { useActionState } from "react";

const Login = () => {
	const [error, action, isLoading] = useActionState(login_server, null);
	return (
		<>
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

export default Login;
