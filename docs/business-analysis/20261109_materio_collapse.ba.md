# Phân tích nghiệp vụ: Trang minh họa Collapse theo Materio
**Task ID:** 20261109_materio_collapse
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261109_materio_collapse.md
**Ngày lập:** 2026-11-09

## 1. Bối cảnh và mục tiêu nghiệp vụ
Người dùng yêu cầu mô phỏng trang Collapse của Materio. Collapse là cơ chế hiện/ẩn vùng nội dung thông qua điều khiển kích hoạt, sau đây gọi là trigger; vùng nội dung được gọi là panel.

Mẫu tham chiếu: https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/ui-collapse.html

Mục tiêu là một trang minh họa độc lập cho ba nhóm Basic, Horizontal và Multiple targets, vừa giống cách trình bày của mẫu vừa thể hiện đúng hành vi tương tác. Không có thao tác dữ liệu nghiệp vụ thật.

Theo task brief, HTML mẫu có panel Basic và hai panel Multiple targets không mang lớp show; panel Horizontal có lớp show trong khi trigger khai báo aria-expanded=false. Đây là quan sát HTML, chưa phải trạng thái đã xác minh trong trình duyệt. Không được sao chép sự bất nhất này vào sản phẩm.

## 2. Phạm vi và ngoài phạm vi
### Trong phạm vi
| Nhóm | Điều khiển và nội dung |
| --- | --- |
| Basic | Một link và một button cùng điều khiển một panel; trạng thái cả hai phải đồng bộ. |
| Horizontal | Một trigger điều khiển panel đóng/mở theo chiều rộng. |
| Multiple targets | Hai panel; trigger thứ nhất điều khiển panel 1, trigger thứ hai điều khiển panel 2, trigger còn lại tác động cả hai. |

Bao gồm giao diện, trạng thái ban đầu theo mẫu đã kiểm chứng, chuyển động, thao tác bàn phím, trạng thái truy cập được và responsive.

### Ngoài phạm vi
- API, backend, dữ liệu động, lưu trạng thái qua tải lại, đăng nhập hoặc phân quyền mới.
- Toàn bộ menu, customizer và các thành phần ngoài Collapse của mẫu.
- Thay đổi luồng SweetAlert/button, hành vi Accordion hoặc các chỉnh sửa layout không thuộc task.
- Viết code, kiểm thử hoặc technical plan trong bước BA.

## 3. Đối tượng sử dụng (Actors)
| Đối tượng | Nhu cầu và quyền |
| --- | --- |
| Người xem trang minh họa | Xem và kích hoạt các trigger, so sánh cách hiện/ẩn nội dung. Không cần tài khoản mới. |
| Người kiểm tra giao diện | Đối chiếu mẫu, kiểm tra trạng thái, khả năng truy cập và responsive; không có quyền nghiệp vụ riêng. |

Không phát sinh quyền đọc/ghi dữ liệu. Các link collapse là điều khiển tại trang, không phải liên kết thực hiện tác vụ hoặc điều hướng ra ngoài.

## 4. Quy trình nghiệp vụ (Business Workflows)
### WF-01 — Mở trang
1. Người xem truy cập trang minh họa.
2. Trang hiển thị đủ ba nhóm và các trigger tương ứng.
3. Panel và trạng thái trigger nhất quán với trạng thái ban đầu đã xác minh từ mẫu.

### WF-02 — Đóng/mở Basic
1. Người xem kích hoạt link hoặc button của Basic.
2. Panel đổi trạng thái: đóng thành mở hoặc mở thành đóng.
3. Cả link và button phản ánh cùng trạng thái mới.
4. Các nhóm khác giữ nguyên trạng thái; URL và vị trí điều hướng không bị thay đổi bởi link collapse.

### WF-03 — Đóng/mở Horizontal
1. Người xem kích hoạt trigger của Horizontal.
2. Panel đóng/mở theo chiều rộng và kết thúc ở trạng thái nhất quán.
3. Nội dung ở trạng thái mở đọc được, không gây tràn ngang ngoài ý muốn trên màn hình nhỏ.

