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
    <div style={{ width: '100%' }}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <animated.div style={fade}>
          <Board />
        </animated.div>
      </ThemeProvider>
    </div>
  );
};

export default App;
