# Phân tích nghiệp vụ: Sáu biến thể layout quản trị theo Materio
**Task ID:** 20261108_materio_layouts
**Trạng thái:** Ready for technical design
**Nguồn yêu cầu:** tasks/20261108_materio_layouts.md; yêu cầu bổ sung của người dùng ngày 08/11/2026 về responsive trên PC, laptop và mobile.

## 1. Bối cảnh và mục tiêu nghiệp vụ
Người dùng cần bộ ví dụ HTML mô phỏng bố cục của Materio admin theme để làm nền tảng giao diện quản trị. Mục tiêu là thể hiện sáu cách tổ chức khung trang (layout), không xây dựng nội dung dashboard hay chức năng nghiệp vụ.

Nguồn tham chiếu do người dùng cung cấp: https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/index.html . Nội dung trực quan của trang này chưa được xác minh do công cụ truy cập không thành công ở bước tạo task; không coi các chi tiết chưa xem được là quyết định đã xác nhận.

Responsive là khả năng tự điều chỉnh bố cục theo kích thước vùng hiển thị. Người dùng xác nhận mọi thành phần của admin template phải responsive để sử dụng được trên PC, laptop và mobile. Trong task này, yêu cầu đó áp dụng cho toàn bộ thành phần được đưa vào sáu layout; không mở rộng phạm vi sang việc tạo thêm component.

## 2. Phạm vi và ngoài phạm vi
### Trong phạm vi
- Sáu trang HTML riêng trong `layouts/`: vertical/sidebar mặc định, horizontal/top navbar, boxed, icon-sidebar/compact, single column và blank.
- Giữ tên `layouts/default_layout.html` và `layouts/single_column_layout.html`; các trang còn lại có tên thể hiện rõ biến thể.
- Khung điều hướng, header, vùng nội dung, footer và điều khiển tối thiểu cần thiết cho từng layout.
- Tính nhất quán về bố cục, khoảng cách, màu sắc và cách trình bày theo tham chiếu Materio trong phạm vi layout.
- Responsive và khả năng sử dụng các điều khiển khung trang bằng chuột, bàn phím và thao tác chạm khi phù hợp với thiết bị.

### Ngoài phạm vi
- Biểu đồ, thẻ thống kê, bảng dữ liệu, biểu mẫu và các component trình diễn khác.
- Backend, dữ liệu thật, đăng nhập, phân quyền và chức năng nghiệp vụ.
- Toàn bộ theme Materio, trình tùy chỉnh theme hoặc thư viện component đầy đủ.
- Cam kết hỗ trợ ứng dụng native trên các hệ điều hành; sản phẩm được yêu cầu là trang HTML chạy trong trình duyệt.

## 3. Đối tượng sử dụng (Actors)
| Đối tượng | Nhu cầu |
| --- | --- |
| Người xem bộ ví dụ | Mở trực tiếp từng trang, nhận biết biến thể và sử dụng khung trang trên nhiều kích thước màn hình. |
| Người phát triển giao diện | Dùng các trang làm mẫu bố cục để tiếp tục phát triển admin template. |
| Người nghiệm thu | Đối chiếu sáu biến thể với yêu cầu, tham chiếu và khả năng responsive. |

Không có vai trò đăng nhập hay điều kiện phân quyền trong phạm vi task.

## 4. Quy trình nghiệp vụ (Business Workflows)
### Luồng chính
1. Người dùng mở một trang HTML thuộc `layouts/`.
2. Trang hiển thị đúng biến thể, với nội dung trống hoặc nhãn trung tính đủ nhận biết các vùng bố cục.
3. Người dùng sử dụng vùng điều hướng hoặc điều khiển layout tối thiểu, nếu biến thể có các vùng đó.
4. Khi thay đổi kích thước cửa sổ hoặc sử dụng thiết bị khác, bố cục tự điều chỉnh để nội dung và điều khiển vẫn truy cập được.

### Luồng thay thế
- Trên màn hình hẹp, điều hướng có thể thu gọn hoặc đổi cách trình bày; người dùng vẫn mở, sử dụng và đóng được nếu có trạng thái thu gọn.
- Khi xoay mobile hoặc đổi kích thước cửa sổ, trang tiếp tục hiển thị đúng mà không cần tải lại.
- Với blank layout, người dùng chỉ thấy vùng trang tối thiểu, không cần tương tác điều hướng.

### Tình huống lỗi cần tránh
- Điều hướng che kín nội dung mà không có cách đóng; điều khiển chỉ dùng được khi hover chuột.
- Chữ, biểu tượng hoặc vùng trang bị cắt, chồng lấn hay tràn ngang ngoài ý muốn.
- Tài nguyên bị thiếu hoặc lỗi trình duyệt làm mất bố cục/khả năng điều khiển. Không yêu cầu xây dựng màn hình báo lỗi riêng.

