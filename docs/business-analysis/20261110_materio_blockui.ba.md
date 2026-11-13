# Phân tích nghiệp vụ: Block UI
**Task ID:** 20261110_materio_blockui
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261110_materio_blockui.md
## 1. Bối cảnh và mục tiêu nghiệp vụ
Showcase chặn tương tác trong phạm vi xác định,có thể bỏblock an toàn;không công việc server thật.
## 2. Phạm vi và ngoài phạm vi
5groups/26startvariants/5remove:section/card/page/form×5;options×6spinner. Không backend,formsubmit thật,persistence hoặcglobalretrofit.
## 3. Đối tượng sử dụng (Actors)
Người thử pointer/keyboard,tích hợp scopedblocking vàkiểm traaccessibility.
## 4. Quy trình nghiệp vụ (Business Workflows)
Chạy action/chọn scope demo→loading overlay tối giản chặn vùng khi action pending→tự release khi action hoàn tất;Cancel/Escape là phụ→khôi phục state/focus. Outside localblock vẫn dùngđược.
## 5. Quy tắc nghiệp vụ (Business Rules)
BR01 localtargets độc lập,mỗi target1record;replacement hủy timercũ. BR02 default/overlay/spinner/custom tự release khi demo action hoàn tất sau2.5s;multiple Please wait→Almost done1.6s→Success3.2s→release4.8s. BR03 overlay chỉspinner/message,khôngcardsurface;Cancel nhỏ là đường thoát phụ;5controls ngoài vùngbổsung idleunblock harmless. BR04 localcontent inert,busy snapshotexact;formvalues giữnguyên. BR05 page native modal blockshell vàoverflowpreserved;closesidebarfirst,onepageblock. Localtimerscontinueunderpageblock;stateđộc lập. BR06 Escape đóngblockchứafocus,nếukhôngthìblockmớinhất;pageưu tiên. BR07 restorefocus chỉ khi focus thuộcblock,khôngstealoutside. BR08 reducedmotion dừngspinner;plain text/status;no network.
## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
AC01 đủ5/26/5. AC02 scope/treatment/spinners/stages. AC03 inertpointerkeyboard/outsidelocal/busy/status/unblock. AC04 cancel/replace/stages cleanup. AC05 exactstate/formvalues/concurrency/sidebar. AC06 responsive/longtext/zoom/reducedmotion. AC07 localresources/norequest/actualtests.
## 7. Giả định (Assumptions)
blockui.html,Englishneutralcontent,light shell. Focusedcustomcontroller thayNotiflix đểkhôngvendorSVGspinners vàthêm inert/focus/state restoration. CSS/FontAwesome indicators tươngđươngfamily,khôngclaimglyphidentical. No newdependency.
## 8. Câu hỏi cần xác nhận (Open Questions)
Q001 live26start/fiveremove,section targetcontent,card/options fullcard,formregion,pageviewport. Reference noinert;thêmkeyboardblocking. Q002 focusedcontroller/nativepagedialog+CSS/FA phùhợp. Q003 localindependence/page priority/alwaysunblock theoBR. Khôngbusinessquestionchặn.
## 9. Quyết định đã xác nhận (Decisions)
Userủyquyềncreate→BA→Analyze→Implement. No plan/review. ReadykhôngApproved. Timer1.6stage gầnsource1610ms;accessibility/cancelpolicy là lựa chọn trongbrief.
## 10. Rủi ro và phụ thuộc nghiệp vụ
Staletimers/inertfocus/fullpageoverflow,reachable unblock trênlongtargets vàsidebarcompetition. KhôngAPIdependency;khôngsharedsourcechange.

## Điều chỉnh theo phản hồi người dùng
Người dùng xác nhận Block UI phải chặn interface trong lúc action xử lý,không bật thêm card có nhiều thành phần. Thay manual-only lifecycle bằng action-bound completion;Form Submit vàRun demo action minh họa Promise pending. Bỏ background/shadow/border của panel,giữ spinner+Processing vàCancel nhỏ. Public BlockUI.run(scope, operation, launcher) dùng Promise/finally vàAbortSignal;unblock huỷ signal đểoperation hợp tác dừng;stale operation không được đóngblock mới. Không thay immutable brief.
