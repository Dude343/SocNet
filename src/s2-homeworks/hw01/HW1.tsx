import React from "react";
import { Message } from "./message/Message";
import MessageSender from "./message-sender/MessageSender";
import s2 from "../../s1-main/App.module.css";
import { FriendMessage } from "./friend-message/FriendMessage";
import avatar from "./avatar.png";

/*
 * 5 - сделать стили в соответствии с дизайном
 * */

export type MessageType = {
    id: number;
    user: {
        avatar: string;
        name: string;
    };
    message: {
        text: string;
        time: string;
    };
};

export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar,
        name: "Dude343",
    },
    message: {
        text: "asdasdasdasd",
        time: "00:13",
    },
};
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar,
        name: "qweqweqweqw",
    },
    message: {
        text: "asdaddddzxczxcz",
        time: "00:14",
    },
};

export const HW1: React.FC = () => {
    return (
        <div id={"hw1"}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={`${s2.hw} ${s2.hw_1}`}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>
        </div>
    );
};
