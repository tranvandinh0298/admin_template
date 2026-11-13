# Phân tích nghiệp vụ: Trang minh họa Alerts theo Materio
**Task ID:** 20261109_materio_alerts
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261109_materio_alerts.md
**Ngày lập:** 2026-11-09

## 1. Bối cảnh và mục tiêu nghiệp vụ
Người dùng cần mô phỏng trang Alerts của Materio để xem các kiểu thông báo trực tiếp trong trang và thử đóng từng thông báo. Đây là inline alert (thông báo nằm trong luồng nội dung), không phải hộp thoại SweetAlert hoặc toast nổi.

Mẫu tham chiếu: https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/ui-alerts.html

Task brief ghi nhận sáu nhóm từ HTML mẫu, gồm các màu và nội dung có tiêu đề/biểu tượng. Chưa xác minh bản render, hiệu ứng đóng hay hành vi screen reader trong bước BA; quan sát HTML không phải bằng chứng kiểm thử.

Mục tiêu là trang minh họa độc lập, dễ đối chiếu hình thức và sử dụng được bằng chuột, bàn phím và màn hình nhỏ. Không có dữ liệu hay giao dịch nghiệp vụ thật.

## 2. Phạm vi và ngoài phạm vi
### Trong phạm vi
| Nhóm | Ví dụ theo brief | Hành vi chính |
| --- | --- | --- |
| Basic Alerts | Primary, Secondary, Success, Danger, Warning, Info, Dark | Hiển thị thông báo cơ bản. |
| Outline Alerts | Bảy màu trên | Hiển thị kiểu viền. |
| Solid Alerts | Bảy màu trên | Hiển thị nền màu đặc. |
| Dismissible Alerts | Bảy màu trên | Cho phép đóng từng thông báo. |
| Alerts with Heading | Success, Danger, Primary | Có tiêu đề, nội dung, biểu tượng và điều khiển đóng. |
| Alerts with Icons | Bảy màu trên | Có biểu tượng đi cùng nội dung. |

Bao gồm cách trình bày, đóng thông báo, khả năng truy cập, phục hồi focus (vị trí tương tác bằng bàn phím), responsive và kiểm chứng tính độc lập của từng thông báo. Số lượng theo brief là 38 ví dụ: năm nhóm bảy ví dụ và một nhóm ba ví dụ.

### Ngoài phạm vi
- SweetAlert, toast, trung tâm thông báo hoặc hệ thống phát thông báo toàn ứng dụng.
- Backend, API, xác thực, phân quyền mới, lưu trữ dữ liệu hay trạng thái đóng lâu dài.
- Tác vụ nghiệp vụ thực tế gắn với thông báo; tự động hết hạn hoặc thêm thông báo động chưa được yêu cầu.
- Thay đổi các trang button, Accordion, Collapse hoặc thiết kế lại layout ngoài nhu cầu trang này.
- Code, technical plan hoặc kiểm thử trong bước BA.

## 3. Đối tượng sử dụng (Actors)
| Đối tượng | Nhu cầu và quyền |
| --- | --- |
| Người xem trang minh họa | Đọc, so sánh các kiểu thông báo và đóng ví dụ có điều khiển đóng. Không cần tài khoản mới. |
| Người kiểm tra giao diện | So sánh mẫu, kiểm tra màu/biểu tượng, đóng thông báo, focus, ngữ nghĩa truy cập và responsive. Không có quyền nghiệp vụ riêng. |

Không phát sinh quyền đọc/ghi dữ liệu. Màu Success/Danger là ý nghĩa của ví dụ, không khẳng định có giao dịch thành công hoặc lỗi thật.

## 4. Quy trình nghiệp vụ (Business Workflows)
### WF-01 — Xem trang và so sánh các kiểu
1. Người xem mở trang minh họa.
2. Trang hiển thị đủ sáu nhóm, các màu tương ứng và ba ví dụ có tiêu đề.
3. Người xem phân biệt được thông báo qua hình thức và nội dung bằng chữ; không phải dựa riêng vào màu hoặc biểu tượng.
4. Thông báo có nội dung dài tự xuống dòng; icon và điều khiển đóng không che nội dung.

