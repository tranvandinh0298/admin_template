# Phân tích nghiệp vụ: Text Divider
**Task ID:** 20261110_materio_text_divider
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261110_materio_text_divider.md

## 1. Bối cảnh và mục tiêu nghiệp vụ
Cung cấp các đường phân cách có chữ hoặc icon theo Materio, giúp tổ chức nội dung trang.
## 2. Phạm vi và ngoài phạm vi
Bảy nhóm theo reference: Basic, Alignment, Colors, Icons, Styles, Vertical, Vertical Colors. Không xử lý backend hay thay đổi component cũ.
## 3. Đối tượng sử dụng (Actors)
Người xem demo và người phát triển tái sử dụng class.
## 4. Quy trình nghiệp vụ (Business Workflows)
Mở trang, xem các nhóm biến thể và dùng class tương ứng trong nội dung khác. Component không tương tác.
## 5. Quy tắc nghiệp vụ (Business Rules)
Nhãn nằm giữa các đoạn đường, có năm vị trí ngang và ba vị trí dọc. Có sáu màu, ba kiểu đường, và Font Awesome icon. Trên màn hình nhỏ, nhóm dọc được chia hàng. Nội dung dài được xuống dòng thay vì tràn trang. Đường trang trí không tạo focus; icon có tên dễ hiểu.
## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
AC-01: Đủ 7 nhóm và 32 ví dụ. AC-02: Năm vị trí ngang và ba vị trí dọc phân biệt rõ. AC-03: Có solid/dashed/dotted và sáu màu ở hai hướng. AC-04: Icon local, không SVG. AC-05: Không tràn tại 320px hoặc khi tăng cỡ chữ; shell vẫn hoạt động.
## 7. Giả định (Assumptions)
Giữ nhãn ngắn như reference; dùng màu và typography hiện có. Không cần JavaScript riêng cho divider.
## 8. Câu hỏi cần xác nhận (Open Questions)
Không có câu hỏi chặn triển khai.
## 9. Quyết định đã xác nhận (Decisions)
Người dùng chọn reference Text Divider và chuỗi task-create → task-ba → task-analyze → task-implement. Chưa có phê duyệt BA riêng.
## 10. Rủi ro và phụ thuộc nghiệp vụ
Cần kiểm tra nhãn dài, icon và bố cục dọc trên màn hình nhỏ; dùng bộ Font Awesome local hiện có.
