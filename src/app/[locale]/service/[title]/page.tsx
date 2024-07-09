import RevDoctor from "@/components/client/relevant/RevDoctor";
import SectionRender from "@/components/server/SectionRender/SectionRender";
import axios from "axios";
import { getTranslations } from "next-intl/server";

interface PageProps {
    id: number;
    route: string;
    title: string;
    description: string;
    keywords: string[];
    content: string;
    cover: string;
    relevant_doctor: string[];
}

export async function generateMetadata({ params }: { params: { title: string } }) {

    const data = await getPage(params.title);

    if (!data) {
        return {
            title: 'not found',
            description: '...',
        }
    }

    return {
        title: data.title,
        description: data.description,
        keywords: data.keywords,
        openGraph: {
            type: "website",
            title: data.title,
            description: data.description,
            images: [{
                url: data.cover,
            }],
        },
        twitter: {
            card: "summary_large_image",
            title: data.title,
            description: data.description,
        }
    };
}

const page = async ({ params }: { params: { title: string } }) => {
    const page = await getPage(params.title);
    const t = await getTranslations()

    return (
        <>
            {page ? (
                <main>
                    <SectionRender content={page.content} />
                    {(page.relevant_doctor && page.relevant_doctor.length > 0) && <RevDoctor ids={page.relevant_doctor} title={t('relevant_doctor')} />}
                </main>
            ) : (
                <main style={{ height: '90vh', display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                    <h1 style={{
                        color: 'green',
                        fontSize: '24pt'
                    }}>
                        ขออภัยไม่พบหน้าที่ร้องขอ
                    </h1>
                </main>
            )}
        </>
    )
}

export default page

const getPage = async (title: string): Promise<PageProps | null> => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_END_POINT}/page/${title}`);
        const data = response.data;
        return data;

    } catch (error) {
        console.error(error)
        return null
    }
}
