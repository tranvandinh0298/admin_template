# Phân tích nghiệp vụ: Avatar
**Task ID:** 20261110_materio_avatar
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261110_materio_avatar.md
## 1. Bối cảnh và mục tiêu nghiệp vụ
Showcase Avatar có thể tái sử dụng theo Materio,không quản lý profile/presence thật.
## 2. Phạm vi và ngoài phạm vi
7cards/45avatars:3rows×6sizes;3shapes;4image-status;4label-status;4groups×4members. Không upload/API/persistence hoặc copy commercial portraits.
## 3. Đối tượng sử dụng (Actors)
Người xem/integrator và người thử pointer/keyboard/touch.
## 4. Quy trình nghiệp vụ (Business Workflows)
Xem static variants;hover/focus/tap nhóm cótooltip đểđọcname/+3;Escape/outside đóng;không navigation/memberload.
## 5. Quy tắc nghiệp vụ (Business Rules)
BR01 sizes xs24/sm32/default40/md48/lg56/xl64px. BR02 initialfonts10/12/15/18/24/30px;6color schemes. BR03 imagecropobject-fitcover;4statuses cótextaccessible ngoài color. BR04 staticavatars khôngtabstop;tooltipmembers/count làbuttons local disclosure,khôngprofileaction. BR05 focused/hover groupmember front,pull-up-4px,reducedmotion khôngtranslate/transition. BR06 tooltip plain text,Escape/outside/blur cleanup,hoverpersistence,tap giữmở. BR07 local neutralPNGavatars tựvẽ,không copytemplateassets. BR08 nooverflow/longnames/zoom;drawerclose tooltip.
## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
AC01 đủ7/45/countgroup. AC02 sizes/shapes/colors/crop/status. AC03 groupoverlap/pullup/name/count. AC04 accessibleidentity/status/focus/Escape/reducedmotion. AC05 responsive/longtext/cropratio/zoom. AC06 localassets/scoped/shell/nooperation. AC07 actualtests/substitutions.
## 7. Giả định (Assumptions)
Rootavatar.html,Englishneutralidentities,light shell.4own-code rasterportraitplaceholders dùng lại xuyênexamples,khôngảnhngười thật. Static pullup chỉhover;tooltipgroup vàcount thêmfocus/tap. Defaultgroup khônginteractive.
## 8. Câu hỏi cần xác nhận (Open Questions)
Q001 liveverified7cards/45avatars,default40 táchmd48,size6khôngphải5 tronginitialHTMLobservation. Q002 chọn4localgeneratedPNGthaycommercialportraits. Q003 one tooltip at once,focus/hover/tap/Escape;staticgroups visibleidentitylegend đểtouchđọcđược. Khôngbusinessquestionchặn.
## 9. Quyết định đã xác nhận (Decisions)
Userủyquyền create→BA→Analyze→Implement. Khôngplan/review. ReadykhôngApproved;neutralasset/accessibility là lựa chọnphùhợpbrief.
## 10. Rủi ro và phụ thuộc nghiệp vụ
Indicatorclipping,groupoverlap/hovergap,staledescriptions,longinitials vàimageassets. Tái sửdụng Popperlocal,nosharedsourcechange.
