"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function CreateForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	console.log(errors);

	return (
		<form onSubmit={handleSubmit(() => alert("submitted"))}>
			<div className="form-control w-full max-w-xs">
				<label className="label">
					<span className="label-text">Audio</span>
					<span className="label-text-alt">Max size: 100 MB</span>
				</label>
				<input
					type="file"
					className="file-input file-input-bordered file-input-sm w-full max-w-xs"
					{...register("Audio", { required: true })}
				/>
			</div>
			<div className="form-control w-full max-w-xs">
				<label className="label">
					<span className="label-text">Cover Art</span>
					<span className="label-text-alt">Max size: 100 MB</span>
				</label>
				<input
					type="file"
					className="file-input file-input-bordered file-input-sm w-full max-w-xs"
					{...register("Cover Art", { required: true })}
				/>
			</div>
			<input
				type="text"
				className="input input-bordered input-primary w-full max-w-xs"
				placeholder="Name"
				{...register("Name", { required: true })}
			/>
			<input
				type="text"
				className="input input-bordered input-primary w-full max-w-xs"
				placeholder="Description"
				{...register("Description", { required: true })}
			/>
			<input
				type="number"
				className="input input-bordered input-primary w-full max-w-xs"
				placeholder="Limited Edition Supply"
				{...register("Limited Edition Supply", {
					required: true,
					max: 1000,
					min: 1,
				})}
			/>
			<input
				type="number"
				className="input input-bordered input-primary w-full max-w-xs"
				placeholder="Limited Edition Price"
				{...register("Limited Edition Price", { required: true, max: 100 })}
			/>

			<div className="form-control w-full max-w-xs">
				<label className="label">
					<span className="label-text">Superfan Royality</span>
					<span className="label-text-alt">💸</span>
				</label>
				<select
					className="select select-primary select-bordered select-sm w-full max-w-xs"
					{...register("Superfans", { required: true })}
				>
					<option value="5">5</option>
					<option value=" 10"> 10</option>
					<option value=" 15"> 15</option>
					<option value=" 20"> 20</option>
					<option value=" 25"> 25</option>
					<option value=" 30"> 30</option>
					<option value=" 35"> 35</option>
					<option value=" 40"> 40</option>
					<option value=" 50"> 50</option>
				</select>
			</div>

			<div className="form-control w-full max-w-xs">
				<label className="label">
					<span className="label-text">Platform Royality</span>
					<span className="label-text-alt">💸</span>
				</label>
				<select
					className="select select-primary select-bordered select-sm w-full max-w-xs"
					{...register("Radiohead", { required: true })}
				>
					<option value="3">3</option>
					<option value="5">5</option>
					<option value="7">7</option>
				</select>
			</div>
			<input
				className="input input-bordered input-primary w-full max-w-xs"
				type="text"
				placeholder="Regular Price"
				{...register("Regular Price", { required: true })}
			/>

			<input type="submit" className="btn" />
		</form>
	);
}
