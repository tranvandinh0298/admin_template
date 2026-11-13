# Phân tích nghiệp vụ: Form Validation
**Task ID:** 20261111_materio_form_validation
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261111_materio_form_validation.md

## 1. Bối cảnh và mục tiêu nghiệp vụ
Minh họa cách phát hiện và sửa lỗi nhập liệu theo Materio.
## 2. Phạm vi và ngoài phạm vi
Ba form gồm Browser Default, Bootstrap Validation và FormValidation. Dữ liệu phục vụ thử giao diện.
## 3. Đối tượng sử dụng (Actors)
Người dùng thử và người phát triển form.
## 4. Quy trình nghiệp vụ (Business Workflows)
Nhập dữ liệu rồi bấm Submit. Sửa trường có lỗi và gửi lại. Form hợp lệ hiển thị thông báo demo.
## 5. Quy tắc nghiệp vụ (Business Rules)
Email hợp lệ, trường bắt buộc có giá trị. Form nâng cao kiểm tra tên 6–30 ký tự, bio 100–500 ký tự và xác nhận mật khẩu. Tệp được chọn tại trình duyệt.
## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
Ba form hoạt động độc lập. Lỗi inline liên kết với trường, focus đến lỗi đầu tiên và được xóa khi sửa. Reset khôi phục trạng thái.
## 7. Giả định (Assumptions)
Dùng HTML Constraint Validation và JavaScript local. Danh sách nâng cao dùng control gốc.
## 8. Câu hỏi cần xác nhận (Open Questions)
Không có câu hỏi chặn.
## 9. Quyết định đã xác nhận (Decisions)
Triển khai trang theo reference và đặt liên kết riêng sau Form Wizard.
## 10. Rủi ro và phụ thuộc nghiệp vụ
Thông báo gốc phụ thuộc trình duyệt. Nhãn và feedback inline cần kiểm tra keyboard và màn hình nhỏ.
