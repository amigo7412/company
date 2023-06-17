import React from "react";
import Header from "../../components/layout/header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/layout/footer";

const PublicLayout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default PublicLayout;
