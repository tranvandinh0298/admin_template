# Phân tích nghiệp vụ: Pickers
**Task ID:** 20261111_materio_pickers
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261111_materio_pickers.md

## 1. Bối cảnh và mục tiêu nghiệp vụ
Minh họa cách chọn ngày, giờ, khoảng ngày và màu theo Materio.
## 2. Phạm vi và ngoài phạm vi
23 ví dụ trong bốn nhóm. Giá trị phục vụ demo trên trang.
## 3. Đối tượng sử dụng (Actors)
Người dùng thử và người phát triển form.
## 4. Quy trình nghiệp vụ (Business Workflows)
Mở picker, chọn giá trị, xác nhận nếu có nút Apply hoặc Save.
## 5. Quy tắc nghiệp vụ (Business Rules)
Ngày và giờ bị khóa không thể chọn. Khoảng ngày có ngày đầu và cuối. Các preset dựa trên ngày hiện tại. Màu có thể chỉnh độ trong suốt.
## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
Đủ 23 ví dụ. Chọn ngày, giờ, preset và màu cập nhật đúng trường. Popup vừa viewport hẹp. Form Elements đánh dấu đúng trang.
## 7. Giả định (Assumptions)
Dùng thư viện local như reference và múi giờ trình duyệt.
## 8. Câu hỏi cần xác nhận (Open Questions)
Không có câu hỏi chặn.
## 9. Quyết định đã xác nhận (Decisions)
Triển khai Pickers theo reference.
## 10. Rủi ro và phụ thuộc nghiệp vụ
Lịch hai tháng và bảng màu cần kiểm tra trên màn hình nhỏ.
