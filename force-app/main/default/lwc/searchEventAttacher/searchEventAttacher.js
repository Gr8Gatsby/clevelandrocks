const registerSearchEvent = (eventName, callback, callerContext) => {
	callerContext.template.querySelector('c-search').addEventListener(eventName, callback); 
}

export { registerSearchEvent }