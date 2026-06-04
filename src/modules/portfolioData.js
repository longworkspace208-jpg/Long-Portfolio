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
      code: "[BT-01]",
      title: "Thao tác cơ bản với tệp tin và thư mục",
      goal: "Mục tiêu cốt lõi của bài học là giúp sinh viên rèn luyện và sử dụng thành thạo các kỹ năng quản lý tệp tin và thư mục cơ bản trên hệ điều hành Windows (có thể điều chỉnh cho macOS/Linux). Các thao tác này bao gồm: tạo mới, đổi tên, sao chép, di chuyển và xóa tệp/thư mục.",
      product: {
        type: "pdf", // 'pdf', 'image', 'video', 'link'
        url: pdf1,
        label: "Bài tập tuần 1"
      }
    },
    {
      id: 2,
      code: "[BT-02]",
      title: "Tìm kiếm và đánh giá thông tin học thuật",
      goal: "Mục tiêu cốt lõi là phát triển kỹ năng tìm kiếm, đánh giá và chắt lọc thông tin học thuật từ các nguồn đáng tin cậy. Qua đó, sinh viên được rèn luyện tư duy phản biện, xây dựng nền tảng lý thuyết vững chắc để tự tin ứng dụng vào các nghiên cứu chuyên sâu hoặc giải quyết những bài toán thực tế trong chuyên ngành.",
      product: {
        type: "pdf",
        url: pdf2,
        label: "Bài tập tuần 2"
      }
    },
    {
      id: 3,
      code: "[BT-03]",
      title: "Viết Prompt hiệu quả cho các tác vụ học tập",
      goal: "Mục tiêu cốt lõi là phát triển kỹ năng viết prompt (câu lệnh) hiệu quả để tận dụng tối đa khả năng của các mô hình ngôn ngữ lớn. Qua đó, giúp sinh viên làm chủ công nghệ AI, biến nó thành công cụ đắc lực để tối ưu hóa quá trình tổng hợp kiến thức, tự học và giải quyết các tác vụ phức tạp một cách chủ động.",
      product: {
        type: "pdf",
        url: pdf3,
        label: "Bài tập tuần 3"
      }
    },
    {
      id: 4,
      code: "[BT-04]",
      title: "Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
      goal: "Mục tiêu cốt lõi là rèn luyện và làm chủ các công cụ hợp tác trực tuyến (quản lý dự án, soạn thảo, lưu trữ và giao tiếp) để tối ưu hóa hiệu suất làm việc cá nhân trong môi trường làm việc nhóm. Qua đó, sinh viên hình thành kỹ năng tự quản lý tiến độ nhiệm vụ, tổ chức tài nguyên khoa học và duy trì tương tác chủ động, hiệu quả với các thành viên khác.",
      product: {
        type: "pdf",
        url: pdf4,
        label: "Bài tập tuần 4"
      }
    },
    {
      id: 5,
      code: "[BT-05]",
      title: "Sử dụng AI tạo sinh để hỗ trợ tạo nội dung",
      goal: "Mục tiêu cốt lõi là thành thạo việc sử dụng các công cụ AI tạo sinh để hỗ trợ quá trình sáng tạo nội dung số. Qua đó, sinh viên biết cách kết hợp linh hoạt và hiệu quả nhiều loại công cụ AI khác nhau (tạo văn bản, hình ảnh, thiết kế), hòa quyện giữa đầu ra của AI với dấu ấn sáng tạo cá nhân, đồng thời phát triển tư duy phản biện để phân tích sâu sắc vai trò cũng như các vấn đề đạo đức khi ứng dụng công nghệ này vào thực tiễn.",
      product: {
        type: "pdf",
        url: pdf5,
        label: "Bài tập tuần 5"
      }
    },
    {
      id: 6,
      code: "[BT-06]",
      title: "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
      goal: "Mục tiêu cốt lõi là trang bị cho sinh viên kiến thức và kỹ năng để ứng dụng AI vào các tác vụ học tập một cách hiệu quả, minh bạch và chuyên nghiệp. Qua đó, sinh viên rèn luyện tư duy phản biện để phân tích các vấn đề đạo đức, nhận diện rõ ranh giới giữa hỗ trợ hợp lý và gian lận học thuật, từ đó thiết lập và tuân thủ các nguyên tắc cốt lõi nhằm sử dụng AI có trách nhiệm trong học thuật.",
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
