/**
 * FILE DỮ LIỆU PORTFOLIO VIỆT HÓA - COSMIC PROJECT
 * 
 * Hướng dẫn điền:
 * - Bạn chỉ cần chỉnh sửa các nội dung văn bản trong dấu nháy kép `""` hoặc `''`.
 * - Giao diện HUD và Cockpit của trang web sẽ tự động nạp dữ liệu từ tệp này.
 */

import pdf1 from '../assets/BaiTapTuan1.pdf';
import pdf2 from '../assets/BaiTapTuan2.pdf';
import pdf3 from '../assets/baitaptuan3.pdf';
import pdf4 from '../assets/baitaptuan4.pdf';
import pdf5 from '../assets/BaiTapTuan5.pdf';
import pdf6 from '../assets/BaiTapTuan6.pdf';
import avatarImg from '../assets/avatar.jpg';

export const portfolioData = {
  // ==========================================
  // PHẦN 1: THÔNG TIN PHI CÔNG & MỤC TIÊU DỰ ÁN
  // ==========================================
  pilotInfo: {
    fullName: "NGUYEN KIM LE LONG",
    class: "Class K70I-CS2",
    major: "Computer Science",
    school: "UET - VNU",
    avatar: avatarImg, // Bạn có thể đặt link ảnh phi công của bạn hoặc để trống dùng mặc định

    // Giới thiệu bản thân (Pilot Profile)
    aboutMe: "Tôi là Nguyễn Kim Lê Long, sinh viên chuyên ngành Khoa học Máy tính tại Trường Đại học Công nghệ - ĐHQGHN. Với ngọn lửa đam mê công nghệ cháy bỏng và khát khao chinh phục các đỉnh cao tri thức mới, tôi luôn nỗ lực nghiên cứu các giải pháp lập trình và hệ thống thông tin thông minh để giải quyết các vấn đề thực tiễn.",

    // Sở thích cá nhân (Hobbies)
    hobbies: [
      { name: "Game", icon: "🎮" },
      { name: "Code", icon: "💻" },
      { name: "Ăn", icon: "🍕" },
      { name: "Ngủ", icon: "💤" }
    ],

    // Định hướng học tập (Flight Vector)
    learningGoals: [
      "Chinh phục các kiến thức chuyên sâu về Khoa học Máy tính bao gồm cấu trúc dữ liệu nâng cao, tối ưu giải thuật và kiến trúc hệ thống phần mềm.",
      "Nghiên cứu ứng dụng thực tiễn của Trí tuệ nhân tạo (AI) và Học máy (Machine Learning) để xây dựng các công cụ phân tích tự động thông minh.",
      "Rèn luyện kỹ năng tư duy phản biện, giải quyết vấn đề và giao tiếp cộng tác đa nền tảng trong môi trường công nghệ số toàn cầu."
    ],

    // Ý nghĩa Portfolio (Mission Briefing)
    portfolioPurpose: "Không chỉ đơn thuần là một trang web lưu trữ học thuật, bản portfolio vũ trụ này là cuốn nhật ký hành trình ghi lại từng cột mốc tăng tốc của tôi. Đây là nơi hội tụ các mảnh ghép tri thức từ tư duy cấu trúc logic, kỹ năng lập trình tối ưu, cho đến nghệ thuật tương tác và hợp tác công nghệ số. Mỗi bài tập tại đây là một tọa độ bay đã được chinh phục, phản ánh sự trưởng thành trong tư duy kỹ thuật, sự chỉn chu trong phát triển sản phẩm và cam kết tuyệt đối với đạo đức, liêm chính học thuật trong suốt chặng đường khám phá tri thức rộng lớn."
  },
  // ==========================================
  // PHẦN 2: KHO LƯU TRỮ BÀI TẬP (MISSION ARCHIVE)
  // ==========================================
  exercises: [
    {
      id: 1,
      code: "[BÀI 01]",
      title: "Bài 1 - Bài tập 1 của mục 1.4: Thao tác cơ bản với tệp tin và thư mục",
      goal: "Trình bày cấu trúc thư mục tối ưu và quy tắc đặt tên tệp đã thiết lập, kèm ảnh chụp minh họa.",
      steps: [
        "Khảo sát nhu cầu và phân loại dữ liệu cá nhân theo các nhóm chính (Học tập, Công việc, Dự án, Lưu trữ).",
        "Xây dựng cấu trúc thư mục phân tầng khoa học (ví dụ: áp dụng quy chuẩn P.A.R.A hoặc phân cấp theo năm/học kỳ).",
        "Thực hành thành thạo các thao tác quản lý dữ liệu cốt lõi bao gồm tạo mới, đặt tên thống nhất (Naming convention), sao chép và di chuyển tệp tin.",
        "Thiết lập quy trình kiểm soát vòng đời tệp tin: Phân loại dữ liệu để xóa tạm thời (Recycle Bin) và dữ liệu nhạy cảm cần xóa vĩnh viễn (Permanent Delete) để bảo mật thông tin."
      ],
      product: {
        type: "pdf",
        url: pdf1,
        label: "Quản trị Không gian số"
      }
    },
    {
      id: 2,
      code: "[BÀI 02]",
      title: "Bài 2 - Bài tập 2 của mục 2.4: Tìm kiếm và đánh giá thông tin học thuật",
      goal: "Trình bày kết quả tìm kiếm học thuật bằng các toán tử nâng cao và bảng đánh giá nguồn tin đã thực hiện.",
      steps: [
        "Xác định từ khóa cốt lõi và tìm kiếm tài liệu từ các cơ sở dữ liệu học thuật uy tín (Google Scholar, IEEE Xplore, ACM Digital Library).",
        "Thu thập và lập danh mục gồm 12 nguồn tài liệu học thuật đa dạng như bài báo khoa học Q1/Q2, sách chuyên khảo và báo cáo công nghệ.",
        "Thẩm định chi tiết độ tin cậy của từng nguồn tài liệu dựa trên chỉ số trích dẫn (h-index, IF), uy tín của tác giả và nhà xuất bản.",
        "Tổng hợp kết quả nghiên cứu và biên soạn báo cáo phân tích học thuật sử dụng chuẩn trích dẫn Harvard để đảm bảo tính liêm chính khoa học."
      ],
      product: {
        type: "pdf",
        url: pdf2,
        label: "Nghiên cứu học thuật"
      }
    },
    {
      id: 3,
      code: "[BÀI 03]",
      title: "Bài 3 - Bài tập 2 của mục 3.4: Viết Prompt hiệu quả cho các tác vụ học tập",
      goal: "Trình bày sự so sánh giữa Prompt ban đầu và Prompt cải tiến cùng kết quả đầu ra từ AI.",
      steps: [
        "Phân tích yêu cầu của tác vụ học tập cụ thể để định hình cấu trúc câu lệnh cần thiết.",
        "Thiết kế hệ thống câu lệnh phân tầng theo 3 cấp độ: Cơ bản (nêu yêu cầu thô), Cải tiến (bổ sung ngữ cảnh và định dạng), Nâng cao (áp dụng kỹ thuật nhập vai chuyên gia và Few-shot prompting).",
        "Chạy thử nghiệm các cấp độ câu lệnh trên mô hình ngôn ngữ lớn và ghi nhận kết quả đầu ra tương ứng.",
        "Đối chiếu, đánh giá chất lượng phản hồi giữa các cấp độ câu lệnh để đúc kết các nguyên tắc vàng tối ưu hóa Prompt."
      ],
      product: {
        type: "pdf",
        url: pdf3,
        label: "Kỹ thuật Prompt"
      }
    },
    {
      id: 4,
      code: "[BÀI 04]",
      title: "Bài 4 - Bài tập 3 của mục 4.4: Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
      goal: "Trình bày minh chứng về việc sử dụng công cụ quản lý dự án nhóm và cách thức phối hợp trực tuyến.",
      steps: [
        "Khởi tạo dự án trên ClickUp, phân rã công việc thành các task Backend chi tiết, gán người thực hiện và thiết lập deadline rõ ràng.",
        "Biên soạn tài liệu kiến trúc kỹ thuật đồng thời trên Google Docs, cho phép cả nhóm thảo luận và đóng góp ý kiến thời gian thực.",
        "Quy chuẩn hóa cấu trúc thư mục chia sẻ trên Google Drive để lưu trữ và quản lý tập trung toàn bộ tài nguyên dự án.",
        "Thiết lập kênh Discord chung làm không gian giao tiếp chính, tích hợp thông báo tự động và tổ chức họp định kỳ để giải quyết các vấn đề nhanh chóng."
      ],
      product: {
        type: "pdf",
        url: pdf4,
        label: "Công cụ cộng tác"
      }
    },
    {
      id: 5,
      code: "[BÀI 05]",
      title: "Bài 5 - Bài tập 2 của mục 5.4: Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
      goal: "Trưng bày sản phẩm nội dung số hoàn thiện (hình ảnh, video hoặc bài viết) được hỗ trợ bởi AI.",
      steps: [
        "Sử dụng mô hình AI tạo văn bản để lên ý tưởng truyền thông và viết kịch bản nội dung chi tiết, phân chia bố cục logic.",
        "Áp dụng AI tạo ảnh (như Midjourney/DALL-E) để sinh các hình ảnh minh họa độc đáo theo phong cách đồng nhất với kịch bản.",
        "Thực hiện hậu kỳ thủ công để sửa các lỗi đồ họa cơ bản của AI (lỗi chi tiết thừa, méo góc, phối màu lỗi).",
        "Đưa toàn bộ tài nguyên vào nền tảng Canva, tái cấu trúc bố cục, chọn hệ màu, font chữ và hoàn thiện sản phẩm Infographic đạt tiêu chuẩn thương mại."
      ],
      product: {
        type: "pdf",
        url: pdf5,
        label: "AI Tạo sinh"
      }
    },
    {
      id: 6,
      code: "[BÀI 06]",
      title: "Bài 6 - Bài tập 4 của mục 6.4: Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
      goal: "Trình bày bộ nguyên tắc cá nhân về sử dụng AI có trách nhiệm dựa trên các nghiên cứu đã thực hiện.",
      steps: [
        "Nghiên cứu các quy định hiện hành về liêm chính học thuật và đạo đức công nghệ trong kỷ nguyên AI tạo sinh.",
        "Sử dụng công cụ AI để hỗ trợ tổng hợp lý thuyết nền tảng và đề xuất thuật toán sơ bộ.",
        "Tự tay rà soát, viết lại và tối ưu hóa sâu thuật toán mã nguồn để đảm bảo hiệu năng và kiểm soát tuyệt đối luồng chạy.",
        "Thiết lập 5 nguyên tắc đạo đức cá nhân cụ thể để dẫn dắt việc ứng dụng công nghệ AI một cách minh bạch, có trách nhiệm và tôn trọng bản quyền."
      ],
      product: {
        type: "pdf",
        url: pdf6,
        label: "Đạo đức AI"
      }
    }
  ],

  // ==========================================
  // PHẦN 3: TỔNG KẾT & CẢM NHẬN (TRANSMISSION COMPLETE)
  // ==========================================
  reflection: {
    // 1. Tổng quan hành trình 6 bài học
    overview: "Nhìn lại hành trình 6 bài học, tôi nhận ra một sự trưởng thành vượt bậc trong tư duy và kỹ năng của bản thân: từ việc làm quen với quản lý tệp tin và dữ liệu cơ bản, phát triển tư duy phản biện khi đánh giá học thuật, đến việc thuần thục kỹ năng giao tiếp công nghệ qua Prompt Engineering và sử dụng AI tạo sinh có trách nhiệm. Sự trưởng thành này chuyển đổi tôi từ một người dùng thụ động sang một người làm chủ công nghệ và biết cách điều phối công việc nhóm hiệu quả. Trong tương lai, những kỹ năng này sẽ là nền tảng cốt lõi giúp tôi quản trị các dự án phần mềm chuyên nghiệp, thực hiện các nghiên cứu Khoa học Máy tính chuyên sâu và kiến tạo các giải pháp công nghệ an toàn, minh bạch, mang lại giá trị thực tiễn cao cho xã hội.",

    // 2. Trải nghiệm và cảm nhận
    experience: "Quá trình thực hiện dự án portfolio mang lại cho tôi những cảm xúc rất đặc biệt. Nó giống như việc tự tay \"refactoring\" lại chính khối lượng kiến thức khổng lồ mà mình đã tiếp thu. Thay vì chỉ gom nhặt các mảnh ghép một cách máy móc, tôi phải ngồi lại, đánh giá xem đâu là những giá trị cốt lõi nhất để trình bày. Cảm giác nhìn thấy những kỹ năng mình rèn luyện mỗi ngày. Từ tư duy tổ chức mã nguồn rõ ràng, tránh tạo ra các đoạn \"spaghetti code\", đến khả năng tối ưu hóa thuật toán thi đấu, được sắp xếp gọn gàng và có tính kể chuyện trong một bản portfolio thực sự là một trải nghiệm trọn vẹn và đáng tự hào.",

    // 3. Điểm tâm đắc nhất (danh sách)
    highlights: [
      {
        title: "Làm chủ công cụ, không phụ thuộc",
        desc: "Tôi không dùng AI để viết thay mình một cách lười biếng. Thay vào đó, tôi đóng vai trò là \"tổng đạo diễn\", sử dụng AI để mở rộng góc nhìn và rà soát lỗi, trong khi bản thân vẫn giữ quyền quyết định cuối cùng đối với mọi phân tích chuyên sâu và cấu trúc logic."
      },
      {
        title: "Giải quyết vấn đề thực tiễn",
        desc: "Việc tự tay đưa các ví dụ về cấu trúc phần mềm, phân tích nguyên nhân và cách khắc phục nợ kỹ thuật (technical debt) vào portfolio giúp tôi khẳng định được chất riêng và tư duy của một người coi trọng chất lượng hệ thống thay vì chạy theo số lượng."
      }
    ],

    // 4. Thách thức đã gặp phải (danh sách)
    challenges: [
      {
        title: "Sắp xếp luồng thông tin và tính đồng bộ",
        desc: "Thách thức lớn là làm sao để cô đọng một lượng lớn kiến thức thành một luồng câu chuyện mạch lạc mà không bị lan man hay lộn xộn. Việc phối hợp dữ liệu từ nhiều nguồn, nhiều công cụ đôi khi khiến cấu trúc tổng thể dễ bị phân mảnh."
      },
      {
        title: "Kiểm soát tính chân thực của AI (Ảo giác AI)",
        desc: "Khi tận dụng AI để hỗ trợ tổng hợp thông tin, tôi nhiều lần phải đối mặt với tình trạng AI đưa ra các thông tin chung chung hoặc mã nguồn thiếu tính thực tế. Điều này buộc tôi phải mất nhiều thời gian hơn dự kiến để kiểm chứng độc lập (fact-checking) và tinh chỉnh lại bằng kiến thức của mình."
      }
    ],

    // 5. Lời kết — Final Transmission
    closing: "Portfolio này không phải là điểm đến — mà là bản ghi hành trình của một phi công đang học cách bay. Mỗi bài tập, mỗi quyết định đều khắc sâu vào tôi một bài học: rằng sự trưởng thành không nằm ở việc hoàn hảo ngay từ đầu, mà ở việc dám đối mặt với những thứ chưa hoàn hảo và kiên trì cải tiến. Hành trình vẫn đang tiếp diễn — và đây chỉ mới là chương mở đầu."
  }
};
