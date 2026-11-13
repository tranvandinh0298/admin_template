# Phân tích nghiệp vụ: Form Extras
**Task ID:** 20261111_materio_form_extras
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261111_materio_form_extras.md

## 1. Bối cảnh và mục tiêu nghiệp vụ
Minh họa các tiện ích nhập liệu theo Materio.
## 2. Phạm vi và ngoài phạm vi
Autosize, chín input mask, hai bộ đếm và Form Repeater.
## 3. Đối tượng sử dụng (Actors)
Người dùng thử và người phát triển form.
## 4. Quy trình nghiệp vụ (Business Workflows)
Nhập hoặc dán dữ liệu, xem định dạng và giới hạn ký tự, thêm hàng hoặc xác nhận xóa hàng.
## 5. Quy tắc nghiệp vụ (Business Rules)
Giới hạn 25 và 255 ký tự. Hàng mới có nhãn riêng. Hủy xác nhận giữ hàng và dữ liệu.
## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
Bốn nhóm hoạt động độc lập, điều khiển có nhãn, không tràn màn hình nhỏ và có liên kết Form Elements.
## 7. Giả định (Assumptions)
Dữ liệu demo ở trình duyệt. Dùng Cleave-zen local và SweetAlert2 có sẵn.
## 8. Câu hỏi cần xác nhận (Open Questions)
Không có câu hỏi chặn.
## 9. Quyết định đã xác nhận (Decisions)
Triển khai theo reference Form Extras.
## 10. Rủi ro và phụ thuộc nghiệp vụ
Kiểm tra vị trí con trỏ khi sửa mask và focus sau khi xóa hàng.
