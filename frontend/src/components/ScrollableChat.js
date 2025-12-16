import { Avatar } from "@chakra-ui/avatar";
import { Tooltip } from "@chakra-ui/tooltip";
import { Spinner } from "@chakra-ui/react";
import ScrollableFeed from "react-scrollable-feed";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../config/ChatLogics";
import { ChatState } from "../Context/ChatProvider";

const ScrollableChat = ({ messages, pendingMessages = [] }) => {
  const { user } = ChatState();

  // Combine regular messages with pending messages
  const allMessages = [...messages, ...pendingMessages];

  return (
    <ScrollableFeed>
      <div className=" bg-[#0f1924] ">
        {allMessages &&
          allMessages.map((m, i) => (
            <div
              style={{
                display: "flex",
                backgroundColor: "#0f1924",
                padding: "1px 10px",
              }}
              key={m._id} 
            >
              {(isSameSender(allMessages, m, i, user._id) ||
                isLastMessage(allMessages, i, user._id)) && (
                <Tooltip
                  label={m.sender.name}
                  placement="bottom-start"
                  hasArrow
                >
                  <Avatar
                    mt="7px"
                    mr={1}
                    size="sm"
                    cursor="pointer"
                    name={m.sender.name}
                    src={m.sender.pic}
                  />
                </Tooltip>
              )}
              <span
                style={{
                  backgroundColor: `${
                    m.sender._id === user._id ? " #153454ff" : "#21364a"
                  }`,
                  marginLeft: isSameSenderMargin(allMessages, m, i, user._id),
                  marginTop: isSameUser(allMessages, m, i, user._id) ? 3 : 10,
                  borderBottomRightRadius: "10px",
                  borderBottomLeftRadius: "10px",
                  borderTopLeftRadius: `${
                    m.sender._id === user._id ? "10px" : "0"
                  }`,
                  borderTopRightRadius: `${
                    m.sender._id !== user._id ? "10px" : "0"
                  }`,
                  padding: "5px 15px",
                  maxWidth: "75%",
                  color: "white",
                  opacity: m.isPending ? 0.6 : 1,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {m.content}
                {m.isPending && (
                  <Spinner
                    size="xs"
                    color="white"
                    thickness="2px"
                    speed="0.8s"
                  />
                )}
              </span>
            </div>
          ))}
      </div>
    </ScrollableFeed>
  );
};

export default ScrollableChat;
