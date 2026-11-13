# Phân tích nghiệp vụ: Trang minh họa Badge theo Materio
**Task ID:** 20261109_materio_badges
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261109_materio_badges.md
**Ngày lập:** 2026-11-09

## 1. Bối cảnh và mục tiêu nghiệp vụ
Người dùng yêu cầu mô phỏng Badge theo trang Materio. Badge là nhãn nhỏ thể hiện trạng thái, số lượng hoặc nội dung ngắn; có thể đứng riêng hoặc gắn lên thành phần chứa nó, sau đây gọi là host. Dot là chấm báo trạng thái/thông báo.

Mẫu: https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/ui-badges.html

Trang nhằm giúp xem và so sánh các kiểu nhãn, hình dạng, bộ đếm và vị trí gắn thông báo trong template tĩnh hiện có. Đây không phải hệ thống thông báo thực tế. Các giá trị trong brief được xem là ví dụ hiển thị, không suy ra số lượng dữ liệu thật hoặc thuật toán cập nhật.

Task brief ghi nhận 12 nhóm qua HTML. Chưa kiểm tra bản render, tương tác hoặc hình ảnh avatar trong bước BA; không coi quan sát mã là bằng chứng độ giống giao diện.

## 2. Phạm vi và ngoài phạm vi
### Trong phạm vi
| Nhóm theo brief | Nội dung cần minh họa |
| --- | --- |
| Basic Badges | Nhãn màu đặc, dạng mặc định và rounded-pill (viên thuốc). |
| Label Badges | Nhãn nền nhẹ, dạng mặc định và pill. |
| Button with Badges | Bộ đếm nằm trong button, theo các kiểu button của mẫu. |
| Badge Circle & Square Style | Nhãn số dạng tròn/vuông, basic và label. |
| Badge Circle & Square With Icon | Nhãn icon dạng tròn/vuông, basic và label. |
| Dots Style | Các chấm trạng thái/thông báo theo màu mẫu. |
| Button with Badges Notification | Bộ đếm và dot gắn tại mép/vị trí thông báo của button. |
| Notifications With Icons | Thông báo dạng số gắn với host biểu tượng. |
| Badges Position | Các vị trí đặt badge theo mẫu. |
| Badge Overlaps for Shapes | Badge chồng có chủ đích lên các host hình dạng/avatar. |
| Maximum Values | Các nhãn giá trị 99, 99+, 999+. |
| Custom label Badges | Nội dung nhãn tùy chỉnh theo ví dụ mẫu đã xác minh. |

Basic/Label phải có Primary, Secondary, Success, Danger, Warning, Info, Dark ở cả hai hình dạng. Số lượng, glyph, vị trí và nhãn chính xác của các nhóm còn lại cần khảo sát mẫu trước khi chốt thiết kế.

### Ngoài phạm vi
- Dữ liệu thông báo thật, bộ đếm thời gian thực, API, backend, lưu trạng thái, xác thực hoặc cơ sở dữ liệu.
- Inbox, trung tâm thông báo, đánh dấu đã đọc, cập nhật count khi bấm hoặc tự động tính ngưỡng hiển thị.
- Tác vụ phá hủy, điều hướng bên ngoài hoặc luồng nghiệp vụ mới cho các host mẫu.
- Thay đổi hành vi button/SweetAlert, Alerts, Accordion, Collapse hoặc layout không thuộc task.
- Code, technical plan và kiểm thử trong bước BA.

## 3. Đối tượng sử dụng (Actors)
| Đối tượng | Nhu cầu và quyền |
| --- | --- |
| Người xem trang minh họa | Xem và so sánh 12 nhóm; thử trạng thái tương tác của host nếu có. Không cần tài khoản mới. |
| Người kiểm tra giao diện | Đối chiếu mẫu, kiểm tra bố cục, lớp chồng, nội dung truy cập được và responsive. Không có quyền nghiệp vụ riêng. |

Không phát sinh quyền đọc/ghi dữ liệu. Giá trị count, nhãn trạng thái và avatar chỉ phục vụ minh họa.

