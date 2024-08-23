import { SVGProps } from "react";

export function CloudUpload(props: SVGProps<SVGSVGElement>) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
			<mask id="lineMdCloudUploadOutlineLoop0">
				<g fill="#fff">
					<circle cx="12" cy="10" r="6"></circle>
					<rect width="9" height="8" x="8" y="12"></rect>
					<rect width="17" height="12" x="1" y="8" rx="6">
						<animate attributeName="x" dur="24s" repeatCount="indefinite" values="1;0;1;2;1"></animate>
					</rect>
					<rect width="17" height="10" x="6" y="10" rx="5">
						<animate attributeName="x" dur="15s" repeatCount="indefinite" values="6;5;6;7;6"></animate>
					</rect>
				</g>
				<circle cx="12" cy="10" r="4"></circle>
				<rect width="8" height="8" x="8" y="10"></rect>
				<rect width="11" height="8" x="3" y="10" rx="4">
					<animate attributeName="x" dur="24s" repeatCount="indefinite" values="3;2;3;4;3"></animate>
				</rect>
				<rect width="13" height="6" x="8" y="12" rx="3">
					<animate attributeName="x" dur="15s" repeatCount="indefinite" values="8;7;8;9;8"></animate>
				</rect>
				<g fill="#fff">
					<rect width="3" height="4" x="10.5" y="12"></rect>
					<path d="M12 9L16 13H8L12 9Z">
						<animateMotion
							calcMode="linear"
							dur="1.5s"
							keyPoints="0;0.25;0.5;0.75;1"
							keyTimes="0;0.1;0.5;0.8;1"
							path="M0 0v-1v2z"
							repeatCount="indefinite"
						></animateMotion>
					</path>
				</g>
			</mask>
			<rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudUploadOutlineLoop0)"></rect>
		</svg>
	);
}

export function UploadingLoop(props: SVGProps<SVGSVGElement>) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
			<g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2">
				<path strokeDasharray="2 4" strokeDashoffset="6" d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3">
					<animate attributeName="stroke-dashoffset" dur="0.6s" repeatCount="indefinite" values="6;0"></animate>
				</path>
				<path
					strokeDasharray="30"
					strokeDashoffset="30"
					d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21"
				>
					<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.1s" dur="0.3s" values="30;0"></animate>
				</path>
				<path strokeDasharray="10" strokeDashoffset="10" d="M12 16v-7.5">
					<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="10;0"></animate>
				</path>
				<path strokeDasharray="6" strokeDashoffset="6" d="M12 8.5l3.5 3.5M12 8.5l-3.5 3.5">
					<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="6;0"></animate>
				</path>
			</g>
		</svg>
	);
}

export function EosLoading(props: SVGProps<SVGSVGElement>) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
			<path
				fill="currentColor"
				d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z"
				opacity=".5"
			></path>
			<path fill="currentColor" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z">
				<animateTransform
					attributeName="transform"
					dur="1s"
					from="0 12 12"
					repeatCount="indefinite"
					to="360 12 12"
					type="rotate"
				></animateTransform>
			</path>
		</svg>
	);
}
