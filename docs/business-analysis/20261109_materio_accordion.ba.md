# Phân tích nghiệp vụ: Trang minh họa Accordion theo Materio
**Task ID:** 20261109_materio_accordion
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261109_materio_accordion.md
**Ngày lập:** 2026-11-09

## 1. Bối cảnh và mục tiêu nghiệp vụ
Người dùng yêu cầu mô phỏng trang Accordion của Materio để xem và thử các biến thể trong admin template hiện tại. Accordion là nhóm các mục có tiêu đề điều khiển việc hiện hoặc ẩn phần nội dung tương ứng.

Mẫu tham chiếu: https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/ui-accordion.html

Task brief ghi nhận bốn nhóm từ HTML mẫu, mỗi nhóm ba mục. Chưa có kiểm tra bản hiển thị trong trình duyệt cho task này; vì vậy các quan sát về cấu trúc và trạng thái ban đầu chưa phải kết luận về độ giống giao diện.

Mục tiêu là trang minh họa hoạt động độc lập, dễ đối chiếu với mẫu, sử dụng được bằng chuột, bàn phím và trên màn hình nhỏ. Không có giao dịch hay dữ liệu nghiệp vụ thực tế.

## 2. Phạm vi và ngoài phạm vi
### Trong phạm vi
| Nhóm | Nội dung cần thể hiện | Trạng thái ban đầu ghi nhận trong brief |
| --- | --- | --- |
| Accordion tiêu chuẩn | Tiêu đề, nội dung và chỉ báo đóng/mở theo mẫu | Mở mục 1 |
| Accordion không có mũi tên | Biến thể không hiển thị mũi tên theo mẫu | Mở mục 3 |
| Customized Accordion | Kiểu điều khiển tùy chỉnh theo mẫu | Mở mục 1 |
| Customized Accordion có biểu tượng | Kiểu điều khiển tùy chỉnh và biểu tượng đầu tiêu đề | Mở mục 3 |

Mỗi nhóm có ba mục. Bao gồm đóng/mở, chuyển giữa các mục cùng nhóm, độc lập giữa các nhóm, trạng thái truy cập được, chuyển động và responsive. Các trạng thái ban đầu trên phải được đối chiếu bản render trước khi hoàn thiện.

### Ngoài phạm vi
- Toàn bộ menu, thông báo, theme customizer hoặc các thành phần khác của demo Materio.
- Backend, API, đăng nhập, cơ sở dữ liệu và lưu trạng thái qua lần tải lại.
- Thay đổi nghiệp vụ nút, SweetAlert hoặc thiết kế lại các trang layout hiện có.
- Tạo mã nguồn, technical plan hay kiểm thử trong bước BA.

## 3. Đối tượng sử dụng (Actors)
| Đối tượng | Nhu cầu và quyền |
| --- | --- |
| Người xem trang minh họa | Xem các biến thể, mở/đóng nội dung và so sánh trạng thái. Không có yêu cầu tài khoản mới. |
| Người kiểm tra giao diện | Đối chiếu mẫu và xác minh tương tác, khả năng truy cập, responsive. Không cần phân quyền riêng. |

Không bổ sung quyền đọc/ghi dữ liệu hoặc điều kiện xác thực. Nội dung là ví dụ tĩnh.

## 4. Quy trình nghiệp vụ (Business Workflows)
### WF-01 — Mở trang
1. Người xem truy cập trang minh họa.
2. Trang hiển thị bốn nhóm với nhãn phân biệt và ba mục mỗi nhóm.
3. Nội dung mở ban đầu, chỉ báo và trạng thái được công nghệ hỗ trợ đọc phải thống nhất.

### WF-02 — Xem hoặc ẩn nội dung
1. Người xem kích hoạt tiêu đề một mục đang đóng bằng chuột hoặc bàn phím.
2. Mục đó mở; nếu có mục khác đang mở trong cùng nhóm thì mục cũ đóng.
3. Các nhóm còn lại giữ nguyên trạng thái.
4. Người xem kích hoạt lại tiêu đề đang mở để đóng mục đó; nhóm có thể không còn mục mở.

Hành vi đóng lại chính mục đang mở phải được kiểm tra với bản render theo yêu cầu của brief. Nếu mẫu mâu thuẫn với mô tả này, ghi nhận khác biệt để xử lý rõ ràng trước khi thay đổi hành vi, không tự thêm chế độ tương tác mới.

