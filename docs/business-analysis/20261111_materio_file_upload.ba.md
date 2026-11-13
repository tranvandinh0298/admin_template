# Phân tích nghiệp vụ: File Upload
**Task ID:** 20261111_materio_file_upload
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261111_materio_file_upload.md

## 1. Bối cảnh và mục tiêu nghiệp vụ
Minh họa vùng chọn tệp theo Materio.
## 2. Phạm vi và ngoài phạm vi
Basic một tệp và Multiple nhiều tệp, cùng thuộc Form Elements. Tệp được giữ tại trình duyệt.
## 3. Đối tượng sử dụng (Actors)
Người dùng thử giao diện và người phát triển.
## 4. Quy trình nghiệp vụ (Business Workflows)
Chọn hoặc thả tệp, xem tên và kích thước, xem trước ảnh và xóa khỏi danh sách.
## 5. Quy tắc nghiệp vụ (Business Rules)
Tối đa 5 MiB mỗi tệp. Basic giữ tệp đầu tiên hợp lệ và báo phần vượt giới hạn. Multiple thêm các tệp hợp lệ. Tệp trùng tên, kích thước và thời điểm sửa được bỏ qua kèm thông báo.
## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
Hai vùng hoạt động độc lập. Lỗi giới hạn rõ ràng. Xóa cho phép chọn lại cùng tệp. Tên được hiển thị như văn bản. Bố cục phù hợp mobile và thao tác keyboard.
## 7. Giả định (Assumptions)
Dùng browser File API với preview local. Giới hạn 5 MiB tương ứng cấu hình reference.
## 8. Câu hỏi cần xác nhận (Open Questions)
Không có câu hỏi chặn.
## 9. Quyết định đã xác nhận (Decisions)
Triển khai theo reference File Upload.
## 10. Rủi ro và phụ thuộc nghiệp vụ
Preview ảnh có thể thất bại. Cần giải phóng object URL khi xóa.
