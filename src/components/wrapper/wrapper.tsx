import { ReactNode, memo } from 'react'
import styled from 'styled-components'

const Container = styled.div``

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <main
      style={{
        paddingLeft: 90,
        paddingTop: 10,
        paddingRight: 20,
      }}
    >
      {children}
    </main>
  )
}

export default memo(Wrapper)
