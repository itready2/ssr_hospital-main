import Accom from "@/components/client/Accommodation/Accom";
import { useTranslations } from "next-intl";

const Accommodatiom = () => {
    const t = useTranslations();

    const ACCTab = {
        VII: t('Accommodatiom.VII'),
        IV: t('Accommodatiom.IV'),
        ACR: t('Accommodatiom.ACR'),
    }

    return (
        <main>
            <Accom nav={ACCTab} lang={t('lang')} />
        </main>
    )
}

export default Accommodatiom
