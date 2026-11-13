# Phân tích nghiệp vụ: Tour
**Task ID:** 20261110_materio_tour
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261110_materio_tour.md

## 1. Bối cảnh và mục tiêu nghiệp vụ
Hướng dẫn người dùng nhận biết các vùng giao diện qua từng bước như Materio.
## 2. Phạm vi và ngoài phạm vi
Một nút Start tour, bốn bước Navbar, Card, Footer, Learn more. Không tự chạy, lưu tiến độ hoặc mua gói.
## 3. Đối tượng sử dụng (Actors)
Người xem demo và người phát triển tích hợp tour.
## 4. Quy trình nghiệp vụ (Business Workflows)
Bấm Start tour, đọc bước được highlight, dùng Next/Back. Skip, nút đóng hoặc Escape kết thúc sớm. Finish kết thúc bước cuối. Mở lại luôn về bước đầu.
## 5. Quy tắc nghiệp vụ (Business Rules)
Chỉ một tour hoạt động. Không tương tác nhầm với nền. Popover có tiêu đề, mô tả và điều hướng bằng keyboard/touch. Khi đóng, trả focus cho launcher và dọn overlay. Thay đổi viewport không làm mất nút. Tôn trọng reduced motion.
## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
AC-01: Đủ bốn bước theo thứ tự. AC-02: Next/Back, Skip và Finish hoạt động. AC-03: Escape/close kết thúc và mở lại về bước đầu. AC-04: Focus nằm trong tour, trở lại launcher khi đóng. AC-05: Desktop/mobile không tràn, không lỗi tài nguyên hoặc thay đổi layout cũ.
## 7. Giả định (Assumptions)
Thay Upgrade thương mại bằng Learn more trỏ tới trang component local. Có thể dùng thư viện khác Shepherd nếu giữ hành vi.
## 8. Câu hỏi cần xác nhận (Open Questions)
Không có câu hỏi chặn triển khai.
## 9. Quyết định đã xác nhận (Decisions)
Người dùng cung cấp reference và yêu cầu task-create → task-ba → task-analyze → task-implement. Chưa có phê duyệt BA riêng.
## 10. Rủi ro và phụ thuộc nghiệp vụ
Thư viện local; cần kiểm tra focus, cleanup, mobile placement và drawer khi resize.
