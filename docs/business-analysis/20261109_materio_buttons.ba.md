# Phân tích nghiệp vụ: Trang minh họa nút theo Materio
**Task ID:** 20261109_materio_buttons
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261109_materio_buttons.md
**Ngày lập:** 2026-11-09

## 1. Bối cảnh và mục tiêu nghiệp vụ
Người dùng cần trang `button.html` để xem và thử các kiểu nút theo mẫu Materio. Trang phải thể hiện hình thức, trạng thái và hành vi tương tác của từng nhóm, có ripple (hiệu ứng gợn sóng khi kích hoạt nút) và hộp thoại SweetAlert hỏi có tiếp tục khi chọn Confirm hoặc Delete.

Mẫu tham chiếu: https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/ui-buttons.html

Kết quả mong muốn là một trang minh họa dễ đối chiếu với mẫu và có thể kiểm tra độc lập. Đây không phải chức năng xác nhận hoặc xóa dữ liệu của một nghiệp vụ thực tế. Tài liệu này phân tích yêu cầu; chưa xác nhận mức độ giống giao diện hoặc hành vi của sản phẩm đã triển khai.

## 2. Phạm vi và ngoài phạm vi
### Trong phạm vi
- Một trang `button.html`, phân chia rõ chín nhóm: Basic Buttons, Rounded Buttons, Label Buttons, Outline Buttons, Text Buttons, Buttons with Icons, Button Sizes, Checkbox/Radio Buttons và Disabled Buttons. Nhóm Checkbox/Radio phải có cả hai loại.
- Hình thức nút, màu sắc áp dụng, kích thước, biểu tượng, trạng thái và cách trình bày bám theo mẫu trong phạm vi các nhóm được yêu cầu.
- Ripple trên nút minh họa đang được phép tương tác.
- Chọn nhiều độc lập bằng checkbox; chọn một trong cùng nhóm bằng radio.
- Hai luồng Confirm và Delete có SweetAlert, lựa chọn tiếp tục và hủy, cùng kết quả minh họa quan sát được.
- Khả năng sử dụng bằng bàn phím, công nghệ hỗ trợ và trên màn hình máy tính/điện thoại.

### Ngoài phạm vi
- Toàn bộ bộ giao diện Materio, các trang thành phần khác hoặc thiết kế lại các layout hiện có.
- API, cơ sở dữ liệu, đăng nhập, phân quyền tài khoản, lưu lựa chọn qua lần tải lại hoặc xóa dữ liệu thật.
- Tạo mã nguồn, kiểm thử hay thiết kế kỹ thuật trong bước BA này.

## 3. Đối tượng sử dụng (Actors)
| Đối tượng | Mục đích và quyền trong phạm vi |
| --- | --- |
| Người xem trang minh họa | Xem nhóm nút, kích hoạt nút được phép tương tác, thay đổi lựa chọn checkbox/radio và thử Confirm/Delete. |
| Người kiểm tra giao diện | Đối chiếu mẫu, kiểm tra trạng thái, ripple, xác nhận/hủy và khả năng truy cập. Không cần vai trò tài khoản riêng. |

Không có yêu cầu đăng nhập hoặc phân quyền nghiệp vụ mới. Mọi trạng thái nút disabled phải được tôn trọng bất kể phương thức tương tác.

## 4. Quy trình nghiệp vụ (Business Workflows)
### WF-01 — Xem và thử nút
1. Người xem mở `button.html`.
2. Trang hiển thị đủ các nhóm, tên nhóm và ví dụ tương ứng.
3. Người xem kích hoạt một nút đang hoạt động; nút phát ripple trong đường bao của nó.
4. Nút thực hiện hành vi của ví dụ nếu có. Nút thông thường không bắt buộc phát sinh kết quả nghiệp vụ ngoài hiệu ứng tương tác.

Nhánh thay thế: khi thử nút disabled, nút không phát ripple, không chạy hành động và không mở hộp thoại. Kích hoạt liên tiếp nút đang hoạt động vẫn cho phản hồi ổn định, không để lại hiệu ứng tồn đọng.

### WF-02 — Thay đổi lựa chọn
1. Người xem kích hoạt một checkbox; trạng thái được chọn chuyển sang không chọn hoặc ngược lại.
2. Các checkbox khác giữ nguyên trạng thái.
3. Người xem kích hoạt một radio; radio đó được chọn và radio đã chọn trước đó trong cùng nhóm được bỏ chọn.
4. Trạng thái nhìn thấy và trạng thái được công nghệ hỗ trợ đọc phải thống nhất.

