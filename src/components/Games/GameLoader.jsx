import React from "react";
import ContentLoader from "react-content-loader";

function GameLoader() {
	return (
		<ContentLoader
			className="game-block"
			speed={2}
			width={280}
			height={470}
			viewBox="0 0 280 470"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<rect x="0" y="0" rx="0" ry="0" width="280" height="280" />
			<rect x="0" y="280" rx="0" ry="0" width="280" height="25" />
			<rect x="0" y="320" rx="0" ry="0" width="280" height="70" />
			<rect x="140" y="420" rx="19" ry="19" width="120" height="41" />
			<rect x="-1" y="436" rx="0" ry="0" width="80" height="13" />
		</ContentLoader>
	);
}

export default GameLoader;
