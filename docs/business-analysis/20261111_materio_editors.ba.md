# Phân tích nghiệp vụ: Editors
**Task ID:** 20261111_materio_editors
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261111_materio_editors.md

## 1. Bối cảnh và mục tiêu nghiệp vụ
Minh họa ba biến thể rich-text editor theo Materio.
## 2. Phạm vi và ngoài phạm vi
Snow, Bubble, Full Editor và liên kết Form Elements. Nội dung demo nằm trong phiên hiện tại.
## 3. Đối tượng sử dụng (Actors)
Người dùng thử và người phát triển form.
## 4. Quy trình nghiệp vụ (Business Workflows)
Nhập hoặc chọn văn bản, dùng toolbar cố định hoặc toolbar nổi rồi xem định dạng.
## 5. Quy tắc nghiệp vụ (Business Rules)
Mỗi editor quản lý nội dung riêng. Toolbar có tên thao tác và focus rõ.
## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
Cả ba editor hoạt động, toolbar Bubble xuất hiện khi chọn chữ, Full Editor có định dạng mở rộng. Menu đánh dấu đúng trang và bố cục vừa mobile.
## 7. Giả định (Assumptions)
Dùng Quill local và nội dung mẫu riêng.
## 8. Câu hỏi cần xác nhận (Open Questions)
Không có câu hỏi chặn.
## 9. Quyết định đã xác nhận (Decisions)
Triển khai Editors theo reference.
## 10. Rủi ro và phụ thuộc nghiệp vụ
Toolbar nổi và popover cần kiểm tra ở viewport hẹp.
