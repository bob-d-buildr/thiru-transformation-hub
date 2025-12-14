import { useParams, Navigate } from "react-router-dom";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { serviceContent } from "@/data/serviceContent";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !serviceContent[slug]) {
    return <Navigate to="/404" replace />;
  }

  const content = serviceContent[slug];

  return (
    <ServicePageTemplate
      title={content.title}
      subtitle={content.subtitle}
      description={content.description}
      offerings={content.offerings}
      benefits={content.benefits}
      relatedIndustries={content.relatedIndustries}
    />
  );
};

export default ServicePage;
