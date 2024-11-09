const user = {
    id: 1,
    username: "Moodeng",
    email: "johndoe@example.com",
    password: "securepassword",  
    firstname: "ครูบา",
    lastname: "ช่วยหมูเด้ง",
    phone_number: "0812930490",
    profileURL: "https://scontent.furt1-1.fna.fbcdn.net/v/t39.30808-6/330966750_3894652390790715_7661189408028264880_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=bIRJU-yIM9cQ7kNvgF6Ctwa&_nc_zt=23&_nc_ht=scontent.furt1-1.fna&_nc_gid=AbCozWIreRSt6lgBdX0EoO_&oh=00_AYA86vl9q_G__b_Wf_cs5_1F7ZcvJQemLjYQRNg9Bb89tA&oe=67353A7D",
    role: {
        id: 1,
        name: "Admin",  
    },
    team: {
        id: 1,
        name: "สาวเฮ้อโสดหม่าย", 
    },
    customers: [
        {
            id: 1,
            name: "Customer One",
            dealer_id: 1,
        },
        {
            id: 2,
            name: "Customer Two",
            dealer_id: 1,
        },
    ],
    created_at: new Date(),
    updated_at: new Date(),
};

export default user;