### WF-03 — Xác nhận hành động Confirm/Delete
1. Người xem kích hoạt Confirm hoặc Delete.
2. SweetAlert nêu rõ hành động đang chờ xác nhận và hỏi có tiếp tục; cung cấp lựa chọn tiếp tục/xác nhận và hủy.
3. Trong khi chờ lựa chọn, hành động minh họa chưa được thực hiện.
4. Nếu người xem đồng ý rõ ràng, trang thể hiện kết quả minh họa tương ứng, không thao tác dữ liệu thật.
5. Khi hộp thoại đóng, focus (vị trí tương tác bằng bàn phím) trở lại nút đã mở hộp thoại.

Nhánh hủy: chọn hủy hoặc đóng hộp thoại theo cơ chế được hỗ trợ thì không thực hiện hành động và không báo thành công. Việc đóng hộp thoại không được hiểu là đồng ý.

Nhánh lỗi phụ thuộc: nếu hộp thoại không thể mở hoặc tải lỗi, không được tự coi là đã xác nhận. Cách hiển thị lỗi sẽ được xác định ở bước thiết kế kỹ thuật; yêu cầu cốt lõi là không tiếp tục khi chưa có sự đồng ý.

## 5. Quy tắc nghiệp vụ (Business Rules)
- **BR-01:** Giữ tên tệp `button.html`; các nhóm có nhãn rõ ràng, không gộp đến mức mất khả năng nhận diện từng loại.
- **BR-02:** Lấy mẫu Materio làm căn cứ đối chiếu hình thức. Danh sách màu, kích thước và chi tiết biểu tượng phải được kiểm tra từ mẫu; BA không tự đặt thêm danh sách chưa xác minh.
- **BR-03:** Ripple nằm trong hình dạng nút, không cản trở thao tác, không làm sai trạng thái lựa chọn và không tồn tại vĩnh viễn sau tương tác.
- **BR-04:** Checkbox độc lập; radio loại trừ lẫn nhau trong cùng nhóm. Không suy diễn rằng các nhóm radio khác nhau phải ảnh hưởng lẫn nhau.
- **BR-05:** Disabled là không tương tác: không chạy hành động, đổi lựa chọn, phát ripple hay mở hộp thoại.
- **BR-06:** Cả Confirm và Delete đều phải hỏi trước bằng SweetAlert. Chỉ lựa chọn đồng ý rõ ràng mới cho phép đi tiếp.
- **BR-07:** Kết quả Confirm/Delete phải quan sát được và thể hiện đúng là minh họa; không xóa hay cập nhật dữ liệu nghiệp vụ thật.
- **BR-08:** Người dùng bàn phím phải nhận biết focus và thao tác được các nút đang hoạt động, checkbox/radio và các lựa chọn hộp thoại. Nút chỉ có biểu tượng phải có tên truy cập được.
- **BR-09:** Không tạo yêu cầu lưu trạng thái lựa chọn qua tải lại trang. Không thay đổi hành vi layout ngoài phạm vi.

## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
| ID | Given / When | Then — Kết quả cần quan sát |
| --- | --- | --- |
| AC-01 | Mở trực tiếp `button.html` | Có đủ chín nhóm trong mục 2; cả checkbox và radio đều có ví dụ. |
| AC-02 | Đối chiếu với mẫu đã mở trong trình duyệt | Các nhóm thể hiện đúng kiểu hình dạng, nền, viền, màu áp dụng, vị trí biểu tượng và khác biệt kích thước; sai khác đáng kể được ghi nhận. |
| AC-03 | Kích hoạt nút đang hoạt động, gồm rounded và outline | Ripple nhìn thấy và được giới hạn trong nút; hành vi vốn có vẫn đúng. |
| AC-04 | Kích hoạt liên tiếp cùng nút | Ripple không bị tồn đọng và nút vẫn sử dụng được. |
| AC-05 | Chọn/bỏ chọn một checkbox | Chỉ checkbox đó đổi trạng thái; trạng thái hiển thị và trạng thái truy cập được thống nhất. |
| AC-06 | Chọn radio khác trong cùng nhóm | Chỉ radio mới được chọn trong nhóm; nhóm khác không bị thay đổi. |
| AC-07 | Thử tương tác với ví dụ disabled | Không có hành động, đổi lựa chọn, ripple hay hộp thoại. |
| AC-08 | Kích hoạt Confirm; lặp lại độc lập với Delete | SweetAlert hỏi có tiếp tục đúng hành động, có lựa chọn đồng ý và hủy; chưa xuất hiện kết quả thành công trước khi đồng ý. |
| AC-09 | Đồng ý trong từng luồng Confirm/Delete | Xuất hiện kết quả minh họa tương ứng, không có thao tác dữ liệu thật. |
| AC-10 | Hủy hoặc đóng hộp thoại theo cách được hỗ trợ | Không thực hiện hành động, không báo thành công; lỗi mở hộp thoại cũng không cho phép tiếp tục. |
| AC-11 | Dùng bàn phím để thao tác trang và đóng hộp thoại | Focus nhìn thấy; các điều khiển đang hoạt động sử dụng được; focus trở về nút mở hộp thoại khi đóng. |
| AC-12 | Xem ở màn hình máy tính và điện thoại | Nhãn đọc được, điều khiển không chồng lấn và không có cuộn ngang ngoài ý muốn. |
| AC-13 | Tải trang và tài nguyên cần thiết | Không thiếu tài nguyên hoặc có lỗi runtime ảnh hưởng chức năng; hành vi layout hiện có được giữ nguyên. |

