/*
 * @Date: 2021-08-26 11:27:21
 * @LastEditTime: 2021-08-26 17:28:11
 * @Description: 
 * @FilePath: /demo-project/src/FunComponent.js
 */

import React, { useEffect } from 'react';

function FunComponent({ content = '' }) {

  console.log('FunComponent render');
	useEffect(() => {

		console.log('FunComponent useEffect');
		
	}, [content]);  // state props

	return (
		<div>123{content}</div>
	);
}

export default FunComponent;