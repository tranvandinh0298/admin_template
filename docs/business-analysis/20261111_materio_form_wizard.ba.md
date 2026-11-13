# Phân tích nghiệp vụ: Form Wizard
**Task ID:** 20261111_materio_form_wizard
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261111_materio_form_wizard.md

## 1. Bối cảnh và mục tiêu nghiệp vụ
Minh họa form nhiều bước theo Materio.
## 2. Phạm vi và ngoài phạm vi
Năm wizard dạng số và bốn wizard dạng icon. Không tạo tài khoản hoặc lưu dữ liệu.
## 3. Đối tượng sử dụng (Actors)
Người dùng thử và người phát triển form.
## 4. Quy trình nghiệp vụ (Business Workflows)
Nhập thông tin, dùng Next hoặc Previous, xem lại nếu có bước Review rồi bấm Submit.
## 5. Quy tắc nghiệp vụ (Business Rules)
Các wizard độc lập. Dữ liệu giữ nguyên khi quay lại. Ví dụ Validation kiểm tra trường bắt buộc, email và khớp mật khẩu. Review chỉ hiển thị trường không nhạy cảm.
## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
Đủ chín ví dụ. Focus chuyển theo bước. Form báo hoàn tất tại chỗ, bố cục vừa màn hình hẹp và menu đánh dấu đúng trang.
## 7. Giả định (Assumptions)
Dùng Font Awesome và bộ điều khiển chung. Dữ liệu ví dụ chỉ nằm ở trình duyệt.
## 8. Câu hỏi cần xác nhận (Open Questions)
Không có câu hỏi chặn.
## 9. Quyết định đã xác nhận (Decisions)
Triển khai hai trang theo reference.
## 10. Rủi ro và phụ thuộc nghiệp vụ
Cần kiểm tra validation, focus, các bước ẩn và thông tin hiển thị trong Review.
