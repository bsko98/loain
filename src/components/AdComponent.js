import { useEffect, useRef } from "react";

const AdComponent = () => {
  const adRef = useRef(null);

  useEffect(() => {
    try {
      if (window.adsbygoogle && adRef.current) {
        if (!adRef.current.getAttribute('data-ad-loaded')) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          adRef.current.setAttribute('data-ad-loaded', 'true');
          console.log("✅ 광고 삽입 성공");
        } else {
          console.log("⚠️ 광고 이미 삽입됨 (중복 방지됨)");
        }
      }
    } catch (e) {
      console.error("🚨 광고 삽입 중 에러:", e);
    }
  }, []);

  return (
    <div style={{ margin: "20px auto", textAlign: "center" }}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block", width: "728px", height: "90px" }}
        data-ad-client="ca-pub-2430256752056794"
        data-ad-slot="1234567890"
        data-ad-format=""
      ></ins>
    </div>
  );
};

export default AdComponent;