import Styles from './SectionRender.module.scss'

//ใว้ Render เนื้อหาในหน้า โปรโมชั่น ข่าวสาร สุขภาพ และหน้าแต่ละแผนก
interface SectionRenderProps {
   content: string;
}

const sanitizeHTML = (html: string): string => {
   // Remove script tags and their contents
   let cleanedHTML = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
   // Remove event attributes
   cleanedHTML = cleanedHTML.replace(/ on\w+="[^"]*"/g, '');
   cleanedHTML = cleanedHTML.replace(/<[^>]+?\s+(id|type|data\w+)=["'][^"']*["'][^>]*>/gi, '');
   return cleanedHTML;
};

const SectionRender: React.FC<SectionRenderProps> = ({ content }) => {

   const sanitizedContent = sanitizeHTML(content);

   return <section className={Styles.wrap} dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
};

export default SectionRender