### WF-04 — Điều khiển nhiều panel
1. Người xem kích hoạt trigger riêng của panel 1 hoặc panel 2; chỉ panel được chỉ định đổi trạng thái.
2. Người xem kích hoạt trigger tác động cả hai panel.
3. Cả hai panel thay đổi theo hành vi đã xác minh ở mẫu, bao gồm khi trạng thái đầu khác nhau.
4. Các trigger liên quan cập nhật trạng thái truy cập được theo kết quả thực tế.

Không mặc định rằng “Toggle both” có nghĩa luôn mở cả hai hoặc đóng cả hai. Q-003 phải được khảo sát trước khi chốt quy tắc cho trạng thái hỗn hợp.

### WF-05 — Bàn phím và thao tác liên tiếp
1. Người dùng đưa focus (vị trí tương tác bằng bàn phím) tới trigger.
2. Kích hoạt bằng bàn phím tạo kết quả tương đương thao tác chuột; button hỗ trợ Enter/Space và link collapse có hành vi bàn phím phù hợp với vai trò điều khiển.
3. Điều khiển trong nội dung đóng không còn nhận Tab. Nếu đóng panel đang chứa focus, focus phải trở về một điều khiển còn nhìn thấy, phù hợp với panel đó.
4. Bấm liên tiếp hoặc resize trong khi chuyển động không được gây kẹt kích thước hay lệch trạng thái cuối.

Nhánh giảm chuyển động: vẫn mở/đóng được và nhận biết kết quả khi bật tùy chọn reduced motion của hệ thống.

Nhánh lỗi: lỗi tài nguyên làm hỏng hiển thị hoặc tương tác phải được ghi nhận và xử lý trước khi kết luận đạt. Không có quy trình thử lại API hoặc giao dịch vì nội dung minh họa là tĩnh.

## 5. Quy tắc nghiệp vụ (Business Rules)
- **BR-01:** Ba nhóm nằm trong một trang minh họa; không mở rộng sang module khác.
- **BR-02:** Nhiều trigger cùng trỏ tới một panel phải phản ánh cùng trạng thái panel sau thao tác, bất kể trigger nào được dùng.
- **BR-03:** Trigger riêng chỉ thay đổi panel của nó. Không áp dụng quy tắc độc quyền kiểu Accordion: việc mở một panel Multiple targets không tự đóng panel còn lại.
- **BR-04:** Trigger nhiều mục tiêu phải tác động đúng tập panel được chỉ định; hành vi trong trạng thái hỗn hợp tuân theo mẫu đã xác minh, không suy diễn từ nhãn.
- **BR-05:** Trạng thái expanded/collapsed phải chính xác. Đối với trigger nhiều mục tiêu, quy tắc diễn đạt khi các panel khác trạng thái phải được thiết kế rõ và kiểm thử; không khai báo trạng thái không được hỗ trợ chỉ để thể hiện “mixed”.
- **BR-06:** Link collapse hoạt động tại trang, không điều hướng ra ngoài hoặc nhảy vị trí ngoài ý muốn.
- **BR-07:** Nội dung đóng không còn tương tác bằng bàn phím; focus không bị bỏ lại trong vùng đã ẩn. Trigger có focus nhìn thấy và xác định được panel liên quan.
- **BR-08:** Trạng thái ban đầu lấy theo bản hiển thị đã kiểm chứng. Riêng Horizontal phải giải quyết sự bất nhất giữa lớp show và aria-expanded trong HTML mẫu.
- **BR-09:** Nội dung mở dài phải đọc được; resize hoặc thao tác nhanh không làm panel kẹt chiều cao/chiều rộng, nhân đôi nội dung hay tràn trang.
- **BR-10:** Không yêu cầu lưu trạng thái qua tải lại. Giữ nguyên công việc hiện có của người dùng và các task khác.

## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
| ID | Given / When | Then — Kết quả cần kiểm chứng |
| --- | --- | --- |
| AC-01 | Truy cập trang | Có đủ Basic, Horizontal, Multiple targets cùng các trigger/panel trong mục 2. |
| AC-02 | Kích hoạt link Basic rồi button Basic | Cùng một panel được mở/đóng; cả hai trigger luôn phản ánh trạng thái mới; nhóm khác không đổi. |
| AC-03 | Kích hoạt link collapse bằng chuột hoặc bàn phím | Thực hiện đóng/mở tại trang; không đổi URL hoặc gây nhảy vị trí ngoài ý muốn. |
| AC-04 | Kích hoạt Horizontal | Panel thay đổi theo trục chiều rộng, kết thúc đúng trạng thái và không tạo overflow trang ngoài ý muốn. |
| AC-05 | Kích hoạt riêng từng panel Multiple targets | Chỉ panel được chỉ định đổi trạng thái; panel còn lại và nhóm khác giữ nguyên. |
| AC-06 | Kích hoạt Toggle both từ cả hai đóng, cả hai mở và hai trường hợp trạng thái hỗn hợp | Kết quả của từng panel khớp hành vi mẫu đã ghi nhận trong khảo sát; không tự áp dụng quy tắc Accordion. |
| AC-07 | Tải lần đầu sau khi khảo sát mẫu | Panel và trigger đồng nhất; trạng thái Horizontal không giữ lại bất nhất trong HTML mẫu. Bằng chứng xác minh được báo cáo. |
| AC-08 | Dùng bàn phím thao tác các trigger | Có focus nhìn thấy và kích hoạt được; các liên kết giữa trigger và panel đúng, kể cả trigger nhiều mục tiêu. |
| AC-09 | Panel đóng hoặc panel chứa focus bị đóng | Điều khiển ẩn không nhận Tab; focus chuyển tới vị trí điều khiển còn nhìn thấy, không bị mất trong panel đóng. |
| AC-10 | Một panel có nhiều trigger hoặc các mục tiêu có trạng thái khác nhau | Trạng thái truy cập được của mọi trigger liên quan được cập nhật theo quy tắc đã thiết kế, không mâu thuẫn với hiển thị. |
| AC-11 | Bấm nhanh, chuyển giữa các trigger hoặc resize khi đang chuyển động | Mọi panel kết thúc nhất quán với thao tác, không kẹt kích thước hay tồn đọng nội dung. |
| AC-12 | Bật reduced motion | Đóng/mở vẫn rõ ràng, không phụ thuộc hiệu ứng chuyển động kéo dài. |
| AC-13 | Xem ở desktop/mobile với nhãn và nội dung dài | Trigger xuống dòng hợp lý, nội dung đọc được, không chồng lấn hoặc cuộn ngang ngoài ý muốn. |
| AC-14 | Đối chiếu mẫu trong trình duyệt | Ba nhóm bám theo hình thức, khoảng cách, bề mặt và trạng thái của mẫu; sai khác đáng kể được ghi nhận. |
| AC-15 | Tải tài nguyên và kiểm tra phần dùng chung bị tác động | Không lỗi tài nguyên/runtime làm hỏng Collapse; hành vi button, Accordion và layout hiện có được bảo toàn. |

AC-06, AC-07 và phần trạng thái hỗn hợp của AC-10 cần kết quả khảo sát trước khi chốt chi tiết triển khai; chưa thể coi là đã được xác minh chỉ từ HTML. Chưa chạy kiểm thử ứng dụng hoặc trình duyệt trong bước BA.

## 7. Giả định (Assumptions)
- **A-01:** Trang đầu ra là `collapse.html` tại thư mục gốc, theo quy ước các trang button/Accordion.
- **A-02:** Giao diện sáng và nhãn/nội dung ví dụ bằng tiếng Anh; không cần sao chép nguyên văn nội dung demo.
- **A-03:** Tái sử dụng các tài nguyên phù hợp của repo; nếu cần icon, ưu tiên Font Awesome local theo sở thích trước đó, không thêm SVG.
- **A-04:** Cả ba ví dụ là một khả năng minh họa thống nhất, không cần chia task theo từng trigger.