## 4. Quy trình nghiệp vụ (Business Workflows)
### WF-01 — Xem và so sánh kiểu badge
1. Người xem mở trang.
2. Trang hiển thị đủ 12 nhóm có tên rõ ràng.
3. Người xem so sánh màu, kiểu nền, hình dạng, nhãn số/icon và nhãn tùy chỉnh.
4. Nội dung ví dụ truyền đạt ý nghĩa bằng chữ hoặc tên truy cập được; không phải đoán từ màu hoặc icon không có ngữ cảnh.

### WF-02 — Xem badge trên host
1. Người xem xem badge ở trong button hoặc chồng lên mép host.
2. Badge nằm đúng vị trí dự kiến, không bị cắt bởi đường bao, góc bo, hiệu ứng ripple hoặc card chứa ví dụ.
3. Khi kích thước màn hình thay đổi, host và badge giữ quan hệ vị trí; các ví dụ khác xuống dòng hợp lý.
4. Người dùng bàn phím chỉ đi qua thành phần có tương tác thật, không phải từng badge tĩnh.

Nếu host là button/link, phải giữ ngữ nghĩa và focus (vị trí tương tác bằng bàn phím) phù hợp. Kích hoạt host không tự giảm count, mở luồng thông báo, gửi dữ liệu hoặc thực hiện tác vụ ngoài phạm vi.

### WF-03 — Xem nhãn giá trị lớn và nội dung dài
1. Người xem thấy các ví dụ 99, 99+, 999+ và custom labels.
2. Nhãn hiển thị đầy đủ ở hình dạng/vị trí đã xác minh; không cắt dấu cộng hoặc chữ.
3. Khi nhãn dài hơn hoặc có nhiều chữ số, nội dung vẫn đọc được và không đè lên ví dụ không liên quan.

Không suy ra quy tắc “trên 99 tự chuyển 99+” từ ví dụ Maximum Values. Theo phạm vi hiện tại, đây là chuỗi tĩnh; thuật toán chuyển đổi không được yêu cầu.

Nhánh lỗi: tài nguyên icon/ảnh hoặc CSS lỗi làm mất ý nghĩa hoặc hỏng bố cục phải được ghi nhận trước khi kết luận đạt. Không có luồng thử lại API vì không có nguồn dữ liệu động.

## 5. Quy tắc nghiệp vụ (Business Rules)
- **BR-01:** Giữ đủ 12 nhóm nhận diện được; không gộp làm mất các khả năng minh họa khác nhau.
- **BR-02:** Basic và Label có đủ bảy màu, dạng mặc định và pill; các nhóm khác bám theo danh mục mẫu được xác minh.
- **BR-03:** Bộ đếm, dot và nhãn tùy chỉnh là nội dung minh họa tĩnh, không có tác động nghiệp vụ khi bấm host.
- **BR-04:** Chồng lớp giữa badge và host là chủ đích; va chạm giữa các ví dụ khác nhau, cắt count hoặc tràn trang là lỗi.
- **BR-05:** Badge gắn host phải giữ vị trí tương đối khi nội dung, hình dạng host hoặc viewport thay đổi.
- **BR-06:** Nếu có ripple, hiệu ứng phải giữ đúng đường bao host mà không cắt badge đặt ngoài đường bao; không đánh đổi một trong hai bằng cách che lỗi.
- **BR-07:** Badge tĩnh không tạo Tab stop hoặc giả làm button. Host tương tác giữ ngữ nghĩa native, tên truy cập được và focus nhìn thấy.
- **BR-08:** Count, dot và icon có ý nghĩa độc lập phải có ngữ cảnh truy cập được. Icon chỉ trang trí được ẩn khỏi công nghệ hỗ trợ để tránh lặp thông tin.
- **BR-09:** Không dùng màu làm phương tiện duy nhất truyền đạt ý nghĩa. Số hoặc icon đứng riêng không được coi là tự đủ ngữ cảnh.
- **BR-10:** Dùng Font Awesome local, không thêm SVG. Nếu cần avatar, dùng tài nguyên được phép hoặc placeholder gốc; báo cáo thay thế thay vì khẳng định giống ảnh thương mại.
- **BR-11:** Nhãn dài và giá trị nhiều chữ số đọc được ở desktop/mobile; không tạo overflow ngoài ý muốn hoặc clipping badge.
- **BR-12:** Không sửa hoặc ghi đè công việc ngoài task; không tự thêm dịch vụ thông báo, persistence hay dependency không cần thiết.

## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
| ID | Given / When | Then — Kết quả cần kiểm chứng |
| --- | --- | --- |
| AC-01 | Mở trang trực tiếp | Có đủ 12 nhóm theo mục 2, có tên rõ ràng. |
| AC-02 | Xem Basic và Label | Mỗi nhóm có bảy màu ở cả dạng mặc định và pill; tổng 14 ví dụ mỗi nhóm theo phạm vi đã biết. |
| AC-03 | Xem circle/square numeric và icon | Có các hình dạng và basic/label treatment đúng danh mục được xác minh từ mẫu. |
| AC-04 | Xem Dots Style | Có các dot theo mẫu; ý nghĩa không chỉ phụ thuộc màu hoặc chấm không có ngữ cảnh. |
| AC-05 | Xem Button with Badges | Count nằm đúng vị trí trong button, không làm sai căn chỉnh chữ hoặc kiểu button. |
| AC-06 | Xem notification badge trên button/icon | Count/dot rõ ràng, giữ vị trí so với host, không bị cắt ở mép. |
| AC-07 | Xem Badges Position và Overlaps for Shapes | Các vị trí/hình dạng host tái hiện đúng mẫu đã kiểm tra; chồng lớp có chủ đích không lan sang ví dụ khác. |
| AC-08 | Xem Maximum Values | Có 99, 99+, 999+ đầy đủ, không cắt chữ số/dấu cộng; không yêu cầu thuật toán đếm hoặc rút gọn runtime. |
| AC-09 | Xem Custom label Badges | Nội dung và bố trí theo mẫu đã xác minh; nhãn tùy chỉnh đọc được. |
| AC-10 | Tải tài nguyên | Font Awesome local hiển thị; không có SVG mới; ảnh/placeholder có nguồn phù hợp và khác biệt được báo cáo. |
| AC-11 | Dùng bàn phím và đọc tên truy cập được | Badge tĩnh không nhận Tab; host tương tác có focus rõ, count/dot có ngữ cảnh, icon trang trí không tạo tên lặp. |
| AC-12 | Kích hoạt host mẫu | Không tạo điều hướng ngoài ý muốn, tác vụ dữ liệu hoặc thay đổi count không được yêu cầu. Nếu có ripple, badge ngoài host không bị cắt. |
| AC-13 | Xem ở desktop/mobile/landscape với nhãn dài và giá trị nhiều chữ số | Các nhóm xuống dòng hợp lý, không tràn trang, cắt nội dung hoặc va chạm giữa ví dụ khác nhau. |
| AC-14 | Đối chiếu bản render mẫu | Đủ 12 nhóm, kiểu nền/màu/hình dạng/vị trí tương đồng; khác biệt về font, glyph, avatar hoặc nội dung được ghi rõ. |
| AC-15 | Kiểm tra runtime và thành phần liên quan | Không thiếu tài nguyên/lỗi làm hỏng showcase; hành vi component dùng chung bị tác động vẫn được bảo toàn. |

AC-03, AC-04, AC-07 và AC-09 cần inventory/arrangement đã khảo sát, không thể coi là đạt chỉ từ tên nhóm. Chưa chạy kiểm thử ứng dụng, trình duyệt hoặc công nghệ hỗ trợ trong bước BA.

## 7. Giả định (Assumptions)
- **A-01:** Tệp đầu ra là `badges.html` ở thư mục gốc, theo quy ước các trang trước.
- **A-02:** Giao diện sáng, nhãn và nội dung ví dụ bằng tiếng Anh; không yêu cầu sao chép nguyên văn nội dung demo.
- **A-03:** Count và Maximum Values là chuỗi ví dụ tĩnh; không có trạng thái cần lưu hoặc cập nhật khi thao tác.
- **A-04:** Icon dùng Font Awesome tương đương, avatar có thể thay bằng placeholder được phép nếu chưa có ảnh local phù hợp.
- **A-05:** Toàn bộ 12 nhóm là một chức năng minh họa thống nhất, chưa cần tách task.

