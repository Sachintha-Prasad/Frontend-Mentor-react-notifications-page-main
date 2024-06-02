import React, { useState } from "react"

const App = () => {
    const [notificationList, setNotificationList] = useState([
        {
            id: 1,
            name: "Mark Webber",
            time: "1m",
            image: "/images/avatar-mark-webber.webp",
            notificationTitle: "reacted to your recent post",
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
            image: "/images/avatar-angela-gray.webp",
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
            name: "Jacob Thompson",
            time: "1 day",
            image: "/images/avatar-jacob-thompson.webp",
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
            image: "/images/avatar-rizky-hasanuddin.webp",
            notificationTitle: "sent you a private message",
            attachments: {
                postName: "",
                groupName: "",
                image: "",
                message:
                    "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
            },
            readStatus: false
        },
        {
            id: 5,
            name: "Kimberly Smith",
            time: "1 week",
            image: "/images/avatar-kimberly-smith.webp",
            notificationTitle: "commented on your picture",
            attachments: {
                postName: "",
                groupName: "",
                image: "/images/image-chess.webp",
                message: ""
            },
            readStatus: false
        },
        {
            id: 6,
            name: "Nathan Peterson",
            time: "2 weeks",
            image: "/images/avatar-nathan-peterson.webp",
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
            id: 7,
            name: "Anna Kim",
            time: "2 weeks",
            image: "/images/avatar-anna-kim.webp",
            notificationTitle: "left the group",
            attachments: {
                postName: "",
                groupName: "Chess Club",
                image: "",
                message: ""
            },
            readStatus: false
        }
    ])

    const markAllAsRead = () => {
        const updatedList = notificationList.map((notification) => ({
            ...notification,
            readStatus: true
        }))
        setNotificationList(updatedList)
    }

    const handleNotificationClick = (id) => {
        const updatedList = notificationList.map((notification) => {
            if (notification.id === id) {
                return { ...notification, readStatus: true }
            }
            return notification
        })
        setNotificationList(updatedList)
    }

    const unreadCount = notificationList.filter(
        (notification) => !notification.readStatus
    ).length

    return (
        <div className="bg-very-light-grayish-blue font-jakarta h-screen p-1">
            <div className="container max-w-6xl px-8 py-6 bg-white rounded-xl xl:my-8 xl:shadow-lg">
                <header className="flex items-center justify-between mb-8">
                    <div className="flex gap-2">
                        <h1 className="text-xl font-bold text-blue">
                            Notification
                        </h1>
                        <p className="px-2.5 py-0.5 bg-blue font-bold text-white rounded-md">
                            {unreadCount}
                        </p>
                    </div>
                    <button
                        onClick={markAllAsRead}
                        className="text-dark-grayish-blue hover:text-blue transition-def"
                    >
                        Mark all as read
                    </button>
                </header>
                <div className="notification-list-container flex flex-col gap-3">
                    {notificationList.map((item) => (
                        <div
                            key={item.id}
                            className={`flex gap-4 justify-between p-4 rounded-md transition-def ${
                                !item.readStatus && "bg-light-grayish-blue-1"
                            }`}
                            onClick={() => handleNotificationClick(item.id)}
                        >
                            <div className="flex gap-4 flex-col sm:flex-row items-start ">
                                <img
                                    src={item.image}
                                    alt=""
                                    className="w-full max-w-12 max-h-12"
                                />
                                <div>
                                    <p>
                                        <span className="text-lg text-very-dark-blue font-bold mr-2 hover:text-blue transition-def">
                                            {item.name}
                                        </span>
                                        <span className="text-dark-grayish-blue mr-2">
                                            {item.notificationTitle}
                                        </span>
                                        {item.attachments.postName && (
                                            <span className="text-lg text-dark-grayish-blue font-bold hover:text-blue transition-def">
                                                {item.attachments.postName}
                                            </span>
                                        )}
                                        {item.attachments.groupName && (
                                            <span className="text-lg text-blue font-bold cursor-pointer">
                                                {item.attachments.groupName}
                                            </span>
                                        )}
                                        {!item.readStatus && (
                                            <span className="w-2 h-2 rounded-full bg-red inline-block ml-2"></span>
                                        )}
                                    </p>
                                    <div>{item.time} ago</div>
                                    {item.attachments.message && (
                                        <p className="p-4 mt-3 rounded-md border-[1px] border-light-grayish-blue-2 text-dark-grayish-blue font-medium hover:bg-light-grayish-blue-2 hover:border-transparent transition-def">
                                            {item.attachments.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            {item.attachments.image && (
                                <img
                                    src={item.attachments.image}
                                    alt=""
                                    className="w-full max-w-12 max-h-12"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default App