### WF-03 — Thao tác liên tiếp và bằng bàn phím
1. Người dùng bàn phím đưa focus (vị trí tương tác hiện tại) tới tiêu đề.
2. Dùng Enter hoặc Space để kích hoạt; focus vẫn có thể nhận biết và tiếp tục thao tác.
3. Nội dung đóng không để lại điều khiển ẩn trong thứ tự Tab.
4. Khi kích hoạt liên tiếp hoặc chuyển mục nhanh, giao diện phải kết thúc ở trạng thái nhất quán, không kẹt chiều cao hay hiển thị nội dung của mục đã đóng.

Nhánh thay thế: khi người dùng bật tùy chọn giảm chuyển động, thao tác vẫn cho kết quả đóng/mở rõ ràng, không phụ thuộc hiệu ứng chuyển động dài.

Nhánh lỗi tài nguyên: lỗi tải tài nguyên ảnh hưởng hiển thị hoặc tương tác phải được ghi nhận khi kiểm tra; không kết luận trang đạt nếu người dùng không mở/đóng được mục. Không có luồng thử lại API hoặc xử lý lỗi dữ liệu vì nằm ngoài phạm vi.

## 5. Quy tắc nghiệp vụ (Business Rules)
- **BR-01:** Bốn nhóm tạo thành một chức năng minh họa thống nhất; mỗi nhóm có ba tiêu đề và ba phần nội dung tương ứng.
- **BR-02:** Mỗi nhóm chỉ có tối đa một mục mở tại một thời điểm. Có thể đóng mục đang mở; không ràng buộc luôn phải có một mục mở.
- **BR-03:** Trạng thái của nhóm này không thay đổi trạng thái nhóm khác.
- **BR-04:** Tên mục, nội dung và chỉ báo phải tương ứng; trạng thái mở/đóng mà công nghệ hỗ trợ nhận biết phải đúng với nội dung đang hiện/ẩn.
- **BR-05:** Chuột và bàn phím tạo cùng kết quả nghiệp vụ. Tiêu đề có focus nhìn thấy; nội dung ẩn không thể gây truy cập nhầm bằng Tab.
- **BR-06:** Cách trình bày dựa trên mẫu đã kiểm tra; không suy diễn thêm biến thể hoặc sao chép toàn bộ trang quản trị.
- **BR-07:** Biểu tượng dùng Font Awesome local theo giả định từ sở thích đã thể hiện của người dùng; không thêm SVG. Glyph tương đương được chọn ở bước thiết kế sau khi đối chiếu mẫu.
- **BR-08:** Nội dung dài xuống dòng tự nhiên; không che nội dung hoặc tạo cuộn ngang ngoài ý muốn trên màn hình nhỏ.
- **BR-09:** Không yêu cầu lưu lựa chọn qua tải lại. Không thay đổi hoặc ghi đè các chỉnh sửa ngoài task.

## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
| ID | Given / When | Then — Kết quả cần kiểm chứng |
| --- | --- | --- |
| AC-01 | Mở trang minh họa trực tiếp | Có bốn nhóm phân biệt rõ, mỗi nhóm đúng ba mục. |
| AC-02 | Đối chiếu với bản render Materio | Phân biệt được tiêu chuẩn, không mũi tên, điều khiển tùy chỉnh và nhóm có biểu tượng; bề mặt, khoảng cách, màu trạng thái và chỉ báo bám theo mẫu; khác biệt đáng kể được báo cáo. |
| AC-03 | Tải trang lần đầu | Nhóm tiêu chuẩn và customized mở mục 1; hai nhóm còn lại mở mục 3 theo quan sát trong brief, sau khi xác minh với mẫu. Nội dung và trạng thái truy cập được thống nhất. |
| AC-04 | Kích hoạt mục đang đóng | Mục đó mở, mục mở trước trong cùng nhóm đóng; không có hai mục cùng mở sau khi chuyển trạng thái hoàn tất. |
| AC-05 | Kích hoạt lại mục đang mở | Mục đóng; nhóm có thể không có mục mở, theo hành vi toggle cần xác minh với mẫu. |
| AC-06 | Mở hoặc đóng mục của một nhóm | Trạng thái các nhóm khác giữ nguyên. |
| AC-07 | Dùng Tab, Enter và Space | Tiêu đề truy cập và kích hoạt được; focus nhìn thấy; phần nội dung đóng không để điều khiển ẩn nhận Tab. |
| AC-08 | Đọc trạng thái bằng công nghệ hỗ trợ | Trạng thái expanded/collapsed và quan hệ tiêu đề–nội dung chính xác ở trạng thái đầu và sau thao tác. |
| AC-09 | Bấm liên tiếp hoặc chuyển mục nhanh | Không kẹt chiều cao, không nhân đôi nội dung; kết quả hiển thị và trạng thái cuối nhất quán. |
| AC-10 | Bật tùy chọn giảm chuyển động | Vẫn đóng/mở được và nhận biết kết quả, không cần chờ hiệu ứng dài. |
| AC-11 | Xem trên desktop và mobile với nội dung dài | Nhãn và nội dung đọc được, không chồng lấn, cắt nội dung hoặc cuộn ngang ngoài ý muốn. |
| AC-12 | Tải và sử dụng trang | Không thiếu tài nguyên hoặc có lỗi runtime làm hỏng chức năng; biểu tượng local hoạt động. |
| AC-13 | Kiểm tra các thành phần dùng chung bị tác động, nếu có | Hành vi layout và button hiện có không bị hồi quy. |

