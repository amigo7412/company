import React from "react";
import Header from "../../components/layout/header";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
		</>
	)
}

export default PublicLayout;
