# Phân tích nghiệp vụ: Dropdowns và submenu sidebar
**Task ID:** 20261109_materio_dropdowns
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261109_materio_dropdowns.md

## 1. Bối cảnh và mục tiêu nghiệp vụ
Mô phỏng Dropdowns Materio và bổ sung submenu sidebar. Người xem thử các loại trigger, menu, cách đặt vị trí và đóng menu; không có tác vụ dữ liệu thật.

## 2. Phạm vi và ngoài phạm vi
Bao gồm Basic/Label/Outline/Split với sáu màu; hidden arrow, hover, icon; alignment, sizes, directions, centered directions, header/divider/text/form; offset/reference; bốn auto-close modes và sidebar một cấp. Không có backend/authentication, form gửi dữ liệu, global navigation rewrite hay nhiều cấp đệ quy.

## 3. Đối tượng sử dụng (Actors)
Người xem và người kiểm tra giao diện không cần tài khoản. Họ có thể mở/đóng menu, chọn hành động minh họa, chỉnh form và theo link local trong sidebar.

## 4. Quy trình nghiệp vụ (Business Workflows)
1. Mở trigger, xem menu đúng vị trí và dùng item/form.
2. Đóng theo auto-close mode hoặc trigger/Escape; focus trở về trigger khi Escape.
3. Hover có đường click/keyboard tương đương; input form chỉnh được, không tự đăng nhập.
4. Sidebar parent mở child links inline; chỉ child đang hiện mới nhận Tab. Mobile drawer vẫn có close/Escape và focus trap đúng.
Nhánh biên: menu gần mép đổi hướng hoặc giới hạn kích thước để truy cập được; thao tác nhanh/resize không để trạng thái ARIA cũ. Submit form chỉ báo kết quả demo, không truyền dữ liệu.

## 5. Quy tắc nghiệp vụ (Business Rules)
- BR-01: Split main action độc lập với toggle. Action demo không điều hướng/gửi dữ liệu.
- BR-02: Default đóng khi chọn item hoặc click ngoài; outside chỉ đóng khi click ngoài; inside chỉ đóng khi chọn trong; manual chỉ đóng bằng toggle hoặc Escape. Form field không bị đóng khi chỉnh. Cần đối chiếu reference và báo cải thiện accessibility nếu khác.
- BR-03: Escape luôn có đường thoát, đưa focus về trigger. Menu đóng không còn item nhận Tab. Không gán role=menu cho form/text tùy tiện.
- BR-04: Sidebar một cấp inline trên trang mới, trạng thái/indicator đồng nhất, child links local; không làm lại sidebar toàn repo.
- BR-05: Viewport hẹp/short height không làm menu không truy cập được. Giữ nguyên các task khác và dùng Font Awesome local.

## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
| ID | Kết quả |
| --- | --- |
| AC-01 | Đủ families và sáu màu ở Basic/Label/Outline/Split. |
| AC-02 | Hidden-arrow/hover/icon/icon-only có đường keyboard/touch, tên rõ và focus. |
| AC-03 | Alignment, breakpoint alignment, sizes, directions/centered, offset/reference đúng mục đích, biên viewport xử lý được. |
| AC-04 | Header/divider/text/form chỉnh được; submit không gửi dữ liệu. |
| AC-05 | Bốn auto-close mode theo quy tắc đã xác minh, Escape/focus nhất quán. |
| AC-06 | Arrow keys/Tab/Enter/Space dùng được, menu đóng không nhận focus; repeated/resize ổn định. |
| AC-07 | Sidebar mở inline, local links đúng, indicator/ARIA đồng nhất; phối hợp mobile drawer. |
| AC-08 | Desktop/mobile/landscape, long menu, reduced motion và resource/runtime kiểm tra; khác biệt mẫu báo cáo. |

## 7. Giả định (Assumptions)
A-01: dropdowns.html ở gốc, light/English. A-02: sidebar một cấp inline chỉ trên trang mới; parent không phải link destination. A-03: action/form là demo. Đây là giả định làm việc, chưa phải câu trả lời riêng.

## 8. Câu hỏi cần xác nhận (Open Questions)
Q-001: sidebar cần flyout/multiple levels không? Không chặn theo A-02. Q-002: reference hover/close/form/Escape cụ thể? Khảo sát trước thiết kế liên quan. Q-003: có filename/wording khác không? Không chặn.

## 9. Quyết định đã xác nhận (Decisions)
D-001: người dùng yêu cầu Dropdowns theo URL và thêm sidebar variant. Chưa có BA approval; không đặt Approved. Nếu reference khác về Escape/manual, ưu tiên đường thoát truy cập được và ghi deviation.

## 10. Rủi ro và phụ thuộc nghiệp vụ
Position collision, form credentials, menu/drawer focus xung đột là rủi ro chính. Không có phụ thuộc dữ liệu. Chưa chạy kiểm thử ở bước BA; tiếp tục task-analyze.
