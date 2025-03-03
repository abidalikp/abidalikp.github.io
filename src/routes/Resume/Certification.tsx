interface CertificationProps {
  title: string;
  issuer: string;
  url: string;
}

const Certification = (props: CertificationProps) => {
  return (
    <div
      onClick={() => {
        if (props?.url) {
          window.open(props.url, "_blank");
        }
      }}
      className="w-full flex cursor-pointer items-center gap-3 border rounded-lg p-3 hover:bg-tertiary"
    >
      <div className="text-primary ">
        <div className="font-semibold">{props.title}</div>
        <div className="italic">{props.issuer}</div>
      </div>
    </div>
  );
};

export default Certification;
