import React from "react";
import "./NavBar.css";
import { Icon } from "@iconify/react";
// import redditFill from "@iconify-icons/akar-icons/reddit-fill";
import bxMenu from "@iconify-icons/bx/bx-menu";
import homeIcon from "@iconify-icons/entypo/home";
import sharpLocalFireDepartment from "@iconify-icons/ic/sharp-local-fire-department";
import baselineSubscriptions from "@iconify-icons/ic/baseline-subscriptions";

// npm install --save-dev @iconify/react @iconify-icons/whh
// import alienshipIcon from "@iconify-icons/whh/alienship";

// npm install --save-dev @iconify/react @iconify-icons/bx
// import bxTrendingUp from "@iconify-icons/bx/bx-trending-up";

// npm install --save-dev @iconify/react @iconify-icons/foundation
// import graphBar from "@iconify-icons/foundation/graph-bar";

// npm install --save-dev @iconify/react @iconify-icons/jam
// import orderedList from "@iconify-icons/jam/ordered-list";

// npm install --save-dev @iconify/react @iconify-icons/majesticons
// import videoCamera from "@iconify-icons/majesticons/video-camera";

// npm install --save-dev @iconify/react @iconify-icons/ic
import baselineVideoLibrary from "@iconify-icons/ic/baseline-video-library";

// npm install --save-dev @iconify/react @iconify-icons/ic
// import baselineVideoLibrary from "@iconify-icons/ic/baseline-video-library";

const NavBar = (props) => {
	return (
		<div className="sideNav">
			<ul>
				<a href="www.youtube.com/watch?v=3oUu7N65s6I&t=1860s">
					<li>
						<Icon icon={bxMenu} color={"white"} width="1.5rem" height="1.5rem" />
					</li>
				</a>

				<a href="www.youtube.com/watch?v=3oUu7N65s6I&t=1860s">
					<Icon icon={homeIcon} color={"#909090"} width="1.2rem" height="1.2rem" />
					<li>Home</li>
				</a>

				<a href="www.youtube.com/watch?v=3oUu7N65s6I&t=1860s">
					<Icon icon={sharpLocalFireDepartment} color={"#909090"} width="1.2rem" height="1.2rem" />
					<li>Trending</li>
				</a>

				<a href="www.youtube.com/watch?v=3oUu7N65s6I&t=1860s">
					<Icon icon={baselineSubscriptions} color={"#909090"} width="1.2rem" height="1.2rem" className="menu-icon" />
					<li>Subscriptions</li>
				</a>

				<a href="www.youtube.com/watch?v=3oUu7N65s6I&t=1860s">
					<Icon icon={baselineVideoLibrary} color={"#909090"} width="1.5rem" height="1.5rem" className="menu-icon" />
					<li>Library</li>
				</a>
			</ul>
		</div>
	);
};

export default NavBar;
