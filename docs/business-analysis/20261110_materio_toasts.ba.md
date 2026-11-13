# Phân tích nghiệp vụ: Toasts
**Task ID:** 20261110_materio_toasts
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261110_materio_toasts.md
## 1. Bối cảnh và mục tiêu nghiệp vụ
Tạo showcase Toast theo Materio, ưu tiên thư viện độc lập thay Bootstrap.
## 2. Phạm vi và ngoài phạm vi
Bốn nhóm: animation,9positions,16gallery previews(light/dark),Notyf configurator. Không backend,push,persistence hoặc action thật.
## 3. Đối tượng sử dụng (Actors)
Người thử notification qua form/pointer/keyboard và người kiểm tra giao diện.
## 4. Quy trình nghiệp vụ (Business Workflows)
Chọn settings→Show→toast xuất hiện không đổi focus→tự hết hạn hoặc Close/Clear. Hover/focus tạm dừng thời gian. Gallery là preview tĩnh có close, reload phục hồi.
## 5. Quy tắc nghiệp vụ (Business Rules)
BR01 message render plain text. BR02 blank/whitespace dùng một câu demo cố định an toàn thay HTML ngẫu nhiên của reference. BR03 duration là số nguyên0..2147483647ms (giới hạn timer nền tảng);trống/âm/lẻ/nonfinite/vượt giới hạn báo lỗi tại field.0 persistent yêu cầu Dismissible. BR04 Clear Notifications xóa notification nổi từ cả ba demo,không xóa gallery. BR05 mỗi toast giữ position/type/ripple/duration riêng;stack theo position,scroll khi nhiều. BR06 không focus theft/trap;close khi focused trả launcher. BR07 pause hover/focus;reduced motion tắt animation/ripple. BR08 info/success polite,error/warning assertive,không announce gallery hàng loạt.
## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
AC01 bốn nhóm,7colors,45animations,9positions,16gallery. AC02 lifecycle dùng thư viện độc lập/local pinned/license. AC03 form settings/validation đúng. AC04 close/clear/expiry/pause/repeat sạch. AC05 plain text,no request/action. AC06 announcements/labels/focus/timing/reduced motion. AC07 responsive/longtext/zoom/drawer. AC08 actual tests/deviations.
## 7. Giả định (Assumptions)
Root toasts.html,English/light shell;safe blank fallback và validation theo BR03 là lựa chọn trong phạm vi demo,không policy nghiệp vụ sản phẩm. Animation demo5s và dismissible;placement5s và dismissible. Gallery persistent.
## 8. Câu hỏi cần xác nhận (Open Questions)
Q001 Notyf3.10.0 MIT khả thi:custom types,positions gồm center,public open/dismiss. Q002 live45animation/16gallery xác minh;fade alias cần map fadeIn. Q003 blank/duration theo BR02/03,khác reference HTML fallback có chủ ý. Q004 pause adapter cần thiết vì library không cung cấp pause timer. Q005 vendor local+license;plain-text escaping;reduced motion adapter cleanup. Không câu hỏi chặn.
## 9. Quyết định đã xác nhận (Decisions)
User yêu cầu BA→Analyze→Implement và ưu tiên library. Không yêu cầu technical plan/review. Ready không phải Approved;không có phê duyệt BA riêng. Input/timing/accessibility refinements là giả định theo brief,được báo cáo.
## 10. Rủi ro và phụ thuộc nghiệp vụ
Notyf render innerHTML nên cần escape;animationend cleanup cần fallback khi reduced motion;timer pause và nhiều position cần adapter. Không Bootstrap dependency mới.
