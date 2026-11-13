# Phân tích nghiệp vụ: Typography
**Task ID:** 20261110_materio_typography
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261110_materio_typography.md
## 1. Bối cảnh và mục tiêu nghiệp vụ
Trang typography showcase theo Materio, không thay font/styles toàn dự án.
## 2. Phạm vi và ngoài phạm vi
Bảy cards:Headings,Customizing Headings,Display headings,Paragraph,Inline Text Elements,Blockquote,Lists. Không editor/API/persistence/controls mới.
## 3. Đối tượng sử dụng (Actors)
Người xem so sánh hierarchy/type samples và người kiểm tra semantic/responsive.
## 4. Quy trình nghiệp vụ (Business Workflows)
Mở trang→đọc mẫu headings/text/quotes/lists. Abbreviations có expansion đọc được;term truncate có full text trong bản hiển thị bổ sung,không cần hover.
## 5. Quy tắc nghiệp vụ (Business Rules)
BR01 đúng7cards và nội dung mẫu. BR02 scoped styles,giữ shell. BR03 h1–h6 mẫu là demonstration headings được nhóm/label rõ,không fakeARIA. BR04 abbreviation expansions hiện bằng chú thích. BR05 chỉ designated term ellipsis;fullterm hiện trong chú thích vàaccessible text. BR06 responsive/200%text/longcontent không mất nội dung. BR07 không interaction hoặc font network tại runtime.
## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
AC01 đủ7cards/6headings/6custom/6display/3paragraph/9inline/fourquotes/lists. AC02 hierarchy/font/metrics/content theo mẫu. AC03 native semantics/expansions/citations/lists. AC04 meaningful table headers/full truncated text. AC05 mobile/longtext/zoom. AC06 scoped/resources/sidebar. AC07 static/no unintended network. AC08 actual tests/deviations.
## 7. Giả định (Assumptions)
Root typography.html,English/light shell. FontInterlocal cho main showcase theo reference;không đổi shell. Download official OFLasset nếu khả thi;fallback system chỉ khi không lấy được vàphải báo cáo. Labels/muted tăng tương phản so mẫu nếu cần.
## 8. Câu hỏi cần xác nhận (Open Questions)
Q001 livecustom Bootstrap + small muted heading,lists/nested descriptions xác minh. Q002 referenceInter,không có localInter;chọn vendored official OFL,scope main. Q003 defaultdesktop headings46/38/28/24/18/15px,display1=64px;mobile responsive nhỏ hơn;description alignment khảo sát khi build. Q004 expansion/fullterm hiện chú thích,tăng readability label. Không câu hỏi business chặn.
## 9. Quyết định đã xác nhận (Decisions)
User yêu cầu BA→Analyze→Implement;không plan/review. Ready khôngphảiApproved. Fontscoping và accessibility notes là lựa chọn trong brief,khôngphảiBAapproval riêng.
## 10. Rủi ro và phụ thuộc nghiệp vụ
Font licensing/local availability,display lớn overflow,table shrink,nested lists và truncation. Không backend dependency.