Đây là giả định làm việc, không phải câu trả lời đã được người dùng xác nhận.

## 8. Câu hỏi cần xác nhận (Open Questions)
| ID | Nội dung | Ảnh hưởng và cách xử lý | Mức chặn |
| --- | --- | --- | --- |
| Q-001 | Có yêu cầu tên tệp hoặc vị trí khác `collapse.html` ở gốc không? | Ảnh hưởng URL; hiện dùng A-01. | Không chặn |
| Q-002 | Horizontal thực sự mở hay đóng khi trang mẫu tải xong? | Ảnh hưởng trạng thái đầu và ARIA; task-analyze kiểm tra bản render vì HTML đang bất nhất. | Chặn chốt trạng thái đầu/triển khai phần phụ thuộc, không chặn khảo sát |
| Q-003 | Toggle both tác động thế nào khi chỉ một panel đang mở? | Ảnh hưởng quy tắc và kết quả nghiệm thu; task-analyze thử cả hai trường hợp hỗn hợp, ghi lại kết quả. | Chặn chốt hành vi kết hợp/triển khai phần phụ thuộc, không chặn khảo sát |
| Q-004 | Có nội dung/ngôn ngữ hoặc icon cụ thể ngoài mẫu mặc định không? | Ảnh hưởng câu chữ/hình thức; hiện dùng A-02, A-03. | Không chặn |

Q-002 và Q-003 là điều kiện khảo sát bắt buộc, có thể giải quyết bằng bằng chứng từ mẫu, chưa cần buộc người dùng trả lời. Trạng thái `Ready for technical design` cho phép bắt đầu khảo sát và thiết kế phần đã rõ; không cho phép tự chọn câu trả lời cho hai mục này. Nếu mẫu không truy cập được hoặc kết quả còn mâu thuẫn, giữ phần thiết kế phụ thuộc ở trạng thái provisional/blocked và xin làm rõ trước khi triển khai. Mọi câu hỏi vẫn mở đến khi có bằng chứng hoặc câu trả lời rõ ràng.

## 9. Quyết định đã xác nhận (Decisions)
| ID | Ngày | Nguồn | Nội dung |
| --- | --- | --- | --- |
| D-001 | 2026-11-09 | Yêu cầu gốc của người dùng | Mô phỏng Collapse theo đường dẫn Materio được cung cấp. |

Ba nhóm và cấu trúc trigger/panel kế thừa từ task brief dựa trên quan sát HTML; không ghi nhận chúng như các câu trả lời riêng của người dùng. Chưa có câu trả lời Q-001–Q-004, chưa xác nhận trạng thái Horizontal hoặc hành vi hỗn hợp. Chưa có phê duyệt BA rõ ràng; trạng thái không phải `Approved`.

## 10. Rủi ro và phụ thuộc nghiệp vụ
- Mẫu có dấu hiệu bất nhất về trạng thái Horizontal; sao chép thuộc tính trực tiếp có thể gây sai thông tin cho công nghệ hỗ trợ.
- Trigger nhiều mục tiêu dễ bị diễn giải thành luôn mở/đóng cả hai hoặc áp dụng quy tắc Accordion. Cần thử trạng thái hỗn hợp trước khi chốt.
- Nhiều trigger cùng panel có thể hiển thị trạng thái cũ nếu cập nhật không đồng bộ; phải kiểm thử theo từng đường thao tác.
- Animation chiều rộng có thể làm nội dung tràn màn hình nhỏ hoặc sai kích thước sau resize; yêu cầu cuối là nội dung đọc được và trạng thái ổn định.
- Tái sử dụng CSS/JS phải bảo toàn chỉnh sửa hiện tại và các hành vi button/Accordion đã có.
- Độ giống hình thức phụ thuộc việc xem mẫu trên desktop/mobile; chưa có bằng chứng render trong bước BA.

Bước tiếp theo: `task-analyze #20261109_materio_collapse`, ưu tiên xác minh Q-002, Q-003; sau đó `task-plan` ghi rõ kết quả và quy tắc trạng thái cho trigger nhiều mục tiêu.
