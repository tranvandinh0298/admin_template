# Phân tích nghiệp vụ: Offcanvas Materio
**Task ID:** 20261109_materio_offcanvas
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261109_materio_offcanvas.md
## 1. Bối cảnh và mục tiêu nghiệp vụ
Minh họa Offcanvas theo Materio trong trang độc lập, không thay navigation toàn hệ thống.
## 2. Phạm vi và ngoài phạm vi
Chín ví dụ: bốn vị trí, ba chế độ scroll/backdrop, responsive và dark. Không backend, lưu dữ liệu hay hành động thật.
## 3. Đối tượng sử dụng (Actors)
Người xem thử panel bằng pointer hoặc keyboard; người kiểm tra giao diện mẫu.
## 4. Quy trình nghiệp vụ (Business Workflows)
Mở trang → chọn ví dụ → đọc nội dung/thử hành động demo → đóng → focus trở về trigger. Resize và thao tác nhanh phải giữ trạng thái hợp lệ.
## 5. Quy tắc nghiệp vụ (Business Rules)
BR-01: đúng vị trí và chế độ scroll/backdrop. BR-02: modal giữ focus và chặn tương tác nền; nonmodal cho phép truy cập nền. BR-03: close/Cancel/Escape hoạt động; backdrop đóng khi có. BR-04: hành động chỉ báo demo. BR-05: không có hai overlay cạnh tranh focus; giữ sidebar hoạt động. BR-06: animation tôn trọng reduced motion.
## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
AC-01: đủ chín ví dụ và nội dung đã xác minh. AC-02: bốn hướng, animation và dark đọc được. AC-03: ba chế độ scrolling/backdrop khôi phục đúng. AC-04: responsive chuyển đúng ngưỡng và không sót overlay. AC-05: label, keyboard, focus, hidden state hợp lệ. AC-06: thao tác nhanh/resize/long content/mobile không lỗi. AC-07: demo không request; resources và sidebar regression đạt. AC-08: báo cáo khác biệt và giới hạn kiểm tra.
## 7. Giả định (Assumptions)
Trang offcanvas.html, nội dung tiếng Anh, shell sáng. Một overlay hoạt động tại một thời điểm là lựa chọn thiết kế để tránh xung đột.
## 8. Câu hỏi cần xác nhận (Open Questions)
Q-001: tên trang khác? Không chặn. Q-002: breakpoint/scroll/focus/animation thực tế? Cần khảo sát kỹ thuật trước thiết kế phụ thuộc. Không có câu hỏi nghiệp vụ chặn.
## 9. Quyết định đã xác nhận (Decisions)
Người dùng yêu cầu mẫu Offcanvas và đầy đủ workflow. Ready không đồng nghĩa BA Approved; chưa có phê duyệt riêng.
## 10. Rủi ro và phụ thuộc nghiệp vụ
Focus trap cạnh tranh, scroll lock còn sót, nội dung bị cắt và animation bị gián đoạn. Không có API dependency.
