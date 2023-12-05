import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import { theme } from '@utils';
import * as Pages from '@pages';
import { Song } from '@components';
import { HasSnowballData } from './router';
import { SnowBallProvider } from '@pages/Visit/SnowBallProvider';
import { MessageProvider } from '@pages/Visit/MessageProvider';
import { DecoProvider } from '@pages/Visit/Deco/DecoProvider';

const Outer = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;

  @media (min-width: ${theme.size['--desktop-min-width']}) {
    width: ${theme.size['--desktop-width']};
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Outer>
          <Song />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Pages.Intro />} />

              <Route
                path="/visit/:user"
                element={
                  <DecoProvider>
                    <MessageProvider>
                      <SnowBallProvider>
                        <Outlet />
                      </SnowBallProvider>
                    </MessageProvider>
                  </DecoProvider>
                }
              >
                <Route path="" element={<Pages.Visit />} />
                <Route path="deco" element={<Pages.Deco />} />
              </Route>

              <Route
                path="/make"
                element={
                  <HasSnowballData>
                    <Outlet />
                  </HasSnowballData>
                }
              >
                <Route path="" element={<Pages.Nickname />} />
                <Route path="snowball" element={<Pages.Snowball />} />
              </Route>

              <Route
                path="/main"
                element={
                  <MessageProvider>
                    <SnowBallProvider>
                      <Pages.Main />
                    </SnowBallProvider>
                  </MessageProvider>
                }
              />

              <Route path="/boostcamp" element={<Pages.Boostcamp />} />
              <Route path="*" element={<Pages.Wrong />} />
            </Routes>
          </BrowserRouter>
        </Outer>
      </ThemeProvider>
    </>
  );
};

export default App;
