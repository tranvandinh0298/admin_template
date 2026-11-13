# Phân tích nghiệp vụ: Admin Theme
**Task ID:** 20261113_admin_theme_tokens
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261113_admin_theme_tokens.md

## 1. Bối cảnh và mục tiêu nghiệp vụ
Dùng token chung để đổi giao diện toàn dự án.
## 2. Phạm vi và ngoài phạm vi
Layout, demo, form, bảng, login và widget. Giữ luồng thao tác hiện có.
## 3. Đối tượng sử dụng (Actors)
Người dùng và người bảo trì giao diện.
## 4. Quy trình nghiệp vụ (Business Workflows)
Chọn Light, Night hoặc System. Các trang dùng cùng lựa chọn khi storage khả dụng.
## 5. Quy tắc nghiệp vụ (Business Rules)
System theo hệ điều hành. Light giữ bảng màu hiện tại. Control đặt ở vị trí cố định, ngoài drawer để luôn truy cập được.
## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
Mọi trang chạy được có theme. Chuyển theme bằng bàn phím. Chữ, focus, trạng thái và popup dễ đọc. Đổi token chung cập nhật các trang.
## 7. Giả định (Assumptions)
Ảnh minh họa và mẫu màu giữ giá trị gốc.
## 8. Câu hỏi cần xác nhận (Open Questions)
Không có câu hỏi chặn.
## 9. Quyết định đã xác nhận (Decisions)
Triển khai hai bảng màu, ba lựa chọn và lưu lựa chọn tại trình duyệt.
## 10. Rủi ro và phụ thuộc nghiệp vụ
Widget vendor có màu riêng. Storage trên file URL tùy trình duyệt.
