# Phân tích nghiệp vụ: Tooltips & Popovers
**Task ID:** 20261110_materio_tooltips_popovers
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261110_materio_tooltips_popovers.md
## 1. Bối cảnh và mục tiêu nghiệp vụ
Trang minh họa nội dung trợ giúp nổi theo Materio, không thay navigation toàn hệ thống.
## 2. Phạm vi và ngoài phạm vi
11tooltip và19popover:4hướng,7màu tooltip,7full-color,7header-color vàcustom. Không API/rich HTML/forms trong popover.
## 3. Đối tượng sử dụng (Actors)
Người xem bằng pointer,keyboard và công nghệ hỗ trợ.
## 4. Quy trình nghiệp vụ (Business Workflows)
Tooltip mở hover/focus;popover toggle bằng click/Enter/Space. Đọc nội dung;Escape đóng giữ focus;click ngoài hoặc chuyển focus ra đóng popover. Mỗi lúc một overlay tránh chồng lấn.
## 5. Quy tắc nghiệp vụ (Business Rules)
BR01 tooltip không focusable,không focus theft. BR02 hover nội dung giữ mở;Escape không tự mở lại đến interaction mới. BR03 popover text-only được mô tả bởi nội dung với aria-describedby/controls/expanded. BR04 viewport collision được flip/shift;preferred direction theo từng ví dụ. BR05 textContent,không innerHTML từ dataset. BR06 hidden/inert trigger hoặc drawer mở đóng overlay. BR07 rapid switching không sót state/timer. BR08 không thêm transition nếu không cần;reduced motion tự nhiên không chuyển động component.
## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
AC01 đủ11/19/subgroups. AC02 colors/custom/placements/content đúng. AC03 pointer/keyboard/dismissal nhất quán. AC04 names/relationships/focus/cleanup đúng. AC05 geometry/scroll/resize/longtext/mobile. AC06 rapid/interrupt sạch. AC07 plain text/readability/reduced motion. AC08 resources/sidebar. AC09 actual tests/deviations.
## 7. Giả định (Assumptions)
Root tooltips-popovers.html,English/light shell. Một overlay mỗi lúc và outside/blur/Escape dismissal là cải thiện usability có chủ ý;reference giữ popover sau click ngoài/Escape. Không form hoặc focus trap trong popover.
## 8. Câu hỏi cần xác nhận (Open Questions)
Q001 live11/19 xác minh,custom max-width200px,header tím/body padding16px. Q002 tooltip keyboard focus mở;popover click mở,reference outside/Escape không đóng. Chọn Escape/outside/blur để dễ sử dụng theo brief. Q003 text-only semantic description. Q004 tái sử dụng Popper2 local;không cần Bootstrap dependency. Q005 drawer closes overlays/plaintext/synchronous switching. Không business question chặn.
## 9. Quyết định đã xác nhận (Decisions)
User yêu cầu BA→Analyze→Implement. Không plan/review riêng. BA Ready không phải Approved. Accessibility cải thiện là lựa chọn trong phạm vi brief,không phải phản hồi riêng người dùng.
## 10. Rủi ro và phụ thuộc nghiệp vụ
Collision viewport,hover gap,stale aria-describedby,drawer Escape và nội dung dài. Tái sử dụng asset Popper,không thay shared source.
