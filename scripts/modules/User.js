function User(
	name = 'Unregistered User',
	gender = 'Uknown',
	age = 'Uknown',
	registered = false,
	req = 'Uknown',
	userStatus = 0
) {
	this.userName = name;
	this.userGender = gender;
	this.userAge = age;
	this.userCode = this.userGender + this.userAge;
	this.registered = registered;
	this.userReq = req;
	this.userStatus = userStatus;
}

export { User };
