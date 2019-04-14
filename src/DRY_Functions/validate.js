/*
 USER INPUT VALIDATION
 - Project should be a project object
 - This function will check to see if each object property is valid input
 - Returns FALSE if invalid and TRUE if valid
*/
function validate( project ) {
	// Convert project into an array of it's own values
	let projectArr = Object.values(project)

	// Loop through each element of the array, and validate
	for (let propertyValue of projectArr ) {
		// if '' | null  | undefined
		if ( propertyValue === '' || propertyValue === null || propertyValue === undefined ) {
			alert( `Invalid input. Please fill out all fields` );
			return false;
		}
	}
	// if all elements pass validation
	console.log( 'User input is valid' );
	return true;
}

export default ( validate );

