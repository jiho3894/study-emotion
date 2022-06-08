import styled from "@emotion/styled";

const Bottom = styled.button`
  position: absolute;
  left: 50%;
  bottom: 10px;
  width: 2rem;
  height: 2rem;
  background-color: red;
`;

const BottomScroll = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <Bottom
      onClick={() => {
        scrollToBottom();
      }}
    >
      bottom
    </Bottom>
  );
};

export default BottomScroll;
