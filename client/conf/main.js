const conf = {
	urlPrefix: "http://10.0.2.2:3000", // กรณีรัน client บน Andriod Emulator
	urlPrefixGlobal: "http://ไอพีของเครื่องตัวเอง:3000", // กรณีรัน client บน Web หรือ Device ของตัวเอง
	loginEndpoint: "/auth/login",
	registerEndpoint: "/auth/local/register",
	jwtUserEndpoint: "/users/profile",
	jwtSessionStorageKey: "auth.jwt",
};

export default conf;
