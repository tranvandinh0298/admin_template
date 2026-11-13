# Phân tích nghiệp vụ: Tabs & Pills
**Task ID:** 20261110_materio_tabs_pills
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261110_materio_tabs_pills.md
## 1. Bối cảnh và mục tiêu nghiệp vụ
Minh họa chuyển nội dung Tabs/Pills Materio trong trang độc lập.
## 2. Phạm vi và ngoài phạm vi
Tám widgets,24controls/23panels; Basic,Filled,Vertical,Bottom tabs và Pills within cards. Không API,routing,persistence hay tạo/xóa tab.
## 3. Đối tượng sử dụng (Actors)
Người thử giao diện bằng pointer/keyboard và người kiểm tra.
## 4. Quy trình nghiệp vụ (Business Workflows)
Chọn tab → hiển thị panel tương ứng trong cùng widget; widgets khác giữ nguyên. Card action chỉ thông báo demo.
## 5. Quy tắc nghiệp vụ (Business Rules)
BR-01 một tab/panel selected trong mỗi widget. BR-02 Disabled không kích hoạt. BR-03 automatic activation bằng arrows theo orientation,Home/End;Tab qua selected tab rồi panel. BR-04 hidden panel không nhận focus. BR-05 hành động demo không request/navigation. BR-06 reduced motion tắt transition nếu có.
## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
AC01 đủ8/24/23. AC02 labels/icons/badge3/content/layout theo mẫu. AC03 state độc lập,rapid switch đúng. AC04 disabled inactive. AC05 roles/names/unique IDs/relationships/keyboard/focus đúng. AC06 safe demo/no navigation. AC07 mobile/long labels/text enlargement/reduced motion. AC08 resources/sidebar. AC09 báo cáo actual tests và khác biệt.
## 7. Giả định (Assumptions)
Root tabs-pills.html,English/light shell. Font Awesome thay reference glyph. Panel switching đồng bộ,không thêm animation khi không cần.
## 8. Câu hỏi cần xác nhận (Open Questions)
Q001 live xác nhận filled icons home/user/message,badge3;card Special active/link title và Go somewhere. Q002 ArrowRight đi Profile;chọn automatic activation với roving tabindex. Q0038/24/23 live xác nhận;responsive khảo sát tiếp. Q004 Go somewhere là demo thông báo tại chỗ. Không câu hỏi nghiệp vụ chặn.
## 9. Quyết định đã xác nhận (Decisions)
User yêu cầu BA→Analyze→Implement;không technical plan/review. Ready không phải Approved. Safe local action là giả định theo brief,không phải routing thật.
## 10. Rủi ro và phụ thuộc nghiệp vụ
Hidden focus,orientation keyboard,overflow và cạnh tranh shell drawer. Không backend dependency.
