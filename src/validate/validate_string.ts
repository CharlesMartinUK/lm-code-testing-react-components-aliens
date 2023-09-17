export function containsNumbers(s:string){
	return /\d/.test(s)
}

export function containsSpecialCharacters(s:string){
	return /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~]/.test(s)
}	