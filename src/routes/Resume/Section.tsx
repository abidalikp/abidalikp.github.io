export interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <div className="flex flex-col gap-4 pb-1">
      <div className="text-primary text-4xl pb-2 border-b font-semibold">
        {title}
      </div>
      {children}
    </div>
  );
};

export default Section;
