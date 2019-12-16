import * as reactDOM from 'react-dom'
import React = require('react');
import './style';

const Index = () => {
	return <div className='red'>React App</div>;
};
debugger;

reactDOM.render (<Index />, document.getElementById('content'));