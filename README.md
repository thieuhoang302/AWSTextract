
[![Header](https://d1.awsstatic.com/Getting%20Started/tutorials/tutorial-textract-extract-forms.c3a434233cbecbfe011b26e10eed2627826eccfe.png "Header")](https://github.com/thieuhoang302/AWSTextract/)
# Tên đề tài: ỨNG DỤNG AWS TEXTRACT

# Xin chào! <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="30px">
## Nhóm 26:
    1. Thiều Văn Hoàng          18128015 
    
    2. Hà Đức Anh               18110188
## &#x270d; Giới thiệu đề tài

AWS Textract là một dịch vụ dựa trên học sâu, chuyển đổi các loại tài liệu khác nhau thành định dạng có thể chỉnh sửa.
Đưa ra ví dụ để hiểu rõ hơn: Ta có bản sao cứng của hóa đơn từ các công ty khác nhau và lưu trữ tất cả các thông tin quan trọng từ họ trên excel / bảng tính. Thông thường, ta dựa vào các nhà khai thác nhập dữ liệu để nhập chúng theo cách thủ công, điều này rất bận rộn, tốn thời gian và dễ bị lỗi. Nhưng sử dụng Textract, tất cả những gì chúng ta cần làm là tải hóa đơn lên nó và lần lượt, nó trả về tất cả các văn bản, biểu mẫu, cặp giá trị chính và bảng trong các tài liệu theo cách có cấu trúc hơn.
## 🔧 Technologies & Tools
![](https://img.shields.io/badge/OS-Window-informational?style=flat&logo=windows&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Editor-Visual_Studio_Code-informational?style=flat&logo=visualstudio&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=javascript&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-Make-informational?style=flat&logo=cmake&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-Reactjs-informational?style=flat&logo=react&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-Express.js-informational?style=flat&logo=express&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Tools-Bootstrap-informational?style=flat&logo=bootstrap&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Cloud-S3_Storage-informational?style=flat&logo=amazon-aws&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Cloud_Service-AWS_Textract-informational?style=flat&logo=amazon-aws&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Cloud-IAM-informational?style=flat&logo=amazon-aws&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Cloud-S3_Storage-informational?style=flat&logo=amazon-aws&logoColor=white&color=2bbc8a)

## 🚀 Hướng dẫn sử dụng:
    Bước 1: Tạo IAM có các quyền sử dụng Storage S3 và dịch vụ AWS Textract của AWS theo mục 2.2.2.1 tại báo cáo (file docx)
    Bước 2: Tạo file .env tại folder server chứa các thông tin sau:
            - JWTSECRET=YOUR SECRET KEY
            - S3ACCESSKEYID=S3 ACCESS KEY ID
            - S3SECRETKEY=S3 SECRET KEY
            - S3BUCKET=S3 BUCKET NAME
            - S3SREGION=REGION
            (Các thông tin được lấy từ AWS của cá nhân)
    Bước 3: Cài đặt các dependencies bằng lệnh yarn install tại 2 folder BE và FE và yarn start để chạy cả 2
            🔨Run Client: AWSTextract
            $ yarn install
            $ yarn start

            🔨Run Server: AWSTextract\server
            $ AWSTextract> cd server
            $ yarn install
            $ yarn start
    Trải nghiệm ứng dụng...
