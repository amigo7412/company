declare interface StoreObject {
	lang:				string
	theme:				'dark' | 'light'
	user:				UserObject | null
	isChat:				boolean,
	isMobileNav:		boolean
	cookie:				string | null
}