import { Header } from "atomicComponents/organisms/Header";
import Dialogs from "framework/dialogs/components";
import { memo, useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { StyledPageBackground, StyledPageContentWrapper } from "./styles";

interface Props {
  children?: JSX.Element;
}

const PageTemplate = ({ children }: Props): JSX.Element => {
  const location = useLocation();
  const { todoListId } = useParams();
  const [contentVisible, setContentVisible] = useState(true);

  useEffect(() => {
    if (!todoListId) {
      setContentVisible(false);
      setTimeout(() => {
        setContentVisible(true);
      }, 300);
    }
  }, [location.pathname, todoListId]);

  return (
    <StyledPageBackground
      contentVisible={contentVisible}
      imageUrl={`${process.env.PUBLIC_URL}/images/wave-doodles.png`}
    >
      <Header />
      <StyledPageContentWrapper contentHidden={!contentVisible}>
        <Outlet />
        {children}
      </StyledPageContentWrapper>
      <Dialogs />
    </StyledPageBackground>
  );
};

export default memo(PageTemplate);
