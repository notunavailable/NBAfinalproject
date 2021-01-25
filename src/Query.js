import React from 'react';

const Query = (props) => {
	return (
		<div className="ui card" style = {{marginLeft: '400px'}}>
			<div className="image">
				<img src = {props.img} alt = {props.name}/>
			</div>
		    <div className="content">
		    	<h1 className = "header">{props.name}</h1>
		    </div>
		  	<div className="extra content">
		    	<h2>{props.message}</h2>
		  	</div>
		</div>
	);
}


export default Query;