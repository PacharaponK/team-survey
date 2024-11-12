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

const exploreData = [
    {
        id: "1",
        count: "53,123 ทีม",
        icon: "addusergroup",
        title: "ทีมในระบบ",
        colorStyle: "bg-violet-500",
        containerStyle: "",
        iconStyle: "AntDesign"
    },
    {
        id: "2",
        count: "246,325 คน",
        icon: "user",
        title: "ลูกค้าทั้งหมด",
        colorStyle: "bg-black-200",
        containerStyle: "",
        iconStyle: "AntDesign"
    },
    {
        id: "3",
        count: "100 คน",
        icon: "emoji-happy",
        title: "ลูกค้าที่ซื้อสินค้า",
        colorStyle: "bg-green-500",
        containerStyle: "",
        iconStyle: "Entypo"
    },
    {
        id: "4",
        count: "200 คน",
        icon: "emoji-neutral",
        title: "ลูกค้าที่ยังไม่ตัดสินใจ",
        colorStyle: "bg-yellow-500",
        containerStyle: "",
        iconStyle: "Entypo"
    },
    {
        id: "5",
        count: "300 คน",
        icon: "emoji-sad",
        title: "ลูกค้าที่ไม่ซื้อสินค้า",
        colorStyle: "bg-red-400",
        containerStyle: "my-4",
        iconStyle: "Entypo"
    },
];

const team = [
    {
        id: "1",
        name: "สุดยอดทางพร้าว",
        description: "ไม่ซื้อไม่ว่าเเต่อย่ามองหน้าได้หม้ายๆๆๆๆๆๆๆๆ",
        pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC7MROhxo9IODNYmZiyyijIdthqliz8CZVLw&s",
        leader_name: "Sek Loso",
        worker: [
            {
                id: "1",
                name: "John Doe",
                role: "worker",
            },
            {
                id: "2",
                name: "John Doe",
                role: "worker",
            },
            {
                id: "3",
                name: "John Doe",
                role: "worker",
            },
        ],
        customers: "10000",
        colorStyle: "bg-green-500",
        containerStyle: "my-4",
    },
    {
        id: "2",
        name: "ไม่หล่อพอทน",
        description: "ไม่ซื้อไม่ว่าเเต่อย่ามองหน้าได้หม้ายๆๆๆๆๆๆๆๆ",
        pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSalEj8tnk7AywBgsPErBHh2_8vFwc2yZty-mqmzy3t6pP_lN3WnokkH8ghoeFPZ13cs3g&usqp=CAU",
        leader_name: "Add Carabao",
        worker: [
            {
                id: "1",
                name: "John Doe",
                role: "worker",
            },
            {
                id: "2",
                name: "John Doe",
                role: "worker",
            },
            {
                id: "3",
                name: "John Doe",
                role: "worker",
            },
        ],
        customers: "10000",
        colorStyle: "bg-green-500",
        containerStyle: "my-4",
    },
    {
        id: "3",
        name: "พอจนพอเลย",
        description: "ไม่ซื้อไม่ว่าเเต่อย่ามองหน้าได้หม้ายๆๆๆๆๆๆๆๆ",
        pictureURL: "https://cdn-icons-png.freepik.com/256/17268/17268001.png?semt=ais_hybrid",
        leader_name: "Nont Tanont",
        worker: [
            {
                id: "1",
                name: "John Doe",
                role: "worker",
            },
            {
                id: "2",
                name: "John Doe",
                role: "worker",
            },
            {
                id: "3",
                name: "John Doe",
                role: "worker",
            },
        ],
        customers: "10000",
        colorStyle: "bg-green-500",
        containerStyle: "my-4",
    },
];

export default {user, exploreData, team};