# Phân tích nghiệp vụ: Treeview
**Task ID:** 20261110_materio_treeview
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261110_materio_treeview.md

## 1. Bối cảnh và mục tiêu nghiệp vụ
Minh họa dữ liệu phân cấp và thao tác treeview theo Materio.
## 2. Phạm vi và ngoài phạm vi
Sáu nhóm Basic, Custom Icons, Context Menu, Drag & Drop, Checkboxes, Ajax. Không thao tác filesystem thật hoặc backend CRUD.
## 3. Đối tượng sử dụng (Actors)
Người xem demo và người phát triển component.
## 4. Quy trình nghiệp vụ (Business Workflows)
Mở/đóng nhánh, chọn node; dùng menu ngữ cảnh tạo/đổi tên/xóa/cắt/sao chép/dán; kéo node hoặc dùng điều khiển thay thế; chọn checkbox; tải Ajax từ JSON local.
## 5. Quy tắc nghiệp vụ (Business Rules)
Các cây độc lập. Không cho phép di chuyển node vào chính nó hoặc hậu duệ; file không nhận node con. Nội dung tên là văn bản thuần. Thay đổi context và drag chỉ ở bộ nhớ. Checkbox lan truyền tới con và hiển thị trạng thái một phần ở cha. Ajax có loading, lỗi và Retry; chỉ lưu trạng thái mở/chọn của cây Ajax trong trình duyệt nếu storage khả dụng.
## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
AC-01: Đủ sáu nhóm theo reference và icon Font Awesome local. AC-02: Mở/đóng/chọn/keyboard hoạt động. AC-03: Context menu và toolbar tạo/đổi tên/xóa/cắt/copy/paste hoạt động. AC-04: Drag và điều khiển thay thế đổi thứ tự/cha hợp lệ; từ chối chu trình và kéo giữa cây. AC-05: Checkbox cascading và partial đúng. AC-06: Ajax thành công/lỗi/retry rõ ràng. AC-07: Mobile không tràn trang, thao tác được bằng touch/keyboard.
## 7. Giả định (Assumptions)
Dùng jsTree như reference, dữ liệu tên file trung tính tương tự. Ajax yêu cầu HTTP; khi mở file trực tiếp hiển thị hướng dẫn. Không tạo tài nguyên thật.
## 8. Câu hỏi cần xác nhận (Open Questions)
Không có câu hỏi chặn triển khai.
## 9. Quyết định đã xác nhận (Decisions)
Người dùng yêu cầu reference Treeview và chuỗi task-create → task-ba → task-analyze → task-implement. Chưa có phê duyệt BA riêng.
## 10. Rủi ro và phụ thuộc nghiệp vụ
jsTree phụ thuộc jQuery; cần local assets, kiểm tra thao tác lồng nhau, accessibility, Ajax lỗi và storage không khả dụng.
