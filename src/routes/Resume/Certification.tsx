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
      className="w-full flex cursor-pointer items-center gap-3 border border-card-border rounded-xl p-4 bg-card-bg hover:border-accent/30 transition-all"
    >
      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-accent-soft shrink-0 text-lg">
        🏆
      </div>
      <div className="text-primary">
        <div className="font-semibold">{props.title}</div>
        <div className="text-sm text-muted">{props.issuer}</div>
      </div>
      <svg
        className="ml-auto text-muted shrink-0"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
      </svg>
    </div>
  );
};

export default Certification;
