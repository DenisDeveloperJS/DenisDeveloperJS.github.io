import React from "react";

const Categories = React.memo(function Categories({
	items,
	setActiveCategory,
	activeCategory,
}) {
	return (
		<div className="categories">
			<ul>
				<li
					className={activeCategory === null ? "active" : ""}
					onClick={() => setActiveCategory(null)}
				>
					Все
				</li>

				{items &&
					items.map((name, index) => (
						<li
							className={activeCategory === index ? "active" : ""}
							onClick={() => setActiveCategory(index)}
							key={name}
						>
							{name}
						</li>
					))}
			</ul>
		</div>
	);
});

export default Categories;
