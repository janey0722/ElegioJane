$(function () {

    $("#loginForm").on("submit", function (e) {
        e.preventDefault(); 

        let email = $("#email").val().trim();
        let password = $("#password").val().trim();
        let remember = $("#rememberMe").is(":checked");

       
        if (email === "" || password === "") {
            Swal.fire({
                icon: "warning",
                title: "Missing Details",
                text: "Please fill in both email and password fields.",
                confirmButtonColor: "#3085d6"
            });
            return; 
        }

       
        if (!email.includes("@") || !email.includes(".")) {
            Swal.fire({
                icon: "error",
                title: "Invalid Email",
                text: "Please enter a valid email address (e.g., name@example.com)."
            });
            return; 
        }

        Swal.fire({
            title: "Signing in...",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        setTimeout(() => {
            Swal.fire({
                icon: "success",
                title: "Login Successful",
                text: remember ? "We’ll remember you!" : "Welcome back!",
                timer: 2000,
                showConfirmButton: false
            }).then(() => {
                window.location.href = "main.html";
            });
        }, 1500);
    });
    $("#forgotPassword").click(function (e) {
        e.preventDefault();

        Swal.fire({
            icon: "info",
            title: "Forgot Password?",
            text: "",
            confirmButtonText: "Got it"
        });
    });

});