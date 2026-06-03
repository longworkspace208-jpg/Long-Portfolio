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

export const portfolioData = {
  // ==========================================
  // PHẦN 1: THÔNG TIN PHI CÔNG & MỤC TIÊU DỰ ÁN
  // ==========================================
  pilotInfo: {
    fullName: "NGUYEN KIM LE LONG",
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
        url: pdf1,
        label: "Bài tập tuần 1"
      }
    },
    {
      id: 2,
      code: "[BT-02]",
      title: "Khai thác dữ liệu và thông tin",
      goal: "Phát triển kỹ năng tìm kiếm thông tin nâng cao, sử dụng các toán tử lọc dữ liệu phức tạp và khai thác tài nguyên số từ internet một cách khoa học, phục vụ tối đa cho hoạt động học tập và nghiên cứu học thuật.",
      process: "Thực hành thu thập dữ liệu thô từ các nguồn thống kê số uy tín trên internet, sử dụng công cụ bảng tính để lọc, phân loại, làm sạch dữ liệu và tạo lập biểu đồ trực quan thể hiện rõ nét các xu hướng công nghệ nổi bật trong thập kỷ qua.",
      product: {
        type: "pdf",
        url: pdf2,
        label: "Bài tập tuần 2"
      }
    },
    {
      id: 3,
      code: "[BT-03]",
      title: "Tổng quan về trí tuệ nhân tạo",
      goal: "Nghiên cứu các khái niệm nền tảng về AI, Học máy (Machine Learning), Học sâu (Deep Learning), và thực hành phương pháp thiết kế câu lệnh (Prompt Engineering) để tương tác hiệu quả, an toàn và có đạo đức với các mô hình ngôn ngữ lớn (LLM).",
      process: "Thực hành thiết kế và kiểm thử hàng loạt câu lệnh điều phối trợ lý ảo ChatGPT/Claude phục vụ giải bài tập lập trình, so sánh hiệu năng giải quyết vấn đề giữa các mô hình khác nhau và soạn thảo cẩm nang ứng dụng AI hỗ trợ học tập.",
      product: {
        type: "pdf",
        url: pdf3,
        label: "Bài tập tuần 3"
      }
    },
    {
      id: 4,
      code: "[BT-04]",
      title: "Giao tiếp hợp tác trong môi trường số",
      goal: "Tối ưu hóa kỹ năng làm việc nhóm trực tuyến thông qua việc kết hợp các công cụ số hiện đại như Trello, Slack, và Google Workspace để nâng cao hiệu suất cộng tác đồng bộ từ xa.",
      process: "Phân chia vai trò cụ thể trong nhóm, cùng xây dựng kế hoạch dự án số hóa tài liệu học tập trên bảng Kanban Trello, tổ chức họp trực tuyến ghi lại tiến trình, và xuất bản slide báo cáo đồng bộ hóa hoàn toàn trên đám mây đám mây.",
      product: {
        type: "pdf",
        url: pdf4,
        label: "Bài tập tuần 4"
      }
    },
    {
      id: 5,
      code: "[BT-05]",
      title: "Sáng tạo nội dung số",
      goal: "Nâng cao năng lực truyền thông thị giác và tư duy thiết kế, biên tập và xuất bản các ấn phẩm đồ họa số truyền tải thông điệp kiến thức một cách khoa học, cuốn hút và có tính thẩm mỹ cao.",
      process: "Lên ý tưởng kịch bản nội dung về an toàn thông tin mạng, sử dụng công cụ thiết kế chuyên nghiệp Canva/Photoshop để phối trộn màu sắc neon, sắp xếp bố cục đồ họa khoa học và trực quan hóa các số liệu phòng vệ mã độc phức tạp.",
      product: {
        type: "pdf",
        url: pdf5,
        label: "Bài tập tuần 5"
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
        url: pdf6,
        label: "Bài tập tuần 6"
      }
    }
  ],

  // ==========================================
  // PHẦN 3: TỔNG KẾT & CẢM NHẬN (TRANSMISSION COMPLETE)
  // ==========================================
  reflection: {
    // 1. Tổng quan hành trình 6 bài học
    overview: "Điểm lại các kiến thức đã qua, mọi thứ được xây dựng theo một lộ trình logic: từ việc nắm vững cách tổ chức dữ liệu cơ bản, sử dụng các công cụ làm việc nhóm trực tuyến hiệu quả, cho đến việc ứng dụng đa dạng các công cụ AI tạo sinh để nghiên cứu học thuật và thiết kế ấn phẩm đồ họa chuyên nghiệp. Đỉnh cao của quá trình này là việc thấu hiểu cách giao tiếp với AI qua các kỹ thuật Prompt chuyên sâu và áp dụng nó vào việc giải quyết những bài toán kỹ thuật phức tạp, định hình các nguyên tắc đạo đức khi sử dụng công nghệ. Tất cả không còn là những mảnh ghép rời rạc mà đã được xâu chuỗi lại, trở thành nền tảng vững chắc để tôi kiến tạo nên dự án portfolio của riêng mình.",

    // 2. Trải nghiệm và cảm nhận
    experience: "Quá trình thực hiện dự án portfolio mang lại cho tôi những cảm xúc rất đặc biệt. Nó giống như việc tự tay \"refactoring\" lại chính khối lượng kiến thức khổng lồ mà mình đã tiếp thu. Thay vì chỉ gom nhặt các mảnh ghép một cách máy móc, tôi phải ngồi lại, đánh giá xem đâu là những giá trị cốt lõi nhất để trình bày. Cảm giác nhìn thấy những kỹ năng mình rèn luyện mỗi ngày — từ tư duy tổ chức mã nguồn rõ ràng, tránh tạo ra các đoạn \"spaghetti code\", đến khả năng tối ưu hóa thuật toán thi đấu, tinh chỉnh độ phức tạp từ O(N³) xuống O(N log N) — được sắp xếp gọn gàng và có tính kể chuyện trong một bản portfolio thực sự là một trải nghiệm trọn vẹn và đáng tự hào.",

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
      },
      {
        title: "Đóng gói và hoàn thiện nội dung",
        desc: "Có những lúc việc hệ thống hóa tất cả các dự án thành một định dạng chuẩn chỉnh giống như việc nỗ lực chuyển nguyên văn các bài toán phức tạp sang định dạng markdown. Nó đòi hỏi sự tỉ mỉ, kiên nhẫn sửa từng lỗi nhỏ nhất để đảm bảo kết quả đầu ra thực sự trơn tru và chuyên nghiệp."
      }
    ],

    // 5. Lời kết
    closing: "Dự án portfolio không chỉ là một bảng tóm tắt thành tích, mà là minh chứng rõ nét cho sự trưởng thành về năng lực thực thi và đạo đức nghề nghiệp. Những bài học về quản lý công việc, tư duy giải quyết vấn đề và cách ứng xử trách nhiệm với AI sẽ là hành trang vô giá, giúp tôi bước đi vững chắc hơn trên con đường phát triển chuyên môn sắp tới."
  }
};