### WF-02 — Đóng một thông báo
1. Người xem chọn điều khiển đóng của một thông báo được phép đóng.
2. Chỉ thông báo đó được loại khỏi phần nội dung đang hiển thị, theo hành vi đã xác minh từ mẫu.
3. Các thông báo khác giữ nguyên nội dung và trạng thái.
4. Thông báo đã đóng không để lại điều khiển ẩn có thể nhận focus hoặc tương tác.

Nhánh bàn phím: người xem dùng Tab tới điều khiển đóng và kích hoạt bằng Enter/Space. Khi focus nằm trong thông báo bị đóng, focus chuyển đến một vị trí nhìn thấy, có ý nghĩa; không bị bỏ lại trong phần tử đã loại bỏ. Vị trí cụ thể do thiết kế kỹ thuật xác định, bao gồm trường hợp đóng thông báo cuối trong nhóm.

Nhánh không có điều khiển đóng: ví dụ chỉ hiển thị vẫn giữ nguyên; không tự biến việc nhấp nội dung thành thao tác đóng.

### WF-03 — Thao tác liên tiếp và tải lại
1. Người xem đóng nhiều thông báo liên tiếp hoặc kích hoạt nhanh cùng điều khiển.
2. Mỗi thông báo chỉ được xử lý một lần về mặt kết quả; trang không lỗi hoặc để lại trạng thái chuyển tiếp bị kẹt.
3. Nếu reduced motion được bật, kết quả đóng vẫn rõ ràng mà không cần chờ hiệu ứng dài.
4. Theo giả định hiện tại, tải lại trang khôi phục toàn bộ ví dụ; không lưu trạng thái đóng và không tự động đóng theo thời gian.

Nhánh lỗi: lỗi tài nguyên ảnh hưởng hiển thị hoặc tương tác phải được báo cáo khi kiểm chứng. Không kết luận đạt nếu thông báo hoặc điều khiển đóng không sử dụng được. Không có luồng thử lại API vì không có nguồn dữ liệu động.

## 5. Quy tắc nghiệp vụ (Business Rules)
- **BR-01:** Sáu nhóm thuộc một khả năng minh họa thống nhất; màu và số ví dụ theo mục 2. Không gộp mất tên nhóm.
- **BR-02:** Basic, Outline và Solid phải phân biệt được bằng cách trình bày; Heading/Icon giữ cấu trúc theo mẫu đã kiểm tra.
- **BR-03:** Chỉ thông báo có điều khiển đóng mới được đóng; thao tác chỉ ảnh hưởng đúng thông báo đó.
- **BR-04:** Thông báo đã đóng không còn hiển thị hoặc tương tác. Xóa khỏi DOM hay ẩn là lựa chọn cần đối chiếu mẫu, không phải quyết định nghiệp vụ tự đặt trong BA.
- **BR-05:** Mọi điều khiển đóng có tên truy cập được, focus nhìn thấy và thao tác bàn phím phù hợp. Đóng thông báo đang chứa focus phải giữ liên tục vị trí thao tác cho người dùng.
- **BR-06:** Ý nghĩa có thể hiểu qua chữ, không phụ thuộc duy nhất vào màu hoặc icon. Icon trang trí không tạo thông tin đọc lặp không cần thiết.
- **BR-07:** Ngữ nghĩa alert phải phù hợp với ví dụ. Việc HTML có role=alert không tự chứng minh thông báo được screen reader đọc khi tải trang; không tự thêm nguồn thông báo động để phục vụ kiểm thử.
- **BR-08:** Nội dung và tiêu đề dài được xuống dòng; vùng đóng có vị trí và diện tích tương tác không bị che/cắt trên mobile.
- **BR-09:** Nếu có animation đóng, phải kết thúc nhất quán khi bấm nhanh hoặc bật giảm chuyển động; không để phần tử vô hình nhận Tab.
- **BR-10:** Tái sử dụng Font Awesome local theo brief và sở thích đã có, không thêm SVG. Không thêm SweetAlert vì đây là thông báo trong trang.
- **BR-11:** Không thay đổi hành vi đã có của các thành phần khác hoặc ghi đè chỉnh sửa ngoài task.

## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
| ID | Given / When | Then — Kết quả cần kiểm chứng |
| --- | --- | --- |
| AC-01 | Mở trang | Có đủ sáu nhóm rõ tên và 38 ví dụ với màu/phân bổ theo mục 2. |
| AC-02 | So sánh Basic, Outline và Solid | Ba cách trình bày khác biệt, bám theo bản render mẫu đã xác minh. |
| AC-03 | Xem ba Heading alert | Có tiêu đề, nội dung, icon và điều khiển đóng; phân cấp nội dung rõ ràng. |
| AC-04 | Xem Icon alert ở desktop/mobile | Icon tương đương mẫu, thẳng hàng phù hợp với chữ và không che nội dung khi xuống dòng. |
| AC-05 | Chọn đóng một Dismissible hoặc Heading alert | Chỉ thông báo đó biến mất khỏi nội dung đang hiển thị; thông báo khác không đổi. |
| AC-06 | Dùng Tab, Enter, Space với điều khiển đóng | Tên truy cập được đúng, focus nhìn thấy và thao tác đóng thực hiện được. |
| AC-07 | Đóng thông báo chứa focus, kể cả ví dụ cuối trong nhóm | Focus chuyển tới vị trí còn nhìn thấy và có ý nghĩa; không mất vào phần tử bị đóng. |
| AC-08 | Sau khi đóng | Không còn điều khiển ẩn nhận Tab hoặc có thể kích hoạt từ thông báo đó. |
| AC-09 | Đọc thông báo không dựa vào màu | Nội dung bằng chữ vẫn truyền đạt ý nghĩa; icon trang trí không gây đọc lặp không cần thiết. |
| AC-10 | Kiểm tra ngữ nghĩa truy cập | Alert semantics và accessible names phù hợp; kết quả screen reader chỉ được khẳng định nếu thực sự kiểm tra. |
| AC-11 | Dùng nhãn/tiêu đề/nội dung dài ở desktop, mobile và landscape | Không overlap, cắt close control hoặc overflow ngang ngoài ý muốn; nội dung đọc được. |
| AC-12 | Kích hoạt đóng nhanh/liên tiếp | Không lỗi runtime, không nhân đôi xử lý và không kẹt chuyển trạng thái. |
| AC-13 | Bật reduced motion | Đóng được thông báo với kết quả rõ ràng, không để focus trong nội dung vô hình. |
| AC-14 | Tải lại trang | Toàn bộ ví dụ xuất hiện lại theo giả định không lưu trạng thái đóng; không có tự động hết hạn. |
| AC-15 | Tải tài nguyên và kiểm tra vùng dùng chung bị tác động | Tài nguyên local hoạt động, không có lỗi làm hỏng Alerts; hành vi layout/button/Accordion/Collapse được bảo toàn. |
| AC-16 | Đối chiếu mẫu và báo cáo hoàn thành | Bao phủ sáu nhóm ở desktop/mobile, nêu sai khác đáng kể và giới hạn kiểm chứng; không ghi kiểm thử chưa thực hiện. |

Các tiêu chí là điều kiện nghiệm thu, chưa phải kết quả. Chưa chạy kiểm thử ứng dụng, trình duyệt hoặc screen reader trong bước BA.

## 7. Giả định (Assumptions)
- **A-01:** Tên tệp là `alerts.html` ở thư mục gốc, theo quy ước các trang minh họa trước.
- **A-02:** Dùng giao diện sáng và nhãn/nội dung mẫu bằng tiếng Anh; không cần sao chép nguyên văn demo.
- **A-03:** Các thông báo bắt đầu hiển thị, xuất hiện lại sau reload; không lưu trạng thái đóng hoặc tự hết hạn. Kiểm tra mẫu trước khi chốt trạng thái khởi tạo.
- **A-04:** Dùng Font Awesome local để thay thế biểu tượng tương đương; glyph cụ thể xác định sau khi xem mẫu.
- **A-05:** Giữ sáu nhóm trong một task vì cùng phục vụ một trang minh họa thống nhất.

