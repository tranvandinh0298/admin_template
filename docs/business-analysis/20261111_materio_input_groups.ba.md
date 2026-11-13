# Phân tích nghiệp vụ: Input Groups
**Task ID:** 20261111_materio_input_groups
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261111_materio_input_groups.md

## 1. Bối cảnh và mục tiêu nghiệp vụ
Minh họa cách kết hợp trường nhập với tiền tố, hậu tố và nút.
## 2. Phạm vi và ngoài phạm vi
Mười hai nhóm theo Materio. Basic Inputs và Input Groups cùng thuộc Form Elements.
## 3. Đối tượng sử dụng (Actors)
Người dùng thử và người phát triển giao diện.
## 4. Quy trình nghiệp vụ (Business Workflows)
Mở một trang từ menu. Nhập, chọn, mở dropdown, đổi hiển thị mật khẩu, chọn tệp hoặc nhập bằng giọng nói nếu trình duyệt hỗ trợ.
## 5. Quy tắc nghiệp vụ (Business Rules)
Control có nhãn và focus rõ ràng. Chọn tệp diễn ra tại trình duyệt. Micro chỉ khởi động khi bấm nút. Có thể gõ khi micro không khả dụng.
## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
Đủ 12 nhóm. Hai liên kết hiển thị dưới Form Elements với đúng trang hiện hành. Dropdown dùng được bằng bàn phím và đóng bằng Escape. Màn hình nhỏ không tràn ngang.
## 7. Giả định (Assumptions)
Nút minh họa phản hồi trong trang. Speech dùng API trình duyệt.
## 8. Câu hỏi cần xác nhận (Open Questions)
Không có câu hỏi chặn.
## 9. Quyết định đã xác nhận (Decisions)
Người dùng xác nhận hai trang thuộc Form Elements.
## 10. Rủi ro và phụ thuộc nghiệp vụ
Speech phụ thuộc trình duyệt, quyền micro và dịch vụ nhận dạng.
