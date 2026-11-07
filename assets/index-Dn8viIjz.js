(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function h(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=h(t);fetch(t.href,e)}})();const z=[{id:"C1-S1",chapter:1,topic:"Mục 1.1 • Sự ra đời & Các giai đoạn phát triển của KTCT",title:"Nghịch Lý Khởi Nghiệp: Phân Tích Kỹ Thuật Hay Quan Hệ Sản Xuất?",difficulty:"Cơ bản",philosophyConcept:"Quan hệ xã hội của sản xuất và trao đổi",image:"./assets/images/scenarios/c1-s1.svg",situation:"Nhóm bạn sinh viên CNTT vừa phát triển một ứng dụng chia sẻ tài liệu học tập rất mượt mà về mặt kỹ thuật. Tuy nhiên khi vận hành thử nghiệm, nhóm gặp khủng hoảng: Người đóng góp tài liệu cảm thấy bị bóc lột công sức, người tải về phàn nàn về phí truy cập, và một số bạn bắt đầu lén bán lại tài liệu ra ngoài. Trưởng nhóm chỉ chăm chăm vào việc viết thêm code tính năng, trong khi hệ thống ngày càng mất niềm tin và chia rẽ.",question:"Theo phương pháp luận của Kinh tế chính trị Mác – Lênin, nhóm khởi nghiệp cần tập trung giải quyết vấn đề cốt lõi nào?",dimensionScores:{connection:25,contradiction:15,depth:10,objective:25,practice:15},options:[{id:"A",text:"Chỉ tiếp tục nâng cấp công nghệ mã hóa và chặn người dùng chia sẻ ra ngoài bằng giải pháp kỹ thuật thuần túy.",isDialectical:!1,consequence:"Người dùng cảm thấy ngột ngạt và tẩy chay ứng dụng. Dự án công nghệ sụp đổ dù code rất tốt vì xem nhẹ bản chất các quan hệ kinh tế giữa người với người.",philosophicalLens:"Sai lầm vì rơi vào quan điểm kỹ trị siêu hình: Đồng nhất kinh tế với công nghệ thuần túy, quên rằng lực lượng sản xuất phát triển phải đi đôi với sự phù hợp của quan hệ sản xuất."},{id:"B",text:"Nghiên cứu và tái thiết lập các quan hệ sản xuất - trao đổi - phân phối: Phân chia lợi ích công bằng giữa người tạo tài liệu, người vận hành và người dùng.",isDialectical:!0,consequence:"Người đóng góp hào hứng chia sẻ vì nhận được quyền lợi xứng đáng, người dùng sẵn lòng chi trả vì minh bạch, cộng đồng gắn kết bền vững và nền tảng phát triển mạnh.",philosophicalLens:"Vận dụng đúng đối tượng nghiên cứu của KTCT Mác – Lênin: Kinh tế chính trị nghiên cứu các quan hệ xã hội của sản xuất và trao đổi; lợi ích kinh tế chính là động lực trực tiếp gắn kết các chủ thể."},{id:"C",text:"Kêu gọi tinh thần cống hiến thiện nguyện 100%, xóa bỏ mọi khoản phí và hy vọng lòng tốt tự duy trì hệ thống.",isDialectical:!1,consequence:"Hệ thống nhanh chóng kiệt quệ tài chính vì chi phí máy chủ tăng cao mà không có nguồn thu bù đắp, dự án tan rã sau vài tháng.",philosophicalLens:"Rơi vào chủ nghĩa duy tâm chủ quan: Tưởng rằng ý chí và tình cảm đạo đức có thể thay thế các quy luật kinh tế khách quan."}],explanation:"Đối tượng nghiên cứu của KTCT Mác - Lênin là các quan hệ xã hội của sản xuất và trao đổi trong sự liên hệ biện chứng với lực lượng sản xuất và kiến trúc thượng tầng.",coreLesson:"Mọi hoạt động kinh tế bền vững phải giải quyết đúng quan hệ sản xuất và quan hệ phân phối lợi ích, công nghệ chỉ là công cụ phương tiện."},{id:"C1-S2",chapter:1,topic:"Mục 1.2 & 1.3 • Đối tượng nghiên cứu & Phương pháp trừu tượng hóa",title:"Bẫy Dữ Liệu Thị Trường: Nhìn Hiện Tượng Hay Tìm Bản Chất Quy Luật?",difficulty:"Trung bình",philosophyConcept:"Phương pháp trừu tượng hóa khoa học",image:"./assets/images/scenarios/c1-s2.svg",situation:"Khi nghiên cứu thị trường tiêu dùng để mở quán cà phê sinh viên, Tuấn thu thập hàng trăm bảng khảo sát với vô số ý kiến mâu thuẫn: người đòi giảm giá, người muốn nhạc sống đắt tiền, người đòi mở 24/7. Tuấn bị ngập trong mớ dữ liệu ngẫu nhiên, hoang mang không biết đâu là yếu tố quyết định sự tồn tại lâu dài của mô hình kinh doanh.",question:'Phương pháp "trừu tượng hóa khoa học" của Kinh tế chính trị Mác – Lênin định hướng Tuấn xử lý vấn đề như thế nào?',dimensionScores:{connection:30,contradiction:20,depth:15,objective:15,practice:10},options:[{id:"A",text:"Gạt bỏ các hiện tượng bề ngoài ngẫu nhiên, tạm thời; đi sâu tìm quy luật bản chất chi phối chi phí - giá trị và nhu cầu có khả năng thanh toán.",isDialectical:!0,consequence:"Tuấn nhận ra bản chất cốt lõi của sinh viên là không gian học tập yên tĩnh với mức giá phù hợp với hao phí lao động xã hội cần thiết, quán khai trương thành công rực rỡ.",philosophicalLens:"Vận dụng chuẩn xác phương pháp trừu tượng hóa khoa học: Gạt bỏ những yếu tố ngẫu nhiên, bề ngoài để nắm bắt bản chất bên trong và các quy luật kinh tế chi phối."},{id:"B",text:"Cố gắng đáp ứng toàn bộ mọi đòi hỏi ngẫu nhiên trong bảng khảo sát: Vừa bán giá rẻ nhất, vừa thuê ca sĩ biểu diễn, vừa mở thâu đêm.",isDialectical:!1,consequence:"Chi phí đội lên gấp 3 lần doanh thu, quán đối mặt với nguy cơ phá sản chỉ sau 2 tháng vì không có trọng tâm chiến lược.",philosophicalLens:"Sai lầm vì kẹt lại ở cấp độ tư duy kinh nghiệm thiển cận, bị các hiện tượng cảm tính ngẫu nhiên che lấp quy luật vận động kinh tế khách quan."},{id:"C",text:"Bỏ qua hoàn toàn dữ liệu và nghiên cứu khoa học, tự tin làm theo linh cảm may rủi cá nhân.",isDialectical:!1,consequence:"Đầu tư cảm tính dẫn đến lãng phí vốn liếng, không hiểu thị trường và thất bại nhanh chóng.",philosophicalLens:"Tư duy chủ quan duy ý chí, phủ nhận tính khoa học của quy luật kinh tế khách quan."}],explanation:"Trừu tượng hóa khoa học là phương pháp gạt bỏ những hiện tượng tạm thời, ngẫu nhiên để tìm ra bản chất sâu sắc và các quy luật kinh tế chi phối sự vận động.",coreLesson:"Để ra quyết định kinh tế đúng đắn, phải biết trừu tượng hóa hiện tượng bề mặt để nắm bắt quy luật bản chất bên trong."},{id:"C1-S3",chapter:1,topic:"Mục 1.3 • Chức năng thực tiễn của KTCT",title:"Định Vị Bản Thân Trong Nền Kinh Tế Thị Trường 4.0",difficulty:"Cơ bản",philosophyConcept:"Chức năng nhận thức & thực tiễn của KTCT",image:"./assets/images/scenarios/c1-s3.svg",situation:'Nhiều sinh viên cho rằng: "Môn Kinh tế chính trị Mác – Lênin chỉ là lý luận khô khan trên giảng đường, không giúp ích gì cho việc kiếm tiền hay đi làm tại các doanh nghiệp ngày nay." Hoàng lại có cách nhìn nhận khác khi chuẩn bị bước vào thị trường lao động số.',question:"Đâu là cách hiểu đúng về chức năng của môn học đối với một người trẻ hiện đại?",dimensionScores:{connection:25,contradiction:20,depth:20,objective:20,practice:20},options:[{id:"A",text:"Nắm vững bản chất hàng hóa sức lao động, các quy luật thị trường và quan hệ lợi ích để tự bảo vệ quyền lợi, hoạch định sự nghiệp và khởi nghiệp khôn ngoan.",isDialectical:!0,consequence:"Hoàng hiểu rõ giá trị bản thân, biết cách thương lượng lương thưởng đúng giá trị sức lao động, nắm bắt xu thế thị trường và thích ứng nhanh với môi trường kinh tế năng động.",philosophicalLens:"Phát huy trọn vẹn cả 4 chức năng của KTCT: Nhận thức (hiểu quy luật), Thực tiễn (hành động hiệu quả), Tư tưởng (lập trường vững vàng) và Phương pháp luận (tư duy logic hệ thống)."},{id:"B",text:"Chỉ học thuộc lòng các định nghĩa để qua môn thi, sau đó quên hết vì cho rằng kinh tế chỉ cần kỹ năng sales và mánh lới buôn bán ngắn hạn.",isDialectical:!1,consequence:"Dễ bị rơi vào bẫy bóc lột lao động, đầu cơ lướt sóng thua lỗ hoặc mất phương hướng khi nền kinh tế xảy ra biến động và khủng hoảng.",philosophicalLens:"Tầm nhìn thiển cận, biến môn khoa học nền tảng thành lý thuyết suông và phủ nhận chức năng thực tiễn to lớn của kinh tế chính trị."},{id:"C",text:"Xem môn học như cẩm nang dạy làm giàu cấp tốc không cần tích lũy tư liệu và kinh nghiệm.",isDialectical:!1,consequence:"Thất vọng vì môn học cung cấp quy luật nền tảng vĩ mô và phương pháp luận chứ không phải bí kíp kiếm tiền xổi.",philosophicalLens:"Hiểu sai bản chất của khoa học kinh tế chính trị với kinh tế học thực hành vi mô."}],explanation:"KTCT Mác - Lênin trang bị thế giới quan kinh tế đúng đắn, giúp nhận thức sâu sắc các quy luật thị trường để vận dụng vào lao động, sản xuất và đời sống xã hội.",coreLesson:"Hiểu quy luật kinh tế chính là chiếc chìa khóa để chủ động làm chủ tương lai và sự nghiệp trong nền kinh tế thị trường."},{id:"C1-S4",chapter:1,topic:"Mục 1.1 • Tiến trình phát triển từ 'Kinh bang tế thế' đến KTCT Mác – Lênin",title:"Ảo Tưởng 'Làm Giàu Không Sản Xuất': Buôn Bán Kiếm Chênh Lệch Hay Cội Nguồn Của Cải Quốc Gia?",difficulty:"Trung bình",philosophyConcept:"Cội nguồn của cải & Sự chuyển biến tư tưởng kinh tế (Trọng thương ➔ Cổ điển ➔ Mác – Lênin)",image:"./assets/images/scenarios/c1-s4.svg",situation:"Trong một buổi tọa đàm sinh viên khởi nghiệp, Tuấn tự tin thuyết trình về mô hình dropshipping và giao dịch chênh lệch giá (arbitrage) trên các sàn thương mại điện tử quốc tế. Tuấn khẳng định: 'Thời đại này chỉ cần giỏi buôn bán, ăn chênh lệch và tích lũy tiền tệ là quốc gia giàu mạnh; sản xuất vật chất vừa cực nhọc vừa lỗi thời, cứ để các nước nghèo làm!'. Ngược lại, Lan - một sáng lập viên xưởng chế biến nông sản công nghệ cao - cho rằng của cải đích thực của xã hội phải bắt nguồn từ hoạt động sản xuất tạo ra của cải vật chất, còn thương mại chỉ là khâu lưu thông.",question:"Theo tiến trình phát triển từ thời Chủ nghĩa Trọng thương (A. Montchrestien 1615), KTCT Cổ điển Anh (A. Smith 1776) đến KTCT Mác – Lênin, nhận định nào phản ánh đúng đắn cội nguồn của sự thịnh vượng kinh tế?",dimensionScores:{connection:30,contradiction:25,depth:20,objective:15,practice:10},options:[{id:"A",text:"Sự giàu có thực sự của mọi quốc gia đều bắt nguồn từ sản xuất vật chất; hoạt động lưu thông và thương mại chỉ đóng vai trò phân phối, trao đổi giúp hiện thực hóa giá trị chứ không thể tự tạo thêm của cải mới nếu thiếu sản xuất.",isDialectical:!0,consequence:"Lan đầu tư vào chiều sâu chế biến sản phẩm, tạo ra giá trị sử dụng và giá trị thặng dư thực chất cho xã hội; dự án phát triển bền vững và tạo công ăn việc làm lâu dài.",philosophicalLens:"Kế thừa và phát triển đỉnh cao của KTCT Mác – Lênin: Khắc phục hạn chế của Chủ nghĩa Trọng thương (tưởng của cải sinh ra từ lưu thông mua bán) và Trọng nông (chỉ thấy nông nghiệp); khẳng định lao động sản xuất vật chất là cội nguồn của mọi của cải xã hội."},{id:"B",text:"Hoàn toàn đồng ý với Tuấn: Chỉ cần tập trung vào các dịch vụ tài chính, trung gian bán hàng và tích lũy thật nhiều tiền tệ thì xã hội sẽ tự khắc giàu sang mà không cần bận tâm sản xuất.",isDialectical:!1,consequence:"Xã hội rơi vào nền kinh tế bong bóng tài chính, hàng hóa thiết yếu khan hiếm, khi có khủng hoảng chuỗi cung ứng xảy ra thì tiền tệ bị mất giá nghiêm trọng.",philosophicalLens:"Mắc phải sai lầm ấu trĩ của Chủ nghĩa Trọng thương thời kỳ thế kỷ XV - XVII: Tuyệt đối hóa vai trò lưu thông tiền tệ, ngộ nhận tiền tệ và vàng bạc là của cải duy nhất."},{id:"C",text:"Cực đoan hóa quan điểm ngược lại: Xóa bỏ toàn bộ các sàn thương mại điện tử và dịch vụ trung gian, chỉ cho phép duy nhất các xưởng sản xuất vật chất hoạt động.",isDialectical:!1,consequence:"Hàng hóa sản xuất ra bị ứ đọng, không đến được tay người tiêu dùng, chi phí kết nối tăng vọt và nền kinh tế bị tê liệt.",philosophicalLens:"Phủ nhận vai trò biện chứng của khâu trao đổi và lưu thông; tách rời quan hệ sản xuất khỏi sự vận động thông suốt của chu kỳ tái sản xuất xã hội."}],explanation:"KTCT Mác – Lênin chỉ rõ: Sản xuất vật chất là cơ sở tồn tại và phát triển của xã hội loài người. Lưu thông và trao đổi có vai trò thúc đẩy hoặc kìm hãm sản xuất nhưng không trực tiếp sáng tạo ra của cải mới.",coreLesson:"Không một nền kinh tế nào có thể thịnh vượng bền vững nếu chỉ dựa vào đầu cơ trung gian và buôn bán chênh lệch mà bỏ quên nền tảng sản xuất vật chất."},{id:"C1-S5",chapter:1,topic:"Mục 1.2 • Bốn khâu của quá trình tái sản xuất & Mục đích của KTCT",title:"Nghịch Lý Kho Hàng Tồn: Khi 'Sản Xuất Tốt' Nhưng Bế Tắc Phân Phối & Trao Đổi",difficulty:"Nâng cao",philosophyConcept:"Mối quan hệ hữu cơ 4 khâu: Sản xuất – Phân phối – Trao đổi – Tiêu dùng",image:"./assets/images/scenarios/c1-s5.svg",situation:"Một doanh nghiệp dệt may xuất khẩu vừa đầu tư hàng chục tỷ đồng nâng cấp dây chuyền dệt tự động, công suất tăng vọt tạo ra hàng trăm nghìn bộ quần áo chất lượng cao (Khâu Sản xuất xuất sắc). Tuy nhiên, để bù đắp chi phí máy móc, lãnh đạo công ty cắt giảm mạnh lương thưởng của công nhân (Khâu Phân phối méo mó), đồng thời hệ thống kênh phân phối nội địa bị buông lỏng và phí trung gian quá cao (Khâu Trao đổi ách tắc). Kết quả trớ trêu: Hàng tồn kho chất kín kho bãi phải bán đại hạ giá chịu lỗ, người lao động mất động lực đình công, trong khi hàng triệu người dân có nhu cầu thực tế lại không thể tiếp cận sản phẩm.",question:"Dưới giác độ đối tượng nghiên cứu của KTCT Mác – Lênin về 4 khâu tái sản xuất và giải quyết hài hòa các quan hệ lợi ích, ban lãnh đạo doanh nghiệp cần hành động như thế nào?",dimensionScores:{connection:35,contradiction:25,depth:20,objective:10,practice:10},options:[{id:"A",text:"Tái thiết lập tính đồng bộ giữa 4 khâu: Khôi phục chính sách phân phối lợi ích thỏa đáng cho người lao động để kích thích động lực, cắt giảm các tầng nấc trung gian trao đổi bất hợp lý và mở rộng kênh tiếp cận người tiêu dùng để khép kín chu trình tái sản xuất.",isDialectical:!0,consequence:"Người lao động hăng hái nâng cao năng suất, hàng hóa lưu thông trơn tru tới tay người tiêu dùng, dòng vốn luân chuyển nhanh và doanh nghiệp vượt qua nguy cơ phá sản.",philosophicalLens:"Vận dụng đúng quy luật vận động của 4 khâu tái sản xuất xã hội: Sản xuất quyết định, nhưng Phân phối và Trao đổi là mắt xích trung gian quyết định việc giá trị có được hiện thực hóa ở khâu Tiêu dùng hay không; lợi ích kinh tế chính là động lực kết nối con người."},{id:"B",text:"Tiếp tục siết chặt lương thưởng công nhân hơn nữa và chỉ tập trung vay thêm vốn ngân hàng để sản xuất dồn dập với hy vọng 'cứ làm ra nhiều hàng tự khắc sẽ bán được'.",isDialectical:!1,consequence:"Doanh nghiệp vỡ nợ vì chi phí lãi vay và chi phí lưu kho, công nhân đồng loạt nghỉ việc và nhà máy buộc phải đóng cửa.",philosophicalLens:"Sai lầm duy ý chí, xem sản xuất là khâu biệt lập, cắt đứt mối liên hệ hữu cơ với phân phối và tiêu dùng."},{id:"C",text:"Dừng toàn bộ dây chuyền sản xuất, đem toàn bộ tài sản đi gửi tiết kiệm ngân hàng để lấy lãi an toàn mà không cần kinh doanh nữa.",isDialectical:!1,consequence:"Máy móc hao mòn vô hình và rỉ sét, mất hoàn toàn thị phần và thương hiệu, doanh nghiệp biến mất khỏi thị trường.",philosophicalLens:"Tư duy đầu hàng tiêu cực, triệt tiêu động lực lao động sáng tạo và làm tê liệt quá trình vận động của tư bản."}],explanation:"Quá trình tái sản xuất xã hội là thể thống nhất của 4 khâu: Sản xuất - Phân phối - Trao đổi - Tiêu dùng. Nếu phân phối bất công và trao đổi ách tắc thì sản xuất dù hiện đại đến đâu cũng rơi vào khủng hoảng thừa cục bộ.",coreLesson:"Kinh doanh và quản trị kinh tế muốn bền vững phải hài hòa lợi ích giữa các khâu và các bên tham gia; chỉ chăm chăm vào sản xuất mà bỏ quên phân phối và người tiêu dùng là con đường ngắn nhất dẫn tới thất bại."},{id:"C2-S1",chapter:2,topic:"Mục 2.1 • Sản xuất hàng hóa & Hai thuộc tính (GTSD & Giá trị)",title:'Nghịch Lý "Hàng Tốt Không Ai Mua": Giá Trị Sử Dụng vs Giá Trị',difficulty:"Cơ bản",philosophyConcept:"Hai thuộc tính của hàng hóa (GTSD & Giá trị)",image:"./assets/images/scenarios/c2-s1.svg",situation:"Một xưởng thủ công mỹ nghệ trẻ đầu tư 100 giờ công tỉ mỉ để tạo ra một chiếc hộp gỗ điêu khắc tinh xảo (Giá trị sử dụng rất cao về mặt nghệ thuật). Tuy nhiên, họ định giá sản phẩm lên tới 15 triệu đồng, vượt xa hao phí lao động xã hội cần thiết của thị trường. Kết quả hàng trưng bày suốt 6 tháng không ai mua, vốn bị chôn chặt.",question:"Dưới góc độ hai thuộc tính hàng hóa của C. Mác, xưởng thủ công đã mắc phải sai lầm cốt lõi nào?",dimensionScores:{connection:35,contradiction:20,depth:15,objective:15,practice:10},options:[{id:"A",text:"Nhầm lẫn giữa hao phí lao động cá biệt cao với Giá trị xã hội: Thị trường chỉ thừa nhận hao phí lao động xã hội cần thiết, hàng hóa chỉ hoàn thành giá trị khi được người mua chấp nhận.",isDialectical:!0,consequence:"Xưởng tái cấu trúc quy trình, áp dụng công nghệ hỗ trợ để giảm hao phí cá biệt về mức xã hội cần thiết, sản phẩm bán chạy và đem lại lợi nhuận bền vững.",philosophicalLens:"Lý luận C. Mác: Hàng hóa là sự thống nhất giữa Giá trị sử dụng và Giá trị. Nếu hàng hóa không bán được (không được xã hội thừa nhận giá trị) thì hao phí lao động cá biệt trở nên vô nghĩa."},{id:"B",text:'Kiên quyết giữ nguyên giá 15 triệu đồng và đổ lỗi cho người tiêu dùng là "không biết thưởng thức nghệ thuật".',isDialectical:!1,consequence:"Xưởng cạn kiệt dòng tiền và phải đóng cửa trong cay đắng, các sản phẩm trở thành đồ tồn kho hư hỏng.",philosophicalLens:"Tư duy chủ quan siêu hình, tách rời giá trị cá biệt khỏi điều kiện thừa nhận khách quan của thị trường."},{id:"C",text:"Hủy bỏ hoàn toàn tính nghệ thuật, sản xuất đồ nhựa công nghiệp rẻ tiền kém chất lượng.",isDialectical:!1,consequence:"Mất đi bản sắc thương hiệu và lợi thế cạnh tranh cốt lõi, rơi vào cuộc chiến giá rẻ khốc liệt.",philosophicalLens:"Cực đoan, đánh mất giá trị sử dụng đặc thù của sản phẩm thay vì tối ưu hóa thời gian lao động xã hội cần thiết."}],explanation:"Giá trị hàng hóa được quyết định bởi thời gian lao động xã hội cần thiết chứ không phải hao phí cá biệt chủ quan của người sản xuất.",coreLesson:"Sản phẩm tốt chỉ trở thành hàng hóa thành công khi được thị trường thừa nhận giá trị thông qua hành vi trao đổi."},{id:"C2-S2",chapter:2,topic:"Mục 2.2 • Tính hai mặt của lao động & Bí mật trao đổi (1m vải = 5kg thóc)",title:"Lao Động Cụ Thể Hay Lao Động Trừu Tượng: Chiến Lược Cải Tiến Sản Phẩm",difficulty:"Trung bình",philosophyConcept:"Tính hai mặt của lao động sản xuất hàng hóa & Cơ sở của giá trị trao đổi",image:"./assets/images/scenarios/c2-s2.svg",situation:"Trong một dự án hợp tác giữa xưởng dệt thủ công và công ty phần mềm quản lý kho, ban quản trị đối mặt với câu hỏi kinh điển: 'Tại sao 1m vải lại đổi được 5kg thóc dù công dụng may mặc và ăn uống hoàn toàn khác biệt? Và đối với một gói phần mềm hay một mét vải cao cấp, đâu là yếu tố thực sự tạo nên giá trị trao đổi để định giá trên thị trường?'. Trưởng phòng kỹ thuật cho rằng chỉ cần tập trung vào tính năng cụ thể của sản phẩm, trong khi cố vấn kinh tế cho rằng phải hiểu rõ hai mặt của lao động.",question:"Học thuyết của C. Mác về tính hai mặt của lao động sản xuất hàng hóa và cơ sở của giá trị trao đổi khẳng định điều gì?",dimensionScores:{connection:30,contradiction:30,depth:15,objective:15,practice:10},options:[{id:"A",text:"Lao động cụ thể (với 4 nét riêng: mục đích, đối tượng, phương pháp, kết quả riêng) tạo ra Giá trị sử dụng; còn Lao động trừu tượng (hao phí sức óc, thần kinh, bắp thịt chung) kết tinh tạo ra Giá trị hàng hóa - chính là cơ sở chung của mọi quan hệ trao đổi (như 1m vải = 5kg thóc).",isDialectical:!0,consequence:"Doanh nghiệp nắm vững bản chất, vừa nâng cao chất lượng sử dụng (lao động cụ thể), vừa tối ưu hóa hao phí lao động xã hội cần thiết (lao động trừu tượng), định vị sản phẩm cạnh tranh bền vững.",philosophicalLens:"Phát kiến vĩ đại của C. Mác: Lao động sản xuất hàng hóa có tính chất hai mặt. Lao động cụ thể tạo ra giá trị sử dụng (phạm trù vĩnh viễn), còn lao động trừu tượng tạo ra giá trị (phạm trù lịch sử, cơ sở của giá trị trao đổi)."},{id:"B",text:"Chính chiếc máy tính, công cụ may mặc và nguyên vật liệu tự sinh ra giá trị mới của hàng hóa mà không cần sự hao phí lao động sống của con người.",isDialectical:!1,consequence:"Đầu tư mua sắm dàn máy móc đắt đỏ nhưng trả lương bèo bọt khiến nhân tài ra đi, máy móc đắp chiếu và doanh nghiệp thua lỗ nặng.",philosophicalLens:"Sai lầm sùng bái vật chất: Tư liệu sản xuất chỉ chuyển dịch giá trị cũ (c) vào sản phẩm, chỉ có lao động sống trừu tượng của con người mới sáng tạo ra giá trị mới (v + m)."},{id:"C",text:"Tỷ lệ trao đổi 1m vải = 5kg thóc hay giá bán phần mềm chỉ là trò may rủi ngẫu nhiên hoặc do người bán tùy tiện quyết định, không có cơ sở khách quan nào.",isDialectical:!1,consequence:"Định giá tùy tiện dẫn đến việc bị người tiêu dùng tẩy chay hoặc bán dưới giá thành gây kiệt quệ tài chính.",philosophicalLens:"Thuyết chủ quan tầm thường, phủ nhận thực thể giá trị khách quan do hao phí lao động xã hội kết tinh quyết định."}],explanation:"Tính hai mặt của lao động sản xuất hàng hóa (Lao động cụ thể và Lao động trừu tượng) là phát hiện đột phá của C. Mác, giải mã vì sao hai hàng hóa có công dụng hoàn toàn khác nhau vẫn có thể trao đổi ngang giá với nhau.",coreLesson:"Cải tiến công cụ và phương pháp (lao động cụ thể) để tạo ra sản phẩm hữu ích, nhưng kiểm soát và tối ưu hao phí lao động xã hội (lao động trừu tượng) mới là chìa khóa quyết định giá trị và lợi thế cạnh tranh."},{id:"C2-S3",chapter:2,topic:"Mục 2.3 • Lượng giá trị hàng hóa: TGLĐXH cần thiết & Các nhân tố ảnh hưởng",title:"Tăng Ca 14 Giờ Hay Đầu Tư Tự Động Hóa AI? Bản Chất Lượng Giá Trị",difficulty:"Trung bình",philosophyConcept:"Lượng giá trị hàng hóa, TGLĐXH cần thiết & Năng suất lao động",image:"./assets/images/scenarios/c2-s3.svg",situation:"Một trung tâm xử lý logistics thương mại điện tử cần hoàn thành 50.000 đơn hàng vào đợt khuyến mãi lớn. Quản lý A đề xuất ép toàn bộ nhân viên tăng ca lên 14 tiếng/ngày (tăng cường độ lao động). Quản lý B đề xuất đầu tư hệ thống robot phân loại tự động ứng dụng AI kết hợp chuyển đổi nhân sự sang lao động kỹ thuật cao (tăng năng suất lao động và phát triển lao động phức tạp). Ban giám đốc đứng trước bài toán đánh giá chi phí và bản chất lượng giá trị của mỗi đơn vị dịch vụ trong điều kiện bình thường của xã hội.",question:"Dưới góc độ lý luận về lượng giá trị hàng hóa và các nhân tố ảnh hưởng của C. Mác, phương án nào phản ánh quy luật kinh tế đúng đắn?",dimensionScores:{connection:30,contradiction:30,depth:15,objective:15,practice:10},options:[{id:"A",text:"Đầu tư tự động hóa AI để tăng năng suất lao động: Lượng giá trị trong 1 đơn vị sản phẩm tỷ lệ nghịch với NSLĐ (giảm chi phí trên mỗi đơn vị), đồng thời phát huy vai trò lao động phức tạp (bội số của lao động giản đơn) mà không vắt kiệt thể chất người lao động.",isDialectical:!0,consequence:"Công ty xử lý vượt định mức, chi phí đơn vị giảm mạnh, tạo lợi thế giá thành vượt trội so với mức hao phí thời gian lao động xã hội cần thiết của thị trường.",philosophicalLens:"Vận dụng trọn vẹn quy luật lượng giá trị chuẩn Slide: Lượng giá trị tỷ lệ nghịch với NSLĐ; lao động phức tạp tạo nhiều giá trị hơn; trong khi tăng CĐLĐ chỉ làm tăng tổng hao phí sức lực mà lượng giá trị 1 đơn vị hàng hóa không đổi."},{id:"B",text:"Ép tăng ca 14 tiếng liên tục vì cho rằng chỉ cần kéo dài giờ làm là tự khắc giảm được giá thành đơn vị sản phẩm.",isDialectical:!1,consequence:"Nhân viên kiệt sức, tỷ lệ sai sót và hư hỏng hàng hóa tăng vọt, chi phí đền bù vượt xa tiền lãi và nhiều nhân sự chủ chốt nghỉ việc.",philosophicalLens:"Nhầm lẫn tai hại giữa NSLĐ và CĐLĐ: Tăng CĐLĐ không làm giảm lượng giá trị 1 đơn vị sản phẩm, lại vấp phải giới hạn sinh lý của con người."},{id:"C",text:"Cắt giảm 50% đơn hàng để duy trì quy trình thủ công lạc hậu, từ chối cả tăng ca lẫn áp dụng công nghệ.",isDialectical:!1,consequence:"Thời gian lao động cá biệt vượt xa thời gian lao động xã hội cần thiết, doanh nghiệp thua lỗ và nhanh chóng bị thị trường đào thải.",philosophicalLens:"Bảo thủ, tụt hậu so với trình độ kỹ thuật và trình độ khéo léo trung bình của xã hội."}],explanation:"Lượng giá trị hàng hóa do thời gian lao động xã hội cần thiết quyết định (xác định trong ĐK bình thường của xã hội với kỹ thuật TB, khéo léo TB, cường độ TB) và tỷ lệ nghịch với năng suất lao động.",coreLesson:"Cải tiến công nghệ, nâng cao năng suất và phát triển lao động phức tạp là con đường duy nhất để hạ giá thành, tăng sức cạnh tranh và phát triển kinh tế bền vững."},{id:"C2-S4",chapter:2,topic:"Mục 2.2 • Bản chất tiền tệ & Quy luật giá trị trên thị trường",title:"Cơn Sốt Giá Cà Phê: Chạy Đua Đầu Cơ Hay Đầu Tư Chuỗi Giá Trị?",difficulty:"Nâng cao",philosophyConcept:"Quy luật giá trị & Cơ chế thị trường",image:"./assets/images/scenarios/c2-s4.svg",situation:"Khi giá cà phê nhân thế giới tăng đột biến do mất mùa tại Brazil, hàng loạt hộ nông dân và đại lý vội vã vay nợ để gom hàng đầu cơ, chặt bỏ cây trồng khác để trồng ồ ạt cà phê. Một hợp tác xã trẻ tại Tây Nguyên lại chọn liên kết ký hợp đồng dài hạn với các xưởng chế biến sâu và duy trì vùng trồng hữu cơ đạt chứng nhận.",question:"Quy luật giá trị và quy luật cung - cầu sẽ điều tiết thị trường này như thế nào trong trung và dài hạn?",dimensionScores:{connection:35,contradiction:25,depth:15,objective:15,practice:10},options:[{id:"A",text:"Giá cả xoay quanh Giá trị: Cơn sốt giá cao do mất mùa tạm thời (Cung < Cầu) sẽ nhanh chóng được bù đắp; người đầu cơ ồ ạt sẽ chịu rủi ro khủng hoảng thừa, chỉ mô hình nâng cao chất lượng và chuỗi giá trị mới bền vững.",isDialectical:!0,consequence:"Khi nguồn cung thế giới phục hồi và giá cà phê hạ nhiệt, hợp tác xã vẫn có đầu ra ổn định với giá cao nhờ chế biến sâu, trong khi những kẻ đầu cơ gánh nợ phá sản.",philosophicalLens:"Quy luật giá trị là quy luật kinh tế căn bản của sản xuất hàng hóa: Giá cả vận động xoay quanh trục giá trị dưới tác động của cung - cầu; sản xuất chạy theo giá cả nhất thời tất yếu dẫn tới khủng hoảng điều chỉnh."},{id:"B",text:"Tin rằng giá cà phê sẽ tăng mãi mãi không bao giờ giảm, vay tiền tối đa để găm giữ hàng hóa đầu cơ chờ giá gấp ba.",isDialectical:!1,consequence:"Thị trường đảo chiều, giá tụt dốc không phanh, hàng hóa ứ đọng và ngân hàng siết nợ tài sản.",philosophicalLens:"Ảo tưởng phi thực tế, xem thường quy luật cung - cầu và tính tự điều tiết khách quan của quy luật giá trị."},{id:"C",text:"Yêu cầu chính phủ cấm tuyệt đối việc mua bán cà phê tự do và áp đặt giá bán cố định thấp hơn thị trường.",isDialectical:!1,consequence:"Hình thành chợ đen buôn lậu, nông dân bỏ bê canh tác vì bị ép giá, làm suy giảm nền nông nghiệp quốc gia.",philosophicalLens:"Mệnh lệnh hành chính duy ý chí vi phạm thô bạo cơ chế vận hành của nền kinh tế hàng hóa."}],explanation:"Quy luật giá trị điều tiết sản xuất và lưu thông thông qua sự biến động của giá cả xoay quanh giá trị dưới tác động của quan hệ cung - cầu.",coreLesson:"Tôn trọng quy luật giá trị đòi hỏi sự kiên định vào chất lượng thực chất và chuỗi giá trị, tránh xa bẫy đầu cơ ngắn hạn."},{id:"C2-S5",chapter:2,topic:"Mục 2.2 • Vai trò của các chủ thể tham gia thị trường",title:"Doanh Nghiệp Trách Nhiệm Xã Hội vs Tối Đa Hóa Lợi Nhuận Bất Chấp",difficulty:"Cơ bản",philosophyConcept:"Chủ thể thị trường & Trách nhiệm xã hội",image:"./assets/images/scenarios/c2-s5.svg",situation:"Một công ty sản xuất đồ uống phát hiện chất phụ gia tạo ngọt giá rẻ họ đang dùng có thể gây hại cho sức khỏe người tiêu dùng sau 5-10 năm tích lũy, dù hiện tại cơ quan quản lý chưa kịp đưa vào danh mục cấm. Giám đốc tài chính muốn tiếp tục dùng để tiết kiệm 30 tỷ mỗi năm.",question:"Theo nguyên lý về vai trò của người sản xuất trong nền kinh tế thị trường hiện đại, quyết định nào đúng đắn nhất?",dimensionScores:{connection:25,contradiction:20,depth:15,objective:30,practice:10},options:[{id:"A",text:"Chủ động loại bỏ chất độc hại, chuyển sang nguyên liệu hữu cơ an toàn và công bố minh bạch vì trách nhiệm đạo đức và lợi ích lâu dài của người tiêu dùng.",isDialectical:!0,consequence:"Thương hiệu được cộng đồng tin cậy tuyệt đối, người tiêu dùng ủng hộ trung thành, giá trị thương hiệu và thị phần tăng trưởng bền vững.",philosophicalLens:"Người sản xuất không chỉ tìm kiếm lợi nhuận mà phải đáp ứng nhu cầu chân chính của người tiêu dùng và chịu trách nhiệm bảo vệ môi trường, xã hội; uy tín chính là tài sản vô hình lớn nhất."},{id:"B",text:"Tiếp tục sử dụng chất độc hại lén lút cho đến khi nào luật pháp chính thức cấm thì mới dừng lại để tối đa hóa tiền bạc.",isDialectical:!1,consequence:"Vụ việc bị các nhà khoa học vạch trần trên truyền thông, công ty bị tẩy chay kịch liệt, đối mặt án phạt hình sự và phá sản.",philosophicalLens:"Chủ nghĩa trục lợi tư bản mù quáng: Xem người tiêu dùng như công cụ bóc lột, vi phạm quy luật đạo đức kinh tế tất yếu bị xã hội đào thải."},{id:"C",text:"Bỏ phụ gia nhưng âm thầm cắt giảm dung tích chai nước xuống 30% mà không báo cho khách hàng.",isDialectical:!1,consequence:"Khách hàng phát hiện sự gian lận và chuyển sang thương hiệu đối thủ trung thực hơn.",philosophicalLens:"Hành vi tiểu nông gian lận, phá vỡ nguyên tắc trao đổi ngang giá và bình đẳng trên thị trường."}],explanation:"Người sản xuất trong nền KTTT hiện đại phải kết hợp hài hòa giữa mục tiêu lợi nhuận với trách nhiệm xã hội và tôn trọng quyền lợi của người tiêu dùng.",coreLesson:"Kinh doanh chân chính là phụng sự con người; lợi nhuận chỉ là phần thưởng cho những giá trị đích thực mang lại cho xã hội."},{id:"C2-S6",chapter:2,topic:"Mục 1.3 • Lịch sử các hình thái giá trị & Sự ra đời của Tiền tệ",title:"Bí Ẩn Tiến Trình Tiền Tệ: Từ 20 Vuông Vải Đến Chế Độ Bản Vị Vàng Bạc",difficulty:"Trung bình",philosophyConcept:"4 hình thái giá trị & Bản chất quy luật tiền tệ",image:"./assets/images/scenarios/c2-s6.svg",situation:"Một startup Fintech phát triển đồng tiền kỹ thuật số mới tuyên bố: 'Tiền tệ chỉ là quy ước ký hiệu do con người tùy ý ấn định bằng công nghệ, không cần gắn liền với bất kỳ giá trị vật chất hay lịch sử sản xuất hàng hóa nào cả.' Một nhà nghiên cứu kinh tế phản biện lại bằng lịch sử 4 hình thái giá trị của C. Mác: từ hình thái Giản đơn (1 con cừu = 2 cái rìu), Mở rộng (1 con cừu = nhiều hàng hóa khác), Chung (nhiều hàng hóa = 20 vuông vải), đến Tiền tệ (vàng, bạc độc quyền làm vật ngang giá chung và chế độ song bản vị).",question:"Dưới góc nhìn Kinh tế chính trị Mác - Lênin, nhận định nào giải thích đúng đắn nhất về bản chất và nguồn gốc của tiền tệ?",dimensionScores:{connection:25,contradiction:25,depth:25,objective:15,practice:10},options:[{id:"A",text:"Tiền tệ không phải là do quy ước tùy tiện hay ý muốn chủ quan, mà là sản phẩm tất yếu lịch sử của quá trình phát triển sản xuất và các hình thái giá trị trao đổi hàng hóa; vàng và bạc được cố định làm vật ngang giá chung nhờ thuộc tính tự nhiên đặc biệt (thuần nhất, dễ chia nhỏ, không hư hỏng, giá trị tập trung cao).",isDialectical:!0,consequence:"Startup hiểu sâu sắc bản chất tiền tệ, định vị đúng tài sản bảo chứng và quy luật lưu thông, tránh được nguy cơ bong bóng tài chính ảo và sụp đổ thanh khoản.",philosophicalLens:"Quan điểm duy vật biện chứng và lịch sử: Tiền tệ là hàng hóa đặc biệt được tách ra làm vật ngang giá chung cho tất cả các hàng hóa khác, thể hiện lao động xã hội và quan hệ sản xuất giữa những người sản xuất hàng hóa."},{id:"B",text:"Tiền tệ hoàn toàn do nhà nước hoặc một tổ chức công nghệ tạo ra từ con số không thông qua luật pháp hoặc mã nguồn máy tính, bất kể hàng hóa trên thị trường có hay không.",isDialectical:!1,consequence:"Phát hành vô tội vạ dẫn đến lạm phát phi mã, mất giá hoàn toàn niềm tin và phương tiện lưu thông bị đào thải.",philosophicalLens:"Chủ nghĩa duy tâm chủ quan: Coi tiền tệ chỉ là danh nghĩa quy ước thuần túy, phủ nhận cơ sở giá trị khách quan của sản xuất xã hội."},{id:"C",text:"Nên quay trở lại thời kỳ đổi hàng lấy hàng trực tiếp (H-H) để triệt tiêu mọi mâu thuẫn xã hội và không cần dùng đến tiền tệ nữa.",isDialectical:!1,consequence:"Giao thương tắc nghẽn nghiêm trọng, chi phí giao dịch đội lên cực đại, nền kinh tế tụt lùi về thời kỳ nguyên thủy.",philosophicalLens:"Tư tưởng bảo thủ thụt lùi, phủ nhận sự phát triển biện chứng của các hình thái giá trị và phân công lao động xã hội."}],explanation:"Tiền tệ ra đời là kết quả lâu dài của quá trình phát triển sản xuất và trao đổi hàng hóa qua 4 hình thái giá trị: Giản đơn -> Mở rộng -> Chung -> Tiền tệ (Vàng/Bạc).",coreLesson:"Hiểu rõ nguồn gốc tiền tệ giúp chúng ta nắm bắt quy luật lưu thông tiền tệ và phân biệt rõ giá trị thực chất với hiện tượng danh nghĩa của các phương tiện thanh toán hiện đại."},{id:"C3-S1",chapter:3,topic:"Mục 3.1.1 • Nguồn gốc giá trị thặng dư & Hàng hóa sức lao động",title:"Bí Mật Tiền Lương: Vì Sao Lương Không Bằng Giá Trị Tạo Ra?",difficulty:"Trung bình",philosophyConcept:"Hàng hóa sức lao động & Nguồn gốc giá trị thặng dư (m)",image:"./assets/images/scenarios/c3-s1.svg",situation:'Một kỹ sư lập trình nhận lương 30 triệu đồng/tháng. Trong tháng đó, phần mềm do anh phát triển độc lập được bán cho khách hàng với doanh thu 150 triệu đồng sau khi trừ chi phí máy móc. Anh thắc mắc: "Tại sao công ty không trả tôi 150 triệu, mà chỉ trả 30 triệu? Phải chăng tôi bị bóc lột 120 triệu?"',question:"Học thuyết giá trị thặng dư của C. Mác giải thích hiện tượng này như thế nào?",dimensionScores:{connection:25,contradiction:35,depth:15,objective:15,practice:10},options:[{id:"A",text:"Tiền lương chỉ là giá cả của Hàng hóa Sức Lao Động (chi phí tái sản xuất sức lao động), còn trong quá trình làm việc, sức lao động tạo ra giá trị mới (v + m) lớn hơn bản thân nó; phần dôi ra chính là Giá trị thặng dư (m) thuộc về chủ tư bản.",isDialectical:!0,consequence:"Kỹ sư thấu hiểu bản chất quan hệ tiền lương trong nền kinh tế thị trường, không ảo tưởng nhưng biết nâng cao năng lực để tăng giá trị sức lao động hoặc tự chủ tích lũy tư bản.",philosophicalLens:"Phát kiến vĩ đại của C. Mác: Sức lao động là hàng hóa đặc biệt, khi sử dụng nó có khả năng tạo ra một lượng giá trị mới lớn hơn giá trị bản thân nó. Đó chính là nguồn gốc bí mật sinh ra giá trị thặng dư (m)."},{id:"B",text:"Tiền lương là sự trả công cho toàn bộ lao động đã cống hiến, còn phần 120 triệu dôi ra hoàn toàn do máy móc tự sinh ra.",isDialectical:!1,consequence:"Hiểu sai bản chất, không thấy được vai trò sáng tạo của người lao động và nguồn gốc giá trị trong xã hội.",philosophicalLens:"Lý thuyết ngụy biện của kinh tế học tư sản tầm thường: Biến tư bản bất biến (máy móc) thành nguồn gốc của giá trị thặng dư thay vì lao động sống."},{id:"C",text:"Công ty hoàn toàn lừa đảo và người kỹ sư nên nghỉ việc ngay để ở nhà không làm gì cả.",isDialectical:!1,consequence:"Kỹ sư thất nghiệp, không có thu nhập để tái sản xuất sức lao động và tự đào thải bản thân.",philosophicalLens:"Thái độ phản kháng vô chính phủ cực đoan, không hiểu tính tất yếu lịch sử của quan hệ lao động làm thuê trong CNTB."}],explanation:"Giá trị hàng hóa sức lao động được đo bằng tư liệu sinh hoạt để tái sản xuất sức lao động; giá trị sử dụng đặc biệt của nó là tạo ra giá trị mới lớn hơn giá trị bản thân nó (m).",coreLesson:"Hiểu rõ bản chất hàng hóa sức lao động giúp người lao động định vị đúng quyền lợi, không ngừng nâng cao trình độ và làm chủ vị thế kinh tế."},{id:"C3-M3-SLIDER",chapter:3,type:"slider",topic:"Mục 3.1.2 • Bản chất giá trị thặng dư (c + v + m) & Tỷ suất m'",title:"Phòng Thí Nghiệm Tương Tác: Ngày Lao Động & Tỷ Suất Bóc Lột (m')",difficulty:"Tương tác",philosophyConcept:"Tỷ suất giá trị thặng dư (m') & Ngày lao động",image:"./assets/images/scenarios/c3-slider.svg",situation:"Trực quan hóa cấu trúc ngày làm việc: Kéo thanh trượt từ 4 giờ đến 14 giờ để thấy rõ sự phân chia giữa Thời gian lao động tất yếu (t) và Thời gian lao động thặng dư (t'), cùng sự biến đổi của tỷ suất giá trị thặng dư m' = (t' / t) * 100%!",question:"Hãy điều chỉnh thanh trượt để trải nghiệm sự bùng nổ của quy luật giá trị thặng dư!",dimensionScores:{connection:25,contradiction:40,depth:15,objective:10,practice:10},options:[],explanation:"Thời gian lao động tất yếu tạo ra giá trị ngang bằng giá trị sức lao động; thời gian lao động thặng dư tạo ra giá trị thặng dư cho nhà tư bản.",coreLesson:"Tỷ suất m' phản ánh chính xác mức độ bóc lột của tư bản đối với lao động làm thuê."},{id:"C3-S2",chapter:3,topic:"Mục 3.1.3 • Các phương pháp sản xuất GTTD (Tuyệt đối & Tương đối)",title:"GTTD Tuyệt Đối vs GTTD Tương Đối Trong Quản Lý Doanh Nghiệp",difficulty:"Trung bình",philosophyConcept:"GTTD tuyệt đối & GTTD tương đối",image:"./assets/images/scenarios/c3-s2.svg",situation:"Hai giám đốc nhà máy may mặc đứng trước bài toán tăng lợi nhuận cho cổ đông. Giám đốc X ép công nhân làm việc từ 8h lên 11h mỗi ngày nhưng giữ nguyên lương. Giám đốc Y đầu tư dây chuyền cắt may tự động công nghệ Nhật Bản, giúp thời gian tạo ra giá trị ngang lương công nhân rút ngắn từ 4h xuống 2h, trong khi ngày làm việc vẫn giữ nguyên 8h.",question:"Phân tích bản chất hai phương pháp theo học thuyết của C. Mác?",dimensionScores:{connection:25,contradiction:35,depth:15,objective:15,practice:10},options:[{id:"A",text:"Giám đốc X áp dụng GTTD tuyệt đối (kéo dài ngày lao động), gây kiệt sức và đình công; Giám đốc Y áp dụng GTTD tương đối (rút ngắn thời gian tất yếu nhờ tăng NSLĐ), tiến bộ và hiệu quả hơn.",isDialectical:!0,consequence:"Nhà máy Y đạt năng suất kỷ lục, công nhân gắn bó, sản phẩm hạ giá thành và chiếm lĩnh thị trường; nhà máy X chìm trong khủng hoảng bãi công.",philosophicalLens:"C. Mác chỉ rõ: GTTD tuyệt đối có giới hạn tự nhiên và vấp phải sự kháng cự của giai cấp công nhân. GTTD tương đối dựa trên tiến bộ kỹ thuật là phương thức thống trị của CNTB hiện đại."},{id:"B",text:"Cả hai phương pháp đều giống hệt nhau, không có gì khác biệt về mặt bản chất kinh tế.",isDialectical:!1,consequence:"Không phân biệt được con đường phát triển công nghệ với con đường bóc lột cơ bắp thô sơ.",philosophicalLens:"Tư duy cào bằng, không thấy được sự tiến hóa từ sản xuất GTTD tuyệt đối sang GTTD tương đối gắn liền với cách mạng kỹ thuật."},{id:"C",text:"Phương pháp của Giám đốc X tốt hơn vì không tốn tiền mua máy móc hiện đại.",isDialectical:!1,consequence:"Nhà máy X bị đào thải vì chi phí đơn vị sản phẩm quá cao so với các đối thủ tự động hóa.",philosophicalLens:"Lối mòn lạc hậu thiển cận, chối bỏ quy luật phát triển của lực lượng sản xuất."}],explanation:"GTTD tuyệt đối thu được do kéo dài ngày lao động; GTTD tương đối thu được do rút ngắn thời gian lao động tất yếu bằng cách tăng năng suất lao động xã hội.",coreLesson:"Động lực cạnh tranh hiện đại phải dựa trên đổi mới sáng tạo và tăng năng suất lao động (GTTD tương đối), chứ không thể dựa vào kéo dài thời gian vắt kiệt sức lực."},{id:"C3-S4",chapter:3,topic:"Mục 3.2 • Tích lũy tư bản & Cấu tạo hữu cơ (c/v)",title:"Làn Sóng AI Sa Thải Hàng Loạt: Bản Chất Của Tích Lũy Tư Bản",difficulty:"Nâng cao",philosophyConcept:"Tích lũy tư bản & Cấu tạo hữu cơ của tư bản (c/v)",image:"./assets/images/scenarios/c3-s4.svg",situation:"Một tập đoàn công nghệ toàn cầu trích 60% lợi nhuận thặng dư để tái đầu tư: Họ mua hàng nghìn cụm chip xử lý AI và sa thải 40% nhân viên văn phòng, lập trình viên cấp thấp. Khối lượng sản phẩm tăng gấp 5 lần nhưng số công nhân có việc làm lại sụt giảm nghiêm trọng.",question:"Quy luật tích lũy tư bản và cấu tạo hữu cơ (c/v) của C. Mác lý giải điều này như thế nào?",dimensionScores:{connection:25,contradiction:35,depth:15,objective:15,practice:10},options:[{id:"A",text:"Tích lũy tư bản đi kèm tiến bộ kỹ thuật làm tăng cấu tạo hữu cơ của tư bản (c/v tăng nhanh): Tỷ trọng tư bản bất biến (máy móc, AI) tăng lên so với tư bản khả biến (thuê người), dẫn đến hiện tượng thất nghiệp công nghệ (đội quân thất nghiệp dự bị).",isDialectical:!0,consequence:"Hiểu đúng quy luật khách quan, người lao động chủ động nâng cấp kỹ năng lên các tầng bậc tư duy bậc cao mà AI không thay thế được, đồng thời xã hội nhận thức rõ sự cần thiết của chính sách an sinh.",philosophicalLens:"Quy luật chung của tích lũy tư bản của C. Mác: Sự phát triển của kỹ thuật làm c/v tăng lên, dẫn đến việc sản sinh ra một bộ phận dân cư thừa tương đối (đội quân lao động dự bị)."},{id:"B",text:"Do các nhà tư bản bỗng dưng trở nên độc ác và ghét bỏ con người chứ không có quy luật kinh tế nào chi phối.",isDialectical:!1,consequence:"Nhìn nhận vấn đề bằng cảm tính đạo đức cá nhân, không hiểu được bản chất kinh tế vận hành bên dưới.",philosophicalLens:"Rơi vào duy tâm đạo đức học, bỏ qua quy luật khách quan của quá trình tích lũy tư bản trong nền kinh tế thị trường."},{id:"C",text:"Cho rằng máy móc AI đã trở thành một giai cấp mới thống trị con người.",isDialectical:!1,consequence:"Hoang mang sợ hãi vô căn cứ vào công nghệ thay vì phân tích quan hệ sở hữu tư liệu sản xuất.",philosophicalLens:"Ảo tưởng bái vật giáo công nghệ, quên rằng máy móc chỉ là tư bản bất biến (c) do giai cấp nắm quyền sở hữu chi phối."}],explanation:"Cấu tạo hữu cơ của tư bản c/v có xu hướng ngày càng tăng trong quá trình tích lũy tư bản, làm nảy sinh tình trạng thất nghiệp tương đối và biến động việc làm.",coreLesson:"Nâng cao chất lượng nguồn nhân lực và học tập suốt đời là con đường tất yếu để thích ứng với quy luật tăng trưởng cấu tạo hữu cơ của nền kinh tế số."},{id:"C3-S7",chapter:3,topic:"Mục 3.2 • Tái sản xuất mở rộng & Quy mô tích lũy tư bản",title:"Chiến Lược Tái Đầu Tư: Tiêu Dùng Cá Nhân Hay Tích Lũy Tăng Trưởng?",difficulty:"Trung bình",philosophyConcept:"Thực chất của tích lũy tư bản & Các nhân tố ảnh hưởng",image:"./assets/images/scenarios/c3-s7.svg",situation:"Sau năm đầu tiên kinh doanh có lãi 10 tỷ đồng, hai nhà đồng sáng lập một công ty phần mềm tranh luận: Giám đốc A muốn rút toàn bộ 10 tỷ chia cổ tức để mua siêu xe và biệt thự hưởng thụ (tái sản xuất giản đơn). Giám đốc B kiên quyết giữ lại 7 tỷ đưa vào Quỹ tích lũy để nâng cấp cụm máy chủ AI, tuyển thêm kỹ sư giỏi và mở rộng quy mô phục vụ khách hàng (tái sản xuất mở rộng).",question:"Theo lý luận của C. Mác về Tích lũy tư bản, quyết định của Giám đốc B có ý nghĩa gì đối với sự tồn tại của doanh nghiệp?",dimensionScores:{connection:25,contradiction:20,depth:25,objective:20,practice:20},options:[{id:"A",text:"Tích lũy tư bản là tái sản xuất ra tư bản với quy mô mở rộng: Chuyển hóa giá trị thặng dư thành tư bản phụ thêm là điều kiện sống còn để doanh nghiệp đứng vững trước quy luật cạnh tranh khốc liệt.",isDialectical:!0,consequence:"Công ty liên tục nâng cấp công nghệ và mở rộng thị phần, vượt qua các đợt khủng hoảng thị trường và tăng trưởng giá trị doanh nghiệp lên gấp 10 lần sau 3 năm.",philosophicalLens:"Vận dụng chuẩn xác lý luận của C. Mác: Thực chất của tích lũy tư bản là sự chuyển hóa một phần giá trị thặng dư thành tư bản mới để tái sản xuất mở rộng."},{id:"B",text:"Nên rút hết 100% lợi nhuận tiêu xài cá nhân vì tái đầu tư công nghệ chỉ tốn kém chi phí vô ích.",isDialectical:!1,consequence:"Năm sau công nghệ lạc hậu, máy chủ sập nguồn, khách hàng bỏ sang đối thủ và công ty phá sản nhanh chóng.",philosophicalLens:"Tư duy hưởng thụ ngắn hạn của tái sản xuất giản đơn, hoàn toàn đi ngược lại quy luật cạnh tranh tư bản chủ nghĩa."},{id:"C",text:"Để nguyên 10 tỷ trong két sắt công ty làm tiền mặt dự trữ không mua sắm tư liệu sản xuất hay thuê mướn thêm ai.",isDialectical:!1,consequence:'Tiền mặt bị lạm phát bào mòn giá trị, đồng vốn "chết" không tạo ra thêm bất kỳ giá trị mới nào.',philosophicalLens:"Đồng nhất tư bản với tiền tệ tĩnh, quên rằng tư bản chỉ thực sự là tư bản khi nó vận động sinh lời (T - H - T')."}],explanation:"Tích lũy tư bản là biến một phần giá trị thặng dư thành tư bản mới để thực hiện tái sản xuất mở rộng, là động lực nâng cao năng lực sản xuất và quy mô thị phần.",coreLesson:"Tái đầu tư khôn ngoan từ lợi nhuận thặng dư là chìa khóa vàng đưa doanh nghiệp và cá nhân từ tích lũy nhỏ đến vị thế trường tồn."},{id:"C3-S5",chapter:3,topic:"Mục 3.3 • Chi phí sản xuất (k) & Lợi nhuận (p)",title:"Ảo Tưởng Lợi Nhuận: Chi Phí Thực Tế (c+v+m) vs Chi Phí Tư Bản (c+v)",difficulty:"Trung bình",philosophyConcept:"Chi phí sản xuất (k) & Lợi nhuận (p)",image:"./assets/images/scenarios/c3-s5.svg",situation:"Nam mở chuỗi tiệm trà sữa. Chi phí thuê mặt bằng, máy móc, nguyên liệu ($c$) là 80 triệu/tháng; tiền lương nhân viên ($v$) là 40 triệu/tháng. Tổng doanh thu là 160 triệu. Nam vui mừng nghĩ rằng toàn bộ số tiền 40 triệu dôi ra ($p$) là do tài kinh doanh và mặt bằng của mình tự tạo ra.",question:"Bản chất mối quan hệ giữa Giá trị thặng dư ($m$) và Lợi nhuận ($p$) theo C. Mác là gì?",dimensionScores:{connection:30,contradiction:35,depth:15,objective:10,practice:10},options:[{id:"A",text:"Lợi nhuận (p) chỉ là hình thức chuyển hóa bề ngoài của Giá trị thặng dư (m). Nó làm mờ nhạt nguồn gốc thực sự: Mọi người tưởng lợi nhuận do toàn bộ chi phí tư bản (c+v) sinh ra, nhưng thực chất chỉ do lao động sống của nhân viên (v) tạo ra.",isDialectical:!0,consequence:"Nam nhận thức đúng đắn nguồn gốc của lợi nhuận, biết trân trọng và đãi ngộ xứng đáng đội ngũ nhân viên pha chế, phục vụ; chuỗi cửa hàng vận hành trơn tru và phát triển bền vững.",philosophicalLens:"Phân tích của C. Mác: Lợi nhuận là hình thức biểu hiện của giá trị thặng dư trên bề mặt thị trường. Khái niệm chi phí sản xuất tư bản k = c + v đã xóa nhòa sự khác biệt giữa c và v, che đậy nguồn gốc bóc lột."},{id:"B",text:"Lợi nhuận 40 triệu hoàn toàn do mặt bằng đẹp và may mắn sinh ra, công sức nhân viên đã được trả đủ trong 40 triệu tiền lương.",isDialectical:!1,consequence:"Nam đối xử tệ bạc với nhân viên, chất lượng phục vụ lao dốc, khách hàng bỏ đi và quán thua lỗ.",philosophicalLens:"Rơi vào ảo giác thị trường, lẫn lộn hình thái biểu hiện bề ngoài với thực thể giá trị thặng dư bên trong."},{id:"C",text:"Cho rằng Nam không có quyền thu bất kỳ khoản lợi nhuận nào và phải chia đều toàn bộ doanh thu cho nhân viên.",isDialectical:!1,consequence:"Chuỗi cửa hàng không có vốn tích lũy để bù đắp khấu hao máy móc và tái đầu tư mở rộng, nhanh chóng phá sản.",philosophicalLens:"Ảo tưởng bình quân chủ nghĩa thô thiển, chối bỏ chức năng quản lý và chi phí rủi ro của nhà đầu tư trong kinh tế thị trường."}],explanation:"Lợi nhuận là giá trị thặng dư khi được so với toàn bộ tư bản ứng trước (k = c + v), phản ánh hiệu quả sinh lời bề mặt nhưng che giấu nguồn gốc sáng tạo từ lao động sống.",coreLesson:"Nhà quản trị hiện đại cần hiểu rõ bản chất của lợi nhuận để xây dựng chính sách phân phối hài hòa, tôn trọng giá trị cống hiến của người lao động."},{id:"C3-S6",chapter:3,topic:"Mục 3.3 • Lợi nhuận bình quân, Lợi tức & Địa tô",title:"Dòng Vốn Chảy Về Đâu: Quy Luật Hình Thành Lợi Nhuận Bình Quân",difficulty:"Nâng cao",philosophyConcept:"Cạnh tranh giữa các ngành & Tỷ suất lợi nhuận bình quân",image:"./assets/images/scenarios/c3-s6.svg",situation:"Nhà đầu tư Quang nhận thấy ngành sản xuất cơ khí có cấu tạo hữu cơ cao (tỷ suất lợi nhuận chỉ 15%), trong khi ngành dịch vụ thương mại số có tỷ suất lợi nhuận lên đến 40%. Rất nhiều nhà đầu tư ồ ạt rút vốn khỏi cơ khí đổ dồn vào dịch vụ số. Sau một thời gian, nguồn cung dịch vụ số dư thừa khiến giá cả giảm xuống, còn cơ khí thiếu hụt nguồn cung khiến giá cả tăng lên, tỷ suất lợi nhuận hai ngành dần kéo về mức ngang nhau (khoảng 25%).",question:"Quy luật kinh tế nào của C. Mác đang chi phối hiện tượng san bằng lợi nhuận này?",dimensionScores:{connection:30,contradiction:25,depth:25,objective:15,practice:15},options:[{id:"A",text:"Cạnh tranh giữa các ngành làm cho tư bản tự do di chuyển từ ngành có tỷ suất lợi nhuận thấp sang ngành có tỷ suất lợi nhuận cao, dẫn tới hình thành tỷ suất lợi nhuận bình quân và chuyển hóa giá trị thành giá cả sản xuất.",isDialectical:!0,consequence:"Quang hiểu rõ quy luật dòng vốn thị trường, không đu đỉnh theo tâm lý đám đông mà đón đầu tái cơ cấu vốn hiệu quả, bảo toàn và gia tăng giá trị tài sản bền vững.",philosophicalLens:"Vận dụng chuẩn xác lý luận của C. Mác: Cạnh tranh giữa các ngành dẫn tới hình thành tỷ suất lợi nhuận bình quân (p̄), giá trị hàng hóa chuyển hóa thành giá cả sản xuất (k + p̄)."},{id:"B",text:"Tỷ suất lợi nhuận 40% ở ngành dịch vụ số là vĩnh viễn và không bao giờ giảm vì công nghệ số đứng ngoài quy luật kinh tế.",isDialectical:!1,consequence:"Dồn hết vốn vào đu đỉnh khi thị trường đã bão hòa, chịu thua lỗ nặng nề do giá cả dịch vụ lao dốc khi nguồn cung thừa mứa.",philosophicalLens:"Tư duy siêu hình tách rời công nghệ khỏi quy luật cung cầu và cạnh tranh kinh tế khách quan."},{id:"C",text:"Nhà nước nên cấm tư bản di chuyển giữa các ngành để giữ cố định tỷ suất lợi nhuận của từng ngành theo ý muốn.",isDialectical:!1,consequence:"Triệt tiêu động lực cạnh tranh, dẫn đến nền kinh tế đình đốn và phân bổ sai lệch nguồn lực xã hội.",philosophicalLens:"Chủ quan duy ý chí, vi phạm quy luật lưu thông tự do của tư bản trong kinh tế thị trường."}],explanation:"Cạnh tranh giữa các ngành là cơ chế hình thành tỷ suất lợi nhuận bình quân (p̄), biến giá trị hàng hóa thành giá cả sản xuất (K + p̄).",coreLesson:"Không có ngành nào siêu lợi nhuận mãi mãi; dòng vốn thị trường luôn tự điều tiết theo quy luật bình quân hóa, doanh nghiệp phải liên tục nâng cao năng lực cạnh tranh cốt lõi."},{id:"C4-S1",chapter:4,topic:"Mục 4.1 • Cạnh tranh dẫn đến độc quyền trong KTTT",title:"Cuộc Chiến Sàn Thương Mại Điện Tử: Đốt Tiền Chiếm Lĩnh Thị Phần",difficulty:"Trung bình",philosophyConcept:"Tích tụ, tập trung sản xuất & Độc quyền",image:"./assets/images/scenarios/c4-s1.svg",situation:'Hai sàn thương mại điện tử lớn liên tục "đốt tiền" trợ giá vận chuyển và giảm giá sốc trong 5 năm liền, khiến hàng chục sàn thương mại điện tử nhỏ và các cửa hàng truyền thống phải giải thể. Sau khi đối thủ yếu thế rút lui hoàn toàn, sàn chiến thắng bắt đầu tăng phí người bán từ 3% lên 15% và cắt bỏ mã giảm giá cho người mua.',question:"Lý luận của V.I. Lênin về cạnh tranh và độc quyền giải thích bản chất hiện tượng này như thế nào?",dimensionScores:{connection:30,contradiction:20,depth:35,objective:10,practice:5},options:[{id:"A",text:"Cạnh tranh tự do khốc liệt tất yếu dẫn tới tích tụ và tập trung tư bản, sinh ra Độc quyền; khi đã chiếm vị thế độc quyền, doanh nghiệp sẽ áp đặt Giá cả độc quyền để thu Lợi nhuận độc quyền cao.",isDialectical:!0,consequence:"Nhận diện rõ bản chất độc quyền công nghệ, cơ quan quản lý nhà nước kịp thời can thiệp bằng Luật Cạnh tranh, chống lạm dụng vị thế thống lĩnh thị trường để bảo vệ người tiêu dùng.",philosophicalLens:"Luận điểm kinh điển của V.I. Lênin: Tự do cạnh tranh đẻ ra tập trung sản xuất và sự tập trung sản xuất này, khi phát triển tới một mức độ nhất định, lại dẫn tới độc quyền."},{id:"B",text:"Cho rằng việc sàn tăng phí là hoàn toàn nhân từ và người tiêu dùng nên biết ơn vì trước đây đã được dùng mã giảm giá.",isDialectical:!1,consequence:"Bị động chấp nhận sự chèn ép giá cả độc quyền mà không có biện pháp bảo vệ quyền lợi hợp pháp.",philosophicalLens:"Ngây thơ về mặt nhận thức kinh tế, không hiểu rằng trợ giá giai đoạn đầu chỉ là chiến thuật tiêu diệt cạnh tranh để độc quyền áp đặt giá sau này."},{id:"C",text:"Kêu gọi quay trở lại thời kỳ buôn bán đổi hàng thời nguyên thủy, cấm hoàn toàn thương mại điện tử.",isDialectical:!1,consequence:"Tự cô lập khỏi tiến bộ công nghệ và làm chậm bước phát triển kinh tế số của đất nước.",philosophicalLens:"Tư tưởng thụt lùi phản động, chống lại sự phát triển tất yếu của lực lượng sản xuất văn minh."}],explanation:"Cạnh tranh tự do thúc đẩy tích tụ và tập trung sản xuất đến một trình độ nhất định sẽ dẫn tới độc quyền, áp đặt giá cả độc quyền để chiếm đoạt lợi nhuận độc quyền cao.",coreLesson:"Phải luôn tỉnh táo nhận diện ranh giới giữa cạnh tranh lành mạnh và hành vi thao túng độc quyền để bảo vệ môi trường kinh tế năng động."},{id:"C4-S2",chapter:4,topic:"Mục 4.2 • Độc quyền nhà nước & Can thiệp kinh tế trong CNTB",title:"Giá Điện & Xăng Dầu: Độc Quyền Tư Nhân Hay Nhà Nước Điều Tiết?",difficulty:"Nâng cao",philosophyConcept:"Bản chất của Độc quyền nhà nước & Điều tiết kinh tế",image:"./assets/images/scenarios/c4-s2.svg",situation:"Trước làn sóng khủng hoảng năng lượng toàn cầu, một số chuyên gia đề xuất tư nhân hóa 100% ngành điện lực và xăng dầu để giá thả nổi hoàn toàn theo thị trường tự do. Tuy nhiên, nhiều ý kiến lo ngại nếu thả nổi cho các tập đoàn tư nhân độc quyền, giá điện sẽ tăng vọt vào mùa nắng nóng, đẩy hàng triệu gia đình nghèo và nhà máy vào cảnh khốn đốn.",question:"Dưới góc độ Kinh tế chính trị Mác – Lênin, vai trò điều tiết của Nhà nước trong các ngành độc quyền tự nhiên là gì?",dimensionScores:{connection:25,contradiction:20,depth:30,objective:20,practice:5},options:[{id:"A",text:"Nhà nước phải nắm giữ vị thế chủ đạo trong các ngành kết cấu hạ tầng then chốt (độc quyền nhà nước) để kiểm soát giá cả, ngăn chặn đầu cơ trục lợi và bảo đảm an sinh xã hội, an ninh năng lượng quốc gia.",isDialectical:!0,consequence:"Hệ thống năng lượng quốc gia duy trì ổn định, sản xuất không bị đứt gãy, đời sống người dân được bảo hộ trước các cú sốc lạm phát toàn cầu.",philosophicalLens:"Lý luận về độc quyền nhà nước: Nhà nước can thiệp vào các mắt xích kinh tế trọng yếu để điều tiết mâu thuẫn xã hội, bảo đảm sự vận hành ổn định của toàn bộ nền kinh tế quốc dân."},{id:"B",text:"Bán đứt toàn bộ mạng lưới điện quốc gia cho một tập đoàn tư nhân nước ngoài duy nhất để thu một khoản tiền lớn ngắn hạn.",isDialectical:!1,consequence:"An ninh năng lượng quốc gia rơi vào tay tập đoàn ngoại quốc, giá điện bị thao túng gây bất ổn chính trị - xã hội.",philosophicalLens:"Mất cảnh giác kinh tế, biến độc quyền tự nhiên công cộng thành độc quyền tư nhân bóc lột toàn xã hội."},{id:"C",text:"Cung cấp điện miễn phí hoàn toàn cho tất cả mọi người bất kể mức tiêu dùng.",isDialectical:!1,consequence:"Tình trạng lãng phí điện năng khủng khiếp, vỡ lưới điện quốc gia và ngân sách nhà nước phá sản.",philosophicalLens:"Chủ nghĩa dân túy viển vông, vi phạm các quy luật kinh tế hàng hóa và tái sản xuất mở rộng."}],explanation:"Nhà nước giữ vai trò then chốt trong các ngành hạ tầng độc quyền tự nhiên nhằm định hướng phát triển, bình ổn kinh tế vĩ mô và phục vụ lợi ích cộng đồng.",coreLesson:"Thị trường tự do cần đi đôi với sự điều tiết sáng suốt của Nhà nước để bảo vệ an ninh kinh tế và công bằng xã hội."},{id:"C4-S3",chapter:4,topic:"Mục 4.3 • Biểu hiện mới của độc quyền số (Big Tech)",title:"Thuật Toán Giam Giữ Dữ Liệu: Độc Quyền Trong Kỷ Nguyên Trí Tuệ Nhân Tạo",difficulty:"Nâng cao",philosophyConcept:"Biểu hiện mới của độc quyền thời đại công nghệ số",image:"./assets/images/scenarios/c4-s3.svg",situation:'Một nền tảng mạng xã hội khổng lồ nắm giữ hành vi dữ liệu của 2 tỷ người dùng. Họ sử dụng thuật toán độc quyền để ưu tiên các sản phẩm của công ty con, đồng thời mua đứt hoặc sao chép mọi tính năng của các startup công nghệ vừa mới nhen nhóm. Bất kỳ doanh nghiệp nào muốn tiếp cận khách hàng đều phải nộp "phế" quảng cáo đắt đỏ.',question:"Đặc điểm mới của độc quyền công nghệ hiện đại phản ánh điều gì theo KTCT Mác – Lênin?",dimensionScores:{connection:30,contradiction:20,depth:35,objective:10,practice:5},options:[{id:"A",text:"Tư bản độc quyền đã chuyển hóa từ chiếm giữ đất đai, nhà xưởng sang chiếm giữ Dữ liệu lớn (Big Data) và Nền tảng số; độc quyền dữ liệu trở thành rào cản ngăn chặn đối thủ mới và áp đặt quan hệ phụ thuộc.",isDialectical:!0,consequence:"Nhận thức sâu sắc bản chất độc quyền mới giúp các nước xây dựng hành lang pháp lý về chủ quyền dữ liệu số, thúc đẩy khả năng tương tác mở và bảo vệ quyền đổi mới sáng tạo.",philosophicalLens:"Sự phát triển của lý luận V.I. Lênin trong thế kỷ XXI: Bản chất bóc lột và áp đặt của chủ nghĩa tư bản độc quyền không đổi, nhưng hình thái biểu hiện đã nâng lên cấp độ độc quyền sở hữu trí tuệ và hạ tầng số."},{id:"B",text:"Cho rằng đây chỉ là sự tiện lợi thuần túy của công nghệ, người dùng không mất gì khi cung cấp dữ liệu miễn phí.",isDialectical:!1,consequence:"Dữ liệu cá nhân bị thương mại hóa và thao túng tâm lý mua sắm, các doanh nghiệp bản địa bị bóp nghẹt.",philosophicalLens:'Ngây thơ về mặt chính trị kinh tế: "Nếu bạn không phải trả tiền cho sản phẩm, chính bạn là sản phẩm bị bán".'},{id:"C",text:"Đập phá điện thoại máy tính, ngừng sử dụng Internet để chống lại các tập đoàn Big Tech.",isDialectical:!1,consequence:"Lặp lại phong trào đập phá máy móc (Luddite) thế kỷ XIX, tự loại mình ra khỏi dòng chảy phát triển của văn minh.",philosophicalLens:"Phản kháng tiêu cực mù quáng, không biết sử dụng thể chế và sức mạnh xã hội để điều tiết độc quyền."}],explanation:"Trong thời đại số, độc quyền sở hữu dữ liệu và nền tảng thuật toán là biểu hiện mới của tư bản độc quyền, đòi hỏi khuôn khổ thể chế hiện đại để kiểm soát.",coreLesson:"Làm chủ công nghệ và xây dựng thể chế quản trị dữ liệu minh bạch là vũ khí sống còn để chống lại sự thao túng của các tập đoàn độc quyền xuyên quốc gia."},{id:"C5-S4",chapter:5,topic:"Mục 5.1.2 • Tính tất yếu khách quan của KTTT định hướng XHCN",title:'Vì Sao Không Thể "Đốt Cháy Giai Đoạn"? Tính Tất Yếu Của Kinh Tế Thị Trường',difficulty:"Nâng cao",philosophyConcept:"Tính tất yếu khách quan của KTTT định hướng XHCN ở Việt Nam",image:"./assets/images/scenarios/c5-s4.svg",situation:'Trong một buổi tọa đàm lịch sử kinh tế, một sinh viên đặt câu hỏi: "Tại sao Việt Nam sau năm 1975 áp dụng mô hình kinh tế kế hoạch hóa tập trung, bao cấp thì kinh tế lại rơi vào khủng hoảng thiếu hụt hàng hóa trầm trọng; và từ Đại hội VI (1986) chuyển sang Kinh tế thị trường thì của cải lại dồi dào, đất nước bứt phá ngoạn mục?".',question:"Dưới góc nhìn KTCT Mác – Lênin, tính tất yếu khách quan của việc phát triển KTTT định hướng XHCN ở Việt Nam được giải thích như thế nào?",dimensionScores:{connection:25,contradiction:25,depth:30,objective:20,practice:20},options:[{id:"A",text:"Việt Nam đi lên CNXH từ điểm xuất phát thấp, lực lượng sản xuất còn nhiều tầng nấc; do đó phát triển kinh tế thị trường là tất yếu khách quan để khai phóng sức sản xuất, kích thích sáng tạo và phân bổ hiệu quả nguồn lực xã hội theo quy luật giá trị.",isDialectical:!0,consequence:"Hiểu sâu sắc đường lối Đổi mới của Đảng, nhận thức rõ KTTT là phương tiện hữu hiệu để xây dựng cơ sở vật chất cho CNXH chứ không đối lập với mục tiêu XHCN.",philosophicalLens:"Vận dụng chuẩn xác quy luật QHSX phải phù hợp với trình độ phát triển của LLSX: Không thể dùng ý chí chủ quan xóa bỏ quan hệ hàng hóa - tiền tệ khi LLSX chưa cho phép."},{id:"B",text:"Khủng hoảng thời bao cấp chỉ do thời tiết và thiên tai, không liên quan gì đến quy luật kinh tế thị trường.",isDialectical:!1,consequence:"Không rút ra được bài học lịch sử, dễ rơi vào ảo tưởng duy tâm chủ quan khi hoạch định chính sách kinh tế.",philosophicalLens:"Chủ nghĩa duy tâm chủ quan né tránh thừa nhận quy luật kinh tế khách quan."},{id:"C",text:"Kinh tế thị trường là bản chất riêng của CNTB, việc Việt Nam phát triển KTTT đồng nghĩa với việc từ bỏ hoàn toàn mục tiêu định hướng xã hội chủ nghĩa.",isDialectical:!1,consequence:"Mất phương hướng tư tưởng chính trị, hoang mang hoài nghi về con đường phát triển của đất nước.",philosophicalLens:"Tư duy siêu hình nhầm lẫn giữa bản chất của KTTT (phương tiện phân bổ nguồn lực) với bản chất chế độ chính trị xã hội."}],explanation:"Phát triển KTTT định hướng XHCN là bước đi tất yếu phù hợp với quy luật phát triển khách quan để xây dựng cơ sở vật chất - kỹ thuật cho CNXH.",coreLesson:"Không thể dùng ý chí chủ quan áp đặt quy luật kinh tế; phát triển kinh tế thị trường là con đường văn minh tất yếu để đưa dân tộc đến ấm no và phồn vinh."},{id:"C5-S1",chapter:5,topic:"Mục 5.1.1 & 5.1.3 • Khái niệm & Đặc trưng KTTT định hướng XHCN",title:"Phát Triển Kinh Tế Tư Nhân Đi Đôi Với Giữ Vững An Sinh Xã Hội",difficulty:"Trung bình",philosophyConcept:"Kinh tế thị trường định hướng XHCN ở Việt Nam",image:"./assets/images/scenarios/c5-s1.svg",situation:"Khi thảo luận về mô hình phát triển kinh tế của Việt Nam, nhóm bạn tranh luận sôi nổi: An cho rằng đã làm kinh tế thị trường thì phải tư nhân hóa hết như phương Tây; Bình lại muốn quay về bao cấp nhà nước bao trọn gói; Chi khẳng định con đường KTTT định hướng XHCN của Việt Nam là sự kết hợp sáng tạo giữa năng động thị trường và mục tiêu nhân văn XHCN.",question:"Đâu là bản chất cốt lõi của nền Kinh tế thị trường định hướng XHCN ở nước ta?",dimensionScores:{connection:25,contradiction:15,depth:15,objective:35,practice:10},options:[{id:"A",text:'Vận hành theo các quy luật thị trường đầy đủ, phát huy vai trò của nhiều thành phần kinh tế (kinh tế tư nhân là động lực quan trọng), đồng thời có sự quản lý của Nhà nước pháp quyền XHCN nhằm mục tiêu "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh".',isDialectical:!0,consequence:"Kinh tế tăng trưởng năng động, thu hút đầu tư mạnh mẽ, đồng thời tỷ lệ hộ nghèo giảm kỷ lục, giáo dục y tế và hạ tầng công cộng được bảo đảm cho mọi người dân.",philosophicalLens:"Mô hình kinh tế sáng tạo của Đảng ta: Kinh tế thị trường là phương tiện phát triển lực lượng sản xuất; định hướng XHCN là mục tiêu bảo đảm tiến bộ và công bằng xã hội trong từng bước phát triển."},{id:"B",text:"Tư nhân hóa hoàn toàn bệnh viện, trường học, rừng phòng hộ và thả nổi cho phân hóa giàu nghèo tự do không can thiệp.",isDialectical:!1,consequence:"Người nghèo mất cơ hội tiếp cận y tế giáo dục, bất bình đẳng xã hội đào sâu và gây mất ổn định an ninh trật tự.",philosophicalLens:"Chệch hướng sang mô hình chủ nghĩa tư bản tân tự do, đánh mất bản chất ưu việt vì con người của chế độ xã hội chủ nghĩa."},{id:"C",text:"Cấm đoán doanh nghiệp tư nhân, xóa bỏ thị trường tự do và quay lại cơ chế tem phiếu bao cấp.",isDialectical:!1,consequence:"Triệt tiêu động lực lao động sáng tạo, nền kinh tế rơi vào khan hiếm trì trệ và khủng hoảng thiếu hụt hàng hóa.",philosophicalLens:"Rơi vào căn bệnh giáo điều duy ý chí, trái với quy luật khách quan của thời kỳ quá độ lên CNXH."}],explanation:"KTTT định hướng XHCN ở Việt Nam sử dụng cơ chế thị trường để giải phóng sức sản xuất, đồng thời định hướng xã hội chủ nghĩa bảo đảm tăng trưởng gắn liền với công bằng xã hội.",coreLesson:"Mục đích cuối cùng của phát triển kinh tế không phải là những con số GDP vô cảm, mà là ấm no, tự do và hạnh phúc thực sự của nhân dân."},{id:"C5-S3",chapter:5,topic:"Mục 5.2.1 • Sự cần thiết phải hoàn thiện thể chế KTTT",title:'Tháo Gỡ "Rào Cản Vô Hình": Thể Chế Cho Đổi Mới Sáng Tạo',difficulty:"Nâng cao",philosophyConcept:"Hoàn thiện thể chế KTTT định hướng XHCN",image:"./assets/images/scenarios/c5-s3.svg",situation:"Một nhóm kỹ sư trẻ tại Việt Nam phát minh ra thiết bị y tế bay không người lái để cứu hộ khẩn cấp. Khi muốn đưa vào thử nghiệm thực tế, họ bị mắc kẹt suốt 2 năm vì các quy định cũ chưa có tiền lệ quản lý thiết bị bay không người lái kết hợp dịch vụ y tế. Họ đứng trước nguy cơ bán bản quyền ra nước ngoài.",question:'Yêu cầu "Hoàn thiện thể chế kinh tế thị trường định hướng XHCN" ở Việt Nam đặt ra bài toán gì trong tình huống này?',dimensionScores:{connection:30,contradiction:15,depth:20,objective:20,practice:15},options:[{id:"A",text:"Chủ động xây dựng cơ chế thử nghiệm có kiểm soát (Sandbox) và cải cách thể chế pháp lý linh hoạt để khơi thông nguồn lực sáng tạo, bảo đảm vừa an toàn vừa thúc đẩy công nghệ mới phụng sự nhân dân.",isDialectical:!0,consequence:"Dự án cứu hộ y tế được cấp phép thử nghiệm thành công, cứu sống hàng trăm người vùng bão lũ và đưa Việt Nam thành điểm sáng công nghệ cứu hộ khu vực.",philosophicalLens:"Thể chế kinh tế là luật chơi định hình hành vi kinh tế. Hoàn thiện thể chế là tiền đề mở đường cho lực lượng sản xuất mới phát triển, xóa bỏ rào cản hành chính quan liêu kìm hãm đổi mới."},{id:"B",text:"Cấm tuyệt đối mọi phát minh sáng tạo mới chưa có sẵn trong văn bản luật từ 20 năm trước.",isDialectical:!1,consequence:"Chảy máu chất xám trầm trọng, các tài năng công nghệ bỏ ra nước ngoài khởi nghiệp, đất nước lỡ nhịp chuyến tàu công nghệ hiện đại.",philosophicalLens:"Tư duy bảo thủ quan liêu, kiến trúc thượng tầng xơ cứng trở thành lực cản kìm hãm sự phát triển của lực lượng sản xuất mới."},{id:"C",text:"Cho phép bay thử nghiệm tự do không cần đăng ký hay quản lý an toàn bầu trời.",isDialectical:!1,consequence:"Gây nguy cơ va chạm hàng không và mất an toàn trật tự công cộng.",philosophicalLens:"Tự do vô chính phủ buông lỏng quản lý, đánh mất vai trò định hướng bảo vệ an toàn chung của Nhà nước."}],explanation:"Hoàn thiện thể chế kinh tế thị trường định hướng XHCN là khâu đột phá chiến lược nhằm tạo lập môi trường kinh doanh minh bạch, giải phóng triệt để sức sản xuất.",coreLesson:"Thể chế tiến bộ là bệ phóng cho đổi mới sáng tạo; hoàn thiện thể chế chính là khơi thông dòng chảy phát triển của đất nước."},{id:"C5-S5",chapter:5,topic:"Mục 5.2.2 • Hoàn thiện thể chế KTTT trên các khía cạnh chủ yếu",title:"Minh Bạch Thị Trường Yếu Tố Sản Xuất: Vốn, Đất Đai & Công Nghệ",difficulty:"Nâng cao",philosophyConcept:"Hoàn thiện đồng bộ các loại thị trường và yếu tố thị trường",image:"./assets/images/scenarios/c5-s5.svg",situation:'Tại một tỉnh công nghiệp, một doanh nghiệp tư nhân sáng tạo công nghệ xử lý rác thải thành năng lượng sạch muốn tiếp cận quỹ đất và nguồn vốn vay ưu đãi nhưng bị vướng bởi cơ chế "xin - cho", trong khi một số dự án bất động sản đầu cơ lại dễ dàng tiếp cận đất đai và vốn vay rồi bỏ hoang lãng phí. Lãnh đạo tỉnh quyết định đưa toàn bộ việc đấu giá đất đai, cấp tín dụng và chuyển giao công nghệ lên sàn giao dịch thị trường công khai, minh bạch.',question:'Giải pháp của lãnh đạo tỉnh thể hiện khía cạnh nào trong nội dung "Hoàn thiện thể chế KTTT định hướng XHCN"?',dimensionScores:{connection:30,contradiction:20,depth:25,objective:20,practice:25},options:[{id:"A",text:"Phát triển đồng bộ các yếu tố thị trường và các loại thị trường (vốn, đất đai, công nghệ); xóa bỏ cơ chế xin - cho và bảo đảm các thành phần kinh tế bình đẳng tiếp cận nguồn lực theo nguyên tắc thị trường minh bạch.",isDialectical:!0,consequence:"Dự án công nghệ xanh nhận được mặt bằng và vốn sạch, đi vào vận hành xử lý 100% rác thải của tỉnh, đồng thời ngân sách nhà nước thu về hàng nghìn tỷ đồng từ đấu giá đất công khai minh bạch.",philosophicalLens:"Vận dụng chuẩn xác nội dung hoàn thiện thể chế: Phát triển đồng bộ các loại thị trường và các yếu tố thị trường nhằm khắc phục khiếm khuyết phân bổ nguồn lực của cơ chế bao cấp."},{id:"B",text:"Tiếp tục duy trì cơ chế đặc quyền xin - cho ngầm để ưu ái riêng cho các doanh nghiệp thân hữu.",isDialectical:!1,consequence:"Tạo mảnh đất màu mỡ cho tham nhũng, lãng phí tài nguyên đất đai và bóp nghẹt các doanh nghiệp sáng tạo chân chính.",philosophicalLens:"Bảo thủ thể chế duy trì lợi ích nhóm tiêu cực kìm hãm sự phát triển của nền kinh tế."},{id:"C",text:"Đóng cửa thị trường đất đai và tài chính, cấm hoàn toàn doanh nghiệp tư nhân tham gia đầu tư công nghệ xanh.",isDialectical:!1,consequence:"Triệt tiêu nguồn lực xã hội hóa của tư nhân, nhà nước phải gánh toàn bộ chi phí khổng lồ không kham nổi.",philosophicalLens:"Kỳ thị thành phần kinh tế tư nhân, đi ngược lại quan điểm coi kinh tế tư nhân là một động lực quan trọng của KTTT định hướng XHCN."}],explanation:"Hoàn thiện thể chế KTTT định hướng XHCN đòi hỏi phát triển đồng bộ các loại thị trường yếu tố sản xuất để nguồn lực xã hội chảy vào nơi tạo ra giá trị cao nhất.",coreLesson:"Một thể chế thị trường minh bạch và bình đẳng là chiếc đòn bẩy vĩ đại nhất để thu hút nhân tài và khơi thông mọi nguồn lực phát triển quốc gia."},{id:"C5-S2",chapter:5,topic:"Mục 5.3 • Các quan hệ lợi ích kinh tế ở Việt Nam",title:"Tam Giác Lợi Ích: Nhân Viên – Doanh Nghiệp – Cộng Đồng Xã Hội",difficulty:"Trung bình",philosophyConcept:"Quan hệ lợi ích kinh tế & Sự hài hòa",image:"./assets/images/scenarios/c5-s2.svg",situation:"Một khu công nghiệp chế biến hải sản tại miền Trung đạt doanh thu hàng nghìn tỷ đồng mỗi năm. Tuy nhiên, họ xả thải chưa qua xử lý ra biển làm chết cá của ngư dân, đồng thời trả lương công nhân rất thấp để ép chi phí. Công nhân đình công, ngư dân biểu tình phản đối gay gắt.",question:"Theo nguyên lý về các quan hệ lợi ích kinh tế trong KTCT Mác – Lênin, hướng giải quyết căn cơ là gì?",dimensionScores:{connection:20,contradiction:20,depth:15,objective:40,practice:5},options:[{id:"A",text:"Thiết lập cơ chế hài hòa lợi ích: Lợi ích kinh tế của doanh nghiệp phải gắn liền với lợi ích chính đáng của người lao động (tăng lương, thưởng) và lợi ích xã hội (đầu tư hệ thống xử lý nước thải chuẩn mực).",isDialectical:!0,consequence:"Doanh nghiệp phát triển bền vững, công nhân hăng say sản xuất, môi trường biển được bảo tồn, cộng đồng địa phương hòa hợp đồng hành.",philosophicalLens:"Quan điểm Mác - Lênin: Lợi ích kinh tế là động lực trực tiếp của các chủ thể. Trong KTTT định hướng XHCN, Nhà nước phải đóng vai trò nhạc trưởng điều hòa mâu thuẫn, không để lợi ích cá nhân cục bộ chà đạp lợi ích tập thể và xã hội."},{id:"B",text:"Doanh nghiệp dùng tiền mua chuộc một số cá nhân và tiếp tục lén lút xả thải ban đêm để giữ nguyên siêu lợi nhuận.",isDialectical:!1,consequence:"Bị cơ quan chức năng khởi tố hình sự, doanh nghiệp bị đình chỉ hoạt động vĩnh viễn và lãnh đạo vướng vòng lao lý.",philosophicalLens:"Lối tư duy vị kỷ thiển cận, chà đạp quy luật khách quan về sự gắn kết biện chứng giữa các lợi ích kinh tế."},{id:"C",text:"Đóng cửa toàn bộ các nhà máy chế biến, cấm tuyệt đối sản xuất công nghiệp để giữ môi trường nguyên sơ.",isDialectical:!1,consequence:"Hàng chục nghìn người mất việc làm, nông ngư nghiệp không có đầu ra chế biến và kinh tế địa phương kiệt quệ.",philosophicalLens:"Tư duy cực đoan máy móc, giải quyết mâu thuẫn bằng cách tiêu diệt sự phát triển thay vì hài hòa các mặt đối lập."}],explanation:"Lợi ích kinh tế là động lực nội tại của hoạt động kinh tế. Sự hài hòa giữa lợi ích cá nhân, lợi ích doanh nghiệp và lợi ích xã hội là điều kiện tiên quyết cho sự phát triển bền vững.",coreLesson:"Một doanh nghiệp chỉ có thể phát triển trường tồn khi biết chia sẻ lợi ích công bằng với người lao động và cộng đồng xã hội."},{id:"C6-S4",chapter:6,topic:"Mục 6.1.1 • Khái quát cách mạng công nghiệp & Công nghiệp hóa",title:"Bốn Làn Sóng Cách Mạng Công Nghiệp: Bài Học Chuyển Mình Thời Đại AI",difficulty:"Cơ bản",philosophyConcept:"Lịch sử 4 cuộc CMCN & Bước nhảy vọt về chất trong tư liệu lao động",image:"./assets/images/scenarios/c6-s4.svg",situation:'Trong một buổi chia sẻ định hướng nghề nghiệp, một diễn giả trình bày lịch sử: Từ thế kỷ XVIII đến nay nhân loại đã trải qua 4 cuộc CMCN (1.0 Hơi nước → 2.0 Điện khí hóa → 3.0 Công nghệ thông tin → 4.0 Trí tuệ nhân tạo & Big Data). Một nhóm sinh viên lo lắng tự hỏi: "Nếu AI và robot đang dần thay thế các công việc lập trình thô và dịch thuật cơ bản, chúng ta phải làm gì để không bị đào thải?".',question:"Theo quy luật phát triển của các cuộc CMCN trong KTCT Mác – Lênin, sinh viên cần định hướng tư duy như thế nào?",dimensionScores:{connection:25,contradiction:25,depth:20,objective:15,practice:25},options:[{id:"A",text:"Mỗi cuộc CMCN là bước nhảy vọt về chất của tư liệu lao động, tất yếu thay đổi căn bản phân công lao động xã hội: Người lao động phải chủ động học tập suốt đời, làm chủ công cụ AI mới và nâng cao năng lực tư duy phản biện, sáng tạo phức hợp để giữ vai trò chủ đạo.",isDialectical:!0,consequence:"Sinh viên thành thạo sử dụng AI để tăng gấp 5 lần hiệu suất học tập và làm việc, trở thành nhân sự chất lượng cao được các tập đoàn săn đón.",philosophicalLens:"Vận dụng chuẩn xác quy luật: CMCN thúc đẩy lực lượng sản xuất nhảy vọt về chất, đòi hỏi con người - yếu tố hàng đầu của LLSX - phải nâng cao trình độ để làm chủ kỹ thuật mới."},{id:"B",text:"Đập phá máy tính và biểu tình yêu cầu chính phủ cấm hoàn toàn trí tuệ nhân tạo để bảo vệ các công việc thủ công cũ.",isDialectical:!1,consequence:"Lặp lại sai lầm của phong trào đập phá máy móc (Luddite) thế kỷ XIX tại Anh, hoàn toàn bất lực trước quy luật tiến bộ công nghệ.",philosophicalLens:"Tư duy hoài cổ chống lại sự phát triển tất yếu của tư liệu sản xuất văn minh nhân loại."},{id:"C",text:"Buông xuôi bỏ học vì tin rằng sớm muộn con người cũng sẽ bị robot thay thế hoàn toàn và không thể cạnh tranh nổi.",isDialectical:!1,consequence:"Tự đánh mất tương lai và rơi vào tình trạng thất nghiệp công nghệ do thiếu kỹ năng thích ứng.",philosophicalLens:"Chủ nghĩa bi quan siêu hình tuyệt đối hóa vai trò của máy móc, quên rằng con người mới là chủ thể sáng tạo ra công nghệ."}],explanation:"Các cuộc CMCN tạo ra bước phát triển nhảy vọt của lực lượng sản xuất, đòi hỏi người lao động phải liên tục nâng cao trình độ thích ứng với kỹ thuật mới.",coreLesson:"Công nghệ không lấy đi việc làm của con người; chỉ những ai không chịu học cách làm chủ công nghệ mới bị người sử dụng công nghệ thay thế!"},{id:"C6-S1",chapter:6,topic:"Mục 6.1.2 • Tính tất yếu khách quan & Nội dung CNH, HĐH ở Việt Nam",title:"Gia Công Giá Rẻ Hay Bứt Phá Lên Nấc Thang Kinh Tế Số?",difficulty:"Trung bình",philosophyConcept:"CNH, HĐH thích ứng với Cách mạng Công nghiệp 4.0",image:"./assets/images/scenarios/c6-s1.svg",situation:"Một địa phương đứng trước hai con đường thu hút đầu tư: Con đường thứ nhất là tiếp tục mở rộng các khu công nghiệp gia công dệt may, lắp ráp điện tử thô sơ tận dụng nhân công giá rẻ (giá trị gia tăng chỉ 5-10%). Con đường thứ hai là quy hoạch trung tâm bán dẫn, phần mềm, đào tạo nhân lực kỹ thuật cao và tự động hóa (giá trị gia tăng 40-60%).",question:"Dưới góc độ chiến lược Công nghiệp hóa, hiện đại hóa ở Việt Nam hiện nay, lựa chọn nào mang tính bước nhảy vọt về chất?",dimensionScores:{connection:25,contradiction:20,depth:15,objective:15,practice:25},options:[{id:"A",text:"Chủ động chuyển đổi mô hình tăng trưởng: Đi tắt đón đầu làn sóng CMCN 4.0, phát triển công nghiệp bán dẫn, kinh tế số và kinh tế tri thức để thoát khỏi bẫy thu nhập trung bình.",isDialectical:!0,consequence:"Địa phương thu hút các tập đoàn công nghệ hàng đầu thế giới, thu nhập kỹ sư tăng gấp 4 lần, năng suất lao động xã hội nhảy vọt, tạo nền tảng vững chắc cho công nghiệp hóa hiện đại.",philosophicalLens:"Đặc trưng CNH, HĐH thời đại mới: CNH không chỉ là cơ khí hóa máy móc thô sơ kiểu cũ, mà là quá trình gắn liền với chuyển đổi số, phát triển kinh tế tri thức trên nền tảng CMCN 4.0."},{id:"B",text:"Kiên quyết chỉ duy trì gia công giá rẻ vì sợ tốn chi phí đào tạo lại nhân lực kỹ thuật.",isDialectical:!1,consequence:"Khi dân số bắt đầu già hóa và tiền lương tối thiểu tăng, các đơn hàng gia công chuyển sang các nước rẻ hơn, địa phương rơi vào bẫy thu nhập trung bình và thất nghiệp hàng loạt.",philosophicalLens:"Tư duy ngắn hạn phụ thuộc vào lợi thế tài nguyên và nhân công rẻ mạt, tất yếu bị đào thải trong phân công lao động quốc tế hiện đại."},{id:"C",text:"Đóng cửa toàn bộ nhà máy ngay lập tức để chỉ tập trung vào kinh doanh bất động sản.",isDialectical:!1,consequence:"Bong bóng bất động sản đổ vỡ, nền kinh tế rỗng ruột vì không có năng lực sản xuất thực chất nâng đỡ.",philosophicalLens:"Tư bản tài chính đầu cơ ký sinh làm suy thoái nền tảng sản xuất vật chất của xã hội."}],explanation:"CNH, HĐH ở Việt Nam hiện nay phải thích ứng với bối cảnh CMCN 4.0, kết hợp tuần tự với đi tắt đón đầu, phát triển kinh tế số và nâng cao hàm lượng giá trị gia tăng quốc gia.",coreLesson:"Chuyển đổi số và làm chủ công nghệ cao là con đường duy nhất để Việt Nam bứt phá vươn lên thành quốc gia phát triển thu nhập cao."},{id:"C6-S5",chapter:6,topic:"Mục 6.2.1 • Khái niệm & Các hình thức hội nhập kinh tế quốc tế",title:'Chiến Lược Đa Phương Hóa: Tránh "Bỏ Trứng Vào Một Giỏ" Trong Hội Nhập Toàn Cầu',difficulty:"Nâng cao",philosophyConcept:"Phương hướng nâng cao hiệu quả hội nhập & Xây dựng nền kinh tế độc lập tự chủ",image:"./assets/images/scenarios/c6-s5.svg",situation:"Một tập đoàn thủy sản Việt Nam từng xuất khẩu 90% sản lượng vào duy nhất một thị trường nước ngoài. Khi quốc gia đó bất ngờ áp thuế chống bán phá giá 45% vì lý do bảo hộ nội địa, tập đoàn suýt phá sản. Rút kinh nghiệm sâu sắc, tập đoàn đã tận dụng các hiệp định thương mại tự do thế hệ mới (CPTPP, EVFTA, UKVFTA) để cơ cấu lại thị trường: xuất khẩu đều sang 15 quốc gia khác nhau và nâng cao tỷ lệ giá trị gia tăng nội địa.",question:"Bài học của tập đoàn phản ánh phương hướng chiến lược nào trong hội nhập kinh tế quốc tế của Việt Nam?",dimensionScores:{connection:30,contradiction:20,depth:25,objective:15,practice:25},options:[{id:"A",text:"Chủ động, tích cực tham gia các liên kết kinh tế quốc tế đa phương; đa dạng hóa thị trường đối tác để phân tán rủi ro, kết hợp nâng cao năng lực nội tại để xây dựng vị thế độc lập tự chủ bền vững.",isDialectical:!0,consequence:"Tập đoàn phân tán rủi ro thành công, doanh thu tăng trưởng ổn định bất chấp mọi biến động thuế quan đơn phương, đưa thương hiệu thủy sản Việt Nam vươn xa toàn cầu.",philosophicalLens:"Vận dụng chuẩn xác phương hướng hội nhập: Đa phương hóa, đa dạng hóa quan hệ kinh tế quốc tế nhằm tối đa hóa cơ hội và giảm thiểu tối đa rủi ro lệ thuộc bên ngoài."},{id:"B",text:"Chỉ nên bán hàng cho một đối tác duy nhất vì chăm sóc một khách hàng tiện hơn mở rộng thị trường.",isDialectical:!1,consequence:"Doanh nghiệp luôn bị ép giá và đứng trước bờ vực phá sản bất cứ lúc nào khi đối tác đơn phương thay đổi chính sách.",philosophicalLens:"Thiển cận trong kinh doanh quốc tế, tự trói mình vào vị thế phụ thuộc một chiều đầy rủi ro."},{id:"C",text:"Từ bỏ hoàn toàn việc xuất khẩu, chỉ thu hẹp kinh doanh quanh thị trường xóm làng nội địa.",isDialectical:!1,consequence:"Đánh mất năng lực cạnh tranh, quy mô teo tóp và không thể phát triển lớn mạnh.",philosophicalLens:"Tư duy bế quan tự thủ đi ngược lại xu thế phân công lao động và liên kết kinh tế quốc tế."}],explanation:"Hội nhập kinh tế quốc tế hiệu quả đòi hỏi phải đa phương hóa, đa dạng hóa đối tác để giảm thiểu rủi ro phụ thuộc, gắn liền với tăng cường nội lực cạnh tranh quốc gia.",coreLesson:"Đa dạng hóa thị trường là tấm khiên vững chắc nhất bảo vệ doanh nghiệp và nền kinh tế trước mọi cơn sóng gió biến động của thị trường thế giới."},{id:"C6-S2",chapter:6,topic:"Mục 6.2.2 • Tác động của hội nhập kinh tế quốc tế (Cơ hội & Thách thức)",title:'Hàng Việt Xuất Khẩu Trước Rào Cản "ESG & Dấu Chân Carbon"',difficulty:"Nâng cao",philosophyConcept:"Hội nhập kinh tế quốc tế & Nâng cao năng lực cạnh tranh",image:"./assets/images/scenarios/c6-s2.svg",situation:"Một công ty gỗ xuất khẩu của Việt Nam đứng trước nguy cơ mất các đơn hàng lớn sang Liên minh Châu Âu (EU) vì quy định mới về truy xuất nguồn gốc gỗ không phá rừng (EUDR) và chứng chỉ phát thải carbon thấp. Ban điều hành tranh cãi gay gắt giữa việc chi hàng chục tỷ để chuyển đổi xanh hay tìm đường lách luật bằng giấy tờ giả.",question:"Quy luật khách quan của hội nhập kinh tế quốc tế thế hệ mới đòi hỏi doanh nghiệp phải làm gì?",dimensionScores:{connection:30,contradiction:15,depth:20,objective:15,practice:20},options:[{id:"A",text:"Biến thách thức thành cơ hội: Tiên phong chuyển đổi chuỗi cung ứng xanh minh bạch, đạt tiêu chuẩn quốc tế để xây dựng vị thế cạnh tranh cao cấp bền vững trên toàn cầu.",isDialectical:!0,consequence:"Sản phẩm vượt qua mọi đợt kiểm định khắt khe của EU, được các nhà bán lẻ quốc tế săn đón với giá trị gia tăng cao, mở rộng thị phần xuất khẩu trên toàn thế giới.",philosophicalLens:"Hội nhập kinh tế quốc tế là tất yếu khách quan: Các rào cản kỹ thuật và tiêu chuẩn môi trường khắt khe vừa là thách thức vừa là động lực bắt buộc lực lượng sản xuất trong nước phải nâng cấp trình độ."},{id:"B",text:"Làm giả hồ sơ chứng chỉ xanh để qua mặt cơ quan hải quan quốc tế nhằm tiết kiệm chi phí.",isDialectical:!1,consequence:"Hàng hóa bị tịch thu tại cảng Rotterdam, doanh nghiệp bị cấm xuất khẩu vĩnh viễn và bị đưa vào danh sách đen thương mại quốc tế, thương hiệu quốc gia bị tổn hại.",philosophicalLens:"Lối tư duy mánh lới thiển cận vi phạm luật pháp quốc tế, tự sát về mặt kinh tế trong kỷ nguyên minh bạch số."},{id:"C",text:"Rút lui hoàn toàn khỏi thị trường quốc tế, chỉ bán quanh quẩn tại thị trường nội địa.",isDialectical:!1,consequence:"Doanh nghiệp đánh mất cơ hội tiếp cận thị trường rộng lớn, thu hẹp quy mô và dần bị các đối thủ quốc tế ngay tại sân nhà đánh bại.",philosophicalLens:"Bế quan tỏa cảng, đi ngược lại xu thế toàn cầu hóa và phân công lao động quốc tế khách quan."}],explanation:"Hội nhập kinh tế quốc tế đòi hỏi các chủ thể phải nâng cao năng lực cạnh tranh nội tại, thích ứng chủ động với các tiêu chuẩn xanh, chất lượng và thể chế quốc tế hiện đại.",coreLesson:"Chủ động thích ứng và vượt qua các tiêu chuẩn khắt khe của thế giới là con đường khẳng định bản lĩnh và thương hiệu của trí tuệ Việt Nam."},{id:"C6-S3",chapter:6,topic:"Mục 6.2.3 • Phương hướng nâng cao hiệu quả hội nhập & Độc lập tự chủ",title:'Hội Nhập Sâu Rộng Đi Đôi Với Giữ Vững "Độc Lập Tự Chủ"',difficulty:"Nâng cao",philosophyConcept:"Kinh tế độc lập tự chủ trong kỷ nguyên toàn cầu hóa",image:"./assets/images/scenarios/c6-s3.svg",situation:"Khi đứt gãy chuỗi cung ứng linh kiện điện tử toàn cầu xảy ra, nhiều nhà máy ô tô và thiết bị viễn thông tại các nước phụ thuộc hoàn toàn vào nguồn linh kiện nhập khẩu đã phải đóng cửa tê liệt. Tại Việt Nam, câu hỏi chiến lược được đặt ra: Làm sao vừa hội nhập quốc tế sâu rộng, vừa không bị lệ thuộc, tổn thương trước các biến động địa chính trị toàn cầu?",question:"Giải pháp căn cơ của chiến lược xây dựng nền kinh tế độc lập tự chủ theo KTCT Mác – Lênin là gì?",dimensionScores:{connection:25,contradiction:15,depth:20,objective:15,practice:25},options:[{id:"A",text:"Nội lực là quyết định, ngoại lực là quan trọng: Nâng cao năng lực tự chủ công nghệ then chốt, phát triển công nghiệp hỗ trợ trong nước, đa dạng hóa thị trường đối tác để không bao giờ bị phụ thuộc vào một nguồn duy nhất.",isDialectical:!0,consequence:"Nền kinh tế quốc gia duy trì sức chống chịu dẻo dai trước mọi cuộc khủng hoảng bên ngoài, đồng thời vẫn khai thác tối đa nguồn vốn, công nghệ và thị trường quốc tế để vươn lên mạnh mẽ.",philosophicalLens:"Quan điểm biện chứng MLN122: Độc lập tự chủ không đồng nghĩa với khép kín tự cung tự cấp, mà là làm chủ vận mệnh kinh tế của mình trong mối quan hệ hợp tác biện chứng đa phương với thế giới."},{id:"B",text:"Đóng cửa biên giới, tự làm mọi thứ từ con ốc vít đến vệ tinh mà không mua bán hợp tác với bất kỳ quốc gia nào.",isDialectical:!1,consequence:"Lãng phí nguồn lực khổng lồ để phát minh lại những cái thế giới đã làm rất rẻ, đẩy nền kinh tế rơi vào tụt hậu lạc hậu.",philosophicalLens:"Ảo tưởng tự cấp tự túc thời phong kiến, đi ngược lại quy luật phân công lao động xã hội quốc tế."},{id:"C",text:"Phó mặc hoàn toàn cho thị trường quốc tế, phụ thuộc 100% vào chuỗi cung ứng của một cường quốc duy nhất.",isDialectical:!1,consequence:"Khi xảy ra căng thẳng địa chính trị, nền kinh tế bị bóp nghẹt và đánh mất quyền tự chủ quốc gia.",philosophicalLens:"Mất cảnh giác chiến lược, biến đất nước thành mắt xích phụ thuộc dễ bị tổn thương."}],explanation:"Xây dựng nền kinh tế độc lập tự chủ đi đôi với chủ động, tích cực hội nhập kinh tế quốc tế sâu rộng là đường lối nhất quán, bảo đảm chủ quyền và phát triển bền vững của đất nước.",coreLesson:"Nội lực vững chắc là bệ phóng cho hội nhập thành công; hội nhập sâu rộng là đòn bẩy làm giàu thêm sức mạnh nội lực quốc gia."}],E=[{id:"CASE-000",caseNumber:1,code:"ĐẠI ÁN #01",shortCode:"#01",chapterNum:1,chapterBadge:"CHƯƠNG 1 • NỀN TẢNG",shortTopic:"Tiến trình tư tưởng KTCT",icon:"📜",accentColor:"#0284c7",title:"Hồ Sơ Nền Tảng: Đại Án Tiến Trình Tư Tưởng & Bản Chất Khoa Học Của KTCT Mác – Lênin",subtitle:'Chuẩn Chương 1: Từ "Kinh bang tế thế" (1615), Adam Smith (1776) đến KTCT Mác – Lênin đỉnh cao khoa học',image:"./assets/images/cases/case-c1-origin.svg",dossierLevel:"CẤP ĐỘ: CƠ BẢN",backgroundStory:'Một nhóm chuyên gia tư vấn chiến lược tuyên bố: "Xã hội số ngày nay không cần sản xuất vật chất, chỉ cần lưu thông buôn bán và phân tích tâm lý hành vi vi mô là đất nước tự khắc giàu có; kinh tế chính trị chỉ là lý thuyết cũ kỹ". Với tư cách là Chuyên gia Điều tra Kinh tế Chính trị MLN122, bạn hãy phân loại 5 manh mối lịch sử - học thuật chuẩn Giáo trình chuẩn vào 5 ngăn nội dung khoa học để vạch trần sai lầm của quan điểm này và khẳng định bản chất khoa học của KTCT Mác – Lênin!',categories:[{id:"muc_1_1_origin",name:"MỤC 1.1A: KHỞI NGUỒN THUẬT NGỮ (1615 - 1776)",desc:"Montchrestien (1615), thương nhân & sức mạnh quốc gia; Adam Smith (1776, The Wealth of Nations) đưa KTCT thành hệ thống khoa học",color:"#0ea5e9"},{id:"muc_1_1_stages_1",name:"MỤC 1.1B: GIAI ĐOẠN 1 (CỔ ĐẠI ĐẾN CUỐI TK XVIII)",desc:"Tiến trình phát triển: Tư tưởng cổ trung đại ➔ Chủ nghĩa trọng thương (vàng bạc, lưu thông) ➔ Chủ nghĩa trọng nông ➔ KTCT tư sản cổ điển Anh",color:"#10b981"},{id:"muc_1_1_stages_2",name:"MỤC 1.1C: GIAI ĐOẠN 2 & SỰ RẼ NHÁNH TƯ TƯỞNG",desc:"Kế thừa thành KTCT Mác - Lênin vs rẽ nhánh sang Kinh tế học tầm thường (chỉ đi vào tâm lý, hành vi, không phân tích quan hệ xã hội của sản xuất)",color:"#f59e0b"},{id:"muc_1_1_marx_lenin",name:"MỤC 1.1D: KTCT MÁC – LÊNIN ĐỈNH CAO KHOA HỌC",desc:"Ra đời những năm 40 TK XIX, tìm ra quy luật PTSX tư bản, phạm trù KTTT và quan hệ giai cấp; Lênin bổ sung thời đại đế quốc và độc quyền",color:"#ef4444"},{id:"muc_1_2_definition",name:"MỤC 1.2: ĐỊNH NGHĨA KHOA HỌC & ĐỐI TƯỢNG NGHIÊN CỨU",desc:"Môn khoa học nghiên cứu các quan hệ kinh tế để tìm ra quy luật chi phối nền sản xuất xã hội qua 4 khâu: Sản xuất - Phân phối - Trao đổi - Tiêu dùng",color:"#8b5cf6"}],clues:[{id:"c0-clue-1",text:'Trong "Chuyên luận về kinh tế chính trị" (1615), Montchrestien đề xuất môn KTCT, khẳng định sức mạnh nhà nước gắn với sự giàu có quốc gia và thương nhân là gương mặt chính',correctCategory:"muc_1_1_origin",hint:"Cột mốc đầu tiên xuất hiện thuật ngữ Political Economy năm 1615 trong Slide Mục 1.1."},{id:"c0-clue-2",text:"Chủ nghĩa trọng thương (TK XV - XVII) coi trọng ngoại thương và tích lũy vàng bạc, sau đó chuyển sang Chủ nghĩa trọng nông đề cao sản xuất nông nghiệp",correctCategory:"muc_1_1_stages_1",hint:"Tiến trình phát triển trong Giai đoạn 1 từ cổ đại đến cuối TK XVIII."},{id:"c0-clue-3",text:"Kinh tế học tầm thường chỉ đi vào khái quát tâm lý, hành vi mua bán bề ngoài mà không đi sâu phân tích các quan hệ xã hội trong quan hệ sản xuất",correctCategory:"muc_1_1_stages_2",hint:"Hạn chế của dòng kinh tế học tư sản tầm thường được phân tích ở Giai đoạn 2 Slide Mục 1.1."},{id:"c0-clue-4",text:"Kinh tế chính trị Mác ra đời những năm 40 TK XIX tìm ra quy luật giá trị thặng dư; đầu TK XX Lênin bổ sung các đặc điểm kinh tế của CNTB độc quyền",correctCategory:"muc_1_1_marx_lenin",hint:"Sự hình thành và phát triển của KTCT Mác - Lênin khoa học và cách mạng."},{id:"c0-clue-5",text:"KTCT nghiên cứu các quan hệ kinh tế để tìm ra quy luật chi phối sự vận động của hiện tượng và hoạt động kinh tế tương ứng với trình độ của nền sản xuất xã hội",correctCategory:"muc_1_2_definition",hint:"Định nghĩa khoa học cốt lõi về bản chất môn học trong Slide Chương 1."}],philosophicalVerdict:{headline:"Phá án thành công: Khẳng định bản chất khoa học và vai trò nền tảng của KTCT Mác – Lênin!",concept:"Chương 1: Tiến trình lịch sử tư tưởng, Đối tượng, Phương pháp và Chức năng của KTCT",analysis:'Căn cứ toàn diện Slide Chương 1 MLN122: Thuật ngữ bắt nguồn từ "kinh bang tế thế", trải qua các cột mốc vĩ đại của Montchrestien (1615), Adam Smith (1776) và đạt đến đỉnh cao khoa học cách mạng với C. Mác, Ph. Ăng-ghen và V.I. Lênin. Khoa học kinh tế chính trị chỉ rõ: Sản xuất vật chất và quan hệ kinh tế giữa người với người trong 4 khâu (Sản xuất – Phân phối – Trao đổi – Tiêu dùng) mới là cội nguồn quyết định sự giàu có của quốc gia, đập tan luận điểm phiến diện của kinh tế học tầm thường!',xpAwarded:160}},{id:"CASE-000B",caseNumber:2,code:"ĐẠI ÁN #02",shortCode:"#02",chapterNum:2,chapterBadge:"CHƯƠNG 2 • HÀNG HÓA & THỊ TRƯỜNG",shortTopic:"Bí mật hàng hóa & Giá trị",icon:"⚖️",accentColor:"#10b981",title:"Hồ Sơ Bí Ẩn Giá Trị Hàng Hóa: Tỷ Lệ 1m Vải = 5kg Thóc & Tính Hai Mặt Của Lao Động",subtitle:"Chuẩn Chương 2: Hai thuộc tính của hàng hóa, tỷ lệ trao đổi 1m vải = 5kg thóc và tính chất hai mặt của lao động sản xuất",image:"./assets/images/cases/case-c2-commodity.svg",dossierLevel:"CẤP ĐỘ: CƠ BẢN",backgroundStory:'Trong một phiên chợ trao đổi nông sản và thủ công mỹ nghệ, một thương lái đưa ra nhận định: "Hàng hóa trao đổi được với nhau chỉ vì sở thích chủ quan và sự may rủi, hoàn toàn không có cơ sở khách quan nào". Một người thợ may đổi 1 mét vải lấy 5 kg thóc của người nông dân. Cả hai cùng thắc mắc: Hai vật có công dụng khác biệt hoàn toàn (vải để may mặc, thóc để ăn), tại sao lại trao đổi ngang bằng nhau? Để giải mã bí ẩn này, điều tra viên cần sắp xếp các bằng chứng lý luận của C. Mác vào đúng 4 ngăn hồ sơ khoa học!',categories:[{id:"muc_2_1_gtsd",name:"GIÁ TRỊ SỬ DỤNG & LAO ĐỘNG CỤ THỂ",desc:"Công dụng hàng hóa, thỏa mãn nhu cầu cá nhân (bánh mì) hoặc sản xuất (khung thép); 4 đặc trưng riêng của lao động cụ thể",color:"#10b981"},{id:"muc_2_1_gttd",name:"GIÁ TRỊ TRAO ĐỔI & THÍ DỤ 1M VẢI = 5KG THÓC",desc:"Quan hệ tỷ lệ về số lượng; cơ sở chung của trao đổi chính là hao phí lao động để tạo ra hàng hóa",color:"#06b6d4"},{id:"muc_2_1_gt",name:"BẢN CHẤT GIÁ TRỊ & 4 ĐẶC TÍNH CỐT LÕI",desc:"Lao động xã hội kết tinh; cơ sở của giá trị trao đổi; quan hệ kinh tế người với người; là phạm trù lịch sử",color:"#f59e0b"},{id:"muc_2_2_two_fold",name:"TÍNH HAI MẶT & MÂU THUẪN TƯ NHÂN - XÃ HỘI",desc:"Bắt nguồn từ phân công lao động xã hội; lao động cụ thể tạo GTSD, lao động trừu tượng tạo Giá trị",color:"#8b5cf6"}],clues:[{id:"c2-clue-1",text:"Giá trị sử dụng là công dụng của hàng hóa, có thể thỏa mãn nhu cầu tiêu dùng cá nhân (bánh mì) hoặc nhu cầu tiêu dùng sản xuất (khung sắt thép công trình)",correctCategory:"muc_2_1_gtsd",hint:"Slide định nghĩa Giá trị sử dụng và ví dụ hình ảnh Bánh mì, Khung thép."},{id:"c2-clue-2",text:"Lao động cụ thể bắt nguồn từ phân công lao động xã hội, có 4 đặc trưng: mục đích riêng, đối tượng riêng, phương pháp riêng và kết quả riêng",correctCategory:"muc_2_1_gtsd",hint:'Slide phân tích tính chất của Lao động Cụ thể với 4 chữ "riêng".'},{id:"c2-clue-3",text:"Giá trị trao đổi là một quan hệ về số lượng, là tỷ lệ theo đó một giá trị sử dụng loại này được trao đổi với những giá trị sử dụng loại khác",correctCategory:"muc_2_1_gttd",hint:"Slide định nghĩa Giá trị trao đổi - cầu nối để đi đến bản chất Giá trị."},{id:"c2-clue-4",text:"Thí dụ 1m vải = 5kg thóc: Hai hàng hóa công dụng khác nhau trao đổi được vì chính lao động hao phí để tạo ra hàng hóa là cơ sở chung",correctCategory:"muc_2_1_gttd",hint:"Thí dụ kinh điển trong slide: 1 mét vải có giá trị trao đổi bằng 5 kg thóc."},{id:"c2-clue-5",text:"Giá trị là lao động xã hội của người sản xuất kết tinh trong hàng hóa, là cơ sở của giá trị trao đổi và là một phạm trù lịch sử",correctCategory:"muc_2_1_gt",hint:"4 đặc điểm cốt lõi của Giá trị được nêu rõ trong Slide 4."},{id:"c2-clue-6",text:"Lao động sản xuất hàng hóa có tính hai mặt: Lao động cụ thể tạo ra giá trị sử dụng, lao động trừu tượng tạo ra thực thể giá trị của hàng hóa",correctCategory:"muc_2_2_two_fold",hint:"Phát kiến vĩ đại của C. Mác về tính hai mặt của lao động sản xuất hàng hóa."},{id:"c2-clue-7",text:"Lao động cụ thể là phạm trù vĩnh viễn gắn liền với vật phẩm; ngày càng phong phú, đa dạng, chuyên môn hóa cao theo sự phát triển của KH-CN",correctCategory:"muc_2_1_gtsd",hint:"Slide tính chất Lao động Cụ thể: tồn tại dưới mọi hình thái kinh tế."},{id:"c2-clue-8",text:"Mâu thuẫn cơ bản của sản xuất hàng hóa là mâu thuẫn giữa lao động tư nhân (cá nhân) và lao động xã hội, là mầm mống của mọi khủng hoảng kinh tế",correctCategory:"muc_2_2_two_fold",hint:"Sơ đồ mâu thuẫn cơ bản của sản xuất hàng hóa trong Slide 3."}],philosophicalVerdict:{headline:"Phá án thành công: Giải mã trọn vẹn bí mật của hàng hóa và học thuyết giá trị lao động!",concept:"Chương 2: Hai thuộc tính của hàng hóa, Thí dụ 1m vải = 5kg thóc & Tính hai mặt của lao động",analysis:"Căn cứ các slide chuẩn Chương 2: Tỷ lệ trao đổi 1m vải = 5kg thóc không hề ngẫu nhiên mà được quyết định bởi hao phí lao động xã hội kết tinh bên trong. C. Mác đã tạo nên bước ngoặt vĩ đại trong lịch sử kinh tế khi phát hiện ra tính hai mặt của lao động sản xuất hàng hóa: Lao động cụ thể (với 4 nét riêng biệt) sáng tạo ra giá trị sử dụng, còn lao động trừu tượng (hao phí óc, bắp thịt) kết tinh thành thực thể giá trị!",xpAwarded:180}},{id:"CASE-001",caseNumber:3,code:"ĐẠI ÁN #03",shortCode:"#03",chapterNum:3,chapterBadge:"CHƯƠNG 3 • GIÁ TRỊ THẶNG DƯ",shortTopic:"Bóc trần giá trị thặng dư (m)",icon:"🔍",accentColor:"#f59e0b",title:"Hồ Sơ Lý Luận C. Mác Về Giá Trị Thặng Dư",subtitle:"Chuẩn Mục 3.1: Nguồn gốc, bản chất và các phương pháp sản xuất giá trị thặng dư trong nền KTTT",image:"./assets/images/cases/case-c3-surplus-value.svg",dossierLevel:"CẤP ĐỘ: CƠ BẢN",backgroundStory:'Một nghiên cứu thực tế tại một doanh nghiệp công nghệ lớn tuyên bố: "Doanh thu và lợi nhuận nghìn tỷ của công ty hoàn toàn do hệ thống máy chủ, bằng sáng chế thuật toán tự sinh ra, không hề có việc chiếm đoạt lao động của kỹ sư hay công nhân". Để làm sáng tỏ chân lý khoa học, điều tra viên cần căn cứ vào Lý luận của C. Mác về giá trị thặng dư (Mục 3.1 Giáo trình chuẩn) để phân loại đúng đắn các luận điểm vào từng ngăn nội dung khoa học!',categories:[{id:"muc_3_1_1",name:"MỤC 3.1.1: NGUỒN GỐC GIÁ TRỊ THẶNG DƯ",desc:"Hàng hóa sức lao động, hai điều kiện ra đời, giá trị và giá trị sử dụng đặc biệt có khả năng tạo ra giá trị mới",color:"#0ea5e9"},{id:"muc_3_1_2_a",name:"MỤC 3.1.2A: TƯ BẢN BẤT BIẾN & KHẢ BIẾN",desc:"Tư bản bất biến (c) chỉ bảo tồn/chuyển dịch giá trị; Tư bản khả biến (v) là nguồn gốc duy nhất sinh ra giá trị thặng dư",color:"#10b981"},{id:"muc_3_1_2_b",name:"MỤC 3.1.2B: BẢN CHẤT GTTD & TỶ SUẤT m'",desc:"Giá trị thặng dư m là bộ phận giá trị mới dôi ra ngoài giá trị sức lao động; m' phản ánh chính xác trình độ bóc lột",color:"#f59e0b"},{id:"muc_3_1_3_a",name:"MỤC 3.1.3A: SẢN XUẤT GTTD TUYỆT ĐỐI",desc:"Phương pháp kéo dài độ dài tuyệt đối của ngày lao động vượt quá thời gian lao động tất yếu",color:"#ef4444"},{id:"muc_3_1_3_b",name:"MỤC 3.1.3B: SẢN XUẤT GTTD TƯƠNG ĐỐI",desc:"Rút ngắn thời gian lao động tất yếu bằng cách tăng năng suất lao động xã hội, hạ thấp giá trị sức lao động",color:"#a855f7"}],clues:[{id:"c1-clue-1",text:"Sức lao động là hàng hóa đặc biệt, khi sử dụng có khả năng sáng tạo ra một lượng giá trị lớn hơn giá trị bản thân nó",correctCategory:"muc_3_1_1",hint:"Nội dung cốt lõi của Mục 3.1.1 giải thích nguồn gốc sinh ra giá trị thặng dư."},{id:"c1-clue-2",text:"Bộ phận tư bản biến thành tư liệu sản xuất (c) không thay đổi lượng giá trị, chỉ chuyển dịch nguyên vẹn vào sản phẩm mới",correctCategory:"muc_3_1_2_a",hint:"Định nghĩa khoa học về Tư bản bất biến (c) trong Mục 3.1.2."},{id:"c1-clue-3",text:"Tỷ suất giá trị thặng dư m' = (m / v) × 100% phản ánh thực chất mức độ bóc lột sức lao động của nhà tư bản",correctCategory:"muc_3_1_2_b",hint:"Công thức và ý nghĩa bản chất của m' trong Mục 3.1.2."},{id:"c1-clue-4",text:"Chủ doanh nghiệp ép người lao động tăng ca làm thêm từ 8 giờ lên 12-14 giờ mỗi ngày để tăng khối lượng thặng dư m",correctCategory:"muc_3_1_3_a",hint:"Biểu hiện thực tế của phương pháp sản xuất giá trị thặng dư tuyệt đối."},{id:"c1-clue-5",text:"Cải tiến kỹ thuật công nghệ toàn diện trong các ngành sản xuất tư liệu sinh hoạt để hạ giá thành và rút ngắn thời gian tất yếu",correctCategory:"muc_3_1_3_b",hint:"Cơ chế vận hành của phương pháp sản xuất giá trị thặng dư tương đối."}],philosophicalVerdict:{headline:"Phá án thành công: Máy tính không tạo ra m; chỉ có hàng hóa sức lao động sống mới sáng tạo ra m!",concept:"Mục 3.1: Nguồn gốc, bản chất và các phương pháp sản xuất giá trị thặng dư",analysis:"Căn cứ Mục 3.1 Giáo trình và Giáo trình chuẩn MLN122: Tư liệu sản xuất (c) dù hiện đại đến đâu cũng chỉ là Tư bản bất biến, chỉ đóng vai trò phương tiện truyền dẫn giá trị. Nguồn gốc duy nhất sinh ra giá trị thặng dư (m) là việc tiêu dùng hàng hóa sức lao động sống (Tư bản khả biến v) trong thời gian lao động thặng dư. Các nhà tư bản luôn kết hợp tinh vi cả hai phương pháp sản xuất GTTD tuyệt đối (kéo dài ngày làm việc) và GTTD tương đối (tăng năng suất qua ứng dụng khoa học kỹ thuật).",xpAwarded:160}},{id:"CASE-002",caseNumber:4,code:"ĐẠI ÁN #04",shortCode:"#04",chapterNum:3,chapterBadge:"CHƯƠNG 3 • TÍCH LŨY & LỢI NHUẬN",shortTopic:"Tích lũy tư bản & Lợi nhuận",icon:"📈",accentColor:"#f59e0b",title:"Hồ Sơ Tích Lũy Tư Bản & Các Hình Thức Biểu Hiện Của Giá Trị Thặng Dư",subtitle:"Chuẩn Mục 3.2 (Tích lũy tư bản, c/v) & Mục 3.3 (Chi phí k, Lợi nhuận p, p', Lợi tức, Địa tô)",image:"./assets/images/cases/case-c3-accumulation.svg",dossierLevel:"CẤP ĐỘ: TRUNG BÌNH",backgroundStory:'Một tập đoàn kinh tế tư nhân thực hiện chiến lược tái đầu tư mở rộng, nhập khẩu dây chuyền robot tự động hóa để tăng năng lực cạnh tranh, đồng thời thâu tóm hàng loạt công ty con. Báo cáo tài chính của tập đoàn chỉ ghi nhận "Chi phí k" và "Lợi nhuận p", tuyên bố lợi nhuận là thành quả kinh doanh của toàn bộ vốn đầu tư chứ không liên quan gì đến bóc lột. Hãy đối chiếu Mục 3.2 và Mục 3.3 Giáo trình chuẩn để sắp xếp đúng các luận điểm lý luận!',categories:[{id:"muc_3_2_ban_chat",name:"MỤC 3.2: BẢN CHẤT TÍCH LŨY TƯ BẢN",desc:"Tái sản xuất mở rộng bằng cách tư bản hóa giá trị thặng dư; nguồn gốc duy nhất của tích lũy tư bản là m",color:"#f59e0b"},{id:"muc_3_2_cau_tao",name:"MỤC 3.2: CẤU TẠO HỮU CƠ (c/v) & HỆ QUẢ",desc:'Cấu tạo hữu cơ c/v tăng lên tất yếu dẫn tới sinh ra "Đội quân thất nghiệp công nghiệp" (dân số thừa tương đối)',color:"#a855f7"},{id:"muc_3_3_chi_phi_loi_nhuan",name:"MỤC 3.3: CHI PHÍ (k) & LỢI NHUẬN (p)",desc:"Chi phí sản xuất k = c + v; lợi nhuận p là hình thức biến tướng của m, che giấu quan hệ bóc lột",color:"#ef4444"},{id:"muc_3_3_loi_nhuan_binh_quan",name:"MỤC 3.3: TỶ SUẤT p' & LỢI NHUẬN BÌNH QUÂN",desc:"Cạnh tranh giữa các ngành dẫn tới hình thành tỷ suất lợi nhuận bình quân và giá cả sản xuất",color:"#3b82f6"},{id:"muc_3_3_loi_tuc_dia_to",name:"MỤC 3.3: LỢI TỨC (z) & ĐỊA TÔ TƯ BẢN (R)",desc:"Các hình thức chuyển hóa khác của m chia cho tư bản cho vay (lợi tức) và chủ đất (địa tô chênh lệch, tuyệt đối)",color:"#10b981"}],clues:[{id:"c2-clue-1",text:"Thực chất của tích lũy tư bản là sự chuyển hóa một phần giá trị thặng dư trở lại thành tư bản phụ thêm để tái sản xuất mở rộng",correctCategory:"muc_3_2_ban_chat",hint:"Khái niệm khoa học then chốt của Mục 3.2 Giáo trình chuẩn."},{id:"c2-clue-2",text:"Cấu tạo hữu cơ c/v tăng làm cầu về sức lao động giảm tương đối so với tư liệu sản xuất, tạo ra nạn nhân công thất nghiệp",correctCategory:"muc_3_2_cau_tao",hint:"Quy luật nhân khẩu thừa tương đối trong quá trình tích lũy tư bản."},{id:"c2-clue-3",text:"Công thức W = k + p che đậy nguồn gốc bóc lột vì làm người ta tưởng lợi nhuận sinh ra từ toàn bộ vốn k ứng trước",correctCategory:"muc_3_3_chi_phi_loi_nhuan",hint:"Sự khác biệt bản chất giữa giá trị hàng hóa và chi phí sản xuất tư bản chủ nghĩa."},{id:"c2-clue-4",text:"Sự tự do di chuyển tư bản giữa các ngành sản xuất khác nhau san bằng các mức p' khác nhau thành tỷ suất lợi nhuận bình quân",correctCategory:"muc_3_3_loi_nhuan_binh_quan",hint:"Cơ chế cạnh tranh giữa các ngành dẫn tới hình thành lợi nhuận bình quân."},{id:"c2-clue-5",text:"Lợi tức trả cho ngân hàng và tiền thuê đất trả cho chủ đất thực chất đều là một phần giá trị thặng dư do công nhân tạo ra",correctCategory:"muc_3_3_loi_tuc_dia_to",hint:"Bản chất khoa học của lợi tức cho vay và địa tô tư bản chủ nghĩa."}],philosophicalVerdict:{headline:"Phá án thành công: Tích lũy tư bản đào sâu bất bình đẳng; lợi nhuận, lợi tức và địa tô đều bắt nguồn từ m!",concept:"Mục 3.2 & Mục 3.3: Tích lũy tư bản và các hình thức chuyển hóa của giá trị thặng dư",analysis:"Căn cứ Mục 3.2 và 3.3: Tích lũy tư bản thực chất là dùng chính giá trị thặng dư bóc lột được để tiếp tục mở rộng quy mô bóc lột. Quá trình này đẩy cấu tạo hữu cơ (c/v) tăng cao, sinh ra đội quân thất nghiệp công nghiệp. Trên bề mặt thị trường, giá trị thặng dư m biến tướng thành lợi nhuận (p), lợi nhuận bình quân, lợi tức ngân hàng (z) và địa tô (R) nhằm che giấu nguồn gốc thực sự là sức lao động làm thuê.",xpAwarded:170}},{id:"CASE-002B",caseNumber:5,code:"ĐẠI ÁN #05",shortCode:"#05",chapterNum:4,chapterBadge:"CHƯƠNG 4 • CẠNH TRANH & ĐỘC QUYỀN",shortTopic:"Liên minh Cartel & Độc quyền",icon:"🏢",accentColor:"#8b5cf6",title:"Hồ Sơ Đại Án Độc Quyền: 5 Đặc Điểm Kinh Tế & Biểu Hiện Mới Của Tư Bản Tài Chính",subtitle:"Chuẩn Chương 4: Cartel - Syndicate - Trust - Consortium, Xuất khẩu tư bản và Vai trò lịch sử của CNTB",image:"./assets/images/cases/case-c4-monopoly.svg",dossierLevel:"CẤP ĐỘ: NÂNG CAO",backgroundStory:"Một liên minh siêu tập đoàn công nghệ và tài chính đa quốc gia áp đặt giá cả độc quyền mua và bán trên thị trường toàn cầu, thâu tóm các công ty khởi nghiệp và chi phối chính sách của nhiều chính phủ. Ban thanh tra kinh tế cần vận dụng Lý luận của V.I. Lênin về 5 đặc điểm kinh tế của độc quyền và vai trò lịch sử của CNTB (Slide Chương 4 MLN122) để phân loại đúng các bằng chứng vào từng ngăn hồ sơ!",categories:[{id:"muc_4_1_to_chuc",name:"TỔ CHỨC ĐỘC QUYỀN & TÍCH TỤ TƯ BẢN",desc:"Cartel, Syndicate, Trust, Consortium; chi phối thị phần và giá cả độc quyền cao",color:"#a855f7"},{id:"muc_4_1_tai_chinh",name:"TƯ BẢN TÀI CHÍNH & ĐẦU SỎ TÀI CHÍNH",desc:'Dung hợp độc quyền ngân hàng và công nghiệp; thống trị kinh tế qua "chế độ tham dự"',color:"#38bdf8"},{id:"muc_4_1_xuat_khau",name:"XUẤT KHẨU TƯ BẢN & PHÂN CHIA THẾ GIỚI",desc:"Xuất khẩu giá trị ra nước ngoài thu GTTD; phân chia thị trường của TNCs và phân chia lãnh thổ",color:"#f59e0b"},{id:"muc_4_2_vai_tro",name:"VAI TRÒ & GIỚI HẠN LỊCH SỬ CỦA CNTB",desc:"Thúc đẩy LLSX phát triển; mâu thuẫn xã hội hóa với chiếm hữu tư nhân TBCN",color:"#f43f5e"}],clues:[{id:"c4-clue-1",text:"4 hình thức tổ chức độc quyền phát triển từ thấp đến cao: Cartel (giá/thị phần) ➔ Syndicate (tiêu thụ) ➔ Trust (SX & lưu thông) ➔ Consortium (đa ngành)",correctCategory:"muc_4_1_to_chuc",hint:"Slide Session 14 phân tích các hình thức tổ chức độc quyền trong lịch sử."},{id:"c4-clue-2",text:"Tư bản tài chính là sự thâm nhập, dung hợp lẫn nhau giữa tổ chức độc quyền ngân hàng và tổ chức độc quyền công nghiệp",correctCategory:"muc_4_1_tai_chinh",hint:"Định nghĩa khoa học của V.I. Lênin về tư bản tài chính trong Slide Session 14."},{id:"c4-clue-3",text:'Đầu sỏ tài chính chi phối toàn bộ đời sống kinh tế và chính trị của xã hội tư bản thông qua "chế độ tham dự" sở hữu cổ phần khống chế',correctCategory:"muc_4_1_tai_chinh",hint:"Cơ chế thống trị của đầu sỏ tài chính qua mạng lưới công ty mẹ - con."},{id:"c4-clue-4",text:"Xuất khẩu tư bản là xuất khẩu giá trị ra nước ngoài (FDI, FPI) nhằm chiếm đoạt giá trị thặng dư cao tại các nước sở tại",correctCategory:"muc_4_1_xuat_khau",hint:"Đặc điểm kinh tế thứ ba của độc quyền: Xuất khẩu tư bản khác với xuất khẩu hàng hóa."},{id:"c4-clue-5",text:"Các tập đoàn tư bản xuyên quốc gia (TNCs) tiến hành thỏa hiệp phân chia thị trường thế giới và nguồn nguyên liệu toàn cầu",correctCategory:"muc_4_1_xuat_khau",hint:"Sự phân chia thị trường thế giới giữa các liên minh độc quyền quốc tế."},{id:"c4-clue-6",text:"Giới hạn lịch sử lớn nhất của CNTB là mâu thuẫn giữa tính chất xã hội hóa ngày càng cao của LLSX với chế độ chiếm hữu tư nhân TBCN",correctCategory:"muc_4_2_vai_tro",hint:"Slide Session 16 về vai trò và giới hạn lịch sử của chủ nghĩa tư bản."}],philosophicalVerdict:{headline:"Phá án thành công: Vạch trần bản chất áp đặt của độc quyền và tính tất yếu lịch sử bị thay thế của CNTB!",concept:"Chương 4: Cạnh tranh và độc quyền trong nền kinh tế thị trường",analysis:"Căn cứ các Slide Session 13-16 Chương 4: Độc quyền sinh ra từ tự do cạnh tranh nhưng không thủ tiêu cạnh tranh mà làm cạnh tranh thêm gay gắt. Đầu sỏ tài chính và các tổ chức độc quyền (Cartel, Syndicate, Trust, Consortium) áp đặt giá cả độc quyền để thu lợi nhuận độc quyền cao. Mâu thuẫn giữa trình độ xã hội hóa ngày càng lớn của LLSX với chế độ chiếm hữu tư nhân TBCN là giới hạn lịch sử khách quan, đặt tiền đề tất yếu cho một hình thái kinh tế - xã hội tiến bộ hơn ra đời!",xpAwarded:190}},{id:"CASE-003",caseNumber:6,code:"ĐẠI ÁN #06",shortCode:"#06",chapterNum:5,chapterBadge:"CHƯƠNG 5 • KTTT ĐỊNH HƯỚNG XHCN",shortTopic:"Bản chất KTTT XHCN Việt Nam",icon:"🇻🇳",accentColor:"#ec4899",title:"Hồ Sơ Bản Chất & Đặc Trưng Kinh Tế Thị Trường Định Hướng XHCN Ở Việt Nam",subtitle:"Chuẩn Mục 5.1: Khái niệm (5.1.1), Tính tất yếu khách quan (5.1.2) & Các đặc trưng của KTTT định hướng XHCN (5.1.3)",image:"./assets/images/cases/case-c5-socialist-market.svg",dossierLevel:"CẤP ĐỘ: CƠ BẢN",backgroundStory:"Nhiều quan điểm tranh luận về con đường phát triển kinh tế của nước ta: Có người cho rằng phát triển kinh tế thị trường tất yếu phải tư nhân hóa toàn bộ; có ý kiến lại muốn quay về mô hình chỉ huy tập trung bao cấp. Bằng tri thức Mục 5.1 trong Giáo trình chuẩn Chương 5, hãy phân loại chính xác các luận điểm vào đúng các đề mục khoa học!",categories:[{id:"muc_5_1_1",name:"MỤC 5.1.1: KHÁI NIỆM KTTT ĐỊNH HƯỚNG XHCN",desc:"Nền kinh tế vận hành theo các quy luật của thị trường, hướng tới xác lập xã hội dân giàu, nước mạnh, dân chủ, công bằng, văn minh",color:"#0ea5e9"},{id:"muc_5_1_2",name:"MỤC 5.1.2: TÍNH TẤT YẾU KHÁCH QUAN",desc:"Phù hợp với quy luật phát triển khách quan thời kỳ quá độ; phát huy ưu việt của thị trường để giải phóng sức sản xuất",color:"#10b981"},{id:"muc_5_1_3_a",name:"MỤC 5.1.3: ĐẶC TRƯNG VỀ MỤC TIÊU & SỞ HỮU",desc:"Mục tiêu giải phóng LLSX vì con người; kinh tế nhà nước giữ vai trò chủ đạo, kinh tế tư nhân là động lực quan trọng",color:"#f59e0b"},{id:"muc_5_1_3_b",name:"MỤC 5.1.3: ĐẶC TRƯNG VỀ QUẢN LÝ & PHÂN PHỐI",desc:"Nhà nước pháp quyền XHCN quản lý dưới sự lãnh đạo của Đảng; phân phối chủ yếu theo lao động và hiệu quả kinh tế",color:"#a855f7"},{id:"muc_5_1_3_c",name:"MỤC 5.1.3: GẮN TĂNG TRƯỞNG VỚI CÔNG BẰNG XH",desc:"Không hy sinh công bằng xã hội và môi trường chạy theo tăng trưởng đơn thuần; thực hiện tiến bộ ngay trong từng bước đi",color:"#ef4444"}],clues:[{id:"c3-clue-1",text:"KTTT định hướng XHCN là nền kinh tế vừa tuân theo các quy luật thị trường, vừa được dẫn dắt bởi các nguyên tắc và bản chất của CNXH",correctCategory:"muc_5_1_1",hint:"Định nghĩa chính xác theo Mục 5.1.1 trong Giáo trình chuẩn."},{id:"c3-clue-2",text:"Phát triển KTTT là sự lựa chọn tất yếu khách quan, bỏ qua chế độ TBCN nhưng không thể bỏ qua các quy luật kinh tế thị trường",correctCategory:"muc_5_1_2",hint:"Luận giải tính tất yếu khách quan của Mục 5.1.2."},{id:"c3-clue-3",text:"Nền kinh tế gồm nhiều thành phần: Kinh tế nhà nước giữ vai trò chủ đạo, kinh tế tư nhân là một động lực quan trọng của nền kinh tế",correctCategory:"muc_5_1_3_a",hint:"Đặc trưng cốt lõi về quan hệ sở hữu và thành phần kinh tế trong Mục 5.1.3."},{id:"c3-clue-4",text:"Thực hiện phân phối chủ yếu theo kết quả lao động, hiệu quả kinh tế, đồng thời phân phối theo mức đóng góp vốn và qua hệ thống an sinh xã hội",correctCategory:"muc_5_1_3_b",hint:"Đặc trưng về quan hệ phân phối thu nhập trong Mục 5.1.3."},{id:"c3-clue-5",text:"Tiến bộ và công bằng xã hội phải được thể hiện trong từng chính sách, từng dự án phát triển chứ không đợi kinh tế phát triển cao mới thực hiện",correctCategory:"muc_5_1_3_c",hint:"Đặc trưng thể hiện bản chất nhân văn ưu việt sâu sắc của định hướng XHCN."}],philosophicalVerdict:{headline:"Phá án thành công: KTTT định hướng XHCN là mô hình phát triển sáng tạo, tất yếu của Việt Nam!",concept:"Mục 5.1: Khái niệm, Tính tất yếu khách quan và Các đặc trưng của KTTT định hướng XHCN",analysis:"Theo Mục 5.1 Giáo trình chuẩn: Nền kinh tế thị trường định hướng XHCN ở Việt Nam là mô hình kinh tế tổng quát trong thời kỳ quá độ lên chủ nghĩa xã hội. Nó vận hành đầy đủ theo các quy luật khách quan của thị trường (giá trị, cung cầu, cạnh tranh), đồng thời bảo đảm định hướng XHCN thông qua vai trò chủ đạo của kinh tế nhà nước, sự lãnh đạo của Đảng và nguyên tắc gắn tăng trưởng kinh tế với công bằng xã hội ngay trong từng bước đi.",xpAwarded:180}},{id:"CASE-004",caseNumber:7,code:"ĐẠI ÁN #07",shortCode:"#07",chapterNum:5,chapterBadge:"CHƯƠNG 5 • HOÀN THIỆN THỂ CHẾ",shortTopic:"Hoàn thiện thể chế KTTT",icon:"🏛️",accentColor:"#ec4899",title:"Hồ Sơ Hoàn Thiện Thể Chế Kinh Tế Thị Trường Định Hướng XHCN Ở Việt Nam",subtitle:"Chuẩn Mục 5.2: Sự cần thiết hoàn thiện thể chế (5.2.1) & Các nội dung hoàn thiện chủ yếu (5.2.2)",image:"./assets/images/cases/case-c5-institutions.svg",dossierLevel:"CẤP ĐỘ: NÂNG CAO",backgroundStory:"Thực tiễn phát triển kinh tế bộc lộ những bất cập: Hệ thống pháp luật về đất đai còn kẽ hở dẫn đến đầu cơ thổi giá; thị trường vốn và trái phiếu doanh nghiệp thiếu minh bạch; năng lực thực thi và giám sát của bộ máy quản lý nhà nước có lúc còn lúng túng. Những hạn chế này đòi hỏi phải đẩy mạnh hoàn thiện thể chế kinh tế. Căn cứ Mục 5.2 Giáo trình chuẩn, bạn hãy phân loại các luận điểm vào đúng các khía cạnh thể chế!",categories:[{id:"muc_5_2_1",name:"MỤC 5.2.1: SỰ CẦN THIẾT HOÀN THIỆN THỂ CHẾ",desc:"Thể chế KTTT định hướng XHCN còn chưa đồng bộ, hệ thống luật pháp chưa đầy đủ, hiệu lực hiệu quả quản lý còn hạn chế",color:"#ef4444"},{id:"muc_5_2_2_a",name:"MỤC 5.2.2: THỂ CHẾ SỞ HỮU & THÀNH PHẦN KT",desc:"Thể chế hóa quyền tài sản; đổi mới nâng cao hiệu quả DNNN; tạo môi trường thuận lợi phát triển kinh tế tư nhân bình đẳng",color:"#3b82f6"},{id:"muc_5_2_2_b",name:"MỤC 5.2.2: ĐỒNG BỘ CÁC LOẠI THỊ TRƯỜNG",desc:"Hoàn thiện thể chế phát triển thị trường hàng hóa, dịch vụ, tài chính, bất động sản, lao động và khoa học công nghệ",color:"#10b981"},{id:"muc_5_2_2_c",name:"MỤC 5.2.2: THỂ CHẾ GẮN TĂNG TRƯỞNG & CÔNG BẰNG",desc:"Thể chế hóa chính sách phân phối, an sinh xã hội, giảm nghèo bền vững và bảo vệ môi trường sinh thái",color:"#f59e0b"},{id:"muc_5_2_2_d",name:"MỤC 5.2.2: NÂNG CAO NĂNG LỰC LÃNH ĐẠO CỦA ĐẢNG",desc:"Xây dựng Nhà nước kiến tạo phát triển; tăng cường sự lãnh đạo của Đảng và hiệu lực kiểm tra, giám sát của cả hệ thống",color:"#ec4899"}],clues:[{id:"c4-clue-1",text:"Do thể chế KTTT định hướng XHCN còn chưa đồng bộ, hệ thống luật pháp còn chồng chéo và hiệu lực thực thi chưa cao",correctCategory:"muc_5_2_1",hint:"Lý do cốt lõi khẳng định sự cần thiết phải hoàn thiện thể chế trong Mục 5.2.1."},{id:"c4-clue-2",text:"Hoàn thiện luật pháp về đất đai, bảo vệ quyền sở hữu trí tuệ và bảo đảm quyền tự do kinh doanh bình đẳng của mọi thành phần kinh tế",correctCategory:"muc_5_2_2_a",hint:"Nội dung hoàn thiện thể chế về sở hữu và phát triển các thành phần kinh tế."},{id:"c4-clue-3",text:"Xây dựng khung pháp lý minh bạch cho thị trường chứng khoán, thị trường trái phiếu, thị trường bất động sản và thị trường lao động",correctCategory:"muc_5_2_2_b",hint:"Nội dung hoàn thiện thể chế phát triển đồng bộ các yếu tố thị trường."},{id:"c4-clue-4",text:"Hoàn thiện luật pháp bảo hiểm xã hội, chính sách trợ cấp xã hội và quy chuẩn xả thải môi trường đạt chuẩn bền vững",correctCategory:"muc_5_2_2_c",hint:"Thể chế gắn kết tăng trưởng kinh tế với bảo đảm an sinh và tiến bộ xã hội."},{id:"c4-clue-5",text:"Đẩy mạnh cải cách hành chính công, xây dựng Chính phủ liêm chính kiến tạo và thể chế hóa kịp thời các Nghị quyết của Đảng vào pháp luật",correctCategory:"muc_5_2_2_d",hint:"Nâng cao vai trò lãnh đạo của Đảng và năng lực quản trị của Nhà nước pháp quyền."}],philosophicalVerdict:{headline:"Phá án thành công: Hoàn thiện thể chế là chìa khóa mở đường giải phóng sức sản xuất!",concept:"Mục 5.2: Sự cần thiết và Nội dung hoàn thiện thể chế KTTT định hướng XHCN ở Việt Nam",analysis:'Căn cứ Mục 5.2 Giáo trình chuẩn: Thể chế kinh tế là "luật chơi" quyết định hiệu quả vận hành của nền kinh tế. Sự cần thiết phải hoàn thiện thể chế bắt nguồn từ thực trạng hệ thống thể chế hiện hành chưa đồng bộ và kém hiệu lực. Nội dung hoàn thiện tập trung vào 4 trụ cột: hoàn thiện thể chế sở hữu và thành phần kinh tế; đồng bộ các loại thị trường; gắn tăng trưởng với công bằng xã hội; và nâng cao năng lực lãnh đạo của Đảng, năng lực quản lý của Nhà nước pháp quyền.',xpAwarded:190}},{id:"CASE-005",caseNumber:8,code:"ĐẠI ÁN #08",shortCode:"#08",chapterNum:6,chapterBadge:"CHƯƠNG 6 • CNH - HĐH 4.0",shortTopic:"CNH - HĐH thích ứng 4.0",icon:"⚡",accentColor:"#06b6d4",title:"Hồ Sơ Công Nghiệp Hóa, Hiện Đại Hóa Ở Việt Nam",subtitle:"Chuẩn Mục 6.1: Khái quát CMCN (6.1.1) & Tính tất yếu, Nội dung CNH - HĐH thích ứng CMCN 4.0 (6.1.2)",image:"./assets/images/cases/case-c6-industry40.svg",dossierLevel:"CẤP ĐỘ: NÂNG CAO",backgroundStory:"Trong bối cảnh cuộc Cách mạng công nghiệp lần thứ tư (CMCN 4.0) bùng nổ, nhiều doanh nghiệp sản xuất gia công của Việt Nam đứng trước nguy cơ mất đơn hàng vào tay robot và công nghệ tự động hóa. Đứng trước câu hỏi: Việt Nam có cần công nghiệp hóa nữa không và CNH thời kỳ này có gì khác trước? Hãy đối chiếu Mục 6.1 trong Giáo trình chuẩn Chương 6 để sắp xếp đúng các luận điểm lý luận!",categories:[{id:"muc_6_1_1",name:"MỤC 6.1.1: KHÁI QUÁT VỀ CMCN & CNH",desc:"Bản chất CMCN là bước nhảy vọt về tư liệu lao động; CNH là quá trình chuyển đổi căn bản từ lao động thủ công sang lao động bằng máy móc",color:"#06b6d4"},{id:"muc_6_1_2_a",name:"MỤC 6.1.2: TÍNH TẤT YẾU CỦA CNH, HĐH",desc:"Yêu cầu khách quan xây dựng CSVC-KT cho CNXH, rút ngắn khoảng cách tụt hậu, nâng cao năng suất và bảo vệ độc lập tự chủ",color:"#0284c7"},{id:"muc_6_1_2_b",name:"MỤC 6.1.2: CHUYỂN DỊCH CƠ CẤU KINH TẾ",desc:"Tăng nhanh tỷ trọng công nghiệp chế biến chế tạo và dịch vụ công nghệ cao, giảm dần tỷ trọng nông nghiệp truyền thống",color:"#10b981"},{id:"muc_6_1_2_c",name:"MỤC 6.1.2: NỘI DUNG THÍCH ỨNG CMCN 4.0",desc:"Đẩy mạnh chuyển đổi số quốc gia, phát triển kinh tế số, xã hội số, ứng dụng trí tuệ nhân tạo (AI), IoT và dữ liệu lớn",color:"#f59e0b"},{id:"muc_6_1_2_d",name:"MỤC 6.1.2: CHIẾN LƯỢC ĐI TẮT ĐÓN ĐẦU & BỀN VỮNG",desc:"Tận dụng lợi thế nước đi sau, phát triển nguồn nhân lực chất lượng cao, gắn CNH với kinh tế tri thức và tăng trưởng xanh",color:"#ec4899"}],clues:[{id:"c5-clue-1",text:"Cách mạng công nghiệp là những bước nhảy vọt về chất trình độ của tư liệu lao động, thúc đẩy phân công lao động xã hội và năng suất bứt phá",correctCategory:"muc_6_1_1",hint:"Định nghĩa khái quát về CMCN theo Mục 6.1.1 Giáo trình chuẩn."},{id:"c5-clue-2",text:"CNH, HĐH là con đường tất yếu khách quan để thoát khỏi bẫy thu nhập trung bình và xây dựng cơ sở vật chất kỹ thuật cho CNXH",correctCategory:"muc_6_1_2_a",hint:"Luận giải tính tất yếu khách quan trong Mục 6.1.2."},{id:"c5-clue-3",text:"Cơ cấu kinh tế chuyển dịch mạnh mẽ theo hướng tăng tỷ trọng ngành công nghiệp chế biến, chế tạo và dịch vụ tri thức hiện đại",correctCategory:"muc_6_1_2_b",hint:"Nội dung cốt lõi về chuyển dịch cơ cấu kinh tế của công nghiệp hóa hiện đại hóa."},{id:"c5-clue-4",text:"Thực hiện đồng thời chuyển đổi số toàn diện, phát triển Chính phủ số, kinh tế số và ứng dụng công nghệ thông minh trong sản xuất",correctCategory:"muc_6_1_2_c",hint:"Đặc thù công nghiệp hóa hiện đại hóa ở Việt Nam trong bối cảnh thích ứng CMCN 4.0."},{id:"c5-clue-5",text:"Kết hợp tuần tự với đi tắt đón đầu, phát triển nguồn nhân lực công nghệ cao và gắn công nghiệp hóa với bảo vệ môi trường sinh thái bền vững",correctCategory:"muc_6_1_2_d",hint:"Con đường và phương thức thực hiện CNH, HĐH hiệu quả ở nước ta."}],philosophicalVerdict:{headline:"Phá án thành công: CNH, HĐH thích ứng 4.0 là con đường duy nhất để Việt Nam phát triển bứt phá!",concept:"Mục 6.1: Khái quát CMCN và Tính tất yếu, Nội dung CNH, HĐH ở Việt Nam",analysis:'Theo Mục 6.1 Giáo trình chuẩn Chương 6: Công nghiệp hóa, hiện đại hóa ở Việt Nam là quá trình chuyển đổi căn bản, toàn diện các hoạt động sản xuất kinh doanh từ sử dụng lao động thủ công là chính sang lao động sử dụng phổ biến công nghệ tiên tiến, hiện đại. Trong thời đại CMCN 4.0, Việt Nam không đi theo lộ trình tuần tự cũ mà kết hợp "đi tắt đón đầu", lấy chuyển đổi số, kinh tế tri thức và phát triển bền vững làm động lực then chốt.',xpAwarded:200}},{id:"CASE-006",caseNumber:9,code:"ĐẠI ÁN #09",shortCode:"#09",chapterNum:6,chapterBadge:"CHƯƠNG 6 • HỘI NHẬP QUỐC TẾ",shortTopic:"Hội nhập quốc tế & Tự chủ",icon:"🌐",accentColor:"#06b6d4",title:"Hồ Sơ Hội Nhập Kinh Tế Quốc Tế Của Việt Nam",subtitle:"Chuẩn Mục 6.2: Khái niệm & Hình thức (6.2.1), Tác động (6.2.2) & Phương hướng nâng cao hiệu quả, Độc lập tự chủ (6.2.3)",image:"./assets/images/cases/case-c6-integration.svg",dossierLevel:"CẤP ĐỘ: NÂNG CAO",backgroundStory:"Hội nhập kinh tế quốc tế mang lại cho nước ta cơ hội mở rộng thị trường xuất khẩu kỷ lục và thu hút hàng trăm tỷ USD vốn đầu tư FDI. Tuy nhiên, đi kèm với đó là sức ép cạnh tranh gay gắt, nguy cơ gian lận xuất xứ hàng hóa và rủi ro bị phụ thuộc vào chuỗi cung ứng bên ngoài. Làm thế nào để vừa hội nhập sâu rộng, vừa giữ vững độc lập tự chủ kinh tế? Hãy phân loại các luận điểm khoa học theo Mục 6.2 Giáo trình chuẩn!",categories:[{id:"muc_6_2_1",name:"MỤC 6.2.1: KHÁI NIỆM & HÌNH THỨC HỘI NHẬP",desc:"Quá trình chủ động gắn kết kinh tế quốc gia với kinh tế thế giới qua các hình thức song phương, khu vực và đa phương toàn cầu (WTO, FTA)",color:"#818cf8"},{id:"muc_6_2_2_a",name:"MỤC 6.2.2: TÁC ĐỘNG TÍCH CỰC CỦA HỘI NHẬP",desc:"Mở rộng thị trường xuất khẩu, thu hút vốn FDI, tiếp thu công nghệ và kỹ năng quản lý, thúc đẩy cải cách thể chế trong nước",color:"#10b981"},{id:"muc_6_2_2_b",name:"MỤC 6.2.2: THÁCH THỨC & NGUY CƠ RỦI RO",desc:"Gia tăng cạnh tranh khốc liệt, nguy cơ phụ thuộc chuỗi cung ứng, gian lận thương mại xuất xứ và dễ tổn thương trước khủng hoảng toàn cầu",color:"#ef4444"},{id:"muc_6_2_3_a",name:"MỤC 6.2.3: XÂY DỰNG NỀN KT ĐỘC LẬP TỰ CHỦ",desc:"Tự chủ về đường lối phát triển, nâng cao năng lực nội sinh, đa dạng hóa thị trường đối tác để bảo đảm an ninh kinh tế",color:"#f59e0b"},{id:"muc_6_2_3_b",name:"MỤC 6.2.3: PHƯƠNG HƯỚNG NÂNG CAO HIỆU QUẢ",desc:"Nâng cao năng lực cạnh tranh quốc gia, hoàn thiện hệ thống phòng vệ thương mại, chủ động hội nhập có chọn lọc và bền vững",color:"#ec4899"}],clues:[{id:"c6-clue-1",text:"Hội nhập kinh tế quốc tế là quá trình gắn kết nền kinh tế của một quốc gia với kinh tế khu vực và thế giới thông qua các nỗ lực tự do hóa thương mại",correctCategory:"muc_6_2_1",hint:"Khái niệm chuẩn xác được định nghĩa trong Mục 6.2.1 Giáo trình chuẩn."},{id:"c6-clue-2",text:"Mở rộng thị trường tiêu thụ hàng hóa cho nông sản, dệt may, điện tử và tạo hàng triệu việc làm nhờ dòng vốn đầu tư trực tiếp nước ngoài (FDI)",correctCategory:"muc_6_2_2_a",hint:"Biểu hiện thực tiễn của tác động tích cực trong Mục 6.2.2."},{id:"c6-clue-3",text:"Nhiều doanh nghiệp nhỏ và vừa trong nước có nguy cơ giải thể do không chịu nổi sức ép cạnh tranh từ các tập đoàn đa quốc gia và hàng nhập khẩu giá rẻ",correctCategory:"muc_6_2_2_b",hint:"Tác động tiêu cực và thách thức của hội nhập trong Mục 6.2.2."},{id:"c6-clue-4",text:"Xây dựng nền kinh tế độc lập tự chủ là điểm tựa vững chắc để hội nhập hiệu quả, không để nền kinh tế bị lệ thuộc vào bất kỳ một thị trường đơn lẻ nào",correctCategory:"muc_6_2_3_a",hint:"Mối quan hệ biện chứng giữa độc lập tự chủ và hội nhập quốc tế trong Mục 6.2.3."},{id:"c6-clue-5",text:"Chủ động hoàn thiện công cụ phòng vệ thương mại, xử lý nghiêm gian lận xuất xứ và đào tạo nguồn nhân lực tinh thông luật thương mại quốc tế",correctCategory:"muc_6_2_3_b",hint:"Phương hướng then chốt nhằm nâng cao hiệu quả hội nhập quốc tế theo Mục 6.2.3."}],philosophicalVerdict:{headline:"Phá án thành công: Hội nhập toàn diện phải luôn gắn liền với xây dựng nền kinh tế độc lập tự chủ!",concept:"Mục 6.2: Khái niệm, Hình thức, Tác động và Phương hướng nâng cao hiệu quả Hội nhập KT quốc tế",analysis:"Theo Mục 6.2 Giáo trình chuẩn Chương 6: Hội nhập kinh tế quốc tế là xu thế khách quan của thời đại. Việt Nam chủ động, tích cực hội nhập theo phương châm: đa phương hóa, đa dạng hóa các quan hệ kinh tế quốc tế. Quá trình này đem lại cơ hội phát triển to lớn nhưng cũng đặt ra những thách thức gay gắt. Để hội nhập thành công, Việt Nam phải không ngừng củng cố nội lực, nâng cao năng lực cạnh tranh và kiên quyết giữ vững độc lập tự chủ kinh tế.",xpAwarded:200}}],rn=[{id:"first-thinker",name:"Economic Explorer",nameVi:"Người Khởi Đầu Khám Phá Kinh Tế",icon:"🌱",desc:"Hoàn thành tình huống kinh tế chính trị đầu tiên trong đời sống.",requirement:"Hoàn thành 1 tình huống bất kỳ.",unlockedAt:null},{id:"value-master",name:"Value Law Master",nameVi:"Bậc Thầy Quy Luật Giá Trị",icon:"⚖️",desc:"Thấu hiểu bản chất hai thuộc tính hàng hóa và quy luật giá trị điều tiết thị trường.",requirement:"Hoàn thành xuất sắc các tình huống Chương 2.",unlockedAt:null},{id:"quantity-to-quality",name:"Surplus Value Decoder",nameVi:"Giải Mã Bí Mật Giá Trị Thặng Dư",icon:"⚡",desc:"Trải nghiệm thành công Phòng thí nghiệm Ngày lao động và giải mã tỷ suất bóc lột m'.",requirement:"Khám phá Phòng thí nghiệm Ngày lao động (C3-M3-SLIDER).",unlockedAt:null},{id:"philosophy-detective",name:"Economic Detective",nameVi:"Nhà Điều Tra Kinh Tế Tài Ba",icon:"🔍",desc:"Phá án thành công một hồ sơ điều tra thực tế trong Phòng Phá Án Kinh Tế.",requirement:"Phân loại chính xác toàn bộ manh mối trong ít nhất 1 vụ án.",unlockedAt:null},{id:"monopoly-challenger",name:"Monopoly Strategist",nameVi:"Khắc Chế Tư Bản Độc Quyền",icon:"🛡️",desc:"Nắm vững bản chất độc quyền công nghệ, giá cả độc quyền và vai trò điều tiết của Nhà nước.",requirement:"Vượt qua các tình huống phức tạp của Chương 4.",unlockedAt:null},{id:"social-harmonizer",name:"Harmonious Builder",nameVi:"Kiến Tạo Hài Hòa Lợi Ích XHCN",icon:"🤝",desc:"Xử lý hài hòa quan hệ lợi ích kinh tế giữa người lao động, doanh nghiệp và xã hội.",requirement:"Hoàn thành kịch bản Chương 5 về KTTT định hướng XHCN.",unlockedAt:null},{id:"dialectical-thinker",name:"Master Political Economist",nameVi:"Nhà Kinh Tế Chính Trị Toàn Diện",icon:"🏆",desc:"Chinh phục toàn diện giáo trình MLN122 và đạt điểm tư duy kinh tế xuất sắc.",requirement:"Hoàn thành tối thiểu 8 tình huống và phá giải ít nhất 2 vụ án điều tra.",unlockedAt:null},{id:"quiz-arena-champion",name:"Quiz Arena Champion",nameVi:"Quán Quân Đấu Trường Quizizz",icon:"🎯",desc:"Chinh phục đấu trường trắc nghiệm MLN122 với kết quả xuất sắc và điểm số ấn tượng.",requirement:"Hoàn thành lượt thi trong Đấu Trường Quizizz đạt từ 80% độ chính xác trở lên.",unlockedAt:null}],ln=[{key:"connection",name:"Quy Luật Giá Trị & Cơ Chế Thị Trường",nameShort:"Quy Luật Giá Trị",desc:"Khả năng nhận diện quy luật giá trị, cung - cầu và tính hai mặt của lao động sản xuất hàng hóa.",color:"#0284c7"},{key:"contradiction",name:"Bản Chất Giá Trị Thặng Dư & Lao Động",nameShort:"Giá Trị Thặng Dư",desc:"Khả năng bóc tách nguồn gốc giá trị thặng dư (m), hàng hóa sức lao động và sự phân chia c và v.",color:"#f59e0b"},{key:"depth",name:"Chiến Lược Cạnh Tranh & Độc Quyền",nameShort:"Cạnh Tranh & Độc Quyền",desc:"Khả năng phân tích sự tập trung tư bản, nhận diện độc quyền số và vai trò điều tiết của Nhà nước.",color:"#8b5cf6"},{key:"objective",name:"Hài Hòa Các Quan Hệ Lợi Ích Kinh Tế",nameShort:"Hài Hòa Lợi Ích",desc:"Năng lực cân bằng lợi ích cá nhân, doanh nghiệp và xã hội trong nền KTTT định hướng XHCN.",color:"#10b981"},{key:"practice",name:"Tầm Nhìn Công Nghiệp Hóa 4.0 & Hội Nhập",nameShort:"Hội Nhập & CNH 4.0",desc:"Tư duy chủ động đón đầu cách mạng công nghiệp số và xây dựng nền kinh tế độc lập tự chủ.",color:"#ec4899"}],gn=[{id:"master-economist",title:"NHÀ KINH TẾ CHÍNH TRỊ BIỆN CHỨNG TOÀN DIỆN",titleEn:"Master Political Economist",tagline:"Làm chủ các quy luật thị trường, thấu suốt bản chất giá trị thặng dư và lợi ích xã hội.",icon:"🏛️✨",minScore:80,accentColor:"#10b981",description:"Bạn sở hữu tư duy kinh tế chính trị xuất sắc: không bị lừa gạt bởi hiện tượng sốt giá ngắn hạn hay chiêu trò độc quyền, luôn phân tích bản chất hao phí lao động xã hội và các quan hệ sản xuất bên dưới. Bạn có tầm nhìn chiến lược sâu sắc về kinh tế thị trường định hướng XHCN và làm chủ các quyết định đầu tư, sự nghiệp bền vững.",strengths:["Khả năng nhìn thấu bản chất giá trị đằng sau giá cả","Thấu suốt nguồn gốc giá trị thặng dư và quan hệ lao động","Năng lực cân bằng hài hòa giữa lợi nhuận và trách nhiệm xã hội","Tầm nhìn công nghiệp hóa 4.0 và hội nhập quốc tế độc lập tự chủ"],lifeAdvice:"Tiếp tục phát huy vai trò người dẫn dắt kinh tế có tầm nhìn và đạo đức; chia sẻ tri thức và xây dựng các mô hình kinh doanh mang lại giá trị thực chất cho cộng đồng."},{id:"market-strategist",title:"NHÀ CHIẾN LƯỢC THỊ TRƯỜNG & GIÁ TRỊ",titleEn:"Market & Value Strategist",tagline:"Nắm vững quy luật giá trị, cung - cầu và bí quyết tối ưu hóa năng suất lao động.",icon:"📈💡",minScore:65,accentColor:"#0284c7",description:"Bạn là chuyên gia nhạy bén với cơ chế thị trường: hiểu rõ sự khác biệt giữa giá trị sử dụng và giá trị, biết cách tăng năng suất lao động bằng công nghệ thay vì vắt kiệt thể lực. Bạn có bản lĩnh vững vàng trước các cơn sốt đầu cơ và biết tạo ra giá trị bền vững.",strengths:["Nhạy bén với quy luật giá trị và biến động cung - cầu","Tư duy tối ưu hóa năng suất lao động bằng công nghệ","Tránh xa các bẫy đầu cơ ngắn hạn"],lifeAdvice:"Mở rộng sự quan tâm hơn nữa tới khía cạnh trách nhiệm xã hội và môi trường; sự thành công bền vững của doanh nghiệp luôn cần sự đồng thuận của cộng đồng."},{id:"social-harmonizer",title:"NHÀ QUẢN TRỊ HÀI HÒA LỢI ÍCH XÃ HỘI",titleEn:"Social Economic Harmonizer",tagline:"Lợi ích kinh tế là động lực, nhưng công bằng và nhân văn là linh hồn của phát triển.",icon:"🤝🌱",minScore:50,accentColor:"#f59e0b",description:"Bạn có trái tim ấm áp và tư duy công bằng: luôn chú trọng bảo vệ quyền lợi người lao động, kiên quyết phản đối bóc lột bất công và thúc đẩy mô hình hợp tác cùng có lợi (Win-Win). Bạn là đại diện tiêu biểu cho tinh thần nhân văn của KTTT định hướng XHCN.",strengths:["Kỹ năng giải quyết mâu thuẫn và hài hòa các bên liên quan","Tôn trọng giá trị con người và đạo đức kinh doanh","Ý thức bảo vệ môi trường và trách nhiệm cộng đồng"],lifeAdvice:"Cần trau dồi thêm các công cụ định lượng kinh tế, phân tích cấu tạo tư bản và bài toán tài chính để lòng tốt luôn được chắp cánh bởi năng lực vận hành hiệu quả."},{id:"economic-explorer",title:"NHÀ THỰC HÀNH KINH TẾ TIỀM NĂNG",titleEn:"Pragmatic Economic Explorer",tagline:"Mỗi tình huống đời sống là một bài học thực tiễn để tôi luyện tư duy kinh tế.",icon:"🧭🌱",minScore:0,accentColor:"#8b5cf6",description:"Bạn đang trên hành trình khám phá thế giới kinh tế chính trị đầy lôi cuốn. Đôi khi bạn còn bối rối trước các hiện tượng thị trường phức tạp, nhưng tinh thần học hỏi và trải nghiệm qua các tình huống sẽ giúp bạn nhanh chóng trưởng thành và làm chủ các quy luật.",strengths:["Tinh thần cởi mở sẵn sàng tiếp thu tri thức mới","Khát khao tự lập và làm chủ kinh tế cá nhân","Khả năng thích ứng linh hoạt"],lifeAdvice:"Hãy kiên trì học hỏi và đối chiếu lý luận MLN122 với các chuyển động kinh tế hằng ngày trên báo chí và đời sống; bạn sẽ sớm trở thành một nhà kinh tế bản lĩnh!"}];function Nn(i,n){const h={connection:{total:0,max:0},contradiction:{total:0,max:0},objective:{total:0,max:0},practice:{total:0,max:0},depth:{total:0,max:0}},a=40;n.forEach(v=>{const o=v.dimensionScores||{},r=i.completedScenarios[v.id];Object.keys(h).forEach(u=>{const q=o[u]||15;h[u].max+=q,r&&(r.isDialectical?h[u].total+=q:h[u].total+=Math.round(q*.35))})});const t=Object.keys(i.detectiveSolved||{}).length,e=t*8,s={};let g=0;ln.forEach(v=>{const o=h[v.key];let r;o.max===0?r=a:(r=Math.round(o.total/o.max*100),r=Math.min(100,Math.max(20,r+e))),s[v.key]=r,g+=r});const p=Math.round(g/ln.length);let m=gn[gn.length-1];for(const v of gn)if(p>=v.minScore){m=v;break}return{dimensionScores:s,averageScore:p,archetype:m,totalScenariosCompleted:Object.keys(i.completedScenarios).length,detectiveCasesSolved:t}}function fn(i,n=300){const h=n/2,a=n/2-40,t=[-Math.PI/2,-Math.PI/2+2*Math.PI/5,-Math.PI/2+4*Math.PI/5,-Math.PI/2+6*Math.PI/5,-Math.PI/2+8*Math.PI/5],e=["connection","contradiction","objective","practice","depth"],s=t.map((o,r)=>{const u=(i[e[r]]||50)/100,q=a*u,k=h+q*Math.cos(o),b=h+q*Math.sin(o);return`${k.toFixed(1)},${b.toFixed(1)}`}).join(" "),g=[.2,.4,.6,.8,1].map(o=>`<polygon points="${t.map(u=>{const q=a*o,k=h+q*Math.cos(u),b=h+q*Math.sin(u);return`${k.toFixed(1)},${b.toFixed(1)}`}).join(" ")}" fill="none" stroke="currentColor" stroke-opacity="0.14" stroke-width="1.2" stroke-dasharray="${o===1?"none":"3 3"}"/>`).join(""),p=t.map(o=>{const r=h+a*Math.cos(o),u=h+a*Math.sin(o);return`<line x1="${h}" y1="${h}" x2="${r.toFixed(1)}" y2="${u.toFixed(1)}" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.2"/>`}).join(""),v=[{x:h,y:h-a-16,anchor:"middle",label:"Mối liên hệ"},{x:h+a+15,y:h-25,anchor:"start",label:"Mâu thuẫn"},{x:h+a*.7,y:h+a+22,anchor:"middle",label:"Khách quan"},{x:h-a*.7,y:h+a+22,anchor:"middle",label:"Thực tiễn"},{x:h-a-15,y:h-25,anchor:"end",label:"Bản chất"}].map((o,r)=>{const u=i[e[r]]||50;return`
      <text x="${o.x}" y="${o.y}" fill="currentColor" opacity="0.85" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="700" text-anchor="${o.anchor}">
        ${o.label}
        <tspan fill="#2563eb" font-weight="bold"> (${u}%)</tspan>
      </text>
    `}).join("");return`
    <svg viewBox="0 0 ${n} ${n}" width="${n}" height="${n}" class="radar-chart-svg" style="color: var(--text-main); max-width: 100%;">
      <defs>
        <radialGradient id="radarFillGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#059669" stop-opacity="0.45"/>
          <stop offset="100%" stop-color="#2563eb" stop-opacity="0.2"/>
        </radialGradient>
      </defs>
      ${g}
      ${p}
      <polygon points="${s}" fill="url(#radarFillGrad)" stroke="#2563eb" stroke-width="2.5" />
      ${t.map((o,r)=>{const u=(i[e[r]]||50)/100,q=a*u,k=h+q*Math.cos(o),b=h+q*Math.sin(o);return`<circle cx="${k.toFixed(1)}" cy="${b.toFixed(1)}" r="5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>`}).join("")}
      ${v}
    </svg>
  `}class Hn{constructor(){this.ctx=null,this.muted=localStorage.getItem("mln122_sound_muted")==="true"}init(){if(!this.ctx&&(window.AudioContext||window.webkitAudioContext)){const n=window.AudioContext||window.webkitAudioContext;this.ctx=new n}}toggleMute(){return this.muted=!this.muted,localStorage.setItem("mln122_sound_muted",this.muted),this.muted}isMuted(){return this.muted}playClick(){if(!this.muted&&(this.init(),!!this.ctx))try{const n=this.ctx.createOscillator(),h=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(600,this.ctx.currentTime),n.frequency.exponentialRampToValueAtTime(300,this.ctx.currentTime+.05),h.gain.setValueAtTime(.12,this.ctx.currentTime),h.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.05),n.connect(h),h.connect(this.ctx.destination),n.start(),n.stop(this.ctx.currentTime+.05)}catch{}}playDialecticalSuccess(){if(!this.muted&&(this.init(),!!this.ctx))try{[523.25,659.25,783.99,1046.5].forEach((h,a)=>{const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(h,this.ctx.currentTime+a*.08),e.gain.setValueAtTime(.15,this.ctx.currentTime+a*.08),e.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+a*.08+.35),t.connect(e),e.connect(this.ctx.destination),t.start(this.ctx.currentTime+a*.08),t.stop(this.ctx.currentTime+a*.08+.35)})}catch{}}playWarning(){if(!this.muted&&(this.init(),!!this.ctx))try{const n=this.ctx.createOscillator(),h=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(260,this.ctx.currentTime),n.frequency.exponentialRampToValueAtTime(200,this.ctx.currentTime+.25),h.gain.setValueAtTime(.12,this.ctx.currentTime),h.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.25),n.connect(h),h.connect(this.ctx.destination),n.start(),n.stop(this.ctx.currentTime+.25)}catch{}}playLeapBoom(){if(!this.muted&&(this.init(),!!this.ctx))try{const n=this.ctx.createOscillator(),h=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(150,this.ctx.currentTime),n.frequency.exponentialRampToValueAtTime(800,this.ctx.currentTime+.2),n.frequency.exponentialRampToValueAtTime(120,this.ctx.currentTime+.6),h.gain.setValueAtTime(.25,this.ctx.currentTime),h.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.6),n.connect(h),h.connect(this.ctx.destination),n.start(),n.stop(this.ctx.currentTime+.6),setTimeout(()=>this.playDialecticalSuccess(),250)}catch{}}playClueSnap(){if(!this.muted&&(this.init(),!!this.ctx))try{const n=this.ctx.createOscillator(),h=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(880,this.ctx.currentTime),n.frequency.exponentialRampToValueAtTime(440,this.ctx.currentTime+.08),h.gain.setValueAtTime(.18,this.ctx.currentTime),h.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.08),n.connect(h),h.connect(this.ctx.destination),n.start(),n.stop(this.ctx.currentTime+.08)}catch{}}playFanfare(){if(!this.muted&&(this.init(),!!this.ctx))try{[[523.25,659.25],[587.33,698.46],[659.25,783.99],[783.99,1046.5,1318.51]].forEach((h,a)=>{h.forEach(t=>{const e=this.ctx.createOscillator(),s=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(t,this.ctx.currentTime+a*.12),s.gain.setValueAtTime(.15,this.ctx.currentTime+a*.12),s.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+a*.12+(a===3?.7:.25)),e.connect(s),s.connect(this.ctx.destination),e.start(this.ctx.currentTime+a*.12),e.stop(this.ctx.currentTime+a*.12+(a===3?.7:.25))})})}catch{}}}const l=new Hn,en="mln122_philosophy_state_v1";class Ln{constructor(){this.listeners=[],this.state=this.loadState()}loadState(){try{const n=localStorage.getItem(en);if(n){const h=JSON.parse(n);return{xp:h.xp||0,completedScenarios:h.completedScenarios||{},detectiveSolved:h.detectiveSolved||{},unlockedBadges:h.unlockedBadges||[],activeBadgePopup:null,sliderCompleted:!!h.sliderCompleted}}}catch(n){console.warn("[MLN122] Failed to load localStorage state, starting fresh:",n)}return{xp:0,completedScenarios:{},detectiveSolved:{},unlockedBadges:[],activeBadgePopup:null,sliderCompleted:!1}}saveState(){try{const n={xp:this.state.xp,completedScenarios:this.state.completedScenarios,detectiveSolved:this.state.detectiveSolved,unlockedBadges:this.state.unlockedBadges,sliderCompleted:this.state.sliderCompleted};localStorage.setItem(en,JSON.stringify(n))}catch(n){console.warn("[MLN122] Failed to save state:",n)}this.notify()}subscribe(n){return this.listeners.push(n),()=>{this.listeners=this.listeners.filter(h=>h!==n)}}notify(){this.listeners.forEach(n=>n(this.state))}recordScenarioAnswer(n,h){const a=z.find(g=>g.id===n);if(!a)return null;const t=a.options.find(g=>g.id===h);if(!t)return null;const e=this.state.completedScenarios[n],s=t.isDialectical;if(this.state.completedScenarios[n]={optionId:h,isDialectical:s,answeredAt:new Date().toISOString()},e)!e.isDialectical&&s&&(this.state.xp+=25);else{const g=s?50:25;this.state.xp+=g}return s?l.playDialecticalSuccess():l.playWarning(),this.checkBadges(),this.saveState(),{scenario:a,option:t}}recordDetectiveSolved(n){const h=E.find(t=>t.id===n);if(!h)return;const a=!this.state.detectiveSolved[n];this.state.detectiveSolved[n]={solvedAt:new Date().toISOString(),xp:h.philosophicalVerdict.xpAwarded},a&&(this.state.xp+=h.philosophicalVerdict.xpAwarded),l.playFanfare(),this.checkBadges(),this.saveState()}recordSliderLeap(){this.state.sliderCompleted=!0,this.state.completedScenarios["C3-M3-SLIDER"]={optionId:"B",isDialectical:!0,answeredAt:new Date().toISOString()},this.state.completedScenarios["C2-M3-SLIDER"]={optionId:"B",isDialectical:!0,answeredAt:new Date().toISOString()},this.state.xp+=60,this.checkBadges(),this.saveState()}recordQuizCompleted(n=100){this.state.quizCompleted=!0,n>=80&&(this.state.quizMaster=!0),this.checkBadges(),this.saveState()}checkBadges(){var e,s,g,p,m,v;const n=Object.keys(this.state.completedScenarios).length,h=Object.keys(this.state.detectiveSolved).length,a=[],t=o=>{if(!this.state.unlockedBadges.includes(o)){this.state.unlockedBadges.push(o);const r=rn.find(u=>u.id===o);r&&a.push(r)}};n>=1&&t("first-thinker"),((e=this.state.completedScenarios["C2-S1"])!=null&&e.isDialectical||(s=this.state.completedScenarios["C2-S4"])!=null&&s.isDialectical)&&t("value-master"),this.state.sliderCompleted&&t("quantity-to-quality"),h>=1&&t("philosophy-detective"),((g=this.state.completedScenarios["C4-S1"])!=null&&g.isDialectical||(p=this.state.completedScenarios["C4-S3"])!=null&&p.isDialectical)&&t("monopoly-challenger"),((m=this.state.completedScenarios["C5-S1"])!=null&&m.isDialectical||(v=this.state.completedScenarios["C5-S2"])!=null&&v.isDialectical)&&t("social-harmonizer"),n>=6&&h>=1&&t("dialectical-thinker"),(this.state.quizMaster||this.state.quizCompleted)&&t("quiz-arena-champion"),a.length>0&&(this.state.activeBadgePopup=a[0],l.playFanfare())}dismissBadgePopup(){this.state.activeBadgePopup=null,this.notify()}getProfile(){return Nn(this.state,z)}resetProgress(){this.state={xp:0,completedScenarios:{},detectiveSolved:{},unlockedBadges:[],activeBadgePopup:null,sliderCompleted:!1};try{localStorage.removeItem(en)}catch(n){console.warn("[MLN122] Failed to clear localStorage:",n)}this.notify()}resetAllProgress(){this.resetProgress()}getTotalProgressPercent(){const n=z.length+E.length,h=Object.keys(this.state.completedScenarios).length+Object.keys(this.state.detectiveSolved).length;return n===0?0:Math.min(100,Math.round(h/n*100))}}const H=new Ln;function dn(i,n,h,a){const t=H.state,e=l.isMuted(),s=document.documentElement.getAttribute("data-theme")==="dark"?"dark":"light";i.innerHTML=`
    <header class="site-header">
      <div class="container header-content">
        <!-- Minimalist Brand -->
        <div class="brand-logo" id="nav-brand-btn" title="Về trang chủ MLN122">
          <div class="brand-icon">📈</div>
          <div class="brand-text">
            <h1>MLN122 – KINH TẾ CHÍNH TRỊ TRONG ĐỜI SỐNG</h1>
            <p>C. MÁC • PH. ĂNG-GHEN • V.I. LÊNIN</p>
          </div>
        </div>

        <!-- Clean Minimalist Nav -->
        <div class="nav-actions">
          <button class="nav-btn" id="nav-map-btn" title="Bản đồ 6 chương và các tình huống">
            <span>🗺️ Hành Trình</span>
          </button>

          <button class="nav-btn" id="nav-detective-btn" title="Phòng Phá Án Kinh Tế">
            <span>🔍 Phá Án Kinh Tế</span>
          </button>

          <button class="nav-btn" id="nav-quiz-btn" style="border-color: rgba(139, 92, 246, 0.4); color: #8b5cf6;" title="Đấu Trường Quizizz MLN122">
            <span>🎮 Game Quizizz</span>
          </button>

          <button class="nav-btn" id="nav-handbook-btn" title="Sổ tay lý luận MLN122">
            <span>📖 Sổ Tay KTCT</span>
          </button>

          <button class="nav-btn" id="nav-profile-btn" style="border-color: rgba(37, 99, 235, 0.4); color: var(--accent-blue);" title="Xem hồ sơ tư duy & chứng nhận">
            <span>🧠 Hồ Sơ Tư Duy</span>
          </button>

          <div class="xp-counter" title="Tổng điểm kinh nghiệm tích lũy">
            <span>✨</span>
            <span id="nav-xp-val">${t.xp} XP</span>
          </div>

          <!-- Theme Toggle Button -->
          <button class="nav-btn" id="nav-theme-toggle-btn" title="Chuyển chế độ Sáng / Tối">
            <span id="theme-icon-symbol">${s==="dark"?"☀️ Sáng":"🌙 Tối"}</span>
          </button>

          <button class="nav-btn" id="nav-sound-toggle-btn" title="${e?"Bật âm thanh":"Tắt âm thanh"}">
            <span id="sound-icon-symbol">${e?"🔇":"🔊"}</span>
          </button>
        </div>
      </div>
    </header>
  `,document.getElementById("nav-brand-btn").addEventListener("click",()=>{l.playClick(),n("landing")}),document.getElementById("nav-map-btn").addEventListener("click",()=>{l.playClick(),n("map")}),document.getElementById("nav-detective-btn").addEventListener("click",()=>{l.playClick(),n("detective")});const g=document.getElementById("nav-quiz-btn");g&&g.addEventListener("click",()=>{l.playClick(),n("quiz")}),document.getElementById("nav-handbook-btn").addEventListener("click",()=>{l.playClick(),h("handbook")}),document.getElementById("nav-profile-btn").addEventListener("click",()=>{l.playClick(),h("profile")});const p=document.getElementById("nav-theme-toggle-btn");p&&p.addEventListener("click",()=>{l.playClick();const v=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",v),localStorage.setItem("mln122_theme",v),document.getElementById("theme-icon-symbol").textContent=v==="dark"?"☀️ Sáng":"🌙 Tối"}),document.getElementById("nav-sound-toggle-btn").addEventListener("click",()=>{const m=l.toggleMute();document.getElementById("sound-icon-symbol").textContent=m?"🔇":"🔊",l.playClick()})}const Mn={BASE_URL:"/MLN122/",DEV:!1,MODE:"production",PROD:!0,SSR:!1};function O(i){if(!i)return"";if(/^(https?:|data:|\/\/)/i.test(i))return i;const n=i.replace(/^\.?\//,"");if(typeof window<"u"&&(window.location.hostname.includes("github.io")||window.location.pathname.startsWith("/MLN122")))return`/MLN122/${n}`;const a=typeof import.meta<"u"&&Mn&&"/MLN122/"||"/";return`${a.endsWith("/")?a:`${a}/`}${n}`}function Sn(i,n){const h=H.state.xp>0||Object.keys(H.state.completedScenarios).length>0||Object.keys(H.state.detectiveSolved).length>0;i.innerHTML=`
    <section class="hero-fullscreen animate-fade-in">
      <!-- Ambient Background Glow & Floating Mathematical Symbols -->
      <div class="hero-ambient-bg">
        <div class="ambient-orb ambient-orb-1"></div>
        <div class="ambient-orb ambient-orb-2"></div>
        <div class="ambient-orb ambient-orb-3"></div>
        <div class="floating-econ-symbol econ-sym-1" title="Giá trị thặng dư">m</div>
        <div class="econ-sym-pill econ-sym-2" title="Công thức chung tư bản">T – H – T'</div>
        <div class="econ-sym-pill econ-sym-3" title="Cấu thành giá trị">c + v + m</div>
        <div class="floating-econ-symbol econ-sym-4">📈</div>
        <div class="floating-econ-symbol econ-sym-5">⚙️</div>
      </div>

      <div class="container" style="position: relative; z-index: 2;">
        <!-- Top Centered Badge -->
        <div class="hero-top-badge-wrapper">
          <div class="hero-badge-tag">
            <span>MÔN HỌC MLN122 • KINH TẾ CHÍNH TRỊ MÁC – LÊNIN</span>
          </div>
        </div>

        <div class="hero-grid-main">
          
          <!-- LEFT COLUMN: Content, Headline, Quote & Actions -->
          <div>
            <!-- Main Headline -->
            <h1 class="hero-headline-h1">
              KINH TẾ CHÍNH TRỊ <br />
              <span class="text-gold-gradient">TRONG ĐỜI SỐNG</span>
            </h1>

            <!-- Slogan -->
            <p class="hero-slogan-text">
              "Thấu hiểu quy luật thị trường – Làm chủ giá trị và đời sống hiện đại."
            </p>

            <!-- Philosophy Quote Card -->
            <div class="hero-quote-box">
              <p>
                "Lao động là cha, còn đất đai là mẹ của mọi của cải vật chất... Người ta không thể ăn những lý thuyết suông, mà phải sản xuất ra của cải để sinh tồn và phát triển."
              </p>
              <div class="author">— C. MÁC &amp; W. PETTY</div>
            </div>

            <!-- Primary Action Buttons -->
            <div class="hero-cta-buttons">
              <button class="btn-primary" id="hero-start-btn" style="padding: 0.95rem 2.2rem; font-size: 1.05rem;">
                <span>${h?"🚀 TIẾP TỤC HỌC TẬP":"🚀 BẮT ĐẦU HỌC TẬP MLN122"}</span>
              </button>
              <button class="btn-secondary" id="hero-detective-btn" style="padding: 0.95rem 1.8rem; font-size: 1rem;">
                <span>🔍 PHÒNG PHÁ ÁN KINH TẾ</span>
              </button>
              <button class="btn-secondary" id="hero-quiz-btn" style="padding: 0.95rem 1.8rem; font-size: 1rem; border-color: rgba(139, 92, 246, 0.4); color: #8b5cf6;">
                <span>🎮 ĐẤU TRƯỜNG QUIZIZZ</span>
              </button>
            </div>
          </div>

          <!-- RIGHT COLUMN: Full-Height Classic Portrait of Lenin, Engels & Marx -->
          <div>
            <div class="hero-portrait-wrapper">
              <div class="hero-portrait-glow"></div>
              <div class="hero-portrait-frame">
                <img 
                  src="${O("./assets/images/portraits/marx-engels-lenin.png")}" 
                  alt="Chân dung V.I. Lênin, Ph. Ăng-ghen và C. Mác" 
                  class="hero-portrait-img" 
                  onerror="this.onerror=null; this.src='./assets/images/portraits/marx-engels-lenin.png';"
                />
                <div class="hero-portrait-caption">
                  <div class="cap-names">C. MÁC • PH. ĂNG-GHEN • V.I. LÊNIN</div>
                  <div class="cap-sub">NHỮNG BẬC THẦY ĐẶT NỀN MÓNG KINH TẾ CHÍNH TRỊ KHOA HỌC</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- FULL-WIDTH CENTERED ROADMAP: 6 CHƯƠNG MLN122 (3 CỘT X 2 HÀNG) -->
        <div class="hero-roadmap-section">
          <div class="roadmap-header-center">
            <span class="roadmap-badge-title">LỘ TRÌNH 6 CHƯƠNG MLN122</span>
          </div>
          <div class="hero-quick-roadmap">
            <button class="roadmap-pill-btn roadmap-ch1" data-nav-chapter="1">
              <span class="ch-badge">Chương 1</span>
              <span class="ch-name">Đối Tượng &amp; Phương Pháp</span>
              <span class="ch-arrow">→</span>
            </button>
            <button class="roadmap-pill-btn roadmap-ch2" data-nav-chapter="2">
              <span class="ch-badge">Chương 2</span>
              <span class="ch-name">Hàng Hóa &amp; Thị Trường</span>
              <span class="ch-arrow">→</span>
            </button>
            <button class="roadmap-pill-btn roadmap-ch3" data-nav-chapter="3">
              <span class="ch-badge">Chương 3</span>
              <span class="ch-name">Giá Trị Thặng Dư (m)</span>
              <span class="ch-arrow">→</span>
            </button>
            <button class="roadmap-pill-btn roadmap-ch4" data-nav-chapter="4">
              <span class="ch-badge">Chương 4</span>
              <span class="ch-name">Cạnh Tranh &amp; Độc Quyền</span>
              <span class="ch-arrow">→</span>
            </button>
            <button class="roadmap-pill-btn roadmap-ch5" data-nav-chapter="5">
              <span class="ch-badge">Chương 5</span>
              <span class="ch-name">KTTT Định Hướng XHCN</span>
              <span class="ch-arrow">→</span>
            </button>
            <button class="roadmap-pill-btn roadmap-ch6" data-nav-chapter="6">
              <span class="ch-badge">Chương 6</span>
              <span class="ch-name">CNH 4.0 &amp; Hội Nhập</span>
              <span class="ch-arrow">→</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  `,document.getElementById("hero-start-btn").addEventListener("click",()=>{l.playClick(),n("map")}),document.getElementById("hero-detective-btn").addEventListener("click",()=>{l.playClick(),n("detective")});const a=document.getElementById("hero-quiz-btn");a&&a.addEventListener("click",()=>{l.playClick(),n("quiz")}),i.querySelectorAll("[data-nav-chapter]").forEach(e=>{e.addEventListener("click",()=>{l.playClick();const s=e.getAttribute("data-nav-chapter");n("map",{scrollToChapter:s})})});const t=i.querySelector("[data-nav-detective]");t&&t.addEventListener("click",()=>{l.playClick(),n("detective")})}const mn=[{id:1,title:"Đối Tượng & Phương Pháp Của Kinh Tế Chính Trị Mác – Lênin",titleEn:"Subject Matter, Methodology & Functions of Marxist-Leninist Political Economy",code:"CHƯƠNG 1",badge:"NỀN TẢNG KHOA HỌC",desc:"Lịch sử phát triển của kinh tế chính trị, đối tượng nghiên cứu quan hệ sản xuất & trao đổi, phương pháp trừu tượng hóa khoa học và 4 chức năng cốt lõi.",accentColor:"#0284c7",icon:"compass",totalScenarios:5,modules:[{id:"1.1",title:"1.1. Sự ra đời và các giai đoạn phát triển của Kinh tế chính trị Mác – Lênin"},{id:"1.2",title:"1.2. Đối tượng và mục đích nghiên cứu của Kinh tế chính trị Mác – Lênin"},{id:"1.3",title:"1.3. Phương pháp nghiên cứu và 4 chức năng của Kinh tế chính trị Mác – Lênin"}]},{id:2,title:"Hàng Hóa, Thị Trường & Các Chủ Thể Tham Gia Thị Trường",titleEn:"Commodities, Markets & Market Actors",code:"CHƯƠNG 2",badge:"CƠ CHẾ THỊ TRƯỜNG",desc:"Bản chất hàng hóa, 2 thuộc tính (GTSD & Giá trị), tính 2 mặt của lao động sản xuất, tiền tệ và các quy luật kinh tế thị trường (Giá trị, Cung - Cầu, Cạnh tranh).",accentColor:"#10b981",icon:"shopping-bag",totalScenarios:6,modules:[{id:"2.1",title:"2.1. Lý luận của C. Mác về sản xuất hàng hóa và hàng hóa"},{id:"2.2",title:"2.2. Lịch sử các hình thái giá trị và sự ra đời của Tiền tệ"},{id:"2.3",title:"2.3. Thị trường và vai trò của các chủ thể tham gia thị trường"}]},{id:3,title:"Giá Trị Thặng Dư Trong Nền Kinh Tế Thị Trường",titleEn:"Surplus Value in the Market Economy",code:"CHƯƠNG 3 (TRỌNG TÂM)",badge:"HẠT NHÂN KINH TẾ CHÍNH TRỊ",desc:"Lý luận C. Mác về giá trị thặng dư (nguồn gốc, bản chất c/v, m', M, các phương pháp sản xuất GTTD), tích lũy tư bản và các hình thức biểu hiện (chi phí K, lợi nhuận, lợi tức, địa tô).",accentColor:"#f59e0b",icon:"trending-up",totalScenarios:7,modules:[{id:"3.1.1",title:"3.1.1. Nguồn gốc của giá trị thặng dư"},{id:"3.1.2",title:"3.1.2. Bản chất của giá trị thặng dư"},{id:"3.1.3",title:"3.1.3. Các phương pháp sản xuất giá trị thặng dư trong nền kinh tế thị trường tư bản chủ nghĩa"},{id:"3.2",title:"3.2. Tích lũy tư bản"},{id:"3.3",title:"3.3. Các hình thức biểu hiện của giá trị thặng dư trong nền kinh tế thị trường"}]},{id:4,title:"Cạnh Tranh & Độc Quyền Trong Nền Kinh Tế Thị Trường",titleEn:"Competition & Monopoly in Market Economy",code:"CHƯƠNG 4",badge:"QUY LUẬT TẬP TRUNG",desc:"Tập trung sản xuất dẫn đến độc quyền, lợi nhuận độc quyền, giá cả độc quyền, độc quyền nhà nước và các biểu hiện mới trong thời đại số.",accentColor:"#8b5cf6",icon:"shield",totalScenarios:3,modules:[{id:"4.1",title:"4.1. Quan hệ giữa cạnh tranh và độc quyền trong nền kinh tế thị trường"},{id:"4.2",title:"4.2. Độc quyền và độc quyền nhà nước trong chủ nghĩa tư bản"},{id:"4.3",title:"4.3. Các biểu hiện mới của độc quyền và độc quyền nhà nước thời đại số"}]},{id:5,title:"Kinh Tế Thị Trường Định Hướng XHCN & Các Quan Hệ Lợi Ích Kinh Tế Ở Việt Nam",titleEn:"Socialist-Oriented Market Economy & Economic Interests in Vietnam",code:"CHƯƠNG 5",badge:"MÔ HÌNH VIỆT NAM",desc:"Khái niệm, tính tất yếu khách quan và 5 đặc trưng của KTTT định hướng XHCN; sự cần thiết và nội dung hoàn thiện thể chế; các quan hệ lợi ích kinh tế ở Việt Nam.",accentColor:"#ec4899",icon:"award",totalScenarios:5,modules:[{id:"5.1.1",title:"5.1.1. Khái niệm kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam"},{id:"5.1.2",title:"5.1.2. Tính tất yếu khách quan của việc phát triển kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam"},{id:"5.1.3",title:"5.1.3. Đặc trưng của kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam"},{id:"5.2.1",title:"5.2.1. Sự cần thiết phải hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam"},{id:"5.2.2",title:"5.2.2. Hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam trên một số khía cạnh chủ yếu"},{id:"5.3",title:"5.3. Các quan hệ lợi ích kinh tế ở Việt Nam"}]},{id:6,title:"Công Nghiệp Hóa, Hiện Đại Hóa & Hội Nhập Kinh Tế Quốc Tế Của Việt Nam",titleEn:"Industrialization, Modernization & International Economic Integration of Vietnam",code:"CHƯƠNG 6",badge:"PHÁT TRIỂN & HỘI NHẬP",desc:"Khái quát cách mạng công nghiệp và CNH; tính tất yếu và nội dung CNH-HĐH ở VN; khái niệm, tác động hai mặt và phương hướng nâng cao hiệu quả hội nhập kinh tế quốc tế gắn với độc lập tự chủ.",accentColor:"#06b6d4",icon:"globe",totalScenarios:5,modules:[{id:"6.1.1",title:"6.1.1. Khái quát về cách mạng công nghiệp và công nghiệp hóa"},{id:"6.1.2",title:"6.1.2. Tính tất yếu khách quan và nội dung của công nghiệp hóa hiện đại hóa ở Việt Nam"},{id:"6.2.1",title:"6.2.1. Khái niệm và các hình thức hội nhập kinh tế quốc tế"},{id:"6.2.2",title:"6.2.2. Tác động của hội nhập kinh tế quốc tế đến quá trình phát triển của Việt Nam"},{id:"6.2.3",title:"6.2.3. Phương hướng nâng cao hiệu quả hội nhập kinh tế quốc tế trong phát triển của Việt Nam"}]}],Gn=[{id:"detective",title:"Economic Detective",titleVi:"Phòng Phá Án Kinh Tế Chính Trị",badge:"SPECIAL INTERACTIVE LAB",desc:"Hóa thân thành Chuyên gia Điều tra Kinh tế: Phá giải các nghịch lý thị trường, bóc trần bản chất giá trị thặng dư, quy luật tích lũy tư bản, thể chế KTTT định hướng XHCN và chiến lược CNH 4.0 hội nhập quốc tế!",accentColor:"#dc2626",icon:"search",totalCases:9}];function vn(i,n,h,a,t){const e=H.state,s=e.completedScenarios,g=e.detectiveSolved,p=Object.keys(s).length+Object.keys(g).length,m=z.length+E.length,v=H.getTotalProgressPercent();let o="";mn.forEach(k=>{const b=z.filter(d=>d.chapter===k.id),T=b.filter(d=>s[d.id]).length,M=T===b.length&&b.length>0;let G="";b.forEach(d=>{var w;const N=!!s[d.id],I=(w=s[d.id])==null?void 0:w.isDialectical,$=d.type==="slider";G+=`
        <div class="scenario-item-card ${N?"completed":""}" data-id="${d.id}" style="--card-accent: ${k.accentColor};">
          <div class="scenario-thumb-wrapper">
            <img class="scenario-item-img" src="${O(d.image)}" alt="${d.title}" loading="lazy" onerror="this.onerror=null; this.src='${d.image}'; this.style.opacity='0.4'" />
            <div class="scenario-status-badge">
              ${N?I?'<span class="badge-pill" style="background: var(--accent-emerald); color: #ffffff;">✓ Đạt</span>':'<span class="badge-pill" style="background: var(--accent-gold); color: #ffffff;">✓ Đã Làm</span>':$?'<span class="badge-pill" style="background: linear-gradient(135deg, #ec4899, #f43f5e); color: #ffffff;">⚡ Tương Tác</span>':'<span class="badge-pill" style="background: var(--bg-card); color: var(--text-dim); border: 1px solid var(--border-subtle);">Chưa làm</span>'}
            </div>
          </div>
          <div class="scenario-item-content">
            <div class="scenario-topic-tag" style="--tag-accent: ${k.accentColor};">
              <span class="topic-dot"></span>
              <span class="topic-text">${d.topic}</span>
            </div>
            <h4>${d.title}</h4>
            <p class="scenario-item-desc">
              ${d.situation}
            </p>
          </div>
          <div class="scenario-card-footer">
            <span class="scenario-concept-label" title="${d.philosophyConcept}">
              <span class="concept-icon">💡</span>
              <span class="concept-text">${d.philosophyConcept}</span>
            </span>
            <span class="scenario-cta-btn">Khám phá →</span>
          </div>
        </div>
      `}),o+=`
      <section class="glass-panel chapter-card chapter-card-${k.id} animate-slide-up" id="chapter-sec-${k.id}">
        <div class="chapter-top">
          <div class="chapter-heading">
            <div class="ch-code">${k.code}</div>
            <h3>${k.title}</h3>
            <p>${k.desc}</p>
          </div>
          <div style="text-align: right;">
            <span class="badge-pill ch-theme-badge">
              ${k.badge}
            </span>
            <div class="ch-completion-counter" style="color: ${M?"var(--accent-emerald)":"var(--text-muted)"};">
              ${T} / ${b.length} Hoàn thành
            </div>
          </div>
        </div>

        <!-- Scenarios Grid -->
        <div class="scenario-grid">
          ${G}
        </div>
      </section>
    `});const r=Gn[0];let u="";E.forEach(k=>{const b=!!g[k.id];u+=`
      <div class="scenario-item-card ${b?"completed":""}" data-case-id="${k.id}" style="--card-accent: var(--accent-crimson); border-left: 4px solid var(--accent-crimson);">
        <div class="scenario-thumb-wrapper">
          <img class="scenario-item-img" src="${O(k.image)}" alt="${k.title}" loading="lazy" onerror="this.onerror=null; this.src='${k.image}'; this.style.opacity='0.4'" />
          <div class="scenario-status-badge">
            ${b?'<span class="badge-pill" style="background: var(--accent-emerald); color: #ffffff;">✓ ĐÃ PHÁ ÁN</span>':'<span class="badge-pill" style="background: var(--accent-crimson); color: #ffffff;">🕵️ ĐANG MỞ</span>'}
          </div>
        </div>
        <div class="scenario-item-content">
          <div class="scenario-topic-tag" style="--tag-accent: var(--accent-crimson);">
            <span class="topic-dot"></span>
            <span class="topic-text">${k.code} • ${k.dossierLevel}</span>
          </div>
          <h4>${k.title}</h4>
          <p class="scenario-item-desc">
            ${k.backgroundStory}
          </p>
        </div>
        <div class="scenario-card-footer">
          <span class="scenario-concept-label" title="Phân loại manh mối điều tra">
            <span class="concept-icon">🔍</span>
            <span class="concept-text">Phân loại manh mối</span>
          </span>
          <span class="scenario-cta-btn">Vào phá án →</span>
        </div>
      </div>
    `}),i.innerHTML=`
    <div class="container animate-fade-in" style="padding-bottom: 5.5rem;">
      <div class="journey-header" style="padding: 2.2rem 0 1.6rem; text-align: center;">
        <div style="display: inline-flex; align-items: center; justify-content: center; gap: 1.3rem; margin-bottom: 0.75rem; flex-wrap: wrap;">
          <img src="${O("./assets/images/portraits/marx-lenin-banner.svg")}" alt="C. Mác & V.I. Lênin" style="height: 58px; max-width: 145px; object-fit: contain; border-radius: 12px; border: 1.5px solid rgba(217, 119, 6, 0.45); box-shadow: 0 4px 14px rgba(217, 119, 6, 0.18);" onerror="this.onerror=null; this.src='./assets/images/portraits/marx-lenin-banner.svg';" />
          <div style="text-align: left;">
            <h2 style="font-size: 2.05rem; font-weight: 900; margin: 0; color: var(--text-heading); font-family: var(--font-heading); letter-spacing: -0.02em;">Bản Đồ Hành Trình MLN122</h2>
            <p style="margin: 0.2rem 0 0; color: var(--text-muted); font-size: 0.98rem; font-weight: 500;">Lý luận Kinh tế chính trị Mác – Lênin qua các tình huống đời sống và thị trường</p>
          </div>
        </div>
        ${p>0?`
          <div style="margin-top: 1.1rem; display: flex; align-items: center; justify-content: center; gap: 0.85rem; flex-wrap: wrap;">
            <span class="badge-pill" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.12), rgba(5, 150, 105, 0.18)); color: #059669; border: 1.5px solid rgba(5, 150, 105, 0.35); font-weight: 850; font-family: var(--font-heading); font-size: 0.85rem; padding: 0.45rem 1.15rem; border-radius: 9999px; box-shadow: 0 2px 8px rgba(5, 150, 105, 0.12);">
              🎯 TIẾN TRÌNH: ${p}/${m} (${v}%)
            </span>
          </div>
        `:""}
      </div>

      <div class="chapter-track">
        ${o}

        <!-- Special Module: Quizizz Arena MLN122 -->
        <section class="glass-panel chapter-card animate-slide-up" style="border: 2px solid rgba(139, 92, 246, 0.4); background: linear-gradient(180deg, var(--bg-card) 0%, rgba(245, 243, 255, 0.6) 100%);">
          <div class="chapter-top">
            <div class="chapter-heading">
              <div class="ch-code" style="color: #8b5cf6;">🎮 ĐẤU TRƯỜNG TRẮC NGHIỆM QUIZIZZ</div>
              <h3>Đấu Trường Tri Thức MLN122 (Quiz Arena)</h3>
              <p>Tranh tài 50 câu hỏi trắc nghiệm chuyên đề bao quát toàn diện từ Chương 1 đến Chương 6: Hỏi nhanh đáp chuẩn, tranh đoạt Streak Combo, làm chủ trọn vẹn kiến thức 6 chương!</p>
            </div>
            <div style="text-align: right;">
              <button class="btn-primary" id="map-enter-quiz-btn" style="background: linear-gradient(135deg, #8b5cf6, #ec4899); padding: 0.75rem 1.6rem;">
                <span>🚀 VÀO ĐẤU TRƯỜNG NGAY →</span>
              </button>
            </div>
          </div>
        </section>

        <!-- Special Module: Detective Bureau -->
        <section class="glass-panel chapter-card animate-slide-up" style="border: 2px solid rgba(220, 38, 38, 0.35); background: linear-gradient(180deg, var(--bg-card) 0%, rgba(254, 242, 242, 0.6) 100%);">
          <div class="chapter-top">
            <div class="chapter-heading">
              <div class="ch-code" style="color: var(--accent-crimson);">${r.badge}</div>
              <h3>${r.titleVi} (${r.title})</h3>
              <p>${r.desc}</p>
            </div>
            <div style="text-align: right;">
              <span class="badge-pill" style="background: var(--accent-crimson-light); color: var(--accent-crimson); border: 1px solid rgba(220, 38, 38, 0.4);">
                HỒ SƠ ĐIỀU TRA
              </span>
              <div style="margin-top: 0.5rem; font-size: 0.88rem; font-weight: 800; font-family: var(--font-heading); color: var(--accent-crimson);">
                ${Object.keys(g).length} / ${E.length} Vụ án đã phá
              </div>
            </div>
          </div>

          <div class="scenario-grid">
            ${u}
          </div>
        </section>
      </div>
    </div>
  `,i.querySelectorAll(".scenario-item-card[data-id]").forEach(k=>{k.addEventListener("click",()=>{l.playClick();const b=k.getAttribute("data-id");n(b)})}),i.querySelectorAll(".scenario-item-card[data-case-id]").forEach(k=>{k.addEventListener("click",()=>{l.playClick();const b=k.getAttribute("data-case-id");h(b)})});const q=document.getElementById("map-enter-quiz-btn");q&&t&&q.addEventListener("click",()=>{l.playClick(),t()})}function In(i,n,h,a){const t=z.find(m=>m.id===n);if(!t){i.innerHTML='<div class="container" style="padding: 4rem 0;"><p>Không tìm thấy tình huống.</p></div>';return}const s=H.state.completedScenarios[t.id];let g=s?t.options.find(m=>m.id===s.optionId):null;function p(){let m="";t.options.forEach(o=>{let r="";g&&g.id===o.id&&(r=o.isDialectical?"selected-dialectical":"selected-warning"),m+=`
        <button class="option-btn ${r}" data-opt-id="${o.id}" ${g?"disabled":""}>
          <div class="opt-letter">${o.id}</div>
          <div style="flex-grow: 1;">${o.text}</div>
          <span class="opt-badge-tag">${g&&g.id===o.id?o.isDialectical?"✓ Đạt Biện Chứng":"⚠️ Lệch Lạc":"Phương Án"}</span>
        </button>
      `});let v="";if(g){const o=g.isDialectical?"./assets/images/outcomes/outcome-dialectical-success.svg":"./assets/images/outcomes/outcome-subjective-failure.svg",r=O(o);v=`
        <div class="feedback-stepper animate-slide-up">
          <!-- STAGE 1: YOUR CHOICE -->
          <div class="feedback-step-card step-choice">
            <div class="step-label">
              <span>🎯</span>
              <span>1. LỰA CHỌN CỦA BẠN (YOUR CHOICE)</span>
            </div>
            <p style="font-size: 1.05rem; color: var(--text-heading); font-weight: 700; line-height: 1.6;">
              Lựa chọn [${g.id}]: ${g.text}
            </p>
          </div>

          <!-- STAGE 2: CONSEQUENCE WITH DEDICATED OUTCOME IMAGE -->
          <div class="feedback-step-card step-consequence">
            <div class="step-label">
              <span>⚡</span>
              <span>2. HỆ QUẢ ĐỜI THỰC (CONSEQUENCE)</span>
            </div>
            <img class="outcome-image-banner" src="${r}" alt="Hình ảnh kết quả tương ứng" onerror="this.onerror=null; this.src='${o}';" />
            <div class="consequence-narrative-box">
              <span class="narrative-tag">DIỄN BIẾN &amp; HỆ QUẢ THỰC TẾ:</span>
              <p style="font-size: 1.05rem; color: var(--text-main); line-height: 1.75; margin-top: 0.4rem; font-weight: 500;">
                ${g.consequence}
              </p>
            </div>
          </div>

          <!-- STAGE 3: ECONOMIC ANALYSIS -->
          <div class="feedback-step-card step-analysis">
            <div class="step-label">
              <span>🔍</span>
              <span>3. LĂNG KÍNH KINH TẾ CHÍNH TRỊ MÁC – LÊNIN (ECONOMIC ANALYSIS)</span>
            </div>
            <p style="font-size: 1.02rem; color: var(--text-main); line-height: 1.75; margin-bottom: 0.9rem; font-weight: 500;">
              ${g.philosophicalLens}
            </p>
            <div style="border-top: 1px dashed rgba(124, 58, 237, 0.25); padding-top: 0.85rem; font-size: 0.95rem; color: var(--text-muted); line-height: 1.65;">
              <strong style="color: var(--accent-purple);">Cơ sở lý luận MLN122:</strong> ${t.explanation}
            </div>
          </div>

          <!-- STAGE 4: WHAT YOU JUST LEARNED -->
          <div class="feedback-step-card step-learned">
            <div class="step-label">
              <span>💡</span>
              <span>4. BÀI HỌC PHƯƠNG PHÁP LUẬN CỐT LÕI (WHAT YOU JUST LEARNED)</span>
            </div>
            <p style="font-size: 1.08rem; color: var(--accent-emerald-dark); font-weight: 700; line-height: 1.75;">
              "${t.coreLesson}"
            </p>
          </div>

          <!-- ACTION BUTTONS -->
          <div class="stepper-actions">
            <button class="btn-secondary" id="retry-scenario-btn">
              <span>↺ Thử chọn phương án khác</span>
            </button>
            <button class="btn-primary" id="continue-scenario-btn">
              <span>TIẾP TỤC HÀNH TRÌNH →</span>
            </button>
          </div>
        </div>
      `}if(i.innerHTML=`
      <div class="container scenario-player-wrap animate-fade-in">
        <!-- Top Nav -->
        <div class="scenario-header-nav">
          <button class="back-to-map-btn" id="scenario-back-btn">
            <span>← Quay lại bản đồ hành trình</span>
          </button>
          <div class="scenario-header-pills">
            <span class="concept-pill">${t.philosophyConcept}</span>
            <span class="badge-pill difficulty-pill">
              ${t.difficulty.toUpperCase()}
            </span>
          </div>
        </div>

        <!-- Main Scenario Card -->
        <div class="scenario-card-main">
          <!-- Mandatory Large Visual -->
          <div class="scenario-visual-box">
            <img class="scenario-large-image" src="${O(t.image)}" alt="${t.title}" onerror="this.onerror=null; this.src='${t.image}';" />
          </div>

          <!-- Meta Bar -->
          <div class="scenario-meta-bar">
            <div class="meta-left-group">
              <span class="meta-ch-tag">CHƯƠNG ${t.chapter}</span>
              <span class="meta-topic-text">${t.topic}</span>
            </div>
            <div class="meta-right-group">
              <span class="meta-code-tag">Mã tình huống: <strong>${t.id}</strong></span>
            </div>
          </div>

          <!-- Body -->
          <div class="scenario-body">
            <h2 class="scenario-title">${t.title}</h2>

            <!-- Real-life situation context -->
            <div class="situation-story-box">
              <strong style="color: var(--accent-gold); display: block; margin-bottom: 0.5rem; font-family: var(--font-heading); font-size: 0.92rem; text-transform: uppercase; letter-spacing: 0.04em;">
                📌 Tình huống đời sống:
              </strong>
              ${t.situation}
            </div>

            <!-- The Dilemma Question -->
            <div class="question-box">
              <div class="question-title">
                <span>❓</span>
                <span>${t.question}</span>
              </div>

              <!-- Options Grid -->
              <div class="options-grid">
                ${m}
              </div>
            </div>

            <!-- Dynamic 4-Stage Feedback -->
            ${v}
          </div>
        </div>
      </div>
    `,document.getElementById("scenario-back-btn").addEventListener("click",()=>{l.playClick(),h()}),!g)i.querySelectorAll(".option-btn").forEach(o=>{o.addEventListener("click",()=>{const r=o.getAttribute("data-opt-id");g=H.recordScenarioAnswer(t.id,r).option,p(),setTimeout(()=>{const q=i.querySelector(".feedback-stepper");q&&q.scrollIntoView({behavior:"smooth",block:"nearest"})},100)})});else{const o=document.getElementById("retry-scenario-btn");o&&o.addEventListener("click",()=>{l.playClick(),g=null,p()});const r=document.getElementById("continue-scenario-btn");r&&r.addEventListener("click",()=>{l.playClick(),a(t.id)})}}p()}function Bn(i,n){let h=8,a=!1;const t=4;function e(g){const p=Math.max(0,g-t),m=Math.round(p/t*100);let v={};return g<=4?v={title:"Ngày làm việc 4h: Hòa vốn (m' = 0%)",desc:"Người lao động chỉ vừa đủ thời gian tạo ra lượng giá trị ngang bằng giá trị sức lao động (tiền lương). Nhà tư bản chưa thu được bất kỳ đồng giá trị thặng dư (m) nào!",badge:"CHƯA CÓ GIÁ TRỊ THẶNG DƯ",color:"#64748b",icon:"⚖️",img:"./assets/images/slider/stage-beginner.svg"}:g<=8?v={title:`Ngày làm việc ${g}h: Tiêu chuẩn công nghiệp (m' = ${m}%)`,desc:`Trong đó có 4h lao động tất yếu và ${p}h lao động thặng dư. Nhà tư bản thu được tỷ suất giá trị thặng dư m' = ${m}%. Đây là mức phân bổ phổ biến trong nền kinh tế thị trường có luật lao động điều tiết.`,badge:"GTTD TIÊU CHUẨN",color:"#2563eb",icon:"🏭",img:"./assets/images/slider/stage-measure.svg"}:g<11?v={title:`Ngày làm việc ${g}h: Tăng ca cường độ cao (m' = ${m}%)`,desc:`Thời gian thặng dư lên tới ${p}h, gấp hơn 1.5 lần thời gian tất yếu! Tỷ suất bóc lột m' = ${m}%. Lợi nhuận nhà tư bản phình to nhưng sức khỏe và tinh thần người lao động bắt đầu suy giảm nghiêm trọng.`,badge:"GTTD TUYỆT ĐỐI CAO ĐỘ",color:"#d97706",icon:"⚠️",img:"./assets/images/slider/stage-node.svg"}:v={title:`BÁO ĐỘNG ĐỎ: BÓC LỘT CỰC ĐỘ ${g}h (m' = ${m}%)!`,desc:`BÙNG NỔ! Ngày lao động kéo dài tới ${g}h (thặng dư ${p}h, m' = ${m}%). Vượt quá giới hạn chịu đựng sinh học tự nhiên của con người! C. Mác chỉ rõ: Tư bản vì lòng tham giá trị thặng dư tuyệt đối sẵn sàng vắt kiệt sức lao động, tất yếu dẫn tới phong trào đấu tranh bãi công của giai cấp công nhân!`,badge:"BÙNG NỔ MÂU THUẪN GIAI CẤP!",color:"#dc2626",icon:"⚡💥",img:"./assets/images/slider/stage-leap.svg"},{surplusTime:p,mPrime:m,stageInfo:v}}function s(){const{surplusTime:g,mPrime:p,stageInfo:m}=e(h),v=h>=11,o=14,r=t/o*100,u=g/o*100;i.innerHTML=`
      <div class="container animate-fade-in" style="padding: 2.5rem 0 5.5rem;">
        <!-- Nav Header -->
        <div class="scenario-header-nav">
          <button class="back-to-map-btn" id="slider-back-btn">
            <span>← Quay lại bản đồ hành trình</span>
          </button>
          <span class="badge-pill" style="background: var(--accent-gold-light); color: var(--accent-amber); border: 1.5px solid rgba(217, 119, 6, 0.35);">
            PHÒNG THÍ NGHIỆM TƯƠNG TÁC: NGÀY LAO ĐỘNG &amp; GIÁ TRỊ THẶNG DƯ (m)
          </span>
        </div>

        <div class="slider-lab-card">
          <!-- Visual Dynamic Stage Area with SVG Stage Illustration -->
          <div class="lab-visual-area">
            ${v?`
              <div class="leap-blast-overlay">
                <div class="leap-burst-badge">💥 BÁO ĐỘNG BÓC LỘT CỰC ĐỘ!</div>
              </div>
            `:""}

            <div class="lab-state-avatar" style="width: 100%; max-width: 580px;">
              <img src="${O(m.img)}" alt="${m.title}" style="width: 100%; max-height: 160px; object-fit: contain; margin-bottom: 1.2rem; filter: drop-shadow(0 6px 16px rgba(0,0,0,0.1));" onerror="this.onerror=null; this.src='${m.img}';" />
              <div class="lab-state-title" style="color: ${m.color};">
                ${m.title}
              </div>
              <p class="lab-state-desc" style="margin: 0 auto;">${m.desc}</p>
            </div>
          </div>

          <!-- Segmented Visual Bar representing Working Day Breakdown -->
          <div style="margin: 2rem 0; background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem; font-family: var(--font-heading); font-weight: 800; font-size: 0.95rem;">
              <span>SƠ ĐỒ PHÂN CHIA NGÀY LAO ĐỘNG (${h} GIỜ):</span>
              <span style="color: var(--accent-blue); font-size: 1.15rem;">
                Tỷ suất GTTD m' = <strong>${p}%</strong>
              </span>
            </div>

            <!-- Two-tone bar -->
            <div style="height: 28px; width: 100%; background: #e2e8f0; border-radius: var(--radius-full); overflow: hidden; display: flex; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">
              <div style="width: ${r}%; height: 100%; background: linear-gradient(90deg, #059669, #10b981); display: flex; align-items: center; justify-content: center; color: #ffffff; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;" title="Thời gian lao động tất yếu">
                Tất yếu: ${t}h (v)
              </div>
              <div style="width: ${u}%; height: 100%; background: linear-gradient(90deg, #f59e0b, #ef4444); display: flex; align-items: center; justify-content: center; color: #ffffff; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; transition: width 0.3s ease;" title="Thời gian lao động thặng dư">
                ${g>0?`Thặng dư: ${g}h (m)`:""}
              </div>
            </div>

            <div style="display: flex; justify-content: space-between; margin-top: 0.6rem; font-size: 0.8rem; font-weight: 700; color: var(--text-dim); font-family: var(--font-heading);">
              <span style="color: var(--accent-emerald);">🟢 Lao động tất yếu (tạo giá trị ngang lương)</span>
              <span style="color: var(--accent-crimson);">🔴 Lao động thặng dư (tạo ra m cho chủ tư bản)</span>
            </div>
          </div>

          <!-- Slider Controls -->
          <div class="slider-control-box">
            <div class="slider-labels-row">
              <span style="color: var(--text-muted);">Kéo thanh trượt điều chỉnh độ dài Ngày Lao Động:</span>
              <span style="color: var(--accent-gold); font-size: 1.35rem; font-weight: 800; font-family: var(--font-heading);">
                <span id="slider-val-display">${h}</span> Giờ / Ngày
              </span>
            </div>

            <!-- Range input -->
            <input 
              type="range" 
              class="slider-input-track" 
              id="hours-slider-input" 
              min="4" 
              max="14" 
              step="1" 
              value="${h}" 
            />

            <!-- Markers -->
            <div class="node-markers">
              <div class="node-point-flag" style="left: ${4/10*100}%;">
                <span>CHUẨN (8h)</span>
              </div>
              <div class="node-point-flag" style="left: ${7/10*100}%; border-color: #ef4444; color: #ef4444; background: #fee2e2;">
                <span>CỰC ĐỘ (11h)</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.78rem; font-weight: 700; color: var(--text-dim); margin-top: 1.2rem; font-family: var(--font-heading);">
                <span>4h (m' = 0%)</span>
                <span>8h (m' = 100%)</span>
                <span>11h (m' = 175%)</span>
                <span>14h (m' = 250%)</span>
              </div>
            </div>
          </div>

          <!-- Philosophy Breakdown Box -->
          <div style="background: var(--bg-alt); border-radius: var(--radius-lg); padding: 2rem; border-left: 4px solid var(--accent-blue); border-top: 1px solid var(--border-subtle); border-right: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle); margin-top: 2rem; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.03);">
            <h4 style="font-size: 1.2rem; color: var(--accent-blue); margin-bottom: 0.8rem; font-family: var(--font-heading);">
              📚 Luận điểm Kinh tế chính trị Mác – Lênin (MLN122):
            </h4>
            <ul style="padding-left: 1.6rem; line-height: 1.85; color: var(--text-main); font-size: 1rem;">
              <li><strong>Thời gian lao động tất yếu (t):</strong> Là phần thời gian mà người lao động tạo ra một lượng giá trị ngang bằng với giá trị sức lao động của chính mình (được trả bằng tiền lương v).</li>
              <li><strong>Thời gian lao động thặng dư (t'):</strong> Là phần thời gian lao động vượt quá thời gian tất yếu, tạo ra giá trị thặng dư (m) bị nhà tư bản chiếm đoạt không bồi hoàn.</li>
              <li><strong>Tỷ suất giá trị thặng dư (m'):</strong> Công thức: <code>m' = (m / v) * 100% = (t' / t) * 100%</code>, phản ánh chính xác trình độ bóc lột của tư bản đối với lao động làm thuê.</li>
              <li><strong>Sản xuất GTTD tuyệt đối:</strong> Phương pháp thu GTTD bằng cách kéo dài ngày làm việc vượt quá thời gian tất yếu trong điều kiện năng suất lao động không đổi.</li>
              <li><strong>Sản xuất GTTD tương đối:</strong> Phương pháp thu GTTD bằng cách rút ngắn thời gian lao động tất yếu nhờ tăng năng suất lao động xã hội, nhờ đó thời gian thặng dư tăng lên dù độ dài ngày làm việc không đổi.</li>
            </ul>
          </div>

          <!-- Methodological Takeaway -->
          <div style="margin-top: 1.8rem; text-align: center; padding: 1.5rem; background: var(--accent-emerald-light); border: 1.5px solid rgba(5, 150, 105, 0.35); border-radius: var(--radius-lg); box-shadow: 0 4px 14px rgba(5, 150, 105, 0.08);">
            <p style="font-size: 1.05rem; color: var(--accent-emerald-dark); font-weight: 700; line-height: 1.7;">
              💡 <strong>Bài học quản trị &amp; đời sống:</strong> Chiến lược bóc lột bằng cách kéo dài thời gian làm việc (GTTD tuyệt đối) tất yếu chạm trần giới hạn thể lực và gây bất mãn; con đường phát triển văn minh, nhân văn và bền vững là đầu tư công nghệ, tự động hóa để tăng năng suất lao động (GTTD tương đối) và chia sẻ thành quả công bằng với người lao động!
            </p>
          </div>
        </div>
      </div>
    `,document.getElementById("slider-back-btn").addEventListener("click",()=>{l.playClick(),n()}),document.getElementById("hours-slider-input").addEventListener("input",k=>{h=parseInt(k.target.value,10),document.getElementById("slider-val-display").textContent=h,h>=11&&!a?(a=!0,l.playLeapBoom(),H.recordSliderLeap()):h<11&&(a=!1),s();const b=document.getElementById("hours-slider-input");b&&b.focus()})}s()}let nn="all";function Kn(i,n,h,a){const t=E.find(u=>u.id===n)||E[0],e=E.findIndex(u=>u.id===t.id),s={};let g=null,p=null,m=!!H.state.detectiveSolved[t.id];m&&(t.clues.forEach(u=>{s[u.id]=u.correctCategory}),p={isAllCorrect:!0,errors:[]});function v(u,q){!u||!q||(s[u]=q,g=null,l.playClueSnap(),p=null,r())}function o(){t.clues.forEach(u=>{delete s[u.id]}),g=null,p=null,l.playClick(),r()}function r(){var U;const u=t.clues.filter(c=>!s[c.id]);let q="";u.forEach(c=>{const x=g===c.id;let C="";x&&t.categories.forEach(L=>{const y=L.name.split(":")[0].trim();C+=`
            <button class="quick-assign-btn" data-assign-clue="${c.id}" data-target-cat="${L.id}" style="--btn-color: ${L.color};" title="Ghim ngay vào ${L.name}">
              <span>📌 ${y}</span>
            </button>
          `}),q+=`
        <div class="clue-chip ${x?"active-selection":""}" data-clue-id="${c.id}" draggable="true">
          <div class="clue-chip-main">
            <span class="clue-pin-icon">📌</span>
            <span class="clue-text">${c.text}</span>
            <span class="clue-click-hint">${x?"Đang chọn":"Bấm để ghim"}</span>
          </div>
          ${x?`
            <div class="quick-assign-bar animate-fade-in">
              <span class="quick-assign-label">⚡ Ghim nhanh vào:</span>
              <div class="quick-assign-btns">
                ${C}
              </div>
            </div>
          `:""}
        </div>
      `}),u.length===0&&!m&&!(p!=null&&p.isAllCorrect)&&(q=`
        <div class="clues-all-placed-note">
          <span>✨</span>
          <span>Bạn đã xếp toàn bộ 5 luận điểm vào các đề mục. Hãy bấm nút <strong>Kiểm tra phân loại</strong> bên dưới!</span>
        </div>
      `);let k="";t.categories.forEach(c=>{const x=t.clues.filter(L=>s[L.id]===c.id);let C="";x.forEach(L=>{let y="";p&&!p.isAllCorrect&&L.correctCategory!==c.id&&(y="clue-error-highlight"),C+=`
          <div class="clue-chip in-bucket ${y}" data-clue-id="${L.id}">
            <span class="clue-pin-icon">📌</span>
            <span class="clue-text">${L.text}</span>
            <button class="remove-clue-btn" data-remove-id="${L.id}" title="Gỡ luận điểm ra khay">✕</button>
          </div>
        `}),k+=`
        <div class="category-bucket ${g?"ready-to-assign":""}" data-bucket-id="${c.id}" style="--cat-accent: ${c.color};">
          <div class="bucket-header">
            <div class="bucket-color-tag" style="background: ${c.color};"></div>
            <div style="flex: 1;">
              <div class="bucket-name" style="color: ${c.color};">${c.name}</div>
              <div class="bucket-desc">${c.desc}</div>
            </div>
          </div>
          
          <div class="bucket-clues-list">
            ${C.length>0?C:`
              <div class="bucket-empty-hint ${g?"highlight-hint":""}">
                ${g?'<span class="glow-assign-txt">👉 Bấm vào ô này để ghim luận điểm đang chọn!</span>':"Bấm chọn 1 luận điểm ở khay rồi bấm vào đây để ghim"}
              </div>
            `}
          </div>

          ${g?`
            <button class="bucket-direct-pin-btn" data-direct-bucket="${c.id}" style="border-color: ${c.color}; color: ${c.color};">
              <span>➕ Ghim luận điểm đang chọn vào đây</span>
            </button>
          `:""}
        </div>
      `});const b=Object.keys(H.state.detectiveSolved||{}).length,T=nn==="all"?E:E.filter(c=>String(c.chapterNum)===String(nn));let M="";T.forEach(c=>{const x=c.id===t.id,C=!!H.state.detectiveSolved[c.id],L=c.chapterBadge?c.chapterBadge.split("•")[0].trim():`Chương ${c.chapterNum||1}`;M+=`
        <button class="dossier-tab-card ${x?"active":""} ${C?"is-solved":""}" data-switch-case="${c.id}" style="--card-accent: ${c.accentColor||"#dc2626"};" title="${c.title}">
          <div class="tab-card-top">
            <span class="tab-card-chapter" style="--ch-color: ${c.accentColor};">
              <span class="ch-dot" style="background: ${c.accentColor};"></span>
              ${L}
            </span>
            <span class="tab-card-code">${c.code}</span>
          </div>

          <div class="tab-card-topic">
            <span class="tab-card-icon">${c.icon||"📁"}</span>
            <span class="tab-card-topic-title">${c.shortTopic||c.title}</span>
          </div>

          <div class="tab-card-sub" title="${c.subtitle}">
            ${c.subtitle.split(":")[0]}
          </div>

          <div class="tab-card-status">
            ${C?'<span class="status-pill-solved">✓ ĐÃ PHÁ GIẢI</span>':x?'<span class="status-pill-active"><span class="pulse-dot"></span> ĐANG THỤ LÝ</span>':'<span class="status-pill-open">Khám phá →</span>'}
          </div>
          ${x?'<div class="tab-card-active-arrow"></div>':""}
        </button>
      `});const G=[{id:"all",label:"Tất cả (9)",icon:"🏛️"},{id:"1",label:"Chương 1 (1)",icon:"📜"},{id:"2",label:"Chương 2 (1)",icon:"⚖️"},{id:"3",label:"Chương 3 (2)",icon:"🔍"},{id:"4",label:"Chương 4 (1)",icon:"🏢"},{id:"5",label:"Chương 5 (2)",icon:"🇻🇳"},{id:"6",label:"Chương 6 (2)",icon:"⚡"}];let d="";G.forEach(c=>{const x=nn===c.id;d+=`
        <button class="ch-filter-pill ${x?"active":""}" data-filter-ch="${c.id}">
          <span>${c.icon}</span>
          <span>${c.label}</span>
        </button>
      `});let N="";if(p!=null&&p.isAllCorrect||m){const c=t.philosophicalVerdict;N=`
        <div class="verdict-box animate-slide-up">
          <img src="${O("./assets/images/cases/seal-verdict-solved.svg")}" alt="Huy hiệu phá án" class="verdict-seal-img" onerror="this.onerror=null; this.src='./assets/images/cases/seal-verdict-solved.svg';" />
          <div class="verdict-badge">🏆 ĐẠI ÁN ĐÃ ĐƯỢC PHÁ GIẢI HOÀN TOÀN!</div>
          <h3 class="verdict-headline">
            ${c.headline}
          </h3>
          <div class="verdict-concept-pill">
            <span>💡 Khái niệm Kinh tế chính trị cốt lõi:</span>
            <strong>${c.concept}</strong>
          </div>
          <div class="verdict-analysis-text">
            ${c.analysis}
          </div>
          <div class="verdict-footer-actions">
            <div class="verdict-xp-awarded">
              <span>🌟</span>
              <span>+${c.xpAwarded} XP đã ghi nhận vào Hồ Sơ Tư Duy!</span>
            </div>
            <button class="btn-primary" id="detective-continue-btn">
              <span>TIẾP TỤC KHÁM PHÁ →</span>
            </button>
          </div>
        </div>
      `}i.innerHTML=`
      <div class="container detective-wrap animate-fade-in">
        <!-- Top Command Bar -->
        <div class="detective-header-section">
          <div class="detective-top-action-bar">
            <button class="back-to-map-btn" id="detective-back-btn">
              <span>← Bản đồ hành trình</span>
            </button>

            <!-- Chapter Filter Segmented Control -->
            <div class="detective-filter-bar">
              ${d}
            </div>

            <!-- Overall Progress Pill -->
            <div class="detective-overall-progress">
              <span class="progress-trophy">🏆</span>
              <span class="progress-text">Tiến độ: <strong>${b}/${E.length}</strong> (${Math.round(b/E.length*100)}%)</span>
              <div class="progress-mini-track">
                <div class="progress-mini-fill" style="width: ${b/E.length*100}%;"></div>
              </div>
            </div>
          </div>

          <!-- Dossier Cards Grid (Balanced 3x3 layout) -->
          <div class="dossier-nav-grid">
            ${M}
          </div>
        </div>

        <!-- Case Dossier Header Card (Classified Executive Theme) -->
        <div class="dossier-card" style="--case-accent: ${t.accentColor||"#dc2626"};">
          <div class="dossier-header-bar">
            <div class="dossier-header-left">
              <span class="stamp-confidential">
                <span class="stamp-dot"></span>
                TOP SECRET // HỒ SƠ ĐIỀU TRA MẬT
              </span>
              <span class="dossier-sub-badge">${t.code} • ${t.chapterBadge||"MLN122"}</span>
            </div>
            <div class="dossier-header-right">
              <span class="dossier-bureau-label">BỘ MÔN MLN122 • ECONOMIC DETECTIVE BUREAU</span>
              <button class="btn-reset-dossier" id="reset-dossier-btn" title="Đặt lại khay luận điểm của hồ sơ này">
                <span>↺ Xếp lại</span>
              </button>
            </div>
          </div>

          <div class="detective-intro-body">
            <!-- Case Evidence Frame (High-res SVG Image) -->
            <div class="detective-image-box">
              <div class="evidence-tag">
                <span class="evidence-icon">🔍</span>
                <span>SƠ ĐỒ CHỨNG CỨ #${String(t.caseNumber||e+1).padStart(2,"0")}</span>
                <span class="evidence-badge-sub">CHỨNG CỨ GỐC</span>
              </div>
              <img src="${O(t.image)}" alt="${t.title}" class="detective-hero-img" onerror="this.onerror=null; this.src='${t.image}';" />
            </div>

            <!-- Case Story context -->
            <div class="detective-info-box">
              <div class="detective-meta-pills">
                <span class="dossier-level-pill" style="color: ${t.accentColor}; background: rgba(2, 132, 199, 0.08); border: 1.5px solid ${t.accentColor};">
                  ${t.dossierLevel}
                </span>
                <span class="dossier-chapter-pill">
                  ${t.chapterBadge}
                </span>
                <span class="dossier-clues-count-pill">
                  📁 5 Manh Mối
                </span>
                <span class="dossier-xp-pill">
                  🌟 +${((U=t.philosophicalVerdict)==null?void 0:U.xpAwarded)||150} XP
                </span>
              </div>

              <h2 class="detective-case-title">${t.title}</h2>
              <p class="detective-case-subtitle">${t.subtitle}</p>
              
              <div class="detective-story-box">
                <div class="story-label">
                  <span class="story-icon">📌</span>
                  <span>BỐI CẢNH ĐIỀU TRA:</span>
                </div>
                <div class="story-content">
                  ${t.backgroundStory}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Investigation Interactive Board -->
        <div class="investigation-board">
          <div class="board-title">
            <div>
              <div class="board-badge">ĐỐI CHIẾU NỘI DUNG GIÁO TRÌNH CHUẨN &amp; GIÁO TRÌNH</div>
              <h3 class="board-main-heading">Bàn Phân Loại Luận Điểm Kinh Tế Chính Trị (${t.chapterBadge})</h3>
              <p class="board-guide-text">
                👉 Hướng dẫn: Đọc kỹ từng luận điểm ở khay; <strong>bấm vào luận điểm</strong> rồi <strong>bấm vào đề mục bên dưới</strong> (hoặc bấm nút ghim nhanh) để phân loại.
              </p>
            </div>
            ${!m&&!(p!=null&&p.isAllCorrect)?`
              <button class="btn-primary btn-validate-clues" id="validate-clues-btn">
                <span>🔍 KIỂM TRA PHÂN LOẠI ĐỀ MỤC</span>
              </button>
            `:""}
          </div>

          <!-- Unassigned Clues Tray -->
          <div class="unassigned-clues-section">
            <div class="clues-tray-label">
              <span>📁</span>
              <span>Khay Luận Điểm Cần Phân Loại (${u.length} luận điểm còn lại):</span>
            </div>
            <div class="clues-grid">
              ${q}
            </div>
          </div>

          <!-- Target Buckets Grid -->
          <div class="categories-bucket-grid">
            ${k}
          </div>

          <!-- Error Alert if validation failed -->
          ${p&&!p.isAllCorrect?`
            <div class="detective-validation-error animate-shake">
              <div class="error-icon">⚠️</div>
              <div class="error-text">
                <strong>Vẫn còn luận điểm bị xếp sai đề mục hoặc chưa xếp hết!</strong>
                <p>Hãy đọc kỹ định nghĩa và đặc trưng của từng đề mục khoa học, quan sát các gợi ý và thử lại nhé.</p>
              </div>
            </div>
          `:""}

          <!-- Verdict Section -->
          ${N}
        </div>
      </div>
    `;const I=document.getElementById("detective-back-btn");I&&I.addEventListener("click",()=>{l.playClick(),h()});const $=document.getElementById("reset-dossier-btn");$&&$.addEventListener("click",()=>{o()}),i.querySelectorAll("[data-filter-ch]").forEach(c=>{c.addEventListener("click",()=>{l.playClick(),nn=c.getAttribute("data-filter-ch"),r()})}),i.querySelectorAll("[data-switch-case]").forEach(c=>{c.addEventListener("click",()=>{l.playClick();const x=c.getAttribute("data-switch-case");a(x)})}),i.querySelectorAll(".unassigned-clues-section .clue-chip").forEach(c=>{c.addEventListener("click",x=>{if(x.target.closest(".quick-assign-btn"))return;l.playClick();const C=c.getAttribute("data-clue-id");g=g===C?null:C,r()})}),i.querySelectorAll(".quick-assign-btn").forEach(c=>{c.addEventListener("click",x=>{x.stopPropagation();const C=c.getAttribute("data-assign-clue"),L=c.getAttribute("data-target-cat");v(C,L)})}),i.querySelectorAll(".category-bucket").forEach(c=>{c.addEventListener("click",x=>{if(x.target.closest(".remove-clue-btn")||x.target.closest(".bucket-direct-pin-btn"))return;const C=c.getAttribute("data-bucket-id");if(g)v(g,C);else{const L=t.clues.filter(y=>!s[y.id]);L.length>0&&v(L[0].id,C)}})}),i.querySelectorAll(".bucket-direct-pin-btn").forEach(c=>{c.addEventListener("click",x=>{x.stopPropagation();const C=c.getAttribute("data-direct-bucket");g&&v(g,C)})}),i.querySelectorAll('.clue-chip[draggable="true"]').forEach(c=>{c.addEventListener("dragstart",x=>{const C=c.getAttribute("data-clue-id");x.dataTransfer.setData("text/plain",C),c.classList.add("dragging")}),c.addEventListener("dragend",()=>{c.classList.remove("dragging")})}),i.querySelectorAll(".category-bucket").forEach(c=>{c.addEventListener("dragover",x=>{x.preventDefault(),c.classList.add("drag-over")}),c.addEventListener("dragleave",()=>{c.classList.remove("drag-over")}),c.addEventListener("drop",x=>{x.preventDefault(),c.classList.remove("drag-over");const C=x.dataTransfer.getData("text/plain"),L=c.getAttribute("data-bucket-id");C&&L&&v(C,L)})}),i.querySelectorAll(".remove-clue-btn").forEach(c=>{c.addEventListener("click",x=>{x.stopPropagation(),l.playClick();const C=c.getAttribute("data-remove-id");delete s[C],p=null,r()})});const w=document.getElementById("validate-clues-btn");w&&w.addEventListener("click",()=>{if(!t.clues.every(C=>s[C.id])){alert("Vui lòng xếp toàn bộ 5 luận điểm vào các đề mục trước khi kiểm tra!");return}let x=[];t.clues.forEach(C=>{s[C.id]!==C.correctCategory&&x.push(C.id)}),x.length===0?(p={isAllCorrect:!0,errors:[]},m=!0,H.recordDetectiveSolved(t.id),r(),setTimeout(()=>{const C=i.querySelector(".verdict-box");C&&C.scrollIntoView({behavior:"smooth",block:"center"})},100)):(l.playWarning(),p={isAllCorrect:!1,errors:x},r())});const P=document.getElementById("detective-continue-btn");P&&P.addEventListener("click",()=>{l.playClick(),h()})}r()}const F=[{id:"q-c3-01",chapter:3,chapterTitle:"Chương 3: Giá trị thặng dư",category:"3.1. Nguồn gốc GTTD",question:"Theo C. Mác, điều kiện tiên quyết để tiền tệ chuyển hóa thành tư bản (T - H - T') là gì?",options:["Nhà tư bản phải có một lượng vàng bạc dự trữ rất lớn trong ngân khố","Nhà tư bản tìm thấy trên thị trường một loại hàng hóa đặc biệt: Hàng hóa sức lao động","Nhà nước bãi bỏ mọi loại thuế thương mại và rào cản xuất nhập khẩu","Thị trường phải có sự can thiệp và bao cấp toàn diện từ phía chính quyền"],correctIndex:1,explanation:"Tiền chỉ biến thành tư bản khi tìm thấy trên thị trường hàng hóa sức lao động – loại hàng hóa có khả năng sáng tạo ra giá trị mới lớn hơn giá trị của chính nó (nguồn gốc của GTTD m).",quote:"Giáo trình Chương 3 • Mục 3.1.1: Hàng hóa sức lao động"},{id:"q-c3-02",chapter:3,chapterTitle:"Chương 3: Giá trị thặng dư",category:"3.1. Hàng hóa sức lao động",question:"Hai điều kiện cơ bản để sức lao động trở thành hàng hóa trong nền kinh tế thị trường là gì?",options:["Người lao động có chứng chỉ nghề cao cấp và doanh nghiệp được miễn thuế sản xuất","Người lao động tự do về thân thể VÀ bị tước đoạt toàn bộ tư liệu sản xuất","Người lao động ký hợp đồng vô thời hạn và mức lương cao hơn mức trung bình xã hội","Người lao động có quyền sở hữu cổ phần và được chia lợi nhuận cuối năm"],correctIndex:1,explanation:"Hai điều kiện tất yếu: (1) Người lao động tự do về thân thể (có quyền bán sức lao động); (2) Người lao động không có tư liệu sản xuất (buộc phải bán sức lao động để sinh tồn).",quote:"Giáo trình Chương 3 • Mục 3.1.1: Điều kiện để sức lao động thành hàng hóa"},{id:"q-c3-03",chapter:3,chapterTitle:"Chương 3: Giá trị thặng dư",category:"3.1. Bản chất GTTD",question:"Tư bản bất biến (ký hiệu là c) là bộ phận tư bản có đặc điểm nào dưới đây?",options:["Biến thành tư liệu sản xuất (máy móc, nguyên vật liệu), giá trị được bảo tồn và chuyển dịch nguyên vẹn vào sản phẩm mới","Dùng để trả lương cho công nhân, giá trị tăng lên vượt trội trong quá trình sản xuất","Luôn luôn thay đổi số lượng giá trị theo tỷ lệ lạm phát hàng năm của ngân hàng","Được trích trực tiếp từ quỹ từ thiện xã hội để trợ cấp cho người yếu thế"],correctIndex:0,explanation:"Tư bản bất biến (c) tồn tại dưới dạng tư liệu sản xuất (máy móc, nhà xưởng, nguyên liệu), giá trị của nó không biến đổi về lượng trong sản xuất, chỉ được chuyển dịch nguyên vẹn vào sản phẩm mới nhờ lao động cụ thể.",quote:"Giáo trình Chương 3 • Mục 3.1.2: Tư bản bất biến (c) và Tư bản khả biến (v)"},{id:"q-c3-04",chapter:3,chapterTitle:"Chương 3: Giá trị thặng dư",category:"3.1. Phương pháp sản xuất GTTD",question:"Phương pháp sản xuất giá trị thặng dư TUYỆT ĐỐI được thực hiện bằng cách nào?",options:["Tăng năng suất lao động xã hội để hạ giá trị tư liệu sinh hoạt của công nhân","Kéo dài ngày lao động vượt quá thời gian lao động tất yếu trong điều kiện thời gian tất yếu không đổi","Áp dụng robot và trí tuệ nhân tạo để thay thế 100% công nhân trong nhà máy","Tăng lương gấp đôi cho công nhân để kích thích tinh thần thi đua lao động sáng tạo"],correctIndex:1,explanation:"Sản xuất GTTD tuyệt đối là phương pháp thu được bằng cách kéo dài ngày lao động hoặc tăng cường độ lao động vượt quá thời gian lao động tất yếu, trong điều kiện thời gian lao động tất yếu không đổi.",quote:"Giáo trình Chương 3 • Mục 3.1.3: Sản xuất GTTD tuyệt đối"},{id:"q-c3-05",chapter:3,chapterTitle:"Chương 3: Giá trị thặng dư",category:"3.1. Phương pháp sản xuất GTTD",question:"Giá trị thặng dư SIÊU NGẠCH có nguồn gốc từ đâu trong nền kinh tế thị trường?",options:["Do doanh nghiệp cá biệt ứng dụng công nghệ tiến bộ, làm cho giá trị cá biệt thấp hơn giá trị thị trường","Do hành vi buôn bán gian lận, cân thiếu hàng hóa cho người tiêu dùng trên chợ tự do","Do nhà nước trợ cấp tiền mặt trực tiếp cho các doanh nghiệp xuất khẩu lớn","Do nhà tư bản phát hành thêm nhiều cổ phiếu và trái phiếu doanh nghiệp ra công chúng"],correctIndex:0,explanation:"GTTD siêu ngạch thu được do doanh nghiệp cá biệt có năng suất cao hơn mặt bằng xã hội (nhờ cải tiến kỹ thuật, quản lý), làm giá trị cá biệt của sản phẩm thấp hơn giá trị xã hội nhưng vẫn bán theo giá xã hội.",quote:"Giáo trình Chương 3 • Mục 3.1.3: Giá trị thặng dư siêu ngạch"},{id:"q-c3-06",chapter:3,chapterTitle:"Chương 3: Giá trị thặng dư",category:"3.2. Tích lũy tư bản",question:'Bản chất thực sự của "Tích lũy tư bản" theo luận điểm của C. Mác là gì?',options:["Là việc cất giữ tiền vàng trong két sắt của gia đình để phòng ngừa rủi ro tương lai","Là sự chuyển hóa một phần giá trị thặng dư trở lại thành tư bản phụ thêm để tái sản xuất mở rộng","Là việc nhà nước thu thuế doanh nghiệp đem đầu tư xây dựng các công trình công cộng","Là việc người lao động gửi tiền tiết kiệm vào các ngân hàng thương mại để lấy lãi suất"],correctIndex:1,explanation:"Bản chất của tích lũy tư bản là biến một phần giá trị thặng dư thành tư bản phụ thêm (tư bản hóa giá trị thặng dư) nhằm tái sản xuất mở rộng quy mô kinh doanh.",quote:"Giáo trình Chương 3 • Mục 3.2: Tích lũy tư bản và các nhân tố ảnh hưởng"},{id:"q-c3-07",chapter:3,chapterTitle:"Chương 3: Giá trị thặng dư",category:"3.3. Các hình thức biểu hiện GTTD",question:"Công thức Chi phí sản xuất tư bản chủ nghĩa (k) và Lợi nhuận (p) phản ánh mối quan hệ nào?",options:["k = c + v và p là hình thức biểu hiện bề ngoài của giá trị thặng dư m","k = c + m và p chỉ sinh ra từ máy móc thiết bị tự động hóa hiện đại","k = v + m và p luôn luôn bằng 0 trong điều kiện thị trường tự do cạnh tranh hoàn hảo","k = c + v + m và p chính là toàn bộ tiền lương trả cho giám đốc điều hành"],correctIndex:0,explanation:"Chi phí sản xuất k = c + v (bù đắp hao phí tư bản ứng trước). Lợi nhuận p chính là GTTD m khi được quan niệm là con đẻ của toàn bộ tư bản ứng trước (k).",quote:"Giáo trình Chương 3 • Mục 3.3: Lợi nhuận và tỷ suất lợi nhuận"},{id:"q-c5-01",chapter:5,chapterTitle:"Chương 5: KTTT định hướng XHCN & Lợi ích KT",category:"5.1. Khái niệm KTTT ĐHXHCN",question:"Khái niệm Kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam được Đảng ta xác định là gì?",options:["Nền kinh tế đóng cửa, bao cấp toàn diện không chịu sự chi phối của quy luật cung cầu","Nền kinh tế vận hành đầy đủ, đồng bộ theo quy luật KTTT, đồng thời bảo đảm định hướng XHCN phù hợp từng chặng đường","Nền kinh tế tư bản chủ nghĩa tự do thả nổi, nhà nước hoàn toàn đứng ngoài không điều tiết","Mô hình kinh tế phi thị trường chỉ trao đổi hiện vật trực tiếp giữa các hợp tác xã nông nghiệp"],correctIndex:1,explanation:"KTTT định hướng XHCN ở VN là nền kinh tế vận hành đầy đủ, đồng bộ theo các quy luật của KTTT, đồng thời bảo đảm định hướng XHCN phù hợp với từng chặng đường phát triển của đất nước.",quote:"Giáo trình Chương 5 • Mục 5.1.1: Khái niệm KTTT định hướng XHCN"},{id:"q-c5-02",chapter:5,chapterTitle:"Chương 5: KTTT định hướng XHCN & Lợi ích KT",category:"5.1. Tính tất yếu khách quan",question:'Tại sao phát triển KTTT định hướng XHCN ở Việt Nam là một "tính tất yếu khách quan"?',options:["Do áp lực từ các tổ chức tài chính quốc tế ép buộc Việt Nam phải ký kết hiệp định","Phù hợp quy luật phát triển khách quan, yêu cầu phát triển LLSX và tận dụng ưu việt của KTTT xây dựng CNXH","Vì Việt Nam đã hoàn thành xuất sắc quá trình CNH và thừa thãi của cải vật chất trong xã hội","Là quyết định mang tính tạm thời, sau 5 năm sẽ quay trở lại thời kỳ kế hoạch hóa quan liêu bao cấp"],correctIndex:1,explanation:"Tính tất yếu bắt nguồn từ 3 lý do: (1) Phù hợp quy luật phát triển khách quan; (2) Do tính ưu việt của KTTT trong thúc đẩy LLSX; (3) Phù hợp nguyện vọng của nhân dân mong muốn dân giàu nước mạnh.",quote:"Giáo trình Chương 5 • Mục 5.1.2: Tính tất yếu khách quan"},{id:"q-c5-03",chapter:5,chapterTitle:"Chương 5: KTTT định hướng XHCN & Lợi ích KT",category:"5.1. Đặc trưng KTTT ĐHXHCN",question:'Trong nền kinh tế thị trường định hướng XHCN ở Việt Nam, thành phần kinh tế nào giữ vai trò "CHỦ ĐẠO"?',options:["Kinh tế tư nhân trong nước","Kinh tế có vốn đầu tư nước ngoài (FDI)","Kinh tế nhà nước","Kinh tế hộ cá thể tiểu nông"],correctIndex:2,explanation:"Kinh tế nhà nước giữ vai trò chủ đạo, là công cụ định hướng và điều tiết vĩ mô; Kinh tế tư nhân là một động lực quan trọng của nền kinh tế.",quote:"Giáo trình Chương 5 • Mục 5.1.3: Đặc trưng về quan hệ sở hữu và thành phần kinh tế"},{id:"q-c5-04",chapter:5,chapterTitle:"Chương 5: KTTT định hướng XHCN & Lợi ích KT",category:"5.1. Đặc trưng phân phối",question:'Hình thức phân phối thu nhập nào giữ vai trò "CHỦ YẾU" trong KTTT định hướng XHCN ở Việt Nam?',options:["Phân phối bình quân cào bằng, ai cũng nhận phần bằng nhau bất kể làm nhiều hay ít","Phân phối theo kết quả lao động, hiệu quả kinh tế, đồng thời theo mức đóng góp vốn và các nguồn lực khác","Chỉ phân phối dựa trên nguồn tiền thừa kế và may mắn trúng thưởng tài chính","Phân phối hoàn toàn theo sự chỉ định và ban phát hành chính của lãnh đạo cơ quan"],correctIndex:1,explanation:"Đặc trưng phân phối: Phân phối theo kết quả lao động và hiệu quả kinh tế là chủ yếu, kết hợp phân phối theo mức đóng góp vốn cùng các nguồn lực khác và thông qua hệ thống an sinh xã hội.",quote:"Giáo trình Chương 5 • Mục 5.1.3: Đặc trưng về quan hệ phân phối"},{id:"q-c5-05",chapter:5,chapterTitle:"Chương 5: KTTT định hướng XHCN & Lợi ích KT",category:"5.2. Hoàn thiện thể chế",question:"Nội dung trọng tâm nào KHÔNG PHẢI là định hướng hoàn thiện thể chế KTTT định hướng XHCN ở Việt Nam?",options:["Hoàn thiện thể chế về sở hữu, bảo vệ quyền tài sản và tự do kinh doanh hợp pháp","Phát triển đồng bộ các yếu tố thị trường và các loại thị trường (tài chính, lao động, đất đai, KHCN)","Xóa bỏ hoàn toàn thành phần kinh tế tư nhân và cấm các doanh nghiệp tư nhân hoạt động","Nâng cao năng lực lãnh đạo của Đảng và hiệu lực quản lý của Nhà nước pháp quyền XHCN"],correctIndex:2,explanation:"Đảng ta khẳng định kinh tế tư nhân là một động lực quan trọng của nền kinh tế. Xóa bỏ kinh tế tư nhân là quan điểm sai lầm tả khuynh thời bao cấp.",quote:"Giáo trình Chương 5 • Mục 5.2: Hoàn thiện thể chế KTTT định hướng XHCN"},{id:"q-c5-06",chapter:5,chapterTitle:"Chương 5: KTTT định hướng XHCN & Lợi ích KT",category:"5.3. Quan hệ lợi ích kinh tế",question:'Trong hệ thống các quan hệ lợi ích kinh tế, loại lợi ích nào đóng vai trò là "nền tảng, động lực trực tiếp"?',options:["Lợi ích chính trị thuần túy của các hiệp hội quốc tế bên ngoài","Lợi ích kinh tế cá nhân của chính người lao động và chủ thể sản xuất","Lợi ích tài chính của các công ty đa quốc gia độc quyền nước ngoài","Lợi ích hình thức bề ngoài trong các phong trào khẩu hiệu thi đua ngắn hạn"],correctIndex:1,explanation:"Lợi ích kinh tế cá nhân là động lực trực tiếp và mạnh mẽ nhất thúc đẩy con người lao động sáng tạo. Tôn trọng lợi ích cá nhân chính đáng là nền tảng kết hợp hài hòa lợi ích tập thể và xã hội.",quote:"Giáo trình Chương 5 • Mục 5.3: Quan hệ lợi ích kinh tế ở Việt Nam"},{id:"q-c6-01",chapter:6,chapterTitle:"Chương 6: CNH, HĐH & Hội nhập KTQT",category:"6.1. Cách mạng công nghiệp",question:"Đặc trưng cốt lõi của cuộc Cách mạng công nghiệp lần thứ tư (CMCN 4.0) là gì?",options:["Sử dụng động cơ hơi nước và cơ khí hóa quy mô lớn trong xưởng dệt thủ công","Sử dụng năng lượng điện và dây chuyền sản xuất lắp ráp tự động hàng loạt","Sự hội tụ và đột phá của Trí tuệ nhân tạo (AI), Vạn vật kết nối (IoT), Dữ liệu lớn (Big Data) và Công nghệ sinh học","Chỉ tập trung vào khai thác dầu mỏ và các mỏ than khoáng sản truyền thống"],correctIndex:2,explanation:"CMCN 4.0 đặc trưng bởi sự hợp nhất của các công nghệ làm mờ ranh giới giữa vật lý, kỹ thuật số và sinh học, với tâm điểm là AI, IoT, Big Data, Robot thông minh và Điện toán đám mây.",quote:"Giáo trình Chương 6 • Mục 6.1.1: Khái quát về cách mạng công nghiệp"},{id:"q-c6-02",chapter:6,chapterTitle:"Chương 6: CNH, HĐH & Hội nhập KTQT",category:"6.1. CNH, HĐH ở Việt Nam",question:"Mô hình Công nghiệp hóa, hiện đại hóa ở Việt Nam trong bối cảnh hiện nay có đặc điểm nổi bật nào?",options:["Phát triển tuần tự từng bước giống hệt nước Anh thế kỷ XVIII, cấm bỏ qua bất kỳ giai đoạn nào","CNH gắn liền với HĐH, gắn với phát triển kinh tế tri thức và bảo vệ môi trường, thích ứng với CMCN 4.0","Chỉ tập trung phát triển công nghiệp nặng độc quyền, đóng cửa hoàn toàn biên giới kinh tế","Bán toàn bộ tài nguyên thiên nhiên thô sơ để nhập khẩu máy móc đã qua sử dụng từ nước ngoài"],correctIndex:1,explanation:"Đặc điểm CNH, HĐH ở VN: Rút ngắn thời gian, kết hợp CNH với HĐH, lấy kinh tế tri thức làm nền tảng, phát triển kinh tế xanh, kinh tế tuần hoàn và chủ động nắm bắt thời cơ của CMCN 4.0.",quote:"Giáo trình Chương 6 • Mục 6.1.2: Tính tất yếu khách quan và nội dung CNH, HĐH"},{id:"q-c6-03",chapter:6,chapterTitle:"Chương 6: CNH, HĐH & Hội nhập KTQT",category:"6.2. Hội nhập kinh tế quốc tế",question:"Các hình thức hội nhập kinh tế quốc tế phát triển theo thứ tự từ THẤP ĐẾN CAO như thế nào?",options:["Thị trường chung → Liên minh thuế quan → Khu vực mậu dịch tự do (FTA) → Hiệp định thương mại đơn phương","Thỏa thuận thương mại ưu đãi (PTA) → Khu vực mậu dịch tự do (FTA) → Liên minh thuế quan → Thị trường chung → Liên minh kinh tế - tiền tệ","Liên minh tiền tệ toàn cầu → Thị trường tự do cá biệt → Xóa bỏ hoàn toàn đồng tiền quốc gia","Đóng cửa biên giới → Mậu dịch song phương kín → Cấm trao đổi ngoại tệ quốc tế"],correctIndex:1,explanation:"Các nấc thang hội nhập: Bắt đầu từ PTA (ưu đãi thuế quan) → FTA (mậu dịch tự do) → Customs Union (biểu thuế đối ngoại chung) → Common Market (tự do dòng vốn và lao động) → Economic & Monetary Union.",quote:"Giáo trình Chương 6 • Mục 6.2.1: Các hình thức hội nhập kinh tế quốc tế"},{id:"q-c6-04",chapter:6,chapterTitle:"Chương 6: CNH, HĐH & Hội nhập KTQT",category:"6.2. Tác động của hội nhập",question:"Đâu là một THÁCH THỨC TIÊU CỰC mà hội nhập kinh tế quốc tế có thể mang lại cho Việt Nam nếu không ứng phó tốt?",options:["Mở rộng thị trường xuất khẩu sang các cường quốc thế giới như EU, Hoa Kỳ, Nhật Bản","Tiếp thu công nghệ quản lý tiên tiến và kỹ thuật sản xuất hiện đại của thế giới","Gia tăng sức ép cạnh tranh gay gắt, nguy cơ phụ thuộc kinh tế bên ngoài và nguy cơ tụt hậu vào bẫy gia công giá rẻ","Tạo thêm hàng triệu cơ hội việc làm mới cho thanh niên và sinh viên đại học"],correctIndex:2,explanation:"Mặt trái của hội nhập: Gia tăng áp lực cạnh tranh cho doanh nghiệp nội địa, nguy cơ tổn thương trước khủng hoảng kinh tế toàn cầu, cạn kiệt tài nguyên và nguy cơ trở thành bãi thải công nghệ lạc hậu.",quote:"Giáo trình Chương 6 • Mục 6.2.2: Tác động của hội nhập kinh tế quốc tế"},{id:"q-c6-05",chapter:6,chapterTitle:"Chương 6: CNH, HĐH & Hội nhập KTQT",category:"6.2. Phương hướng nâng cao hiệu quả",question:"Phương hướng cốt lõi nhất để nâng cao hiệu quả hội nhập kinh tế quốc tế của Việt Nam là gì?",options:["Chủ động, tích cực hội nhập kinh tế quốc tế trên cơ sở giữ vững độc lập, tự chủ và bảo đảm lợi ích quốc gia - dân tộc","Đóng cửa thị trường, đơn phương áp thuế cao trừng phạt mọi quốc gia đối tác kinh tế","Vay nợ nước ngoài tối đa và chấp nhận mọi điều kiện chính trị của các tổ chức tài chính","Cấm thanh niên học ngoại ngữ và cấm các doanh nghiệp công nghệ hợp tác với nước ngoài"],correctIndex:0,explanation:"Quan điểm chỉ đạo nhất quán của Đảng: Hội nhập kinh tế quốc tế là sự nghiệp của toàn dân; giữ vững độc lập, tự chủ đi đôi với đa phương hóa, đa dạng hóa quan hệ kinh tế quốc tế.",quote:"Giáo trình Chương 6 • Mục 6.2.3: Phương hướng nâng cao hiệu quả hội nhập"},{id:"q-c1-01",chapter:1,chapterTitle:"Chương 1: Đối tượng & Chức năng KTCT",category:"1.1. Lịch sử phát triển",question:'Thuật ngữ "Kinh tế chính trị" (Political Economy) xuất hiện lần đầu tiên vào năm nào, trong tác phẩm của ai?',options:['Năm 1776, trong tác phẩm "Sự giàu có của các quốc gia" của Adam Smith','Năm 1867, trong tác phẩm "Bộ Tư bản" của Karl Marx','Năm 1615, trong tác phẩm "Chuyên luận về kinh tế chính trị" của Antoine de Montchrestien','Năm 1917, trong tác phẩm "Nhà nước và cách mạng" của V.I. Lênin'],correctIndex:2,explanation:'Thuật ngữ "Kinh tế chính trị" xuất hiện lần đầu năm 1615 bởi nhà kinh tế học người Pháp A. Montchrestien thuộc trường phái Chủ nghĩa trọng thương.',quote:"Giáo trình Chương 1 • Mục 1.1: Khái quát sự ra đời của KTCT"},{id:"q-c1-02",chapter:1,chapterTitle:"Chương 1: Đối tượng, phương pháp & chức năng",category:"1.1. Thuật ngữ KTCT",question:'Thuật ngữ "kinh tế chính trị" viết ngắn gọn từ cụm từ gốc Hán – Việt nào và mang hàm nghĩa gì?',options:['"Kinh bang tế thế" – Phương pháp để trị nước và giúp đời','"Kinh doanh tế vi" – Phương pháp buôn bán nhỏ lẻ thu lợi nhuận','"Chính sách kinh tài" – Quản lý ngân khố của triều đình phong kiến','"Bang giao thế cuộc" – Chiến lược ngoại giao thương mại quốc tế'],correctIndex:0,explanation:'Thuật ngữ "Kinh tế chính trị" bắt nguồn từ chữ Hán "kinh bang tế thế", mang hàm nghĩa là khoa học và phương pháp trị nước giúp đời, chăm lo sự ấm no, giàu mạnh cho quốc gia và muôn dân.',quote:"Giáo trình Chương 1 • Mục 1.1: Thuật ngữ kinh tế chính trị"},{id:"q-c1-03",chapter:1,chapterTitle:"Chương 1: Đối tượng, phương pháp & chức năng",category:"1.1. KTCT Cổ điển Anh",question:"Nhà kinh tế học nào đã đưa kinh tế chính trị trở thành một môn khoa học có tính hệ thống với các phạm trù và khái niệm chuyên ngành vào thế kỷ XVIII?",options:['Adam Smith với tác phẩm "Của cải của các quốc gia" (The Wealth of Nations - 1776)','David Ricardo với tác phẩm "Những nguyên lý của kinh tế chính trị"','François Quesnay với tác phẩm "Biểu kinh tế"',"Thomas Malthus với lý luận về bẫy dân số"],correctIndex:0,explanation:'Đến thế kỷ XVIII, với tác phẩm kinh điển "The Wealth of Nations" (1776), Adam Smith đã chính thức đưa kinh tế chính trị trở thành môn khoa học có hệ thống với 2 mục tiêu: tạo sinh kế cho dân và ngân sách cho nhà nước.',quote:"Giáo trình Chương 1 • Mục 1.1: Adam Smith (1776)"},{id:"q-c1-04",chapter:1,chapterTitle:"Chương 1: Đối tượng, phương pháp & chức năng",category:"1.1. Góc độ kinh tế học",question:'Dưới góc độ khoa học kinh tế, khái niệm "kinh tế" được hiểu là gì?',options:["Toàn bộ các hoạt động sản xuất, phân phối, trao đổi, tiêu thụ hàng hóa và dịch vụ của một cộng đồng quốc gia trong một khoảng thời gian","Hoạt động giao dịch tiền tệ, cổ phiếu và trái phiếu trên sàn chứng khoán","Hoạt động chi tiêu công và thu thuế xuất nhập khẩu của ngân sách nhà nước","Kỹ năng tiết kiệm tiền và quản lý tài chính cá nhân trong đời sống"],correctIndex:0,explanation:"Kinh tế (dưới góc độ kinh tế học) là toàn bộ các hoạt động sản xuất, phân phối, trao đổi, tiêu thụ hàng hóa và dịch vụ của một cộng đồng quốc gia trong một khoảng thời gian nhất định.",quote:"Giáo trình Chương 1 • Mục 1.1: Góc độ kinh tế học"},{id:"q-c1-05",chapter:1,chapterTitle:"Chương 1: Đối tượng, phương pháp & chức năng",category:"1.2. Bốn khâu tái sản xuất",question:"Đối tượng nghiên cứu của KTCT Mác – Lênin bao trùm các quan hệ sản xuất trong 4 khâu nào của quá trình tái sản xuất xã hội?",options:["Sản xuất – Phân phối – Trao đổi – Tiêu dùng","Thiết kế – Vận hành – Tiếp thị – Bán hàng","Đầu tư – Xây dựng – Khai thác – Thu hồi vốn","Thu gom nguyên liệu – Đóng gói – Lưu kho – Xuất khẩu"],correctIndex:0,explanation:"Hệ thống 4 khâu của tái sản xuất xã hội gồm: Sản xuất (vai trò quyết định) – Phân phối (định hướng lợi ích) – Trao đổi (cầu nối lưu thông) – Tiêu dùng (mục đích và động lực).",quote:"Giáo trình Chương 1 • Mục 1.2: Đối tượng nghiên cứu & 4 khâu tái sản xuất"},{id:"q-c1-06",chapter:1,chapterTitle:"Chương 1: Đối tượng, phương pháp & chức năng",category:"1.3. Phương pháp nghiên cứu",question:"Phương pháp nghiên cứu quan trọng và đặc thù nhất của Kinh tế chính trị Mác – Lênin là gì?",options:["Phương pháp trừu tượng hóa khoa học","Phương pháp thử nghiệm thực địa trong phòng thí nghiệm","Phương pháp khảo sát ngẫu nhiên trên mạng xã hội","Phương pháp trực giác cảm tính của nhà nghiên cứu"],correctIndex:0,explanation:"Phương pháp trừu tượng hóa khoa học là phương pháp chủ yếu và đặc thù: Gạt bỏ những yếu tố ngẫu nhiên, tạm thời, bề ngoài để đi sâu vào bản chất, tách ra những mối liên hệ tất nhiên, bền vững và khái quát thành quy luật kinh tế.",quote:"Giáo trình Chương 1 • Mục 1.3: Phương pháp nghiên cứu của KTCT"},{id:"q-c1-07",chapter:1,chapterTitle:"Chương 1: Đối tượng, phương pháp & chức năng",category:"1.2. Đối tượng nghĩa rộng",question:'Theo quan điểm của Ph. Ăng-ghen về kinh tế chính trị theo nghĩa rộng, vì sao "không có một bộ môn kinh tế chính trị duy nhất cho tất cả mọi quốc gia, mọi thời đại kinh tế"?',options:["Vì điều kiện sản xuất, trao đổi và trình độ phát triển của LLSX ở mỗi thời đại, mỗi quốc gia là khác nhau, quy định các quan hệ sản xuất đặc thù tương ứng","Vì mỗi quốc gia sử dụng một loại đồng tiền và ngôn ngữ khác nhau nên không thể chung một lý thuyết","Vì các nhà kinh tế học thời cổ đại từ chối hợp tác nghiên cứu với các nhà kinh tế học thời cận đại","Vì kinh tế chính trị chỉ áp dụng được duy nhất cho các nước công nghiệp phát triển phương Tây"],correctIndex:0,explanation:"Ph. Ăng-ghen khẳng định: Do điều kiện sản xuất vật chất và trình độ phát triển của LLSX biến đổi không ngừng qua các phương thức sản xuất trong lịch sử, nên không thể có một môn KTCT duy nhất cho mọi thời đại và mọi quốc gia.",quote:"Giáo trình Chương 1 • Mục 2.1: Đối tượng nghiên cứu theo nghĩa rộng"},{id:"q-c1-08",chapter:1,chapterTitle:"Chương 1: Đối tượng, phương pháp & chức năng",category:"1.2. Mối liên hệ tổng thể",question:"Đối tượng nghiên cứu của Kinh tế chính trị Mác – Lênin đặt hệ thống các quan hệ sản xuất trong sự tác động biện chứng nhiều tầng nấc nào?",options:["Kiến trúc thượng tầng ➔ Cơ sở hạ tầng ➔ Trình độ phát triển của lực lượng sản xuất","Lợi nhuận ngắn hạn ➔ Giá cả thị trường ➔ Tâm lý người tiêu dùng","Chính sách tiền tệ ➔ Lãi suất ngân hàng ➔ Thị trường chứng khoán","Quảng cáo tiếp thị ➔ Khuyến mãi giảm giá ➔ Số lượng đơn hàng"],correctIndex:0,explanation:"KTCT Mác - Lênin nghiên cứu quan hệ sản xuất không cô lập mà đặt trong chỉnh thể biện chứng: Kiến trúc thượng tầng tác động trở lại Cơ sở hạ tầng, và Cơ sở hạ tầng phản ánh Trình độ phát triển của Lực lượng sản xuất.",quote:"Giáo trình Chương 1 • Mục 2.1: Mối liên hệ biện chứng trong đối tượng nghiên cứu"},{id:"q-c1-09",chapter:1,chapterTitle:"Chương 1: Đối tượng, phương pháp & chức năng",category:"1.2. Mục đích nghiên cứu",question:"Chuỗi logic 5 bước thể hiện mục đích nghiên cứu của Kinh tế chính trị Mác – Lênin là gì?",options:["Tìm quy luật kinh tế ➔ Hoạch định chính sách ➔ Giải quyết hài hòa quan hệ lợi ích ➔ Tạo động lực sáng tạo ➔ Thúc đẩy phát triển toàn diện xã hội","Tăng thuế nhập khẩu ➔ Tích lũy vàng bạc kim loại quý ➔ Độc quyền ngoại thương ➔ Mở rộng thị trường thuộc địa","Dự báo giá cổ phiếu ➔ Tối đa hóa lợi nhuận đầu cơ ➔ Giảm chi phí nhân công ➔ Thôn tính các doanh nghiệp nhỏ","Xóa bỏ hoàn toàn thị trường ➔ Triệt tiêu các quan hệ trao đổi tiền tệ ➔ Phân phối bình quân cào bằng"],correctIndex:0,explanation:"Giáo trình Mục 2.2 chỉ rõ chuỗi giá trị mục đích nghiên cứu: Tìm ra các quy luật kinh tế chi phối PTSX => Hoạch định chính sách kinh tế => Giải quyết hài hòa các quan hệ lợi ích => Tạo động lực cho con người sáng tạo => Thúc đẩy sự phát triển toàn diện của xã hội.",quote:"Giáo trình Chương 1 • Mục 2.2: Mục đích nghiên cứu của KTCT Mác – Lênin"},{id:"q-c1-10",chapter:1,chapterTitle:"Chương 1: Đối tượng, phương pháp & chức năng",category:"1.3. Các phương pháp nghiên cứu chính",question:"Hệ thống các phương pháp nghiên cứu chính của Kinh tế chính trị Mác – Lênin bao gồm những phương pháp nào?",options:["Phương pháp trừu tượng hóa khoa học, phương pháp logic & lịch sử, phân tích thống kê và mô hình hóa...","Phương pháp thử nghiệm hóa học vi sinh, giải trình tự gen và đo phóng xạ","Phương pháp chiêm tinh học, trực giác tâm linh và bói toán chu kỳ kinh tế","Phương pháp khảo sát ngẫu nhiên cảm xúc người tiêu dùng trên mạng xã hội"],correctIndex:0,explanation:"Giáo trình Mục 2.3 chuẩn hóa các phương pháp nghiên cứu chính: Phương pháp trừu tượng hóa khoa học (chủ yếu nhất), phương pháp logic & lịch sử, cùng phân tích thống kê, mô hình hóa...",quote:"Giáo trình Chương 1 • Mục 2.3: Các phương pháp nghiên cứu chính"},{id:"q-c2-01",chapter:2,chapterTitle:"Chương 2: Hàng hóa & Thị trường",category:"2.1. Hai thuộc tính của hàng hóa",question:"Giá trị của hàng hóa theo lý luận của C. Mác được định nghĩa chính xác là gì?",options:["Là công dụng thỏa mãn một nhu cầu vật chất hoặc tinh thần nhất định của người tiêu dùng","Là lao động xã hội của người sản xuất kết tinh trong hàng hóa","Là mức giá niêm yết in trên bao bì của sản phẩm tại các siêu thị hiện đại","Là toàn bộ chi phí quảng cáo và tiếp thị mà doanh nghiệp đã bỏ ra trên mạng xã hội"],correctIndex:1,explanation:"Giá trị của hàng hóa là lao động xã hội của người sản xuất kết tinh trong hàng hóa. Giá trị là nội dung, cơ sở của giá trị trao đổi.",quote:"Giáo trình Chương 2 • Mục 2.1: Thuộc tính của hàng hóa"},{id:"q-c2-02",chapter:2,chapterTitle:"Chương 2: Hàng hóa & Thị trường",category:"2.2. Tính hai mặt của lao động",question:"Lao động cụ thể của người sản xuất hàng hóa có vai trò gì trong quá trình sản xuất?",options:["Sáng tạo ra giá trị mới (v + m) của sản phẩm","Tạo ra giá trị sử dụng của hàng hóa, bảo tồn và chuyển dịch giá trị cũ (c) vào sản phẩm mới","Làm cho tỷ lệ lạm phát tiền tệ giảm về mức âm trong nền kinh tế","Tự động biến đổi tiền mặt thành tư bản tài chính ngân hàng"],correctIndex:1,explanation:"Lao động cụ thể tạo ra giá trị sử dụng, đồng thời bảo tồn và chuyển dịch giá trị tư liệu sản xuất (c) vào sản phẩm mới; còn Lao động trừu tượng tạo ra giá trị mới (v + m).",quote:"Giáo trình Chương 2 • Mục 2.1: Tính hai mặt của lao động sản xuất hàng hóa"},{id:"q-c2-03",chapter:2,chapterTitle:"Chương 2: Hàng hóa & Thị trường",category:"2.1. Cơ sở sản xuất hàng hóa",question:"Theo C. Mác, trước khi có thể tham gia vào các hoạt động chính trị, văn hoá, nghệ thuật, khoa học, tôn giáo..., con người trước hết phải làm gì?",options:["Phải có thức ăn, thức uống, quần áo mặc, chỗ ở... tức là phải tiến hành sản xuất của cải vật chất","Phải hoàn thành việc xây dựng thể chế chính trị và ban hành hiến pháp","Phải đạt được chứng chỉ học vấn chuyên môn cao cấp trong xã hội","Phải tích lũy một lượng lớn kim loại quý vàng bạc trong ngân khố"],correctIndex:0,explanation:"Tiền đề duy vật lịch sử: Sản xuất vật chất là nền tảng sinh tồn của nhân loại. Con người trước hết phải có các tư liệu sinh hoạt thiết yếu để duy trì sự sống trước khi sáng tạo các giá trị tinh thần khác.",quote:"Giáo trình Chương 2 • Mục 1.1: Sản xuất hàng hóa"},{id:"q-c2-04",chapter:2,chapterTitle:"Chương 2: Hàng hóa & Thị trường",category:"2.1. Khái niệm sản xuất hàng hóa",question:'Khái niệm "Sản xuất hàng hóa" theo lý luận của C. Mác được định nghĩa chính xác là gì?',options:["Là kiểu tổ chức hoạt động kinh tế mà ở đó, những người sản xuất ra sản phẩm nhằm mục đích trao đổi, mua bán","Là mô hình kinh tế tự nhiên tự cấp tự túc, sản phẩm làm ra chỉ phục vụ tiêu dùng nội bộ gia đình","Là hoạt động phân phối hàng hóa cứu trợ miễn phí của các tổ chức thiện nguyện","Là hoạt động mua bán trái phiếu chính phủ trên thị trường tài chính quốc tế"],correctIndex:0,explanation:"Giáo trình Chương 2 Mục 1.1 định nghĩa chuẩn: Sản xuất hàng hóa là kiểu tổ chức hoạt động kinh tế mà ở đó, những người sản xuất ra sản phẩm nhằm mục đích trao đổi, mua bán.",quote:"Giáo trình Chương 2 • Mục 1.1: Khái niệm sản xuất hàng hóa"},{id:"q-c2-05",chapter:2,chapterTitle:"Chương 2: Hàng hóa & Thị trường",category:"2.1. Các dạng biểu hiện hàng hóa",question:"Hàng hóa tồn tại dưới những dạng biểu hiện cơ bản nào?",options:["Dạng hữu hình (sắt, thép, lương thực, thực phẩm...) và Dạng vô hình (dịch vụ thương mại, vận tải, giáo viên, bác sĩ, nghệ sĩ...)","Chỉ tồn tại duy nhất dưới dạng vật thể cầm nắm được; các loại hình dịch vụ không được coi là hàng hóa","Chỉ tồn tại dưới dạng tiền mặt và tiền gửi tiết kiệm ngân hàng","Dạng sở hữu nhà nước và dạng tài sản thế chấp tư nhân"],correctIndex:0,explanation:"Giáo trình Mục 1.2 nêu rõ: Hàng hóa biểu hiện dưới 2 dạng: Dạng hữu hình (vật thể như sắt, thép, lúa gạo, ô tô...) và Dạng vô hình (phi vật thể như dịch vụ vận tải, thương mại, y tế, giáo dục...).",quote:"Giáo trình Chương 2 • Mục 1.2: Các dạng biểu hiện của hàng hóa"},{id:"q-c2-06",chapter:2,chapterTitle:"Chương 2: Hàng hóa & Thị trường",category:"2.1. Điều kiện tách biệt kinh tế",question:"Sự tách biệt tương đối về mặt kinh tế giữa các chủ thể sản xuất - điều kiện thứ hai để sản xuất hàng hóa ra đời - bắt nguồn từ yếu tố cốt lõi nào?",options:["Do sự khác nhau về quan hệ sở hữu đối với tư liệu sản xuất và sản phẩm lao động quy định (quyền tài sản riêng)","Do khoảng cách địa lý ngăn cách giữa các vùng miền nông thôn và thành thị","Do sự khác biệt về phong tục tập quán và tín ngưỡng tôn giáo giữa các cộng đồng dân cư","Do quy định bắt buộc phải thanh toán bằng ngoại tệ của ngân hàng trung ương"],correctIndex:0,explanation:"Sự tách biệt kinh tế do chế độ sở hữu khác nhau về TLSX và sản phẩm quy định. Người này muốn tiêu dùng sản phẩm của người khác phải thông qua trao đổi mua bán ngang giá, không thể chiếm đoạt.",quote:"Giáo trình Chương 2 • Mục 1.1: Sự tách biệt tương đối về kinh tế"},{id:"q-c2-07",chapter:2,chapterTitle:"Chương 2: Hàng hóa & Thị trường",category:"2.1. Giá trị sử dụng",question:'Khái niệm "Giá trị sử dụng" của hàng hóa được định nghĩa như thế nào và bao gồm những mục đích thỏa mãn nào?',options:["Là công dụng của hàng hóa, có thể thỏa mãn những nhu cầu nhất định của con người (nhu cầu tiêu dùng cá nhân như bánh mì hoặc nhu cầu tiêu dùng sản xuất như khung sắt thép)","Là số lượng tiền tệ tối đa mà người mua sẵn sàng chi trả trên thị trường tự do","Là lượng calo hóa học chứa trong vật phẩm tiêu dùng nhanh","Là mức độ khan hiếm tương đối của tài nguyên khoáng sản trong tự nhiên"],correctIndex:0,explanation:"Giáo trình nêu rõ: Giá trị sử dụng là công dụng của hàng hóa, có thể thỏa mãn những nhu cầu nhất định của con người (ví dụ: bánh mì thỏa mãn nhu cầu ăn uống đời sống, khung sắt thép thỏa mãn nhu cầu xây dựng sản xuất).",quote:"Giáo trình Chương 2 • Mục 1.2: Giá trị sử dụng của hàng hóa"},{id:"q-c2-08",chapter:2,chapterTitle:"Chương 2: Hàng hóa & Thị trường",category:"2.1. Giá trị trao đổi",question:"Giá trị trao đổi của hàng hóa được định nghĩa là gì?",options:["Là một quan hệ về số lượng, là tỷ lệ theo đó một giá trị sử dụng loại này được trao đổi với những giá trị sử dụng loại khác","Là mức lãi suất chiết khấu do ngân hàng trung ương áp đặt cho giao dịch ngoại tệ","Là khối lượng thực tế cân nặng của hàng hóa khi đem ra chợ bán","Là tổng số ngày công lao động mà người mua phải làm thuê cho người bán"],correctIndex:0,explanation:"Giáo trình Chương 2 Mục 1.2 định nghĩa chuẩn: Để hiểu được giá trị hàng hóa phải đi từ giá trị trao đổi. Giá trị trao đổi là một quan hệ về số lượng, là tỷ lệ theo đó một giá trị sử dụng loại này được trao đổi với những giá trị sử dụng loại khác.",quote:"Giáo trình Chương 2 • Mục 1.2: Giá trị trao đổi"},{id:"q-c2-09",chapter:2,chapterTitle:"Chương 2: Hàng hóa & Thị trường",category:"2.1. Thí dụ 1m vải = 5kg thóc",question:'Trong phương trình trao đổi "1m vải = 5kg thóc", điều gì là cơ sở chung cho phép hai hàng hóa có giá trị sử dụng khác nhau hoàn toàn có thể trao đổi ngang giá với nhau?',options:["Chính lao động hao phí để tạo ra hàng hóa là cơ sở chung của việc trao đổi và nó tạo thành giá trị của hàng hóa","Do trọng lượng vật lý và kích thước hình học của 1m vải bằng đúng 5kg thóc","Do sự can thiệp chỉ định giá bán bắt buộc của cơ quan quản lý thị trường","Do sở thích ngẫu nhiên và cảm tính nhất thời của người mua và người bán"],correctIndex:0,explanation:"Giáo trình Chương 2 khẳng định: Vải và thóc là 2 giá trị sử dụng khác nhau, nhưng trao đổi được với nhau vì có một điểm chung: Cả 1m vải và 5kg thóc đều là sản phẩm của lao động; chính lao động hao phí để tạo ra chúng là cơ sở chung của trao đổi và tạo thành giá trị hàng hóa.",quote:"Giáo trình Chương 2 • Mục 1.2: Thí dụ 1m vải = 5kg thóc"},{id:"q-c2-10",chapter:2,chapterTitle:"Chương 2: Hàng hóa & Thị trường",category:"2.1. Bốn đặc tính của Giá trị",question:"Luận điểm nào sau đây KHÔNG PHẢI là một trong 4 đặc tính cốt lõi của Giá trị hàng hóa theo lý luận của C. Mác?",options:["Giá trị là thuộc tính tự nhiên thuần túy của vật thể và là phạm trù vĩnh viễn tồn tại trong mọi hình thái kinh tế","Là lao động xã hội của người sản xuất kết tinh trong hàng hóa","Giá trị là cơ sở của giá trị trao đổi (giá trị trao đổi là hình thức biểu hiện của giá trị)","Biểu hiện quan hệ kinh tế giữa những người sản xuất hàng hóa và là một phạm trù lịch sử"],correctIndex:0,explanation:'Giáo trình chỉ rõ 4 đặc tính của Giá trị: (1) Là lao động xã hội kết tinh; (2) Là cơ sở của giá trị trao đổi; (3) Biểu hiện quan hệ kinh tế giữa người sản xuất; (4) Là phạm trù lịch sử (chỉ tồn tại trong sản xuất hàng hóa). Do đó, coi giá trị là "thuộc tính tự nhiên thuần túy và phạm trù vĩnh viễn" là hoàn toàn sai (đó là đặc tính của giá trị sử dụng).',quote:"Giáo trình Chương 2 • Mục 1.2: Bốn đặc tính của Giá trị hàng hóa"},{id:"q-c2-11",chapter:2,chapterTitle:"Chương 2: Hàng hóa & Thị trường",category:"2.2. Tính hai mặt - Lao động cụ thể",question:"Lao động Cụ thể bắt nguồn từ Phân công lao động xã hội và mang 4 đặc trưng riêng biệt nào?",options:["Có mục đích riêng, có đối tượng riêng, có phương pháp/cách thức riêng, và có kết quả riêng","Có tiền lương riêng, có hợp đồng riêng, có trợ cấp riêng, và có địa điểm riêng","Có nhãn hiệu riêng, có bao bì riêng, có giá cả riêng, và có hóa đơn riêng","Có thuế suất riêng, có giấy phép riêng, có bảo hiểm riêng, và có chứng nhận xuất xứ riêng"],correctIndex:0,explanation:"Giáo trình nêu rõ: Lao động Cụ thể bắt nguồn từ Phân công lao động xã hội, có 4 đặc trưng riêng biệt: (1) Mục đích riêng, (2) Đối tượng riêng, (3) Phương pháp, cách thức riêng, (4) Kết quả riêng. Lao động cụ thể tạo ra Giá trị sử dụng của hàng hóa.",quote:"Giáo trình Chương 2 • Mục 2.1: Lao động Cụ thể & 4 đặc trưng riêng"},{id:"q-c2-12",chapter:2,chapterTitle:"Chương 2: Hàng hóa & Thị trường",category:"2.2. Tính vĩnh viễn của Lao động cụ thể",question:'Vì sao Kinh tế chính trị Mác – Lênin khẳng định "Lao động cụ thể là phạm trù vĩnh viễn"?',options:["Vì nó gắn liền với giá trị sử dụng, với vật phẩm và tồn tại dưới mọi hình thái kinh tế xã hội loài người","Vì người lao động luôn được ký hợp đồng lao động vô thời hạn với doanh nghiệp","Vì công cụ lao động cổ xưa không bao giờ bị hao mòn hay rỉ sét theo thời gian","Vì nhà nước cam kết bảo tồn vĩnh viễn mọi làng nghề thủ công truyền thống"],correctIndex:0,explanation:"Giáo trình nêu rõ: Lao động cụ thể là phạm trù vĩnh viễn vì nó gắn liền với giá trị sử dụng, với vật phẩm, tồn tại dưới mọi hình thái kinh tế. Chừng nào con người còn tồn tại và cần vật phẩm sinh hoạt thì chừng đó còn cần lao động cụ thể.",quote:"Giáo trình Chương 2 • Mục 2.1: Tính chất của Lao động cụ thể"},{id:"q-c2-13",chapter:2,chapterTitle:"Chương 2: Hàng hóa & Thị trường",category:"2.2. Bản chất Lao động trừu tượng",question:'Đặc điểm nào sau đây phản ánh chính xác bản chất của "Lao động trừu tượng"?',options:["Là sự hao phí sức lao động nói chung không kể đến hình thức cụ thể, tạo nên giá trị hàng hóa, là phạm trù lịch sử và phản ánh tính chất tư nhân cùng tính chất xã hội","Là hành vi suy nghĩ viển vông trừu tượng không tạo ra bất kỳ sản phẩm nào cho xã hội","Là quá trình thiết kế các bức tranh nghệ thuật trừu tượng của họa sĩ đương đại","Là thuộc tính tự nhiên vĩnh viễn không hề thay đổi trong mọi chế độ kinh tế"],correctIndex:0,explanation:"Giáo trình chỉ rõ 4 nội dung của Lao động trừu tượng: (1) Là hao phí SLĐ nói chung không kể hình thức cụ thể; (2) Tạo nên giá trị của hàng hóa; (3) Là một phạm trù lịch sử; (4) Phản ánh tính chất tư nhân và tính chất xã hội.",quote:"Giáo trình Chương 2 • Mục 2.1: Lao động trừu tượng"},{id:"q-c2-14",chapter:2,chapterTitle:"Chương 2: Hàng hóa & Thị trường",category:"2.2. Mâu thuẫn cơ bản của sản xuất hàng hóa",question:"Mâu thuẫn cơ bản của nền sản xuất hàng hóa giản đơn là mâu thuẫn giữa hai yếu tố nào?",options:["Mâu thuẫn giữa Lao động tư nhân (cá nhân) và Lao động xã hội","Mâu thuẫn giữa người bán hàng trực tuyến và các đơn vị giao hàng vận chuyển","Mâu thuẫn giữa đồng nội tệ và đồng tiền ảo kỹ thuật số","Mâu thuẫn giữa người tiêu dùng trẻ tuổi và người tiêu dùng cao tuổi"],correctIndex:0,explanation:"Giáo trình sơ đồ khẳng định: Mâu thuẫn cơ bản của sản xuất hàng hóa là mâu thuẫn giữa lao động tư nhân/cá nhân (biểu hiện qua lao động cụ thể) và lao động xã hội (biểu hiện qua lao động trừu tượng). Hàng hóa không bán được khi lao động tư nhân không được xã hội thừa nhận.",quote:"Giáo trình Chương 2 • Mục 2.1: Sơ đồ mâu thuẫn cơ bản của sản xuất hàng hóa"},{id:"q-c2-15",chapter:2,chapterTitle:"Chương 2: Hàng hóa & Thị trường",category:"2.3. Thời gian lao động xã hội cần thiết",question:"Thời gian lao động xã hội cần thiết là thời gian cần để sản xuất ra hàng hóa trong điều kiện bình thường của xã hội với 3 tiêu chí trung bình nào?",options:["Trình độ kỹ thuật trung bình, Trình độ khéo léo trung bình, và Cường độ lao động trung bình","Mức lương tối thiểu trung bình, Độ tuổi trung bình, và Thời gian nghỉ phép trung bình","Chi phí tiếp thị trung bình, Tỷ lệ chiết khấu trung bình, và Giá thuê mặt bằng trung bình","Chỉ số lạm phát trung bình, Lãi suất vay trung bình, và Tỷ giá hối đoái trung bình"],correctIndex:0,explanation:"Giáo trình Lượng giá trị hàng hóa chỉ rõ: Thời gian lao động xã hội cần thiết được xác định trong điều kiện bình thường của xã hội với 3 tiêu chuẩn: Trình độ kỹ thuật trung bình, Trình độ khéo léo trung bình và Cường độ lao động trung bình.",quote:"Giáo trình Chương 2 • Mục 2.2: Thời gian lao động xã hội cần thiết"},{id:"q-c2-16",chapter:2,chapterTitle:"Chương 2: Hàng hóa & Thị trường",category:"2.3. Ba nhân tố ảnh hưởng lượng giá trị",question:"Ba nhân tố chủ yếu ảnh hưởng trực tiếp đến lượng giá trị của hàng hóa bao gồm những yếu tố nào?",options:["Tỷ lệ nghịch với năng suất lao động, Tỷ lệ thuận với số lượng lao động kết tinh, và Lao động phức tạp là bội số của lao động giản đơn","Tỷ lệ thuận với giá vàng, Tỷ lệ nghịch với chỉ số chứng khoán, và Tỷ lệ thuận với số lượng tài khoản ngân hàng","Tỷ lệ thuận với ngân sách quảng cáo, Tỷ lệ nghịch với số lượng đối thủ cạnh tranh, và Lao động giản đơn có giá trị cao hơn lao động phức tạp","Tỷ lệ nghịch với thuế giá trị gia tăng, Tỷ lệ thuận với khoảng cách vận chuyển, và Lao động chân tay luôn tạo nhiều giá trị hơn lao động trí óc"],correctIndex:0,explanation:"Giáo trình nêu rõ 3 nhân tố: (1) Tỷ lệ nghịch với năng suất lao động; (2) Tỷ lệ thuận với số lượng lao động kết tinh; (3) Lao động phức tạp là bội số của lao động giản đơn.",quote:"Giáo trình Chương 2 • Mục 2.2: Các nhân tố ảnh hưởng đến lượng giá trị"},{id:"q-c4-01",chapter:4,chapterTitle:"Chương 4: Cạnh tranh & Độc quyền",category:"4.1. Độc quyền trong CNTB",question:"Nguyên nhân cơ bản dẫn tới sự chuyển biến từ chủ nghĩa tư bản tự do cạnh tranh sang chủ nghĩa tư bản độc quyền là gì?",options:["Do sự phát triển vượt bậc của LLSX dưới tác động của tiến bộ KH-CN thúc đẩy quá trình tích tụ và tập trung sản xuất quy mô lớn","Do tất cả các ngân hàng thương mại trên thế giới tự nguyện sáp nhập thành một ngân hàng duy nhất","Do các nhà nước tư bản ban hành luật cấm người dân tham gia buôn bán kinh doanh tự do","Do sự cạn kiệt hoàn toàn của mọi nguồn năng lượng tự nhiên trên hành tinh"],correctIndex:0,explanation:"V.I. Lênin đã chỉ ra: Tự do cạnh tranh đẻ ra tập trung sản xuất và sự tập trung sản xuất này, khi phát triển đến một mức độ nhất định, tất yếu dẫn tới độc quyền.",quote:"Giáo trình Chương 4 • Mục 4.1: Nguyên nhân hình thành độc quyền"},{id:"q-c2-17",chapter:2,chapterTitle:"Chương 2: Hàng hóa & Thị trường",category:"2.4. Tiến trình các hình thái giá trị",question:"Lịch sử phát triển của các hình thái giá trị dẫn tới sự ra đời của Tiền tệ đã trải qua 4 giai đoạn tuần tự nào?",options:["Hình thái giản đơn (ngẫu nhiên) ➔ Hình thái mở rộng (đầy đủ) ➔ Hình thái chung của giá trị ➔ Hình thái tiền tệ","Hình thái tiền giấy ➔ Hình thái thẻ tín dụng ➔ Hình thái tiền số ➔ Hình thái đổi hàng trực tiếp","Hình thái độc quyền ➔ Hình thái tự do ➔ Hình thái bao cấp ➔ Hình thái kinh tế mở","Hình thái phong kiến ➔ Hình thái tư bản ➔ Hình thái đế quốc ➔ Hình thái toàn cầu hóa"],correctIndex:0,explanation:"Giáo trình.3 Tiền tệ chỉ rõ 4 hình thái giá trị: (1) Hình thái giản đơn/ngẫu nhiên; (2) Hình thái mở rộng/đầy đủ; (3) Hình thái chung của giá trị; (4) Hình thái tiền tệ.",quote:"Giáo trình Chương 2 • Mục 1.3: Các hình thái biểu hiện của giá trị"},{id:"q-c2-18",chapter:2,chapterTitle:"Chương 2: Hàng hóa & Thị trường",category:"2.4. Hình thái chung của giá trị",question:"Hình thái chung của giá trị được biểu hiện qua công thức trao đổi đặc trưng nào?",options:["1 cái áo = 10 đấu chè = 40 đấu cà phê = 0,2 gam vàng = } 20 vuông vải (vải làm vật ngang giá chung)","1 mét vải = 5 kg thóc (trao đổi trực tiếp giản đơn)","1 ounce vàng = 2.000 Đô la Mỹ","1 tấn lúa mì = 2 con cừu"],correctIndex:0,explanation:"Giáo trình hình thái chung nêu rõ: Giá trị của mọi hàng hóa đều được biểu hiện ở GTSD của một hàng hóa đóng vai trò làm vật ngang giá chung: 1 cái áo = 10 đấu chè = 40 đấu cà phê = 0,2 gam vàng = } 20 vuông vải.",quote:"Giáo trình Chương 2 • Mục 1.3: Hình thái chung của giá trị"},{id:"q-c2-19",chapter:2,chapterTitle:"Chương 2: Hàng hóa & Thị trường",category:"2.4. Bản chất tiền tệ & Chế độ song bản vị",question:"Vì sao vàng và bạc được lịch sử lựa chọn để cố định làm vật ngang giá chung độc quyền (tiền tệ)?",options:["Vì cùng là hàng hóa có giá trị và có ưu thế tự nhiên: thuần nhất về chất, dễ chia nhỏ gộp lại, không mòn gỉ, giá trị cao trong thể tích nhỏ","Vì chính phủ các nước ban hành sắc lệnh cưỡng chế người dân phải dùng vàng bạc","Vì số lượng vàng bạc trong lòng đất là vô tận không bao giờ cạn kiệt","Vì mọi loại ngũ cốc và vải vóc đều tự động biến thành vàng sau một thời gian bảo quản"],correctIndex:0,explanation:"Giáo trình chỉ rõ: Bạc và vàng cùng làm tiền tệ (chế độ song bản vị) vì: Cùng là hàng hóa và có ưu thế tự nhiên (thuần nhất, dễ chia nhỏ, không mòn gỉ, giá trị cao trong thể tích nhỏ).",quote:"Giáo trình Chương 2 • Mục 1.3: Chế độ song bản vị và ưu thế của vàng/bạc"},{id:"q-c2-20",chapter:2,chapterTitle:"Chương 2: Hàng hóa & Thị trường",category:"2.4. Các chủ thể tham gia thị trường",question:"Bốn chủ thể cơ bản tham gia vào nền kinh tế thị trường hiện đại gồm những ai?",options:["Người sản xuất, Người tiêu dùng, Các chủ thể trung gian, và Nhà nước","Chủ ngân hàng, Người vay tiền, Cảnh sát kinh tế, và Tòa án","Nông dân, Thợ thủ công, Địa chủ, và Thương nhân nước ngoài","Công ty công nghệ, Người sáng tạo nội dung, Kỹ sư AI, và Nhà đầu tư mạo hiểm"],correctIndex:0,explanation:"Session 7 phân tích 4 nhóm chủ thể chính: Người sản xuất (tạo ra hàng hóa), Người tiêu dùng (định hướng sản xuất), Chủ thể trung gian (kết nối lưu thông, logistics), và Nhà nước (quản lý, điều tiết vĩ mô).",quote:"Giáo trình Chương 2 • Session 7: Các chủ thể tham gia thị trường"},{id:"q-c3-08",chapter:3,chapterTitle:"Chương 3: Giá trị thặng dư",category:"3.2. Cấu tạo hữu cơ của tư bản",question:"Cấu tạo hữu cơ của tư bản (ký hiệu c/v) là gì và có xu hướng biến động như thế nào khi kỹ thuật phát triển?",options:["Là cấu tạo giá trị do cấu tạo kỹ thuật quyết định và phản ánh sự thay đổi của cấu tạo kỹ thuật; có xu hướng ngày càng tăng (c/v tăng)","Là tỷ lệ giữa tiền lương công nhân và lợi nhuận của chủ doanh nghiệp; luôn luôn giữ cố định","Là tổng số giờ làm việc trong ngày chia cho số lượng máy móc thiết bị; có xu hướng giảm","Là tỷ lệ chia cổ tức hàng năm của các công ty cổ phần niêm yết"],correctIndex:0,explanation:"Cấu tạo hữu cơ c/v phản ánh sự kết hợp giữa tư bản bất biến (c) và tư bản khả biến (v). Cùng với sự tiến bộ của KH-CN, tỷ lệ máy móc thiết bị (c) tăng nhanh hơn nhân công (v), làm c/v có xu hướng ngày càng tăng.",quote:"Giáo trình Chương 3 • Session 10: Cấu tạo hữu cơ của tư bản (c/v)"},{id:"q-c3-09",chapter:3,chapterTitle:"Chương 3: Giá trị thặng dư",category:"3.2. Tích tụ vs Tập trung tư bản",question:'Điểm khác biệt căn bản giữa "Tích tụ tư bản" và "Tập trung tư bản" là gì?',options:["Tích tụ làm tăng cả quy mô tư bản cá biệt lẫn tổng tư bản xã hội; còn Tập trung chỉ làm tăng quy mô tư bản cá biệt thông qua sáp nhập mà không làm tăng ngay tổng tư bản xã hội","Tích tụ chỉ xảy ra trong nông nghiệp, còn tập trung chỉ diễn ra trong các công ty công nghệ","Tích tụ do nhà nước thực hiện, còn tập trung do người lao động tự nguyện đóng góp","Tích tụ làm giảm số lượng doanh nghiệp lớn, còn tập trung sinh ra hàng triệu hộ kinh doanh nhỏ"],correctIndex:0,explanation:"Giáo trình phân biệt rõ: Tích tụ tư bản là sự tăng quy mô tư bản cá biệt bằng tích lũy GTTD (tổng tư bản XH tăng). Tập trung tư bản là sự kết hợp nhiều tư bản nhỏ thành tư bản lớn qua cạnh tranh và tín dụng (tổng tư bản XH không đổi ngay lúc sáp nhập).",quote:"Giáo trình Chương 3 • Session 10: Tích tụ và tập trung tư bản"},{id:"q-c3-10",chapter:3,chapterTitle:"Chương 3: Giá trị thặng dư",category:"3.3. Tỷ suất lợi nhuận bình quân",question:"Sự cạnh tranh giữa các ngành sản xuất khác nhau trong CNTB dẫn tới kết quả tất yếu nào?",options:["Hình thành Tỷ suất lợi nhuận bình quân (p̄) và Giá trị hàng hóa chuyển hóa thành Giá cả sản xuất (k + p̄)","Tất cả các ngành sản xuất đều bị phá sản và nền kinh tế quay trở lại thời kỳ đổi hàng","Nhà nước ban hành lệnh cấm doanh nghiệp chuyển dịch vốn đầu tư giữa các ngành","Mọi sản phẩm trên thị trường đều được bán theo giá do người tiêu dùng tự do quyết định"],correctIndex:0,explanation:"Cạnh tranh giữa các ngành (luân chuyển vốn từ ngành tỷ suất thấp sang ngành tỷ suất cao) dẫn tới sự san bằng các tỷ suất lợi nhuận thành tỷ suất lợi nhuận bình quân (p̄), giá trị chuyển hóa thành giá cả sản xuất = k + p̄.",quote:"Giáo trình Chương 3 • Session 11: Lợi nhuận bình quân và giá cả sản xuất"},{id:"q-c4-02",chapter:4,chapterTitle:"Chương 4: Cạnh tranh & Độc quyền",category:"4.1. Các tổ chức độc quyền",question:"Bốn hình thức tổ chức độc quyền cơ bản phát triển từ thấp đến cao trong lịch sử là gì?",options:["Cartel ➔ Syndicate ➔ Trust ➔ Consortium","Công ty TNHH ➔ Công ty Cổ phần ➔ Tập đoàn đa quốc gia ➔ Hợp tác xã","Kinh tế gia đình ➔ Hộ kinh doanh ➔ Doanh nghiệp tư nhân ➔ Doanh nghiệp nhà nước","Startup ➔ Doanh nghiệp vừa ➔ Doanh nghiệp lớn ➔ Siêu tập đoàn"],correctIndex:0,explanation:"Giáo trình chỉ rõ 4 hình thức tổ chức độc quyền theo thứ tự phát triển: Cartel (thỏa thuận giá/thị phần) -> Syndicate (chung đầu mối tiêu thụ) -> Trust (thống nhất cả SX và lưu thông) -> Consortium (liên minh đa ngành khổng lồ).",quote:"Giáo trình Chương 4 • Session 14: Các hình thức tổ chức độc quyền"},{id:"q-c4-03",chapter:4,chapterTitle:"Chương 4: Cạnh tranh & Độc quyền",category:"4.1. Tư bản tài chính & Đầu sỏ tài chính",question:"Tư bản tài chính được hình thành từ quá trình lịch sử nào theo phân tích của V.I. Lênin?",options:["Sự thâm nhập và dung hợp lẫn nhau giữa tổ chức độc quyền ngân hàng và tổ chức độc quyền công nghiệp","Sự hợp nhất giữa quỹ tiền tệ quốc tế IMF và ngân hàng thế giới WB","Quá trình in thêm thật nhiều tiền mặt giấy và tiền polymer của ngân hàng nhà nước","Sự đóng góp tiền tiết kiệm của hàng triệu công nhân trong các nhà máy"],correctIndex:0,explanation:'Lênin chỉ rõ: Tư bản tài chính là sự xâm nhập liên kết lẫn nhau giữa các tổ chức độc quyền ngân hàng với các tổ chức độc quyền công nghiệp. Đầu sỏ tài chính thống trị kinh tế và chính trị thông qua "chế độ tham dự".',quote:"Giáo trình Chương 4 • Session 14: Tư bản tài chính và đầu sỏ tài chính"},{id:"q-c4-04",chapter:4,chapterTitle:"Chương 4: Cạnh tranh & Độc quyền",category:"4.1. Xuất khẩu tư bản",question:'Bản chất của "Xuất khẩu tư bản" - một trong 5 đặc điểm kinh tế của độc quyền - là gì?',options:["Xuất khẩu giá trị ra nước ngoài (đầu tư trực tiếp FDI hoặc cho vay FPI) nhằm chiếm đoạt giá trị thặng dư ở các nước nhập khẩu tư bản","Chỉ xuất khẩu các container hàng hóa tiêu dùng ra các siêu thị nước ngoài","Đưa công nhân và kỹ sư trong nước ra nước ngoài đi du lịch nghỉ dưỡng định kỳ","Tặng không các thiết bị máy móc cũ kỹ cho các nước nghèo mà không thu tiền"],correctIndex:0,explanation:"Giáo trình phân biệt: Xuất khẩu hàng hóa là mang hàng ra bán ở nước ngoài thu tiền; còn Xuất khẩu tư bản là đưa tư bản ra nước ngoài để bóc lột sức lao động và tài nguyên ở nước sở tại, thu về giá trị thặng dư cao.",quote:"Giáo trình Chương 4 • Session 14: Xuất khẩu tư bản"},{id:"q-c4-05",chapter:4,chapterTitle:"Chương 4: Cạnh tranh & Độc quyền",category:"4.2. Vai trò lịch sử của CNTB",question:"Giới hạn lịch sử lớn nhất của chủ nghĩa tư bản được kinh tế chính trị Mác – Lênin chỉ ra là gì?",options:["Mâu thuẫn nan giải giữa tính chất xã hội hóa cao của LLSX với chế độ chiếm hữu tư nhân TBCN về tư liệu sản xuất","Không đủ nguồn nhân lực có trình độ cử nhân đại học để vận hành máy móc","Sự cạn kiệt của giấy in tiền trên phạm vi toàn cầu","Sự thiếu hụt trầm trọng các tuyến cáp quang biển quốc tế"],correctIndex:0,explanation:"Giáo trình khẳng định giới hạn lịch sử của CNTB: Mâu thuẫn cơ bản giữa tính chất và trình độ xã hội hóa ngày càng cao của LLSX với chế độ chiếm hữu tư nhân TBCN đối với TLSX, dẫn tới bất bình đẳng sâu sắc và khủng hoảng kinh tế chu kỳ.",quote:"Giáo trình Chương 4 • Session 16: Giới hạn lịch sử của chủ nghĩa tư bản"},{id:"q-c5-07",chapter:5,chapterTitle:"Chương 5: KTTT định hướng XHCN & Lợi ích KT",category:"5.2. Hoàn thiện thể chế kinh tế thị trường",question:"Nội dung trọng tâm của việc hoàn thiện thể chế kinh tế thị trường định hướng XHCN ở Việt Nam là gì?",options:["Hoàn thiện thể chế về sở hữu, phát triển đồng bộ các yếu tố thị trường và các loại thị trường, gắn tăng trưởng kinh tế với tiến bộ và công bằng xã hội","Xóa bỏ hoàn toàn kinh tế tư nhân và chỉ duy trì các doanh nghiệp 100% vốn nhà nước","Tự do hóa hoàn toàn và xóa bỏ vai trò quản lý điều tiết vĩ mô của nhà nước","Cấm các ngân hàng thương mại cho vay vốn phát triển công nghệ cao"],correctIndex:0,explanation:"Session 19 nêu rõ các nội dung hoàn thiện: (1) Thể chế sở hữu và các thành phần kinh tế; (2) Phát triển đồng bộ các loại thị trường; (3) Gắn tăng trưởng với tiến bộ, công bằng xã hội; (4) Nâng cao năng lực lãnh đạo và quản lý của Nhà nước.",quote:"Giáo trình Chương 5 • Session 19: Hoàn thiện thể chế KTTT định hướng XHCN"},{id:"q-c5-08",chapter:5,chapterTitle:"Chương 5: KTTT định hướng XHCN & Lợi ích KT",category:"5.3. Quan hệ lợi ích kinh tế",question:"Đâu là động lực trực tiếp và mạnh mẽ nhất thúc đẩy các chủ thể tham gia vào hoạt động kinh tế?",options:["Lợi ích kinh tế thiết thân của mỗi cá nhân và tổ chức","Lời khen thưởng tinh thần trên bảng tin của cơ quan","Các danh hiệu thi đua ngắn hạn không gắn với thu nhập","Sự tò mò ngẫu nhiên về thị trường chứng khoán"],correctIndex:0,explanation:"Lợi ích kinh tế là biểu hiện cụ thể của quan hệ sản xuất, là động lực trực tiếp của con người trong các hoạt động kinh tế - xã hội. Lợi ích cá nhân là cơ sở, kết hợp hài hòa với lợi ích tập thể và xã hội.",quote:"Giáo trình Chương 5 • Session 20: Bản chất và vai trò của lợi ích kinh tế"},{id:"q-c6-06",chapter:6,chapterTitle:"Chương 6: CNH - HĐH & Hội nhập kinh tế",category:"6.1. Bốn cuộc cách mạng công nghiệp",question:"Cuộc Cách mạng công nghiệp lần thứ tư (CMCN 4.0) có đặc trưng cốt lõi nào?",options:["Dựa trên nền tảng kỹ thuật số, tích hợp hệ thống vật lý - không gian mạng (CPS), trí tuệ nhân tạo (AI), dữ liệu lớn (Big Data) và Internet vạn vật (IoT)","Sử dụng động cơ hơi nước và cơ khí hóa ngành dệt may","Ứng dụng điện năng và sản xuất hàng loạt trên dây chuyền băng chuyền","Sự xuất hiện của động cơ đốt trong và mạng lưới đường sắt xuyên lục địa"],correctIndex:0,explanation:"Giáo trình hệ thống hóa 4 cuộc CMCN: CMCN 1.0 (máy hơi nước, cơ khí), CMCN 2.0 (điện năng, sản xuất dây chuyền), CMCN 3.0 (máy tính, tự động hóa, Internet), CMCN 4.0 (AI, Big Data, IoT, hệ thống vật lý không gian mạng).",quote:"Giáo trình Chương 6 • Session 24: Khái quát các cuộc cách mạng công nghiệp"},{id:"q-c6-07",chapter:6,chapterTitle:"Chương 6: CNH - HĐH & Hội nhập kinh tế",category:"6.2. Hội nhập kinh tế quốc tế",question:'Mối quan hệ giữa "Hội nhập kinh tế quốc tế" và "Xây dựng nền kinh tế độc lập tự chủ" ở Việt Nam được xác định như thế nào?',options:["Là mối quan hệ biện chứng thống nhất: Độc lập tự chủ là tiền đề để hội nhập hiệu quả; hội nhập thành công tạo tiềm lực củng cố vững chắc nền độc lập tự chủ","Là hai quá trình đối lập, bài trừ lẫn nhau: Muốn độc lập tự chủ thì tuyệt đối phải đóng cửa không hội nhập","Chỉ cần hội nhập mở cửa hoàn toàn, độc lập tự chủ kinh tế không còn ý nghĩa trong thế kỷ XXI","Nền kinh tế độc lập tự chủ chỉ cần tự sản xuất nông nghiệp, không cần tham gia chuỗi giá trị toàn cầu"],correctIndex:0,explanation:"Giáo trình khẳng định: Giữ vững độc lập tự chủ và tích cực, chủ động hội nhập kinh tế quốc tế là thể thống nhất biện chứng; mở rộng hội nhập để tăng thế và lực, giữ vững độc lập để không bị chệch hướng và lệ thuộc.",quote:"Giáo trình Chương 6 • Session 29: Xây dựng nền kinh tế độc lập tự chủ trong hội nhập"}];function $n(i,n){let h="lobby",a="focus",t=[],e=0,s=0,g=0,p=0,m=0,v=[],o=0;const r=20;let u=r,q=null,k=!1,b=!1,T={fiftyFifty:!0,freezeTime:!0,hint:!0},M=null,G=[];function d(y){const f=[...y];for(let S=f.length-1;S>0;S--){const K=Math.floor(Math.random()*(S+1));[f[S],f[K]]=[f[K],f[S]]}return f}function N(){let y=[];if(a==="focus"){const f=d(F.filter(D=>D.chapter===1)).slice(0,8),S=d(F.filter(D=>D.chapter===2)).slice(0,15),K=d(F.filter(D=>D.chapter===3)).slice(0,9),V=d(F.filter(D=>D.chapter===4)).slice(0,5),R=d(F.filter(D=>D.chapter===5)).slice(0,7),_=d(F.filter(D=>D.chapter===6)).slice(0,6);y=d([...f,...S,...K,...V,...R,..._])}else a==="all"?y=d(F).slice(0,25):y=d(F).slice(0,10);t=y,e=0,s=0,g=0,p=0,m=0,v=[],o=0,T={fiftyFifty:!0,freezeTime:!0,hint:!0},M=null,G=[],h="playing",l.playClick(),I(0)}function I(y){e=y,b=!1,k=!1,M=null,G=[],u=r,o=0,clearInterval(q),q=setInterval(()=>{if(!k&&!b){u--;const f=i.querySelector("#quiz-timer-fill"),S=i.querySelector("#quiz-timer-num");if(f){const K=u/r*100;f.style.width=`${K}%`,u<=5?f.style.background="var(--accent-crimson)":u<=10&&(f.style.background="var(--accent-gold)")}S&&(S.textContent=`${u}s`),u<=0&&(clearInterval(q),w())}},1e3),L()}function $(y){if(b||G.includes(y))return;b=!0,clearInterval(q);const f=t[e],S=y===f.correctIndex,K=r-u;let V=0;if(S){m++,g++,g>p&&(p=g);const R=Math.round(u/r*500),_=g>=5?2:g>=3?1.5:g>=2?1.2:1;V=Math.round((1e3+R)*_),s+=V,o=V,l.playDialecticalSuccess(),H.state.xp+=25}else g=0,o=0,l.playWarning(),H.state.xp+=5;v.push({question:f,selectedIndex:y,isCorrect:S,timeSpent:K,pointsGained:V}),L()}function w(){if(b)return;b=!0,g=0,o=0,l.playWarning();const y=t[e];v.push({question:y,selectedIndex:-1,isCorrect:!1,timeSpent:r,pointsGained:0}),L()}function P(){if(e+1<t.length)I(e+1);else{clearInterval(q),h="summary",l.playFanfare(),H.state.xp+=Math.round(s/50);const y=Math.round(m/t.length*100);H.recordQuizCompleted(y),L()}}function U(){if(!T.fiftyFifty||b)return;T.fiftyFifty=!1,l.playClick();const y=t[e],f=[0,1,2,3].filter(K=>K!==y.correctIndex),S=d(f);G=[S[0],S[1]],L()}function c(){!T.freezeTime||b||(T.freezeTime=!1,l.playClick(),u=Math.min(r,u+15),L())}function x(){if(!T.hint||b)return;T.hint=!1,l.playClick(),M=t[e].quote||"Tập trung vào bản chất quy luật giá trị và vai trò của sức lao động!",L()}function C(y){if(h==="playing")if(b)(y.key==="Enter"||y.key===" "||y.key==="ArrowRight")&&(y.preventDefault(),l.playClick(),P());else{const f=y.key.toUpperCase();f==="A"||f==="1"?$(0):f==="B"||f==="2"?$(1):f==="C"||f==="3"?$(2):(f==="D"||f==="4")&&$(3)}}window.removeEventListener("keydown",C),window.addEventListener("keydown",C);function L(){if(h==="lobby"){i.innerHTML=`
        <div class="quiz-arena-container animate-fade-in">
          <!-- Top Nav -->
          <div class="quiz-top-bar">
            <button class="back-to-map-btn" id="quiz-lobby-back-btn">
              <span>← Quay lại bản đồ hành trình</span>
            </button>
            <div class="badge-pill" style="background: linear-gradient(135deg, #8b5cf6, #ec4899); color: #ffffff; font-weight: 800;">
              🎮 QUIZIZZ ARENA MLN122
            </div>
          </div>

          <!-- Hero Lobby Banner -->
          <div class="quiz-lobby-card">
            <div class="lobby-badge">ĐẤU TRƯỜNG TRI THỨC 4.0</div>
            <h2 class="lobby-title">ĐẤU TRƯỜNG QUIZ MLN122</h2>
            <p class="lobby-desc">
              Trải nghiệm đấu trường trắc nghiệm 4 đáp án A – B – C – D chuẩn phong cách Quizizz sôi động! Trả lời thần tốc, duy trì chuỗi thắng (Streak Combo) và làm chủ toàn diện các quy luật Kinh tế chính trị Mác – Lênin.
            </p>

            <!-- Mode Selector -->
            <div class="quiz-mode-grid">
              <div class="quiz-mode-pill ${a==="focus"?"selected":""}" data-mode="focus">
                <div class="mode-icon">🎯</div>
                <div class="mode-info">
                  <strong>Trọng Tâm Chuyên Đề</strong>
                  <span>50 câu từ Chương 1 đến Chương 6</span>
                </div>
              </div>

              <div class="quiz-mode-pill ${a==="all"?"selected":""}" data-mode="all">
                <div class="mode-icon">🏆</div>
                <div class="mode-info">
                  <strong>Đấu Trường Toàn Diện</strong>
                  <span>25 câu bao quát 6 chương</span>
                </div>
              </div>

              <div class="quiz-mode-pill ${a==="quick"?"selected":""}" data-mode="quick">
                <div class="mode-icon">⚡</div>
                <div class="mode-info">
                  <strong>Vượt Ải Cấp Tốc</strong>
                  <span>10 câu ngẫu nhiên • 3 phút</span>
                </div>
              </div>
            </div>

            <!-- Start Button -->
            <div style="margin-top: 1rem;">
              <button class="btn-quiz-start" id="quiz-start-btn">
                <span>🚀 BẮT ĐẦU VÀO ĐẤU TRƯỜNG →</span>
              </button>
            </div>
          </div>
        </div>
      `,document.getElementById("quiz-lobby-back-btn").addEventListener("click",()=>{window.removeEventListener("keydown",C),l.playClick(),n()}),i.querySelectorAll(".quiz-mode-pill[data-mode]").forEach(y=>{y.addEventListener("click",()=>{l.playClick(),a=y.getAttribute("data-mode"),L()})}),document.getElementById("quiz-start-btn").addEventListener("click",N);return}if(h==="playing"){const y=t[e],f=u/r*100,S=v[v.length-1],K=[{letter:"A",colorClass:"opt-red",label:"Đáp án A"},{letter:"B",colorClass:"opt-blue",label:"Đáp án B"},{letter:"C",colorClass:"opt-yellow",label:"Đáp án C"},{letter:"D",colorClass:"opt-green",label:"Đáp án D"}];let V="";y.options.forEach((Q,j)=>{const xn=G.includes(j),hn=K[j]||K[0];let J="",cn=hn.letter,an="";b&&(j===y.correctIndex?(J="opt-correct",cn="✓",an='<span class="opt-result-tag correct">ĐÁP ÁN ĐÚNG</span>'):S&&S.selectedIndex===j?(J="opt-wrong",cn="✕",an='<span class="opt-result-tag wrong">BẠN ĐÃ CHỌN</span>'):J="opt-dimmed"),xn?V+=`
            <div class="quiz-option-card opt-hidden">
              <div class="opt-letter-badge" style="opacity: 0.3;">${hn.letter}</div>
              <span style="opacity: 0.4; font-size: 0.88rem;">Đã loại trừ 50:50</span>
            </div>
          `:V+=`
            <button class="quiz-option-card ${hn.colorClass} ${J}" data-option-idx="${j}" ${b?"disabled":""}>
              <div class="opt-letter-badge">${cn}</div>
              <div class="opt-content-wrap">
                <div class="opt-text-label">${Q}</div>
                ${an}
              </div>
            </button>
          `});let R="";if(b){const Q=S&&S.isCorrect;R=`
          <div class="quiz-feedback-box ${Q?"correct":"wrong"} animate-fade-in">
            <div class="feedback-head-row">
              <div class="feedback-title">
                ${Q?`🎉 CHÍNH XÁC! +${S.pointsGained.toLocaleString()} PTS!`:S.selectedIndex===-1?"⏰ HẾT THỜI GIAN!":"❌ CHƯA CHÍNH XÁC!"}
              </div>
              <button class="btn-quiz-next animate-bounce-subtle" id="quiz-next-btn">
                <span>CÂU TIẾP THEO →</span>
              </button>
            </div>
            <p class="feedback-explanation">
              <strong>Giải thích:</strong> ${y.explanation}
            </p>
            <div class="feedback-quote">
              📖 <em>${y.quote}</em>
            </div>
          </div>
        `}i.innerHTML=`
        <div class="quiz-arena-container animate-fade-in">
          <!-- Top Game HUD Bar -->
          <div class="quiz-play-hud">
            <div class="hud-left-stats">
              <button class="quiz-exit-icon-btn" id="quiz-exit-btn" title="Thoát về bản đồ">✕</button>
              <span class="quiz-q-counter">CÂU ${e+1} / ${t.length}</span>
            </div>

            <div class="hud-center-score">
              <span class="quiz-score-val">⭐ ${s.toLocaleString()} PTS</span>
              ${g>=2?`<span class="quiz-streak-pill">🔥 STREAK x${g}!</span>`:""}
              ${o>0?`<span class="floating-score-badge animate-float-fade">+${o.toLocaleString()}!</span>`:""}
            </div>

            <!-- Lifeline Buttons -->
            <div class="hud-lifelines">
              <button class="quiz-lifeline-btn ${T.fiftyFifty?"":"used"}" id="ll-fifty" title="Loại 2 đáp án sai" ${!T.fiftyFifty||b?"disabled":""}>
                💡 50:50
              </button>
              <button class="quiz-lifeline-btn ${T.freezeTime?"":"used"}" id="ll-freeze" title="Đóng băng thêm 15 giây" ${!T.freezeTime||b?"disabled":""}>
                ⏳ +15s
              </button>
              <button class="quiz-lifeline-btn ${T.hint?"":"used"}" id="ll-hint" title="Gợi ý Mác – Lênin" ${!T.hint||b?"disabled":""}>
                🔍 Gợi ý
              </button>
            </div>
          </div>

          <!-- Countdown Timer Bar -->
          <div class="quiz-timer-track">
            <div id="quiz-timer-fill" class="quiz-timer-fill" style="width: ${f}%;"></div>
          </div>
          <div class="quiz-timer-sub">
            <span>Thời gian còn lại:</span>
            <strong id="quiz-timer-num">${u}s</strong>
          </div>

          <!-- Hint Banner if used -->
          ${M?`
            <div class="quiz-hint-banner animate-fade-in">
              <span>🔍 <strong>Lăng kính Mác – Lênin:</strong> ${M}</span>
            </div>
          `:""}

          <!-- Question Prompt Card -->
          <div class="quiz-question-card animate-slide-up">
            <div class="quiz-category-tag">${y.chapterTitle} • ${y.category}</div>
            <h3 class="quiz-question-text">${y.question}</h3>
          </div>

          <!-- 4 Quizizz Option Cards: A, B, C, D -->
          <div class="quiz-options-grid">
            ${V}
          </div>

          <!-- Post Answer Feedback -->
          ${R}
        </div>
      `,document.getElementById("quiz-exit-btn").addEventListener("click",()=>{confirm("Bạn có muốn tạm dừng và quay lại bản đồ không?")&&(clearInterval(q),window.removeEventListener("keydown",C),n())});const _=document.getElementById("quiz-next-btn");_&&_.addEventListener("click",()=>{l.playClick(),P()});const D=document.getElementById("ll-fifty");D&&D.addEventListener("click",U);const X=document.getElementById("ll-freeze");X&&X.addEventListener("click",c);const Z=document.getElementById("ll-hint");Z&&Z.addEventListener("click",x),i.querySelectorAll(".quiz-option-card[data-option-idx]").forEach(Q=>{Q.addEventListener("click",()=>{const j=parseInt(Q.getAttribute("data-option-idx"),10);$(j)})});return}if(h==="summary"){window.removeEventListener("keydown",C);const y=Math.round(m/t.length*100);let f="BẬC THẦY KINH TẾ CHÍNH TRỊ MLN122",S="🥇 ĐẠI KIỆN TƯỚNG MLN122",K="rank-gold";y<50?(f="CẦN ÔN LUYỆN THÊM KIẾN THỨC SỔ TAY",S="💡 HỌC VIÊN TIỀM NĂNG",K="rank-bronze"):y<75?(f="HỌC GIẢ KINH TẾ CHÍNH TRỊ ĐẠT CHUẨN",S="🥉 HỌC GIẢ ĐẠT CHUẨN",K="rank-silver"):y<90&&(f="CHUYÊN GIA LÝ LUẬN MÁC – LÊNIN",S="🥈 CHUYÊN GIA MLN122",K="rank-silver");const V=["A","B","C","D"];let R="";v.forEach((_,D)=>{const X=_.question,Z=V[X.correctIndex]||"A",Q=_.selectedIndex>=0?V[_.selectedIndex]||"?":"Hết giờ";R+=`
          <div class="review-item-card ${_.isCorrect?"correct":"wrong"}">
            <div class="review-item-head">
              <span class="review-num">Câu #${D+1} • ${X.category}</span>
              <span class="review-status">${_.isCorrect?"✓ Đúng (+ "+_.pointsGained.toLocaleString()+" PTS)":"✕ Sai"}</span>
            </div>
            <div class="review-question">${X.question}</div>
            <div class="review-answer-row">
              <div>
                <strong>Đáp án đúng [${Z}]:</strong> <span style="color: var(--accent-emerald-dark);">${X.options[X.correctIndex]}</span>
              </div>
              ${_.isCorrect?"":`
                <div style="margin-top: 0.35rem;">
                  <strong>Bạn đã chọn [${Q}]:</strong> <span style="color: var(--accent-crimson);">${_.selectedIndex>=0?X.options[_.selectedIndex]:"Hết thời gian"}</span>
                </div>
              `}
            </div>
            <p class="review-explanation">${X.explanation}</p>
          </div>
        `}),i.innerHTML=`
        <div class="quiz-arena-container animate-fade-in">
          <div class="quiz-summary-card">
            <div class="summary-trophy">🏆✨</div>
            <span class="badge-pill ${K}" style="font-size: 0.95rem; padding: 0.5rem 1.4rem; font-weight: 800;">
              ${S}
            </span>
            <h2 class="summary-title">${f}</h2>

            <!-- Big Stats Grid -->
            <div class="summary-stats-grid">
              <div class="sum-stat-card">
                <span class="stat-icon">⭐</span>
                <div class="stat-val" style="color: var(--accent-gold);">${s.toLocaleString()}</div>
                <div class="stat-label">Tổng Điểm Trận Đấu</div>
              </div>

              <div class="sum-stat-card">
                <span class="stat-icon">🎯</span>
                <div class="stat-val" style="color: var(--accent-emerald);">${y}%</div>
                <div class="stat-label">Độ Chính Xác (${m}/${t.length})</div>
              </div>

              <div class="sum-stat-card">
                <span class="stat-icon">🔥</span>
                <div class="stat-val" style="color: var(--accent-amber);">${p}</div>
                <div class="stat-label">Chuỗi Đúng Dài Nhất (Max Streak)</div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin: 2rem 0;">
              <button class="btn-primary" id="quiz-replay-btn" style="padding: 0.85rem 2.2rem; font-size: 1.05rem;">
                <span>↺ CHƠI LẠI TRẬN MỚI</span>
              </button>
              <button class="btn-secondary" id="quiz-summary-exit-btn" style="padding: 0.85rem 2rem; font-size: 1.05rem;">
                <span>🗺️ QUAY LẠI BẢN ĐỒ BÀI HỌC</span>
              </button>
            </div>

            <!-- Collapsible Review List -->
            <div class="summary-review-section">
              <h3 style="font-size: 1.25rem; font-family: var(--font-heading); color: var(--text-heading); margin-bottom: 1.2rem;">
                📋 BẢNG GIẢI CHI TIẾT TỪNG CÂU HỎI (${v.length} CÂU)
              </h3>
              <div class="review-cards-list">
                ${R}
              </div>
            </div>
          </div>
        </div>
      `,document.getElementById("quiz-replay-btn").addEventListener("click",()=>{l.playClick(),h="lobby",L()}),document.getElementById("quiz-summary-exit-btn").addEventListener("click",()=>{l.playClick(),n()});return}}L()}function bn(i,n){const h=H.getProfile(),a=h.archetype,t=fn(h.dimensionScores,300),s=H.state.completedScenarios||{};let g="";ln.forEach(N=>{const I=h.dimensionScores[N.key]||50;g+=`
      <div class="profile-dim-item">
        <div class="profile-dim-head">
          <span class="dim-name">${N.name}</span>
          <span class="dim-val" style="color: ${N.color};">${I}%</span>
        </div>
        <div class="profile-progress-track">
          <div class="profile-progress-fill" style="width: ${I}%; background: ${N.color};"></div>
        </div>
        <div class="dim-desc">${N.desc}</div>
      </div>
    `});let p="";a.strengths.forEach(N=>{p+=`<li><span class="chk-icon">✓</span> <span>${N}</span></li>`});let m="";mn.forEach(N=>{const I=z.filter(c=>c.chapter===N.id),$=I.filter(c=>s[c.id]).length,w=$===I.length&&I.length>0,P=I.length>0?Math.round($/I.length*100):0;let U="";N.modules.forEach(c=>{U+=`
        <div class="curriculum-mod-tag">
          <span class="mod-dot" style="background: ${N.accentColor};"></span>
          <span>${c.title}</span>
        </div>
      `}),m+=`
      <div class="profile-chapter-card" style="--ch-color: ${N.accentColor};">
        <!-- Card Header: Code Badge (Left) & Completion Status (Right) -->
        <div class="profile-chapter-head">
          <span class="badge-pill ch-code-pill" style="background: ${N.accentColor}18; color: ${N.accentColor}; border: 1px solid ${N.accentColor}40;">
            ${N.code}
          </span>
          <div class="ch-status-box">
            ${w?'<span class="badge-pill ch-done-pill">✓ ĐÃ HOÀN THÀNH</span>':`<span class="badge-pill ch-learning-pill">${$}/${I.length} Tình huống (${P}%)</span>`}
          </div>
        </div>

        <!-- Topic Subtitle -->
        <div class="ch-badge-theme" style="color: ${N.accentColor};">
          ✦ ${N.badge}
        </div>

        <!-- Full Width Title -->
        <h5 class="profile-ch-title">${N.title}</h5>

        <!-- Progress Track & Percentage -->
        <div class="ch-progress-wrap">
          <div class="profile-progress-track">
            <div class="profile-progress-fill" style="width: ${P}%; background: ${N.accentColor};"></div>
          </div>
          <span class="ch-percent-num" style="color: ${N.accentColor};">${P}%</span>
        </div>

        <!-- Core Knowledge Modules -->
        <div class="curriculum-modules-wrap">
          <div class="curriculum-mod-label" style="color: ${N.accentColor};">Trọng tâm kiến thức cốt lõi (Giáo trình chuẩn):</div>
          <div class="curriculum-modules-grid">
            ${U}
          </div>
        </div>
      </div>
    `}),i.innerHTML=`
    <div class="profile-fullscreen-overlay open" id="profile-modal-overlay">
      <div class="profile-fullscreen-page" id="certificate-print-area">
        <!-- Top Sticky Header Navigation Bar -->
        <header class="profile-top-navbar">
          <div class="profile-header-left">
            <button class="profile-back-pill" id="profile-close-btn" title="Quay lại bản đồ (Esc)">
              <span>← Đóng &amp; Quay lại bản đồ</span>
            </button>
          </div>
          <div class="profile-top-title">
            <span>HỒ SƠ TƯ DUY KINH TẾ CHÍNH TRỊ • MLN122</span>
          </div>
          <div class="profile-top-actions">
            <button class="profile-action-btn" id="print-certificate-btn" title="In / Lưu PDF">
              <span>🖨️ In / Lưu PDF</span>
            </button>
            <button class="profile-action-btn danger" id="profile-reset-btn" title="Làm lại từ đầu">
              <span>↺ Làm Lại</span>
            </button>
            <button class="profile-close-x-btn" id="profile-top-x-btn" title="Đóng hồ sơ (Esc)">✕</button>
          </div>
        </header>

        <!-- Main Scrollable Fullscreen Container -->
        <main class="profile-main-content">
          <!-- Top Header Banner -->
          <div class="profile-modal-head">
            <div class="profile-cert-badge">
              <span class="badge-pill cert-pill">
                ✨ CHỨNG NHẬN TƯ DUY KINH TẾ CHÍNH TRỊ • MLN122
              </span>
              <span class="cert-sub-tag">Chuẩn Giáo trình Bộ GD&amp;ĐT &amp; Giáo trình chuẩn</span>
            </div>
            <h1 class="profile-title">Hồ Sơ Tư Duy Kinh Tế Chính Trị Của Bạn</h1>
            <p class="profile-subtitle">
              Hệ thống phân tích mức độ am hiểu lý luận, phản xạ thị trường và bài học thực tiễn qua toàn bộ 6 chương môn học MLN122.
            </p>
          </div>

          <!-- Section 1: Main Archetype Banner (Wide Showcase) -->
          <div class="profile-archetype-box" style="--archetype-color: ${a.accentColor};">
            <div class="archetype-hero-split">
              <!-- Left: Avatar, Title, Quote, Description -->
              <div class="archetype-left-col">
                <div class="archetype-badge-row">
                  <div class="archetype-icon-wrap animate-float">
                    ${a.icon}
                  </div>
                  <div>
                    <div class="archetype-pre-title" style="color: ${a.accentColor};">
                      HÌNH MẪU TƯ DUY (ARCHETYPE)
                    </div>
                    <h2 class="archetype-name">${a.title}</h2>
                    <div class="archetype-tagline-box">
                      <span class="quote-symbol">“</span>
                      <span class="tagline-text">${a.tagline}</span>
                      <span class="quote-symbol">”</span>
                    </div>
                  </div>
                </div>
                <p class="archetype-desc">
                  ${a.description}
                </p>
              </div>

              <!-- Right: Strengths and Advice -->
              <div class="archetype-right-col">
                <div class="advice-col strengths-col">
                  <div class="advice-col-title" style="color: var(--accent-blue);">
                    <span>🎯</span>
                    <span>ĐIỂM MẠNH TƯ DUY:</span>
                  </div>
                  <ul class="strengths-list">
                    ${p}
                  </ul>
                </div>

                <div class="advice-col advice-col-gold">
                  <div class="advice-col-title" style="color: var(--accent-gold);">
                    <span>💡</span>
                    <span>LỜI KHUYÊN PHÁT TRIỂN BẢN THÂN:</span>
                  </div>
                  <p class="advice-text">
                    ${a.lifeAdvice}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 2: 5-Dimensional Radar & Progress Bars -->
          <div class="profile-radar-section">
            <div class="radar-visual-col">
              <h3 class="section-block-title">Biểu Đồ Radar 5 Chiều Năng Lực</h3>
              <div class="radar-svg-container">
                ${t}
              </div>
              <div class="radar-score-pill">
                Điểm năng lực tổng hợp: <strong style="color: var(--accent-blue);">${h.averageScore}%</strong>
              </div>
            </div>

            <div class="radar-bars-col">
              <h3 class="section-block-title">Chi Tiết Từng Chiều Tư Duy Thực Nghiệm</h3>
              <div class="dimensions-bars-list">
                ${g}
              </div>
            </div>
          </div>

          <!-- Section 3: Comprehensive 6-Chapter Competency Matrix (Giáo trình chuẩn) -->
          <div class="profile-curriculum-section">
            <div class="curriculum-sec-header">
              <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
                <span class="badge-pill" style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.12), rgba(16, 185, 129, 0.15)); color: var(--accent-blue); border: 1.5px solid rgba(37, 99, 235, 0.35); font-weight: 850; font-family: var(--font-heading);">
                  🎓 KHUNG TRI THỨC 6 CHƯƠNG MLN122
                </span>
                <span style="font-size: 0.85rem; color: var(--text-dim); font-weight: 700;">(Chuẩn Giáo trình chuẩn &amp; Giáo trình Bộ GD&amp;ĐT)</span>
              </div>
              <h3 class="curriculum-sec-title">Chi Tiết Năng Lực Lý Luận Từng Chương Môn Học</h3>
              <p class="curriculum-sec-desc">
                Đối chiếu toàn bộ các đề mục học tập (Chương 1 đến Chương 6) từ quy luật giá trị, giá trị thặng dư đến thể chế KTTT định hướng XHCN và chiến lược công nghiệp hóa, hiện đại hóa, hội nhập quốc tế.
              </p>
            </div>

            <div class="curriculum-cards-grid">
              ${m}
            </div>
          </div>

          <!-- Footer Actions Bar -->
          <footer class="profile-footer-bar">
            <div class="footer-note-text">
              * Kết quả hồ sơ được tính toán độc lập từ thuật toán đánh giá đa chiều MLN122 dựa trên lựa chọn tình huống và phá án kinh tế.
            </div>
            <div class="footer-btn-group">
              <button class="nav-btn" id="print-certificate-bottom-btn" style="border-color: rgba(37, 99, 235, 0.35); color: var(--accent-blue);">
                <span>🖨️ In / Lưu Chứng Nhận</span>
              </button>
              <button class="btn-primary" id="profile-done-btn">
                <span>✕ ĐÓNG HỒ SƠ TƯ DUY</span>
              </button>
            </div>
          </footer>
        </main>
      </div>
    </div>
  `;const v=document.getElementById("profile-close-btn"),o=document.getElementById("profile-top-x-btn"),r=document.getElementById("profile-done-btn"),u=document.getElementById("profile-reset-btn"),q=document.getElementById("profile-bottom-reset-btn"),k=document.getElementById("print-certificate-btn"),b=document.getElementById("print-certificate-bottom-btn");function T(){l.playClick(),document.body.style.overflow="",window.removeEventListener("keydown",M),n()}function M(N){N.key==="Escape"&&T()}window.addEventListener("keydown",M),v&&v.addEventListener("click",T),o&&o.addEventListener("click",T),r&&r.addEventListener("click",T);function G(){l.playClick(),confirm("Bạn có chắc chắn muốn làm lại từ đầu không? Toàn bộ tiến trình tình huống và điểm số sẽ được thiết lập lại.")&&(H.resetAllProgress(),l.playComplete(),bn(i,n))}u&&u.addEventListener("click",G),q&&q.addEventListener("click",G);function d(){l.playClick(),window.print()}k&&k.addEventListener("click",d),b&&b.addEventListener("click",d)}function _n(i,n){const a=H.state.unlockedBadges;let t="";rn.forEach(e=>{const s=a.includes(e.id);t+=`
      <div class="badge-card ${s?"unlocked":"locked"}">
        <div class="badge-icon">${e.icon}</div>
        <h4 style="color: ${s?"var(--text-heading)":"var(--text-dim)"}; font-family: var(--font-heading);">${e.name}</h4>
        <div style="font-size: 0.78rem; color: var(--accent-gold); font-weight: 800; margin-bottom: 0.35rem; font-family: var(--font-heading);">${e.nameVi}</div>
        <p style="margin-bottom: 0.65rem; color: var(--text-muted); font-size: 0.85rem; line-height: 1.5;">${e.desc}</p>
        <div style="font-size: 0.75rem; color: ${s?"var(--accent-emerald)":"var(--text-dim)"}; font-weight: 700; border-top: 1px dashed var(--border-subtle); padding-top: 0.5rem; font-family: var(--font-heading);">
          ${s?"✓ ĐÃ MỞ KHÓA":`Điều kiện: ${e.requirement}`}
        </div>
      </div>
    `}),i.innerHTML=`
    <div class="modal-overlay open" id="badges-modal-overlay">
      <div class="modal-content animate-slide-up" style="max-width: 820px;">
        <button class="modal-close-btn" id="badges-close-btn">✕</button>

        <div style="text-align: center; margin-bottom: 1.8rem;">
          <h2 style="font-size: 1.8rem; margin-bottom: 0.4rem; color: var(--text-heading);">Bảng Vinh Danh Huy Hiệu</h2>
          <p style="font-size: 0.92rem; color: var(--text-muted);">
            Bạn đã mở khóa <strong style="color: var(--accent-gold);">${a.length}</strong> / <strong>${rn.length}</strong> danh hiệu kinh tế chính trị.
          </p>
        </div>

        <div class="badges-grid">
          ${t}
        </div>
      </div>
    </div>
  `,document.getElementById("badges-close-btn").addEventListener("click",()=>{l.playClick(),n()}),document.getElementById("badges-modal-overlay").addEventListener("click",e=>{e.target.id==="badges-modal-overlay"&&(l.playClick(),n())})}const on=[{chapter:1,chapterCode:"CHƯƠNG 1",chapterTitle:"Đối Tượng, Phương Pháp Nghiên Cứu & Chức Năng Của Kinh Tế Chính Trị Mác – Lênin",badge:"NỀN TẢNG KHOA HỌC",accentColor:"#2563eb",accentBg:"rgba(37, 99, 235, 0.08)",accentBorder:"rgba(37, 99, 235, 0.35)",topics:[{code:"1.1",title:"Khái quát sự hình thành và phát triển của Kinh tế chính trị Mác – Lênin",summary:`• Cội nguồn thuật ngữ: "Kinh tế chính trị" viết ngắn gọn từ cụm từ gốc Hán – Việt "Kinh bang tế thế" (nghĩa là Phương pháp để trị nước và giúp đời).
• Định nghĩa Kinh tế (góc độ kinh tế học): Toàn bộ các hoạt động sản xuất, phân phối, trao đổi, tiêu thụ hàng hóa và dịch vụ của một cộng đồng quốc gia trong một khoảng thời gian nhất định.
• Cột mốc Antoine de Montchrestien (1575 – 1621): Năm 1615, trong tác phẩm "Chuyên luận về kinh tế chính trị" (Traité de l'économie politique), thuật ngữ "Political Economy" lần đầu tiên xuất hiện. Ông cho rằng sức mạnh nhà nước gắn liền với sự giàu có của quốc gia và thương nhân là gương mặt chính của nền kinh tế.
• Cột mốc Adam Smith (1723 – 1790): Năm 1776, với kiệt tác "Của cải của các quốc gia" (The Wealth of Nations), A. Smith đã đưa kinh tế chính trị trở thành một môn khoa học có tính hệ thống với các phạm trù và khái niệm chuyên ngành, hướng tới 2 mục tiêu lớn: (1) Tạo nguồn thu dồi dào và sinh kế phong phú cho người dân; (2) Cung cấp nguồn ngân sách dồi dào cho nhà nước.
• Hai giai đoạn phát triển lịch sử lớn:
  - Giai đoạn 1 (Từ cổ đại đến cuối TK XVIII): Trải qua tư tưởng kinh tế thời cổ, trung đại ➔ Chủ nghĩa trọng thương (TK XV – XVII, coi trọng vàng bạc và ngoại thương) ➔ Chủ nghĩa trọng nông (TK XVII – XVIII, đề cao nông nghiệp) ➔ Kinh tế chính trị tư sản cổ điển Anh (giữa TK XVII – cuối TK XVIII, A. Smith, D. Ricardo, đặt nền móng lý luận giá trị lao động).
  - Giai đoạn 2 (Từ sau TK XVIII đến nay): C. Mác và Ph. Ăng-ghen kế thừa tinh hoa cổ điển Anh, sáng lập Kinh tế chính trị Mác – Lênin khoa học và cách mạng, phát hiện ra quy luật giá trị thặng dư; V.I. Lênin tiếp tục phát triển trong thời đại độc quyền. Dòng thứ hai rẽ nhánh sang kinh tế học tầm thường / kinh tế học hiện đại (chỉ khái quát tâm lý, hành vi bề ngoài mà không phân tích sâu quan hệ xã hội của sản xuất).`,lifeLesson:'Hiểu cội nguồn "kinh bang tế thế" giúp người học có cái nhìn vĩ mô và trách nhiệm: Kinh tế học không chỉ là mánh lới buôn bán cá nhân, mà là khoa học phụng sự sự thịnh vượng của nhân dân và quốc gia.'},{code:"1.2",title:"Đối tượng và mục đích nghiên cứu của Kinh tế chính trị Mác – Lênin",summary:`• Định nghĩa kinh điển của Ph. Ăng-ghen (nghĩa rộng): "Kinh tế chính trị là khoa học về những quy luật chi phối sự sản xuất vật chất và sự trao đổi những tư liệu sinh hoạt vật chất trong xã hội loài người".
• Đối tượng nghiên cứu theo 2 nghĩa chuẩn giáo trình:
  - Theo nghĩa hẹp: Nghiên cứu quan hệ sản xuất và trao đổi trong một phương thức sản xuất nhất định.
  - Theo nghĩa rộng: Nghiên cứu các hệ thống quan hệ xã hội của sản xuất và trao đổi qua các thời đại lịch sử.
  ⇨ Luận điểm cốt lõi: "Không có một bộ môn kinh tế chính trị duy nhất cho tất cả mọi quốc gia, mọi thời đại kinh tế".
• Mối liên hệ tổng thể biện chứng: Kiến trúc thượng tầng ➔ Cơ sở hạ tầng ➔ Trình độ phát triển của Lực lượng sản xuất.
• Nghiên cứu trọn vẹn 4 khâu của quá trình tái sản xuất xã hội:
  1. Sản xuất: Giữ vai trò quyết định, sáng tạo ra toàn bộ của cải vật chất.
  2. Phân phối: Xác định tỷ lệ của cải cho từng chủ thể và định hướng quan hệ lợi ích.
  3. Trao đổi: Là cầu nối lưu thông, đưa sản phẩm từ người sản xuất đến người tiêu dùng.
  4. Tiêu dùng: Mục đích cuối cùng và là động lực kích thích chu kỳ sản xuất mới.
• Mục đích nghiên cứu tối cao: Tìm ra những quy luật kinh tế chi phối sự vận động và phát triển của phương thức sản xuất ➔ Làm cơ sở hoạch định các chính sách kinh tế khoa học ➔ Giải quyết hài hòa các quan hệ về lợi ích ➔ Tạo động lực to lớn cho con người sáng tạo ➔ Thúc đẩy sự phát triển toàn diện của toàn xã hội.`,lifeLesson:"Mọi thất bại trong kinh doanh hay quản lý thường bắt nguồn từ sự đứt gãy giữa 4 khâu hoặc xung đột lợi ích bất công; giải quyết đúng quan hệ con người và chia sẻ lợi ích hài hòa là chìa khóa phát triển bền vững."},{code:"1.3",title:"Phương pháp nghiên cứu đặc thù của Kinh tế chính trị Mác – Lênin",summary:`• Phương pháp quan trọng và đặc thù nhất: Phương pháp trừu tượng hóa khoa học.
  - Bản chất: Gạt bỏ những yếu tố ngẫu nhiên, tạm thời, hiện tượng bề ngoài của đời sống kinh tế để đi sâu vào bản chất bên trong, tách ra những mối liên hệ tất nhiên, bền vững và khái quát thành các phạm trù, quy luật kinh tế khách quan.
  - Điểm dừng trừu tượng: Không được trừu tượng hóa một cách chủ quan, siêu hình làm biến dạng bản chất hiện thực khách quan.
• Các phương pháp nghiên cứu phối hợp chặt chẽ:
  - Phương pháp logic kết hợp với lịch sử: Nắm bắt bản chất quy luật theo tiến trình phát sinh, phát triển và chuyển hóa thực tế.
  - Phương pháp phân tích và tổng hợp: Mổ xẻ chi tiết từng bộ phận rồi hợp nhất trong chỉnh thể thống nhất.
  - Phương pháp thống kê kinh tế & mô hình hóa: Định lượng hóa các quan hệ tỷ lệ để kiểm chứng lý thuyết.
  - Khảo sát thực tiễn: Đối chiếu lý luận với thực tiễn sản xuất xã hội sinh động.`,lifeLesson:'Giữa thời đại bùng nổ dữ liệu số (Big Data), phương pháp trừu tượng hóa khoa học giúp bạn lọc sạch "nhiễu" thông tin, không bị cảm xúc thị trường đánh lừa để nhìn thấu quy luật vận động bản chất.'},{code:"1.4",title:"Bốn chức năng cốt lõi của Kinh tế chính trị Mác – Lênin",summary:`• 1. Chức năng nhận thức: Cung cấp hệ thống tri thức lý luận khoa học, bản chất quy luật chi phối nền sản xuất và thị trường; hiểu rõ cội nguồn của cải, giá trị thặng dư và quy luật phát triển xã hội.
• 2. Chức năng thực tiễn: Giúp người lao động, doanh nhân và nhà quản lý vận dụng sáng tạo các quy luật kinh tế vào đời sống; hoạch định chính sách kinh tế vĩ mô, nâng cao hiệu quả sản xuất kinh doanh và quản trị rủi ro.
• 3. Chức năng tư tưởng: Xây dựng thế giới quan khoa học duy vật biện chứng, bồi đắp niềm tin vào con đường phát triển tiến bộ xã hội, kiên định lý tưởng độc lập dân tộc gắn liền với CNXH tại Việt Nam.
• 4. Chức năng phương pháp luận: Là nền tảng thế giới quan và phương pháp luận khoa học cho toàn bộ hệ thống các khoa học kinh tế ngành (Kinh tế phát triển, Tài chính - Ngân hàng, Quản trị kinh doanh, Marketing, Kinh tế quốc tế...).`,lifeLesson:"Nắm vững 4 chức năng giúp bạn chuyển hóa tri thức sách vở thành bản lĩnh sống: Có nhận thức đúng thì hành động thực tiễn mới hiệu quả, có tư tưởng vững vàng thì không dao động trước biến động thị trường."}]},{chapter:2,chapterCode:"CHƯƠNG 2",chapterTitle:"Hàng Hóa, Thị Trường & Vai Trò Của Các Chủ Thể Tham Gia Thị Trường",badge:"QUY LUẬT THỊ TRƯỜNG",accentColor:"#059669",accentBg:"rgba(5, 150, 105, 0.08)",accentBorder:"rgba(5, 150, 105, 0.35)",topics:[{code:"2.1",title:"Lý luận của C. Mác về sản xuất hàng hóa & Hai thuộc tính của hàng hóa",summary:`• Tiền đề thực tiễn & Cơ sở duy vật lịch sử: Đời sống xã hội loài người có nhiều mặt hoạt động khác nhau (chính trị, văn hoá, nghệ thuật, khoa học, kỹ thuật, tôn giáo…). Nhưng trước khi tiến hành các hoạt động đó, con người phải có thức ăn, quần áo mặc, nhà ở… Do đó, sản xuất của cải vật chất là cơ sở sinh tồn và phát triển của xã hội.
• Khái niệm Sản xuất hàng hóa: Là kiểu tổ chức hoạt động kinh tế mà ở đó, những người sản xuất ra sản phẩm nhằm mục đích trao đổi, mua bán (khác với sản xuất tự nhiên tự cấp tự túc).
• 2 điều kiện lịch sử tất yếu để sản xuất hàng hóa ra đời và tồn tại:
  1. Phân công lao động xã hội: Sự chuyên môn hóa sản xuất thành nhiều ngành nghề khác nhau (nông dân, thợ dệt, thợ rèn, công nhân...). Mỗi người chỉ sản xuất một thứ nhưng cần tiêu dùng nhiều thứ, dẫn đến tất yếu phải trao đổi.
  2. Sự tách biệt tương đối về mặt kinh tế giữa các chủ thể sản xuất: Do chế độ sở hữu khác nhau về TLSX và sản phẩm quy định (quyền tài sản riêng biệt). Muốn tiêu dùng sản phẩm của người khác phải thông qua trao đổi, mua bán bình đẳng.
• Khái niệm Hàng hóa & 2 dạng biểu hiện:
  - Định nghĩa: Là sản phẩm của lao động, có thể thỏa mãn nhu cầu nào đó của con người thông qua trao đổi, mua bán.
  - 2 dạng tồn tại: Dạng hữu hình (vật thể như sắt, thép, lương thực thóc lúa, bánh mì...) và Dạng vô hình (phi vật thể như dịch vụ vận tải, thương mại, giáo viên, bác sĩ, nghệ sĩ, lập trình viên...).
• Hai thuộc tính biện chứng của hàng hóa:
  1. Giá trị sử dụng: Là công dụng của hàng hóa, có thể thỏa mãn những nhu cầu nhất định của con người (nhu cầu tiêu dùng cá nhân như bánh mì; nhu cầu tiêu dùng sản xuất như khung sắt thép xây dựng). Là thuộc tính tự nhiên, phạm trù vĩnh viễn.
  2. Giá trị của hàng hóa & Giá trị trao đổi:
     - Để hiểu được giá trị hàng hóa phải đi từ giá trị trao đổi.
     - Giá trị trao đổi: Là một quan hệ về số lượng, là tỷ lệ theo đó một giá trị sử dụng loại này được trao đổi với những giá trị sử dụng loại khác.
     - Thí dụ chuẩn slide: 1m vải = 5kg thóc (tức 1 mét vải có giá trị trao đổi bằng 5 kg thóc). Hai vật có GTSD khác nhau trao đổi được với nhau vì có cơ sở chung: "Chính lao động hao phí để tạo ra hàng hóa là cơ sở chung của việc trao đổi và nó tạo thành giá trị của hàng hóa".
     - 4 đặc điểm cốt lõi của Giá trị:
       + Là lao động xã hội của người sản xuất kết tinh trong hàng hóa.
       + Giá trị là cơ sở của giá trị trao đổi (giá trị trao đổi là hình thức biểu hiện ra bên ngoài của giá trị).
       + Biểu hiện quan hệ kinh tế giữa những người sản xuất hàng hóa (quan hệ giữa người với người thông qua vật).
       + Là một phạm trù lịch sử (chỉ tồn tại trong nền sản xuất hàng hóa).`,lifeLesson:"Một sản phẩm muốn thành công trên thị trường phải có giá trị sử dụng xuất sắc (giải quyết nhu cầu thiết thực) và phải được thị trường thừa nhận giá trị thông qua giá cả và hành vi trao đổi."},{code:"2.2",title:"Tính hai mặt của lao động sản xuất hàng hóa (Phát kiến vĩ đại của C. Mác)",summary:`Lao động sản xuất hàng hóa bắt nguồn từ 2 điều kiện (Phân công LĐXH và Sự độc lập kinh tế giữa người sản xuất) và mang tính hai mặt biện chứng:
• Lao động Cụ thể:
  - Là lao động có ích dưới một hình thức nghề nghiệp chuyên môn nhất định, có 4 đặc trưng riêng: Mục đích riêng, Đối tượng riêng, Phương pháp/cách thức riêng, Kết quả riêng.
  - Là phạm trù vĩnh viễn vì nó gắn liền với giá trị sử dụng, với vật phẩm, tồn tại dưới mọi hình thái kinh tế.
  - Tạo ra giá trị sử dụng nhất định của hàng hóa.
  - Ngày càng phong phú, đa dạng, chuyên môn hóa cao nhằm đáp ứng nhu cầu của thị trường và sự phát triển của khoa học công nghệ.
• Lao động Trừu tượng:
  - Là sự hao phí sức lao động (SLĐ) nói chung của người sản xuất không kể đến hình thức cụ thể của nó (hao phí cơ bắp, thần kinh, trí óc).
  - Tạo nên giá trị của hàng hóa (lao động sống tạo ra giá trị mới v + m).
  - Là một phạm trù lịch sử (chỉ tồn tại trong nền sản xuất hàng hóa).
  - Phản ánh tính chất tư nhân và tính chất xã hội của lao động sản xuất hàng hóa.
• Sơ đồ mâu thuẫn cơ bản của sản xuất hàng hóa:
  - Lao động cụ thể biểu hiện thành Lao động tư nhân (cá nhân); Lao động trừu tượng biểu hiện thành Lao động xã hội.
  - Mâu thuẫn giữa Lao động tư nhân và Lao động xã hội là mầm mống của mọi mâu thuẫn và khủng hoảng trong kinh tế hàng hóa (hàng hóa sản xuất ra không bán được do không phù hợp nhu cầu xã hội).`,lifeLesson:"Kỹ năng cụ thể giúp bạn làm ra sản phẩm, nhưng khả năng lao động trừu tượng (tư duy logic, quản lý cảm xúc, sức bền trí tuệ) mới tạo ra bước nhảy vọt về giá trị bản thân."},{code:"2.3",title:"Lượng giá trị hàng hóa và các nhân tố ảnh hưởng",summary:`• Thước đo lượng giá trị hàng hóa: Lượng giá trị của hàng hóa là do lượng lao động hao phí để sản xuất ra hàng hóa quyết định, được đo bằng THƯỚC ĐO THỜI GIAN.
• Thời gian lao động xã hội cần thiết (TGLĐXHCT): Là thời gian cần để sản xuất một hàng hóa trong điều kiện bình thường của xã hội với 3 tiêu chuẩn trung bình:
  1. Trình độ kỹ thuật trung bình;
  2. Trình độ khéo léo trung bình;
  3. Cường độ lao động trung bình.
• 3 nhân tố cốt lõi ảnh hưởng đến lượng giá trị hàng hóa:
  1. Tỷ lệ nghịch với Năng suất lao động: Năng suất lao động tăng lên làm thời gian hao phí trên 1 sản phẩm giảm xuống, do đó lượng giá trị trong 1 đơn vị hàng hóa giảm.
  2. Tỷ lệ thuận với số lượng lao động kết tinh: Tổng thời gian lao động hao phí tăng thì tổng lượng giá trị hàng hóa tạo ra tăng theo.
  3. Lao động phức tạp là bội số của lao động giản đơn: Trong cùng một đơn vị thời gian, lao động phức tạp (đòi hỏi đào tạo chuyên sâu) tạo ra lượng giá trị lớn hơn nhiều so với lao động giản đơn.
• Phân biệt Năng suất lao động vs Cường độ lao động:
  - Tăng NSLĐ (công nghệ/AI): Số sản phẩm tăng, giá trị 1 sản phẩm giảm, hao phí sức lực không đổi.
  - Tăng CĐLĐ (tăng ca ép tiến độ): Số sản phẩm tăng, giá trị 1 sản phẩm không đổi, hao phí sức lực tăng tương ứng.`,lifeLesson:"Để thoát bẫy thu nhập thấp, con đường duy nhất là chuyển từ lao động giản đơn sang lao động phức tạp bằng cách học tập chuyên môn sâu và áp dụng công nghệ tự động hóa."},{code:"2.4",title:"Lịch sử ra đời của tiền tệ, các quy luật thị trường & vai trò các chủ thể",summary:`• Lịch sử phát triển của các hình thái giá trị dẫn tới sự ra đời của Tiền tệ:
  1. Hình thái giản đơn (ngẫu nhiên): Giá trị của hàng hóa A biểu hiện qua giá trị sử dụng của hàng hóa B (B làm vật ngang giá). Xuất hiện cuối thời cộng sản nguyên thủy; là mầm mống của tiền, vật ngang giá là hình thái phôi thai của tiền.
  2. Hình thái mở rộng (đầy đủ): Khi LLSX phát triển, hàng hóa đem trao đổi nhiều hơn; một hàng hóa có quan hệ trao đổi với nhiều hàng hóa khác (A = B = C = D...).
  3. Hình thái chung của giá trị: Giá trị của mọi hàng hóa đều được biểu hiện ở GTSD của một hàng hóa đóng vai trò làm vật ngang giá chung. Ví dụ chuẩn slide: 1 cái áo = 10 đấu chè = 40 đấu cà phê = 0,2 gam vàng = } 20 vuông vải (vải làm vật ngang giá chung cho toàn vùng).
  4. Hình thái tiền tệ: Khi sản xuất và trao đổi phát triển mở rộng giữa các vùng, vật ngang giá chung được cố định độc quyền ở kim loại quý (vàng, bạc): 1 cái áo = 10 đấu chè = 40 đấu cà phê = 20 vuông vải = } 0,2 gam vàng.
• Chế độ song bản vị & Ưu thế tự nhiên của Vàng/Bạc:
  - Chế độ song bản vị: Bạc & vàng cùng làm chức năng tiền tệ.
  - Ưu thế tự nhiên: Vàng, bạc thuần nhất về chất, dễ chia nhỏ hoặc gộp lại, không bị hư hỏng mòn gỉ, và chứa đựng lượng giá trị lớn trong một thể tích nhỏ.
• 5 chức năng của tiền tệ: Thước đo giá trị, Phương tiện lưu thông, Phương tiện cất trữ, Phương tiện thanh toán, Tiền tệ thế giới.
• 4 quy luật thị trường cốt lõi:
  1. Quy luật giá trị: Sản xuất và lưu thông hàng hóa phải dựa trên hao phí lao động xã hội cần thiết; giá cả xoay quanh trục giá trị (Tổng giá cả = Tổng giá trị trên phạm vi toàn xã hội).
  2. Quy luật cung – cầu: Điều tiết giá cả thị trường và phân bổ các nguồn lực sản xuất.
  3. Quy luật lưu thông tiền tệ: Số lượng tiền cần thiết cho lưu thông M = (P.Q - G1 - G2 + G3) / V.
  4. Quy luật cạnh tranh: Động lực nội tại thúc đẩy đổi mới công nghệ, nâng cao năng suất và đào thải đơn vị kém hiệu quả.
• Các chủ thể tham gia thị trường (Slide Session 7):
  - Người sản xuất: Trực tiếp tạo ra hàng hóa, dịch vụ đáp ứng nhu cầu thị trường, tìm kiếm lợi nhuận.
  - Người tiêu dùng: Mua hàng hóa, dịch vụ thỏa mãn nhu cầu sinh hoạt; là động lực và định hướng cho sản xuất.
  - Các chủ thể trung gian: Thương nhân, nhà phân phối, sàn TMĐT, logistics kết nối cung - cầu, giảm chi phí giao dịch.
  - Nhà nước: Kiến tạo môi trường thể chế pháp lý, khắc phục các khuyết tật thị trường (độc quyền, ô nhiễm môi trường, bất bình đẳng), điều tiết vĩ mô.`,lifeLesson:"Tôn trọng quy luật thị trường, không đầu tư theo cảm tính đám đông (FOMO), luôn bám sát giá trị thực của tài sản và dòng tiền."}]},{chapter:3,chapterCode:"CHƯƠNG 3",chapterTitle:"Giá Trị Thặng Dư Trong Nền Kinh Tế Thị Trường (Trọng Tâm Lý Luận)",badge:"HẠT NHÂN HỌC THUYẾT MÁC",accentColor:"#d97706",accentBg:"rgba(217, 119, 6, 0.08)",accentBorder:"rgba(217, 119, 6, 0.35)",topics:[{code:"3.1.1",title:"Nguồn gốc của giá trị thặng dư & Hàng hóa sức lao động",summary:`• Công thức chung của tư bản: T – H – T' (với T' = T + ΔT; ΔT là giá trị thặng dư m). Tiền chỉ thành tư bản khi vận động nhằm mục đích sinh sôi giá trị.
• Mâu thuẫn công thức chung: Giá trị thặng dư không thể sinh ra từ lưu thông thuần túy (mua rẻ bán đắt chỉ là phân phối lại), nhưng cũng không thể sinh ra ngoài lưu thông. Tư bản phải bắt đầu từ lưu thông để tìm thấy một loại hàng hóa đặc biệt: HÀNG HÓA SỨC LAO ĐỘNG.
• 2 điều kiện để sức lao động thành hàng hóa: (1) Người lao động tự do về thân thể; (2) Người lao động bị tước đoạt toàn bộ TLSX, buộc phải bán sức lao động để kiếm sống.
• 2 thuộc tính hàng hóa sức lao động: Giá trị (chi phí nuôi sống người LĐ và gia đình) và Giá trị sử dụng ĐẶC BIỆT: Khi tiêu dùng, nó sáng tạo ra lượng giá trị MỚI LỚN HƠN giá trị bản thân nó (phần dôi ra chính là giá trị thặng dư m).`,lifeLesson:"Lao động làm thuê thực chất là bán quyền sử dụng sức lao động trong một khoảng thời gian. Muốn nâng cao thu nhập, bạn phải tạo ra giá trị mới thặng dư vượt bậc cho tổ chức."},{code:"3.1.2",title:"Bản chất giá trị thặng dư & Phân chia Tư bản bất biến (c) – Tư bản khả biến (v)",summary:`• Quá trình sản xuất GTTD là sự thống nhất giữa quá trình tạo ra giá trị sử dụng và quá trình tăng thêm giá trị. Ngày lao động chia thành 2 phần:
  - Thời gian lao động tất yếu (t): Người LĐ tái tạo giá trị sức lao động (tiền lương v).
  - Thời gian lao động thặng dư (t'): Người LĐ tạo ra giá trị thặng dư (m) bị nhà tư bản chiếm đoạt.
• Tư bản bất biến (c): Bộ phận tư bản biến thành tư liệu sản xuất (nhà xưởng, máy móc, nguyên vật liệu), giá trị được bảo tồn và chuyển nguyên vẹn vào sản phẩm mới, không thay đổi về lượng.
• Tư bản khả biến (v): Bộ phận tư bản biến thành sức lao động, trong sản xuất không chỉ tái tạo giá trị của chính nó mà còn tạo ra giá trị thặng dư m (v + m).
• Tỷ suất GTTD: m' = (m / v) * 100% = (t' / t) * 100% (phản ánh trình độ bóc lột).
• Khối lượng GTTD: M = m' * V (phản ánh quy mô giá trị thặng dư thu được).`,lifeLesson:"Máy móc, máy chủ hay AI (tư bản bất biến c) tự chúng không sinh ra giá trị mới nếu thiếu sức lao động sống của con người (v) vận hành và sáng tạo."},{code:"3.1.3",title:"Các phương pháp sản xuất giá trị thặng dư trong nền kinh tế thị trường",summary:`Có 3 phương pháp sản xuất giá trị thặng dư:
1. Sản xuất GTTD tuyệt đối: Thu được bằng cách kéo dài ngày lao động vượt quá thời gian tất yếu trong điều kiện năng suất lao động không đổi. Phương pháp này vấp phải giới hạn thể chất con người và sự đấu tranh của phong trào công nhân.
2. Sản xuất GTTD tương đối: Thu được bằng cách rút ngắn thời gian lao động tất yếu nhờ tăng năng suất lao động xã hội trong các ngành sản xuất tư liệu sinh hoạt, qua đó kéo dài thời gian thặng dư dù độ dài ngày làm việc giữ nguyên.
3. Giá trị thặng dư siêu ngạch: Do doanh nghiệp cá biệt áp dụng công nghệ mới làm cho giá trị cá biệt thấp hơn giá trị thị trường. Là hình thái biến tướng của GTTD tương đối, là động lực mạnh mẽ nhất thúc đẩy cải tiến công nghệ trong nền kinh tế thị trường.`,lifeLesson:"Doanh nghiệp khôn ngoan thời đại 4.0 tập trung đầu tư công nghệ số và tự động hóa để thu GTTD tương đối và siêu ngạch, thay vì vắt kiệt sức lao động qua tăng ca kiệt quệ."},{code:"3.2",title:"Tích lũy tư bản: Bản chất, các nhân tố ảnh hưởng & Quy luật chung",summary:`• Bản chất tích lũy tư bản: Là sự chuyển hóa một phần giá trị thặng dư thành tư bản phụ thêm (tái sản xuất mở rộng TBCN). Nguồn gốc duy nhất của tích lũy tư bản chính là giá trị thặng dư.
• 4 nhân tố quyết định quy mô tích lũy: (1) Trình độ bóc lột sức lao động (m'); (2) Năng suất lao động xã hội; (3) Chênh lệch ngày càng tăng giữa tư bản sử dụng và tư bản tiêu dùng; (4) Quy mô tư bản ứng trước ban đầu.
• Các quy luật và hệ quả của tích lũy tư bản:
  - Làm tăng cấu tạo hữu cơ của tư bản (c/v): Tỷ lệ máy móc thiết bị (c) tăng nhanh hơn tỷ lệ nhân công (v).
  - Thúc đẩy tích tụ và tập trung tư bản thành các tập đoàn khổng lồ.
  - Sinh ra nạn nhân tạo "đội quân thất nghiệp công nghiệp" (dân số thừa tương đối).
  - Quy luật chung: Một cực tích lũy của cải, cực đối lập tích lũy sự bần cùng và bất bình đẳng.`,lifeLesson:"Để tích lũy tài sản cá nhân hay doanh nghiệp, nguyên tắc sống còn là kiên trì trích lập quỹ tái đầu tư, không ngừng gia tăng tỷ suất sinh lời và làm chủ công nghệ."},{code:"3.3",title:"Các hình thức biểu hiện của giá trị thặng dư trong nền KTTT (K, p, p', p̄, z, R)",summary:`Giá trị thặng dư che giấu nguồn gốc thực sự của nó qua các hình thái chuyển hóa trên bề mặt thị trường:
• Chi phí sản xuất TBCN (K): K = c + v (bù đắp TLSX và tiền công đã hao phí). Khi đó Giá trị hàng hóa G = K + m.
• Lợi nhuận (p): Khi m được quan niệm là con đẻ của toàn bộ tư bản ứng trước K, m biến tướng thành p. Giá trị hàng hóa G = K + p.
• Tỷ suất lợi nhuận (p'): p' = [p / (c + v)] * 100%. Luôn nhỏ hơn m'. Bị chi phối bởi: m', cấu tạo hữu cơ c/v, tốc độ chu chuyển vốn và việc tiết kiệm tư bản bất biến.
• Lợi nhuận bình quân (p̄) & Giá cả sản xuất: Do cạnh tranh giữa các ngành dẫn đến san bằng các tỷ suất lợi nhuận thành tỷ suất lợi nhuận bình quân. Giá trị hàng hóa chuyển hóa thành Giá cả sản xuất = K + p̄.
• Lợi nhuận thương nghiệp: Phần GTTD công nghiệp nhượng cho nhà tư bản thương nghiệp vì đã đảm nhận lưu thông hàng hóa.
• Lợi tức (z): Phần lợi nhuận bình quân mà nhà tư bản đi vay phải trả cho nhà tư bản cho vay để được quyền sử dụng vốn tiền tệ.
• Địa tô TBCN (R): Phần GTTD siêu ngạch do công nhân nông nghiệp tạo ra mà nhà tư bản thuê đất phải nộp cho chủ đất.`,lifeLesson:"Nhìn vào báo cáo tài chính của doanh nghiệp, hãy hiểu rõ: Lợi nhuận, cổ tức hay lãi vay thực chất đều bắt nguồn từ giá trị thặng dư do con người lao động sáng tạo nên."}]},{chapter:4,chapterCode:"CHƯƠNG 4",chapterTitle:"Cạnh Tranh & Độc Quyền Trong Nền Kinh Tế Thị Trường",badge:"QUY LUẬT TẬP TRUNG",accentColor:"#7c3aed",accentBg:"rgba(124, 58, 237, 0.08)",accentBorder:"rgba(124, 58, 237, 0.35)",topics:[{code:"4.1",title:"Từ cạnh tranh tự do đến độc quyền & Các tổ chức độc quyền",summary:`• Nguyên nhân sinh ra độc quyền: Cạnh tranh tự do thúc đẩy tích tụ và tập trung sản xuất đến một trình độ nhất định sẽ tất yếu dẫn tới độc quyền (sự liên minh giữa các doanh nghiệp lớn nhằm chi phối giá cả và thị phần).
• 4 hình thức tổ chức độc quyền lịch sử: Cartel (thỏa thuận giá/thị phần), Syndicate (chung đầu mối lưu thông), Trust (thống nhất cả sản xuất và thương mại), Consortium (liên minh đa ngành quy mô khổng lồ).
• Lợi nhuận độc quyền cao: Thu được nhờ áp đặt Giá cả độc quyền (Giá cả độc quyền mua thấp đối với nguyên liệu, Giá cả độc quyền bán cao đối với thành phẩm).
• Độc quyền không thủ tiêu cạnh tranh, mà làm cạnh tranh trở nên gay gắt, khốc liệt hơn giữa các tổ chức độc quyền với nhau và giữa độc quyền với doanh nghiệp ngoài độc quyền.`,lifeLesson:'Cảnh giác trước các chiến lược "đốt tiền" hạ giá sâu của các nền tảng thương mại để triệt tiêu đối thủ cạnh tranh trước khi họ độc chiếm thị phần và tăng giá áp đặt.'},{code:"4.2",title:"Độc quyền nhà nước trong CNTB & Biểu hiện mới thời đại số (Big Tech)",summary:`• Bản chất độc quyền nhà nước: Là sự kết hợp sức mạnh của các tổ chức độc quyền tư nhân với sức mạnh chính trị của bộ máy nhà nước tư sản nhằm duy trì sự thống trị và phục vụ lợi ích của tư bản tài chính.
• 3 biểu hiện mới thời đại kinh tế số:
  1. Độc quyền dữ liệu (Big Data): Các tập đoàn công nghệ (Google, Meta, Apple, Amazon) thâu tóm toàn bộ hành vi số của người dùng, biến dữ liệu thành tài sản độc quyền.
  2. Độc quyền thuật toán và nền tảng khép kín: Giữ chân người dùng trong hệ sinh thái (Walled Garden), kiểm soát luồng phân phối thông tin.
  3. Độc quyền chuỗi cung ứng công nghệ cao: Thâu tóm sáng chế bán dẫn, hạ tầng AI và dịch vụ điện toán đám mây.`,lifeLesson:"Bảo vệ dữ liệu cá nhân số và thực thi nghiêm luật chống độc quyền là yếu tố sống còn để bảo đảm tự do và cạnh tranh lành mạnh trong thời đại kinh tế số."}]},{chapter:5,chapterCode:"CHƯƠNG 5",chapterTitle:"Kinh Tế Thị Trường Định Hướng XHCN & Quan Hệ Lợi Ích Kinh Tế Ở Việt Nam",badge:"MÔ HÌNH KINH TẾ VIỆT NAM",accentColor:"#db2777",accentBg:"rgba(219, 39, 119, 0.08)",accentBorder:"rgba(219, 39, 119, 0.35)",topics:[{code:"5.1.1",title:"Khái niệm kinh tế thị trường định hướng XHCN ở Việt Nam",summary:`Kinh tế thị trường định hướng XHCN là nền kinh tế vận hành theo các quy luật của thị trường, đồng thời góp phần hướng tới từng bước xác lập một xã hội mà ở đó "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh"; có sự điều tiết của Nhà nước do Đảng Cộng sản Việt Nam lãnh đạo.
• Điểm cốt lõi: KTTT không phải là sản phẩm riêng có của CNTB mà là thành tựu chung của văn minh nhân loại. Việt Nam sử dụng KTTT làm phương tiện và công cụ để xây dựng cơ sở vật chất cho CNXH.`,lifeLesson:"Hiểu đúng rằng phát triển kinh tế thị trường không đồng nghĩa với mất định hướng XHCN; thị trường là động lực giải phóng sức sản xuất, còn định hướng XHCN là la bàn giữ vững giá trị nhân văn."},{code:"5.1.2",title:"Tính tất yếu khách quan của việc phát triển KTTT định hướng XHCN",summary:`Phát triển KTTT định hướng XHCN ở Việt Nam là một tất yếu khách quan xuất phát từ 3 lý do căn bản:
1. Phù hợp với quy luật phát triển khách quan: Việt Nam quá độ lên CNXH từ một nền kinh tế nông nghiệp lạc hậu, bỏ qua chế độ TBCN. Tồn tại nhiều hình thức sở hữu và nhiều trình độ LLSX khác nhau nên tất yếu phải tồn tại sản xuất và trao đổi hàng hóa.
2. Tính ưu việt không thể thay thế của KTTT: Là cơ chế phân bổ nguồn lực hiệu quả nhất, thúc đẩy cạnh tranh, kích thích sáng tạo khoa học kỹ thuật và tăng năng suất lao động.
3. Phù hợp với nguyện vọng thiết tha của nhân dân: Mong muốn thoát khỏi nghèo nàn, lạc hậu, giải phóng sức sản xuất để xây dựng cuộc sống ấm no, hạnh phúc.`,lifeLesson:'Không thể duy ý chí "đốt cháy giai đoạn" xóa bỏ thị trường; phải tôn trọng các quy luật kinh tế khách quan để xây dựng nền tảng của cải vật chất vững chắc cho đất nước.'},{code:"5.1.3",title:"Đặc trưng của kinh tế thị trường định hướng XHCN ở Việt Nam",summary:`Nền KTTT định hướng XHCN ở Việt Nam có 5 đặc trưng cơ bản cấu thành bản chất:
• Về mục tiêu: Phát triển LLSX, xây dựng cơ sở vật chất – kỹ thuật của CNXH, nâng cao đời sống nhân dân, thực hiện "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh".
• Về quan hệ sở hữu và thành phần kinh tế: Nhiều hình thức sở hữu, nhiều thành phần kinh tế bình đẳng trước pháp luật. Trong đó: KINH TẾ NHÀ NƯỚC GIỮ VAI TRÒ CHỦ ĐẠO; KINH TẾ TƯ NHÂN LÀ MỘT ĐỘNG LỰC QUAN TRỌNG NHẤT; Kinh tế tập thể và Kinh tế có vốn đầu tư nước ngoài (FDI) được khuyến khích phát triển.
• Về quan hệ quản lý: Nhà nước pháp quyền XHCN quản lý nền kinh tế dưới sự lãnh đạo của Đảng Cộng sản, phát huy tối đa quyền làm chủ của nhân dân.
• Về quan hệ phân phối: Phân phối theo kết quả lao động và hiệu quả kinh tế là chủ yếu; kết hợp phân phối theo mức đóng góp vốn và phân phối qua hệ thống an sinh xã hội, phúc lợi công cộng.
• Về gắn tăng trưởng kinh tế với tiến bộ và công bằng xã hội: Thực hiện tiến bộ và công bằng xã hội ngay trong từng bước và từng chính sách phát triển; không "chờ kinh tế phát triển rồi mới sửa chữa bất công".`,lifeLesson:"Doanh nghiệp Việt Nam phát triển bền vững phải kết hợp hài hòa giữa tìm kiếm lợi nhuận chính đáng và thực hiện trách nhiệm xã hội, bảo vệ môi trường và người lao động."},{code:"5.2.1",title:"Sự cần thiết phải hoàn thiện thể chế KTTT định hướng XHCN ở Việt Nam",summary:`Thể chế KTTT định hướng XHCN là hệ thống quy tắc, luật pháp, bộ máy quản lý và cơ chế vận hành điều chỉnh hành vi của các chủ thể kinh tế. Hoàn thiện thể chế là tất yếu vì:
1. Hệ thống thể chế KTTT định hướng XHCN ở nước ta còn chưa đồng bộ, còn mâu thuẫn và chồng chéo.
2. Thể chế còn chưa đầy đủ, nhiều khoảng trống pháp lý trước các mô hình kinh tế mới (kinh tế số, kinh tế chia sẻ, tài sản số, kinh tế xanh).
3. Hiệu lực, hiệu quả thực thi thể chế còn hạn chế; môi trường kinh doanh cần minh bạch, thông thoáng hơn.
4. Yêu cầu cấp bách nâng cao năng lực cạnh tranh quốc gia trước hội nhập kinh tế quốc tế sâu rộng.`,lifeLesson:'Một môi trường thể chế minh bạch, pháp luật thượng tôn chính là "hạ tầng mềm" quan trọng nhất để thu hút đầu tư, giảm chi phí giao dịch và ươm mầm khởi nghiệp đổi mới sáng tạo.'},{code:"5.2.2",title:"Nội dung hoàn thiện thể chế KTTT định hướng XHCN trên các khía cạnh chủ yếu",summary:`• Hoàn thiện thể chế về sở hữu: Bảo vệ quyền tài sản hợp pháp, hoàn thiện luật về đất đai, tài nguyên số, phát triển mạnh mẽ kinh tế tư nhân và cơ cấu lại DNNN.
• Hoàn thiện thể chế phát triển đồng bộ các yếu tố thị trường và các loại thị trường: Thị trường hàng hóa - dịch vụ, thị trường tài chính - tiền tệ, thị trường bất động sản, thị trường lao động và thị trường khoa học - công nghệ.
• Hoàn thiện thể chế gắn kết tăng trưởng kinh tế với tiến bộ công bằng xã hội và bảo vệ môi trường (ESG).
• Nâng cao năng lực lãnh đạo của Đảng và hiệu lực quản lý của Nhà nước kiến tạo phát triển.`,lifeLesson:"Người khởi nghiệp và quản trị kinh doanh cần am hiểu thể chế chính sách để đón đầu ưu đãi của Nhà nước và phòng ngừa rủi ro pháp lý trong hoạt động thương mại."},{code:"5.3",title:"Các quan hệ lợi ích kinh tế ở Việt Nam & Vai trò điều tiết của Nhà nước",summary:`• Lợi ích kinh tế là lợi ích vật chất thu được khi thực hiện các hoạt động kinh tế; là động lực trực tiếp của mọi chủ thể.
• 3 quan hệ lợi ích kinh tế cơ bản:
  1. Quan hệ giữa Người lao động và Người sử dụng lao động (quan hệ việc làm và tiền lương).
  2. Quan hệ giữa các chủ thể kinh tế với nhau (cạnh tranh và hợp tác chia sẻ thị trường).
  3. Quan hệ giữa Lợi ích cá nhân – Lợi ích nhóm – Lợi ích toàn xã hội.
• Vai trò điều tiết của Nhà nước: Tạo môi trường pháp lý thuận lợi; kiểm soát và ngăn chặn lợi ích nhóm tiêu cực; điều hòa lợi ích bằng thuế thu nhập, phân phối lại và mạng lưới an sinh xã hội; giải quyết kịp thời xung đột lợi ích.`,lifeLesson:"Bí quyết hợp tác kinh doanh bền vững là triết lý Win-Win (cùng thắng); chèn ép hay tước đoạt lợi ích của đối tác sớm muộn cũng dẫn tới đổ vỡ và thất bại."}]},{chapter:6,chapterCode:"CHƯƠNG 6",chapterTitle:"Công Nghiệp Hóa, Hiện Đại Hóa & Hội Nhập Kinh Tế Quốc Tế Của Việt Nam",badge:"VIỆT NAM 4.0 & TOÀN CẦU",accentColor:"#0891b2",accentBg:"rgba(8, 145, 178, 0.08)",accentBorder:"rgba(8, 145, 178, 0.35)",topics:[{code:"6.1.1",title:"Khái quát về cách mạng công nghiệp (CMCN 1.0 – 4.0) và công nghiệp hóa",summary:`• Cách mạng công nghiệp là những bước phát triển nhảy vọt về chất trong trình độ của tư liệu lao động, kéo theo thay đổi căn bản về phân công lao động xã hội và tạo năng suất lao động đột phá.
• Lịch sử 4 cuộc CMCN:
  1. CMCN 1.0 (cuối TK XVIII – giữa TK XIX): Cơ giới hóa bằng động cơ hơi nước và máy dệt.
  2. CMCN 2.0 (nửa cuối TK XIX – đầu TK XX): Điện khí hóa, động cơ đốt trong và dây chuyền sản xuất hàng loạt.
  3. CMCN 3.0 (từ thập niên 1960): Tự động hóa, máy tính điện tử, Internet và công nghệ thông tin.
  4. CMCN 4.0 (từ đầu TK XXI đến nay): Không gian mạng kết hợp vật lý (Cyber-Physical Systems), Trí tuệ nhân tạo (AI), Dữ liệu lớn (Big Data), Internet vạn vật (IoT), Điện toán đám mây và Công nghệ sinh học.
• Vai trò CMCN: Thúc đẩy LLSX phát triển vượt bậc, biến đổi căn bản QHSX và phương thức quản trị quốc gia.`,lifeLesson:"Mỗi cuộc CMCN đều loại bỏ những công việc thủ công lặp lại; muốn không bị đào thải, bạn phải liên tục làm chủ công nghệ mới và rèn luyện kỹ năng tư duy độc lập sáng tạo."},{code:"6.1.2",title:"Tính tất yếu khách quan và nội dung của CNH, HĐH ở Việt Nam",summary:`• Tính tất yếu khách quan: (1) CNH là quy luật phổ biến để xây dựng cơ sở vật chất - kỹ thuật cho CNXH; (2) Yêu cầu cấp bách rút ngắn khoảng cách tụt hậu, vượt qua bẫy thu nhập trung bình; (3) Tận dụng thời cơ vàng của CMCN 4.0 để đi tắt đón đầu.
• Nội dung CNH, HĐH ở Việt Nam thời kỳ mới:
  - Chuyển đổi căn bản sang sản xuất hiện đại dựa trên khoa học công nghệ và đổi mới sáng tạo.
  - Đẩy mạnh công nghiệp hóa gắn với kinh tế tri thức và CHUYỂN ĐỔI SỐ QUỐC GIA.
  - Chuyển dịch cơ cấu kinh tế theo hướng hiện đại, hợp lý và hiệu quả; nâng cao tỷ trọng công nghiệp chế tạo công nghệ cao và dịch vụ số.
  - Từng bước hoàn thiện quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất.`,lifeLesson:'Chuyển từ tư duy "làm thuê gia công giá rẻ" sang làm chủ công nghệ lõi và đổi mới sáng tạo để chiếm lĩnh các khâu có giá trị gia tăng cao nhất trong chuỗi giá trị toàn cầu.'},{code:"6.2.1",title:"Khái niệm và các hình thức hội nhập kinh tế quốc tế",summary:`• Khái niệm: Hội nhập kinh tế quốc tế là quá trình gắn kết nền kinh tế của một quốc gia với nền kinh tế khu vực và thế giới thông qua các nỗ lực tự do hóa thương mại, mở cửa thị trường và tham gia phân công lao động quốc tế.
• 5 hình thức hội nhập từ thấp đến cao:
  1. Thỏa thuận thương mại ưu đãi (PTA).
  2. Khu vực mậu dịch tự do (FTA) - đặc biệt các FTA thế hệ mới như CPTPP, EVFTA, RCEP (tiêu chuẩn cao về lao động, môi trường ESG, sở hữu trí tuệ).
  3. Liên minh thuế quan (Customs Union).
  4. Thị trường chung (Common Market).
  5. Liên minh kinh tế - tiền tệ (Economic and Monetary Union).`,lifeLesson:'Làm ăn trong thời kỳ toàn cầu hóa đòi hỏi bạn phải nắm vững "luật chơi quốc tế" (tiêu chuẩn xuất xứ hàng hóa, tiêu chuẩn lao động, tiêu chuẩn xanh) để tự tin vươn ra biển lớn.'},{code:"6.2.2",title:"Tác động hai mặt của hội nhập kinh tế quốc tế đến quá trình phát triển của Việt Nam",summary:`Hội nhập là quá trình mang tính hai mặt biện chứng rõ rệt:
• Tác động tích cực (Cơ hội):
  - Mở rộng thị trường xuất khẩu, thu hút mạnh mẽ vốn đầu tư trực tiếp nước ngoài (FDI).
  - Tiếp thu công nghệ tiên tiến, kỹ năng quản lý hiện đại, nâng cao chất lượng nguồn nhân lực.
  - Thúc đẩy cải cách thể chế kinh tế trong nước theo chuẩn mực quốc tế, tạo thêm nhiều việc làm.
• Tác động tiêu cực và thách thức:
  - Cạnh tranh khốc liệt khiến các doanh nghiệp yếu kém trong nước có nguy cơ giải thể, phá sản.
  - Nguy cơ phụ thuộc vào thị trường bên ngoài và chuỗi cung ứng dễ đứt gãy.
  - Gia tăng phân hóa giàu nghèo, sức ép về ô nhiễm môi trường và an ninh dữ liệu quốc gia.`,lifeLesson:"Phải luôn có tư duy phòng ngừa rủi ro; tận dụng tối đa cơ hội từ mở cửa nhưng đồng thời phải chủ động xây dựng hàng rào năng lực nội tại để chống sốc trước các biến động địa chính trị."},{code:"6.2.3",title:"Phương hướng nâng cao hiệu quả hội nhập & Xây dựng nền kinh tế độc lập, tự chủ",summary:`• Phương hướng nâng cao hiệu quả hội nhập:
  1. Nhận thức đúng đắn về xu thế khách quan của hội nhập; đa phương hóa, đa dạng hóa đối tác thương mại.
  2. Hoàn thiện đồng bộ hệ thống pháp luật tương thích chuẩn mực quốc tế.
  3. Nâng cao năng lực cạnh tranh quốc gia và năng lực chống chịu của doanh nghiệp trong nước.
• Xây dựng nền kinh tế độc lập, tự chủ:
  - Bản chất: Không bị lệ thuộc hay bị khống chế về đường lối kinh tế, dựa trên nội lực vững chắc (tự chủ về an ninh lương thực, năng lượng, tài chính, công nghệ lõi) kết hợp với sức mạnh thời đại.
  - Mối quan hệ biện chứng: NỘI LỰC LÀ QUYẾT ĐỊNH, NGOẠI LỰC LÀ QUAN TRỌNG. Độc lập tự chủ là tiền đề để hội nhập bình đẳng; ngược lại, hội nhập hiệu quả tạo nguồn lực để củng cố nền độc lập tự chủ.`,lifeLesson:'"Độc lập tự chủ" thời đại 4.0 không phải là đóng cửa tự cung tự cấp, mà là làm chủ công nghệ và năng lực cốt lõi để đứng vững trên đôi chân của chính mình trong mọi cuộc đàm phán toàn cầu.'}]}];function Dn(i,n){let h="all",a="";const t=on.reduce((T,M)=>T+M.topics.length,0);function e(){return on.map(T=>{if(h!=="all"&&T.chapter!==parseInt(h))return null;const M=a.toLowerCase().trim();if(!M)return T;const G=T.topics.filter(d=>d.title.toLowerCase().includes(M)||d.code.toLowerCase().includes(M)||d.summary.toLowerCase().includes(M)||d.lifeLesson.toLowerCase().includes(M));return G.length===0&&!T.chapterTitle.toLowerCase().includes(M)?null:{...T,topics:G.length>0?G:T.topics}}).filter(Boolean)}function s(){const T=e();let M="";T.length===0?M=`
        <div style="text-align: center; padding: 3rem 1.5rem; background: var(--bg-alt); border-radius: var(--radius-lg); border: 1.5px dashed var(--border-subtle); margin: 1.5rem 0;">
          <div style="font-size: 2.5rem; margin-bottom: 0.75rem;">🔍</div>
          <h4 style="font-size: 1.15rem; color: var(--text-heading); font-family: var(--font-heading); margin-bottom: 0.4rem;">
            Không tìm thấy chuyên đề phù hợp với "${a}"
          </h4>
          <p style="color: var(--text-muted); font-size: 0.92rem; margin: 0;">
            Hãy thử tìm các từ khóa như: <em>giá trị thặng dư, tích lũy, thể chế, độc quyền, ESG, 5.1.3</em>
          </p>
        </div>
      `:T.forEach(d=>{let N="";d.topics.forEach(I=>{const $=I.summary.split(`
`).map(w=>{const P=w.trim();if(!P)return"";if(P.startsWith("•")||P.startsWith("-")){const U=P.replace(/^[•\-]\s*/,"");return`
                <div class="handbook-bullet-point">
                  <span class="bullet-dot" style="background: ${d.accentColor};"></span>
                  <span class="bullet-text">${U}</span>
                </div>
              `}return`<p class="handbook-paragraph">${P}</p>`}).join("");N+=`
            <article class="handbook-topic-card" style="--card-accent: ${d.accentColor};">
              <div class="handbook-topic-head">
                <span class="handbook-code-badge" style="background: ${d.accentBg}; color: ${d.accentColor}; border: 1.5px solid ${d.accentBorder};">
                  MỤC ${I.code}
                </span>
                <h4 class="handbook-topic-title">
                  ${I.title}
                </h4>
              </div>

              <div class="handbook-theory-body">
                <div class="theory-section-label" style="color: ${d.accentColor};">
                  <span>📖</span>
                  <span>LÝ LUẬN &amp; TRỌNG TÂM BÀI GIẢNG:</span>
                </div>
                <div class="handbook-summary-text">
                  ${$}
                </div>
              </div>

              <div class="handbook-life-box">
                <div class="handbook-life-label">
                  <span>💡</span>
                  <span>VẬN DỤNG VÀO THỰC TIỄN &amp; BÀI HỌC ĐỜI SỐNG:</span>
                </div>
                <p class="handbook-life-desc">
                  ${I.lifeLesson}
                </p>
              </div>
            </article>
          `}),M+=`
          <div class="handbook-chapter-block">
            <div class="handbook-chapter-header" style="border-bottom: 2px solid ${d.accentBorder};">
              <div>
                <span class="badge-pill ch-head-pill" style="background: ${d.accentBg}; color: ${d.accentColor}; border: 1.5px solid ${d.accentBorder};">
                  ✦ ${d.chapterCode} • ${d.badge}
                </span>
                <h3 class="handbook-chapter-title">
                  ${d.chapterTitle}
                </h3>
              </div>
              <span class="badge-pill ch-count-pill">
                ${d.topics.length} chuyên đề
              </span>
            </div>
            <div class="handbook-topics-list">
              ${N}
            </div>
          </div>
        `});const G=document.getElementById("handbook-content-container");G&&(G.innerHTML=M)}let g=`
    <button class="handbook-tab-btn ${h==="all"?"active":""}" data-ch="all">
      Tất cả (${t})
    </button>
  `;on.forEach(T=>{g+=`
      <button class="handbook-tab-btn ${h===String(T.chapter)?"active":""}" data-ch="${T.chapter}" style="--tab-color: ${T.accentColor};">
        Chương ${T.chapter} (${T.topics.length})
      </button>
    `}),i.innerHTML=`
    <div class="handbook-fullscreen-overlay open" id="handbook-modal-overlay">
      <div class="handbook-fullscreen-page" id="handbook-print-area">
        <!-- Sticky Top Navigation Bar -->
        <header class="handbook-top-navbar">
          <div class="handbook-header-left">
            <button class="handbook-back-pill" id="handbook-back-btn" title="Quay lại bản đồ (Esc)">
              <span>← Đóng &amp; Quay lại bản đồ</span>
            </button>
          </div>
          <div class="handbook-top-title">
            <span>SỔ TAY KINH TẾ CHÍNH TRỊ MÁC – LÊNIN • MLN122</span>
          </div>
          <div class="handbook-top-actions">
            <button class="handbook-action-btn" id="handbook-print-btn" title="In / Lưu PDF">
              <span>🖨️ In / Lưu PDF</span>
            </button>
            <button class="handbook-close-x-btn" id="handbook-close-btn" title="Đóng sổ tay (Esc)">✕</button>
          </div>
        </header>

        <!-- Main Scrollable Fullscreen Container -->
        <main class="handbook-main-content">
          <!-- Header Hero Banner -->
          <div class="handbook-hero-head">
            <div class="handbook-header-badge">
              <span class="badge-pill" style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.15), rgba(139, 92, 246, 0.15)); color: var(--accent-blue); border: 1.5px solid rgba(37, 99, 235, 0.35); font-weight: 800; font-family: var(--font-heading);">
                📚 MLN122 • KHO TRI THỨC TOÀN DIỆN
              </span>
              <span class="cert-sub-tag">
                Cập nhật chuẩn Giáo trình chuẩn &amp; Giáo trình BGD&amp;ĐT
              </span>
            </div>
            <h1 class="handbook-modal-title">Sổ Tay Kinh Tế Chính Trị Bỏ Túi</h1>
            <p class="handbook-modal-subtitle">
              Hệ thống hóa toàn bộ ${t} chuyên đề cốt lõi của 6 chương MLN122. Từ bản chất quy luật giá trị thặng dư đến thể chế KTTT định hướng XHCN và chiến lược độc lập tự chủ 4.0.
            </p>
          </div>

          <!-- Sticky Search & Filter Controls -->
          <div class="handbook-controls-wrap">
            <div class="handbook-search-bar">
              <span class="search-icon">🔍</span>
              <input 
                type="text" 
                id="handbook-search-input" 
                class="handbook-input" 
                placeholder="Tìm kiếm chuyên đề, khái niệm, công thức (ví dụ: 5.1.3, thặng dư, thể chế, độc quyền, ESG)..." 
                value="${a}"
                autocomplete="off"
              />
              <button id="handbook-clear-search" class="search-clear-btn" style="display: none;" title="Xóa tìm kiếm">✕</button>
            </div>

            <!-- Chapter Navigation Tabs -->
            <div class="handbook-tabs-scroller" id="handbook-tabs-row">
              ${g}
            </div>
          </div>

          <!-- Main Dynamic Topics Container (1 Single Native Page Scrollbar) -->
          <div class="handbook-topics-container" id="handbook-content-container">
            <!-- Injected via renderContent() -->
          </div>

          <!-- Bottom Action Bar -->
          <footer class="handbook-bottom-bar">
            <button class="btn-primary" id="handbook-done-btn">
              <span>✕ ĐÓNG SỔ TAY TRI THỨC</span>
            </button>
          </footer>
        </main>
      </div>
    </div>
  `,s(),document.getElementById("handbook-modal-overlay");const p=document.getElementById("handbook-close-btn"),m=document.getElementById("handbook-back-btn"),v=document.getElementById("handbook-done-btn"),o=document.getElementById("handbook-print-btn"),r=document.getElementById("handbook-search-input"),u=document.getElementById("handbook-clear-search"),q=document.getElementById("handbook-tabs-row");q.addEventListener("click",T=>{const M=T.target.closest(".handbook-tab-btn");M&&(l.playClick(),h=M.getAttribute("data-ch"),q.querySelectorAll(".handbook-tab-btn").forEach(G=>G.classList.remove("active")),M.classList.add("active"),s())}),r.addEventListener("input",T=>{a=T.target.value,u.style.display=a?"inline-flex":"none",s()}),u.addEventListener("click",()=>{r.value="",a="",u.style.display="none",r.focus(),s()});function k(){l.playClick(),document.body.style.overflow="",window.removeEventListener("keydown",b),n()}function b(T){T.key==="Escape"&&k()}window.addEventListener("keydown",b),p&&p.addEventListener("click",k),m&&m.addEventListener("click",k),v&&v.addEventListener("click",k),o&&o.addEventListener("click",()=>{l.playClick(),window.print()})}function yn(i,n,h){if(!n){i.innerHTML="";return}i.innerHTML=`
    <div class="badge-popup-overlay" id="badge-popup-backdrop">
      <div class="badge-popup-card">
        <div class="badge-popup-icon">${n.icon}</div>
        <div style="font-size: 0.82rem; font-weight: 800; letter-spacing: 0.1em; color: var(--text-dim); text-transform: uppercase; font-family: var(--font-heading);">
          🎉 BẠN VỪA MỞ KHÓA HUY HIỆU MỚI!
        </div>
        <h3 class="badge-popup-title">${n.name}</h3>
        <div style="font-size: 0.98rem; color: var(--accent-gold); font-weight: 800; margin-bottom: 0.85rem; font-family: var(--font-heading);">
          ${n.nameVi}
        </div>
        <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.65; margin-bottom: 1.8rem;">
          ${n.desc}
        </p>
        <button class="btn-primary" id="claim-badge-btn" style="width: 100%; justify-content: center; padding: 0.85rem 1.8rem; font-size: 1rem;">
          <span>TUYỆT VỜI, TIẾP TỤC!</span>
        </button>
      </div>
    </div>
  `,document.getElementById("claim-badge-btn").addEventListener("click",()=>{l.playClick(),h()}),document.getElementById("badge-popup-backdrop").addEventListener("click",a=>{a.target.id==="badge-popup-backdrop"&&(l.playClick(),h())})}const kn=document.getElementById("navbar-container"),Y=document.getElementById("main-content-container"),tn=document.getElementById("modal-container"),W=document.getElementById("popup-container"),An=localStorage.getItem("mln122_theme")||"light";document.documentElement.setAttribute("data-theme",An);let A="landing",un=null,pn=null;function Tn(){const i=window.location.hash.replace(/^#\/?/,"").trim();if(!i||i==="landing")return{view:"landing",param:null};const n=i.split("/");return{view:n[0],param:n[1]||null}}function B(i,n=null,h=!0){if(A=i,window.scrollTo({top:0,behavior:"smooth"}),i==="scenario"?(un=n,(n==="C2-M3-SLIDER"||n==="C3-M3-SLIDER")&&(A="slider")):i==="detective"&&(pn=n||E[0].id),h){let a=`#${A}`;n&&A==="scenario"?a+=`/${n}`:n&&A==="detective"&&(a+=`/${n}`),window.location.hash!==a&&(window.location.hash=a)}En()}window.addEventListener("hashchange",()=>{const{view:i,param:n}=Tn();(i!==A||n!==(A==="scenario"?un:pn))&&B(i,n,!1)});function Pn(i){const n=z.findIndex(h=>h.id===i);if(n>=0&&n<z.length-1){const h=z[n+1];B("scenario",h.id)}else B("detective")}function Cn(i){document.body.style.overflow="hidden",i==="profile"?bn(tn,sn):i==="badges"?_n(tn,sn):i==="handbook"&&Dn(tn,sn)}function sn(){document.body.style.overflow="",tn.innerHTML=""}function qn(){H.state.xp>0||Object.keys(H.state.completedScenarios).length>0||Object.keys(H.state.detectiveSolved).length>0?confirm("Bạn có muốn làm lại từ đầu không? Toàn bộ tiến trình làm bài và điểm số sẽ được đặt lại về 0.")&&(H.resetProgress(),B("map")):(H.resetProgress(),B("map"))}function En(){dn(kn,B,Cn),A==="landing"?Sn(Y,B):A==="map"?vn(Y,i=>B("scenario",i),i=>B("detective",i),qn,()=>B("quiz")):A==="scenario"?In(Y,un,()=>B("map"),Pn):A==="slider"?Bn(Y,()=>B("map")):A==="detective"?Kn(Y,pn,()=>B("map"),i=>B("detective",i)):(A==="quiz"||A==="game"||A==="tycoon")&&$n(Y,()=>B("map")),H.state.activeBadgePopup?yn(W,H.state.activeBadgePopup,()=>{H.dismissBadgePopup(),W.innerHTML=""}):W.innerHTML=""}H.subscribe(()=>{dn(kn,B,Cn),A==="map"&&vn(Y,i=>B("scenario",i),i=>B("detective",i),qn,()=>B("tycoon")),H.state.activeBadgePopup&&yn(W,H.state.activeBadgePopup,()=>{H.dismissBadgePopup(),W.innerHTML=""})});document.addEventListener("DOMContentLoaded",()=>{const{view:i,param:n}=Tn();B(i,n,!1)});