## 5. Quy tắc nghiệp vụ (Business Rules)
- **BR-001:** Mỗi biến thể có một trang HTML xem được độc lập; đủ sáu biến thể.
- **BR-002:** Chỉ đưa vào thành phần cần cho khung trang. Yêu cầu responsive không phải yêu cầu bổ sung component.
- **BR-003:** Mọi thành phần hiện diện trong mỗi trang đều phải thích ứng trên PC, laptop và mobile, bao gồm điều hướng, header, nội dung, footer và điều khiển nếu có.
- **BR-004:** Các biến thể phải phân biệt được ở kích thước phù hợp. Trên mobile, cho phép các biến thể có cách thu gọn tương tự để bảo đảm sử dụng được.
- **BR-005:** Nội dung và điều hướng không được mất khả năng truy cập khi đổi kích thước hoặc xoay màn hình; không phát sinh thanh cuộn ngang ngoài ý muốn ở cấp trang.
- **BR-006:** Điều khiển cần cho layout phải có thể sử dụng trên màn hình cảm ứng, không phụ thuộc riêng vào hover. Điều khiển tương tác phải có nhãn nhận biết và sử dụng được bằng bàn phím.
- **BR-007:** Bố cục tham chiếu là căn cứ trực quan; phải ghi rõ giới hạn đối chiếu nếu vẫn không truy cập được. Không suy diễn rằng toàn bộ component của trang demo thuộc phạm vi cần sao chép.
- **BR-008:** Giữ nguyên task brief và các thay đổi không liên quan của người dùng.

## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
| ID | Điều kiện và kết quả cần đạt |
| --- | --- |
| AC-001 | Mở lần lượt sáu trang trong `layouts/`: mỗi trang tải được độc lập, đúng biến thể; hai tên file bắt buộc được giữ nguyên. |
| AC-002 | Ở màn hình rộng, `default_layout.html` có sidebar dọc và vùng nội dung bên cạnh. |
| AC-003 | Ở màn hình rộng, horizontal layout có điều hướng theo chiều ngang phía trên nội dung. |
| AC-004 | Ở màn hình đủ rộng, boxed layout có vùng bố cục giới hạn chiều rộng, căn giữa và khoảng trống hai bên theo cách diễn giải được ghi nhận. |
| AC-005 | Ở màn hình rộng, compact layout có sidebar hẹp, ưu tiên biểu tượng; mục điều hướng vẫn có thể nhận biết. |
| AC-006 | `single_column_layout.html` có một cột nội dung chính và không có cột sidebar. |
| AC-007 | Blank layout chỉ có trang tối thiểu, không có sidebar, navbar hoặc footer theo giả định A-004. |
| AC-008 | Mỗi trang được kiểm tra tại các viewport đại diện: PC 1920×1080, laptop 1366×768, mobile 390×844 và mobile hẹp 320×568 (CSS pixel). Không có chồng lấn, mất nội dung/điều khiển hoặc cuộn ngang ngoài ý muốn. Đây là mốc nghiệm thu đề xuất, không phải breakpoint triển khai bắt buộc. |
| AC-009 | Khi thay đổi chiều rộng liên tục trong khoảng 320–1920 CSS pixel và xoay mobile sang chiều ngang, các vùng trang điều chỉnh hợp lý, không cần tải lại trang để khôi phục bố cục. |
| AC-010 | Với mỗi layout có điều hướng thu gọn: mở và đóng được bằng thao tác chạm hoặc chuột, điều khiển sử dụng được bằng bàn phím; sau khi đóng có thể tiếp tục truy cập nội dung. |
| AC-011 | Mọi thành phần xuất hiện trong sáu layout đều qua kiểm tra responsive; không chỉ vùng nội dung chính. Không yêu cầu duy trì nguyên chiều rộng sidebar hoặc bố cục desktop trên mobile. |
| AC-012 | Sáu trang có phong cách nhất quán; kết quả đối chiếu với tham chiếu Materio được báo cáo, kèm giới hạn nếu chưa xem được tham chiếu. |
| AC-013 | Không có widget dashboard hoặc component trình diễn ngoài phạm vi; không có tài nguyên cục bộ bị thiếu hay lỗi runtime làm hỏng layout. |

Các mốc viewport là tiêu chí xác minh đề xuất trong BA, cần được rà soát trong bước phân tích kỹ thuật. Kiểm tra viewport không thay thế hoàn toàn việc kiểm tra thiết bị thật; báo cáo nghiệm thu phải phân biệt hai loại kiểm tra.