Các giả định là cơ sở làm việc, không phải câu trả lời riêng đã được người dùng xác nhận.

## 8. Câu hỏi cần xác nhận (Open Questions)
| ID | Nội dung | Ảnh hưởng và hướng xử lý | Chặn? |
| --- | --- | --- | --- |
| Q-001 | Có yêu cầu filename/thư mục khác `badges.html` ở gốc không? | Ảnh hưởng đường dẫn; hiện dùng A-01. | Không |
| Q-002 | Danh mục/vị trí chính xác của notification, dot, overlap, custom label là gì? | Ảnh hưởng đầy đủ phạm vi và nghiệm thu; task-analyze đối chiếu bản render/HTML chi tiết, ghi inventory. | Cần bằng chứng trước khi chốt phần thiết kế liên quan; không chặn khảo sát |
| Q-003 | Có avatar, glyph hoặc nội dung bắt buộc khác phương án tương đương không? | Ảnh hưởng độ giống hình thức; hiện dùng A-02/A-04 và báo cáo thay thế. | Không |
| Q-004 | Mẫu có tương tác nào cần tái hiện ngoài trạng thái button thông thường không? | Khảo sát mẫu trước khi quyết định; không tự thêm điều hướng hoặc biến đổi count. Nếu phát hiện hành vi thực tế vượt brief thì làm rõ phạm vi. | Không chặn khảo sát; chặn triển khai hành vi mới chưa được yêu cầu |

Không có câu hỏi nghiệp vụ hiện buộc người dùng trả lời trước khi bắt đầu khảo sát/thiết kế. Q-002 là công việc xác minh tham chiếu, không được tự điền bằng suy đoán. Nếu thiếu quyền truy cập hoặc kết quả còn mâu thuẫn, giữ phần phụ thuộc ở trạng thái provisional và báo cáo trước khi triển khai. Câu hỏi chỉ đóng khi có bằng chứng hoặc câu trả lời rõ ràng; BA readiness không tự đóng chúng.

## 9. Quyết định đã xác nhận (Decisions)
| ID | Ngày | Nguồn | Nội dung |
| --- | --- | --- | --- |
| D-001 | 2026-11-09 | Yêu cầu gốc của người dùng | Mô phỏng Badge theo trang Materio được cung cấp. |

Danh sách 12 nhóm và bảy màu kế thừa từ task brief dựa trên HTML, không được ghi như các câu trả lời riêng của người dùng. Chưa có câu trả lời cho Q-001–Q-004; chưa có phê duyệt BA rõ ràng. Trạng thái không phải `Approved`.

## 10. Rủi ro và phụ thuộc nghiệp vụ
- Vị trí overlay dễ bị cắt bởi overflow của button hoặc ripple; cần kiểm chứng cả host lẫn badge thay vì chỉ kiểm tra số ví dụ.
- Count/dot/icon thiếu ngữ cảnh có thể không truyền đạt ý nghĩa cho người dùng công nghệ hỗ trợ; cần tên truy cập được đúng ngữ nghĩa và tránh Tab stop dư thừa.
- Maximum Values có thể bị hiểu nhầm thành yêu cầu xử lý ngưỡng động; phạm vi hiện tại chỉ là trình bày tĩnh.
- Hình ảnh avatar và glyph có thể khác demo; việc dùng tài nguyên được phép phải đi kèm báo cáo khác biệt.
- Nhãn dài, nhiều chữ số và màn hình nhỏ có thể làm lệch vị trí hoặc đè lên host khác; kiểm thử phải bao gồm nội dung dài.
- Reuse tài nguyên cần bảo toàn CSS/JS và chỉnh sửa hiện tại của các task trước; không có dependency dữ liệu/API mới.
- Chưa có bản render đối chiếu trong bước BA, nên chưa thể kết luận độ giống hình thức hoặc hành vi.

Bước tiếp theo: `task-analyze #20261109_materio_badges` để xác minh inventory, vị trí/custom label, host/ảnh và tương tác; sau đó `task-plan`.
