# Git

## Question 1: When we are creating new feature, what branch should we based on and why?

Khi phát triến 1 tính năng mới thì nên dựa vào branch master. Vì:

- Tính năng mới cần thử nghiệm và sửa lỗi khi cần thiết.

- Phát triển trên branch master để kiểm tra tính năng mới và sự tương thích của tính năng với project.

- Đảm bảo tình ổn định của production (các tính năng mới được test kỹ trước khi đưa lên production).

## Question 2: If we have a feature branch that haven't been merged to production and that branch have bug, what course of action are you going to do with Git to before resolving the bug?

Có 2 cách để giải quyết việc này: fix bug trực tiếp trên branch và tách 1 branch mới ra để thực hiện việc fix bug

TH1:

- Bug nhỏ không làm ảnh hường tới việc vận hành và tiếp tục phất triển feature.

- Có thể giài quyết bug trong thời gian ngắn

==> Thực hiện giải quyết trực tiếp trên nhánh feature.

Chuẩn bị trước khi xử lý bug:

- Tạm dừng việc phất triển tính năng, cập nhật code

- Commit tất cả các thay đổi hiện tại trên nhanh lại để tránh việc mất code.

```git
  git add .
  git commit -m "Temporary code store"
```

TH2:

- Bug nghiêm trọng làm ảnh hường tới việc vận hành và tiếp tục phất triển feature.

- Tốn nhiều thời gian để giải quyết

==> Thực hiện phân nhánh để fix bug.

Chuẩn bị trước khi xử lý bug:

- Commit tất cả các thay đổi hiện tại trên nhanh lại để tránh việc mất code.

```git
  git add .
  git commit -m "Temporary code store"
```

- tạo 1 branch mới cho việc fixbug

```git
  git checkout -b "fix/issus..."
```

## Question 3: If someone accidentally merge a feature (feature/delete-user) onto production and have a list of commitId ended with (0492978, fc9348c, k101100), then another commit (a1fsas8) is added on top of the production branch. How do we remove that merged feature?

Hướng giải quyết: thực hiện revert về commit trước khi merge.

Thực hiện:

1. Tìm commit của nhánh ngay trước khi merge bắt đầu với git reflog.

```git
 git reflog
```

2. Sử dụng git revert để tạo 1 revert commit cho commit trước khi merge diễn ra. (-m 1 để xác định mainline trong merge và nhánh nào cần được giữ lại)

```git
 git revert -m 1 <commit_hash> or HEAD@{1}
```

3. Giải quyết đụng độ nếu có (Xảy ra giữa snapshot commit cũ và commit mới nhất của nhánh)

```git
 git add .
 git revert --continue
```

Problem: Khi thực hiện cách trên thì chúng ta phải xử lý việc commit revert vừa tạo ra có conflict với commit trước đó của code (a1fsas8). Commit trước đó có chứa nội dung của vệc merge và phần update ta phải xác định các đoạn code của đê tách các phần code conflit ra.

Nhược điểm:
Khi thực hiện việc revert về cơ bản thì nhánh feature/delete-user đã được merge vào trong nhánh master Vậy nên không thể merge lại 1 lần nữa. Nếu sau này nhánh feature/delete-user có phát triển thêm và merge lại thì chỉ có những commit mới cập nhật được merge vào nhánh chính.

### Question 4: Compare git rebase interactive & git reset

Điểm chung:

- Đều được sử dụng đẻ thay đổi lịch sử commit.
- Thay đổi dựa trên các commit cũ.

reset:

- Trực tiếp đưa con trỏ của nhánh về commit nào đó.
- Loại bỏ các commit không cần thiết.
