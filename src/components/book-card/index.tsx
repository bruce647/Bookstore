import { Book } from '@/models/book'
import Image from 'next/image'
import styles from './book-card.module.css'
import { Drawer, Tag } from 'antd'
import { useState } from 'react'
import { InnerBookCreationForm } from '../book-form'

type Props = {
  onClick: () => void
  book: Book
  index: number
}

export function BookCard({ book, index, onClick }: Props) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <a style={{ color: 'black' }} onClick={() => setOpen(true)}>
        <div className={styles.bookCardWrapper}>
          <div className={styles.imageContainer}>
            <Image
              alt="test"
              fill
              src={
                book.imgUrl ||
                'https://s3-alpha-sig.figma.com/img/0cb5/69b1/b2d65aa82dcd96292ac08379c90ce3f5?Expires=1685318400&Signature=ieh6xoCpjQwPZR79Q4bBPQFnJ62-PbR~2B5826ORx1hqTq5LOuHFhkcslHMvchCiQGkbgFkXC0YvimwwDXanSzdX4IK42ZF6s3b7QDkH-dIr6Vq~Rm30K1kfLV~d-7AAMuYPXMGWIGMNYEkx5LAKHkMeAYcSqIcybP4dQMnw~vLV8o~159620rIfM1SOvU1L3FjEQ-JazT~q9VhA1FY4UHNeF5DClIAJ0VpoSmMZbd5~JxyEm~C04BAByRnE0tOPDcl3zbP3hL6ae~e~i2fjUcnDgYkkeCMW676AoHM8CNNjoU6QD-cKVnsIHJxAQexCoN0ykSH2aqGFIYJCoBh~5g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
              }
              objectFit="cover"
            />
          </div>
          <div className={styles.infoSection}>
            <h3>{book.name}</h3>
            <p>{book.des}</p>
            <Tag style={{ margin: '6px 0' }}>{book.category}</Tag>
            <h3>{book.price}</h3>
          </div>
        </div>
      </a>
      <Drawer title="Basic Drawer" placement="right" onClose={() => setOpen(false)} open={open}>
        <InnerBookCreationForm book={book} index={index} />
      </Drawer>
    </>
  )
}