Các giả định này không phải câu trả lời đã được người dùng xác nhận riêng.

## 8. Câu hỏi cần xác nhận (Open Questions)
| ID | Nội dung | Ảnh hưởng và hướng xử lý | Chặn? |
| --- | --- | --- | --- |
| Q-001 | Có yêu cầu tên tệp/vị trí khác `alerts.html` ở gốc không? | Ảnh hưởng đường dẫn; hiện dùng A-01. | Không |
| Q-002 | Mẫu xóa hay ẩn alert khi đóng, có animation không? | Ảnh hưởng việc tái hiện và kiểm thử; task-analyze phải kiểm tra tương tác, ghi nhận khác biệt nếu cần cải thiện focus. | Chặn chốt chi tiết dismissal trước khi có bằng chứng; không chặn khảo sát |
| Q-003 | Có nội dung, ngôn ngữ hoặc glyph icon bắt buộc khác mẫu tương đương không? | Ảnh hưởng trình bày; hiện dùng A-02/A-04. | Không |
| Q-004 | Các ví dụ đều hiển thị khi tải và trở lại sau reload như giả định không? | Ảnh hưởng trạng thái đầu; khảo sát mẫu để xác minh A-03. Không tự thêm persistence hay timer. | Không chặn khảo sát; cần đối chiếu trước khi hoàn thiện |

Không có câu hỏi nghiệp vụ hiện bắt buộc người dùng trả lời để bắt đầu thiết kế. Q-002 là điều kiện khảo sát trước khi chốt cơ chế đóng; nếu mẫu không truy cập được hoặc kết quả mâu thuẫn, ghi rõ phần chưa xác minh và không tự nhận đã tái hiện đúng. Các câu hỏi vẫn mở đến khi có bằng chứng hoặc câu trả lời; trạng thái BA không tự đóng chúng.

## 9. Quyết định đã xác nhận (Decisions)
| ID | Ngày | Nguồn | Nội dung |
| --- | --- | --- | --- |
| D-001 | 2026-11-09 | Yêu cầu gốc của người dùng | Mô phỏng Alerts theo đường dẫn Materio được cung cấp. |

Sáu nhóm, màu và ví dụ Heading kế thừa từ task brief dựa trên HTML; không ghi như câu trả lời riêng của người dùng. Chưa có câu trả lời cho Q-001–Q-004 và chưa có phê duyệt BA rõ ràng. Trạng thái hiện tại không phải `Approved`.

## 10. Rủi ro và phụ thuộc nghiệp vụ
- Xem mã HTML chưa đủ kết luận về màu thực tế, contrast, spacing, hiệu ứng đóng hoặc cách thông báo được công nghệ hỗ trợ đọc.
- Đóng alert chứa focus có thể làm người dùng bàn phím mất vị trí; cần quy tắc phục hồi rõ ở technical plan và kiểm tra trường hợp cuối nhóm.
- Nội dung dài/icon/close control dễ chồng lấn trên màn hình nhỏ; phải kiểm thử bằng nội dung dài, không chỉ đếm ví dụ.
- Vai trò alert trên nhiều thông báo tĩnh có thể tạo trải nghiệm đọc khác nhau giữa screen reader; báo cáo giới hạn, không tự khẳng định khả năng thông báo thời gian thực.
- Các tệp dùng chung và chỉnh sửa hiện tại thuộc nhiều task; chỉ thay đổi phần liên quan có bằng chứng và snapshot theo workflow ở bước triển khai.
- Không có phụ thuộc dữ liệu hoặc dịch vụ bên ngoài cho nghiệp vụ minh họa; khả năng truy cập mẫu là phụ thuộc kiểm chứng hình thức.

Bước tiếp theo: `task-analyze #20261109_materio_alerts`, ưu tiên xác minh đóng thông báo, trạng thái sau reload và cấu trúc Heading/Icon; sau đó `task-plan`.
