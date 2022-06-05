import styled from 'styled-components'
import Lottie from 'react-lottie'

import loading from '../../assets/animation/loading.json'

const Container = styled.div`
  width: 100%;
  height: 100vh;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 10;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.backgroundSecondary + '99'};
`

function Loading({ visible }: { visible: boolean }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Container style={{ display: visible ? 'flex' : 'none' }}>
      <Lottie options={defaultOptions} width={100} height={100} />
    </Container>
  )
}

export default Loading
