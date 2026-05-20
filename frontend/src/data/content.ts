export type Lang = "tr" | "en";

export const content: Record<Lang, any> = {
  tr: {
    nav: { about: "Hakkımda", edu: "Eğitim", exp: "Deneyim", hackathons: "Hackathonlar", projects: "Projeler", certificates: "Sertifikalar", contact: "İletişim", skillMap: "Yetenek Haritam" },
    hero: {
      title: "Merhaba, ben Nisa",
      subtitle: "Full Stack Developer Trainee | Öğrenci",
      description: "Modern web teknolojileriyle projeler geliştirmeye ilgi duyan Full Stack Developer adayıyım. Robotik kodlama, yazılım geliştirme ve yapay zeka alanlarında deneyime sahibim. Problem çözme becerilerimi geliştirmeyi ve kullanıcı odaklı, sürdürülebilir yazılım çözümleri üretmeyi hedefliyorum.",
      
      languages: [
        { name: "İngilizce", level: "B1" },
        { name: "Almanca", level: "B1" }
      ],
      cta1: "Projelerim",
      cta2: "İletişime Geç",
      cvLink: "/cv.pdf",
      cvButton: "CV'mi İndir",
      photo: "", // Fotoğrafınızı src/assets klasörüne ekleyip buraya yolunu yazın, örn: "/src/assets/photo.jpg"
    },
    chatbot: {
      title: "NisaBot",
      placeholder: "Bana Nisa hakkında soru sor...",
      send: "Gönder",
    },
    education: {
      title: "Eğitim",
      items: [
        {
          school: "İstanbul Üniversitesi",
          degree: "Bilgisayar Programcılığı",
          period: "2025 – 2027",
          description: "",
        },
        {
          school: "İstanbul Üniversitesi - Cerrahpaşa",
          degree: "Bilgisayar ve Öğretim Teknolojileri Öğretmenliği",
          period: "2022 - 2026",
          description: "",
        },
      ],
    },
    experience: {
      title: "Deneyimler",
      items: [
        {
          position: "Full Stack Developer Trainee",
          company: "Workintech",
          period: "Temmuz 2025 - Günümüz",
          description: "Frontend ve backend teknolojileriyle uygulama geliştirme üzerine deneyim kazanıyorum. Takım çalışması ve proje geliştirme süreçlerinde aktif rol alıyorum.",
          technologies: ["React", "JavaScript", "Java", "Spring Boot", "SQL", "Git"],
        },
        {
          position: "Yarı Zamanlı Öğrenci Asistanı",
          company: "AUZEM - YETAM XR, İstanbul Üniversitesi - Cerrahpaşa",
          period: "Kasım 2024 - Günümüz",
          description: "Ziyaretçilere VR (sanal gerçeklik) gözlüklerinin kullanımı hakkında bilgilendirme ve uygulamalı tanıtım yapıyorum.",
          technologies: ["VR", "Sanal Gerçeklik"],
        },
        {
          position: "Robotik Kodlama Öğretmeni",
          company: "Robotik Bilim, YTÜ Teknopark",
          period: "Eylül 2024 - Eylül 2025",
          description: "Robotik ve programlama eğitimi vererek, temel kodlama, problem çözme ve teknoloji kavramlarını öğretiyorum. Uygulamalı robotik projeleriyle yaratıcılık ve eleştirel düşünme becerilerini geliştiriyorum.",
          technologies: ["Robotik", "Programlama", "Eğitim"],
        },
        {
          position: "Eğitmen, Yapay Zeka ve Web 2.0 Araçları Eğitimi",
          company: "Şişli Öğretmenevi",
          period: "Aralık 2024",
          description: "İÜC - Doç. Dr. Özgür Yılmaz Hocamız ve ekibimizle birlikte Türkiye'nin farklı illerinden gelen öğretmenlere yönelik kapsamlı bir eğitim programı gerçekleştirdik. Eğitimde dijital dönüşüm uygulamaları ve yapay zekâ tabanlı öğretim yöntemleri üzerinde duruldu.",
          technologies: ["Yapay Zeka", "Web 2.0", "Eğitim Teknolojileri"],
        },
      ],
    },
    hackathons: {
      title: "Hackathonlar & Etkinlikler",
      labelWhatWeDid: "Neler yaptık?",
      labelProjectLinks: "Proje linkleri",
      items: [
        {
          name: "Ankara Hackathon 26'",
          period: "5 - 6 Şubat 2026",
          startDate: "2026-02-05",
          organizer: "BTK Akademi",
          description: "Takım arkadaşım ile birlikte geliştirdiğimiz SafeBank AI projesi kapsamında, bir AI Agent çözümü üzerine çalıştık.",
          projectName: "Proje reposu",
          projectUrl: "https://github.com/ugurazi/safebankai",
          demoUrl: "",
          technologies: ["Python", "Flask", "Ollama", "Pandas", "MySQL 8.0", "Docker"],
        },
        {
          name: "Freya & Fal – Voice AI Hackathon",
          period: "15 Şubat 2026",
          startDate: "2026-02-15",
          organizer: "Freya AI × fal.ai",
          description: "Türkiye'nin ilk Voice AI Hackathon'unda 7/24 çalışan, telefonla ya da mikrofon üzerinden arama alıp gerçek zamanlı takvim sorgulayan ve randevu oluşturabilen otonom bir yapay zekâ sesli resepsiyon asistanı geliştirdik. Tool-based mimari ile LLM karar vermeden önce takvim araçları çağrılır; halüsinasyon önleyici bir yapı kullandık.",
          projectName: "Voice AI — Otonom Sesli Resepsiyon",
          projectUrl: "https://github.com/nisatas/voice-ai-project",
          demoUrl: "",
          technologies: ["Gemini 3", "Freya STT", "Google Calendar API", "FastAPI", "Tool-based mimari"],
        },
        {
          name: "BTK Hackathon 2026",
          period: "6–19 Mayıs 2026",
          startDate: "2026-05-06",
          organizer: "Online",
          description: "6–19 Mayıs 2026 tarihleri arasında online olarak gerçekleşen BTK Hackathon 2026 kapsamında CostPulse AI projesini geliştirdim.",
          projectName: "CostPulse AI",
          projectUrl: "https://github.com/nisatas/costpulse-ai",
          demoUrl: "",
          technologies: ["Online Hackathon", "CostPulse AI", "AI Decision Support"],
        },
        {
          name: "Base41 Hackathon 2026",
          period: "15–16–17 Mayıs 2026",
          startDate: "2026-05-15",
          organizer: "Kocaeli Sanayi Odası",
          description: "15–16–17 Mayıs 2026 tarihlerinde Kocaeli Sanayi Odası’nda gerçekleşen Base41 Hackathon kapsamında ekip olarak NeuroAdapt projesini geliştirdik.",
          projectName: "NeuroAdapt",
          projectUrl: "https://github.com/nisatas/adaptive-learning-ai",
          demoUrl: "",
          technologies: ["Kocaeli Sanayi Odası", "NeuroAdapt", "Puq.ai Workflow"],
        },
        {
          name: "HAYEF Öğrenme Fuarı 2026",
          period: "5 Mayıs 2026",
          startDate: "2026-05-05",
          organizer: "İstanbul Üniversitesi-Cerrahpaşa Hasan Âli Yücel Eğitim Fakültesi",
          description:
            "İstanbul Üniversitesi-Cerrahpaşa Hasan Âli Yücel Eğitim Fakültesi Öğrenme Fuarı'nda görevli olarak yer aldım ve ekip arkadaşlarım ile birlikte geliştirdiğimiz eğitim teknolojileri projesini sunduk.\n\nProjemizde, öğretmenlerin ve okul yöneticilerinin SQL bilgisine ihtiyaç duymadan yalnızca doğal dil kullanarak öğrenci verilerine erişebilmesini sağlayan LLM tabanlı bir Text-to-SQL sistemi tasarladık. Bu sistem, eğitim kurumlarında veri erişimini kolaylaştırmayı, raporlama süreçlerini hızlandırmayı ve karar alma süreçlerini daha erişilebilir hale getirmeyi hedefledi.",
          projectName: "Doğal Dil (NLP) ile Öğrenci Veri Sorgulama Sistemi",
          projectUrl: "https://github.com/nisatas/text-to-sql",
          demoUrl: "",
          technologies: ["Proje Sunumu & Görevli Katılım", "Text-to-SQL", "LLM", "Eğitim Teknolojileri"],
        },
      ],
    },
    certificates: {
      title: "Sertifikalar",
      items: [
        {
          name: "Ankara AI Hackathon (BTK Akademi)",
          period: "5 – 6 Şubat 2026",
          description: "Ankara Hackathon 26 kapsamında SafeBank AI projesi ile AI Agent çözümü geliştirdim.",
          image: "/certificate-ankara.png",
        },
        {
          name: "INSIDER ONE – AI WEEKEND",
          period: "29 Kasım – 30 Kasım 2025",
          description: "LLM temelleri ve n8n ile otomasyon geliştirme alanlarında eğitim aldım.",
          image: "/certificate-ai-weekend.jpg",
        },
      ],
    },
    projects: {
      title: "Projelerim",
      showCount: 5,
      moreProjectsUrl: "https://github.com/nisatas",
      moreProjectsLabel: "Diğer projelerim",
      labels: {
        impact: "Etki & Sonuç",
        caseStudy: "Case Study",
        problem: "Problem",
        solution: "Çözüm",
        architecture: "Mimari",
        challenges: "Zorluklar",
        learned: "Ne Öğrendim",
      },
      items: [
        {
          name: "CostPulse AI",
          description:
            "Küçük ve orta ölçekli işletmeler için maliyet riski analiz eden AI destekli karar destek platformu. Piyasa ve maliyet verilerinden 0–100 arası risk skoru üretir; Gemini ile aksiyon, senaryo ve yönetici raporu önerileri sunar.",
          technologies: [
            "Python",
            "FastAPI",
            "SQLAlchemy",
            "SQLite",
            "PostgreSQL",
            "React",
            "Vite",
            "Tailwind CSS",
            "Google Gemini",
            "REST API",
            "Swagger",
          ],
          githubUrl: "https://github.com/nisatas/costpulse-ai",
          demoUrl: "",
          impact:
            "Deterministik risk motoru ile ham piyasa verilerini kategori bazlı maliyet risk skoruna dönüştüren; Google Gemini ile CFO, satın alma ve ürün ekipleri için uygulanabilir aksiyon planı, senaryo analizi ve yönetici özeti üreten karar destek platformu geliştirdim.",
          caseStudy: {
            problem:
              "Ürün maliyetleri petrol, döviz, emtia ve lojistik gibi birden fazla göstergeden etkilenir. Finans ve satın alma ekipleri bu ham verileri tek tek yorumlamakta zorlanır. Teknik risk skorları çoğu zaman karar vericiye sade ve anlaşılır şekilde aktarılmaz. Bu durum maliyet artışlarını erken fark etmeyi ve doğru aksiyon almayı zorlaştırır.",
            solution:
              "CostPulse AI, küçük ve orta ölçekli işletmeler için geliştirilen yapay zekâ destekli bir karar destek platformudur. Sistem; piyasa ve maliyet verilerini toplar, deterministik bir risk motoru ile 0–100 arası maliyet riski skoru üretir ve Google Gemini ile uygulanabilir aksiyon önerileri, senaryo analizleri, risk radarı ve yönetici raporları oluşturur.\n\nPlatform özellikle CFO, satın alma ekipleri ve ürün yöneticileri için tasarlanmıştır. MVP kapsamında kahve, tekstil, fırın/unlu mamul, elektronik ve plastik/ambalaj kategorileri desteklenir.",
            architecture:
              "Backend Python FastAPI üzerine kuruludur. Veri katmanında SQLAlchemy kullanılır; demo ortamında SQLite, üretime uygun senaryolarda PostgreSQL desteklenir. Piyasa gözlemleri CSV üzerinden idempotent import mantığıyla sisteme alınır. Risk motoru LLM kullanmadan kategori bazlı ağırlıklı skor üretir.\n\nAI katmanında Google Gemini kullanılır. API anahtarı yalnızca backend tarafında .env içinde tutulur; frontend doğrudan Gemini’ye bağlanmaz. AI modülleri backend üzerinden ortak response zarfı ile çalışır. Prompt dosyaları backend/app/prompts altında yönetilir; LLM çağrıları llm_client.py, çıktı normalizasyonu ai_response.py üzerinden yapılır.\n\nFrontend React 18, Vite 5, Tailwind CSS ve React Router ile geliştirilmiştir. Dashboard ekranında risk dağılımı, piyasa sinyalleri, kategori kartları, kategori detayı, AI karar özeti, senaryo analizi ve yönetici raporu gösterilir.",
            challenges:
              "En önemli zorluk, AI çıktılarının deterministik risk skorunun yerine geçmemesini sağlamaktı. Risk hesaplamasının güvenilir kalması için skor motoru LLM’den bağımsız tasarlandı. Gemini yalnızca açıklama, aksiyon önerisi, senaryo yorumu ve rapor üretimi için kullanıldı.\n\nBir diğer zorluk, ham piyasa verilerini teknik olmayan kullanıcılar için anlaşılır hale getirmekti. Bu yüzden AI promptları sade Türkçe, uygulanabilir öneri ve karar verici odaklı çıktı üretecek şekilde yapılandırıldı. Ayrıca frontend’in AI endpoint’lerine doğrudan değil, backend aracılığıyla ulaşması sağlanarak API güvenliği korundu.",
            learned:
              "Bu projede yapay zekânın karar destek sistemlerinde nasıl güvenli ve kontrollü kullanılabileceğini öğrendim. LLM’in her şeyi hesaplayan ana mekanizma olmak yerine, deterministik sistemlerin üzerine açıklama ve öneri katmanı olarak konumlandırılmasının daha güvenilir bir mimari sunduğunu deneyimledim.\n\nAyrıca FastAPI, SQLAlchemy, REST API tasarımı, prompt yönetimi, AI response normalization ve frontend-backend entegrasyonu konularında uçtan uca ürün geliştirme pratiği kazandım.",
          },
        },
        {
          name: "NeuroAdapt",
          description:
            "Öğrencilerin quiz performansı, cevap süresi ve öğrenme davranışlarını analiz ederek kişiselleştirilmiş öğrenme deneyimi sunan AI destekli adaptif eğitim platformu.",
          technologies: [
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "Prisma",
            "MySQL",
            "Puq.ai",
            "AI Workflow",
            "REST API",
            "Responsive UI",
          ],
          githubUrl: "https://github.com/nisatas/adaptive-learning-ai",
          demoUrl: "",
          impact:
            "Kocaeli Base41 Hackathon kapsamında ekip olarak geliştirdiğimiz NeuroAdapt; öğrenci davranışlarını analiz ederek öğretmenlere AI destekli içgörüler, öğrencilere ise okuma kolaylığı, odaklanma modu ve kişisel öğrenme rehberi sunan adaptif eğitim platformudur.",
          caseStudy: {
            problem:
              "Geleneksel eğitim platformları çoğu zaman tüm öğrencilere aynı arayüzü ve aynı öğrenme akışını sunar. Ancak her öğrencinin öğrenme biçimi, dikkat süresi, okuma konforu ve desteğe ihtiyaç duyduğu alanlar farklıdır.\n\nBu durum özellikle bireysel öğrenme desteğine ihtiyaç duyan öğrenciler için platform deneyimini zorlaştırabilir. Öğretmenler de sınıf genelindeki performans verilerini yorumlamakta ve hangi öğrencinin hangi konuda desteğe ihtiyaç duyduğunu hızlıca görmekte zorlanabilir.\n\nNeuroAdapt herhangi bir tıbbi tanı koymaz. Amaç, öğrencinin öğrenme sürecindeki ihtiyaçlarını analiz ederek daha uygun bir öğrenme ortamı sağlamaktır.",
            solution:
              "NeuroAdapt, öğrencilerin quiz performansı, cevap süresi, hata yoğunluğu ve öğrenme davranışlarını analiz ederek hem öğretmenlere hem öğrencilere kişiselleştirilmiş çıktılar sunan AI destekli adaptif eğitim platformudur.\n\nÖğrenci tarafında sistem ders içeriklerini, quiz akışını, okuma kolaylığı modunu, odaklanma modunu ve kişisel AI öğrenme rehberini içerir. Öğretmen tarafında ise sınıf performansı, desteğe ihtiyaç duyan öğrenciler, zorlanılan konular, haftalık AI raporları, öğrenci destek planı ve öğretmen-öğrenci görüşme önerileri sunulur.\n\nPuq.ai workflow entegrasyonu sayesinde sistem sadece statik dashboard göstermekle kalmaz; öğretmen ve öğrenci için aksiyon alınabilir, sade ve anlamlı AI çıktıları üretir.",
            architecture:
              "Frontend tarafında modern ve responsive bir öğrenci/öğretmen arayüzü bulunur. Öğrenci panelinde ders içeriği, quiz ekranı ve adaptif öğrenme modları gösterilir. Öğretmen dashboardunda sınıf geneli analizler, öğrenci performansları ve Puq.ai destekli workflow çıktıları yer alır.\n\nBackend API, öğrenci verileri, quiz sonuçları, öğretmen dashboard verileri ve workflow isteklerini yönetir. Veritabanında öğrenci, quiz, submission ve öğretmen raporu gibi yapılar tutulur.\n\nGenel akış:\nFrontend → Backend API → Business Logic → Database → Puq.ai Workflow Layer → Teacher & Student Dashboards\n\nPuq.ai kullanılan ana workflow alanları:\n- Öğretmen dashboard analizi\n- Haftalık AI rapor workflow’u\n- Öğrenci destek planı workflow’u\n- Öğretmen-öğrenci görüşme planlama workflow’u\n- Öğrenci kişisel AI rehberi",
            challenges:
              "En önemli zorluk, projede öğrencilerle ilgili hassas bir alan ele alındığı için dilin ve sistem davranışının doğru kurgulanmasıydı. Platformun herhangi bir tıbbi tanı koymaması, yalnızca öğrenme davranışlarını analiz ederek destekleyici öneriler sunması gerekiyordu.\n\nBir diğer zorluk, Puq.ai workflow çıktılarının öğretmen ve öğrenci ekranlarına anlamlı şekilde bağlanmasıydı. AI çıktılarının ham, uzun veya belirsiz olmaması için öğretmen aksiyonları, haftalık raporlar ve öğrenci rehberi daha sade ve uygulanabilir bir yapıya dönüştürüldü.\n\nAyrıca kısa hackathon süresinde hem öğrenci paneli hem öğretmen dashboardu hem de AI workflow katmanını canlı demo akışına uygun hale getirmek gerekiyordu.",
            learned:
              "Bu projede AI destekli eğitim teknolojilerinde kişiselleştirme, erişilebilirlik ve etik dil kullanımının ne kadar önemli olduğunu öğrendim. AI’ın öğrenciye tanı koymak için değil, öğrenme sürecini desteklemek ve öğretmene karar desteği sağlamak için kullanılması gerektiğini deneyimledim.\n\nAyrıca hackathon ortamında ekip çalışması, hızlı MVP çıkarma, frontend-backend entegrasyonu, Puq.ai workflow kullanımı ve demo odaklı ürün geliştirme konusunda pratik kazandım.",
          },
        },
        {
          name: "Doğal Dil ile Öğrenci Veri Sorgulama Sistemi",
          description:
            "Öğretmenlerin ve okul yöneticilerinin SQL bilmeden, doğal dil kullanarak öğrenci veritabanı üzerinde sorgulama yapabilmesini sağlayan LLM tabanlı Text-to-SQL sistemi. Bu proje, kullanıcıların \"Matematik notu 50'nin altında olan öğrenciler\" gibi doğal dilde yazdığı soruları PostgreSQL uyumlu SQL sorgularına dönüştürerek öğrenci verilerini hızlı ve anlaşılır şekilde görüntülemesini sağlar.",
          technologies: [
            "Java",
            "Spring Boot",
            "Spring AI",
            "PostgreSQL",
            "Angular",
            "Angular Material",
            "Ollama",
            "Llama 3",
            "LLM",
            "Text-to-SQL",
            "REST API",
          ],
          githubUrl: "https://github.com/nisatas/text-to-sql",
          demoUrl: "",
          impact:
            "Öğretmenlerin ve okul yöneticilerinin teknik SQL bilgisine ihtiyaç duymadan öğrenci verilerine ulaşmasını sağlayan; Spring Boot, PostgreSQL, Angular ve Ollama/Llama 3 tabanlı Text-to-SQL mimarisiyle eğitimde veri erişimini kolaylaştıran bir sistem geliştirdik.",
          caseStudy: {
            problem:
              "Okullarda öğrenci verileri çoğu zaman Excel dosyalarında veya veritabanlarında tutulur. Ancak bu verilere ulaşmak, analiz yapmak ve rapor oluşturmak öğretmenler ve okul yöneticileri için zaman alıcı olabilir. SQL bilgisi olmayan kullanıcılar, öğrenci başarısı, sınıf performansı veya not dağılımı gibi verilere erişmek için teknik destek almak zorunda kalabilir.\n\nBu durum eğitim kurumlarında veri erişimini yavaşlatır ve karar alma süreçlerini zorlaştırır.",
            solution:
              "Bu projede, öğretmenlerin ve okul yöneticilerinin teknik SQL bilgisine ihtiyaç duymadan öğrenci veritabanı üzerinde sorgulama yapabilmesini sağlayan LLM tabanlı bir Text-to-SQL sistemi geliştirdik.\n\nKullanıcı doğal dilde bir soru yazar. Örneğin:\n\"Matematik notu 50'nin altında olan öğrenciler\"\n\nSistem bu soruyu analiz eder, PostgreSQL uyumlu SQL sorgusuna dönüştürür, veritabanından sonucu getirir ve kullanıcıya anlaşılır şekilde sunar. Böylece öğretmenler ve yöneticiler, teknik sorgu dili bilmeden öğrenci verilerine hızlıca erişebilir.",
            architecture:
              "Frontend Angular ile geliştirildi ve kullanıcı arayüzünde Angular Material bileşenleri kullanıldı. Frontend, backend ile REST API üzerinden iletişim kurar.\n\nBackend Java Spring Boot ile geliştirildi. Doğal dil soruları backend tarafında işlenir ve Text-to-SQL akışı burada yönetilir. AI katmanında Ollama üzerinde çalışan Llama 3 yerel dil modeli kullanıldı. Spring AI, Spring Boot backend ile Llama 3 arasındaki iletişimi sağlayan entegrasyon katmanı olarak konumlandırıldı.\n\nVeritabanı PostgreSQL üzerinde kuruldu. Sistem students, grades ve classes tabloları arasında ilişkisel bir yapı kullanır. Bu tablolar Foreign Key ilişkileriyle birbirine bağlanır. Böylece öğrenci, sınıf ve not verileri düzenli ve sorgulanabilir bir yapıda tutulur.\n\nGenel akış:\nAngular Frontend → Spring Boot REST API → Spring AI → Ollama / Llama 3 → PostgreSQL Query → Sonuçların Kullanıcıya Sunulması",
            challenges:
              "En önemli zorluk, doğal dilde gelen farklı soru biçimlerini doğru ve güvenli SQL sorgularına dönüştürmekti. Kullanıcılar aynı isteği farklı cümlelerle ifade edebileceği için sistemin esnek çalışması gerekiyordu.\n\nBir diğer zorluk, LLM tarafından üretilen SQL sorgularının PostgreSQL yapısına uygun olmasını sağlamaktı. Ayrıca sistemin yalnızca izin verilen tablolar üzerinde çalışması, hatalı veya riskli sorguların engellenmesi ve sonuçların kullanıcı için anlaşılır şekilde sunulması gerekiyordu.\n\nFrontend ve backend entegrasyonunda da dinamik sonuç tablosu önemliydi. Çünkü her doğal dil sorusu farklı kolonlar ve farklı veri çıktıları üretebilir. Bu nedenle frontend'in sabit bir tablo yapısına bağlı kalmadan backend'den gelen dinamik kolon ve satırları gösterebilmesi sağlandı.",
            learned:
              "Bu proje sayesinde LLM tabanlı Text-to-SQL sistemlerinin gerçek bir eğitim teknolojisi problemine nasıl uygulanabileceğini öğrendim. Spring Boot ile REST API geliştirme, PostgreSQL üzerinde ilişkisel veritabanı tasarımı, Angular ile frontend entegrasyonu ve Ollama/Llama 3 ile yerel LLM kullanımı konusunda deneyim kazandım.\n\nAyrıca AI destekli sistemlerde güvenli sorgu üretiminin, doğru prompt tasarımının ve frontend-backend veri akışının ne kadar önemli olduğunu deneyimledim. Projeyi HAYEF Öğrenme Fuarı'nda sunarak teknik bir ürünü kullanıcı odaklı ve anlaşılır şekilde anlatma pratiği kazandım.",
          },
        },
        {
          name: "SafeBank AI",
          description: "Ankara Hackathon 26' (BTK Akademi) kapsamında takım arkadaşımla geliştirdiğimiz AI Agent çözümü. Güvenli bankacılık senaryoları için yapay zeka tabanlı bir uygulama.",
          technologies: ["Python", "Flask", "Ollama", "Pandas", "MySQL 8.0", "Docker"],
          githubUrl: "https://github.com/nisatas/safebankai",
          demoUrl: "",
          impact:
            "Doğal dili güvenli ve doğrulanmış MySQL sorgularına dönüştüren, KVKK/GDPR uyumlu ve rol-tabanlı kısıtlarla çalışan bir AI agent geliştirerek raporlama sürecindeki SQL bağımlılığını ortadan kaldıran ve veri erişim riskini minimize eden bir sistem tasarladık.",
          caseStudy: {
            problem:
              "Bankacılık ortamlarında iş birimleri SQL bilmediği için veri ekiplerine bağımlı çalışır; basit raporlar bile saatler veya günler sürebilir. Ayrıca manuel sorgu yazımı ve kontrolü KVKK/GDPR kapsamında veri sızıntısı riski oluşturur. Bu durum karar alma süreçlerini yavaşlatan bir raporlama darboğazı yaratır.",
            solution:
              "SafeBank AI Agent, doğal dil sorularını kontrollü bir çok-adımlı pipeline üzerinden güvenli SQL sorgularına dönüştüren bir mimari sunar. Sistem; intent analizi, veri sözlüğü doğrulaması, güvenlik kontrolleri ve MySQL uyumlu sorgu üretimi adımlarından geçerek yalnızca önceden yetkilendirilmiş tablo ve kolonlara erişim sağlar. Sonuçlar insan-okunur açıklamalarla birlikte sunulur.",
            architecture:
              "Backend: Python & Flask üzerinde modüler agent mimarisi (planner, sql_writer, guard, explainer, plan_validator). LLM katmanı Ollama üzerinden lokal (on-premise uyumlu) çalışır. Data governance için CSV tabanlı Data Dictionary kullanılır; kolon-seviyesinde doğrulama ve PII tagging mekanizması ile erişim kontrolü sağlanır. Akış: Natural Language → Intent Extraction → Data Dictionary Validation → Secure SQL Generation → KVKK Guard Layer → MySQL Execution → Natural Language Explanation. Docker & Docker Compose ile containerized deployment.",
            challenges:
              "LLM'in yetkisiz tablo/kolon üretmesini engellemek, veri sözlüğü ile birebir eşleşmeyen alanları filtrelemek, PII alanlarını işaretleyerek sorgu seviyesinde güvenlik katmanı oluşturmak ve SQL injection benzeri riskleri minimize edecek guard mekanizmasını tasarlamak. Ayrıca sistemin bankacılık ortamına uygun şekilde on-premise çalışabilmesi için lokal LLM entegrasyonu sağlamak.",
            learned:
              "Enterprise AI sistemlerinde doğruluk kadar güvenlik ve veri yönetişimi kritik. LLM'i doğrudan SQL üretmeye bırakmak yerine, planlayıcı + doğrulayıcı + guard katmanlarıyla sınırlandırmak güvenli üretim sağlar. Ayrıca on-premise mimari ve veri sözlüğü tabanlı kısıtlama, finans sektöründe gerçek dünya uygulanabilirliği için vazgeçilmezdir.",
          },
        },
        {
          name: "NURAI — Otonom Sesli Resepsiyon Asistanı",
          description:
            "Freya & Fal Voice AI Hackathon'unda geliştirdiğimiz 7/24 çalışan otonom sesli resepsiyon asistanı. Telefon veya mikrofon ile arama alır, gerçek zamanlı takvim sorgulayıp randevu oluşturur. Tool-based mimari ile halüsinasyon önleyici yapı.",
          technologies: ["Gemini 3", "Freya STT", "Google Calendar API", "FastAPI", "Python"],
          githubUrl: "https://github.com/nisatas/voice-ai-project",
          demoUrl: "",
          impact:
            "7/24 çalışan, gerçek zamanlı Google Calendar sorgulayıp randevu oluşturan voice-first bir resepsiyon asistanı geliştirerek, takvim uygunluğu doğrulamasını otomatikleştirip yanlış/uydurma yanıt riskini tool-based mimariyle minimize ettik.",
          caseStudy: {
            problem:
              "Klasik çağrı karşılama ve randevu alma süreçleri insan operasyonuna bağımlı, mesai dışı saatlerde kesintili ve hataya açık. Ayrıca LLM tabanlı voice asistanlar takvim verisi olmadan tahmin yaparak halüsinasyon üretip yanlış randevu bilgisi verebiliyor.",
            solution:
              "Takvim doğrulaması zorunlu olacak şekilde tasarlanmış tool-based bir Voice AI resepsiyon asistanı geliştirdik. Kullanıcının isteğini sesle alıp (STT), randevu/uygunluk için önce Google Calendar'ı sorguluyor, sonuçlara göre konuşma akışını yönetiyor ve uygun slot varsa randevu oluşturuyor.",
            architecture:
              "Backend: FastAPI üzerinde orkestrasyon katmanı; STT (Freya) ile ses → metin, LLM (Gemini) ile niyet/aksiyon planlama, Calendar Service ile Google Calendar API çağrıları, (varsa) TTS ile yanıt üretimi. Akış: Voice Input → STT → Intent/Tool Selection (LLM) → Calendar Query/Create (Tools) → Response (LLM + TTS). LLM, veri gerektiren adımlarda tahmin yapmaz; her zaman tool çıktısına dayanır.",
            challenges:
              "Gerçek zamanlı takvim entegrasyonunda doğru zaman dilimi/slot yönetimi, konuşma sırasında belirsiz kullanıcı isteklerini (\"yarın öğleden sonra\" gibi) netleştirme, tool çağrılarının sırasını bozmadan akışı doğal tutma ve halüsinasyonları engelleyecek şekilde LLM'i 'önce doğrula sonra konuş' prensibine kilitlemek.",
            learned:
              "Voice-first ürünlerde doğruluk için LLM'i serbest bırakmak yerine tool-based kısıtlarla yönlendirmek kritik. Takvim gibi 'single source of truth' sistemlerinde yanıtın güvenilirliği, doğru entegrasyon + doğru akış tasarımıyla geliyor. Ayrıca sesli arayüzde kullanıcı deneyimini belirleyen şey sadece model değil; netleştirme soruları, hata senaryoları ve gecikme yönetimi.",
          },
        },
      ],
    },
    contact: {
      title: "İletişim",
      infoTitle: "İletişim Bilgileri",
      info: [
        {
          label: "E-posta",
          value: "nisatas544@gmail.com",
          link: "mailto:nisatas544@gmail.com",
          icon: "📧",
        },
        {
          label: "LinkedIn",
          value: "linkedin.com/in/nisaatas",
          link: "https://linkedin.com/in/nisaatas",
          icon: "💼",
        },
        {
          label: "GitHub",
          value: "github.com/nisatas",
          link: "https://github.com/nisatas",
          icon: "💻",
        },
      ],
      form: {
        name: "Adınız",
        email: "E-posta",
        message: "Mesajınız",
        submit: "Gönder",
        formNote: "Mesajınız Gmail'de taslak olarak açılır; gönder butonu ile bana ulaşır.",
      },
    },
    skillMap: {
      title: "Yetenek Haritam",
      subtitle: "Her ada bir yeteneği temsil ediyor — tıkla, projelerdeki becerileri gör.",
      skillsTitle: "Beceriler",
      projectsLabel: "Projeler",
      frontend: "Front-End",
      backend: "Back-End",
      other: "Diğer",
      frontendList: "React, Vite, TypeScript, Tailwind CSS, Angular, Angular Material, JavaScript, HTML, CSS, Responsive UI",
      backendList: "Java, Spring Boot, Spring AI, Python, FastAPI, Flask, Node.js, Express, REST API, SQLAlchemy, Prisma, Swagger",
      otherList: "PostgreSQL, MySQL, SQLite, Google Gemini, Ollama, Llama 3, Text-to-SQL, LLM, Puq.ai, Voice AI, Docker, Git, API Integration, Problem Solving",
      islands: [
        {
          id: "react",
          label: "React",
          ability: "CostPulse AI risk dashboard & NeuroAdapt öğrenci/öğretmen panelleri",
          type: "frontend",
          libraries: "Vite · Tailwind · TS",
          projects: ["CostPulse AI", "NeuroAdapt"],
          skills: {
            frontend: ["React 18", "Vite", "Tailwind CSS", "React Router", "TypeScript", "Responsive UI", "Dashboard ekranları"],
            backend: ["REST API entegrasyonu"],
            other: ["Risk görselleştirme", "AI rapor & senaryo ekranları", "Quiz & adaptif öğrenme arayüzü"],
          },
        },
        {
          id: "angular",
          label: "Angular",
          ability: "Text-to-SQL öğrenci veri sorgulama arayüzü & dinamik sonuç tabloları",
          type: "frontend",
          libraries: "Material · REST",
          projects: ["Doğal Dil ile Öğrenci Veri Sorgulama Sistemi"],
          skills: {
            frontend: ["Angular", "Angular Material", "Dinamik tablo render", "Form & sorgu ekranı"],
            backend: ["REST API entegrasyonu"],
            other: ["Doğal dil sorgu UX", "Dinamik kolon/satır gösterimi"],
          },
        },
        {
          id: "java",
          label: "Java",
          ability: "Spring Boot REST API & Spring AI ile Text-to-SQL backend",
          type: "backend",
          libraries: "Spring Boot · Spring AI",
          projects: ["Doğal Dil ile Öğrenci Veri Sorgulama Sistemi"],
          skills: {
            frontend: [],
            backend: ["Java", "Spring Boot", "Spring AI", "REST API", "Ollama/Llama 3 entegrasyonu"],
            other: ["Text-to-SQL pipeline", "Güvenli SQL üretimi", "Prompt yönetimi"],
          },
        },
        {
          id: "python",
          label: "Python",
          ability: "CostPulse AI, SafeBank AI & NURAI backend geliştirme",
          type: "backend",
          libraries: "FastAPI · Flask",
          projects: ["CostPulse AI", "SafeBank AI", "NURAI"],
          skills: {
            frontend: [],
            backend: ["Python", "FastAPI", "Flask", "SQLAlchemy", "Pandas", "Swagger/OpenAPI"],
            other: ["AI response normalization", "Prompt dosyası yönetimi", "Deterministik + LLM hibrit mimari"],
          },
        },
        {
          id: "nodejs",
          label: "Node.js",
          ability: "NeuroAdapt Express API & Prisma veri katmanı",
          type: "backend",
          libraries: "Express · Prisma",
          projects: ["NeuroAdapt"],
          skills: {
            frontend: [],
            backend: ["Node.js", "Express", "Prisma ORM", "REST API", "MySQL"],
            other: ["Quiz & submission yönetimi", "Öğretmen dashboard veri akışı", "Puq.ai workflow istekleri"],
          },
        },
        {
          id: "database",
          label: "Veritabanı",
          ability: "PostgreSQL, MySQL & SQLite ile ilişkisel veri modelleme",
          type: "backend",
          libraries: "PostgreSQL · MySQL",
          projects: ["CostPulse AI", "NeuroAdapt", "SafeBank AI", "Text-to-SQL"],
          skills: {
            frontend: [],
            backend: ["PostgreSQL", "MySQL 8.0", "SQLite", "SQLAlchemy", "Prisma", "İlişkisel şema tasarımı"],
            other: ["Foreign Key ilişkileri", "CSV idempotent import", "Data Dictionary & PII tagging"],
          },
        },
        {
          id: "llm",
          label: "LLM & AI",
          ability: "Gemini, Ollama & Llama 3 ile karar destek ve Text-to-SQL",
          type: "other",
          libraries: "Gemini · Ollama",
          projects: ["CostPulse AI", "SafeBank AI", "Text-to-SQL", "NeuroAdapt"],
          skills: {
            frontend: [],
            backend: ["Spring AI", "Google Gemini", "Ollama", "Llama 3", "Puq.ai workflow"],
            other: ["Prompt tasarımı", "Yerel/on-premise LLM", "AI çıktı normalizasyonu", "Hackathon MVP hızlandırma"],
          },
        },
        {
          id: "ai-agents",
          label: "AI Agent",
          ability: "Tool-based & guard katmanlı güvenli AI agent mimarileri",
          type: "other",
          libraries: "Text-to-SQL · Guard",
          projects: ["SafeBank AI", "Text-to-SQL", "NURAI"],
          skills: {
            frontend: [],
            backend: ["Planner · SQL Writer · Guard pipeline", "Intent extraction", "Plan validator"],
            other: ["KVKK/GDPR uyumlu erişim", "Halüsinasyon önleme", "Tool-based Voice AI", "Data Dictionary doğrulama"],
          },
        },
        {
          id: "voice-ai",
          label: "Voice AI",
          ability: "NURAI otonom sesli resepsiyon & takvim entegrasyonu",
          type: "other",
          libraries: "STT · Calendar API",
          projects: ["NURAI"],
          skills: {
            frontend: [],
            backend: ["FastAPI orkestrasyon", "Freya STT", "Gemini 3", "Google Calendar API"],
            other: ["7/24 voice-first UX", "Randevu oluşturma akışı", "Önce doğrula sonra konuş prensibi"],
          },
        },
        {
          id: "devops",
          label: "DevOps",
          ability: "Docker containerization & Git ile proje yönetimi",
          type: "tool",
          libraries: "Docker · Git",
          projects: ["SafeBank AI", "Tüm projeler"],
          skills: {
            frontend: [],
            backend: ["Docker", "Docker Compose"],
            other: ["Git & GitHub", "Containerized deployment", "Backend .env güvenliği", "Swagger dokümantasyonu"],
          },
        },
      ],
    },
  },
  en: {
    nav: { about: "About", edu: "Education", exp: "Experience", hackathons: "Hackathons", projects: "Projects", certificates: "Certificates", contact: "Contact", skillMap: "Skill Map" },
    hero: {
      title: "Hi, I'm Nisa",
      subtitle: "Full Stack Developer Trainee | Student",
      description: "I am a Full Stack Developer candidate interested in developing projects with modern web technologies. I have experience in robotics programming, software development, and artificial intelligence. I aim to improve my problem-solving skills and produce user-oriented, sustainable software solutions.",
      
      languages: [
        { name: "English", level: "B1" },
        { name: "German", level: "B1" }
      ],
      cta1: "My Projects",
      cta2: "Contact Me",
      cvLink: "/cv.pdf",
      cvButton: "Download CV",
      photo: "", // Add your photo path here, e.g., "/src/assets/photo.jpg"
    },
    chatbot: {
      title: "NisaBot",
      placeholder: "Ask me something about Nisa...",
      send: "Send",
    },
    education: {
      title: "Education",
      items: [
        {
          school: "Istanbul University",
          degree: "Computer Programming",
          period: "2025 – 2027",
          description: "",
        },
        {
          school: "Istanbul University - Cerrahpaşa",
          degree: "Computer and Instructional Technologies Education",
          period: "2022 - 2026",
          description: "",
        },
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          position: "Full Stack Developer Trainee",
          company: "Workintech",
          period: "July 2025 - Present",
          description: "I am gaining experience in application development with frontend and backend technologies. I actively participate in teamwork and project development processes.",
          technologies: ["React", "JavaScript", "Java", "Spring Boot", "SQL", "Git"],
        },
        {
          position: "Part-Time Student Assistant",
          company: "AUZEM - YETAM XR, Istanbul University - Cerrahpaşa",
          period: "November 2024 - Present",
          description: "I provide information and hands-on demonstrations to visitors about the use of VR (virtual reality) headsets.",
          technologies: ["VR", "Virtual Reality"],
        },
        {
          position: "Robotics Coding Teacher",
          company: "Robotics Science, YTÜ Technopark",
          period: "September 2024 - September 2025",
          description: "I teach robotics and programming, teaching basic coding, problem-solving, and technology concepts. I develop creativity and critical thinking skills through hands-on robotics projects.",
          technologies: ["Robotics", "Programming", "Education"],
        },
        {
          position: "Instructor, AI and Web 2.0 Tools Training",
          company: "Şişli Teachers' House",
          period: "December 2024",
          description: "Together with Assoc. Prof. Dr. Özgür Yılmaz and our team, we conducted a comprehensive training program for teachers from different provinces of Turkey. The training focused on digital transformation applications and AI-based teaching methods.",
          technologies: ["Artificial Intelligence", "Web 2.0", "Educational Technologies"],
        },
      ],
    },
    hackathons: {
      title: "Hackathons & Events",
      labelWhatWeDid: "What we did",
      labelProjectLinks: "Project links",
      items: [
        {
          name: "Ankara Hackathon 26'",
          period: "February 5–6, 2026",
          startDate: "2026-02-05",
          organizer: "BTK Akademi",
          description: "Together with my teammate we worked on an AI Agent solution as part of the SafeBank AI project we developed.",
          projectName: "Project repo",
          projectUrl: "https://github.com/ugurazi/safebankai",
          demoUrl: "",
          technologies: ["Python", "Flask", "Ollama", "Pandas", "MySQL 8.0", "Docker"],
        },
        {
          name: "Freya & Fal – Voice AI Hackathon",
          period: "February 15, 2026",
          startDate: "2026-02-15",
          organizer: "Freya AI × fal.ai",
          description: "At Turkey's first Voice AI Hackathon we built an autonomous AI voice receptionist that runs 24/7, answers calls via phone or microphone, queries the calendar in real time, and can create appointments. We used a tool-based architecture so calendar tools are called before the LLM decides, reducing hallucinations.",
          projectName: "Voice AI — Autonomous Voice Receptionist",
          projectUrl: "https://github.com/nisatas/voice-ai-project",
          demoUrl: "",
          technologies: ["Gemini 3", "Freya STT", "Google Calendar API", "FastAPI", "Tool-based architecture"],
        },
        {
          name: "BTK Hackathon 2026",
          period: "May 6–19, 2026",
          startDate: "2026-05-06",
          organizer: "Online",
          description: "Built the CostPulse AI project during BTK Hackathon 2026, held online between May 6–19, 2026.",
          projectName: "CostPulse AI",
          projectUrl: "",
          demoUrl: "",
          technologies: ["Online Hackathon", "CostPulse AI", "AI Decision Support"],
        },
        {
          name: "Base41 Hackathon 2026",
          period: "May 15–17, 2026",
          startDate: "2026-05-15",
          organizer: "Kocaeli Chamber of Industry",
          description: "Built NeuroAdapt as a team during Base41 Hackathon at Kocaeli Chamber of Industry on May 15–16–17, 2026.",
          projectName: "NeuroAdapt",
          projectUrl: "",
          demoUrl: "",
          technologies: ["Kocaeli Chamber of Industry", "NeuroAdapt", "Puq.ai Workflow"],
        },
        {
          name: "HAYEF Learning Fair 2026",
          period: "May 5, 2026",
          startDate: "2026-05-05",
          organizer: "Istanbul University-Cerrahpaşa Hasan Âli Yücel Faculty of Education",
          description:
            "I served as a volunteer at the Hasan Âli Yücel Faculty of Education Learning Fair at Istanbul University-Cerrahpaşa and presented an educational technology project we developed with my teammates.\n\nOur project was an LLM-based Text-to-SQL system that lets teachers and school administrators access student data using natural language only, without SQL knowledge. The goal was to simplify data access in educational institutions, speed up reporting, and make decision-making more accessible.",
          projectName: "",
          projectUrl: "",
          demoUrl: "",
          technologies: ["Project Presentation & Volunteer Staff", "Text-to-SQL", "LLM", "EdTech"],
        },
      ],
    },
    certificates: {
      title: "Certificates",
      items: [
        {
          name: "Ankara AI Hackathon (BTK Academy)",
          period: "February 5 – 6, 2026",
          description: "Developed an AI Agent solution with the SafeBank AI project at Ankara Hackathon 26.",
          image: "/certificate-ankara.png",
        },
        {
          name: "INSIDER ONE – AI WEEKEND",
          period: "November 29 – November 30 2025",
          description: "I received training in LLM fundamentals and automation development with n8n.",
          image: "/certificate-ai-weekend.jpg",
        },
      ],
    },
    projects: {
      title: "My Projects",
      showCount: 5,
      moreProjectsUrl: "https://github.com/nisatas",
      moreProjectsLabel: "More Projects",
      labels: {
        impact: "Impact & Result",
        caseStudy: "Case Study",
        problem: "Problem",
        solution: "Solution",
        architecture: "Architecture",
        challenges: "Challenges",
        learned: "What I Learned",
      },
      items: [
        {
          name: "CostPulse AI",
          description:
            "An AI-powered decision support platform for small and medium-sized businesses that analyzes cost risk. It generates a 0–100 risk score from market and cost signals, and uses Gemini to propose actions, scenarios, and executive summaries.",
          technologies: [
            "Python",
            "FastAPI",
            "SQLAlchemy",
            "SQLite",
            "PostgreSQL",
            "React",
            "Vite",
            "Tailwind CSS",
            "Google Gemini",
            "REST API",
            "Swagger",
          ],
          githubUrl: "",
          demoUrl: "",
          impact:
            "Built a decision support platform that converts raw market data into category-based cost risk scores with a deterministic risk engine, and generates actionable plans, scenario analyses, and executive summaries for CFO, procurement, and product teams using Google Gemini.",
          caseStudy: {
            problem:
              "Product costs are influenced by multiple signals such as oil, FX rates, commodities, and logistics. Finance and procurement teams struggle to interpret raw data across sources. Technical risk scores are often not communicated in a simple, decision-maker-friendly way, which makes it harder to detect cost increases early and take the right actions.",
            solution:
              "CostPulse AI is an AI-assisted decision support platform for SMBs. It collects market and cost signals, produces a 0–100 cost risk score with a deterministic risk engine, and uses Google Gemini to generate actionable recommendations, scenario analyses, a risk radar, and executive reports.\n\nThe platform is designed for CFOs, procurement teams, and product managers. In the MVP, categories include coffee, textiles, bakery/baked goods, electronics, and plastics/packaging.",
            architecture:
              "Backend is built on Python FastAPI. Data layer uses SQLAlchemy; SQLite is used for demo environments and PostgreSQL is supported for production-ready scenarios. Market observations are imported from CSV with an idempotent import approach. The risk engine produces weighted category scores without using an LLM.\n\nThe AI layer uses Google Gemini. The API key is kept only on the backend in .env; the frontend never calls Gemini directly. AI modules run through the backend with a shared response envelope. Prompt files are managed under backend/app/prompts; LLM calls go through llm_client.py and output normalization through ai_response.py.\n\nFrontend is built with React, Vite, Tailwind CSS, and React Router. The dashboard shows risk distribution, market signals, category cards, category details, AI decision summary, scenario analysis, and executive report views.",
            challenges:
              "The main challenge was ensuring AI outputs never replace the deterministic risk score. To keep risk computation trustworthy, the scoring engine was designed independently from the LLM; Gemini is used only for explanations, action recommendations, scenario interpretation, and report generation.\n\nAnother challenge was making raw market data understandable for non-technical users. Prompts were structured to produce concise, actionable, decision-maker-focused outputs. We also ensured the frontend accesses AI endpoints via the backend to preserve API security.",
            learned:
              "I learned how to use AI safely and in a controlled manner in decision support systems. Instead of making the LLM the core computation engine, placing it as an explanation and recommendation layer on top of deterministic logic creates a more reliable architecture.\n\nI also gained end-to-end product development practice in FastAPI, SQLAlchemy, REST API design, prompt management, AI response normalization, and frontend-backend integration.",
          },
        },
        {
          name: "NeuroAdapt",
          description:
            "An AI-powered adaptive learning platform that analyzes students’ quiz performance, response time, and learning behaviors to deliver a personalized learning experience.",
          technologies: [
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "Prisma",
            "MySQL",
            "Puq.ai",
            "AI Workflow",
            "REST API",
            "Responsive UI",
          ],
          githubUrl: "",
          demoUrl: "",
          impact:
            "Built as a team during the Kocaeli Base41 Hackathon, NeuroAdapt is an adaptive education platform that analyzes student behavior to provide AI-assisted insights for teachers and offers reading-ease mode, focus mode, and a personal learning guide for students.",
          caseStudy: {
            problem:
              "Traditional learning platforms often provide the same UI and learning flow for all students, while each learner’s attention span, reading comfort, and support needs differ. This can make the experience difficult for students who need individualized learning support. Teachers may also struggle to interpret class-wide performance and quickly identify who needs help and where.\n\nNeuroAdapt does not provide medical diagnosis. The goal is to analyze learning behaviors to create a more suitable learning environment.",
            solution:
              "NeuroAdapt is an AI-assisted adaptive education platform that analyzes quiz performance, response time, error density, and learning behaviors to provide personalized outputs for both teachers and students.\n\nOn the student side: course content, quiz flow, reading-ease mode, focus mode, and a personal AI learning guide. On the teacher side: class performance, students who need support, difficult topics, weekly AI reports, student support plans, and teacher–student meeting suggestions.\n\nWith Puq.ai workflow integration, the system generates actionable, concise, and meaningful AI outputs instead of showing only static dashboards.",
            architecture:
              "The frontend provides modern and responsive student/teacher interfaces. The student panel includes course content, quiz screens, and adaptive learning modes. The teacher dashboard includes class-level analytics, student performance, and Puq.ai-supported workflow outputs.\n\nThe backend API handles student data, quiz results, teacher dashboard data, and workflow requests. The database stores entities such as students, quizzes, submissions, and teacher reports.\n\nHigh-level flow:\nFrontend → Backend API → Business Logic → Database → Puq.ai Workflow Layer → Teacher & Student Dashboards\n\nKey Puq.ai workflow areas:\n- Teacher dashboard analysis\n- Weekly AI report workflow\n- Student support plan workflow\n- Teacher–student meeting planning workflow\n- Student personal AI guide",
            challenges:
              "The main challenge was designing language and system behavior carefully in a sensitive domain: the platform must not diagnose, only support based on learning behavior. Another challenge was connecting Puq.ai workflow outputs meaningfully to teacher and student screens, making results concise, actionable, and non-ambiguous.\n\nWithin a short hackathon window, we also needed to make the student panel, teacher dashboard, and AI workflow layer demo-ready end-to-end.",
            learned:
              "I learned how important personalization, accessibility, and ethical language are in AI-assisted education products. AI should not be used to diagnose students, but to support learning and provide decision support to teachers.\n\nI also gained practice in hackathon teamwork, shipping a fast MVP, frontend-backend integration, using Puq.ai workflows, and building product flows with a demo-first mindset.",
          },
        },
        {
          name: "Text-to-SQL Student Data Query System",
          description:
            "An LLM-based Text-to-SQL system that lets teachers and school administrators query a student database in natural language without SQL knowledge. It converts questions like \"students with math grades below 50\" into PostgreSQL-compatible SQL and displays results quickly and clearly.",
          technologies: [
            "Java",
            "Spring Boot",
            "Spring AI",
            "PostgreSQL",
            "Angular",
            "Angular Material",
            "Ollama",
            "Llama 3",
            "LLM",
            "Text-to-SQL",
            "REST API",
          ],
          githubUrl: "https://github.com/nisatas/text-to-sql",
          demoUrl: "",
          impact:
            "Built a system that lets teachers and school administrators access student data without technical SQL knowledge, using a Spring Boot, PostgreSQL, Angular, and Ollama/Llama 3 Text-to-SQL architecture to simplify data access in education.",
          caseStudy: {
            problem:
              "In schools, student data is often stored in Excel files or databases. Accessing, analyzing, and reporting on this data can be time-consuming for teachers and administrators. Users without SQL skills may need technical support to access data on student performance, class outcomes, or grade distributions.\n\nThis slows data access in educational institutions and makes decision-making harder.",
            solution:
              "We built an LLM-based Text-to-SQL system that lets teachers and school administrators query the student database without SQL knowledge.\n\nThe user writes a question in natural language, for example:\n\"Students with math grades below 50\"\n\nThe system analyzes the question, converts it to PostgreSQL-compatible SQL, fetches results from the database, and presents them in a clear format. Teachers and administrators can access student data quickly without knowing query languages.",
            architecture:
              "The frontend is built with Angular and uses Angular Material components. It communicates with the backend via REST API.\n\nThe backend is built with Java Spring Boot. Natural language questions are processed on the backend and the Text-to-SQL flow is managed there. The AI layer uses Llama 3 running locally via Ollama. Spring AI acts as the integration layer between Spring Boot and Llama 3.\n\nThe database runs on PostgreSQL. The system uses a relational structure across students, grades, and classes tables linked by foreign keys, keeping student, class, and grade data organized and queryable.\n\nHigh-level flow:\nAngular Frontend → Spring Boot REST API → Spring AI → Ollama / Llama 3 → PostgreSQL Query → Results presented to the user",
            challenges:
              "The main challenge was converting varied natural language question formats into correct and safe SQL queries. Users can express the same request in different ways, so the system needed to be flexible.\n\nAnother challenge was ensuring LLM-generated SQL matched the PostgreSQL schema. The system also had to work only on allowed tables, block faulty or risky queries, and present results clearly to users.\n\nDynamic result tables were important in frontend-backend integration, because each natural language question can produce different columns and rows. The frontend was built to display dynamic columns and rows from the backend instead of relying on a fixed table structure.",
            learned:
              "Through this project I learned how LLM-based Text-to-SQL systems can be applied to a real EdTech problem. I gained experience in Spring Boot REST API development, relational database design on PostgreSQL, Angular frontend integration, and local LLM usage with Ollama/Llama 3.\n\nI also experienced how important safe query generation, prompt design, and frontend-backend data flow are in AI-assisted systems. Presenting the project at the HAYEF Learning Fair gave me practice explaining a technical product in a user-focused, accessible way.",
          },
        },
        {
          name: "SafeBank AI",
          description: "AI Agent solution we developed with my teammate at Ankara Hackathon 26' (BTK Akademi). An AI-based application for secure banking scenarios.",
          technologies: ["Python", "Flask", "Ollama", "Pandas", "MySQL 8.0", "Docker"],
          githubUrl: "https://github.com/ugurazi/safebankai",
          demoUrl: "",
          impact: "Designed a system that turns natural language into validated, secure MySQL queries using a KVKK/GDPR-compliant, role-based AI agent, removing SQL dependency from reporting and minimizing data access risk.",
          caseStudy: {
            problem: "In banking, business units depend on data teams because they don't know SQL; even simple reports can take hours or days. Manual query writing and review also creates data leakage risk under KVKK/GDPR and creates a reporting bottleneck that slows decision-making.",
            solution: "SafeBank AI Agent provides an architecture that turns natural language questions into secure SQL through a controlled multi-step pipeline. The system goes through intent analysis, data dictionary validation, security checks, and MySQL-compliant query generation, allowing access only to pre-authorized tables and columns. Results are presented with human-readable explanations.",
            architecture: "Backend: modular agent architecture on Python & Flask (planner, sql_writer, guard, explainer, plan_validator). LLM layer runs locally via Ollama (on-premise friendly). CSV-based Data Dictionary for data governance; column-level validation and PII tagging for access control. Flow: Natural Language → Intent Extraction → Data Dictionary Validation → Secure SQL Generation → KVKK Guard Layer → MySQL Execution → Natural Language Explanation. Containerized deployment with Docker & Docker Compose.",
            challenges: "Preventing the LLM from producing unauthorized tables/columns, filtering fields that don't match the data dictionary, building a query-level security layer via PII tagging, and designing a guard to minimize SQL-injection-like risks. Also enabling on-premise operation for banking via local LLM integration.",
            learned: "In enterprise AI, security and data governance are as critical as accuracy. Constraining the LLM with planner + validator + guard layers instead of letting it generate SQL directly enables safe output. On-premise architecture and dictionary-based constraints are essential for real-world applicability in finance.",
          },
        },
        {
          name: "NURAI — Autonomous Voice Receptionist Assistant",
          description: "Autonomous 24/7 voice receptionist we built at the Freya & Fal Voice AI Hackathon. Answers calls via phone or microphone, queries the calendar in real time, and creates appointments. Tool-based architecture to reduce hallucinations.",
          technologies: ["Gemini 3", "Freya STT", "Google Calendar API", "FastAPI", "Python"],
          githubUrl: "https://github.com/nisatas/voice-ai-project",
          demoUrl: "",
          impact: "Built a 24/7 voice-first receptionist that queries Google Calendar in real time and creates appointments, automating availability checks and minimizing wrong or hallucinated answers with a tool-based architecture.",
          caseStudy: {
            problem: "Traditional call handling and appointment booking depend on human ops, are unavailable outside business hours, and are error-prone. LLM-based voice assistants can also hallucinate and give wrong appointment info when they don't have calendar data.",
            solution: "We built a tool-based Voice AI receptionist that always validates against the calendar. It captures the user's request by voice (STT), queries Google Calendar for availability, drives the conversation from the results, and creates appointments when a slot is free.",
            architecture: "Backend: orchestration layer on FastAPI; STT (Freya) for speech-to-text, LLM (Gemini) for intent/action planning, Calendar Service for Google Calendar API calls, (optional) TTS for responses. Flow: Voice Input → STT → Intent/Tool Selection (LLM) → Calendar Query/Create (Tools) → Response (LLM + TTS). The LLM never guesses on data-dependent steps; it always relies on tool output.",
            challenges: "Correct timezone and slot handling in real-time calendar integration, disambiguating vague user requests (e.g. 'tomorrow afternoon'), keeping the flow natural without breaking tool-call order, and locking the LLM to a 'verify first, then speak' principle to avoid hallucinations.",
            learned: "In voice-first products, guiding the LLM with tool-based constraints is critical for accuracy. In single-source-of-truth systems like the calendar, reliability comes from correct integration and flow design. In voice UIs, clarifying questions, error handling, and latency management also define the experience.",
          },
        },
      ],
    },
    contact: {
      title: "Contact",
      infoTitle: "Contact Information",
      info: [
        {
          label: "Email",
          value: "nisatas544@gmail.com",
          link: "mailto:nisatas544@gmail.com",
          icon: "📧",
        },
        {
          label: "LinkedIn",
          value: "linkedin.com/in/nisaatas",
          link: "https://linkedin.com/in/nisaatas",
          icon: "💼",
        },
        {
          label: "GitHub",
          value: "github.com/nisatas",
          link: "https://github.com/nisatas",
          icon: "💻",
        },
      ],
      form: {
        name: "Your Name",
        email: "Email",
        message: "Message",
        submit: "Send",
        formNote: "Your message will open as a draft in Gmail; send from there to reach me.",
      },
    },
    skillMap: {
      title: "My Skill Map",
      subtitle: "Each island represents a skill — click to see project-based abilities.",
      skillsTitle: "Skills",
      projectsLabel: "Projects",
      frontend: "Front-End",
      backend: "Back-End",
      other: "Other",
      frontendList: "React, Vite, TypeScript, Tailwind CSS, Angular, Angular Material, JavaScript, HTML, CSS, Responsive UI",
      backendList: "Java, Spring Boot, Spring AI, Python, FastAPI, Flask, Node.js, Express, REST API, SQLAlchemy, Prisma, Swagger",
      otherList: "PostgreSQL, MySQL, SQLite, Google Gemini, Ollama, Llama 3, Text-to-SQL, LLM, Puq.ai, Voice AI, Docker, Git, API Integration, Problem Solving",
      islands: [
        {
          id: "react",
          label: "React",
          ability: "CostPulse AI risk dashboard & NeuroAdapt student/teacher panels",
          type: "frontend",
          libraries: "Vite · Tailwind · TS",
          projects: ["CostPulse AI", "NeuroAdapt"],
          skills: {
            frontend: ["React 18", "Vite", "Tailwind CSS", "React Router", "TypeScript", "Responsive UI", "Dashboard screens"],
            backend: ["REST API integration"],
            other: ["Risk visualization", "AI report & scenario screens", "Quiz & adaptive learning UI"],
          },
        },
        {
          id: "angular",
          label: "Angular",
          ability: "Text-to-SQL student data query UI & dynamic result tables",
          type: "frontend",
          libraries: "Material · REST",
          projects: ["Text-to-SQL Student Data Query System"],
          skills: {
            frontend: ["Angular", "Angular Material", "Dynamic table rendering", "Query form screens"],
            backend: ["REST API integration"],
            other: ["Natural language query UX", "Dynamic column/row display"],
          },
        },
        {
          id: "java",
          label: "Java",
          ability: "Spring Boot REST API & Spring AI Text-to-SQL backend",
          type: "backend",
          libraries: "Spring Boot · Spring AI",
          projects: ["Text-to-SQL Student Data Query System"],
          skills: {
            frontend: [],
            backend: ["Java", "Spring Boot", "Spring AI", "REST API", "Ollama/Llama 3 integration"],
            other: ["Text-to-SQL pipeline", "Safe SQL generation", "Prompt management"],
          },
        },
        {
          id: "python",
          label: "Python",
          ability: "CostPulse AI, SafeBank AI & NURAI backend development",
          type: "backend",
          libraries: "FastAPI · Flask",
          projects: ["CostPulse AI", "SafeBank AI", "NURAI"],
          skills: {
            frontend: [],
            backend: ["Python", "FastAPI", "Flask", "SQLAlchemy", "Pandas", "Swagger/OpenAPI"],
            other: ["AI response normalization", "Prompt file management", "Deterministic + LLM hybrid architecture"],
          },
        },
        {
          id: "nodejs",
          label: "Node.js",
          ability: "NeuroAdapt Express API & Prisma data layer",
          type: "backend",
          libraries: "Express · Prisma",
          projects: ["NeuroAdapt"],
          skills: {
            frontend: [],
            backend: ["Node.js", "Express", "Prisma ORM", "REST API", "MySQL"],
            other: ["Quiz & submission management", "Teacher dashboard data flow", "Puq.ai workflow requests"],
          },
        },
        {
          id: "database",
          label: "Database",
          ability: "Relational data modeling with PostgreSQL, MySQL & SQLite",
          type: "backend",
          libraries: "PostgreSQL · MySQL",
          projects: ["CostPulse AI", "NeuroAdapt", "SafeBank AI", "Text-to-SQL"],
          skills: {
            frontend: [],
            backend: ["PostgreSQL", "MySQL 8.0", "SQLite", "SQLAlchemy", "Prisma", "Relational schema design"],
            other: ["Foreign key relationships", "CSV idempotent import", "Data Dictionary & PII tagging"],
          },
        },
        {
          id: "llm",
          label: "LLM & AI",
          ability: "Decision support & Text-to-SQL with Gemini, Ollama & Llama 3",
          type: "other",
          libraries: "Gemini · Ollama",
          projects: ["CostPulse AI", "SafeBank AI", "Text-to-SQL", "NeuroAdapt"],
          skills: {
            frontend: [],
            backend: ["Spring AI", "Google Gemini", "Ollama", "Llama 3", "Puq.ai workflow"],
            other: ["Prompt design", "Local/on-premise LLM", "AI output normalization", "Hackathon MVP delivery"],
          },
        },
        {
          id: "ai-agents",
          label: "AI Agents",
          ability: "Tool-based & guard-layer secure AI agent architectures",
          type: "other",
          libraries: "Text-to-SQL · Guard",
          projects: ["SafeBank AI", "Text-to-SQL", "NURAI"],
          skills: {
            frontend: [],
            backend: ["Planner · SQL Writer · Guard pipeline", "Intent extraction", "Plan validator"],
            other: ["KVKK/GDPR-compliant access", "Hallucination prevention", "Tool-based Voice AI", "Data Dictionary validation"],
          },
        },
        {
          id: "voice-ai",
          label: "Voice AI",
          ability: "NURAI autonomous voice reception & calendar integration",
          type: "other",
          libraries: "STT · Calendar API",
          projects: ["NURAI"],
          skills: {
            frontend: [],
            backend: ["FastAPI orchestration", "Freya STT", "Gemini 3", "Google Calendar API"],
            other: ["24/7 voice-first UX", "Appointment booking flow", "Verify first, then speak principle"],
          },
        },
        {
          id: "devops",
          label: "DevOps",
          ability: "Docker containerization & Git project management",
          type: "tool",
          libraries: "Docker · Git",
          projects: ["SafeBank AI", "All projects"],
          skills: {
            frontend: [],
            backend: ["Docker", "Docker Compose"],
            other: ["Git & GitHub", "Containerized deployment", "Backend .env security", "Swagger documentation"],
          },
        },
      ],
    },
  },
};
