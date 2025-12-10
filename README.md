
# 流光漫剧 (Liuguang ScriptViz) - 桌面版

这是一个基于 Python Flask + React 的桌面应用程序。

## 核心文件说明
- `main.py`: Python 后端，负责启动窗口和转发 API 请求。
- `index.html`: 前端界面，包含所有 React 逻辑。
- `requirements.txt`: Python 依赖库。

## 运行步骤

1. **安装环境**：
   确保已安装 Python，然后安装依赖：
   ```bash
   pip install -r requirements.txt
   ```

2. **启动应用**：
   ```bash
   python main.py
   ```

## 常见问题
- 如果双击 `index.html` 打开，API 请求会失败（跨域错误）。请务必通过 `python main.py` 运行。
- 如果点击“创建”没反应，请检查 Python 控制台是否有报错。
- 如果界面白屏，请右键 -> Inspect (检查) -> Console 查看前端报错。

## 打包成 .exe (Windows)

```bash
pyinstaller --noconfirm --onefile --windowed --name "LiuguangApp" --add-data "index.html;." main.py
```
