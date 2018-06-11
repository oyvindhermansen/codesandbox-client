import React from 'react';
import DelayedAnimation from 'app/components/DelayedAnimation';

import SandboxGrid from '../SandboxGrid';
import Filters from './Filters';

import { Container, HeaderContainer } from './elements';

// eslint-disable-next-line react/prefer-stateless-function
class Content extends React.Component {
  render() {
    const {
      sandboxes,
      Header,
      isLoading,
      ExtraElement,
      hideOrder,
      possibleTemplates = [],
      page,
    } = this.props;

    return (
      <Container>
        <HeaderContainer>
          {Header}
          <Filters
            hideOrder={hideOrder}
            possibleTemplates={possibleTemplates}
          />
        </HeaderContainer>
        {isLoading ? (
          <DelayedAnimation
            delay={0.6}
            style={{
              marginTop: '2rem',
              fontWeight: 600,
              color: 'rgba(255, 255, 255, 0.5)',
            }}
          >
            Fetching Sandboxes...
          </DelayedAnimation>
        ) : (
          <SandboxGrid
            page={page}
            ExtraElement={ExtraElement}
            sandboxes={sandboxes}
          />
        )}
      </Container>
    );
  }
}

export default Content;