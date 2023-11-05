import { ThemeProvider } from "styled-components";
import Board from "./components/board/board";
import { animated, useSpring } from "@react-spring/web";
import { lightTheme } from "./components/styles/theme";
import GlobalStyle from "./components/styles/GlobalStyles";

const App = () => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <animated.div
        style={{
          ...fade,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Board />
      </animated.div>
    </ThemeProvider>
  );
};

export default App;
