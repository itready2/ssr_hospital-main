import Styles from './Error.module.scss'
import Link from 'next/link';

const NotFound = (params: { locale: string }) => {

  return (
    <div className={Styles.error_container}>
      <h1 className={Styles.head}>404 Page Not Found</h1>
      <h1 className={Styles.head}>ไม่พบหน้าที่ร้องขอ</h1>
      <br />
      <Link href='/' className={Styles.home}>Home</Link>
    </div>

  )
}

export default NotFound