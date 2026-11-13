# Phân tích nghiệp vụ: Basic Inputs
**Task ID:** 20261111_materio_basic_inputs
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261111_materio_basic_inputs.md

## 1. Bối cảnh và mục tiêu nghiệp vụ
Minh họa các trường nhập liệu theo Materio.
## 2. Phạm vi và ngoài phạm vi
Mười một nhóm trong reference. Việc chọn tệp diễn ra trong trình duyệt.
## 3. Đối tượng sử dụng (Actors)
Người dùng thử control và người phát triển giao diện.
## 4. Quy trình nghiệp vụ (Business Workflows)
Nhập văn bản, chọn giá trị, đổi trạng thái, chỉnh thanh trượt hoặc chọn tệp.
## 5. Quy tắc nghiệp vụ (Business Rules)
Nhãn luôn xác định được trường. Radio cùng nhóm loại trừ nhau. Trường disabled và readonly dùng hành vi HTML gốc.
## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
Đủ 11 nhóm. Nhãn nổi khi focus hoặc có giá trị. Checkbox có trạng thái mixed thật. Range tuân theo min, max và step. File input hỗ trợ một tệp hoặc nhiều tệp. Bố cục vừa màn hình nhỏ.
## 7. Giả định (Assumptions)
Dùng dữ liệu mẫu và bộ chọn gốc của trình duyệt.
## 8. Câu hỏi cần xác nhận (Open Questions)
Không có câu hỏi chặn.
## 9. Quyết định đã xác nhận (Decisions)
Triển khai theo trang Basic Inputs của Materio và chuỗi skill đã yêu cầu.
## 10. Rủi ro và phụ thuộc nghiệp vụ
Giao diện date, time và file picker phụ thuộc trình duyệt.
