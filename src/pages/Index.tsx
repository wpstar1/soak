import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MethodsSection from "@/components/MethodsSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import SafetySection from "@/components/SafetySection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FloatingKakaoTalk from "@/components/FloatingKakaoTalk";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <MethodsSection />
      <AdvantagesSection />
      <SafetySection />
      <FAQSection />
      <ContactSection />
      
      {/* Floating KakaoTalk Banner */}
      <FloatingKakaoTalk />
      
      <footer className="bg-financial-navy text-white py-8">
        <div className="container mx-auto px-4">
          {/* Google Maps Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-center">오시는 길</h3>
            <div className="max-w-4xl mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.5567392!2d128.9041270!3d35.0982042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568c3001bc49433%3A0x28de3521110ead30!2z66qF7KeAIOuNlOyDtSDtjLzsiqTtirjsm5Trk5wgMuuLqOyngA!5e0!3m2!1sko!2skr!4v1691234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              ></iframe>
              <div className="mt-4 text-center">
                <p className="text-white/80">부산광역시 사상구 괘법동 명지 더샵 퍼스트월드 2단지</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                  <a 
                    href="https://open.kakao.com/o/sY3KDXig" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-financial-accent text-financial-navy font-semibold rounded-lg hover:bg-financial-accent/90 transition-colors"
                  >
                    카카오톡 상담
                  </a>
                  <a 
                    href="tel:010-2131-0759"
                    className="inline-flex items-center px-4 py-2 bg-financial-accent text-financial-navy font-semibold rounded-lg hover:bg-financial-accent/90 transition-colors"
                  >
                    전화 상담: 010-2131-0759
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center border-t border-white/20 pt-6">
            <p className="text-white/80">© 2024 신용카드현금화. 모든 권리 보유.</p>
            <p className="text-sm text-white/60 mt-2">
              합법적이고 안전한 현금화 정보를 제공합니다.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;