Các tiêu chí trên là điều kiện kiểm chứng về sau, chưa phải kết quả kiểm thử. Chưa chạy kiểm thử ứng dụng hoặc kiểm tra giao diện bằng trình duyệt trong bước BA.

## 7. Giả định (Assumptions)
- **A-01:** Đặt `button.html` ở thư mục gốc vì người dùng chưa chỉ định vị trí khác.
- **A-02:** Dùng giao diện sáng mặc định và nhãn ví dụ bằng tiếng Anh theo task brief; không mở rộng sang đa ngôn ngữ hoặc dark mode.
- **A-03:** Confirm/Delete chỉ minh họa, không có đối tượng dữ liệu thực tế cần tác động.
- **A-04:** Chín nhóm cùng tương tác đi kèm là một chức năng minh họa thống nhất, chưa cần tách thành task độc lập.

Đây là giả định làm việc, không phải các câu trả lời đã được người dùng xác nhận.

## 8. Câu hỏi cần xác nhận (Open Questions)
| ID | Nội dung | Ảnh hưởng và hướng xử lý hiện tại | Chặn thiết kế? |
| --- | --- | --- | --- |
| Q-001 | Có yêu cầu đặt `button.html` trong thư mục cụ thể không? | Ảnh hưởng đường dẫn truy cập; hiện dùng A-01. | Không |
| Q-002 | Có nội dung bắt buộc cho câu hỏi và kết quả Confirm/Delete không? | Ảnh hưởng câu chữ; hiện dùng nội dung ngắn, rõ hành động và tính minh họa. | Không |
| Q-003 | Có bắt buộc SweetAlert gốc hay cho phép SweetAlert2 không? | Ảnh hưởng lựa chọn thư viện; task brief để ngỏ, cần ghi lựa chọn và lý do trong thiết kế kỹ thuật. | Không |

Không có câu hỏi nghiệp vụ đang chặn thiết kế. Các câu hỏi vẫn mở; việc chuyển trạng thái BA không đồng nghĩa đã nhận được câu trả lời hoặc được người dùng phê duyệt.

## 9. Quyết định đã xác nhận (Decisions)
| ID | Ngày | Nguồn xác nhận | Nội dung |
| --- | --- | --- | --- |
| D-001 | 2026-11-09 | Yêu cầu gốc của người dùng | Tạo `button.html` mô phỏng mẫu Materio, bao gồm đủ các nhóm nút được liệt kê. |
| D-002 | 2026-11-09 | Yêu cầu gốc của người dùng | Có ripple khi bấm nút. |
| D-003 | 2026-11-09 | Yêu cầu gốc của người dùng | Dùng SweetAlert hỏi có tiếp tục cho nút Confirm/Delete. |

Chưa có câu trả lời riêng cho Q-001 đến Q-003. Chưa có yêu cầu phê duyệt BA được người dùng xác nhận; trạng thái hiện tại không phải `Approved`.

## 10. Rủi ro và phụ thuộc nghiệp vụ
- Mức độ giống mẫu phụ thuộc việc kiểm tra bản render và chi tiết từng nhóm. Việc đọc HTML ở bước tạo task chưa đủ để kết luận độ giống giao diện.
- Thư viện hộp thoại và tài nguyên biểu tượng phải sẵn sàng khi sử dụng trang. Nếu phụ thuộc không tải được, luồng xác nhận không được tự động đi tiếp.
- Hiệu ứng hoặc kiểu nút chỉ nhìn đúng nhưng thiếu trạng thái truy cập được sẽ không đáp ứng nhu cầu người dùng bàn phím/công nghệ hỗ trợ.
- Nếu sau này yêu cầu Delete tác động dữ liệu thật, cần phân tích bổ sung đối tượng, quyền, hậu quả và cơ chế xử lý lỗi trước khi triển khai; không suy rộng từ trang minh họa này.

Bước tiếp theo đề xuất: `task-analyze` để khảo sát mã hiện tại và mẫu hiển thị, sau đó `task-plan` để chốt phương án kỹ thuật cùng lựa chọn thư viện.
