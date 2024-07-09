import { getTranslations } from "next-intl/server";
import Styles from "../About.module.scss"
import LayoutGrid from "@/layouts/gridlayout/LayoutGrid";
import DoctorCard from "@/components/client/DoctorCard/DoctorCard";
import { Doctor } from "@/declare/function/getDoctor";
import { DoctorProps } from "@/declare/type/DoctorProps";

const Medical = async () => {

  const doctor = await new Doctor().getAll()

  const t = await getTranslations();

  return (
    <main>
      <h1 className={Styles.head}>{t('footer.team')}</h1>
      {doctor ? (
        <LayoutGrid>
          {doctor.map((doctor: DoctorProps) => (
            <DoctorCard
              key={doctor.id}
              id={doctor.id}
              cover={doctor.cover}
              name={doctor.name}
              specialized={doctor.specialized}
              departments={doctor.departments}
            />
          ))}

        </LayoutGrid>
      ) : (
        <>
        </>
      )}

    </main>
  )
}

export default Medical
