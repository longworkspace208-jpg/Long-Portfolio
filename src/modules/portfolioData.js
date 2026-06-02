/**
 * FILE DỮ LIỆU PORTFOLIO VIỆT HÓA - COSMIC PROJECT
 * 
 * Hướng dẫn điền:
 * - Bạn chỉ cần chỉnh sửa các nội dung văn bản trong dấu nháy kép `""` hoặc `''`.
 * - Giao diện HUD và Cockpit của trang web sẽ tự động nạp dữ liệu từ tệp này.
 */

export const portfolioData = {
  // ==========================================
  // PHẦN 1: THÔNG TIN PHI CÔNG & MỤC TIÊU DỰ ÁN
  // ==========================================
  pilotInfo: {
    fullName: "Nguyễn Kim Lê Long",
    class: "Class K70I-CS2",
    major: "Computer Science",
    school: "UET - VNU",
    avatar: "", // Bạn có thể đặt link ảnh phi công của bạn hoặc để trống dùng mặc định
    
    // Giới thiệu bản thân (Pilot Profile)
    aboutMe: "Tôi là Nguyễn Kim Lê Long, sinh viên chuyên ngành Khoa học Máy tính tại Trường Đại học Công nghệ - ĐHQGHN. Với ngọn lửa đam mê công nghệ cháy bỏng và khát khao chinh phục các đỉnh cao tri thức mới, tôi luôn nỗ lực nghiên cứu các giải pháp lập trình và hệ thống thông tin thông minh để giải quyết các vấn đề thực tiễn.",
    
    // Định hướng học tập (Flight Vector)
    learningGoals: [
      "Chinh phục các kiến thức chuyên sâu về Khoa học Máy tính bao gồm cấu trúc dữ liệu nâng cao, tối ưu giải thuật và kiến trúc hệ thống phần mềm.",
      "Nghiên cứu ứng dụng thực tiễn của Trí tuệ nhân tạo (AI) và Học máy (Machine Learning) để xây dựng các công cụ phân tích tự động thông minh.",
      "Rèn luyện kỹ năng tư duy phản biện, giải quyết vấn đề và giao tiếp cộng tác đa nền tảng trong môi trường công nghệ số toàn cầu."
    ],
    
    // Ý nghĩa Portfolio (Mission Briefing)
    portfolioPurpose: "Dự án Portfolio này được thiết lập như một kho lưu trữ số học thuật bền vững, nhằm chứng minh sự trưởng thành về năng lực tư duy kỹ thuật, kỹ năng phát triển nội dung số và cam kết tuân thủ liêm chính học thuật trong suốt hành trình học tập."
  },

  // ==========================================
  // LỘ TRÌNH PHÁT TRIỂN (MISSION LOG TIMELINE)
  // ==========================================
  missionLogs: [
    {
      time: "LOG-01 // KHỞI ĐỘNG DỰ ÁN",
      title: "Xác lập tọa độ Portfolio",
      desc: "Lên ý tưởng, phác thảo giao diện buồng lái không gian HUD và định nghĩa cấu trúc dữ liệu cốt lõi cho trang Portfolio cá nhân."
    },
    {
      time: "LOG-02 // LẬP TRÌNH NỀN TẢNG",
      title: "Thiết lập Động cơ 3D & Chuyển động",
      desc: "Tích hợp thư viện Three.js vẽ 10.000 điểm tinh tú, liên kết GSAP ScrollTrigger để kiểm soát hoạt cảnh cuộn trang một cách nhịp nhàng."
    },
    {
      time: "LOG-03 // SỐ HÓA BÀI TẬP",
      title: "Thiết kế Lưới lưu trữ bài tập",
      desc: "Trình bày 6 bài tập lớn dưới dạng lưới lục giác hiện đại, hỗ trợ cơ chế nhấn nút bung mở chi tiết mượt mà và trực quan."
    }
  ],

  // ==========================================
  // PHẦN 2: KHO LƯU TRỮ BÀI TẬP (MISSION ARCHIVE)
  // ==========================================
  exercises: [
    {
      id: 1,
      code: "[BT-01]",
      title: "Máy tính và thiết bị ngoại vi",
      goal: "Tìm hiểu chi tiết về cấu trúc phần cứng máy tính, nguyên lý hoạt động của các khối xử lý trung tâm (CPU, RAM, ROM) và cách thức các thiết bị ngoại vi giao tiếp để xây dựng hệ thống phần cứng tối ưu cho việc học tập Khoa học máy tính.",
      process: "Nghiên cứu tài liệu về kiến trúc máy tính hiện đại, tiến hành khảo sát thực tế giá thành và hiệu năng của các linh kiện phần cứng trên thị trường, xây dựng báo cáo phân tích chi tiết và đề xuất một cấu hình máy tính trạm chuyên dụng phục vụ lập trình ứng dụng và nghiên cứu mô hình AI.",
      product: {
        type: "pdf", // 'pdf', 'image', 'video', 'link'
        url: "#",
        label: "Báo cáo phần cứng trạm lập trình.pdf"
      }
    },
    {
      id: 2,
      code: "[BT-02]",
      title: "Khai thác dữ liệu và thông tin",
      goal: "Phát triển kỹ năng tìm kiếm thông tin nâng cao, sử dụng các toán tử lọc dữ liệu phức tạp và khai thác tài nguyên số từ internet một cách khoa học, phục vụ tối đa cho hoạt động học tập và nghiên cứu học thuật.",
      process: "Thực hành thu thập dữ liệu thô từ các nguồn thống kê số uy tín trên internet, sử dụng công cụ bảng tính để lọc, phân loại, làm sạch dữ liệu và tạo lập biểu đồ trực quan thể hiện rõ nét các xu hướng công nghệ nổi bật trong thập kỷ qua.",
      product: {
        type: "image",
        url: "#",
        label: "Biểu đồ thống kê xu hướng số.png"
      }
    },
    {
      id: 3,
      code: "[BT-03]",
      title: "Tổng quan về trí tuệ nhân tạo",
      goal: "Nghiên cứu các khái niệm nền tảng về AI, Học máy (Machine Learning), Học sâu (Deep Learning), và thực hành phương pháp thiết kế câu lệnh (Prompt Engineering) để tương tác hiệu quả, an toàn và có đạo đức với các mô hình ngôn ngữ lớn (LLM).",
      process: "Thực hành thiết kế và kiểm thử hàng loạt câu lệnh điều phối trợ lý ảo ChatGPT/Claude phục vụ giải bài tập lập trình, so sánh hiệu năng giải quyết vấn đề giữa các mô hình khác nhau và soạn thảo cẩm nang ứng dụng AI hỗ trợ học tập.",
      product: {
        type: "link",
        url: "#",
        label: "Cẩm nang Prompt Engineering.html"
      }
    },
    {
      id: 4,
      code: "[BT-04]",
      title: "Giao tiếp hợp tác trong môi trường số",
      goal: "Tối ưu hóa kỹ năng làm việc nhóm trực tuyến thông qua việc kết hợp các công cụ số hiện đại như Trello, Slack, và Google Workspace để nâng cao hiệu suất cộng tác đồng bộ từ xa.",
      process: "Phân chia vai trò cụ thể trong nhóm, cùng xây dựng kế hoạch dự án số hóa tài liệu học tập trên bảng Kanban Trello, tổ chức họp trực tuyến ghi lại tiến trình, và xuất bản slide báo cáo đồng bộ hóa hoàn toàn trên đám mây đám mây.",
      product: {
        type: "video",
        url: "#",
        label: "Video liên minh cộng tác số.mp4"
      }
    },
    {
      id: 5,
      code: "[BT-05]",
      title: "Sáng tạo nội dung số",
      goal: "Nâng cao năng lực truyền thông thị giác và tư duy thiết kế, biên tập và xuất bản các ấn phẩm đồ họa số truyền tải thông điệp kiến thức một cách khoa học, cuốn hút và có tính thẩm mỹ cao.",
      process: "Lên ý tưởng kịch bản nội dung về an toàn thông tin mạng, sử dụng công cụ thiết kế chuyên nghiệp Canva/Photoshop để phối trộn màu sắc neon, sắp xếp bố cục đồ họa khoa học và trực quan hóa các số liệu phòng vệ mã độc phức tạp.",
      product: {
        type: "image",
        url: "#",
        label: "Infographic Bảo mật không gian mạng.png"
      }
    },
    {
      id: 6,
      code: "[BT-06]",
      title: "An toàn và liêm chính học thuật",
      goal: "Thấu hiểu các nguyên tắc bảo mật thông tin cá nhân trên mạng, hiểu rõ luật sở hữu trí tuệ, quyền tác giả số và nắm vững chuẩn mực trích dẫn khoa học (APA/IEEE) nhằm loại bỏ nguy cơ đạo văn.",
      process: "Phân tích các tình huống thực tế về vi phạm bản quyền và đạo văn trong môi trường số, thực hành sử dụng phần mềm kiểm tra trùng lặp và soạn thảo báo cáo phân tích có trích dẫn nguồn đầy đủ, chính xác theo tiêu chuẩn quốc tế.",
      product: {
        type: "pdf",
        url: "#",
        label: "Tài liệu cam kết liêm chính học thuật.pdf"
      }
    }
  ],

  // ==========================================
  // PHẦN 3: TỔNG KẾT & CẢM NHẬN (TRANSMISSION COMPLETE)
  // ==========================================
  reflection: {
    // Cảm nhận chung (Transmission Log)
    experience: "Quá trình xây dựng Cosmic Portfolio là một cuộc hành trình vô cùng ý nghĩa đối với tôi. Việc tự tay thiết kế giao diện buồng lái không gian cockpit không chỉ giúp tôi củng cố và ứng dụng các kỹ năng lập trình Web nền tảng, mà còn rèn luyện tính kiên nhẫn khi cấu hình các tương tác 3D WebGL và GSAP ScrollTrigger phức tạp. Nhìn lại chặng đường hoàn thành 6 bài tập lớn cùng sự lột xác của trang Portfolio, tôi cảm nhận rõ sự tiến bộ vượt bậc của bản thân về tư duy thiết kế hệ thống lẫn kỹ năng giải quyết vấn đề số.",
    
    // 6 Kỹ năng hiển thị trên lưới lục giác nạp (tỉ lệ từ 0 đến 100)
    skills: [
      { name: "PHẦN CỨNG", value: 85 },
      { name: "DỮ LIỆU", value: 90 },
      { name: "TRÍ TUỆ NHÂN TẠO", value: 80 },
      { name: "LÀM VIỆC NHÓM", value: 95 },
      { name: "NỘI DUNG SỐ", value: 88 },
      { name: "AN TOÀN MẠNG", value: 92 }
    ],
    
    // Tâm đắc và Thách thức
    highlights: "Điểm tôi tâm đắc nhất là việc số hóa thành công lộ trình rèn luyện cá nhân thành một giao diện phi thuyền không gian mang đậm tính tương tác và tương phản sắc nét. Việc gộp 6 bài tập thành lưới lục giác Click-to-Open giúp tối giản hóa bố cục, tạo sự thân thiện lớn cho người chấm bài.",
    challenges: "Thách thức lớn nhất là việc tối ưu hóa hiệu năng render 10.000 điểm tinh tú của Three.js kết hợp với các hiệu ứng cuộn trang GSAP, đảm bảo ứng dụng vận hành mượt mà ở tần số quét cao mà không gây giật lag phần cứng."
  }
};
