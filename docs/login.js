/**
 * login.js — 登录表单交互逻辑
 * 功能：点击登录按钮时校验输入并弹出自定义对话框
 */

(function () {
    "use strict";

    // ========== 获取 DOM 元素 ==========
    const loginForm    = document.getElementById("loginForm");
    const usernameEl   = document.getElementById("username");
    const passwordEl   = document.getElementById("password");

    const modalOverlay = document.getElementById("modalOverlay");
    const modalTitle   = document.getElementById("modalTitle");
    const modalMessage = document.getElementById("modalMessage");
    const modalCloseBtn = document.getElementById("modalCloseBtn");

    // ========== 对话框控制函数 ==========
    function showModal(title, message) {
        modalTitle.textContent   = title;
        modalMessage.textContent = message;
        modalOverlay.classList.add("active");
    }

    function hideModal() {
        modalOverlay.classList.remove("active");
    }

    // ========== 登录处理逻辑 ==========
    function handleLogin(event) {
        event.preventDefault(); // 阻止表单默认提交（防止页面刷新）

        const username = usernameEl.value.trim();
        const password = passwordEl.value;

        // 1. 非空校验
        if (!username) {
            showModal("⚠️ 提示", "用户名不能为空！");
            usernameEl.focus();
            return;
        }
        if (!password) {
            showModal("⚠️ 提示", "密码不能为空！");
            passwordEl.focus();
            return;
        }

        // 2. 模拟登录校验
        //    实际项目中此处应调用后端 API（如 fetch("/api/login", {...})）
        const VALID_USER = "admin";
        const VALID_PASS = "123456";

        if (username === VALID_USER && password === VALID_PASS) {
            showModal("✅ 登录成功", `欢迎回来，${username}！`);
        } else {
            showModal("❌ 登录失败", "用户名或密码错误，请重试。");
        }
    }

    // ========== 绑定事件 ==========
    loginForm.addEventListener("submit", handleLogin);

    // 点击"确定"关闭对话框
    modalCloseBtn.addEventListener("click", hideModal);

    // 点击遮罩层空白处关闭对话框
    modalOverlay.addEventListener("click", function (e) {
        if (e.target === modalOverlay) {
            hideModal();
        }
    });

    // 按 ESC 键关闭对话框
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            hideModal();
        }
    });
})();
