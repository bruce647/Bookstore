import { ReactNode } from 'react'
import styles from './content-container.module.css'

type Props = {
  children: ReactNode
}

export function ContentContainer({ children }: Props) {
  return <div className={styles.contentContainerWrapper}>{children}</div>
}
