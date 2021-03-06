import React from "react";
import "./NavBar.css";
import { Icon } from "@iconify/react";
import bxMenu from "@iconify-icons/bx/bx-menu";
import homeIcon from "@iconify-icons/entypo/home";
import sharpLocalFireDepartment from "@iconify-icons/ic/sharp-local-fire-department";
import baselineSubscriptions from "@iconify-icons/ic/baseline-subscriptions";
import baselineVideoLibrary from "@iconify-icons/ic/baseline-video-library";


const NavBar = () => {
	return (
		<div className="sideNav">
			<ul>
				<p  >
					<li>
						<Icon icon={bxMenu} color={"white"} width="1.5rem" height="1.5rem" />
					</li>
				</p>

				<p  >
					<Icon icon={homeIcon} color={"#909090"} width="1.2rem" height="1.2rem" />
					<li>Home</li>
				</p>

				<p  >
					<Icon icon={sharpLocalFireDepartment} color={"#909090"} width="1.2rem" height="1.2rem" />
					<li>Trending</li>
				</p>

				<p  >
					<Icon icon={baselineSubscriptions} color={"#909090"} width="1.2rem" height="1.2rem" className="menu-icon" />
					<li>Subscriptions</li>
				</p>

				<p  >
					<Icon icon={baselineVideoLibrary} color={"#909090"} width="1.5rem" height="1.5rem" className="menu-icon" />
					<li>Library</li>
				</p>
			</ul>
		</div>
	);
};

export default NavBar;
