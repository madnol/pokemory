import { animated, useSpring } from '@react-spring/web';
import { ThemeProvider } from 'styled-components';

import Board from './components/board';
import GlobalStyle from './components/styles/GlobalStyles';
import { lightTheme } from './components/styles/theme';

const App = () => {
  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    config: { mass: 5, tension: 500, friction: 80 }
  });

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <animated.div style={fade}>
        <Board />
      </animated.div>
    </ThemeProvider>
  );
};

export default App;
