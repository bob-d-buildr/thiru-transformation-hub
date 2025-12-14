import { useParams, Navigate } from "react-router-dom";
import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";
import { industryContent } from "@/data/industryContent";

const IndustryPage = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !industryContent[slug]) {
    return <Navigate to="/404" replace />;
  }

  const content = industryContent[slug];

  return (
    <IndustryPageTemplate
      title={content.title}
      subtitle={content.subtitle}
      description={content.description}
      challenges={content.challenges}
      capabilities={content.capabilities}
      relatedServices={content.relatedServices}
    />
  );
};

export default IndustryPage;
