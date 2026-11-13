# Phân tích nghiệp vụ: Pagination & Breadcrumbs
**Task ID:** 20261110_materio_pagination_breadcrumbs
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261110_materio_pagination_breadcrumbs.md
## 1. Bối cảnh và mục tiêu nghiệp vụ
Tạo trang minh họa hai thành phần điều hướng theo cùng trang Materio, không tích hợp dữ liệu thật.
## 2. Phạm vi và ngoài phạm vi
22 pagination, bốn breadcrumbs; shapes, sizes, alignments, sáu màu filled/outline. Không backend, routing hay persistence.
## 3. Đối tượng sử dụng (Actors)
Người xem mẫu và người kiểm tra giao diện bằng pointer/keyboard.
## 4. Quy trình nghiệp vụ (Business Workflows)
Mở trang → xem biến thể → kích hoạt liên kết demo → nhận thông báo minh họa; vị trí current giữ nguyên như mẫu.
## 5. Quy tắc nghiệp vụ (Business Rules)
BR-01: demo tĩnh, không đổi trang/current hay tải bản ghi. BR-02: mọi link demo không gửi request hoặc chuyển URL. BR-03: giữ nội dung current theo mẫu; breadcrumb star kết thúc Library. BR-04: icon có tên điều hướng, separator trang trí bị ẩn khỏi công nghệ hỗ trợ. BR-05: keyboard/focus và mobile phải sử dụng được.
## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
AC-01 đủ22 pagination/bốn breadcrumbs/bốn nhóm. AC-02 đúng shapes/sizes/alignments/colors. AC-03 đúng nhãn và current semantics. AC-04 link icon có tên, focus/native keyboard hợp lệ. AC-05 demo tĩnh được công bố và không request/navigation. AC-06 mobile/long labels/resize không overflow ngoài ý muốn. AC-07 fonts/resources/sidebar không lỗi. AC-08 báo cáo so sánh và giới hạn.
## 7. Giả định (Assumptions)
Root pagination-breadcrumbs.html, English/light shell. Giữ reference hiện tại, không tự thêm pagination tương tác.
## 8. Câu hỏi cần xác nhận (Open Questions)
Q-001 đã có bằng chứng: click2 vẫn current3 trên reference; chọn demo tĩnh phù hợp phạm vi. Q-002 giữ Library lặp lại đã xác minh. Q-003 inventory22+4, kích thước34/38/42px đã khảo sát; trạng thái từng ví dụ tiếp tục kiểm tra. Không có câu hỏi nghiệp vụ chặn.
## 9. Quyết định đã xác nhận (Decisions)
Người dùng yêu cầu BA → Analyze → Implement, không yêu cầu technical plan hoặc review. BA Ready không phải Approved. Demo tĩnh/giữ Library là lựa chọn theo mẫu, không phải câu trả lời riêng của người dùng.
## 10. Rủi ro và phụ thuộc nghiệp vụ
Dãy chín nút vượt màn hình nhỏ; màu sáng thiếu tương phản; icon Font Awesome thay glyph mẫu. Không API dependency.
