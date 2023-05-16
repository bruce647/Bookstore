import { BookCard } from '@/components/book-card'
import { ContentContainer } from '@/components/content-container'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { Row, Col } from 'antd'

export default function Home() {
  const books = useAppSelector((state) => state.books.books)

  return (
    <ContentContainer>
      <Row gutter={[16, 16]} style={{ marginTop: '12px' }}>
        {books.map((item, index) => {
          return (
            <Col md={6} xs={24} key={index}>
              <BookCard book={item} index={index} onClick={() => {}} />
            </Col>
          )
        })}
      </Row>
    </ContentContainer>
  )
}
