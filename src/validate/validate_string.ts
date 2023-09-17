export function containsNumbers(s:string){
	return /\d/.test(s)
}

export function numbersOnly(s:string){
	return s.match(/^[0-9]+$/)
}

export function containsSpecialCharacters(s:string){
	return /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~]/.test(s)
}	