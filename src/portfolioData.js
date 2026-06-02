/**
 * FILE CẤU TRÚC DỮ LIỆU PORTFOLIO CÁ NHÂN
 * 
 * HƯỚNG DẪN TỰ ĐIỀN THÔNG TIN:
 * - Bạn chỉ cần chỉnh sửa các nội dung nằm trong dấu nháy kép "" hoặc nháy đơn ''.
 * - Giao diện trang web sẽ tự động lấy dữ liệu từ file này để hiển thị lên màn hình.
 * - Đối với các liên kết (file PDF, hình ảnh, video), hãy đưa file vào thư mục `public/` 
 *   hoặc sử dụng các đường link online rồi điền đường dẫn vào phần `url`.
 */

export const portfolioData = {
  // ==========================================
  // PHẦN 1: GIỚI THIỆU BẢN THÂN & ĐỊNH HƯỚNG
  // ==========================================
  personalInfo: {
    fullName: "Nguyễn Kim Lê Long", // Ví dụ: "Nguyễn Văn A"
    title: ["Lớp K70I-CS2", "Ngành Khoa học máy tính", "Trường Đại học Công nghệ - Đại học Quốc gia Hà Nội"], // Danh sách thẻ trường lớp (không chứa dấu phẩy)
    avatar: "", // Bạn có thể đặt link ảnh online hoặc để trống để dùng ảnh mặc định cực đẹp của hệ thống
    
    // Giới thiệu ngắn gọn về bản thân
    aboutMe: "Hãy điền một đoạn giới thiệu ngắn gọn, súc tích về bản thân của bạn vào đây. Ví dụ: Sở thích, đam mê và những gì bạn đang theo đuổi trong cuộc sống công nghệ số...",
    
    // Mục tiêu học tập & định hướng phát triển bản thân
    learningGoals: [
      "Mục tiêu 1: [Hãy tự điền mục tiêu học tập ngắn hạn của bạn vào đây]",
      "Mục tiêu 2: [Hãy tự điền định hướng phát triển dài hạn hoặc công việc mong muốn]",
      "Mục tiêu 3: [Ví dụ: Rèn luyện kỹ năng làm việc nhóm, tư duy logic và giải quyết vấn đề thực tế]"
    ],
    
    // Mục tiêu của Portfolio này
    portfolioPurpose: "Mục tiêu chính của trang Portfolio này là để lưu trữ và trình bày những sản phẩm thực tế, kết quả học tập trong suốt quá trình học. Đồng thời thể hiện khả năng ứng dụng công nghệ, sáng tạo nội dung và tự đánh giá năng lực bản thân qua từng bài học."
  },

  // ==========================================
  // PHẦN 2: TẬP HỢP 6 BÀI TẬP ĐÃ HOÀN THÀNH
  // ==========================================
  exercises: [
    {
      id: 1,
      tag: "Bài tập 1 - Bài 1",
      title: "Máy tính và các thiết bị ngoại vi",
      goal: "[Hãy điền mục tiêu của bài tập này vào đây. Ví dụ: Hiểu rõ nguyên lý hoạt động của CPU, RAM, ổ cứng và cách kết nối các thiết bị ngoại vi để tối ưu hóa công việc thiết kế...]",
      process: "[Tóm tắt quá trình thực hiện bài tập này. Ví dụ: Nghiên cứu tài liệu phần cứng máy tính, thực hành tháo lắp hoặc lập danh sách cấu hình máy tính tối ưu phù hợp với ngân sách và viết báo cáo chi tiết...]",
      product: {
        type: "pdf", // Định dạng file: 'pdf', 'image', 'video' hoặc 'link'
        url: "#",    // Đường dẫn tới file (ví dụ: '/assets/bai1.pdf' hoặc link Drive)
        label: "Xem báo cáo PDF bài tập 1"
      }
    },
    {
      id: 2,
      tag: "Bài tập 2 - Bài 2",
      title: "Khai thác dữ liệu và thông tin",
      goal: "[Hãy điền mục tiêu của bài tập này vào đây. Ví dụ: Học cách sử dụng các công cụ tìm kiếm nâng cao, bộ lọc thông tin và phân tích dữ liệu cơ bản phục vụ học tập...]",
      process: "[Tóm tắt quá trình thực hiện bài tập này. Ví dụ: Thu thập bộ dữ liệu từ internet, làm sạch dữ liệu thô bằng các công cụ bảng tính, và phân tích các xu hướng nổi bật dựa trên biểu đồ trực quan...]",
      product: {
        type: "image", // Định dạng file: 'pdf', 'image', 'video' hoặc 'link'
        url: "#",      // Đường dẫn tới hình ảnh sản phẩm (ví dụ: '/assets/bai2.png')
        label: "Xem hình ảnh phân tích dữ liệu"
      }
    },
    {
      id: 3,
      tag: "Bài tập 2 - Bài 3",
      title: "Tổng quan về trí tuệ nhân tạo",
      goal: "[Hãy điền mục tiêu của bài tập này vào đây. Ví dụ: Tìm hiểu lịch sử phát triển, các ứng dụng thực tế của AI (ChatGPT, Midjourney...) và cách viết prompt tối ưu...]",
      process: "[Tóm tắt quá trình thực hiện bài tập này. Ví dụ: Thực hành viết câu lệnh (prompt engineering) để làm việc với AI, so sánh kết quả giữa các mô hình ngôn ngữ lớn khác nhau và đánh giá tiềm năng...]",
      product: {
        type: "link", // Định dạng file: 'pdf', 'image', 'video' hoặc 'link'
        url: "#",     // Đường dẫn liên kết bên ngoài
        label: "Truy cập trang ứng dụng AI"
      }
    },
    {
      id: 4,
      tag: "Bài tập 3 - Bài 4",
      title: "Giao tiếp và hợp tác trong môi trường số",
      goal: "[Hãy điền mục tiêu của bài tập này vào đây. Ví dụ: Nâng cao kỹ năng làm việc nhóm từ xa bằng các công cụ số như Slack, Trello, Google Workspace...]",
      process: "[Tóm tắt quá trình thực hiện bài tập này. Ví dụ: Cùng nhóm lên kế hoạch dự án trên Trello, phân công công việc, tổ chức họp trực tuyến và hoàn thành slide thuyết trình chung...]",
      product: {
        type: "video", // Định dạng file: 'pdf', 'image', 'video' hoặc 'link'
        url: "#",      // Đường dẫn video sản phẩm (ví dụ link YouTube hoặc file MP4)
        label: "Xem video thuyết trình nhóm"
      }
    },
    {
      id: 5,
      tag: "Bài tập 2 - Bài 5",
      title: "Sáng tạo nội dung số",
      goal: "[Hãy điền mục tiêu của bài tập này vào đây. Ví dụ: Thiết kế ấn phẩm truyền thông, biên tập video ngắn hoặc làm infographic thu hút người xem...]",
      process: "[Tóm tắt quá trình thực hiện bài tập này. Ví dụ: Sử dụng công cụ thiết kế chuyên nghiệp Canva/Photoshop để lên layout màu sắc, sắp xếp bố cục nội dung khoa học và xuất bản sản phẩm...]",
      product: {
        type: "image", // Định dạng file: 'pdf', 'image', 'video' hoặc 'link'
        url: "#",      // Đường dẫn hình ảnh thiết kế
        label: "Xem Infographic Sáng tạo nội dung"
      }
    },
    {
      id: 6,
      tag: "Bài tập 4 - Bài 6",
      title: "An toàn và liêm chính học thuật trong môi trường số",
      goal: "[Hãy điền mục tiêu của bài tập này vào đây. Ví dụ: Hiểu rõ về bản quyền số, luật sở hữu trí tuệ, cách trích dẫn nguồn uy tín khoa học và phòng tránh đạo văn...]",
      process: "[Tóm tắt quá trình thực hiện bài tập này. Ví dụ: Nghiên cứu các quy chuẩn trích dẫn APA/IEEE, viết bài phân tích tình huống đạo văn giả định và thực hiện trích dẫn nguồn chính xác...]",
      product: {
        type: "pdf", // Định dạng file: 'pdf', 'image', 'video' hoặc 'link'
        url: "#",    // Đường dẫn file PDF
        label: "Xem tiểu luận Liêm chính học thuật"
      }
    }
  ],

  // ==========================================
  // PHẦN 3: TỔNG KẾT DỰ ÁN
  // ==========================================
  reflection: {
    // 3.1 Trải nghiệm và cảm nhận cá nhân về quá trình làm Portfolio
    experience: "Hãy viết những trải nghiệm cá nhân của bạn ở đây. Việc tự xây dựng trang portfolio này mang lại cho bạn những cảm xúc gì? Sự thú vị khi kết hợp công nghệ và nội dung học tập, niềm tự hào khi nhìn lại những gì đã hoàn thành...",
    
    // 3.2 Những kiến thức và kỹ năng quan trọng nhất đã học được
    skillsLearned: [
      "Kỹ năng công nghệ số: Sử dụng thành thạo các công cụ AI, phần mềm thiết kế và làm việc trực tuyến.",
      "Kỹ năng chuyên môn: Hiểu sâu hơn về máy tính, kỹ thuật dữ liệu, đạo đức và an toàn trên không gian mạng.",
      "Kỹ năng mềm: Quản lý thời gian, tư duy phản biện, lập kế hoạch cá nhân và tự học hỏi liên tục."
    ],
    
    // 3.3 Những điểm tâm đắc nhất và thách thức gặp phải khi xây dựng Portfolio
    highlightsAndChallenges: {
      highlights: "Điểm tâm đắc nhất là việc tự tay đóng gói và số hóa toàn bộ quá trình học tập của mình thành một sản phẩm sống động, có tính tương tác cao và mang đậm cá tính cá nhân.",
      challenges: "Thách thức lớn nhất là việc chọn lọc nội dung tóm tắt sao cho thật súc tích, rõ ràng, thiết kế giao diện phù hợp cho người chấm dễ dàng theo dõi chỉ sau vài giây và đảm bảo trang web chạy mượt mà trên mọi thiết bị."
    }
  }
};
