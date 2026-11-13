# Phân tích nghiệp vụ: Progress bars
**Task ID:** 20261110_materio_progress
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261110_materio_progress.md
## 1. Bối cảnh và mục tiêu nghiệp vụ
Minh họa thanh tiến độ Materio trong trang tĩnh, không đại diện công việc thực tế.
## 2. Phạm vi và ngoài phạm vi
30 tracks/36 segments: Default, Height, With Label, Backgrounds, Striped, Animated, Multiple bars trong năm nhóm. Không upload, polling, API hoặc controls tự thêm.
## 3. Đối tượng sử dụng (Actors)
Người xem các biến thể và người kiểm tra bằng màn hình hoặc công nghệ hỗ trợ.
## 4. Quy trình nghiệp vụ (Business Workflows)
Mở trang → xem giá trị cố định và các kiểu thanh → quan sát sọc động; reduced motion dừng sọc. Không có tiến trình thật.
## 5. Quy tắc nghiệp vụ (Business Rules)
BR-01: giá trị không tự thay đổi. BR-02: width/label/aria thống nhất. BR-03: multiple segments15/30/20%, tổng65%, còn35%. BR-04: mỗi segment có tên rõ ràng, không suy diễn tổng completion. BR-05: reduced motion dừng animation. BR-06: labels phải đọc được khi mobile/text enlarged, cho phép điều chỉnh tối thiểu được báo cáo.
## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
AC-01 đủ30tracks/36segments/năm nhóm. AC-02 đúng giá trị và bảy màu. AC-03 multiple order/tổng đúng. AC-04 stripe tĩnh/động và reduced motion đúng. AC-05 tên/range/value/width/label nhất quán. AC-06 responsive/long headings/text enlargement không cắt hoặc overflow. AC-07 resources/sidebar hoạt động, không request tiến độ. AC-08 báo cáo khác biệt/tests thực hiện.
## 7. Giả định (Assumptions)
progress.html root, English/light shell. Không cần component JS; CSS animation đủ. Label12px của mẫu có thể tăng min-height theo font để tránh cắt khi phóng chữ; giữ phần khác theo mẫu.
## 8. Câu hỏi cần xác nhận (Open Questions)
Q-001 default6px/height6,10px/label12px xác minh bằng Chrome; motion khảo sát tiếp ở Analyze. Q-002 ưu tiên nhãn đọc được, báo cáo tăng chiều cao nếu cần theo brief. Q-00330tracks/36segments xác minh live; không thấy controls trong inventory. Không có câu hỏi nghiệp vụ chặn.
## 9. Quyết định đã xác nhận (Decisions)
Người dùng yêu cầu BA → Analyze → Implement; không yêu cầu plan/review riêng. Ready không phải Approved. Các giả định chưa phải phê duyệt BA riêng.
## 10. Rủi ro và phụ thuộc nghiệp vụ
Label nhỏ, màu sáng thiếu tương phản, animation gây khó chịu và overflow khi viewport nhỏ. Không API dependency.
