const conf = {
	urlPrefix: "http://10.0.2.2:3000",
	loginEndpoint: "/auth/login",
	registerEndpoint: "/auth/local/register",
	jwtUserEndpoint: "/users/profile",
	jwtSessionStorageKey: "auth.jwt",
};

export default conf;
