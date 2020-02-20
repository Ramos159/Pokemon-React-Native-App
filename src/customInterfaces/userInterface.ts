// this is how a user object should look like, it may have more or less but at minimum these
export default interface UserInterface{
	username: string,
	password: string,
	userID: number,
	email?: string
}