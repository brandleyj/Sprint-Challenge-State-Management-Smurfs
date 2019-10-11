import React from "react";

export const Smurfs = ({ smurfs }) => {
	return (
		<div>
			{smurfs.map(smurf => {
				const { id, name, age, height } = smurf;
				return (
					<div className="smurf" key={id}>
						<strong>{name}</strong>
						<p>{age}</p>
						<p>{height}</p>
					</div>
				);
			})}
		</div>
	);
};
