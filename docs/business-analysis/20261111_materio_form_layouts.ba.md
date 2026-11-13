# Phân tích nghiệp vụ: Form Layouts
**Task ID:** 20261111_materio_form_layouts
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261111_materio_form_layouts.md

## 1. Bối cảnh và mục tiêu nghiệp vụ
Minh họa bố cục form dọc, ngang và form có thanh thao tác cố định khi cuộn.
## 2. Phạm vi và ngoài phạm vi
Ba trang trong Form Layouts. Dữ liệu dùng để thử giao diện.
## 3. Đối tượng sử dụng (Actors)
Người dùng thử và người phát triển giao diện.
## 4. Quy trình nghiệp vụ (Business Workflows)
Nhập trường, chuyển tab hoặc mở phần thu gọn. Với Sticky, chọn địa chỉ, giao hàng, mã ưu đãi và thanh toán trước khi bấm Place Order.
## 5. Quy tắc nghiệp vụ (Business Rules)
Nhãn ngang chuyển lên trên ở màn hình hẹp. Chọn thanh toán bằng tiền mặt ẩn phần thẻ. Submit hiển thị kết quả demo tại chỗ. Cancel khôi phục giá trị mặc định.
## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
Đủ ba biến thể và các nhóm theo reference. Tab dùng được bằng bàn phím. Thanh thao tác Sticky nằm dưới thanh đầu trang khi cuộn. Menu đánh dấu đúng trang.
## 7. Giả định (Assumptions)
Mã khuyến mãi và thông tin thanh toán là dữ liệu mẫu. Không lưu đơn.
## 8. Câu hỏi cần xác nhận (Open Questions)
Không có câu hỏi chặn.
## 9. Quyết định đã xác nhận (Decisions)
Triển khai ba trang Materio theo quy trình bốn skill.
## 10. Rủi ro và phụ thuộc nghiệp vụ
Thanh sticky cần cập nhật khi chiều cao thanh đầu trang thay đổi.
