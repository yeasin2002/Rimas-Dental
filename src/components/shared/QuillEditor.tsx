"use client";

import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Props {
	value?: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
	className?: string;
}

export function QuillEditor({ value = "", setValue, className }: Props) {
	return <ReactQuill theme="snow" value={value} onChange={setValue} className={className} />;
}
