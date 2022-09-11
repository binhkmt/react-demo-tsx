# Luyện tập ReactJS với ứng dụng tạo ghi chú

Mục đích luyện tập:

- Redux Toolkit
- Chia module clean
- Tạo kiến trúc ứng dụng performance, clean (kinh nghiệm từ Angular)

Tham khảo:
https://github.com/grafana/grafana/blob/main/public/app

https://github.com/HospitalRun/hospitalrun-frontend/tree/master/src

## Cấu trúc

components: những thành phần được tái sử dụng lại

core: dependency, dùng chung

shared: thành phần dùng chung như utils, hook

Route: core/routes tổng hợp route trong dự án

features: /features chia theo module chức năng. mỗi module có các view, component, model cục bộ (không chia sẻ ra bên ngoài)

sdk: những api, model (DTO) mà BE hỗ trợ

convention: theo mẫu

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

### `npm test`

### `npm run build`
