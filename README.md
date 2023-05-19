# ỐC ĐẢO QUÁN (FMS)
# Introduction
    Sử dụng design pattern DDD (Domain driven Partten)
    Phân Domain theo các miền sau:
        + Order
            + Order: Lưu đơn
            + Order Detail: Lưu chi tiết các món trong hóa đơn
        + Table
            + Table: Lưu số bàn của quán
            + Table Log: Lưu trữ trạng thái của bàn theo thời gian
        + Food
            + Food: Thức ăn, thức uống trong quán
            + Formula: Công thức để làm ra món ăn 
            + Material: Nguyên liệu làm ra món ăn
# Struct Project
    + Application: Chứa đựng các service sử dụng chuẩn Resfull API cho các bảng ở trên
    + Core: Khởi tạo các model nhằm xây dụng các service và xây dựng database
    + EntityFrameWork: Lưu trử, quản lý các mặt về database
## Note
    Dự án được xậy dựng dựa trên Template của ASP FrameWork
    Link: https://aspnetboilerplate.com/
    Những phần template hỗ trợ bao gồm:
        + Include login, register, user
        + Role and tenant management pages.
 
# Download

Create & download your project from https://aspnetboilerplate.com/Templates


