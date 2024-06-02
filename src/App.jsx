import React from "react"

const App = () => {
    const notificationList = [
        {
            id: 1,
            name: "Mark webber",
            time: "1m",
            image: "../src/assets/images/avatar-mark-webber.webp",
            notificationTitle: "react to your recent post",
            attachments: {
                postName: "My first tournament today!",
                groupName: "",
                image: "",
                message: ""
            },
            readStatus: false
        },
        {
            id: 2,
            name: "Angela Gray",
            time: "5m",
            image: "../src/assets/images/avatar-angela-gray.webp",
            notificationTitle: "followed you",
            attachments: {
                postName: "",
                groupName: "",
                image: "",
                message: ""
            },
            readStatus: false
        },
        {
            id: 3,
            name: "Jecob Thompson",
            time: "1 day",
            image: "../src/assets/images/avatar-jacob-thompson.webp",
            notificationTitle: "has joined your group",
            attachments: {
                postName: "",
                groupName: "Chess Club",
                image: "",
                message: ""
            },
            readStatus: false
        },
        {
            id: 4,
            name: "Rizky Hasanuddin",
            time: "5 days",
            image: "../src/assets/images/avatar-rizky-hasanuddin.webp",
            notificationTitle: "sent you a private message",
            attachments: {
                postName: "",
                groupName: "",
                image: "",
                message:
                    "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and i'm already having lots of fun and improving my game."
            },
            readStatus: false
        },
        {
            id: 5,
            name: "Kimberly Smith",
            time: "1 week",
            image: "../src/assets/images/avatar-kimberly-smith.webp",
            notificationTitle: "commentd on your picture",
            attachments: {
                postName: "",
                groupName: "",
                image: "../src/assets/images/image-chess.webp",
                message: ""
            },
            readStatus: false
        },
        {
            id: 7,
            name: "Nathan Peterson",
            time: "2 weeks",
            image: "../src/assets/images/avatar-nathan-peterson.webp",
            notificationTitle: "reacted to your recent post",
            attachments: {
                postName: "5 end-game strategies to increase your win rate",
                groupName: "",
                image: "",
                message: ""
            },
            readStatus: false
        },
        {
            id: 8,
            name: "Anna Kim",
            time: "2 weeks",
            image: "../src/assets/images/avatar-anna-kim.webp",
            notificationTitle: "left the group",
            attachments: {
                postName: "",
                groupName: "Chess Club",
                image: "",
                message: ""
            },
            readStatus: false
        }
    ]

    return (
        <div className="bg-very-light-grayish-blue h-screen p-1">
            <div className="container max-w-6xl px-8 py-6 bg-white md:mt-16 md:shadow-lg">
                <header className="">
                    <div>
                        <h1 className="text-xl font-bold text-blue">
                            Notification
                        </h1>
                        <p>3</p>
                    </div>
                    <button>Mark all as read</button>
                </header>
                <div className="notification-list-container">
                    {notificationList.map((item) => (
                        <div key={item.id} className="flex gap-6">
                            <img src={item.image} alt="" />
                            <div>
                                <p>
                                    {item.name}{" "}
                                    <span>{item.notificationTitle}</span>
                                    <span>{item.attachments.postName}</span>
                                    <span>{item.attachments.groupName}</span>
                                </p>
                                <div>{item.time} ago</div>
                            </div>
                            <img src={item.attachments.image} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default App
