import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | 150 Years of Heritage in Siddha & Ayurveda",
  description: "Learn about RJR Herbal Hospitals' 150-year legacy of traditional healing. Founded by Dr. S.R. Jeyadurai, we bring 5 generations of medical wisdom in Siddha and Ayurveda to modern healthcare.",
};

const timelineEvents = [
  {
    year: "1870 – தொடக்கம்",
    title: "சித்த மருத்துவத்தின் வேர்கள்",
    desc: "ஆர்.ஜே.ஆர் ஹெர்பல் மருத்துவமனையின் பயணம், நிறுவனர் டாக்டர் S.R. ஜெயதுரை அவர்களின் தாத்தா பொன்னையா பயில்வான் காலத்திலிருந்தே தொடங்குகிறது. 1850-களில் வாழ்ந்த அவர், 'தி ஹீலர்' (The Healer) அதாவது 'குணப்படுத்துபவர்' என்று அழைக்கப்பட்டார். தமிழ்நாட்டைச் சேர்ந்த இவர், இலங்கையில் அரச குடும்பத்தினருக்கும், உயர்குடி மக்களுக்கும் நம்பிக்கைக்குரிய மருத்துவ ஆலோசகராகத் திகழ்ந்தார்.",
    image: "/images/5 GENERATION.png",
  },
  {
    year: "1900 – தலைமுறைகள்",
    title: "பாரம்பரியத்தை பாதுகாத்தல்",
    desc: "பாரம்பரிய வைத்தியர்கள் குடும்பத்தில் இருந்து வந்த பொன்னையா பயில்வான், பழமையான ஆயுர்வேதக் கொள்கைகள் அதன் தூய வடிவில் பாதுகாக்கப்பட வேண்டும் என்று விரும்பினார். தரமான மூலிகை மருத்துவத்தை அனைவருக்கும் கொண்டு சேர்க்கும் கனவுடன், 1877-ல் தனது சொந்த ஊரான தூத்துக்குடிக்குத் திரும்பினார். அங்கு அவர் தனது மருத்துவ அறிவை நாட்டு வைத்தியர்களுக்கும், தனது குழந்தைகளுக்கும் கற்றுக்கொடுத்தார்.",
    image: "/images/g",
  },
  {
    year: "2000s – பாரம்பரியம் & புது யுகம்",
    title: "சேவை மற்றும் அர்ப்பணிப்பு",
    desc: "சிகிச்சைகள் பயனுள்ளதாக மட்டுமல்லாமல், அனைவருக்கும் எட்டக்கூடிய வகையிலும் இருக்க வேண்டும். டாக்டர் ஜெயதுரை அவர்களின் கொள்ளுத் தாத்தா, நாள்பட்ட ஆஸ்துமா, சுவாச நோய்கள், மற்றும் எலும்பு முறிவுகளுக்குச் சிகிச்சை அளிப்பதில் அந்தப் பிராந்தியத்தின் அடையாளமாக மாறினார். தொலைதூர கிராமங்களில் இலவச மருத்துவ முகாம்களை நடத்தினார்.",
    image: "/images/",
  },
  {
    year: "2008 – நவீன காலம்",
    title: "RJR மருத்துவமனை உதயம்",
    desc: "2008 ஆம் ஆண்டு மூலிகை மருத்துவத்தில் ஒரு புதிய சகாப்தம் தொடங்கியது. தனது  பாரம்பரிய மருத்துவ அறிவை கொண்ட  வைத்தியராக திகழ்ந்த டாக்டர் S.R ஜெயதுரை அவர்கள்  அறிவியல் பூர்வமாகவும் இந்த மருத்துவத்தை செய்ய வேண்டும் என்ற நோக்கத்தில் மருத்துவ பட்ட படிப்பான BNYS  யோகா மற்றும் இயற்கை மருத்துவ பட்ட படிப்பை சென்னை அரும்பாக்கத்தில் உள்ள அரசு யோகா மற்றும் இயற்கை மருத்துவக் கல்லூரியில் ஐந்தரை ஆண்டுகள் மருத்துவ பட்ட படிப்பை படித்து  அறிவியல் பூர்வமாக நிரூபிக்கப்பட்ட மருந்துகளை தயாரித்து வழங்கி வருகிறார் உயர் தரமான  மூலப்பொருட்களைக் கொண்டு மூலிகை மருந்துகளை தயாரித்து  நோய்களை வேரிலிருந்தே நிரந்தரமாக குணப்படுத்துவதை நோக்கமாகக் கொண்டு அவர் செயல்படுத்த தொடங்கினார்",
    image: "/images/",
  },
  {
    year: "இன்று வரை",
    title: "102+ கிளைகளுடன் வளர்ச்சி",
    desc: (
      <>
        இன்று, திரு.S.R ஜெயதுரை, திருமதி. செல்வி ஜெயதுரை அவர்கள் RJR நிறுவனத்தைத் தலைமையேற்று, குணப்படுத்துதல் எனும் இக்குடும்பத்தின் புனிதமான பணியைத் தொடர்ந்து முன்னெடுத்துச் செல்கிறார்.
        <br /><br />
        சென்னையில் ஒரு சிறிய மூலிகை மருத்துவமனையாகத் தொடங்கப்பட்ட RJR, இன்று உள்ளூர் மக்களுக்குத் தனிப்பயனாக்கப்பட்ட சிகிச்சைகளை அளிப்பது மட்டுமல்லாமல், இப்பிராந்தியம் மற்றும் அதற்கப்பால் இருந்தும் வரும் நோயாளிகளுக்குப் பாரம்பரிய சிகிச்சை முறைகள், மூலிகை சிகிச்சைகள் மற்றும் புத்துணர்ச்சி அளிக்கும் திட்டங்களை வழங்கும் நம்பகமான ஆயுர்வேத மருத்துவமனையாக வளர்ந்து நிற்கிறது.
        <br /><br />
        சமூகத்தின் மீது நாங்கள் கொண்டுள்ள அக்கறையையும் அர்ப்பணிப்பையும் மக்கள் அங்கீகரிக்கத் தொடங்கியபோது, இன்னும் பலருக்கு சேவை செய்ய வேண்டும் என்ற உயரிய நோக்கில் RJR ஹெர்பல் மருத்துவமனை விரிவடைந்தது.
        <br /><br />
        இன்று, RJR ஹெர்பல் மருத்துவமனை 102-க்கும் மேற்பட்ட கிளைகளுடன் தென்னிந்தியா முழுவதும் விரிவடைந்துள்ளது. லட்சக்கணக்கான நோயாளிகளுக்கு நம்பிக்கையளிக்கும் ஒரு நிறுவனமாக வளர்ந்து நிற்கிறது. 'நோயில்லாத சமுதாயத்தை உருவாக்குவதே' எங்களின் உயரிய நோக்கம்.
      </>
    ),
    image: "/images/",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* ----------------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* ----------------------------------------------------------- */}
      <section className="relative h-[320px] md:h-[400px] bg-[#C22220] text-white flex items-center justify-center px-4 overflow-hidden">

        <div className="relative text-center max-w-3xl z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-md">எங்களைப் பற்றி</h1>
          <p className="text-base md:text-xl opacity-90 font-medium">
            பாரம்பரியத்தில் வேரூன்றி, உங்கள் நலனில் உறுதியுடன்...
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* ABOUT INTRO */}
      {/* ----------------------------------------------------------- */}
      <section className="py-16 px-4 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl md:text-4xl font-bold text-[#C22220] text-center">
          RJR ஹெர்பல் மருத்துவமனையின் வரவேற்பு
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed text-center sm:text-left md:text-justify max-w-4xl mx-auto">
          ஆர்.ஜே.ஆர் (RJR) ஹெர்பல் மருத்துவமனைக்கு உங்களை அன்புடன் வரவேற்கிறோம். இது பல நூற்றாண்டு கால ஆயுர்வேத ஞானமும், மருத்துவ பட்ட படிப்பு சித்த, ஆயர்வேத முறைகளும் சங்கமிக்கும் ஒரு இயற்கையான மருத்துவ சரணாலயமாகும். 2008 ஆம் ஆண்டில் <span className="text-[#c22220] font-semibold">டாக்டர் S.R. ஜெயதுரை (B.Sc, B.N.Y.S, PGDYN, DVM)</span> அவர்களால் இம்மருத்துவமனை நிறுவப்பட்டது. உண்மையான, முழுமையான மற்றும் இயற்கையான மருத்துவத்தை அனைவருக்கும் கிடைக்கச் செய்வதே இதன் எளிய மற்றும் ஆழமான நோக்கமாகும்.
        </p>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* FOUNDER STORY CARD */}
      {/* ----------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-[#C22220] text-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-stretch">
          {/* Text */}
          <div className="p-8 md:p-12 md:w-2/3 space-y-6 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">
              எங்கள் நிறுவனர் <br /> <span className="text-white text-xl md:text-2xl">டாக்டர் S.R. ஜெயதுரை<span className="text-yellow-400 text-xs md:text-sm"> B.Sc, BNYS, DVM, PGDYN  </span></span>
            </h3>

            <p className="text-white/90 leading-relaxed text-lg">
              எங்கள் நிறுவனர் திரு. ஜெயதுரை அவர்கள், இயற்கையோடு இணைந்து பிணைந்த வாழ்வு முறை கொண்ட தூத்துக்குடியில் ஒரு எளிய விவசாய குடும்பத்தில் பிறந்தவர். மண்ணைப் பொண்ணாக்க உழைத்த ஒரு விவசாயியான தனது தந்தையிடம் இருந்து பொறுமை, கடின உழைப்பு மற்றும் இயற்கையின் மீதான மரியாதையையும் அவர் கற்றுக்கொண்டார்.
            </p>

            <p className="text-white/90 leading-relaxed text-lg hidden md:block">
              இயற்கை மருத்துவத்தின் மீதான ஆர்வத்தை அவருக்குள் விதைத்தவர், கிராமத்து வைத்தியராகத் திகழ்ந்த அவரது அம்மா வழி தாத்தாவாகிய பொன்னையா பயில்வான் மற்றும் தாய்மாமாவும் ஆவர். சிறுவயது முதலே, மூலிகைகளைக் கொண்டு மருந்துகள் தயாரிப்பதையும், நோயாளிகளுக்குச் சிகிச்சை அளிப்பதையும் ஜெயதுரை அவர்கள் அருகில் இருந்து கவனித்து வந்தார்.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full md:w-1/3 min-h-[350px] md:min-h-[auto] bg-[#c22220]">
            <Image
              src="/images/1,Dr.SRJEYADUARI.png"
              alt="Founder"
              fill
              className="object-contain object-bottom md:object-center p-4 drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* HERITAGE TIMELINE (Original Card Layout - No Images) */}
      {/* ----------------------------------------------------------- */}
      <section className="bg-[#fdf5f5] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#C22220] mb-4">
              எங்கள் கதை – 150+ ஆண்டுகள் பாரம்பரியம்
            </h2>
            <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 md:p-10 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col justify-center">
                  <div className="text-[#C22220] font-extrabold text-2xl mb-3 flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                    {event.year}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                    {event.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* MISSION / VISION */}
      {/* ----------------------------------------------------------- */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#C22220]">
            எங்கள் நோக்கம் & தாரக மந்திரம்
          </h2>

          <p className="text-gray-800 text-xl font-medium">
            “நோயில்லாத சமுதாயத்தை உருவாக்குவதே”.
          </p>
          <p className="text-gray-600">
            150+ ஆண்டுகள் பாரம்பரியத்துடன், உங்கள் ஆரோக்கியமே எங்களின் முதன்மை.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
            {[
              { title: "இயற்கை சிகிச்சை", desc: "வாழ்க்கை முறைக்கு ஏற்ற இயற்கை சிகிச்சைகள்." },
              { title: "நம்பகமான மருத்துவம்", desc: "சித்த & ஆயுர்வேத கொள்கைகளை விஞ்ஞான அடிப்படையில் வழங்குதல்." },
              { title: "நோயாளி நலன்", desc: "நோயாளியின் நலனே எங்கள் மருத்துவத்தின் மையம்." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-gray-50 shadow-sm border border-gray-100 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-[#C22220] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* CTA */}
      {/* ----------------------------------------------------------- */}
      <section className="bg-[#C22220] py-16 text-center text-white relative overflow-hidden">
        <div className="relative z-10 px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            எங்கள் சிகிச்சைகளை பார்க்க விரும்புகிறீர்களா?
          </h2>
          <a
            href="/treatments"
            className="inline-block bg-yellow-400 text-red-900 px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all duration-300"
          >
            சிகிச்சைகள் →
          </a>
        </div>
      </section>

    </main>
  );
}
