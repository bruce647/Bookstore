import { Button, Modal, Typography } from 'antd'
import { useState } from 'react'
import { InnerBookCreationForm } from '../book-form'
import { HomeIcon } from '../icons'
import styles from './navbar.module.css'

export function NavBar() {
  const [showAddModal, setShowAddModal] = useState<boolean>(false)

  return (
    <header className={styles.navbarWrapper}>
      <div className={styles.navbarInner}>
        <div className={styles.mainSection}>
          <HomeIcon />
          <Typography className={styles.titleText}>Books</Typography>
        </div>
        <div className={styles.subSection}>
          <Button type="primary" onClick={() => setShowAddModal(true)}>
            Add book
          </Button>
        </div>
      </div>

      <Modal open={showAddModal} footer={null} onCancel={() => setShowAddModal(false)} style={{ width: 'fit-content' }}>
        <InnerBookCreationForm />
      </Modal>
    </header>
  )
}
