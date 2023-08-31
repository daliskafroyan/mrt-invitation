import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="d-flex justify-content-between align-items-md-center pb-3 mb-5">
      <div className="d-flex flex-column">
        <h1 className="fw-bolder" style={{color: '#1a4f9a'}}>INVITATION FOR PRELIMINARY SCREENING PROCESS</h1>
        <h2 style={{color: '#1a4f9a'}}>Jakarta Mass Rapid Transit Project (Phase 2) (I)</h2>
      </div>
      <div className="d-flex flex-row align-items-center gap-2">
        <img src="/JakLingko.png" height={80} alt="jaklingko" />
        <img src="/mrtjakarta.png" height={50} alt="mrtjakarta" />
      </div>
    </header>
  );
};

export default Header;
