# Phân tích nghiệp vụ: Drag & Drop
**Task ID:** 20261110_materio_drag_drop
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261110_materio_drag_drop.md
## 1. Bối cảnh và mục tiêu nghiệp vụ
Showcase kéo thả local theo Materio,với đườngthao tác không cần drag cho keyboard/touch.
## 2. Phạm vi và ngoài phạm vi
5families/9containers/46items banđầu:4metriccards,12images,10tasks,10cloneitems,10handleitems. Không backend/persistence/profileworkflows.
## 3. Đối tượng sử dụng (Actors)
Người thử mouse/touch/keyboard và người tíchhợp sorting.
## 4. Quy trình nghiệp vụ (Business Workflows)
Drag reorder/transfer/copy theo group;hoặcchọnitem từselect rồiMove earlier/later/Move-or-Copy to other list. Announce vịtrí;reloadphụchồiinitialorder.
## 5. Quy tắc nghiệp vụ (Business Rules)
BR01 5groupisolated;cardsintragroup only,images/tasks/handle pairedmove. BR02 clonescrosslist giữsource vànewuniquekey;intralist reorderkhôngclone. BR03 handleonly từgrip;normalcontentkhôngkéo. BR04 boundarybuttonsdisabled;emptylist nhậnitems;copiescólabelnhậndiện. BR05 staticDOMsemanticlist,controlnames/focus/status;no persistence/network. BR06 Escape/touchcancel snapshotrollback nếuđangdrag;resize/draweropen đánhdấu cancelđểrestoresafe khiend. BR07 Sortable animation150ms,reducedmotion0;touchdelay200ms giúpnormalpan. BR08 localneutralavatarPNGsthaysourceportraits.
## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
AC01 5/9/46. AC02 sort/move/clone/handle đúnggroup. AC03 keyboard/non-drag touch complete paths/focus/announcements. AC04 empty/repeat/cancel/uniqueidentity cleanup. AC05 mobile/zoom/longlabel/reducedmotion. AC06 assets/license/shell/nooperation. AC07 actualtests/deviations.
## 7. Giả định (Assumptions)
Rootdrag-drop.html,Englishreference-like tasklabels/samplemetrics;Sortableruntime vendored1.15.6 MIT. Singletoolbar mỗifamily chọnitem/move/copy thay thêmnhiềubuttontrênmỗirow. Reloadresets;no storage.
## 8. Câu hỏi cần xác nhận (Open Questions)
Q001 live4/6/6/5/5/5/5/5/5 xácnhận. Q002 SortableJS officialdocs hỗtrợtouch/groups/clone/handles;chọnpinnedlocalasset. Q003 clonerevert source;unique keys vàcancel snapshot;accessibletoolbar. Khôngbusinessquestionchặn.
## 9. Quyết định đã xác nhận (Decisions)
Userủyquyềncreate→BA→Analyze→Implement. ReadykhôngApproved,no plan/reviewrequested. Neutralimagery vàaccessibilityadapter là lựachọntrongbrief.
## 10. Rủi ro và phụ thuộc nghiệp vụ
CloneIDs/selection,emptydropzones,touchscroll,Escale rollback vàcrossgroup rejection. Khôngsharedsourcechange;thêmlocalSortabledependency/license.
