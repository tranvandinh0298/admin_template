# Phân tích nghiệp vụ: Card variants
**Task ID:** 20261110_materio_cards
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261110_materio_cards.md
## 1. Bối cảnh và mục tiêu nghiệp vụ
Xây card family có thể tái sử dụng theo sáu trang Materio;ưu tiên cấu trúc/biến thể,không dựng sáu dashboard hoặc sao chép dữ liệu nghiệp vụ.
## 2. Phạm vi và ngoài phạm vi
cards.html tổng hợp với nội dung trung tính. Không API/chart dataset thật/payment/persistence hoặc commercial media.
## 3. Đối tượng sử dụng (Actors)
Người tích hợp card và người thử bằng pointer/keyboard/touch;người kiểm tra variant coverage.
## 4. Quy trình nghiệp vụ (Business Workflows)
Xem nhóm card→thử demo/menu/tab→collapse/refresh/full-view/remove/reorder. Reload khôi phục card bị remove và thứ tự;refresh local hoàn tất sau2.5giây;không request.
## 5. Quy tắc nghiệp vụ (Business Rules)
BR01 class cấu trúc không phụ thuộc copy/dataset. BR02 collapse chỉbody;aria/focus đồng bộ. BR03 refresh busy/chốngdoubleclick/tựhoàn tất,không spinner vôhạn. BR04 fullview cóexit/Escape/native modal focus vàoverflow restoration. BR05 remove predictable focus;reload restore. BR06 reorder chỉ nhóm6cards,cóMove earlier/later cho keyboard/touch. BR07 neutral actions chỉ status;no network/mutation. BR08 longtext/responsive/reducedmotion/drawer coexist.
## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
AC01 inventory mapping đủsáufamilies. AC02 anatomy/media/alignment/colors/grouping reusable. AC03 advanced/stat/analytics/promo distinctstructures. AC04 collapse/refresh/fullview/remove/reorder local đúng. AC05 headercontrols/tabs/menus accessible. AC06 semantics/focus/busy/visual alternatives. AC07 responsive/zoom/longtext/reducedmotion. AC08 localresources/scoped/drawer. AC09 actualtests/deviations.
### Inventory và quy tắc gộp
| Nhóm | Biến thể bắt buộc | Reference |
|---|---|---|
| Basic anatomy | title/body/action;subtitle/links;body-only;list-only;header/footer;quote;start/center/end alignment | basic |
| Media/navigation | top/bottom/overlay;horizontal media left/right;header tabs vàpills(2enabled+disabled) | basic |
| Colors | 6colors(primary/secondary/success/danger/warning/info) × solid/tint/outline | basic |
| Layout | connected card group3;equal-height grid3 | basic |
| Advanced | leadingicon/trailingstatus list;splitlists;multi-section progress;table;timeline;media detail | advance/analytics |
| Statistics | compacticon metric;change/borderedmetric;multi-metric summary;metric+trend area | statistics |
| Analytics | chart+header period+legend;donut+summary;comparisons | analytics |
| Promotions | compactcongratulation;wideart/text;contrastachievement;upgrade-style action/media | gamifications |
| Actions | combinedcollapse/refresh/expand/remove plus4isolated examples | actions |
| Header elements | badge/status;button;select;supporttext;splitbutton/overflow | actions/advance |
| Reordering | 6colored cards trong1group,draghandle vàmovebuttons | actions |
Business copies/charts of same anatomy được gộp. Transactions/members/courses/shipment không tạo workflow riêng. Visuals dùng CSSbar/donut vàCSSmedia/icon có caption,không chart library. Card widgets khônggánrole interactive khi tĩnh.
## 7. Giả định (Assumptions)
Rootcards.html,English/light shell. Simple CSSvisualization chỉ illustrative;generic media placeholders thay ảnhnhânvật. Fullview native dialog cải thiện reference fullscreenclass. Refresh2.5s theo source thamchiếu. No new dependency.
## 8. Câu hỏi cần xác nhận (Open Questions)
Q001 inventory trên dựa live56basic/22advance/27stats/19analytics/4promo/21actions;không yêu cầu match instancecounts. Q002 source actions xácnhận collapsebody,refresh2.5s,fullscreen/Escape,hide/remove,sortablegroup. Q003 neutral CSSvisuals đủscope theo user. Q004 native HTML5drag+accessiblebuttons,Popper nếu cầnheaderoverlay;native details hạnchế dependency. Q005 fullview closes shell drawer trước;dialog top-layer;responsivecomplex stack. Không businessquestion chặn.
## 9. Quyết định đã xác nhận (Decisions)
User yêu cầu BA→Analyze→Implement và nhấn mạnh variants thay templatecontent. Ready không phải Approved;không plan/review yêu cầu. Inventory dedup là phân tích trongscope.
## 10. Rủi ro và phụ thuộc nghiệp vụ
Scope quá nhiều businesscards,race refreshtimer,fullview focus/overflow,drag accessibility,long titles/headers overflow. Giữ nguyên sharedsource vàunrelatedchanges.
