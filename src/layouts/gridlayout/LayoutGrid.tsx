import Styles from './LayoutGrid.module.scss'

const LayoutGrid = ({children}:{children: React.ReactNode}) => {
  return (
    <section className={Styles.grid_layout}>
      {children}
    </section>
  )
}

export default LayoutGrid
