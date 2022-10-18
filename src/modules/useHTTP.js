import { displayList } from './app.js';

const postRequest = async (Endpoint, Body) => {

	const response = await fetch(Endpoint, {
		method: 'POST',
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify(Body),
	});
	const res = await response.json();
  if (res.ok)
	return response.json();	
}

const getResponse = async (Endpoint) => {
	try {
		const response = await fetch(Endpoint)
		const res = await response.json();
    displayList(res);	
	}  
	catch (err) { 
		throw new Error(err);
	}
}

export { postRequest, getResponse };
