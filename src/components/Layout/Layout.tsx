import { Outlet } from 'react-router-dom';

import { Header, Logo, TextLogo, MainBox, HeaderContainer } from './styled';
import { ReactComponent as ImgLogo } from '../../assets/logo.svg';

const Layout = () => {
  return (
    <>
      <Header>
        <HeaderContainer>
          <Logo>
            <ImgLogo/>
            <TextLogo>VocabBuilder</TextLogo>
          </Logo>
        </HeaderContainer>
      </Header>
      <MainBox>
        <Outlet />
      </MainBox>
    </>
  );
};

export default Layout;
