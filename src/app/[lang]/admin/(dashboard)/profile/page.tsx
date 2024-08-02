import React from "react";

export async function generateStaticParams() {
	return [{ lang: "bn" }, { lang: "en" }];
}

const DoctorsProfile = () => {
	return <div>DoctorsProfile</div>;
};

export default DoctorsProfile;
