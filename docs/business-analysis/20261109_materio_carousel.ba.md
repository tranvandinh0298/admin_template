# Phân tích nghiệp vụ: Carousel bằng Swiper
**Task ID:** 20261109_materio_carousel
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261109_materio_carousel.md

## 1. Bối cảnh và mục tiêu nghiệp vụ
Mô phỏng phần Swiper của trang Carousel Materio. Người dùng xác nhận dùng Swiper là đủ, không cần hai ví dụ Bootstrap riêng. Mục tiêu là xem và thử các kiểu chuyển slide, điều khiển và thư viện ảnh có thumbnail (ảnh xem trước).

## 2. Phạm vi và ngoài phạm vi
Trong phạm vi: 11 nhóm Default, With arrows, With pagination, With progress, With scrollbar, Vertical, Multiple slides, 3D coverflow effect, 3D cube effect, 3D flip effect, Thumbs Gallery. Không có backend, CMS, upload, dữ liệu động, lưu trạng thái hoặc Bootstrap Carousel riêng.

## 3. Đối tượng sử dụng (Actors)
Người xem mở trang, chuyển slide và chọn thumbnail. Người kiểm tra đối chiếu các biến thể và khả năng truy cập. Không yêu cầu tài khoản hay quyền mới.

## 4. Quy trình nghiệp vụ (Business Workflows)
1. Mở trang và xem slide đầu của từng ví dụ.
2. Vuốt/kéo hoặc dùng điều khiển tương ứng để chuyển slide; trạng thái điều khiển cập nhật theo slide.
3. Chọn thumbnail để đổi ảnh chính; đổi ảnh chính cập nhật thumbnail được chọn.
4. Dùng bàn phím tại một ví dụ chỉ tác động ví dụ đó. Resize không làm mất đồng bộ.
Nhánh lỗi: nếu thư viện không tải được, hiển thị nội dung/nêu lỗi dễ hiểu, không tự nhận carousel hoạt động. Không có API cần thử lại.

## 5. Quy tắc nghiệp vụ (Business Rules)
- BR-01: Đủ 11 nhóm, các instance độc lập trừ cặp gallery/thumbnail.
- BR-02: Không tự thêm autoplay/loop nếu mẫu Swiper không bật; không suy từ ví dụ Bootstrap.
- BR-03: Controls có tên, focus rõ; slide ngoài màn hình không giữ điều khiển nhận Tab.
- BR-04: Tôn trọng reduced motion; nội dung và trạng thái cuối vẫn sử dụng được.
- BR-05: Dùng hình gốc hoặc tài nguyên được phép; báo cáo khác biệt so với ảnh thương mại. Giữ nguyên công việc khác trong repo.

## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
| ID | Kết quả cần kiểm chứng |
| --- | --- |
| AC-01 | 11 nhóm dùng Swiper, không cần Bootstrap Carousel. |
| AC-02 | Vuốt/kéo và controls của từng nhóm hoạt động, không đổi nhóm khác. |
| AC-03 | Pagination/progress/scrollbar đồng bộ vị trí slide; vertical đổi theo trục dọc. |
| AC-04 | Multiple slides thích ứng viewport; coverflow/cube/flip có hiệu ứng tương ứng. |
| AC-05 | Thumbnail và main gallery đồng bộ hai chiều, kể cả thao tác nhanh. |
| AC-06 | Bàn phím chỉ điều khiển vùng focus, controls có tên và focus; không có focus trap ngoài slide hiện tại. |
| AC-07 | Reduced motion hoạt động; không có autoplay ngoài quyết định rõ ràng. |
| AC-08 | Desktop/mobile/landscape và resize không tràn trang hoặc cắt controls; thao tác chạm không khóa cuộn trang không cần thiết. |
| AC-09 | Tài nguyên local tải được; không lỗi runtime; hình thay thế và giới hạn kiểm chứng được báo cáo. |

## 7. Giả định (Assumptions)
A-01: root carousel.html; light theme, nhãn tiếng Anh. A-02: hình minh họa gốc được chấp nhận thay ảnh demo, cần báo cáo. A-03: không có nội dung nghiệp vụ động. Đây là giả định, không phải câu trả lời riêng của người dùng.

## 8. Câu hỏi cần xác nhận (Open Questions)
- Q-001: Có tên tệp/nội dung/ảnh bắt buộc không? Không chặn, dùng A-01/A-02.
- Q-002: Các cấu hình Swiper thực tế của mẫu là gì? Cần khảo sát trước thiết kế phần liên quan; không buộc người dùng trả lời nếu có thể xác minh.
Không có câu hỏi nghiệp vụ chặn bắt đầu khảo sát. Nếu bằng chứng mâu thuẫn, làm rõ trước phần triển khai phụ thuộc.

## 9. Quyết định đã xác nhận (Decisions)
D-001: Yêu cầu gốc: mô phỏng Carousel, dùng Swiper là đủ. Chưa có phê duyệt BA rõ ràng, không đặt Approved. Q-001/Q-002 chưa có câu trả lời người dùng.

## 10. Rủi ro và phụ thuộc nghiệp vụ
3D, gallery và nhiều instance có thể gây overflow hoặc lệch focus. Phụ thuộc thư viện Swiper và khả năng kiểm tra mẫu. Kiểm thử browser không thay thế kiểm tra screen reader. Chưa chạy kiểm thử trong bước BA.