## 7. Giả định (Assumptions)
- **A-001:** Dùng giao diện sáng mặc định vì chưa có yêu cầu dark mode.
- **A-002:** Boxed là bố cục giới hạn chiều rộng và căn giữa; phạm vi giới hạn toàn khung hay chỉ nội dung được đối chiếu với tham chiếu trong phân tích kỹ thuật.
- **A-003:** Single column không có sidebar; cách dùng header/footer theo tham chiếu nếu xác minh được.
- **A-004:** Blank không có sidebar, navbar hoặc footer.
- **A-005:** Các trình duyệt hiện đại thông dụng là môi trường sử dụng dự kiến; chưa có yêu cầu phiên bản cụ thể hoặc trình duyệt cũ.
- **A-006:** Nhãn menu và nội dung trung tính chỉ phục vụ nhận biết layout; chưa có cấu trúc điều hướng nghiệp vụ cần giữ nguyên.

## 8. Câu hỏi cần xác nhận (Open Questions)
Không có câu hỏi nghiệp vụ chặn thiết kế kỹ thuật tại thời điểm này. Những điểm sau vẫn chưa được người dùng xác nhận; chưa coi là quyết định cuối cùng.

| ID | Câu hỏi | Tác động | Chặn? | Hướng xử lý hiện tại |
| --- | --- | --- | --- | --- |
| Q-001 | Boxed giới hạn toàn bộ khung trang hay chỉ vùng nội dung? | Ảnh hưởng cách phân bố điều hướng và khoảng trống ngoài. | Không | Dùng A-002 làm cơ sở, khảo sát tham chiếu; ghi rõ cách diễn giải trong phân tích kỹ thuật. |
| Q-002 | Single column có header/footer và blank có bỏ toàn bộ khung điều hướng không? | Ảnh hưởng các vùng có mặt trong hai ví dụ. | Không | Dùng A-003/A-004; đối chiếu tham chiếu trước triển khai. |
| Q-003 | Có yêu cầu trình duyệt, hệ điều hành hoặc thiết bị cụ thể ngoài PC/laptop/mobile không? | Ảnh hưởng phạm vi kiểm thử tương thích. | Không | Dùng A-005 và ma trận viewport đề xuất; không cam kết tương thích phiên bản chưa xác định. |

Nếu kết quả khảo sát mâu thuẫn đáng kể với cách diễn giải hoặc thay đổi phạm vi, cần ghi nhận quyết định nghiệp vụ trước khi triển khai phần bị ảnh hưởng.

## 9. Quyết định đã xác nhận (Decisions)
| ID | Ngày | Nguồn | Quyết định |
| --- | --- | --- | --- |
| D-001 | 08/11/2026 | Yêu cầu gốc trong task brief | Tạo sáu biến thể layout HTML trong `layouts/`, chỉ tập trung bố cục, không thêm component ngoài phạm vi. |
| D-002 | 08/11/2026 | Yêu cầu gốc trong task brief | Giữ tên `layouts/default_layout.html` và `layouts/single_column_layout.html`. |
| D-003 | 08/11/2026 | Bổ sung trực tiếp khi gọi task-ba | Mọi thành phần của admin template phải responsive để sử dụng trên PC, laptop và mobile. Trong task hiện tại, áp dụng cho mọi thành phần thuộc sáu layout. |

Chưa có câu trả lời trực tiếp cho Q-001–Q-003. Trạng thái `Ready for technical design` thể hiện đủ cơ sở để phân tích và thiết kế với giả định công khai; không đồng nghĩa người dùng đã phê duyệt BA.

## 10. Rủi ro và phụ thuộc nghiệp vụ
- Chưa xem được trang tham chiếu có thể làm giảm độ chính xác trực quan; cần thử khảo sát lại ở bước task-analyze và báo cáo bằng chứng truy cập.
- Khái niệm boxed/single column/blank còn khác biệt giữa các theme; dùng các giả định công khai để tránh biến cách diễn giải thành yêu cầu đã xác nhận.
- PC, laptop và mobile có nhiều kích thước và trình duyệt; ma trận nghiệm thu đại diện không phải cam kết hỗ trợ mọi thiết bị/phiên bản.
- Responsive trên mọi thành phần là yêu cầu chung được ghi nhận, nhưng BA này chỉ nghiệm thu các thành phần thuộc phạm vi sáu layout. Các task component sau này cần kế thừa yêu cầu đó trong tài liệu tương ứng.
- Bước BA chỉ tạo tài liệu này, không sửa task brief, mã nguồn, tests hoặc technical plan. Chưa thực hiện kiểm thử giao diện hay thiết bị.
