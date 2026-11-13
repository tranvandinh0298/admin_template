# Phân tích nghiệp vụ: Navbar Materio
**Task ID:** 20261109_materio_navbar
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261109_materio_navbar.md
## 1. Bối cảnh và mục tiêu nghiệp vụ
Trang minh họa các kiểu navbar theo Materio, không thay toàn bộ navigation của ứng dụng. Người dùng yêu cầu chạy đủ workflow; chưa phê duyệt BA riêng.
## 2. Phạm vi và ngoài phạm vi
15ví dụ: Example;3Supported content (text,input group,button);2mega(click/hover);8color schemes;Navbar Theme. Không có search/auth/purchase/API thật,không sửa các trang khác.
## 3. Đối tượng sử dụng (Actors)
Người xem thử links,collapse,dropdown,mega và form; người kiểm tra đối chiếu mẫu. Không có quyền dữ liệu mới.
## 4. Quy trình nghiệp vụ (Business Workflows)
Mở trang→mở nội dung navbar trên màn hình hẹp→mở dropdown/mega→dùng item/form demo→đóng/thoát bằng keyboard. Resize giữ state nhất quán; toggle chỉ tác động navbar của nó. Form submit chỉ báo demo,không gửi dữ liệu.
## 5. Quy tắc nghiệp vụ (Business Rules)
BR-01: độc lập giữa15navbar; background shell vẫn hoạt động. BR-02: hover có đường click/keyboard. BR-03: hidden menu không nhận Tab,Escape đóng và trả focus. BR-04: disabled không làm gì; action/search/signin/buy không request. BR-05: Navbar Theme chỉ là styling nếu mẫu không có switch. BR-06: giữ label/focus đọc được trên mọi màu,không role=menu cho form hỗn hợp.
## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
| ID | Kết quả |
| --- | --- |
| AC-01 | Đủ15ví dụ và inventory theo brief. |
| AC-02 | Collapse riêng từng navbar,expanded/visibility đồng bộ theo breakpoint. |
| AC-03 | Dropdown/mega dùng pointer/keyboard/hover alternative,Escape/focus và outside close đúng. |
| AC-04 | Mega đủ grouped links/list/form,form labeled/editable và không gửi dữ liệu. |
| AC-05 | Disabled không hoạt động;search/action không request hoặc navigation ngoài ý muốn. |
| AC-06 |8màu vàTheme đọc được,Font Awesome local,names/focus hợp lệ. |
| AC-07 | Long labels/mobile/landscape/resize không overflow,menu nội dung truy cập được. |
| AC-08 | Drawer coexistence,resources/regression pass;khác biệt và giới hạn báo cáo. |
## 7. Giả định (Assumptions)
A-01:navbar.html root/light English. A-02:action là demo thông báo status. A-03:Theme không phải global switch nếu không có bằng chứng. Đây là giả định chưa có trả lời riêng.
## 8. Câu hỏi cần xác nhận (Open Questions)
Q-001:tên/file khác?không chặn. Q-002:breakpoint,mega/hover/Theme thực tế?khảo sát trước thiết kế phụ thuộc. Q-003:wording/links thật?không chặn theo demo scope.
## 9. Quyết định đã xác nhận (Decisions)
D-001:user yêu cầuNavbar theo URL và full workflow. Không có BA approval;Ready không phảiApproved.
## 10. Rủi ro và phụ thuộc nghiệp vụ
Mega overflow,form credentials và drawer/menu focus xung đột là rủi ro chính. Không có backend dependency. Chưa chạy application test ở BA.
