
import ImageSlide from "@/components/client/ImageSlide/ImageSlide"
import { Stylesheet } from "@/declare/type/Stylesheet"

import image7th1 from '@/assets/bedroom/7th/7th1.jpg'
import image7th2 from '@/assets/bedroom/7th/7th2.jpg'
import image7th3 from '@/assets/bedroom/7th/7th3.jpg'
import image7th4 from '@/assets/bedroom/7th/7th4.jpg'
import image7th5 from '@/assets/bedroom/7th/7th5.jpg'

import Styles from "../accom.module.scss"
const page = () => {
    const image = [image7th1.src, image7th2.src, image7th3.src, image7th4.src, image7th5.src,]
    const roomRates = [
        { rate: 'ค่าห้อง', price: 'xxxx บาท' },
        { rate: 'ค่าบริการพยาบาล', price: 'xxxx บาท' },
        { rate: 'ค่าบริการโรงพยาบาล', price: 'xxxx บาท' },
    ];

    return (
        <main>
            <h1 style={PageStyles.head_canter}>ห้องผู้ป่วย Super Deluxe ชั้น 7</h1>
            <br />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta vel, porro cupiditate accusantium adipisci ex ratione sequi, laudantium saepe perferendis, eligendi reprehenderit. Cupiditate reprehenderit sequi quasi illo neque sunt repudiandae ipsa ducimus nihil dolorum perferendis ab adipisci odio iusto nobis harum incidunt, officiis, nemo eaque pariatur quos aperiam. Voluptate iste ab fugiat animi itaque omnis voluptatibus eaque, aut repellendus dolore.</p>
            <br />
            <ImageSlide images={image} />
            <br />
            <table className={Styles['table-container']}>
                <thead>
                    <tr>
                        <th className={Styles['teble-head-left']}>อัตราห้องพักผู้ป่วย</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {roomRates.map((room, index) => (
                        <tr key={index}>
                            <td className={Styles['teble-content-left']}>{room.rate}</td>
                            <td className={Styles['teble-content-right']}>{room.price}</td>
                        </tr>
                    ))}
                    <tr>
                        <td className={Styles['teble-price-left']}>ราคา</td>
                        <td className={Styles['teble-price-right']}>xxx บาท</td>
                    </tr>
                </tbody>
            </table>
        </main>
    )
}

export default page

const PageStyles: Stylesheet = {
    head_canter: {
        textAlign: "center",
    }
}