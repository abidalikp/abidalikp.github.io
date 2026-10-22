export interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-primary text-2xl font-bold border-b border-card-border pb-2">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default Section;
