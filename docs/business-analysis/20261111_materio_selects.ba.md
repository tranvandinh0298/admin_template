# Phân tích nghiệp vụ: Selects
**Task ID:** 20261111_materio_selects
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261111_materio_selects.md

## 1. Bối cảnh và mục tiêu nghiệp vụ
Minh họa chọn giá trị, thêm thẻ và gợi ý khi nhập.
## 2. Phạm vi và ngoài phạm vi
34 ví dụ trong Select2, Tagify, Typeahead và Bootstrap Select. Dữ liệu phục vụ demo.
## 3. Đối tượng sử dụng (Actors)
Người dùng thử và người phát triển form.
## 4. Quy trình nghiệp vụ (Business Workflows)
Mở danh sách, tìm, chọn hoặc bỏ chọn giá trị. Nhập thẻ hoặc chọn gợi ý.
## 5. Quy tắc nghiệp vụ (Business Rules)
Tôn trọng trạng thái disabled, readonly và giới hạn chọn. Gợi ý lấy từ dữ liệu mẫu local.
## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
Đủ 34 ví dụ. Tìm kiếm và chọn cập nhật đúng trường. Danh sách vừa viewport hẹp. Menu đánh dấu đúng trang.
## 7. Giả định (Assumptions)
Dùng thư viện local và dữ liệu mẫu riêng.
## 8. Câu hỏi cần xác nhận (Open Questions)
Không có câu hỏi chặn.
## 9. Quyết định đã xác nhận (Decisions)
Triển khai theo reference và đặt trang trong Form Elements.
## 10. Rủi ro và phụ thuộc nghiệp vụ
Popup cần kiểm tra cạnh viewport. Prefetch qua HTTP dùng JSON local và có dữ liệu dự phòng khi mở file trực tiếp.