Đây là điều kiện nghiệm thu cho bước triển khai/review. Chưa chạy kiểm thử ứng dụng hoặc kiểm tra trình duyệt trong bước BA.

## 7. Giả định (Assumptions)
- **A-01:** Tệp đầu ra là `accordion.html` ở thư mục gốc, theo quy ước của `button.html`; người dùng chưa chỉ định tên/đường dẫn.
- **A-02:** Giao diện sáng mặc định, nhãn và nội dung ví dụ bằng tiếng Anh. Không cần sao chép nguyên văn nội dung demo.
- **A-03:** Dùng Font Awesome local theo sở thích đã nêu ở task button; người dùng chưa xác nhận riêng cho Accordion.
- **A-04:** Trạng thái đầu và hành vi toggle mô tả trong brief là cơ sở làm việc, cần xác minh bằng bản render. Không xem quan sát HTML là kết quả thử tương tác.

Các giả định này chưa phải câu trả lời đã xác nhận của người dùng.

## 8. Câu hỏi cần xác nhận (Open Questions)
| ID | Câu hỏi | Ảnh hưởng và cơ sở làm việc | Chặn thiết kế? |
| --- | --- | --- | --- |
| Q-001 | Có yêu cầu tên tệp hoặc thư mục khác `accordion.html` ở gốc không? | Ảnh hưởng đường dẫn truy cập; hiện áp dụng A-01. | Không |
| Q-002 | Có nội dung hoặc ngôn ngữ bắt buộc cho tiêu đề và nội dung ví dụ không? | Ảnh hưởng câu chữ và độ dài hiển thị; hiện áp dụng A-02. | Không |
| Q-003 | Có yêu cầu biểu tượng riêng cho Accordion thay vì Font Awesome tương đương không? | Ảnh hưởng mức độ giống hình thức; hiện áp dụng A-03. | Không |

Không có câu hỏi nghiệp vụ đang chặn thiết kế. Việc xác minh bản render là công việc khảo sát tiếp theo, không phải câu hỏi người dùng bắt buộc phải trả lời. Nếu phát hiện mâu thuẫn ảnh hưởng hành vi nghiệp vụ, cần ghi nhận và giải quyết trước khi triển khai phần phụ thuộc. Q-001–Q-003 vẫn mở, không tự đóng khi chuyển giai đoạn.

## 9. Quyết định đã xác nhận (Decisions)
| ID | Ngày | Nguồn | Nội dung |
| --- | --- | --- | --- |
| D-001 | 2026-11-09 | Yêu cầu gốc của người dùng | Mô phỏng Accordion theo trang Materio được cung cấp. |

Các chi tiết bốn nhóm, ba mục và trạng thái đầu được kế thừa từ quan sát trong task brief; không ghi nhận chúng là câu trả lời riêng của người dùng. Chưa có câu trả lời cho Q-001–Q-003 và chưa có phê duyệt BA rõ ràng. Trạng thái hiện tại không phải `Approved`.

## 10. Rủi ro và phụ thuộc nghiệp vụ
- Độ giống giao diện phụ thuộc khả năng mở và kiểm tra mẫu trên trình duyệt; đọc HTML chưa đủ xác nhận màu, khoảng cách, chỉ báo hoặc chuyển động.
- Bốn nhóm cần được phân biệt theo hình thức thực tế; tên gọi trong BA nhằm nhận diện phạm vi, không thay thế việc quan sát mẫu.
- Hiệu ứng chuyển trạng thái có thể gây lệch nội dung, chỉ báo và trạng thái truy cập được khi thao tác nhanh; cần kiểm chứng riêng.
- Việc tái sử dụng tài nguyên chung phải bảo toàn chỉnh sửa hiện có của người dùng và các task khác.
- Không có phụ thuộc dữ liệu hoặc quyền nghiệp vụ ngoài trang minh họa.

Bước tiếp theo đề xuất: `task-analyze #20261109_materio_accordion` để xác minh mẫu và mã hiện tại, sau đó lập phương án bằng `task-plan`.
