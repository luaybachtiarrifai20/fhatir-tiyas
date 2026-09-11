import { useState } from "react";
import bgPanjang from "../assets/bg_utama.png";
import ornamentRumah from "../assets/25DK702-RUMAH-DAYAK-MERAH.png";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { weddingConfig } from "../weddingConfig";

export const PageGift: React.FC = () => {
  const [showAccount, setShowAccount] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const sectionRef = useScrollReveal();
  const { bankAccounts } = weddingConfig.gift;

  const handleCopy = (accountNumber: string, index: number) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative w-full flex flex-col items-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgPanjang})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundColor: "#621419",
      }}>
      <div className="w-full flex flex-col items-center px-5 pt-10 pb-12 gap-6">
        <div
          className="w-full flex flex-col items-center py-6 px-5 gap-6 rounded-[20px]"
          style={{
            backgroundColor: "rgba(87,11,16,0.8)",
            border: "4px double #F8BB63",
            boxShadow: "0 0 10px 6px rgba(0,0,0,0.2) inset",
          }}>
          <img
            src={ornamentRumah}
            alt="Ornament"
            className="reveal w-[70%] max-w-[250px]"
          />

          <h2
            className="reveal text-[#F8BB63] text-[36px] font-normal"
            style={{ fontFamily: "Philosopher, sans-serif" }}>
            Wedding Gift
          </h2>

          <p
            className="reveal text-white text-[13px] text-center leading-relaxed"
            style={{ fontFamily: "Poppins, sans-serif" }}>
            Doa restu Anda merupakan
            <br />
            karunia yang sangat berarti bagi kami, dan jika memberi adalah
            ungkapan tanda kasih, Anda dapat memberi kado secara cashless.
          </p>

          <button
            onClick={() => setShowAccount(!showAccount)}
            className="reveal flex items-center gap-2 text-black text-[14px] font-medium px-6 py-3 rounded-[10px] hover:opacity-90 transition-opacity"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #F8BB63 0%, #D48E28 100%)",
              fontFamily: "Poppins, sans-serif",
            }}>
            <svg viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5">
              <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
            </svg>
            Klik di sini
          </button>
        </div>

        {showAccount && (
          <div className="w-full flex flex-col gap-4 mt-4">
            {bankAccounts.map((account, index) => (
              <div
                key={index}
                className="w-full flex flex-col items-center rounded-[20px] p-6 gap-3"
                style={{
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}>
                <p
                  className="text-[#621419] text-[14px] font-semibold tracking-wide uppercase"
                  style={{ fontFamily: "Poppins, sans-serif" }}>
                  {account.bankName}
                </p>

                <p
                  className="text-black text-[18px] font-semibold tracking-wider"
                  style={{ fontFamily: "Poppins, sans-serif" }}>
                  {account.accountNumber}
                </p>

                <p
                  className="text-black text-[15px]"
                  style={{ fontFamily: "Poppins, sans-serif" }}>
                  a.n. {account.accountName}
                </p>

                <button
                  onClick={() => handleCopy(account.accountNumber, index)}
                  className="flex items-center gap-2 text-gray-600 text-[12px] font-medium px-4 py-2 rounded-[8px] hover:opacity-90 transition-opacity"
                  style={{
                    border: "1px solid #ccc",
                    fontFamily: "Poppins, sans-serif",
                  }}>
                  <svg
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    className="w-4 h-4">
                    <path d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z" />
                  </svg>
                  {copiedIndex === index ? "Berhasil disalin" : "Copy"}
                </button>
              </div>
              
            ))}
          </div>
        )}
      </div>
    </section>
  );
};