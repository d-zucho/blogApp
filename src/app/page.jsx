import Link from 'next/link'
import styles from './homepage.module.css'
import Featured from '@/components/featured/Featured'
import CategoryList from '@/components/categoryList/CategoryList'
import CardList from '@/components/cardList/CardList'
import Pagination from '@/components/pagination/Pagination'
import Menu from '@/components/featured/Featured'

export default function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <CardList />
      <Pagination />
      <Menu />
    </div>
  )
}
