import React from "react";

const AddServicePage = () => {
	return (
		<div className="min-h-screen bg-gray-100">
			<header className="bg-white shadow-md">
				<div className="container mx-auto px-4 py-6">
					<h1 className="text-3xl font-bold text-gray-800">Add New Service</h1>
				</div>
			</header>

			<main className="container mx-auto px-4 py-8">
				<div className="rounded-lg bg-white p-6 shadow-md">
					<form>
						<div className="mb-4">
							<label
								htmlFor="name"
								className="mb-2 block font-bold text-gray-700"
							>
								Service Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
								placeholder="Enter service name"
							/>
						</div>

						<div className="mb-4">
							<label
								htmlFor="description"
								className="mb-2 block font-bold text-gray-700"
							>
								Description
							</label>
							<textarea
								id="description"
								name="description"
								className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
								placeholder="Enter service description"
							></textarea>
						</div>

						<div className="mb-4">
							<label
								htmlFor="content"
								className="mb-2 block font-bold text-gray-700"
							>
								Content
							</label>
							<textarea
								id="content"
								name="content"
								className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
								placeholder="Enter detailed content about the service"
							></textarea>
						</div>

						<div className="mb-4">
							<label
								htmlFor="coverImage"
								className="mb-2 block font-bold text-gray-700"
							>
								Cover Image URL
							</label>
							<input
								type="text"
								id="coverImage"
								name="coverImage"
								className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
								placeholder="Enter cover image URL"
							/>
						</div>

						<div className="mb-4">
							<label
								htmlFor="icons"
								className="mb-2 block font-bold text-gray-700"
							>
								Icons
							</label>
							<input
								type="text"
								id="icons"
								name="icons"
								className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
								placeholder="Enter icon URL or name"
							/>
						</div>

						<div className="mb-4">
							<label
								htmlFor="YT_VideoUrl"
								className="mb-2 block font-bold text-gray-700"
							>
								YouTube Video URL
							</label>
							<input
								type="text"
								id="YT_VideoUrl"
								name="YT_VideoUrl"
								className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
								placeholder="Enter YouTube video URL"
							/>
						</div>

						<div className="mb-4">
							<label
								htmlFor="price_range"
								className="mb-2 block font-bold text-gray-700"
							>
								Price Range
							</label>
							<input
								type="text"
								id="price_range"
								name="price_range"
								className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
								placeholder="Enter price range"
							/>
						</div>

						<div className="mb-4">
							<label
								htmlFor="tags"
								className="mb-2 block font-bold text-gray-700"
							>
								Tags
							</label>
							<input
								type="text"
								id="tags"
								name="tags"
								className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
								placeholder="Enter tags separated by commas"
							/>
						</div>

						<div className="mb-4">
							<label
								htmlFor="doctorsId"
								className="mb-2 block font-bold text-gray-700"
							>
								Doctor
							</label>
							<select
								id="doctorsId"
								name="doctorsId"
								className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							>
								<option value="">Select a doctor</option>
								<option value="1">Dr. John Doe</option>
								<option value="2">Dr. Jane Smith</option>
							</select>
						</div>

						<div className="mb-4">
							<label className="flex items-center">
								<input
									type="checkbox"
									name="isPaused"
									className="form-checkbox h-5 w-5 text-blue-600"
								/>
								<span className="ml-2 text-gray-700">Pause this service</span>
							</label>
						</div>

						<div className="flex justify-end">
							<button
								type="submit"
								className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
							>
								Add Service
							</button>
						</div>
					</form>
				</div>
			</main>

			<footer className="mt-8 bg-gray-800 py-4 text-white">
				<div className="container mx-auto px-4 text-center">
					<p>&copy; 2024 Admin Dashboard. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
};

export default AddServicePage;
