import { ReactNode, memo } from 'react'

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <main style={{ paddingLeft: 90, paddingTop: 10, paddingRight: 20 }}>
      {children}
    </main>
  )
}

export default memo(Wrapper)
