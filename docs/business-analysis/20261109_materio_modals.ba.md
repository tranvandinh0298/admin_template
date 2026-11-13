# Phân tích nghiệp vụ: Modals Materio
**Task ID:** 20261109_materio_modals
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261109_materio_modals.md
## 1. Bối cảnh và mục tiêu nghiệp vụ
Tạo trang minh họa modal tiêu chuẩn và extended theo mẫu; không có giao dịch nghiệp vụ thật. Người dùng yêu cầu mô phỏng Modals, chưa chỉ định thư viện.
## 2. Phạm vi và ngoài phạm vi
Default, centered, top, video, chuyển hai modal, fullscreen,3sizes,2scroll modes,static backdrop,animation selection; onboarding dọc/ngang có multistep và form; transparent modal. Không có backend, lưu khách hàng, đăng nhập, submit dữ liệu hoặc sửa các trang khác.
## 3. Đối tượng sử dụng (Actors)
Người xem mở/đóng/thử form và onboarding; người kiểm tra đối chiếu mẫu. Không có quyền tài khoản mới.
## 4. Quy trình nghiệp vụ (Business Workflows)
Mở từ launcher→focus vào dialog→thao tác nội dung→đóng và focus về launcher. Chuyển modal giữ một dialog hoạt động, cuối cùng quay về launcher ban đầu. Onboarding Previous/Next/Skip điều khiển bước; submit chỉ báo demo. Video chỉ tải khi yêu cầu và dừng khi đóng. Resize/giảm chuyển động không làm kẹt dialog.
## 5. Quy tắc nghiệp vụ (Business Rules)
BR-01: Một modal hoạt động, background không tương tác, Tab không thoát modal. BR-02: Có exit rõ ràng, static backdrop theo mẫu đã kiểm chứng; không suy Escape từ tên. BR-03: Form không truyền dữ liệu. BR-04: Scroll page được khôi phục sau đóng, close/footer truy cập được. BR-05: animation tôn trọng reduced motion. BR-06: media/ảnh hợp lệ và báo thay thế.
## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
| ID | Kết quả |
| --- | --- |
| AC-01 | Đủ families theo brief, mỗi launcher mở đúng modal. |
| AC-02 | Focus vào/giữ trong dialog, accessible title, hidden dialog không nhận Tab; đóng trả về launcher. |
| AC-03 | Backdrop/Escape/static đúng mẫu hoặc cải thiện rõ; modal-switch không stack backdrop. |
| AC-04 | Size/fullscreen/placement và2scroll modes khác biệt, responsive. |
| AC-05 | Animation selection/reduced motion và thao tác nhanh không kẹt. |
| AC-06 | Video không tự phát khi tải trang, dừng/xóa media khi đóng. |
| AC-07 | Dọc/ngang onboarding đồng bộ bước, indicators; form labeled và không gửi dữ liệu. |
| AC-08 | Drawer/page scroll/focus phục hồi đúng sau close/resize; resources và regression không lỗi. |
## 7. Giả định (Assumptions)
A-01: modals.html gốc/light/English. A-02: form giữ giá trị trong phiên trang; multistep reset bước1 mỗi lần mở. A-03: hình CSS gốc thay minh họa thương mại; video dùng embed được cho phép, có nút tải riêng để tránh request ngoài lúc mở. Đây là giả định không phải câu trả lời riêng.
## 8. Câu hỏi cần xác nhận (Open Questions)
Q-001: nội dung/file khác? Không chặn. Q-002: backdrop/Escape,animation và steps thực tế? Khảo sát trước thiết kế liên quan. Q-003: media riêng? Không chặn theo A-03, báo giới hạn mạng.
## 9. Quyết định đã xác nhận (Decisions)
D-001: người dùng yêu cầu Modals theo URL và chạy toàn workflow. Chưa có BA approval; Ready không phải Approved.
## 10. Rủi ro và phụ thuộc nghiệp vụ
Focus/dialog/drawer,scroll lock,media lifecycle và stale animation là rủi ro chính. Không có API nghiệp vụ. Chưa kiểm thử ở bước BA.
